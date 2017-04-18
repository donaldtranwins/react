import React from 'react';

export default () => (
    <div>
        <img className="underNavImg" src="assets/images/contact-image.png" alt="Area Image of Location"/>
        <section>
            <div className="visitContactWrapper">
                <div className="textStyling visitUs">
                    <div className="lgText">Visit Us!</div>
                    <ul className="regText">
                        <li>Monday-Friday &#124; 10am — 9pm</li>
                        <li>Saturday &#124; 10am — 8pm</li>
                        <li>Sunday &#124; 11am — 7pm</li>
                        <li>Closed Thanksgiving Day, Christmas Day and Easter Day</li>
                    </ul>
                    <div className="regText">
                        <p>1625 Post St.<br/>
                            San Francisco, CA 94115</p>
                        <p>949.800-3111</p>
                        <p><a href="mailto:order@mboutique.com">order@mboutique.com</a></p>
                        <p>Send your questions, comments and flavor suggestions or place an order!</p>
                    </div>
                </div>
                <hr/>
                    <form className="contact">
                        <legend className="lgText">Contact Form</legend>
                        <input className="regText" type="text" name="name" value="Name"/>
                        <input className="regText" type="email" name="email" value="Email"/>
                        <input className="regText" type="text" name="phone" value="Phone"/>
                        <input className="regText" type="text" name="subject" value="Subject"/>
                        <textarea className="regText" name="message">Message</textarea>
                        <input className="regText" type="button" value="Send"/>
                    </form>
            </div>
            <div className="macarons contactMacarons">
                <img src="assets/images/macarons-image.png" alt="Group of Macaron Icons"/>
            </div>
        </section>
    </div>
);