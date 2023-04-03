import PickMeals from '../assets/pick-meals-image.png';
import ChooseMeals from '../assets/choose-image.png';
import DeliveryMeals from '../assets/delivery-image.png';

export default function Work() {
    const workInfoData = [
        {
            image: PickMeals,
            title: "Pick Meals",
            text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
        {
            image: ChooseMeals,
            title: "Choose How Often",
            text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
        {
            image: DeliveryMeals,
            title: "Fast Deliveries",
            text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        }
    ]

    return (
        <div className='work-section-wrapper'>
            <div className='work-section-top'>
                <p className='primary-subheading'>
                    Work
                </p>
                <h1 className='primary-heading'>
                    How It Works
                </h1>
                <p className='primary-text'>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
            </div>
            <div className='work-section-bottom'>
                {workInfoData.map((data) => {
                    return (
                        <div className='work-section-info'>
                            <div className='info-boxes-img-container'>
                                <img src={data.image} alt="" />
                            </div>
                            <h2>
                                {data.title}
                            </h2>
                            <p>
                                {data.text}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}