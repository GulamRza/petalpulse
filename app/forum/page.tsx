
import Link from "next/link";
import { prisma } from "../utils/prisma";
import PaginationBar from "../Components/PaginationBar";

export const dynamic = 'force-dynamic';

const pageSize = 5;

const Forum = async (
  { searchParams }: 
  { searchParams?: Promise<any> | undefined
}) => {

  const totalSize = (await prisma.thread.aggregate({_count: { id: true }}))._count.id;
  const pageNumberStr = (await searchParams)?.page;
  const pageNumber = pageNumberStr ? parseInt(pageNumberStr) : 1;

  const questions: any[] = await prisma.thread.findMany({
    include: {
      author: {
        select: { name: true, id: true }
      },
      tags: {
        select: {
          tag: true
        }
      }
    },
    orderBy: {
      createdAt: 'desc'
    },
    skip: (pageNumber - 1) * pageSize,
    take: pageSize
  });


  if (!questions) {
    return <div>Error Occured</div>
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Page Header */}
      <div className="flex flex-col justify-between gap-4 p-6">

        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Newest Questions</h1>
          <Link href='/forum/new' className="bg-green-600 hover:bg-green-700 text-white p-2 px-4 rounded-md">Ask Question</Link>
        </div>
      </div>

      <QuestionList questions={questions} />

      <PaginationBar totalPages={Math.ceil(totalSize / pageSize)}  />

    </div>
  );
};


function QuestionList({ questions }: { questions: any[] }) {
  return (
    <div className="flex flex-col pb-6">
      {questions.map((question: any) => (
        <div
          key={question.id}
          className="bg-white dark:bg-gray-800 p-4 border-gray-300 dark:border-gray-700 lg:rounded transition-shadow border-b lg:border-none lg:mb-4"
        >
          <div className="flex justify-between items-start">
            {/* <CgProfile className="text-2xl" /> */}

            {/* Question Details */}
            <div className="ml-4 flex-grow">
              {/* Metadata */}
              <Link
                href={`/forum/thread/${question.id}`}
                className="text-left font-semibold text-green-600 hover:underline"
              >
                {question.title}
              </Link>

              <div className="flex gap-2 items-center text-sm text-gray-400 dark:text-gray-600">
                Asked By
                <Link
                  href={'/profile/' + question.author.id}
                  className="hover:underline"
                >{question.author.name}</Link>
                on
                <div>{new Date(question.createdAt).toDateString()}</div>
              </div>


              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {question.content.substring(0, 100)}...
              </p>

              {/* showing tags */}
              <div className="flex gap-2 mt-2 text-sm">
                {question.tags.map((tag: any) => (
                  <span
                    key={tag.tag.id}
                    className="px-2 py-1 text-xs bg-green-100 dark:bg-gray-700 rounded"
                  >
                    {tag.tag.name}
                  </span>
                ))}
              </div>

            </div>
          </div>
        </div>
      ))}
    </div>

  )
}


export default Forum;
