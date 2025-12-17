import Link from 'next/link';

export default function HomePage() {
    return (
        <main className='mx-auto my-24 flex min-h-screen max-w-4xl px-4'>
            <article className='prose dark:prose-invert mx-auto w-full'>
                <div className='flex flex-col gap-6 text-center'>
                    
                    <h1 className='text-4xl font-extrabold tracking-tight'>
                        Viet Le
                    </h1>
                    <h2 className='text-2xl font-semibold text-muted-foreground'>
                        Full-Stack Software Engineer
                    </h2>

                    <p className='text-lg leading-relaxed'>
                        I build high-performance, maintainable web applications from the data layer to 
                        the frontend. My passion is tackling complex architecture challenges - like managing 
                        large, relational datasets with the speed of a native application.
                    </p>
                </div>
                
                <hr className='my-10 border-border' />

                {/* --- The 'Funnel' Section --- */}
                <h3 className='text-2xl font-bold mb-4 text-primary text-center'>
                    Featured Project: CardLedger
                </h3>

                <p className='text-lg text-muted-foreground text-center mb-6'>
                    A production-ready TCG engine managing nearly 20,000 cards with custom ETL, 
                    hybrid rendering, and zero-latency search.
                </p>

                <div className='flex flex-col sm:flex-row justify-center gap-4'>
                    <Link
                        href='https://cardledger.io'
                        target='_blank'
                        className='bg-primary text-primary-foreground hover:bg-primary-hover p-3 rounded-lg text-lg font-semibold transition-colors text-center w-full sm:w-64'
                    >
                        View Live Project ↗
                    </Link>
                    <Link
                        href='/blog/cardledger-architecture' 
                        className='border border-border p-3 rounded-lg text-lg font-semibold transition-colors text-center w-full sm:w-64'
                    >
                        Read Architecture Deep Dive ↗
                    </Link>
                </div>

                <hr className='my-10 border-border' />

                {/* --- Socials and Contact --- */}
                <div className='flex flex-wrap justify-center gap-4 text-lg text-muted-foreground'>
                    <p className='text-foreground font-semibold'>Contact:</p>
                    <a href='mailto:vietle510@gmail.com' className='hover:text-primary transition-colors'>
                        Email
                    </a>
                    <span>|</span>
                    <a href='https://github.com/viet456' target='_blank' className='hover:text-primary transition-colors'>
                        GitHub
                    </a>
                    <span>|</span>
                    <a href='https://linkedin.com/in/your-profile' target='_blank' className='hover:text-primary transition-colors'>
                        LinkedIn
                    </a>
                </div>
            </article>
        </main>
    );
}