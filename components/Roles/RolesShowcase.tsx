import styles from '../../styles/Work.module.sass'
import RoleTile from './RoleTile'

export default function RolesShowcase() {
    return (
        <div className={styles.workContent}>
            <div className={styles.leftWorkContent}>
                <RoleTile 
                    styleName={styles.klarna} 
                    role='Senior Engineer'
                    roleDescription='As part of the <span>main foundation team</span> in the App domain, I have been working to improve the Klarna app on iOS. I <span>lead a number of initiatives</span> in cross-functional teams aimed at <span>improving the user and the developer experience</span>, coaching and supporting other teams when they need to interact with low-level native features. I also work directly on the technical architecture of the Klarna app for iOS and its extensions. I have been involved from the beginning into the engineering hiring pipeline, <span>interviewing and inspiring talents</span> to join Klarna.'
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
                    roleDescription={"As Product Specialist, I’m responsible of leading some of our <span>most successful products</span> in both the B2B and B2C sectors. I usually work with Swift and Objective-C (<span>building iOS and macOS apps used by thousands of users</span>), PHP, JavaScript, TypeScript and some of the most famous JS frameworks (such as jQuery and React). I am also responsible of managing PostgreSQL instances for both our website and our <span>enterprise customers</span>. I also built from scratch and now manage some ad-hoc network infrastructures."}
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