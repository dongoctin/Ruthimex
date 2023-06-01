import React, { useState } from 'react';
import { Images } from '../images/index';
import { NavLink } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import './headerslider.css'
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Col, Row, nav } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function Header() {

    const [showDropdown, setShowDropdown] = useState(false);

    const [showMenu, setShowMenu] = useState(false);
    const hideMenu = () => setShowMenu(!showMenu);


    const handleDropdownClick = () => {
        setShowDropdown(!showDropdown);
    };
    const [showDropdown1, setShowDropdown1] = useState(false);

    const handleDropdownClick1 = () => {
        setShowDropdown1(!showDropdown1);
    };
    const [showDropdown2, setShowDropdown2] = useState(false);

    const handleDropdownClick2 = () => {
        setShowDropdown2(!showDropdown2);
    };
    const [showDropdown3, setShowDropdown3] = useState(false);

    const handleDropdownClick3 = () => {
        setShowDropdown3(!showDropdown3);
    };

    function handleAboutUsClick(e) {
        const subMenu = document.querySelector('.sub-menu-aboutus');
        e.stopPropagation(); // Ngăn chặn sự kiện click lan tỏa đến menu chính và ẩn nó
        subMenu.classList.toggle('show');

    }

    let slider1Settings = {
        dots: true,
        customPaging: (i) => <button>{i + 1}</button>,
        infinite: true,
        fade: true,
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true // Tạm dừng khi rê chuột vào slider
    };

    return (
        <div className="web-head">

            <div className="mobi mobi-head hidden-lg">
                <a className="mobi-phone" href="tel:0367095029">
                    <img src={Images.headerImage6} alt="mobi-phone" />
                </a>

                {/* <Col xs={2} sm={2} className='mobi-center' style={{ padding: '0 7px' }}> */}

                <Dropdown show={showMenu} onClick={hideMenu} >
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <i class="fa-solid fa-bars"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="sub-menu">
                        <NavLink to="/homepage" onClick={hideMenu}><i class="fa-solid fa-house"></i>TRANG CHỦ</NavLink>
                        <NavLink to="/homepage" onClick={handleAboutUsClick}><i class=" fa-regular fa-id-card"></i> <span>VỀ CHÚNG TÔI</span>
                            <ul className='sub-menu-aboutus'>
                                <li>
                                    <NavLink show={showMenu} onClick={hideMenu} to="/aboutus/corevalue"><i class="fa-solid fa-snowflake"></i> <span>GIÁ TRỊ CỐT LÕI</span></NavLink>
                                </li>
                                <li>
                                    <NavLink show={showMenu} onClick={hideMenu} to="aboutus/managerteam"><i class="fa-solid fa-snowflake"></i> <span>ĐỘI NGŨ QUẢN LÝ</span></NavLink>
                                </li>
                                <li>
                                    <NavLink show={showMenu} onClick={hideMenu} to="aboutus/history"><i class="fa-solid fa-snowflake"></i><span>LỊCH SỬ HÌNH THÀNH</span></NavLink>
                                </li>
                                <li>
                                    <NavLink show={showMenu} onClick={hideMenu} to="aboutus/branchsystems"><i class="fa-solid fa-snowflake"></i><span>CÁC XÍ NGHIỆP TRỰC THUỘC</span></NavLink>
                                </li>
                            </ul>
                        </NavLink>
                        <NavLink to="/products" onClick={hideMenu}><i class="fa-brands fa-product-hunt"></i>SẢN PHẨM</NavLink>
                        <NavLink to="/capacityprofile" onClick={hideMenu}><i class="fa-solid fa-paper-plane"></i>HỒ SƠ NĂNG LỰC</NavLink>
                        <NavLink to="/news" onClick={hideMenu}><i class="fa-regular fa-newspaper"></i>TIN TỨC</NavLink>
                        <NavLink to="/contactus" onClick={hideMenu}><i class="fa-solid fa-envelope"></i>LIÊN HỆ</NavLink>
                    </Dropdown.Menu>
                </Dropdown>


                {/* </Col> */}
                <Col xs={8} sm={8} className='mobi-center' style={{ padding: '0 0 0 15px' }}>

                    <div className="mobi-search">
                        <form method="post">
                            <input className="form-control mobi-s-text" type="text" placeholder='Search' />
                        </form>
                    </div>

                </Col>
                <Col xs={2} sm={2} className='mobi-center'>

                    <div className="mobi-language">
                        <img src={Images.headerImageen} alt="enflat" />
                    </div>

                </Col>
                <div class="clearfix"></div>
                <div>

                </div>
            </div >
            <Col xs={12} className="mobi-head-banner" >
                <a href="#">
                    <img type="image" className="search-pic" src={Images.headerImage5} alt='mobi-head' />
                </a>

            </Col>


            {/* ..................................... */}
            <div className="head-banner">
                <form method="post" action="#">
                    <img type="image" className="search-pic" src={Images.headerImage1} alt='headerImage1' />
                    <input type="text" name="query" className=" search-text" />
                    <div className="language">
                        <a href="#">
                            <img src={Images.headerImagevn} alt="vnflat" />
                        </a>
                        <a href="#">
                            <img src={Images.headerImageen} alt="enflat" />
                        </a>
                    </div>
                    <div className="head-email">
                        <span>Hotline: <e>0903361965</e></span> <b>-</b>
                        <span>Email: <e>tnrceo@gmail.com</e></span>
                    </div>
                </form>

            </div>

            {/* .............................. */}
            <nav className="nav-links">
                <NavLink className="btn btn-info" to="/homepage">TRANG CHỦ</NavLink>
                <Dropdown show={showDropdown} onMouseEnter={handleDropdownClick} onMouseLeave={handleDropdownClick}>
                    <NavLink className="btn btn-info" to="/aboutus" >VỀ CHÚNG TÔI</NavLink>
                    <Dropdown.Menu >
                        <NavLink to="/aboutus/corevalue" className="dropdown-item about-us-1"> <i className="fa fa-chevron-right"></i>Giá trị cốt lõi </NavLink>
                        <NavLink to="aboutus/managerteam" className="dropdown-item"><i className="fa fa-chevron-right"></i>Đội ngũ quản lý</NavLink>
                        <NavLink to="aboutus/history" className="dropdown-item"> <i className="fa fa-chevron-right"></i> Lịch sử</NavLink>
                        <NavLink to="aboutus/branchsystems" className="dropdown-item" > <i className="fa fa-chevron-right"></i>Các xí nghiệp trực tiếp</NavLink>
                    </Dropdown.Menu >
                </Dropdown>
                <Dropdown show={showDropdown1} onMouseEnter={handleDropdownClick1} onMouseLeave={handleDropdownClick1}>
                    <NavLink className="btn btn-info" to="/products">SẢN PHẨM</NavLink>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1"> <i className="fa fa-chevron-right"></i>Xây dựng và khai khoán </Dropdown.Item>
                        <Dropdown.Item href="#/action-2"><i className="fa fa-chevron-right"></i>Ô tô - xe máy</Dropdown.Item>
                        <Dropdown.Item href="#/action-3"><i className="fa fa-chevron-right"></i>Điện - điện tử</Dropdown.Item>
                        <Dropdown.Item href="#/action-4"><i className="fa fa-chevron-right"></i>Cấp thoát nước</Dropdown.Item>
                        <Dropdown.Item href="#/action-5"><i className="fa fa-chevron-right"></i>Máy móc - thiết bị</Dropdown.Item>
                        <Dropdown.Item href="#/action-6"><i className="fa fa-chevron-right"></i>Sản phẩm tiêu dùng</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown show={showDropdown2} onMouseEnter={handleDropdownClick2} onMouseLeave={handleDropdownClick2}>
                    <NavLink className="btn btn-info" id='capacityprofile' to="/capacityprofile">HỒ SƠ NĂNG LỰC</NavLink>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1"><i className="fa fa-chevron-right"></i>Chứng nhận</Dropdown.Item>
                        <Dropdown.Item href="#/action-2"><i className="fa fa-chevron-right"></i>Giải thưởng</Dropdown.Item>
                        <Dropdown.Item href="#/action-3"><i className="fa fa-chevron-right"></i>Cơ sở vật chất</Dropdown.Item>
                        <Dropdown.Item href="#/action-4"><i className="fa fa-chevron-right"></i>Công nghệ sản xuất</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown show={showDropdown3} onMouseEnter={handleDropdownClick3} onMouseLeave={handleDropdownClick3}>
                    <NavLink className="btn btn-info " id="news" to="/news">TIN TỨC</NavLink>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1"><i className="fa fa-chevron-right"></i>Tin tức nội bộ</Dropdown.Item>
                        <Dropdown.Item href="#/action-2"><i className="fa fa-chevron-right"></i>Tuyển dụng</Dropdown.Item>
                        <Dropdown.Item href="#/action-3"><i className="fa fa-chevron-right"></i>Hoạt động đoàn thể</Dropdown.Item>
                        <Dropdown.Item href="#/action-4"><i className="fa fa-chevron-right"></i>Tin tức thị trường</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <NavLink className="btn btn-info" to="/contactus">CONTACT US</NavLink>
            </nav>
            <div className='slider1Settings'>
                <Slider {...slider1Settings}>
                    <div className='slider1Settings'>
                        <img src={Images.headerImage2} alt="Trangchinh1" />
                    </div>
                    <div>
                        <img src={Images.headerImage3} alt="Trangchinh2" />
                    </div>
                    <div>
                        <img src={Images.headerImage4} alt="Trangchinh3" />
                    </div>
                </Slider>
            </div>

        </div >



    );
}

