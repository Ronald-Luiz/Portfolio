import ParticlesBackground from '../../components/ParticlesBackground'

//style
import styles from '../Projects/style.module.scss';

//images
import image1 from '../../assets/fakeflix.png';
import image2 from '../../assets/calculator.png';
import image3 from '../../assets/fitness.png';
import image4 from '../../assets/petshop.png';
import image5 from '../../assets/cnh.png';

//importing icons
import CustomIcons from '../../components/CustomIcons';

export default function Project() {
    return (
        <>
        <ParticlesBackground />
            <div className={styles.divPai}>
                <h2>Projetos</h2>

                <div className={styles.Cards}>
                    <section className={styles.Card}>
                        <figure>
                            <a href='https://fakeflix-azure.vercel.app/' target="_blank"><img src={image1} alt='fakeflix' /></a>
                            <figcaption>
                                FakeFlix
                                <CustomIcons icon='react' color='#03a9f4' size={25} />
                            </figcaption>
                        </figure>
                    </section>

                    <section className={styles.Card}>
                        <figure>
                            <a href='https://rlm.vercel.app/' target="_blank"><img src={image5} alt='fakeflix' /></a>
                            <figcaption>
                                CNH (building...)
                                <CustomIcons icon='react' color='#03a9f4' size={25} />
                            </figcaption>
                        </figure>
                    </section>

                    <section className={styles.Card}>
                        <figure>
                            <a href='https://calculator-ronald-luiz.vercel.app/' target="_blank"><img src={image2} alt='calculator' /></a>
                            <figcaption>
                                Calculator
                                <CustomIcons icon='react' color='#03a9f4' size={25} />
                            </figcaption>
                        </figure>
                    </section>

                    <section className={styles.Card}>
                        <figure>
                            <a href='https://body-relevance.vercel.app/' target="_blank"><img src={image3} alt='fitness' /></a>
                            <figcaption>
                                Gordura Corporal
                                <CustomIcons icon='html' color='#f16529' size={25} />
                                <CustomIcons icon='css' color='#2965f1' size={25} />
                                <CustomIcons icon='javascript' color='#f7e018' size={25} />
                            </figcaption>
                        </figure>
                    </section>

                    <section className={styles.Card}>
                        <figure>
                            <a href='https://pet-shop-gules.vercel.app/' target="_blank"><img src={image4} alt='fitness' /></a>
                            <figcaption>
                                petShop
                                <CustomIcons icon='html' color='#f16529' size={25} />
                                <CustomIcons icon='css' color='#2965f1' size={25} />
                                <CustomIcons icon='javascript' color='#f7e018' size={25} />
                            </figcaption>
                        </figure>
                    </section>

                    {/* <section className={styles.Card}>
                    Projeto
                </section>

                <section className={styles.Card}>
                    Projeto
                </section>

                <section className={styles.Card}>
                    Projeto
                </section>

                <section className={styles.Card}>
                    Projeto
                </section> */}

                </div>
            </div>
        </>
    )
}