import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import SectionTitle from "../components/Generic/SectionTitle"
import ProjectColumns from "../components/Projects/ProjectColumns"
import styles from '../styles/Projects.module.sass'

export default function Projects(
    {
        projects
    }: InferGetServerSidePropsType<typeof getServerSideProps>
) {
    return (
        <div className={styles.main}>
            <SectionTitle title="What are some of my projects?" subtitle="Here's a non-definitive list of the projects, apps and websites and I built or contributed to." />
            <ProjectColumns projects={projects} />
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const projects = await getProjects()

    return {
        props: {
            projects: projects
        }
    }
}

async function getProjects() {
    const res = await fetch(`${process.env.API_ENDPOINT}/projects`)
    return await res.json()
}