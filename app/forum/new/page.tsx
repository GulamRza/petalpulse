"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const NewThread = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  const router = useRouter();
  const {data: session} = useSession();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newThread = {
      title,
      content,
      tags: tags.split(",").map((tag) => tag.trim()),
      authorId : session?.user.id
    };

    
    // console.log(newThread)

    const response = await fetch("/api/thread", {
      method: "POST",
      body: JSON.stringify(newThread)
    });

    if (response.ok){
      const { thread } = await response.json();
      router.push('/forum/thread/' + thread.id);
    }else{
      alert("Faild To Post")
    }



    // Reset the form
    setTitle("");
    setContent("");
    setTags("");
  };

  return (
    <div className="  flex-grow bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex  justify-center">
      <div className=" rounded max-w-4xl w-full bg-white dark:bg-gray-800 p-6">
        <h1 className="text-2xl font-bold text-green-600 mb-4">Post a New Thread</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
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
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter your thread title"
              className="mt-1  p-2 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:ring-green-500 focus:border-green-500"
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
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write the details of your question or discussion here..."
              rows={6}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:ring-green-500 focus:border-green-500"
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
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="e.g., plants, ferns, indoor gardening"
              className="mt-1 p-2 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:ring-green-500 focus:border-green-500"
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
