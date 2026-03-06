export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="flex h-40 w-full items-center justify-center rounded-xl border border-dashed border-zinc-300 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900">
            <div className="flex flex-col items-center gap-2">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-zinc-300 border-t-zinc-600 dark:border-zinc-600 dark:border-t-zinc-300"></div>
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Loading Dashboard Item...</p>
            </div>
        </div>
    );
}
