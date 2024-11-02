import styles from "../../styles/Work.module.sass";
import RoleTile from "./RoleTile";

export default function RolesShowcase() {
  return (
    <div className={styles.workContent}>
      <div className={styles.leftWorkContent}>
        <RoleTile
          styleName={styles.linearity}
          role="VP of Engineering"
          roleDescription="I <span>lead a dynamic Engineering department</span> composed of cross-functional teams, encompassing iOS, backend, infrastructure, and machine learning. <span>Reporting directly to the CEO</span>, I focus on aligning our technical vision with business objectives, ensuring the delivery of high-quality features that drive company growth. I am responsible for fostering <span>the development of Engineering Managers and Staff Engineers</span>, guiding their career progression and professional growth. By promoting a business-oriented approach within the teams, I ensure we consistently ship high-quality features that meets our users' needs and contribute to the company's success."
          logoUri="/linearity.webp"
          logoWidth={142}
          logoHeight={147}
          date="December 2022 - present"
          websiteDescription="linearity.io"
          websiteUri="https://linearity.io"
        />
      </div>
      <div className={styles.rightWorkContent}>
        <RoleTile
          styleName={styles.inerziasoft}
          role="Product Specialist"
          logoUri="/inerziasoft.webp"
          roleDescription="I <span>lead some of our most successful products</span> in the B2B and B2C sectors. From gathering the initial requirements to <span>building complex architectures</span>, I have the technical ownership of many different web and mobile apps. I communicate directly with our customers, promoting <span>innovative solutions</span> to their problems. With all the challenges of working in a small family-owned company, I drove several initiatives to <span>improve our ways of working</span>. I built and periodically review <span>the architecture of very complex and highly reliable systems</span> on which our customers' critical processes depend. I also led small cross-functional teams of freelancers, enabling a friendly and open environment while still delivering <span>on time</span>."
          logoWidth={4109}
          logoHeight={1113}
          date="July 2012 (not including previous occasional contributions) - present"
          websiteDescription="inerziasoft.eu"
          websiteUri="https://inerziasoft.eu"
        />
      </div>
    </div>
  );
}
