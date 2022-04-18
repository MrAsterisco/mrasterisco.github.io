import ProjectTile from "./ProjectTile";
import styles from '../../styles/ProjectColumns.module.sass'
import IProject from '../../models/IProject';
import Segment, { SegmentState } from "../Generic/Segment";
import { useState } from "react";

interface ProjectsProps {
    projects: IProject[]
    technologies: string[]
}

function ProjectColumns(
    {
        projects,
        technologies
    }: ProjectsProps
) {
    const [selectedTechnologies, setTechnologies] = useState([...technologies])

    function toggleFocusFilter(technology: string) {
        const existingIndex = selectedTechnologies.indexOf(technology)
        if (selectedTechnologies.length === 1 && existingIndex > -1) {
            setTechnologies([...technologies])
        } else {
            setTechnologies([technology])
        }
    }

    function tilesForType(type: string) {
        return projects
            .filter((p) => filter(type, p))
            .map((p) => {
                return <ProjectTile key={p.id} project={p} highlightedTechnologies={selectedTechnologies} />
            })
    }

    function segmentStateForTechnology(technology: string) {
        if (selectedTechnologies.includes(technology)) {
            return SegmentState.Active
        }
        return SegmentState.Inactive
    }

    function filter(type: string, project: IProject) {
        return project.type === type && intersect(project.technologies.split(","), selectedTechnologies).length > 0
    }

    function intersect(a, b) {
        return a.filter(Set.prototype.has, new Set(b));
    }

    return (
        <div className={styles.projectsContent}>
            <ul className={styles.technologiesList}>
                {
                    technologies
                        .map((t) => {
                            return <li key={t} onClick={() => toggleFocusFilter(t)}>
                                <Segment content={t} state={segmentStateForTechnology(t)} enabled={true} />
                            </li>
                        })
                }
            </ul>

            <div className={styles.projectsColumns}>
                <div className={styles.projectsColumn}>
                    <p className={styles.projectsTitle}>Enterprise</p>

                    <ul className={styles.projectsList}>
                        {tilesForType("ENTERPRISE")}
                    </ul>
                </div>
                <div className={styles.projectsColumn}>
                    <p className={styles.projectsTitle}>Products</p>

                    <ul className={styles.projectsList}>
                        {tilesForType("PRODUCTS")}
                    </ul>
                </div>
                <div className={styles.projectsColumn}>
                    <p className={styles.projectsTitle}>Open Source</p>

                    <ul className={styles.projectsList}>
                        {tilesForType("OPENSOURCE")}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProjectColumns