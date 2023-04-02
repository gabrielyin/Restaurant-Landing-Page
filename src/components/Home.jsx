import Navbar from "./Navbar"
import BannerBackground from '../assets/home-banner-background.png';
import BannerImage from '../assets/home-banner-image.png';
import { FiArrowRight } from 'react-icons/fi';

export default function Home() {
    return (
        <div className="home-container">
            <Navbar />
            <div className="home-banner-container">
                <div className="home-bannerImage-container">
                    <img src={BannerBackground} alt="" />
                </div>
                <div className="home-texting-section">
                    <h1 className="primary-heading">Your Favourite Food Delivery Hot & Fresh</h1>
                    <p className="primary-text">
                        Healthy switcher chefs do all the prep work,
                        liek peeding, chopping & marinating, so you
                        can cook fresh food
                    </p>
                    <button className="secondary-button">
                        Order Now <FiArrowRight />
                    </button>
                </div>
            </div>
        </div>
    )
}