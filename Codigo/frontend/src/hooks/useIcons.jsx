import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const useIcons = () => {
    const InstagramIcon = () => <FaInstagram />;
    const LinkedInIcon = () => <FaLinkedin />;
    const GithubIcon = () => <FaGithub />
    return { InstagramIcon, LinkedInIcon, GithubIcon};
}

export default useIcons