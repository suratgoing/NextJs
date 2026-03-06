import styles from '../../checkin.module.css';
import Link from 'next/link';

export default async function BoardingPassSuccessPage({
    searchParams
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>
}) {
    const params = await searchParams;
    const passengerName = params.name || 'Unknown Passenger';
    const bookingRef = params.booking || 'N/A';

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <h1 className={styles.title}>Check-in Successful!</h1>
                <p className={styles.subtitle}>You are ready to fly.</p>
            </div>

            <div className={styles.formGroup} style={{ borderTop: '1px solid #eee', paddingTop: '1rem' }}>
                <p className={styles.label}>Passenger</p>
                <h2 style={{ margin: 0, fontSize: '1.25rem', color: '#111827' }}>{passengerName.toUpperCase()}</h2>
            </div>

            <div className={styles.formGroup}>
                <p className={styles.label}>Booking Reference</p>
                <p style={{ margin: 0, fontWeight: 'bold' }}>{bookingRef.toUpperCase()}</p>
            </div>

            <div className={styles.qrContainer}>
                {/* Simulated QR Code via CSS module */}
                <div className={styles.qrCode}></div>
            </div>

            <p style={{ textAlign: 'center', fontSize: '0.875rem', color: '#6b7280', marginBottom: '2rem' }}>
                Please present this boarding pass at the gate.
            </p>

            <Link href="/" className={styles.button}>
                Return to Home
            </Link>
        </div>
    );
}
