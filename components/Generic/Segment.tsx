import styles from '../../styles/Segment.module.sass'

interface SegmentProps {
    content: string
}

const Segment = (
    {content}: SegmentProps
) => {
    return (
        <span className={styles.segment}>{content}</span>
    )
}

export default Segment