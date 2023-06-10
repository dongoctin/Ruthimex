import React from 'react'
import { NavLink } from 'react-router-dom';
import { Images } from '../../images';
import { Container, Col, Row, nav } from 'react-bootstrap';
import './Products.css';

export default function Construction() {
    return (
        <diV>
            <div className='theme-mould'>
                <NavLink to="/homepage">
                    <img src={Images.aboutusImage01} alt="home-active" />
                </NavLink>

                <img src={Images.aboutusImage02} alt="icon-lienquan" />
                <a>
                    <span>Sản phẩm</span>
                </a>
                <img src={Images.aboutusImage02} alt="icon-lienquan" />
                <a to="/products/construction">
                    <span>Xây dựng và khai khoáng</span>
                </a>
                <img src={Images.aboutusImage02} alt="icon-lienquan" />

            </div>

            <div style={{ display: "flex" }}>
                <Col xs={12} sm={12} md={12} lg={9} className="mould-in-left">
                    <div className="module-in-title-left">
                        <span> Xây dựng và khai khoáng</span>
                    </div>
                    <div className="module-con-title-left-branch">
                        <Col xs={6} sm={6} md={3} >
                            <div className="pro-con-pic">
                                <a href="#" onClick={(e) => { e.preventDefault(); /* thêm mã xử lý tại đây */ }}>
                                    <img src={Images.productsconImage01} alt="IMG-4736" />
                                </a>
                            </div>
                            <div className="pro-con-title">
                                <a href="#" onClick={(e) => { e.preventDefault(); }} >
                                    <span>IMG-4736</span>
                                </a>
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={3} >
                            <div className="pro-con-pic">
                                <a href="#" onClick={(e) => { e.preventDefault(); /* thêm mã xử lý tại đây */ }}>
                                    <img src={Images.productsconImage02} alt="IMG-4737" />
                                </a>
                            </div>
                            <div className="pro-con-title">
                                <a href="#" onClick={(e) => { e.preventDefault(); }} >
                                    <span>IMG-4737</span>
                                </a>
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={3} >
                            <div className="pro-con-pic">
                                <a href="#" onClick={(e) => { e.preventDefault(); /* thêm mã xử lý tại đây */ }}>
                                    <img src={Images.productsconImage03} alt="IMG-4738" />
                                </a>
                            </div>
                            <div className="pro-con-title">
                                <a href="#" onClick={(e) => { e.preventDefault(); }} >
                                    <span>IMG-4738</span>
                                </a>
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={3} >
                            <div className="pro-con-pic">
                                <a href="#" onClick={(e) => { e.preventDefault(); /* thêm mã xử lý tại đây */ }}>
                                    <img src={Images.productsconImage04} alt="IMG-4739" />
                                </a>
                            </div>
                            <div className="pro-con-title">
                                <a href="#" onClick={(e) => { e.preventDefault(); }} >
                                    <span>IMG-4739</span>
                                </a>
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={3} >
                            <div className="pro-con-pic">
                                <a href="#" onClick={(e) => { e.preventDefault(); /* thêm mã xử lý tại đây */ }}>
                                    <img src={Images.productsconImage05} alt="IMG-4740" />
                                </a>
                            </div>
                            <div className="pro-con-title">
                                <a href="#" onClick={(e) => { e.preventDefault(); }} >
                                    <span>IMG-4740</span>
                                </a>
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={3} >
                            <div className="pro-con-pic">
                                <a href="#" onClick={(e) => { e.preventDefault(); /* thêm mã xử lý tại đây */ }}>
                                    <img src={Images.productsconImage06} alt="IMG-4741" />
                                </a>
                            </div>
                            <div className="pro-con-title">
                                <a href="#" onClick={(e) => { e.preventDefault(); }} >
                                    <span>IMG-4741</span>
                                </a>
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={3} >
                            <div className="pro-con-pic">
                                <a href="#" onClick={(e) => { e.preventDefault(); /* thêm mã xử lý tại đây */ }}>
                                    <img src={Images.productsconImage07} alt="IMG-4742" />
                                </a>
                            </div>
                            <div className="pro-con-title">
                                <a href="#" onClick={(e) => { e.preventDefault(); }} >
                                    <span>IMG-4742</span>
                                </a>
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={3} >
                            <div className="pro-con-pic">
                                <a href="#" onClick={(e) => { e.preventDefault(); /* thêm mã xử lý tại đây */ }}>
                                    <img src={Images.productsconImage08} alt="IMG-4743" />
                                </a>
                            </div>
                            <div className="pro-con-title">
                                <a href="#" onClick={(e) => { e.preventDefault(); }} >
                                    <span>IMG-4743</span>
                                </a>
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={3} >
                            <div className="pro-con-pic">
                                <a href="#" onClick={(e) => { e.preventDefault(); /* thêm mã xử lý tại đây */ }}>
                                    <img src={Images.productsconImage09} alt="IMG-4744" />
                                </a>
                            </div>
                            <div className="pro-con-title">
                                <a href="#" onClick={(e) => { e.preventDefault(); }} >
                                    <span>IMG-4744</span>
                                </a>
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={3} >
                            <div className="pro-con-pic">
                                <a href="#" onClick={(e) => { e.preventDefault(); /* thêm mã xử lý tại đây */ }}>
                                    <img src={Images.productsconImage10} alt="IMG-4745" />
                                </a>
                            </div>
                            <div className="pro-con-title">
                                <a href="#" onClick={(e) => { e.preventDefault(); }} >
                                    <span>IMG-4745</span>
                                </a>
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={3} >
                            <div className="pro-con-pic">
                                <a href="#" onClick={(e) => { e.preventDefault(); /* thêm mã xử lý tại đây */ }}>
                                    <img src={Images.productsconImage11} alt="IMG-4746" />
                                </a>
                            </div>
                            <div className="pro-con-title">
                                <a href="#" onClick={(e) => { e.preventDefault(); }} >
                                    <span>IMG-4746</span>
                                </a>
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={3} >
                            <div className="pro-con-pic">
                                <a href="#" onClick={(e) => { e.preventDefault(); /* thêm mã xử lý tại đây */ }}>
                                    <img src={Images.productsconImage12} alt="IMG-4747" />
                                </a>
                            </div>
                            <div className="pro-con-title">
                                <a href="#" onClick={(e) => { e.preventDefault(); }} >
                                    <span>IMG-4747</span>
                                </a>
                            </div>
                        </Col>


                    </div>

                </Col>

                <Col xs={0} sm={0} lg={3} className="mould-in-right">
                    <div className="golden-module-title">
                        <span> SẢN PHẨM</span>
                    </div>
                    <div className='golden-module-body'>
                        <ul>
                            <li>
                                <NavLink to="/products/construction">
                                    <span>Xây dựng và khai khoáng</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/products/auto">
                                    <span>Ô tô - xe máy</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/products/power">
                                    <span>Điện - điện tử</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/products/power">
                                    <span>Cấp thoát nước</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/products/mechanical">
                                    <span>Máy móc - thiết bị</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/products/consumer">
                                    <span>Sản phẩm tiêu dùng</span>
                                </NavLink>
                            </li>
                        </ul>

                    </div>

                </Col>
            </div>
        </diV >
    );
}