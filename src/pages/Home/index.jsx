import ParticlesBackground from '../../components/ParticlesBackground';

//importing routes
import { Link } from 'react-router-dom';
import React, { useRef } from 'react';

//importing images !
import Fundo from '../../assets/background.png';
import Image from '../../assets/perfil.png';

//importing icons
import CustomIcons from '../../components/CustomIcons';

//importing style
import styles from '../Home/style.module.scss';

//pages
import About from '../About';

function main() {

    const sobreRef = useRef();

    const Curriculum = '/src/assets/Curriculo.pdf'

    return (
        <>
    <ParticlesBackground />


            <main>
                <div className={styles.caixaPai}>
                    <img className={styles.capa} src={Fundo} alt="" />
                    <div className={styles.caixaFilho}>
                        <figure>
                            <section className={styles.section1}>
                                <img className={styles.Imgperfil} src={Image} alt="Ronald" />

                                <section className={styles.buttonsPerfil}>

                                    <a href={Curriculum} download="Curriculo.pdf">
                                        <button>
                                            <CustomIcons icon="curriculum" size={25} />
                                            Curriculo</button></a>

                                    <a href='https://www.linkedin.com/in/ronald-luiz-9ab672200/' target="_blank">
                                        <button>
                                            <CustomIcons icon="linkedin" color="#0e76a8" size={25} />
                                            Linkedin</button></a>
                                </section>

                            </section>

                            <figcaption>
                                <h2>Olá, eu sou o Ronald Luiz</h2>
                                <h1>DEV FRONT-END</h1>
                                <p>Como desenvolvedor apaixonado pela área de Tecnologia da Informação, meu objetivo é buscar constante
                                    qualificação, tanto academicamente quanto profissionalmente, a fim de contribuir significativamente com
                                    o desenvolvimento da sua empresa.</p>
                                {/* <button className={styles.aboutMore}><Link to='/sobre'>Learn more</Link></button> */}
                            </figcaption>
                        </figure>
                    </div>

                </div>


                {/* Sobre  */}

                <div id="sobre" ref={sobreRef}>
                    <About />
                </div>


            </main >


        </>
    )
}

export default main;