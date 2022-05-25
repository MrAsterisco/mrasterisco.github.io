import styles from '../../styles/Hero.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin, faTwitter, faMedium } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Hero() {
  return (
    <div>
      <div className={styles.hero}>
        <div className={styles.heroBody}>
          <div className={styles.heroContent}>
            <p className={styles.heroTitle}>Hi, my name is <span>Alessio</span>.</p>
            <p className={styles.heroSubtitle}>I build stuff for computers, smartphones and the web.</p>

            <nav className={styles.mainNavbar}>
              {
                Pages
                  .map((p) => {
                    var classes = [styles.navbarItem]
                    if (isCurrentPage(p)) classes.push(styles.navbarItemActive)

                    return <Link key={p} href={p}><a className={classes.join(" ")}>{nameOfPage(p)}</a></Link>
                  })
              }
            </nav>

            <div className={styles.socialContainer}>
              <a href="https://www.linkedin.com/in/alessiomoiso1993" target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="https://github.com/MrAsterisco" target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
              <a href="https://twitter.com/MrAsterisco93" target='_blank'><FontAwesomeIcon icon={faTwitter} /></a>
              <a href='https://www.instagram.com/mrasterisco' target='_blank'><FontAwesomeIcon icon={faInstagram} /></a>
              <a href='https://medium.com/@alessio.mm' target='_blank'><FontAwesomeIcon icon={faMedium} /></a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

enum Page {
  Home = "/",
  Projects = "/projects"
}
const Pages = [Page.Home, Page.Projects]

function nameOfPage(page: Page) {
  switch (page) {
    case Page.Home:
      return "Home"
    case Page.Projects:
      return "Projects"
  }
}

function isCurrentPage(page: Page) {
  const router = useRouter()
  return router.pathname == page
}