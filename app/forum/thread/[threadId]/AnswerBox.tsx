
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { prisma } from "@/app/utils/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


export default async function AnswerBox({ threadId } : { threadId : string }){

  // const [newAnswer, setNewAnswer] = useState("");
  const session = await getServerSession(authOptions);

  const handleAnswerSubmit = async (formData: FormData) => {
    "use server";

    const content = formData.get('answer') as string || '';

    if (!session?.user){
      redirect('/auth/sign-in');
    }

    else if(content.length){
      const answer = await prisma.answer.create({
        data: {
          content,
          threadId,
          userId: session.user.id
        }
      });
    }
    
  };


  return (
    <>
      {/* New Answer Form */}
      <div className="bg-white dark:bg-gray-800 p-6 border-b dark:border-gray-700">
          <h2 className="text-xl font-semibold text-green-600">Your Answer</h2>
          <form action={handleAnswerSubmit} className="mt-4">
            <textarea
              className="w-full p-4 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
              rows={5}
              placeholder="Write your answer here..."
              name="answer"
              // value={newAnswer}
              // onChange={(e) => setNewAnswer(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="mt-4 px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg"
            >
              Submit Answer
            </button>
          </form>
        </div>
    </>
  )
}
