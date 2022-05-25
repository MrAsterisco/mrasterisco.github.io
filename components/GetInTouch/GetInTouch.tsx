import styles from '../../styles/GetInTouch.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function GetInTouch() {
    function openLinkedIn() {

    }

    return (
        <div>
            <a target='_blank' href='https://www.linkedin.com/in/alessiomoiso1993' className={styles.getInTouch}>
                <FontAwesomeIcon icon={faLinkedin} />
                <span className={styles.buttonTitle}>Get in Touch</span>
            </a>
            <a target='_blank' href='https://github.com/MrAsterisco' className={styles.followGitHub}>
            <FontAwesomeIcon icon={faGithub} />
                <span className={styles.buttonTitle}>See my Code</span>
            </a>
        </div>
    )
}