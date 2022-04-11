import ProjectTile from "./ProjectTile";
import styles from '../../styles/Projects.module.sass'
import IProject from '../../models/IProject';

interface ProjectsProps {
    projects: IProject[]
}

const ProjectsShowcase = (
    {
        projects
    }: ProjectsProps
) => {
    return (
        <div className={styles.projectsContent}>
            <div className={styles.projectsColumn}>
                <p className={styles.projectsTitle}>Enterprise</p>

                <ul className={styles.projectsList}>
                    {
                        projects
                            .filter((p) => p.type == "ENTERPRISE")
                            .map((p) => {
                                return <ProjectTile project={p} />
                            })
                    }
                </ul>
            </div>
            <div className={styles.projectsColumn}>
                <p className={styles.projectsTitle}>Products</p>

                <ul className={styles.projectsList}>
                    {
                        projects
                            .filter((p) => p.type == "PRODUCTS")
                            .map((p) => {
                                return <ProjectTile project={p} />
                            })
                    }
                </ul>
            </div>
            <div className={styles.projectsColumn}>
                <p className={styles.projectsTitle}>Open Source</p>

                <ul className={styles.projectsList}>
                    {
                        projects
                            .filter((p) => p.type == "OPENSOURCE")
                            .map((p) => {
                                return <ProjectTile project={p} />
                            })
                    }
                </ul>
            </div>
        </div>
    )
}

export default ProjectsShowcase