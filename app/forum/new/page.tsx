// "use client";

import { notFound, redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { prisma } from "@/app/utils/prisma";

const NewThread = async () => {
  const session = await getServerSession(authOptions)

  const handleSubmit = async (formData: FormData) => {
    "use server";

    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const tagsStr = formData.get('tags') as string;

    if (!title || !content || !tagsStr || !session?.user) return;

    const tags = tagsStr.split(',').map(t => t.toLowerCase());

    const tagIds = await Promise.all(tags.map(async (name: string) => {
      const tag = await prisma.tag.findUnique({ where: {name} });
      if(!tag){ return (await prisma.tag.create({ data: {name} })).id }
      else{ return tag.id }
    }));


    const newThread = await prisma.thread.create({
      data: {
        title,
        content,
        authorId: session?.user.id,
        categoryId: '674ff4591b57b0a8c0955978',
        tags: { create: tagIds.map(id => ({tagId : id})) }
      }
    });

    if (newThread){ redirect('/forum/thread/'+newThread.id) }
    else { notFound() }
    

  };

  return (
    <div className="  flex-grow bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex  justify-center lg:py-4">
      <div className=" lg:rounded-lg max-w-4xl w-full bg-white dark:bg-gray-800 p-6">
        <h1 className="text-2xl font-bold text-green-600 mb-4">Post a New Thread</h1>
        <form action={handleSubmit} className="space-y-6">
          {/* Thread Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter your thread title"
              className="mt-1  p-2 block w-full rounded-md bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:outline-green-600"
              required
            />
          </div>

          {/* Thread Content */}
          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Content
            </label>
            <textarea
              name="content"
              placeholder="Write the details of your question or discussion here..."
              rows={10}
              className="mt-1 p-2 block w-full rounded-md bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:outline-green-600"
              required
            ></textarea>
          </div>

          {/* Tags */}
          <div>
            <label
              htmlFor="tags"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Tags (comma-separated)
            </label>
            <input
              type="text"
              name="tags"
              placeholder="e.g., plants, ferns, indoor gardening"
              className="mt-1 p-2 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:outline-green-600"
            />
          </div>

          {/* Submit Button */}
          <div className="text-right">
            <button
              type="submit"
              className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg"
            >
              Post Thread
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewThread;
