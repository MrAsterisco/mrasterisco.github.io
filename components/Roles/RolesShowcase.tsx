import styles from '../../styles/Work.module.sass'
import RoleTile from './RoleTile'

export default function RolesShowcase() {
    return (
        <div className={styles.workContent}>
            <div className={styles.leftWorkContent}>
                <RoleTile 
                    styleName={styles.klarna} 
                    role='Senior Engineer'
                    roleDescription='I am part of one of the core teams revolving around the <span>Klarna app</span>. I focus mostly on the <span>iOS ecosystem</span>, by constantly improving the workflow and the tools that other teams use to build a variety of different features. I also contribute to maintaining our <span>core backend services</span> on AWS, as well as perform mainteinance on <span>the pipelines</span> that build the final deliverable product. Before the acquisition, I was working in the <span>Stocard iOS team</span>, contributing to <span>Stocard Pay</span> and various other parts of the app.'
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
                    role='Product Specialist & Mac Division Coordinator'
                    logoUri='/inerziasoft.webp'
                    roleDescription={"As Product Specialist, I <span>lead the development</span> of our most successful products in both the B2B and B2C sectors. I usually work with <span>Swift and Objective-C</span>, building iOS and macOS apps used by thousands of users. On the web, I normally deal with <span>PHP, JavaScript & TypeScript</span> (with and without frameworks such as <span>React, Next.js and jQuery</span>). I am also responsible of <span>managing our servers infrastructure</span>, supporting our website and our enterprise customers."}
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