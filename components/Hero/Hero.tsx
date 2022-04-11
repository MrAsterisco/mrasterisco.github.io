import styles from '../../styles/Hero.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'

export default function Hero() {
    return (
        <div className={styles.hero}>
        <div className={styles.heroBody}>
          <div className={styles.heroContent}>
            <div className={styles.leftHeroContent}>
              <p className={styles.heroTitle}>Hi, my name is <span>Alessio</span>.</p>
              <p className={styles.heroSubtitle}>I build stuff for computers, smartphones and the web.</p>
            </div>
            <div className={styles.rightHeroContent}>
              <a href="https://github.com/MrAsterisco" target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
              <a href="https://www.linkedin.com/in/alessiomoiso1993" target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href='https://www.instagram.com/mrasterisco'><FontAwesomeIcon icon={faInstagram} /></a>
              <a href='https://medium.com/@alessio.mm'><FontAwesomeIcon icon={faMedium} /></a>
            </div>
          </div>
        </div>
      </div>
    )
}