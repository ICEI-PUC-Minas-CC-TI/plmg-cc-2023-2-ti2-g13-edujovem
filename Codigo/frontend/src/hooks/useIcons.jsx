import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub, FaCogs  } from 'react-icons/fa';

const useIcons = () => {
    const InstagramIcon = () => <FaInstagram />;
    const LinkedInIcon = () => <FaLinkedin />;
    const GithubIcon = () => <FaGithub />;
    const AdminIcon = () => <FaCogs style={{ color: 'white', fontSize: '1.2rem' }} />;
    return { InstagramIcon, LinkedInIcon, GithubIcon, AdminIcon};
}

export default useIcons