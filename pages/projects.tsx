import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import SectionTitle from "../components/Generic/SectionTitle"
import ProjectColumns from "../components/Projects/ProjectColumns"
import styles from '../styles/Projects.module.sass'

export default function Projects(
    {
        projects,
        technologies
    }: InferGetServerSidePropsType<typeof getServerSideProps>
) {
    return (
        <div className={styles.main}>
            <SectionTitle title="What are some of my projects?" subtitle="Here's a non-definitive list of the projects, apps and websites and I built or contributed to." />
            <ProjectColumns projects={projects} technologies={technologies} />
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const projects = await getProjects()
    const technologies = await getTechnologies()

    return {
        props: {
            projects: projects,
            technologies: technologies
        }
    }
}

async function getProjects() {
    const res = await fetch(`${process.env.API_ENDPOINT}/projects`)
    return await res.json()
}

async function getTechnologies() {
    const res = await fetch(`${process.env.API_ENDPOINT}/technologies`)
    return await res.json()
}