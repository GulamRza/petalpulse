
import AnswerBox from './AnswerBox';
import { prisma } from '@/app/utils/prisma';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';


export async function generateMetadata({ params }: { params: Promise<{ threadId: string }> }): Promise<Metadata>{
  const { threadId } = await params;

  const thread = await prisma.thread.findUnique({ where: { id: threadId }, select: { title : true, content: true, tags: {select: { tag : true }} } });

  return {
    title: thread?.title || 'Forum',
    description: thread?.content.substring(0, 80) + '...',
    keywords: thread?.tags.map(threadTag => (threadTag.tag.name))
  }
}


const Thread = async ({ params }: { params: Promise<{ threadId: string }> }) => {

  const { threadId } = await params;

  const thread = await prisma.thread.findUnique({
    where: {
      id: threadId
    },
    include: {
      author: {
        select: {
          id: true,
          name: true
        }
      },
      answers: {
        select: {
          id: true,
          createdAt: true,
          content: true,
          user: {
            select: {
              id: true,
              name: true
            }
          }
        }
      },
      tags: {
        select: {
          tag: {
            select: {
              id: true,
              name: true
            }
          }
        }
      }
    }
  })

  if (!thread) { notFound() }


  return (
    <div className="min-h-screen lg:my-4 lg:rounded-lg overflow-hidden flex-grow bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Thread Header */}
      <div className="bg-white dark:bg-gray-800 p-6">
        <h1 className="text-2xl font-bold text-green-600">{thread.title}</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          Posted by <Link href={`/profile/${thread.author.id}`} className='hover:underline'>{thread.author.name}</Link> on {new Date(thread.createdAt).toDateString()}
        </p>
        <p className="mt-4 text-gray-800 dark:text-gray-300">{thread.content}</p>
      </div>

      {/* Most Liked Answers */}
      <div className="bg-white dark:bg-gray-800 p-6">
        <h2 className="text-xl font-semibold text-green-600">Most Liked Answers</h2>
        <div className="mt-4 space-y-4">
          {thread.answers.map((answer: any) => (
            <div
              key={answer.id}
              className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-gray-900"
            >
              <p className="text-sm text-gray-600 dark:text-gray-400">
                By <Link href={`/profile/${answer.user.id}`} className='hover:underline'>{answer.user.name}</Link> on {new Date(answer.createdAt).toDateString()}
              </p>
              <p className="mt-2 text-gray-800 dark:text-gray-300">
                {answer.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Answer Input Box */}
      <AnswerBox threadId={thread.id} />

    </div>
  )
};

export default Thread;


