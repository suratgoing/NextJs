import styles from '../checkin.module.css';
import Link from 'next/link';

export default function CheckInLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.container}>
            <header className={styles.layoutHeader}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l6 4-4 4-2.5-.5L1 17l4 4 1.5-1.5-.5-2.5 4-4 4 6c.4.2.8-.2.6-.7z" />
                </svg>
                <span>Airlines Check-in</span>
            </header>
            <main className={styles.layoutMain}>
                {children}
            </main>
        </div>
    );
}
