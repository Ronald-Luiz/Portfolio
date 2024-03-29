import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "../menuItem/MenuItem";
import style from '../navigation/style.module.scss';

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

export const Navigation = () => (
    <motion.ul className={style.uL} variants={variants}>

        {itemIds.map(i => (
            <MenuItem i={i} key={i} />
        ))}

    </motion.ul>
);

const itemIds = [0];
