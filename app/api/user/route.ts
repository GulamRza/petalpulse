import { prisma } from "@/app/utils/prisma";

export async function GET(request: Request){


    const users = await prisma.user.findMany({});



    return new Response(JSON.stringify({
        users
    }), {status : 200})
}


export async function POST(request: Request){
    const userdata = await request.json();

    const user = await prisma.user.create({
        data: userdata
    });

    if (!user){
        return new Response(JSON.stringify({
            msg: "failed"
        }), {status : 500}) 
    }

    return new Response(JSON.stringify({
        user
    }), {status : 201}) 
}