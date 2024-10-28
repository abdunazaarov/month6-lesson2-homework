import "./Contact.scss"
import contactPhoto from "../../assets/contactPhoto.png"

function Contact(){
    return <div className="contacts">
        <div className="container">
            <div className="contact">
                <div className="contact__text">
                    <h2 className="contact__title">Subscribe To Newsletter</h2>
                    <p className="contact__desc">Get free guide about smart watches daily. </p>
                    <div>
                        <input className="contact__input" type="input" placeholder="Enter email adress"  />
                        <button className="contact__btn">Search</button>
                    </div>
                </div>
                <div className="contact__image">
                    <img src={contactPhoto} alt="" />
                </div>
            </div>
        </div>
    </div>
}

export default Contact