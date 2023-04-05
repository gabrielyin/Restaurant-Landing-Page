import Logo from '../assets/Logo.svg'
import { BsTwitter } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import { SiLinkedin } from 'react-icons/si'
import { FaFacebookF } from 'react-icons/fa'


export default function Footer() {
    return (
        <div className='footer-wrapper'>
            <div className='footer-section-one'>
                <div className='footer-logo-container'>
                    <img src={Logo} alt="" />
                </div>
                <div className='footer-icons'>
                    <BsTwitter />
                    <SiLinkedin />
                    <BsYoutube />
                    <FaFacebookF />
                </div>
            </div>
            <div className='footer-section-two'>
                <div className='footer-section-columns'>
                    <span>Quality</span>
                    <span>Help</span>
                    <span>Share</span>
                    <span>Carreers</span>
                    <span>Testmionials</span>
                    <span>Work</span>
                </div>
                <div className='footer-section-columns'>
                    <span>24-5333-2342</span>
                    <span>hello@gmail.com</span>
                    <span>press@mail.com</span>
                    <span>contact@gmail.com</span>
                </div>
                <div className='footer-section-columns'>
                    <span>Terms & Conditions</span>
                    <span>Privacy Policy</span>
                </div>
            </div>
        </div>
    )
}