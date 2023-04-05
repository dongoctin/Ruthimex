import React from 'react';
import { Images } from '../images/index';
import './HomePage.css'
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style, display: "block", background: "green",
            }}
            onClick={onClick}
        />
    );
};


let settingshomepage = {
    // dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 3,
    // slidesToScroll: 1
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    speed: 500,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: < NextArrow />,
    prevArrow: < PrevArrow />



};

export default function HomePage() {
    return (
        <div className='homepage'>
            <div className='homepagetheme'>
                <div className="theme">
                    <img src={Images.homepageImagestheme} alt="theme" />
                    <span>CÔNG NGHỆ SẢN XUẤT</span>

                </div>
                {/* HOME PAGE */}
            </div>
            <div className='homepagetech'>
                <Slider {...settingshomepage} className='settingshomepage'>
                    <div>
                        <img src={Images.homepageImage1} alt="homepageImage1" />
                        <span>THIẾT BỊ KIỂM TRA CHẤT LƯỢNG</span>
                    </div>
                    <div>
                        <img src={Images.homepageImage2} alt="homepageImage2" />
                        <span>PHÒNG THÍ NGHIỆM</span>
                    </div>
                    <div>
                        <img src={Images.homepageImage3} alt="homepageImage3" />
                        <span>MÁY LƯU HÓA - ÓI ĐÙN</span>
                    </div>
                    <div>
                        <img src={Images.homepageImage4} alt="homepageImage4" />
                        <span>DÂY CHUYỀN CÁN LUYỆN</span>
                    </div>
                    <div>
                        <img src={Images.homepageImage5} alt="homepageImage5" />
                        <span>CHẾ TẠO KHUÔN MẪU</span>
                    </div>
                    <div>
                        <img src={Images.homepageImage1} alt="homepageImage1" />
                        <span>THIẾT BỊ KIỂM TRA CHẤT LƯỢNG</span>
                    </div>
                    <div>
                        <img src={Images.homepageImage2} alt="homepageImage2" />
                        <span>PHÒNG THÍ NGHIỆM</span>
                    </div>
                </Slider>
            </div>

        </div>



    );
}
