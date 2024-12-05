import { prisma } from "@/app/utils/prisma";


export async function POST(req: Request){
    const body = await req.json();

    const answer = await prisma.answer.create({
        data: body
    });

    if (!answer) {
        return new Response(JSON.stringify({
            msg: "failed"
        }))
    }

    return new Response(JSON.stringify({
        msg: "success",
        answer
    }))



}