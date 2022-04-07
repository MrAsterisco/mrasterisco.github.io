import styles from '../styles/Hero.module.sass'

export default function Hero() {
    return (
        <div className={styles.hero}>
        <div className={styles.heroBody}>
          <p className={styles.heroTitle}>Hi, my name is Alessio.</p>
          <div className={styles.heroSubtitle}>
            <ul className={styles.heroList}>
              <li className={styles.heroListDisabled}>I build apps for your phone and computer.</li>
              <li className={styles.heroListDisabled}>I make websites for your browser.</li>
              <li className={styles.heroListDisabled}>I create secure networks for your devices.</li>
              <li className={styles.heroListDisabled}>I configure rock-solid databases.</li>
              <li className={styles.heroListEnabled}>I make stuff with computers.</li>
            </ul>
          </div>
        </div>
      </div>
    )
}