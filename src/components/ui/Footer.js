import React from 'react'
import { DiGithubBadge, DiCodepen } from 'react-icons/di'
import { FaLinkedinIn } from 'react-icons/fa'

const Footer = () => (
    <footer>
        <p>marissa.evergreen@gmail.com</p>
        <div className="icons">
            <a href="https://github.com/marissamcdonnell">
                <DiGithubBadge />
            </a>
            <a href="https://www.linkedin.com/in/marissa-mcdonnell-a210741a/">
                <FaLinkedinIn />
            </a>
            <a href="https://codepen.io/artsa79/">
                <DiCodepen />
            </a>
        </div>
    </footer>
)

export default Footer