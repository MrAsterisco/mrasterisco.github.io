import styles from '../../styles/Segment.module.sass'

export enum SegmentState {
    Active,
    Inactive,
    Highlighted,
    Default
}

interface SegmentProps {
    content: string
    state: SegmentState
    enabled: boolean
}

const Segment = (
    {
        content,
        state,
        enabled
    }: SegmentProps
) => {
    function classForState(state: SegmentState) {
        switch (state) {
            case SegmentState.Active:
                return styles.active
            case SegmentState.Inactive:
                return styles.inactive
            case SegmentState.Highlighted:
                return styles.highlighted
            default:
                return undefined
        }
    }

    function classForEnabled(enabled: boolean) {
        return enabled ? "enabled" : "disabled"
    }

    return (
        <span className={[styles.segment, classForState(state), classForEnabled(enabled)].join(" ")}>{content}</span>
    )
}

export default Segment