import RolesShowcase from '../components/Roles/RolesShowcase'
import SectionTitle from '../components/Generic/SectionTitle'
import LanguagesShowcase from '../components/Languages/LanguagesShowcase'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import styles from '../styles/Home.module.sass'
import Link from 'next/link'
import ProjectsShowcase from '../components/Projects/ProjectsShowcase'
import GetInTouch from '../components/GetInTouch/GetInTouch'

export default function Home(
  { 
    projects,
    languages
  } : InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <div className={styles.main}>
      <section className={styles.homeSection}>
        <SectionTitle title='What do I do?' subtitle='A whole lot of nothing but most of the days (and some nights) you can find me at:' />
        <RolesShowcase />
        <div className={styles.sectionFooter}>
          Interested in my complete work experience? <a href="#" target="_blank">Visit my LinkedIn profile</a>.
        </div>
      </section>
      <section className={styles.homeSection}>
        <SectionTitle title='What are some of my projects?' subtitle="A unordered showcase of the projects, apps and websites I created or contributed to:" />
        <ProjectsShowcase projects={projects} />
        <div className={styles.sectionFooter}>
          Interested in the full list? <Link href="/projects">See my projects</Link>
        </div>
      </section>
      <section className={styles.homeSection}>
        <SectionTitle title='What "languages" do I speak?' subtitle="Here's a non-definitive list of the programming languages that I know and use:" />
        <LanguagesShowcase languages={languages} />
      </section>
      <section className={styles.homeSection}>
        <SectionTitle title='What now?' subtitle="Let's chat! Emails are so old, but we can connect on LinkedIn. Or, if you're into coding, you can follow me on GitHub." />
        <GetInTouch />
      </section>
    </div>
  );
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