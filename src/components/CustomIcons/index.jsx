import React from "react";
import { IoDocumentTextSharp } from "react-icons/io5";
import { IconContext } from "react-icons";
import {
    FaInstagram,
    FaGithub,
    FaLinkedin,
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaSass
} from "react-icons/fa";

import {
    IoMdHome,
    IoIosContact
} from "react-icons/io";

import { FcAbout } from "react-icons/fc";

import { RiJavascriptFill } from "react-icons/ri";
import { SiStyledcomponents } from "react-icons/si";
import { GrProjects } from "react-icons/gr";

export default function CustomIcons({ icon, color, size }) {
    const iconMapping = {
        //social media
        curriculum: IoDocumentTextSharp,
        instagram: FaInstagram,
        github: FaGithub,
        linkedin: FaLinkedin,

        //menu mobile
        inicio: IoMdHome,
        sobre: FcAbout,
        projetos: GrProjects,
        contatos: IoIosContact,

        //technologies
        html: FaHtml5,
        css: FaCss3Alt,
        javascript: RiJavascriptFill,
        react: FaReact,
        sass: FaSass,
        styled: SiStyledcomponents

    };

    const IconComponent = iconMapping[icon];

    return (
        <IconContext.Provider value={{ color, size }}>
            <IconComponent />
        </IconContext.Provider>
    );
}
