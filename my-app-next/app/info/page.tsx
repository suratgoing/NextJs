export default function Info() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-950 p-6 font-sans">
            <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800 transition-all hover:shadow-lg">
                {/* Cover Image Background */}
                <div className="h-40 w-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"></div>

                {/* Profile Info Container */}
                <div className="px-8 pb-8">
                    {/* Avatar */}
                    <div className="relative -mt-16 mb-4 flex justify-between items-end">
                        <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-white bg-zinc-200 font-bold text-zinc-400 shadow-sm dark:border-zinc-900 dark:bg-zinc-800 text-3xl">
                            AR
                        </div>
                        <button className="mb-2 rounded-full bg-black px-6 py-2 text-sm font-semibold text-white transition-transform hover:scale-105 hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 shadow-md">
                            Follow
                        </button>
                    </div>

                    {/* Name & Titles */}
                    <div>
                        <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-white">Surat</h1>
                        <h2 className="text-sm font-medium text-purple-600 dark:text-purple-400 mt-1">@ar667240 • Software Engineer</h2>
                    </div>

                    {/* Bio */}
                    <p className="mt-5 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                        Passionate about crafting beautiful and highly functional web applications. Exploring the full stack landscape one project at a time.
                    </p>

                    {/* Skills */}
                    <div className="mt-6 flex flex-wrap gap-2">
                        {['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Node.js'].map((skill) => (
                            <span key={skill} className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 shadow-sm hover:scale-105 transition-transform cursor-pointer">
                                {skill}
                            </span>
                        ))}
                    </div>

                    {/* Action Links */}
                    <div className="mt-8 grid grid-cols-2 gap-4 border-t border-zinc-100 pt-6 dark:border-zinc-800">
                        <a href="#" className="flex items-center justify-center rounded-xl bg-zinc-100 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700">
                            Portfolio
                        </a>
                        <a href="#" className="flex items-center justify-center rounded-xl bg-zinc-100 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700">
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}