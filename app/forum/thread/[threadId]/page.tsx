"use client";

import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation'
import { useEffect, useState } from "react";
import { useSession } from 'next-auth/react';

const Thread = () => {
  const router = useRouter();
  const { threadId } = useParams()
  const [thread, setThread] = useState<any | null>(null);
  const { data: session } = useSession();

  useEffect(() => {
    (async function () {
      const response = await fetch('/api/thread/' + threadId);
      
      if (response.ok){
        const data = (await response.json()).thread;
        setThread(data);
      }else{
        setThread({
          title: "Not Found"
        })
      }
    })();
  }, [])

  const [newAnswer, setNewAnswer] = useState("");

  const handleAnswerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if(session?.user){
      const answer = {
        content: newAnswer, 
        threadId: threadId,
        userId : session?.user.id
      }

      const response = await fetch('/api/thread/answer', {
        method: "POST",
        body: JSON.stringify(answer)
      });

      if (response.ok){
        alert("success")
      }else{
        alert("unable to answer")
      }
      

    }else{
      router.push('/auth/sign-in');
    }
    setNewAnswer(""); // Clear the textarea after submission
  };

  return ( thread ? 
    <div className="min-h-screen flex-grow bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        {/* Thread Header */}
        <div className="bg-white dark:bg-gray-800 p-6">
          <h1 className="text-2xl font-bold text-green-600">{thread.title}</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Posted by {thread.author.name} on {thread.createdAt}
          </p>
          <p className="mt-4 text-gray-800 dark:text-gray-300">{thread.content}</p>
        </div>

        {/* New Answer Form */}
        <div className="bg-white dark:bg-gray-800 p-6 border-b dark:border-gray-700">
          <h2 className="text-xl font-semibold text-green-600">Your Answer</h2>
          <form onSubmit={handleAnswerSubmit} className="mt-4">
            <textarea
              className="w-full p-4 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
              rows={5}
              placeholder="Write your answer here..."
              value={newAnswer}
              onChange={(e) => setNewAnswer(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="mt-4 px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg"
            >
              Submit Answer
            </button>
          </form>
        </div>

        {/* Most Liked Answers */}
        <div className="bg-white dark:bg-gray-800 p-6 mb-4">
          <h2 className="text-xl font-semibold text-green-600">Most Liked Answers</h2>
          <div className="mt-4 space-y-4">
            {thread.answers.map((answer: any) => (
              <div
                key={answer.id}
                className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-gray-900"
              >
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {answer.user.name} • {answer.likes} likes
                </p>
                <p className="mt-2 text-gray-800 dark:text-gray-300">
                  {answer.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      : <div>Loading</div>
  ) 
};

export default Thread;
