import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from "next/legacy/image";
import styles from '../../styles/WorkTile.module.sass'
import { faLink, faCalendarDays } from '@fortawesome/free-solid-svg-icons'

interface WorkTileProps {
    styleName: string
    logoUri: string
    logoWidth: number
    logoHeight: number
    role: string
    roleDescription: string
    date: string
    websiteUri: string
    websiteDescription: string
}

const RoleTile = (
    {
        styleName,
        logoUri,
        logoWidth,
        logoHeight,
        role,
        roleDescription,
        date,
        websiteUri,
        websiteDescription
    }: WorkTileProps
) => {
    return (
        <div className={styleName}>
            <div className={styles.cardWorkContent}>
                <div className={styles.workLogoContainer}>
                    <Image src={logoUri} layout='responsive' width={logoWidth} height={logoHeight} alt={role} />
                </div>
                <p className={styles.workTitle}>
                    {role}
                </p>
                <p className={styles.workDate}>
                    <span><FontAwesomeIcon icon={faCalendarDays} /></span>
                    {date}
                </p>
                <a href={websiteUri} className={styles.workLink} rel='noreferrer' target='_blank'>
                    <span><FontAwesomeIcon icon={faLink} /></span>
                    {websiteDescription}
                </a>
                <p className={styles.workSubtitle} dangerouslySetInnerHTML={{__html: roleDescription}}></p>
            </div>
        </div>
    )
}

export default RoleTile