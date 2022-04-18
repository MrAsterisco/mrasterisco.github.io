import styles from '../../styles/ProjectTile.module.sass'
import Segment, { SegmentState } from '../Generic/Segment'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faAppStoreIos, faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LinkType } from '@prisma/client'
import IProject from '../../models/IProject';

interface ProjectTileProps {
    project: IProject
    highlightedTechnologies: string[]
}

const ProjectTile = (
    {
        project,
        highlightedTechnologies
    }: ProjectTileProps
) => {
    function segmentStateForTechnology(technology: string) {
        if (highlightedTechnologies.length > 1) return SegmentState.Default
        return highlightedTechnologies.includes(technology) ? SegmentState.Highlighted : SegmentState.Default
    }

    function iconForLinkType(linkType: LinkType) {
        switch (linkType) {
            case LinkType.GENERIC:
                return faLink
            case LinkType.APPSTORE:
                return faAppStoreIos
            case LinkType.GITHUB:
                return faGithub
            case LinkType.GITLAB:
                return faGitlab
        }
    }

    return (
        <li key={project.id} className={styles.projectCard}>
            <div className={styles.projectCardContent}>
                <p className={styles.projectCardName}>{project.name}</p>
                <p className={styles.projectCardTimeframe}>{project.timePeriod}</p>
                <p className={styles.projectCardDescription}>{project.description}</p>

                <ul className={styles.projectCardTechList}>
                    {
                        project.technologies
                            .split(",")
                            .map((tech) => <li key={[project.id, tech].join("-")}><Segment content={tech} state={segmentStateForTechnology(tech)} enabled={false} /></li>)
                    }
                </ul>

                <ul className={styles.projectCardLinksList}>
                    {
                        project.links
                            .map((link) => {
                                return (
                                    <li key={link.content}>
                                        <a href={link.content} target='_blank'>
                                            <span>
                                                <FontAwesomeIcon icon={iconForLinkType(link.type)} />
                                            </span>
                                            {link.displayName}
                                        </a>
                                    </li>
                                )
                            })
                    }
                </ul>
            </div>
        </li>
    )
}

export default ProjectTile