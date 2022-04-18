import { useEffect, useState } from "react"
import IProject from "../../models/IProject"
import styles from "../../styles/ProjectsShowcase.module.sass"
import ProjectTile from "./ProjectTile"

interface ProjectsShowcaseProps {
    projects: IProject[]
}

const ProjectsShowcase = (
    {
        projects
    }: ProjectsShowcaseProps
) => {
    function shuffleArray(arr) {
        arr.sort(() => Math.random() - 0.5);
    }

    function shuffleProjects() {
        shuffleArray(projects)
        setAnimationClass(styles.animationClass)
        setShowcasedProjects(projects.slice(0, 3))
        setTimeout(() => setAnimationClass(""), 5000)
    }

    const [showcasedProjects, setShowcasedProjects] = useState([])
    const [animationClass, setAnimationClass] = useState("")

    useEffect(() => {
        shuffleProjects()

        const timer = setInterval(shuffleProjects, 10000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className={styles.projectColumnsContainer}>
            <div className={styles.projectColumns}>
                {
                    showcasedProjects
                        .map((project: IProject, index: number) => {
                            return <div key={project.id} className={[styles.projectColumn, animationClass].join(" ")} style={{"animationDelay": index/3 + "s"}}>
                                <ProjectTile project={project} highlightedTechnologies={[]} />
                            </div>
                        })
                }
            </div>
        </div>
    )
}

export default ProjectsShowcase