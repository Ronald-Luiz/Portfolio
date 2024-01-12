//importing routes
import { Link } from 'react-router-dom';

//importing carroussel !
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

//importing icons
import CustomIcons from '../../components/CustomIcons';

//importing imagens
import perfil2 from '../../assets/perfil2.png'
import Carrousel1 from '../../assets/estacio-divulgacao.png';
import Carrousel2 from '../../assets/progcarioca.png';
import Carrousel3 from '../../assets/senac.png';
import Carrousel4 from '../../assets/VaiNaWebb.png';


//importing style
import styles from '../About/style.module.scss';

export default function about() {
    return (
        <div className={styles.divPai}>

            <figure>
                <img className={styles.perfil2} src={perfil2} alt='' />
                <figcaption>
                    <h2>Um pouco sobre mim</h2>
                </figcaption>
            </figure>

            <section className={styles.icons}>
                <p>Minhas redes sociais:</p>
                <a href='https://www.instagram.com/ronaldluiz957/?next=%2F' target='_blank'>
                    <CustomIcons icon="instagram" color="#f09433" size={25} />
                </a>

                <a href='https://github.com/Ronald-Luiz' target='_blank'>
                    <CustomIcons icon="github" color="gray" size={25} />
                </a>

                <a href='https://www.linkedin.com/in/ronald-luiz-9ab672200/' target='_blank'>
                    <CustomIcons icon="linkedin" color="#0e76a8" size={25} />
                </a>
            </section>

            <div className={styles.Caixa1}>
                <h3>Minha Jornada nas Tecnologias: Qualificações e Experiências</h3>
                <p>
                    Embarquei em uma empolgante jornada no mundo da tecnologia, onde cada aprendizado moldou minha trajetória de maneiras significativas. Meu percurso começou com as bases sólidas do HTML, onde desenvolvi uma compreensão profunda do DOM, combinando isso com técnicas avançadas de estilização por meio de folhas de estilo.
                    <br /><br />
                    A maestria na manipulação do DOM foi aprimorada com a fascinante linguagem JavaScript, proporcionando a base essencial para meu desenvolvimento como profissional. Ao longo dessa jornada, tive o privilégio de expandir meus horizontes para o mundo do React, uma biblioteca revolucionária que transformou a forma como concebemos e construímos websites. A facilidade notável proporcionada pelo React reflete-se nos projetos práticos em que tive o prazer de aplicar meus conhecimentos.
                    <br /><br />
                    Minha trajetória profissional inclui uma experiência valiosa como estagiário na empresa SEEL, onde desempenhei funções essenciais, desde a manutenção de computadores até a resolução de problemas cotidianos. Essa experiência consolidou minha paixão por tecnologia e foi um ponto de partida para minha busca constante por excelência e inovação.
                    <br /><br />
                    Hoje, meu foco está em consolidar meus conhecimentos em programação, com o objetivo claro de me tornar um desenvolvedor especializado. A cada desafio, enxergo uma oportunidade de crescimento e estou ansioso para contribuir ainda mais para o mundo do desenvolvimento web. Explore meu portfólio para descobrir alguns dos projetos que refletem minha jornada até aqui.
                </p>
            </div>


            <div className={styles.Caixa2}>
                {/* <h4>Tecnologias</h4> */}
                <section>
                    <CustomIcons icon='html' color='#f16529' size={60} />
                </section>
                <section>
                    <CustomIcons icon='css' color='#2965f1' size={60} />
                </section>
                <section>
                    <CustomIcons icon='javascript' color='#f7e018' size={60} />
                </section>
                <section>
                    <CustomIcons icon='react' color='#03a9f4' size={60} />
                </section>

                <section>
                    <CustomIcons icon='sass' color='#cf649a' size={60} />
                </section>

                <section>
                    <CustomIcons icon='styled' color='white' size={60} />
                </section>
            </div>

            <Carousel className={styles.Carousel}>
                <Carousel.Item className={styles.CarouselImg}>
                    <img
                        className='d-block w-100'
                        width={400}
                        height={600}
                        src={Carrousel1}
                        alt="Image One"
                    />
                    <Carousel.Caption>
                        <p>Formei-me na faculdade de Análise e Desenvolvimento de Sistemas (ADS) pela
                            Estácio, pois tinha plena convicção de que este era o caminho tecnológico que desejava
                            trilhar. Durante meu período na instituição, obtive uma visão abrangente sobre todos os
                            aspectos relacionados à tecnologia, o que me permitiu compreender a imensidão desse campo.</p>
                    </Carousel.Caption>

                </Carousel.Item>
                {/* --------------------------------------------------------------------------------------------------------------------------- */}
                <Carousel.Item className={styles.CarouselImg}>
                    <img
                        className='d-block w-100'
                        width={400}
                        height={600}
                        src={Carrousel2}
                        alt="Image Two"
                    />
                    <Carousel.Caption>
                        <p>Participei do programa "Programadores Cariocas" em parceria com a Resília,
                            onde minha paixão pela programação começou. Adquiri conhecimento em linguagens de
                            programação, desenvolvi habilidades em trabalho em equipe e networking. Iniciei estudos em
                            HTML, CSS e JavaScript e continuo aprofundando meu entendimento em novas tecnologias e
                            frameworks.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* --------------------------------------------------------------------------------------------------------------------------- */}
                {/* <Carousel.Item className={styles.CarouselImg}>
                    <img
                        className='d-block w-100'
                        width={400}
                        height={600}
                        src={Carrousel3}
                        alt="Image Two"
                    />
                    <Carousel.Caption>
                        <p>Durante esse processo, pude fazer incríveis conexões, nas quais formei as ótimas amizades que me ajudaram a vivenciar como é trabalhar em equipe.</p>
                    </Carousel.Caption>
                </Carousel.Item> */}
                {/* --------------------------------------------------------------------------------------------------------------------------- */}
                <Carousel.Item className={styles.CarouselImg}>
                    <img
                        className='d-block w-100'
                        width={400}
                        height={600}
                        src={Carrousel4}
                        alt=''
                    />
                    <Carousel.Caption>
                        <p>Realizei o Curso de Desenvolvimento Web pela equipe VaiNaWeb, o que
                            proporcionou um fortalecimento ainda mais profundo do meu conhecimento. Durante o curso,
                            revi conceitos que já havia estudado anteriormente e aprendi detalhes que havia deixado
                            passar despercebidos. Esse processo me impulsionou a começar a criar projetos completos de
                            forma independente, aplicando os novos conhecimentos adquiridos.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


        </div>
    )
}