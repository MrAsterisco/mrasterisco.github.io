import styles from '../../styles/Title.module.sass'

interface TitleProps {
    title: string
    subtitle: string
}

const SectionTitle = ({title, subtitle}:TitleProps) => {
    return (
        <div>
            <p className={styles.headerTitle}>{title}</p>
            <p className={styles.headerSubtitle}>{subtitle}</p>
        </div>
    )
}

export default SectionTitle