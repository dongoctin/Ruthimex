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
                        <NavLink to="/homepage" onClick={hideMenu}><i class="fa-solid fa-house"></i>HOME PAGE</NavLink>
                        <NavLink to="/aboutus" onClick={hideMenu}><i class="fa-regular fa-id-card"></i> ABOUT US</NavLink>
                        <NavLink to="/products" onClick={hideMenu}><i class="fa-brands fa-product-hunt"></i>PRODUCTS</NavLink>
                        <NavLink to="/capacityprofile" onClick={hideMenu}><i class="fa-solid fa-paper-plane"></i>CAPACITY PROFILE</NavLink>
                        <NavLink to="/news" onClick={hideMenu}><i class="fa-regular fa-newspaper"></i>NEWS</NavLink>
                        <NavLink to="/contactus" onClick={hideMenu}><i class="fa-solid fa-envelope"></i>CONTACT US</NavLink>
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
            </div>
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
                <NavLink className="btn btn-info" to="/homepage">HOME PAGE</NavLink>
                <Dropdown show={showDropdown} onMouseEnter={handleDropdownClick} onMouseLeave={handleDropdownClick}>
                    <NavLink className="btn btn-info" >ABOUT US</NavLink>
                    <Dropdown.Menu >
                        <NavLink to="/aboutus/corevalue" className="dropdown-item about-us-1"> <i className="fa fa-chevron-right"></i> Core Value </NavLink>
                        <NavLink to="aboutus/managerteam" className="dropdown-item"><i className="fa fa-chevron-right"></i> Management Team</NavLink>
                        <NavLink to="aboutus/history" className="dropdown-item"> <i className="fa fa-chevron-right"></i> History</NavLink>
                        <NavLink to="aboutus/branchsystems" className="dropdown-item" > <i className="fa fa-chevron-right"></i> Branch Systems</NavLink>
                    </Dropdown.Menu >
                </Dropdown>
                <Dropdown show={showDropdown1} onMouseEnter={handleDropdownClick1} onMouseLeave={handleDropdownClick1}>
                    <NavLink className="btn btn-info" to="/products">PRODUCTS</NavLink>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1"> <i className="fa fa-chevron-right"></i> Construction and Minerals </Dropdown.Item>
                        <Dropdown.Item href="#/action-2"><i className="fa fa-chevron-right"></i> Auto and Moto</Dropdown.Item>
                        <Dropdown.Item href="#/action-3"><i className="fa fa-chevron-right"></i> Power electronics</Dropdown.Item>
                        <Dropdown.Item href="#/action-4"><i className="fa fa-chevron-right"></i> Water supply</Dropdown.Item>
                        <Dropdown.Item href="#/action-5"><i className="fa fa-chevron-right"></i>  Mechanical</Dropdown.Item>
                        <Dropdown.Item href="#/action-6"><i className="fa fa-chevron-right"></i>  Consumer products</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown show={showDropdown2} onMouseEnter={handleDropdownClick2} onMouseLeave={handleDropdownClick2}>
                    <NavLink className="btn btn-info" id='capacityprofile' to="/capacityprofile">CAPACITY PROFILE</NavLink>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1"><i className="fa fa-chevron-right"></i>  Certificate </Dropdown.Item>
                        <Dropdown.Item href="#/action-2"><i className="fa fa-chevron-right"></i>  Awards</Dropdown.Item>
                        <Dropdown.Item href="#/action-3"><i className="fa fa-chevron-right"></i>  Facilities</Dropdown.Item>
                        <Dropdown.Item href="#/action-4"><i className="fa fa-chevron-right"></i>  Production technology</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown show={showDropdown3} onMouseEnter={handleDropdownClick3} onMouseLeave={handleDropdownClick3}>
                    <NavLink className="btn btn-info " id="news" to="/news">NEWS</NavLink>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1"><i className="fa fa-chevron-right"></i> Local news </Dropdown.Item>
                        <Dropdown.Item href="#/action-3"><i className="fa fa-chevron-right"></i>  UNI0N activities</Dropdown.Item>
                        <Dropdown.Item href="#/action-4"><i className="fa fa-chevron-right"></i>   Market news</Dropdown.Item>
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

