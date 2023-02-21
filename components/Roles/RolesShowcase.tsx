import styles from '../../styles/Work.module.sass'
import RoleTile from './RoleTile'

export default function RolesShowcase() {
    return (
        <div className={styles.workContent}>
            <div className={styles.leftWorkContent}>
                <RoleTile 
                    styleName={styles.klarna} 
                    role='Lead iOS Engineer'
                    roleDescription="I lead the UI Team working on Vectornator, the <span>most modern design tool</span> available for iPadOS, iOS, and macOS. I lead the team, <span>setting the technical direction</span>, working with stakeholders to define requirements, contributing to the codebase and company processes, and <span>driving the development of high-quality and testable code</span>. I also work closely with our recruiting team to find incredible new talents to add to our team."
                    logoUri='/vectornator.webp'
                    logoWidth={2000}
                    logoHeight={1834}
                    date='December 2022 - present'
                    websiteDescription='vectornator.io'
                    websiteUri='https://vectornator.io'
                />
            </div>
            <div className={styles.rightWorkContent}>
                <RoleTile
                    styleName={styles.inerziasoft}
                    role='Product Specialist'
                    logoUri='/inerziasoft.webp'
                    roleDescription="I <span>lead some of our most successful products</span> in the B2B and B2C sectors. From gathering the initial requirements to <span>building complex architectures</span>, I have the technical ownership of many different web and mobile apps. I communicate directly with our customers, promoting <span>innovative solutions</span> to their problems. With all the challenges of working in a small family-owned company, I drove several initiatives to <span>improve our ways of working</span>. I built and periodically review <span>the architecture of very complex and highly reliable systems</span> on which our customers' critical processes depend. I also led small cross-functional teams of freelancers, enabling a friendly and open environment while still delivering <span>on time</span>."
                    logoWidth={4109}
                    logoHeight={1113}
                    date='July 2012 (not including previous occasional contributions) - present'
                    websiteDescription='inerziasoft.eu'
                    websiteUri='https://inerziasoft.eu' 
                />
            </div>
        </div>
    )
}