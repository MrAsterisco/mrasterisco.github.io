import styles from '../../styles/Work.module.sass'
import RoleTile from './RoleTile'

export default function RolesShowcase() {
    return (
        <div className={styles.workContent}>
            <div className={styles.leftWorkContent}>
                <RoleTile 
                    styleName={styles.klarna} 
                    role='Senior Engineer'
                    roleDescription="Part of the App Client Platform team, I have <span>technical ownership</span> of the iOS portion of the Klarna app. I <span>lead several initiative</span> in partnership with cross-functional teams to improve the user and the developer experience, coaching engineers when they need to interact with native features and <span>encouraging collaboration</span> with the Product team. I am <span>responsible for the technical architecture</span> of the iOS project and its extensions, taking a wide range of fundamental decisions and defining new standards to ensure that the Klarna app remains <span>the best shopping app</span>. In Klarna\'s fully remote environment, I support <span>career development</span> for the people I mentor. I am also part of the Engineering Hiring Pipeline, helping to <span>scale our team</span> by leading technical interviews."
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