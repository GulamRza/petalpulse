import { prisma } from '@/app/utils/prisma';

async function TestPage() {
    const plants = {};

    return (
        <section className='bg-green-200 text-black'>
            <div className='container mx-auto p-6'>
                <pre className='text-wrap'>{JSON.stringify(plants, null, 4)}</pre>
            </div>
        </section>
    )
}

export default TestPage  