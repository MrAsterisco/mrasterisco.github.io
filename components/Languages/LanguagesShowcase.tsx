import ILanguage from '../../models/ILanguage';
import styles from '../../styles/Languages.module.sass'
import LanguageTile from "./LanguageTile";

interface LanguagesShowcaseProps {
    languages: ILanguage[]
}

const LanguagesShowcase = (
    {
        languages
    } : LanguagesShowcaseProps
) => {
    return (
        <ul className={styles.languagesList}>
            {
                languages
                    .map((l) => <LanguageTile key={l.id} language={l} />)
            }
        </ul>
    )
}

export default LanguagesShowcase