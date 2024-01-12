import * as React from "react";
import { motion } from "framer-motion";
import style from '../menuItem/style.module.scss';
import { Link } from 'react-router-dom';

import CustomIcon from '../../../CustomIcons'

//Function to scrollbar 
function handleScrollTo(elementId) {
    const element = document.querySelector(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};



const variants = {
    open: {
        y: 10,
        opacity: 10,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

// const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ i }) => {

    // const style = { border: `2px solid ${colors[i]}` };

    return (
        <motion.li className={style.LiPai}
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className={style.TextPlace} >
                <button><CustomIcon icon='inicio' color='black' size={20} /><li><Link to='/'>Início</Link></li></button>
                <button><CustomIcon icon='sobre' color='black' size={20} /><li><Link to='/' onClick={() => handleScrollTo('#sobre')}>Sobre</Link></li></button>
                <button><CustomIcon icon='projetos' color='black' size={20} /><li><Link to='/projetos'>Projetos</Link></li></button>
                <button><CustomIcon icon='contatos' color='black' size={20} /><li><Link to='/contatos'>Contato</Link></li></button>
            </div>

        </motion.li >

    );
};
