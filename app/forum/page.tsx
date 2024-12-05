import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLike, AiOutlineComment, AiOutlineEye } from "react-icons/ai";
import { prisma } from "../utils/prisma";


const Forum = async () => {

  const questions: any[] = await prisma.thread.findMany({
    include: {
      author: {
        select: { name: true }
      }
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  // const questions: any[] = [];


  if (!questions) {
    return <>Error Occured</>
  }



  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Page Header */}
      <div className="flex flex-col lg:flex-row justify-between items-center p-6">
        <h1 className="text-2xl font-bold">All Questions</h1>
        <div className="flex flex-col lg:flex-row gap-2 items-center">
          <input
            type="text"
            placeholder="Search Question..."
            className=" lg:w-2/4 px-4 py-2  rounded-lg  dark:bg-gray-800 dark:border-gray-700 border border-gray-300 focus:outline-none"
          />
          <button className="bg-gray-700 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
            Search
          </button>
          <Link href='/forum/new' className="bg-lime-600 hover:bg-green-600 text-white p-2 rounded-md">Ask Question</Link>

        </div>


      </div>

      {/* Filters */}
      {/* <div className="flex items-center justify-between pb-4 p-6">
          <div>
            <span className="font-medium">24,237 questions</span>
          </div>
          <div className="flex gap-3 p-2 bg-gray-50 rounded-lg">
            <button className="p-1 px-2 bg-gray-200 dark:bg-gray-800 rounded-md">
              Newest
            </button>
            <button className="p-1 px-2 bg-gray-200 dark:bg-gray-800 rounded-md">
              Active
            </button>
            <button className="p-1 px-2 bg-gray-200 dark:bg-gray-800 rounded-md">
              Bountied
            </button>
            <button className="p-1 px-2 bg-gray-200 dark:bg-gray-800 rounded-md">
              Unanswered
            </button>
          </div>
        </div> */}

      {/* Questions List */}
      <div className="flex flex-col gap-2 pb-6">
        {questions.map((question: any) => (
          <div
            key={question.id}
            className="bg-white dark:bg-gray-800 p-4 border-gray-300 dark:border-gray-700 rounded transition-shadow"
          >
            <div className="f9lex justify-between items-start">
              <CgProfile className="text-2xl" />

              {/* Question Details */}
              <div className="ml-4 flex-grow">
                {/* Metadata */}
                <div className="flex gap-2 items-center text-sm text-gray-500 dark:text-gray-400">
                  <div>{question.author.name}</div>
                  {'-'}
                  <div>{String(question.createdAt)}</div>
                </div>

                <Link
                  href={`/forum/thread/${question.id}`}
                  className="text-left text-lg font-semibold text-green-600 hover:underline"
                >
                  {question.title}
                </Link>
                {/* <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {question.content}
                  </p> */}
                {/* <div className="flex gap-2 mt-2">
                    {question.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div> */}
                {/* Votes and Answers */}
                <div className=" flex gap-4 items-center p-2">
                  <div className="text-center">
                    <button><AiOutlineLike /></button>
                    {0}
                  </div>
                  <div className="text-right">
                    <button><AiOutlineComment /></button>
                    {0}
                  </div>
                  <div className="text-right">
                    <button><AiOutlineEye /></button>
                    {0}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;
