import React from 'react';
import { Images } from '../images/index';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BackTopButton from './BackTopButton';


const settingsproduct = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
};

export default function Footer() {
    return (
        <div>
            <div className="homepagehotproducts">
                <div className='homepagetheme'>
                    <div className="theme">
                        <img src={Images.homepageImagestheme} alt="theme" />
                        <span>SẢN PHẨM TIÊU BIỂU</span>

                    </div>
                </div>
                <div className='homepagehot'>
                    <Slider {...settingsproduct} className='settingsproduct'>
                        <div className="imgahot">
                            <img src={Images.homepageImagehotproduct1} alt="Imagehotproduct1" />
                        </div>
                        <div className="imgahot">
                            <img src={Images.homepageImagehotproduct2} alt="Imagehotproduct2" />
                        </div>
                        <div className="imgahot">
                            <img src={Images.homepageImagehotproduct3} alt="Imagehotproduct3" />
                        </div>
                        <div className="imgahot">
                            <img src={Images.homepageImagehotproduct4} alt="Imagehotproduct4" />
                        </div>
                        <div className="imgahot">
                            <img src={Images.homepageImagehotproduct5} alt="Imagehotproduct5" />
                        </div>
                        <div className="imgahot">
                            <img src={Images.homepageImagehotproduct6} alt="Imagehotproduct6" />
                        </div>
                        <div className="imgahot">
                            <img src={Images.homepageImagehotproduct7} alt="Imagehotproduct7" />
                        </div>
                        <div className="imgahot">
                            <img src={Images.homepageImagehotproduct8} alt="Imagehotproduct8" />
                        </div>
                        <div className="imgahot">
                            <img src={Images.homepageImagehotproduct9} alt="Imagehotproduct9" />
                        </div>
                        <div className="imgahot">
                            <img src={Images.homepageImagehotproduct10} alt="Imagehotproduct10" />
                        </div>
                    </Slider>
                </div>
            </div>
            <BackTopButton />

            <div className="foot_act">
                <p>
                    <strong>
                        <span style={{ fontSize: 'small' }}><span style={{ fontFamily: 'Arial' }}>Address:</span></span>
                    </strong>
                    <span style={{ fontSize: 'small' }}>
                        <span style={{ fontFamily: 'Arial' }}> No. 06 Nguyen Trong Quyen, Tan Thoi Hoa Ward, Tan Phu District, Ho Chi Minh City <br />
                            <strong>Telephone:</strong>(+84)-28 39615453 / 37355875 <strong>Hotline :</strong> 0903 361 965 <br />
                            <strong>Fax:</strong> (+84)-28 37355874 / 37355879<br />
                            <strong>Email: </strong>pr@ruthimex.com.vn - tnrceo@gmail.com<br />
                        </span>
                    </span>
                </p>
                {/* <div className="col-md-3 visible-lg">
                    <div className="f-social">
                        <a className="f-facebook" href />
                        <a className="f-youtube" href />
                        <a className="f-google" href />
                    </div>
                </div> */}
            </div>
            <footer>
                Ruthimex Company Limited.
                <br />
                Copyright @ 2023 by Tinpro
            </footer>

        </div >

    );
}
