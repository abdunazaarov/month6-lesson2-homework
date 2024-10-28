import "./About.scss"
import aboutPhoto1 from "../../assets/aboutPhoto1.png"
import aboutPhoto2 from "../../assets/aboutPhoto2.png"
import aboutPhoto3 from "../../assets/productPhoto7.png"
import aboutPhoto4 from "../../assets/Dots.png"

function About(){
    return <div className="about">
        <div className="container">
            <p className="about__subtitle">Here are our some of the best clients.</p>
            <h2 className="about__title">What People Say About Us</h2>
            <div className="about__wrapper">
                <div className="about__card">
                    <div className="about__image">
                        <img src={aboutPhoto1} alt="" />
                    </div>
                    <div className="about__text">
                        <h3 className="about__name">Hamza Faizi</h3>
                        <p className="about__desc">Don’t waste time, just order! This is the best website to puschase smart watches.</p>
                        <img src={aboutPhoto3} alt="" />
                    </div>
                </div>
                <div className="about__card">
                    <div className="about__image">
                        <img src={aboutPhoto2} alt="" />
                    </div>
                    <div className="about__text">
                        <h3 className="about__name">Hafiz Huzaifa</h3>
                        <p className="about__desc">I’ve been purchasing smart watches of Mohid for a long time. All the products are good quality.</p>
                        <img src={aboutPhoto3} alt="" />
                    </div>
                </div>
            </div>

            <img className="about__btn" src={aboutPhoto4} alt="" />
            
        </div>
    </div>
}

export default About