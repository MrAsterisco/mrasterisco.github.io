import styles from '../../styles/Work.module.sass'
import RoleTile from './RoleTile'

export default function RolesShowcase() {
    return (
        <div className={styles.workContent}>
            <div className={styles.leftWorkContent}>
                <RoleTile 
                    styleName={styles.klarna} 
                    role='Senior Engineering Manager'
                    roleDescription="I <span>lead the Editor Experience domain</span>, which focuses on delivering incredible features to the users of <span>Linearity Curve</span> and <span>Linearity Move</span>. I define and oversee the processes, the critical path, and all the KTLO procedures of the domain. Together with the Group Product Manager and the other PMs, I define and review priorities, gather requirements, and review designs. I am also responsible for <span>mentoring and supporting the Engineering Managers and the Staff Engineers in my domain</span>, providing guidance and help when needed. I am regularly involved in architectural discussions, and, reporting directly to the CTO, I am also responsible for making sure that our business goals are reflected in the technical and product requirements. I am also heavily involved in defining and contributing to our hiring process."
                    logoUri='/linearity.webp'
                    logoWidth={142}
                    logoHeight={147}
                    date='December 2022 - present'
                    websiteDescription='linearity.io'
                    websiteUri='https://linearity.io'
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