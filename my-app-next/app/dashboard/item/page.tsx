import { notFound } from "next/navigation";

// By making the component async, we can simulate loading times
export default async function Item({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const resolvedParams = await searchParams;
    const triggerError = resolvedParams.error === "true";
    const triggerNotFound = resolvedParams.notfound === "true";
    const delayParams = resolvedParams.delay;

    // 1. Simulate Loading State (triggers loading.tsx Automatically in Next.js)
    // Try adding ?delay=2000 to the URL
    if (delayParams) {
        await new Promise((resolve) => setTimeout(resolve, Number(delayParams)));
    }

    // 2. Simulate Error State (triggers error.tsx)
    // Try adding ?error=true to the URL
    if (triggerError) {
        throw new Error("This is a simulated error from the Item page!");
    }

    // 3. Simulate Not Found State (triggers not-found.tsx)
    // Try adding ?notfound=true to the URL
    if (triggerNotFound) {
        notFound();
    }

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Item Page (Conventions Showcase)</h1>
            <p className="mb-4 text-zinc-600 dark:text-zinc-400">
                This page demonstrates Next.js file conventions. Click the links below to trigger different states:
            </p>

            <div className="flex flex-col gap-4 mt-8">
                <a
                    href="/dashboard/item?delay=2000"
                    className="rounded-lg bg-blue-100 p-4 text-blue-800 transition-colors hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50 block"
                >
                    <span className="font-bold">1. Trigger Loading</span> (loading.tsx)
                    <p className="text-sm mt-1 opacity-80">Simulates a 2-second data fetch delay before rendering the page.</p>
                </a>

                <a
                    href="/dashboard/item?error=true"
                    className="rounded-lg bg-red-100 p-4 text-red-800 transition-colors hover:bg-red-200 dark:bg-red-900/30 dark:text-red-300 dark:hover:bg-red-900/50 block"
                >
                    <span className="font-bold">2. Trigger Error</span> (error.tsx)
                    <p className="text-sm mt-1 opacity-80">Throws a JavaScript error intentionally to show the Error UI boundary.</p>
                </a>

                <a
                    href="/dashboard/item?notfound=true"
                    className="rounded-lg bg-zinc-200 p-4 text-zinc-800 transition-colors hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700 block"
                >
                    <span className="font-bold">3. Trigger Not Found</span> (not-found.tsx)
                    <p className="text-sm mt-1 opacity-80">Calls the `notFound()` function to render the custom 404 UI.</p>
                </a>

                <a
                    href="/dashboard/item"
                    className="rounded-lg border border-zinc-200 p-4 text-zinc-800 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900 block mt-4"
                >
                    <span className="font-bold">Back to Normal State</span>
                    <p className="text-sm mt-1 opacity-80">Clear all parameters and render the normal component.</p>
                </a>
            </div>
        </div>
    );
}