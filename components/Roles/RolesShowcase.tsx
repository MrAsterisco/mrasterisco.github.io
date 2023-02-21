import styles from '../../styles/Work.module.sass'
import RoleTile from './RoleTile'

export default function RolesShowcase() {
    return (
        <div className={styles.workContent}>
            <div className={styles.leftWorkContent}>
                <RoleTile 
                    styleName={styles.klarna} 
                    role='Lead iOS Engineer'
                    roleDescription="I lead the UI Team working on Vectornator, the most modern design tool available for iPadOS, iOS, and macOS. I lead the team, setting the technical direction, working with stakeholders to define requirements, contributing to the codebase and company processes, and driving the development of high-quality and testable code. I also work closely with our recruiting team to find incredible new talents to add to our team."
                    logoUri='/klarna.webp'
                    logoWidth={2387}
                    logoHeight={534}
                    date='August 2020 (as part of Stocard, acquired by Klarna in July 2021) - present'
                    websiteDescription='klarna.com'
                    websiteUri='https://klarna.com'
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