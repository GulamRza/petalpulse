
import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = process.env.GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


async function FetchResult(imageUrl: string) {

  const imagedata = imageUrl.split(';')[1].split(',')[1];
  // console.log(imagedata);

  const result = await model.generateContent([
    {
      inlineData: {
        data: imagedata,
        mimeType: "image/png",
      },
    },
    'Can you check what happend to my plant? and how can I fix this? give some expert advise.',
  ]);

  return result.response.text();


}


export async function POST(request: Request){

    const { imageData }  = await request.json();
    const result = await FetchResult(imageData);


    return new Response(JSON.stringify({
        result
    }), {status: 200});
}