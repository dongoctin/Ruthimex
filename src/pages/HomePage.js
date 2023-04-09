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
                        <img src={Images.homepageImage1} alt="homepageImage1" />
                        <span>THIẾT BỊ KIỂM TRA CHẤT LƯỢNG</span>
                    </div>
                    <div className="imga">
                        <img src={Images.homepageImage2} alt="homepageImage2" />
                        <span>PHÒNG THÍ NGHIỆM</span>
                    </div>
                </Slider>
            </div>
            <Container className="homepage-global-group">
                <Col md={3} className='homepage-left'>
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
                <Col md={9} className='homepage-right'>
                    <div className='block-product-1'>
                        <div className='block-product-top-1'>
                            <img src={Images.homepageImageicon} alt="icon" />
                            <span>SẢN PHẨM</span>
                        </div>
                    </div>
                    <div className='row-right'>
                        <Col md={4} xs={6}>
                            <div className="home-dv-pic">
                                <a href="#">
                                    <img src={Images.homepageImagekhaikhoang} alt="khai khoang" />
                                </a>
                                {/* <div class="overlay"></div> */}
                            </div>
                            <div className="home-dv-title">
                                <a href="#">
                                    <span>XÂY DỰNG VÀ KHAI KHOÁNG</span>
                                </a>
                            </div>
                        </Col>

                        <Col md={4} xs={6}>
                            <div className="home-dv-pic">
                                <a href="#">
                                    <img src={Images.homepageImageoto} alt="ô tô" />
                                </a>
                            </div>
                            <div className="home-dv-title">
                                <a href="#">
                                    <span>Ô TÔ - XE MÁY</span>
                                </a>
                            </div>
                        </Col>

                        <Col md={4} xs={6}>
                            <div className="home-dv-pic">
                                <a href="#">
                                    <img src={Images.homepageImagedientu} alt="điện tử" />
                                </a>
                            </div>
                            <div className="home-dv-title">
                                <a href="#">
                                    <span>ĐIỆN - ĐIỆN TỬ</span>
                                </a>
                            </div>
                        </Col>

                        <Col md={4} xs={6}>
                            <div className="home-dv-pic">
                                <a href="#">
                                    <img src={Images.homepageImagecapthoatnuoc} alt="cấp thoát nước" />
                                </a>
                            </div>
                            <div className="home-dv-title">
                                <a href="#">
                                    <span>CẤP THOÁT NƯỚC</span>
                                </a>
                            </div>
                        </Col>

                        <Col md={4} xs={6}>
                            <div className="home-dv-pic">
                                <a href="#">
                                    <img src={Images.homepageImagemaymoc} alt="máy móc" />
                                </a>
                            </div>
                            <div className="home-dv-title">
                                <a href="#">
                                    <span>MÁY MÓC - THIẾT BỊ</span>
                                </a>
                            </div>
                        </Col>

                        <Col md={4} xs={6}>
                            <div className="home-dv-pic">
                                <a href="#">
                                    <img src={Images.homepageImagetieudung} alt="tiêu dùng" />
                                </a>
                            </div>
                            <div className="home-dv-title">
                                <a href="#">
                                    <span> SẢN PHẨM TIÊU DÙNG</span>
                                </a>
                            </div>

                        </Col>


                    </div>



                </Col>
            </Container>



        </div >



    );
}
