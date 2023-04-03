import AboutBackground from '../assets/about-background.png'
import AboutBackgroundImage from '../assets/about-background-image.png'
import { BsFillPlayCircleFill } from 'react-icons/bs'

export default function About() {
    return (
        <div className='about-section-container'>
            <div className='about-background-image-container'>
                <img src={AboutBackground} alt="" />
            </div>
            <div className='about-section-image-container'>
                <img src={AboutBackgroundImage} alt="" />
            </div>
            <div className='about-section-text-container'>
                <p className='primary-subheading'>About</p>
                <h1 className='primary-heading'>Food Is An important Part Of A Balanced DIet</h1>
                <p className="primary-text">
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                </p>
                <p className='primary-text'>
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                </p>
                <div className='about-buttons-container'>
                    <button className='secondary-button'>Learn More</button>
                    <button className='watch-video-button'>
                        <BsFillPlayCircleFill /> Watch Video
                    </button>
                </div>
            </div>
        </div>
    )
}