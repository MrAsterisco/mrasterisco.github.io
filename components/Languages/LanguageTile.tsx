import Image from 'next/image'
import ILanguage from '../../models/ILanguage'
import styles from '../../styles/LanguageTile.module.sass'

interface LanguageTileProps {
    language: ILanguage
}

const LanguageTile = (
    {
        language
    } : LanguageTileProps
) => {
    return (
        <li key={language.id} className={styles.cardLanguage}>
            <div className={styles.cardLanguageContent}>
                <div className={styles.cardLanguageIcon}>
                    <Image src={language.iconUri} width={400} height={400} alt={language.name} layout='responsive' />
                </div>
                <div className={styles.cardLanguageText}>
                    <p className={styles.cardLanguageTitle}>
                        {language.name}
                    </p>
                    <p className={styles.cardLanguageDescription}>
                        {language.description}
                    </p>
                </div>
            </div>
        </li>
    )
}

export default LanguageTile
