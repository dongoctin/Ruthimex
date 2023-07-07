import React from 'react'
import { NavLink } from 'react-router-dom';
import { Images } from '../../images';
import { Container, Col, Row, nav } from 'react-bootstrap';
import './Products.css';

export default function Water() {
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
                <a to="/products/auto">
                    <span>Ô tô - xe máy</span>
                </a>
                <img src={Images.aboutusImage02} alt="icon-lienquan" />

            </div>

            <div style={{ display: "flex" }}>
                <Col xs={12} sm={12} md={12} lg={9} className="mould-in-left">
                    <div className="module-in-title-left">
                        <span> Ô tô - xe máy</span>
                    </div>
                    <div className="module-con-title-left-branch">
                        <Col xs={6} sm={6} md={3} >
                            <div className="pro-con-pic">
                                <a href="#" onClick={(e) => { e.preventDefault(); /* thêm mã xử lý tại đây */ }}>
                                    <img src={Images.productsconImage13} alt="IMG-4801" />
                                </a>
                            </div>
                            <div className="pro-con-title">
                                <a href="#" onClick={(e) => { e.preventDefault(); }} >
                                    <span>IMG-4801</span>
                                </a>
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={3} >
                            <div className="pro-con-pic">
                                <a href="#" onClick={(e) => { e.preventDefault(); /* thêm mã xử lý tại đây */ }}>
                                    <img src={Images.productsconImage14} alt="IMG-4802" />
                                </a>
                            </div>
                            <div className="pro-con-title">
                                <a href="#" onClick={(e) => { e.preventDefault(); }} >
                                    <span>IMG-4802</span>
                                </a>
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={3} >
                            <div className="pro-con-pic">
                                <a href="#" onClick={(e) => { e.preventDefault(); /* thêm mã xử lý tại đây */ }}>
                                    <img src={Images.productsconImage15} alt="IMG-4803" />
                                </a>
                            </div>
                            <div className="pro-con-title">
                                <a href="#" onClick={(e) => { e.preventDefault(); }} >
                                    <span>IMG-4803</span>
                                </a>
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={3} >
                            <div className="pro-con-pic">
                                <a href="#" onClick={(e) => { e.preventDefault(); /* thêm mã xử lý tại đây */ }}>
                                    <img src={Images.productsconImage16} alt="IMG-4804" />
                                </a>
                            </div>
                            <div className="pro-con-title">
                                <a href="#" onClick={(e) => { e.preventDefault(); }} >
                                    <span>IMG-4804</span>
                                </a>
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={3} >
                            <div className="pro-con-pic">
                                <a href="#" onClick={(e) => { e.preventDefault(); /* thêm mã xử lý tại đây */ }}>
                                    <img src={Images.productsconImage17} alt="IMG-4805" />
                                </a>
                            </div>
                            <div className="pro-con-title">
                                <a href="#" onClick={(e) => { e.preventDefault(); }} >
                                    <span>IMG-4805</span>
                                </a>
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={3} >
                            <div className="pro-con-pic">
                                <a href="#" onClick={(e) => { e.preventDefault(); /* thêm mã xử lý tại đây */ }}>
                                    <img src={Images.productsconImage18} alt="IMG-4806" />
                                </a>
                            </div>
                            <div className="pro-con-title">
                                <a href="#" onClick={(e) => { e.preventDefault(); }} >
                                    <span>IMG-4806</span>
                                </a>
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={3} >
                            <div className="pro-con-pic">
                                <a href="#" onClick={(e) => { e.preventDefault(); /* thêm mã xử lý tại đây */ }}>
                                    <img src={Images.productsconImage19} alt="IMG-4807" />
                                </a>
                            </div>
                            <div className="pro-con-title">
                                <a href="#" onClick={(e) => { e.preventDefault(); }} >
                                    <span>IMG-4807</span>
                                </a>
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={3} >
                            <div className="pro-con-pic">
                                <a href="#" onClick={(e) => { e.preventDefault(); /* thêm mã xử lý tại đây */ }}>
                                    <img src={Images.productsconImage20} alt="IMG-4808" />
                                </a>
                            </div>
                            <div className="pro-con-title">
                                <a href="#" onClick={(e) => { e.preventDefault(); }} >
                                    <span>IMG-4808</span>
                                </a>
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={3} >
                            <div className="pro-con-pic">
                                <a href="#" onClick={(e) => { e.preventDefault(); /* thêm mã xử lý tại đây */ }}>
                                    <img src={Images.productsconImage21} alt="IMG-4809" />
                                </a>
                            </div>
                            <div className="pro-con-title">
                                <a href="#" onClick={(e) => { e.preventDefault(); }} >
                                    <span>IMG-4809</span>
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