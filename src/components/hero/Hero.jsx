import "./Hero.scss"
import heroImage from "../../assets/heroImage.png"

function Hero(){
    return <div className="container">
        <div className="hero">
            <div className="hero__text">
                <h2 className="hero__title">Discover Most Suitable Watches</h2>
                <p className="hero__desc">Find the best, reliable, and cheap smart watches here. We focus on product quality. Here you can find smart watches of almost all brands. So why you are waiting? Just order now!</p>
                <div>
                    <input className="hero__input" type="search" placeholder="Find the best brands..."  />
                    <button className="hero__btn">Search</button>
                </div>
            </div>
            <div className="hero__image">
                <img src={heroImage} alt="" />
            </div>
        </div>
    </div>
}

export default Hero