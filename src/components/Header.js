import React, { useState } from 'react';
import { headerImages } from '../images/index';
import { NavLink } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Header() {
    const [showDropdown, setShowDropdown] = useState(false);

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

    let settings = {
        dots: true,
        customPaging: (i) => <button>{i + 1}</button>,
        infinite: true,
        fade: true,
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 2,
        slidesToScroll: 1,
        pauseOnHover: true // Tạm dừng khi rê chuột vào slider
    };

    return (
        <div className="web-head">


            <div className="search-form">
                <form method="post" action="http://ruthimex.com.vn/search.html">
                    <img type="image" className="search-pic" src={headerImages.headerImage1} />
                    <input type="text" name="query" className=" form-control search-text" />
                    <div className="language">
                        <a href="#">
                            <img src="http://ruthimex.com.vn/themes/ruthimex/images/vn.png" />
                        </a>
                        <a href="#">
                            <img src="http://ruthimex.com.vn/themes/ruthimex/images/en.png" />
                        </a>
                    </div>
                    <div className="head-email">
                        <span>Hotline: <e>0903361965</e></span> <b>-</b>
                        <span>Email: <e>tnrceo@gmail.com</e></span>
                    </div>
                </form>

            </div>
            <nav className="nav-links">
                <NavLink className="btn btn-info" to="/homepage">HOME PAGE</NavLink>
                <Dropdown show={showDropdown} onMouseEnter={handleDropdownClick} onMouseLeave={handleDropdownClick}>
                    <NavLink className="btn btn-info" to="/aboutus">ABOUT US</NavLink>
                    <Dropdown.Menu >
                        <Dropdown.Item href="#/action-1"> <i class="fa fa-chevron-right"></i> Core Value </Dropdown.Item>
                        <Dropdown.Item href="#/action-2"><i class="fa fa-chevron-right"></i> Management Team</Dropdown.Item>
                        <Dropdown.Item href="#/action-3"> <i class="fa fa-chevron-right"></i> History</Dropdown.Item>
                        <Dropdown.Item href="#/action-4" > <i class="fa fa-chevron-right"></i> Branch Systems</Dropdown.Item>
                    </Dropdown.Menu >
                </Dropdown>
                <Dropdown show={showDropdown1} onMouseEnter={handleDropdownClick1} onMouseLeave={handleDropdownClick1}>
                    <NavLink className="btn btn-info" to="/products">PRODUCTS</NavLink>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1"> <i class="fa fa-chevron-right"></i> Construction and Minerals </Dropdown.Item>
                        <Dropdown.Item href="#/action-2"><i class="fa fa-chevron-right"></i> Auto and Moto</Dropdown.Item>
                        <Dropdown.Item href="#/action-3"><i class="fa fa-chevron-right"></i> Power electronics</Dropdown.Item>
                        <Dropdown.Item href="#/action-4"><i class="fa fa-chevron-right"></i> Water supply</Dropdown.Item>
                        <Dropdown.Item href="#/action-5"><i class="fa fa-chevron-right"></i>  Mechanical</Dropdown.Item>
                        <Dropdown.Item href="#/action-6"><i class="fa fa-chevron-right"></i>  Consumer products</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown show={showDropdown2} onMouseEnter={handleDropdownClick2} onMouseLeave={handleDropdownClick2}>
                    <NavLink className="btn btn-info" id='capacityprofile' to="/capacityprofile">CAPACITY PROFILE</NavLink>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1"><i class="fa fa-chevron-right"></i>  Certificate </Dropdown.Item>
                        <Dropdown.Item href="#/action-2"><i class="fa fa-chevron-right"></i>  Awards</Dropdown.Item>
                        <Dropdown.Item href="#/action-3"><i class="fa fa-chevron-right"></i>  Facilities</Dropdown.Item>
                        <Dropdown.Item href="#/action-4"><i class="fa fa-chevron-right"></i>  Production technology</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown show={showDropdown3} onMouseEnter={handleDropdownClick3} onMouseLeave={handleDropdownClick3}>
                    <NavLink className="btn btn-info " id="news" to="/news">NEWS</NavLink>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1"><i class="fa fa-chevron-right"></i> Local news </Dropdown.Item>
                        <Dropdown.Item href="#/action-2"><i class="fa fa-chevron-right"></i> Recruitment </Dropdown.Item>
                        <Dropdown.Item href="#/action-3"><i class="fa fa-chevron-right"></i>  UNI0N activities</Dropdown.Item>
                        <Dropdown.Item href="#/action-4"><i class="fa fa-chevron-right"></i>   Market news</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <NavLink className="btn btn-info" to="/contactus">CONTACT US</NavLink>
            </nav>
            <Slider {...settings}>
                <div>
                    <img src={headerImages.headerImage2} alt="Trangchinh1" />
                </div>
                <div>
                    <img src={headerImages.headerImage3} alt="Trangchinh2" />
                </div>
                <div>
                    <img src={headerImages.headerImage4} alt="Trangchinh3" />
                </div>
            </Slider>
        </div>


    );
}

