import React from 'react';
import "./Home.css";
import Product from "./Product";
function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
                 alt=""/>
            

            <div className="home__row">
                {/* Product */}
                {/* Product */}
                <Product id="1234" title="Bourge Men's Vega-3 Running Shoes" price={599} image="https://m.media-amazon.com/images/I/41HmPzy0yiL.__AC_SY200_.jpg" rating={4} />
                <Product id="4567" title="Turtle Beach Recon 150" price={3599} image="https://m.media-amazon.com/images/I/41ub4XzjUUL.__AC_SY200_.jpg" rating={3} />

            </div>
            
            <div className="home__row">
                {/* Product */}
                {/* Product */}
                {/* Product */}
                <Product id="1345" title="HP Pavilion Gaming DK0268TX 15.6-inch Laptop (Core i5-9300H/8GB/512GB SSD/Windows 10 Home/4GB NVIDIA GeForce GTX 1650 Graphics), Shadow Black" price={299} image="https://m.media-amazon.com/images/I/41Hxk3Dl5RL.__AC_SY200_.jpg" rating={3} />
                <Product id="6754" title="Samsung Galaxy S10 (Prism Blue, 8GB RAM, 128GB Storage)" price={49990} image="https://m.media-amazon.com/images/I/31r5+bXhl0L.__AC_SY200_.jpg" rating={4} />
                <Product id="8753" title="Mediweave KN95 (Equivalent to N95, FFP2) Mask/Respirator,CE certified, Pack of 5" price={399} image="https://images-eu.ssl-images-amazon.com/images/I/31gu65u1gkL._AC_SY200_.jpg" rating={5} />
            </div>

            <div className="home__row">
                {/* Product */}
                <Product id="2343" title="VOUCH Latex Medical Examination Disposable Powdered Hand Gloves - 100 Pieces" price={749} image="https://images-eu.ssl-images-amazon.com/images/I/41GR0aNdlrL._AC_SY200_.jpg" rating={4} />
            </div>
            </div>
        </div>
    )
}

export default Home;
