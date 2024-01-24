//importing routes
import { Link } from 'react-router-dom';

//menu mobile
import { MenuMobile } from '../Header/menuMobile/index.jsx';

//importing styles
import styles from './style.module.scss';
import React, { useState, useEffect, useRef } from 'react';


function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuRef = useRef();




    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                // Clicked outside the menu, handle accordingly
                console.log('Clicked outside the menu');

                toggleMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef]);


    //Function to scrollbar 
    function handleScrollTo(elementId) {
        const element = document.querySelector(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };



    // const toggleMenu = () => {

    //     setIsMenuOpen(!isMenuOpen);

    // }



    return (
        <>

            <header>

                <div className={styles.Menus}>


                    {/* menu Desktop */}
                    <nav className={styles.Menu}>
                 
                            <h3>Ronald <p>Dev</p></h3>
                 
                        <ul>

                            <li>
                                <Link to='/'>
                                    <span className={styles.redBracket}>{'<'}</span>Inicio<span className={styles.redBracket}>{'/>'}</span>
                                </Link>
                            </li>

                            <li>
                                <Link to='/' onClick={() => handleScrollTo('#sobre')}>
                                    <span className={styles.redBracket}>{'<'}</span>Sobre<span className={styles.redBracket}>{'/>'}</span>
                                </Link>
                            </li>

                            <li>
                                <Link to='/projetos'>
                                    <span className={styles.redBracket}>{'<'}</span>Projetos<span className={styles.redBracket}>{'/>'}</span>
                                </Link>
                            </li>

                            <li>
                                <Link to='/contatos'>
                                    <span className={styles.redBracket}>{'<'}</span>Contato<span className={styles.redBracket}>{'/>'}</span>
                                </Link>
                            </li>

                        </ul>

                    </nav>


                    {/* menu Mobile */}

                    <div className={styles.menuMobile}>
                        <MenuMobile />
                    </div>

                    {/* <section className={styles.divMobile}>
                        <button className={styles.mobileButton} onClick={toggleMenu}>
                            <div className={styles.line1}></div>
                            <div className={styles.line2}></div>
                            <div className={styles.line3}></div>
                        </button>


                        {isMenuOpen && (
                            <nav ref={menuRef} className={styles.menuMobile}>
                                <ul>
                                    <li>
                                        <Link to='/'>Inicio</Link>
                                    </li>

                                    <li>
                                        <Link to='/sobre'>Sobre </Link>
                                    </li>

                                    <li>
                                        <Link to='/projetos'>Projetos</Link>
                                    </li>

                                    <li>
                                        <Link to='/contatos'>Contato</Link>
                                    </li>
                                </ul>
                            </nav>
                        )}

                    </section> */}







                </div>
            </header>

        </>
    )

}

export default Header;