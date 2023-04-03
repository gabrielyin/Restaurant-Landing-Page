import ProfilePic from '../assets/john-doe-image.png';
import { AiFillStar } from 'react-icons/ai'

export default function Testimonials() {
    return (
        <div className='work-section-wrapper'>
            <div className='work-section-top'>
                <p className='primary-subheading'>
                    Testimonials
                </p>
                <h1 className='primary-heading'>
                    What are they saying
                </h1>
                <p className='primary-text'>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
            </div>
            <div className='testimonial-section-bottom'>
                <img src={ProfilePic} alt="" />
                <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
                <div className='testimonials-starts-container'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <h2>John Doe</h2>
            </div>
        </div >
    )
}