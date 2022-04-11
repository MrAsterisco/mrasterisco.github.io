import styles from '../../styles/ProjectTile.module.sass'
import Segment from '../Generic/Segment'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faAppStoreIos } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LinkType } from '@prisma/client'
import IProject from '../../models/IProject';

interface ProjectTileProps {
    project: IProject
}

const ProjectTile = (
    {project} : ProjectTileProps
) => {
    return (
        <li key={project.id} className={styles.projectCard}>
            <div className={styles.projectCardContent}>
                <p className={styles.projectCardName}>{project.name}</p>
                <p className={styles.projectCardDescription}>{project.description}</p>

                <ul className={styles.projectCardTechList}>
                    {
                        project.technologies
                            .split(",")
                            .map((tech) => <li key={tech}><Segment content={tech} /></li>)
                    }
                </ul>

                <ul className={styles.projectCardLinksList}>
                    {
                        project.links
                            .map((link) => {
                                return (
                                    <li>
                                        <a href={link.uri} target='_blank'>
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

function iconForLinkType(linkType: LinkType) {
    switch (linkType) {
        case LinkType.GENERIC:
            return faLink
        case LinkType.APPSTORE:
            return faAppStoreIos
    }
}

export default ProjectTile