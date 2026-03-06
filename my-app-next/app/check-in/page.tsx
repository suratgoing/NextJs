import styles from '../checkin.module.css';
import { redirect } from 'next/navigation';

export default async function SelectPassengerPage({
    searchParams
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>
}) {
    // Next 15 searchParams resolution
    const params = await searchParams;
    const lastName = params.lastName || 'Guest';
    const bookingRef = params.bookingRef || 'XXXXXX';

    // Form Action to handle submission to success page
    async function confirmCheckIn(formData: FormData) {
        "use server";
        const passenger = formData.get('passenger');
        const phone = formData.get('phone');

        // Server-side redirect
        redirect(`/check-in/success?name=${passenger}&booking=${bookingRef}&phone=${phone}`);
    }

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <h1 className={styles.title}>Select Passenger</h1>
                <p className={styles.subtitle}>Booking Ref: {bookingRef}</p>
            </div>

            <form action={confirmCheckIn}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Passengers on this booking:</label>
                    <ul className={styles.passengerList}>
                        <li className={styles.passengerItem}>
                            <input type="radio" id="p1" name="passenger" value={`${lastName} SURAT`} required defaultChecked />
                            <label htmlFor="p1" className={styles.passengerName}>MR. {lastName.toUpperCase()} SURAT</label>
                        </li>
                    </ul>
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="phone">Contact Phone Number</label>
                    <input
                        className={styles.input}
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="e.g. +66 81 234 5678"
                        required
                    />
                </div>

                <button type="submit" className={styles.button}>Confirm Check-in</button>
            </form>
        </div>
    );
}
