import styles from '../checkin.module.css';

export default function CheckInLoading() {
    return (
        <div className={styles.card} style={{ textAlign: 'center' }}>
            {/* Simple CSS Loader representation */}
            <div style={{ padding: '2rem' }}>
                <p className={styles.subtitle}>Loading check-in details...</p>
                <div style={{ marginTop: '1rem', height: '4px', width: '100%', backgroundColor: '#eee', borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{ width: '50%', height: '100%', backgroundColor: '#000', animation: 'progress 1s infinite linear' }}></div>
                </div>
            </div>
            <style>{`
                @keyframes progress {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(200%); }
                }
            `}</style>
        </div>
    );
}
