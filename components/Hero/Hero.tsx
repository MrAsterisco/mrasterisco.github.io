import styles from '../../styles/Hero.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin, faTwitter, faMedium } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Hero() {
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

  const router = useRouter()
  function isCurrentPage(page: Page) {
    return router.pathname == page
  }

  return (
    <div>
      <div className={styles.hero}>
        <div className={styles.heroBody}>
          <div className={styles.heroContent}>
            <p className={styles.heroTitle}>Hi, my name is <span>Alessio</span>.</p>
            <p className={styles.heroSubtitle}>I contribute daily to apps used by millions of people.</p>

            <nav className={styles.mainNavbar}>
              {
                Pages
                  .map((p) => {
                    var classes = [styles.navbarItem]
                    if (isCurrentPage(p)) classes.push(styles.navbarItemActive)

                    return <Link key={p} href={p} className={classes.join(" ")}>{nameOfPage(p)}</Link>;
                  })
              }
            </nav>

            <div className={styles.socialContainer}>
              <a href="https://www.linkedin.com/in/alessiomoiso1993" rel='noreferrer' target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="https://github.com/MrAsterisco" rel='noreferrer' target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
              <a href="https://twitter.com/MrAsterisco93" rel='noreferrer' target='_blank'><FontAwesomeIcon icon={faTwitter} /></a>
              <a href='https://www.instagram.com/mrasterisco' rel='noreferrer' target='_blank'><FontAwesomeIcon icon={faInstagram} /></a>
              <a href='https://medium.com/@alessio.mm' rel='noreferrer' target='_blank'><FontAwesomeIcon icon={faMedium} /></a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}