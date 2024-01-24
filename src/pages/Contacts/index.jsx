import ParticlesBackground from '../../components/ParticlesBackground'


import React, { useRef, useState } from 'react';

//sweet alert
import Swal from 'sweetalert2'

//importing authenticator email
import emailjs from '@emailjs/browser';

//importing form
import { MDBInput, MDBTextArea, MDBBtn } from 'mdb-react-ui-kit';

//icons
import CustomIcons from '../../components/CustomIcons';

//importing style
import styles from '../Contacts/style.module.scss'


export default function Contacts() {


    const alert = () => {
        Swal.fire({
            // position: "top-end",
            icon: "success",
            title: "Formulario enviado!",
            showConfirmButton: false,
            timer: 1500
        });
    }



    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vmc9qwk', 'template_komfi5n', form.current, 'BNzy7iArWNAAjV2Iz')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <ParticlesBackground />
            <div className={styles.divPai}>
                <section className={styles.Form}>
                    <form ref={form} onSubmit={sendEmail} id='form' className='text-center' style={{ width: '100%', maxWidth: '400px' }}>
                        <h2>Converse Comigo</h2>
                        <p>Estou sempre disponível para um bate-papo amigável. Sinta-se à vontade para me contatar através do meu e-mail: <a href='mailto:ronaldxpdeveloper@gmail.com'>ronaldxpdeveloper@gmail.com</a></p>
                        <h2>Minhas redes sociais:</h2>

                        <section className={styles.icons}>
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

                        <MDBInput name='name' label='Nome' v-model='name' wrapperClass='mb-3' />
                        <MDBInput type='email' label='Email' v-model='email' wrapperClass='mb-3' />
                        <MDBTextArea name='message' wrapperClass='mb-3' label='Mensagem' />
                        <MDBBtn onClick={alert} type='submit' value='Send' color='primary' >
                            Enviar
                        </MDBBtn>

                    </form>


                </section>

            </div >
        </>
    )
}