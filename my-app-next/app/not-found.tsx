import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
            <h2 className="text-6xl font-extrabold text-zinc-900 dark:text-white">404</h2>
            <h3 className="mt-4 text-2xl font-bold text-zinc-800 dark:text-zinc-200">Item Not Found</h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">Could not find requested resource for this item.</p>
            <Link
                href="/dashboard"
                className="mt-8 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105 hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
                Return to Dashboard
            </Link>
        </div>
    );
}
