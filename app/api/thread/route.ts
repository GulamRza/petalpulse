import { prisma } from "@/app/utils/prisma";


export async function POST(request: Request) {

    const { title, content, authorId } = await request.json();

    const thread = await prisma.thread.create({
        data: { title, content, authorId, categoryId: '674ff4591b57b0a8c0955978' }
    });

    console.log(thread)


    return new Response(JSON.stringify({
        msg: "success",
        thread
    }), { status: 201 })
}

export async function GET(request: Request){

    const threads = await prisma.thread.findMany({
        include: {
            author: {
                select: { name: true }
            }
        },
        orderBy: {
            createdAt: 'desc'
        }
    });


    return new Response(JSON.stringify({
        msg: "success",
        threads
    }), { status: 201 })

}