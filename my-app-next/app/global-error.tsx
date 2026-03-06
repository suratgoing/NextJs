"use client"; // Error boundaries must be Client Components

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        // global-error must include html and body tags
        <html>
            <body>
                <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 p-6 dark:bg-zinc-950">
                    <div className="flex max-w-md flex-col items-center justify-center rounded-2xl border border-red-200 bg-white p-8 text-center shadow-xl dark:border-red-900/30 dark:bg-zinc-900">
                        <div className="mb-4 rounded-full bg-red-100 p-4 dark:bg-red-900/20">
                            <svg className="h-8 w-8 text-red-600 dark:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                        <h2 className="mb-2 text-2xl font-bold text-red-700 dark:text-red-400">Critical Error</h2>
                        <p className="mb-6 text-zinc-600 dark:text-zinc-400">
                            A critical error occurred in the application root. {error.message}
                        </p>
                        <button
                            onClick={() => reset()}
                            className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600"
                        >
                            Try again
                        </button>
                    </div>
                </div>
            </body>
        </html>
    );
}
