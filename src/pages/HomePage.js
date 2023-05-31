import React from 'react';
import { Images } from '../images/index';
import './HomePage.css'
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Col, Row } from 'react-bootstrap';




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
    arrows: false,
    nextArrow: < NextArrow />,
    prevArrow: < PrevArrow />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                infinite: true,
                dots: false,
                autoplay: false,
                arrows: true,
            }
        },
        {
            breakpoint: 786,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                autoplay: false,
                arrows: true,
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
                autoplay: false,
                arrows: true,
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
};

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


export default function HomePage() {
    return (
        <div className='homepage'>
            <div className='homepagetheme'>
                <div className="theme">
                    <img src={Images.homepageImagestheme} alt="theme" />
                    <span>CÔNG NGHỆ SẢN XUẤT</span>

                </div>
            </div>
            <div className='homepagetech'>
                <Slider {...settingshomepage} className='settingshomepage'>
                    <div className="imga">
                        <img src={Images.homepageImage1} alt="homepageImage1" />
                        <span>THIẾT BỊ KIỂM TRA CHẤT LƯỢNG</span>
                    </div>
                    <div className="imga">
                        <img src={Images.homepageImage2} alt="homepageImage2" />
                        <span>PHÒNG THÍ NGHIỆM</span>
                    </div>
                    <div className="imga">
                        <img src={Images.homepageImage3} alt="homepageImage3" />
                        <span>MÁY LƯU HÓA - ÓI ĐÙN</span>
                    </div>
                    <div className="imga">
                        <img src={Images.homepageImage4} alt="homepageImage4" />
                        <span>DÂY CHUYỀN CÁN LUYỆN</span>
                    </div>
                    <div className="imga">
                        <img src={Images.homepageImage5} alt="homepageImage5" />
                        <span>CHẾ TẠO KHUÔN MẪU</span>
                    </div>
                    <div className="imga">
                        <img src={Images.homepageImage2} alt="homepageImage2" />
                        <span>PHÒNG THÍ NGHIỆM</span>
                    </div>
                </Slider>
            </div>
            <div className="homepage-global-group">
                <Col lg={3} className='homepage-left'>
                    <div className='block-global-1'>
                        <div className='block-top-1'>
                            <img src={Images.homepageImageicon} alt="icon" />
                            <span>HỖ TRỢ</span>
                        </div>
                        <div className='block-body-1'>
                            <img src={Images.homepageImagehotline} alt="hotline" />
                        </div>
                    </div>
                    <div className='block-global-2'>
                        <div className='block-top-1'>
                            <img src={Images.homepageImageicon} alt="icon" />
                            <span>ĐỐI TÁC</span>
                        </div>
                        <div className='block-body-2'>
                            <img src={Images.homepageImagedoitac} alt="doitac" />
                        </div>
                    </div>
                    <div className='block-global-3'>
                        <div className='block-top-1'>
                            <img src={Images.homepageImageicon} alt="icon" />
                            <span>THÔNG TIN CÔNG TY</span>
                        </div>
                        <div className='block-body-3'>
                            <ul class="my-list">
                                <li> Giá trị cốt lỗi</li>
                                <li> Đội ngũ quản lý </li>
                                <li>Lịch sử hình thành</li>
                                <li> Các xí nghiệp trực thuộc</li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={9} className='homepage-right'>
                    <div className='block-product-1'>
                        <div className='block-product-top-1'>
                            <img src={Images.homepageImageicon} alt="icon" />
                            <span>SẢN PHẨM</span>
                        </div>
                    </div>
                    <div className='row-right'>
                        <Col lg={4} md={4} sm={6} xs={6} >
                            <div className="home-dv-pic">
                                <a href="#" onClick={(e) => { e.preventDefault(); }}>
                                    {/* ngăn sự kiện scroll to black nhưng cũng ngăn sự kiện chuyển hướng nên phải dùng window.location.href="/aboutus" để chuyển hướng  */}
                                    <img src={Images.homepageImagekhaikhoang} alt="khai khoang" />
                                </a>
                            </div>
                            <div className="home-dv-title">
                                <a href="#" onClick={(e) => { e.preventDefault(); /* thêm mã xử lý tại đây */ }}>
                                    <span>XÂY DỰNG VÀ KHAI KHOÁNG</span>
                                </a>
                            </div>
                        </Col>

                        <Col lg={4} md={4} sm={6} xs={6}>
                            <div className="home-dv-pic">
                                <a href="#" onClick={(e) => { e.preventDefault(); /* thêm mã xử lý tại đây */ }}>
                                    <img src={Images.homepageImageoto} alt="ô tô" />
                                </a>
                            </div>
                            <div className="home-dv-title">
                                <a href="#" onClick={(e) => { e.preventDefault(); }} >
                                    <span>Ô TÔ - XE MÁY</span>
                                </a>
                            </div>
                        </Col>

                        <Col lg={4} md={4} sm={6} xs={6}>
                            <div className="home-dv-pic">
                                <a href="#" onClick={(e) => { e.preventDefault(); /* thêm mã xử lý tại đây */ }}>
                                    <img src={Images.homepageImagedientu} alt="điện tử" />
                                </a>
                            </div>
                            <div className="home-dv-title">
                                <a href="#" onClick={(e) => { e.preventDefault(); }} >
                                    <span>ĐIỆN - ĐIỆN TỬ</span>
                                </a>
                            </div>
                        </Col>

                        <Col lg={4} md={4} sm={6} xs={6} >
                            <div className="home-dv-pic">
                                <a href="#" onClick={(e) => { e.preventDefault(); /* thêm mã xử lý tại đây */ }}>
                                    <img src={Images.homepageImagecapthoatnuoc} alt="cấp thoát nước" />
                                </a>
                            </div>
                            <div className="home-dv-title">
                                <a href="#" onClick={(e) => { e.preventDefault(); }} >
                                    <span>CẤP THOÁT NƯỚC</span>
                                </a>
                            </div>
                        </Col>

                        <Col lg={4} md={4} sm={6} xs={6} >
                            <div className="home-dv-pic">
                                <a href="#" onClick={(e) => { e.preventDefault(); /* thêm mã xử lý tại đây */ }}>
                                    <img src={Images.homepageImagemaymoc} alt="máy móc" />
                                </a>
                            </div>
                            <div className="home-dv-title">
                                <a href="#" onClick={(e) => { e.preventDefault(); }}>
                                    <span>MÁY MÓC - THIẾT BỊ</span>
                                </a>
                            </div>
                        </Col>

                        <Col lg={4} md={4} sm={6} xs={6} >
                            <div className="home-dv-pic">
                                <a href="#" onClick={(e) => { e.preventDefault(); }} >
                                    <img src={Images.homepageImagetieudung} alt="tiêu dùng" />
                                </a>
                            </div>
                            <div className="home-dv-title" onClick={(e) => { e.preventDefault(); }}>
                                <a href="#">
                                    <span> SẢN PHẨM TIÊU DÙNG</span>
                                </a>
                            </div>
                        </Col>
                    </div>
                </Col>
            </div>

        </div >



    );
}
