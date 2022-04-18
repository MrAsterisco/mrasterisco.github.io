import RolesShowcase from '../components/Roles/RolesShowcase'
import SectionTitle from '../components/Generic/SectionTitle'
import LanguagesShowcase from '../components/Languages/LanguagesShowcase'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import styles from '../styles/Home.module.sass'
import Link from 'next/link'
import ProjectsShowcase from '../components/Projects/ProjectsShowcase'

export default function Home(
  { 
    projects,
    languages
  } : InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <div className={styles.main}>
      <section>
        <SectionTitle title='What do I do?' subtitle='A whole lot of nothing but most of the days (and some nights) you can find me at:' />
        <RolesShowcase />
        <div className={styles.sectionFooter}>
          Interested in my complete work experience? <a href="#" target="_blank">Visit my LinkedIn profile</a>.
        </div>
      </section>
      <section className={styles.scrollableSection}>
        <SectionTitle title='What are some of my projects?' subtitle="A unordered showcase of the projects, apps and websites I created or contributed to:" />
        <ProjectsShowcase projects={projects} />
        <div className={styles.sectionFooter}>
          Interested in the full list? <Link href="/projects"><a>See my projects</a></Link>
        </div>
      </section>
      <section>
        <SectionTitle title='What "languages" do I speak?' subtitle="Here's a non-definitive list of the programming languages that I know and use:" />
        <LanguagesShowcase languages={languages} />
      </section>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const projects = await getProjects()
  const languages = await getLanguages()

  return {
    props: {
      projects: projects,
      languages: languages
    }
  }
}

async function getProjects() {
  const res = await fetch(`${process.env.API_ENDPOINT}/projects`)
  return await res.json()
}

async function getLanguages() {
  const res = await fetch(`${process.env.API_ENDPOINT}/languages`)
  return await res.json()
}