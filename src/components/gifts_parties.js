import React from 'react';

export default () => (
    <div className="giftsParties">
        <img className="underNavImg" src="assets/images/gifts-parties-image.png" alt="Gift Package of Macarons"/>
            <section>
                <div className="giftWrapper textStyling">
                    <aside>
                        <div className="lgText">Let's Eat Macarons!</div>
                        <p className="regText">We make it easy to share la passion du macaron with your friends, family and colleagues.
                            Choose from our array of premium gift options, or we can create a custom solution.
                            Contact us when you need help planning your celebration! <span><a href="mailto:order@mboutique.com">order@mboutique.com</a></span></p>
                    </aside>
                    <aside className="giftBoxes">
                        <div className="lgText">Gift Boxes</div>
                        <p className="regText">Our signature gift boxes make macarons the perfect gift for any occasion.</p>
                        <ul className="regText">
                            <li><span>gift box of 6 macarons in raspberrywhite - $ 10</span></li>
                            <li><span>gift box of 12 macarons in white, pistachio, or violet – $20</span></li>
                            <li><span>gift box of 24 macarons in violet – $40</span></li>
                            <li><span>gift box of 36 macarons in silver – $60</span></li>
                            <li><span>gift box à la ronde of 60 macarons in violet or silver – $120</span></li>
                        </ul>
                    </aside>
                    <aside className="partyTower">
                        <div className="lgText">Party Tower</div>
                        <p className="regText">Our 5-tiered party tower becomes the centerpiece of any special event or private celebration,
                            elegantly presenting your unique selection of sixty macarons.</p>
                        <ul className="regText">
                            <li><span>tower of 60 macarons – $120</span></li>
                        </ul>
                    </aside>
                </div>
            </section>
    </div>
)