import React from 'react';

export default () => (
    <div id="welcome">
        <img className="underNavImg" src="assets/images/welcome-image.png" alt="Area Image of Location" />
        <section>
            <div className="macarons welcomeMacarons">
                <img src="assets/images/macarons-image.png" alt="Group of Macaron Icons" />
            </div>
            <div className="welcomeWrapper textStyling">
                <aside>
                    <div className="lgText">Welcome To MBoutique!</div>
                    <p className="regText">We're a home-based baking business that specializes in the making of French macarons, a
                        gluten- free pastry item made from ground almonds. Our business began at the West Reading Farmers Market
                        in 2011. Last year (2013) marked our third and final season of participation at the market. MBoutique
                        was established to pay homage to the delicate French confectionery, the macaron. Our shop has been
                        recognized as the connoisseurs of this delicious French pastry because of the wonderful variety of flavors
                        from our great master chefs.</p>
                </aside>
                <aside>
                    <div className="lgText">We Love Macarons!</div>
                    <p className="regText">Renowned macarons, French delights of the moment can be met in a variety of flavors and
                        colors and are brilliant precisely because of their simplicity - a crispy coating, but delicate in a
                        loose blanket jam, chocolate butter cream is spread inviting.</p>
                    <p className="regText">Macarons combines perfectly with champagne or white wine, tea or hot chocolate, fresh
                        juices and natural fruit flavored coffee and guarantee that these little delights soon become friend that
                        you can not break.</p>
                </aside>
                <aside>
                    <div className="lgText">Find that flavor you like. Try a sample every day!</div>
                </aside>
            </div>
        </section>
        <div className="boxWrap">
            <div className="coloredBox">
                <section>
                    <div className="regText">Monday</div>
                    <p>15:00 - 16:00</p>
                </section>
                <section className="flavor">
                    <p id="chocolate">chocolate</p>
                    <div className="boxInABox"><p id="coconut">coconut</p></div>
                </section>
            </div>
            <div className="coloredBox">
                <section>
                    <div className="regText">Tuesday</div>
                    <p>14:00 - 15:00</p>
                </section>
                <section className="flavor">
                    <p id="violet">violet cassis</p>
                    <p id="greenTea">green tea</p>
                </section>
            </div>
            <div className="coloredBox">
                <section>
                    <div className="regText">Wednesday</div>
                    <p>09:00 - 10:00</p>
                </section>
                <section className="flavor">
                    <p id="passionFruit">passion fruit</p>
                    <div className="boxInABox"><p id="vanilla">vanilla</p></div>
                </section>
            </div>
            <div className="coloredBox">
                <section>
                    <div className="regText">Thursday</div>
                    <p>18:00 - 15:00</p>
                </section>
                <section className="flavor">
                    <p id="coffee">coffee</p>
                    <p id="pistachio">pistachio</p>
                </section>
            </div>
            <div className="coloredBox">
                <section>
                    <div className="regText">Friday</div>
                    <p>11:00 - 12:00</p>
                </section>
                <section className="flavor">
                    <p id="raspberry">raspberry</p>
                    <div className="boxInABox"><p id="lemon">lemon</p></div>
                </section>
            </div>
            <div className="coloredBox">
                <section>
                    <div className="regText">Saturday</div>
                    <p>13:00 - 14:00</p>
                </section>
                <section className="flavor">
                    <p id="rose">rose</p>
                    <p id="tiffany">tiffany blue</p>
                </section>
            </div>
            <div className="coloredBox">
                <section>
                    <div className="regText">Sunday</div>
                    <p>10:00 - 11:00</p>
                </section>
                <section className="flavor">
                    <p id="caramel">caramel</p>
                    <div className="boxInABox"><p id="almond">almond</p></div>
                </section>
            </div>
        </div>
    </div>
)