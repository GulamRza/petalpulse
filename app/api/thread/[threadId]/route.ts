import { prisma } from '@/app/utils/prisma'; // Adjust the path to your Prisma instance

export async function GET(req: Request, { params }: { params: Promise<{ threadId: string }> }) {
    const { threadId } = await params;

    try {
        // Fetch the thread with its associated user and comments
        const thread = await prisma.thread.findUnique({
            where: {
                id: threadId,
            },
            include: {
                author: {
                    select: {
                        name: true
                    }
                },
                answers: {
                    select: {
                        id: true,
                        content: true,
                        user: {
                            select: {
                                name: true
                            }
                        }
                    }
                }
            }
        });

        if (!thread) {
            return new Response(JSON.stringify({ message: 'Thread not found' }), { status: 404 });
        }

        return new Response(JSON.stringify({ thread }), { status: 200 });
    } catch (error: any) {
        return new Response(JSON.stringify({ message: 'Enternal Server Error' }), { status: 500 });
    }
}
