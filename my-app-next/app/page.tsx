import styles from './checkin.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.card}>
        <div className={styles.header}>
          <h1 className={styles.title}>Online Check-in</h1>
          <p className={styles.subtitle}>Enter your details to retrieve your booking.</p>
        </div>

        {/* Basic HTML GET form naturally integrates with Next.js Server Components. */}
        <form action="/check-in" method="GET">
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="lastName">Last Name</label>
            <input
              className={styles.input}
              type="text"
              id="lastName"
              name="lastName"
              placeholder="e.g. SURAT"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="bookingRef">Booking Reference (PNR)</label>
            <input
              className={styles.input}
              type="text"
              id="bookingRef"
              name="bookingRef"
              placeholder="6 alphanumeric characters"
              minLength={6}
              maxLength={6}
              required
            />
          </div>

          <button type="submit" className={styles.button}>
            Continue
          </button>
        </form>
      </main>
    </div>
  );
}
