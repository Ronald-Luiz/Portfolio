//styles
import styles from '../Footer/style.module.scss';

//icons
import CustomIcons from '../CustomIcons';

export default function Footer() {
    return (
        <>
            <nav className={styles.Footer}>
                <ul>
                    <section className={styles.Text}>
                        <li>Desenvolvido por Ronald</li>
                        <li>Redes sociais:</li>
                    </section>

                    <section className={styles.icons}>

                        <a href='https://www.instagram.com/ronaldluiz957/?next=%2F' target='_blank'>
                            <li>
                                <CustomIcons icon="instagram" color="#f09433" size={25} />
                            </li>
                        </a>

                        <a href='https://github.com/Ronald-Luiz' target='_blank'>
                            <li>
                                <CustomIcons icon="github" color="gray" size={25} />

                            </li>
                        </a>

                        <a href='https://github.com/Ronald-Luiz' target='_blank'>
                            <li>
                                <CustomIcons icon="linkedin" color="#0e76a8" size={25} />
                                <a href='https://www.linkedin.com/in/ronald-luiz-9ab672200/' />
                            </li>
                        </a>

                    </section>
                </ul>
            </nav>
        </>
    )
}