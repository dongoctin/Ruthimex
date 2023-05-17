import React from 'react'
import { NavLink } from 'react-router-dom';
import { Images } from '../../images';
import { Container, Col, Row, nav } from 'react-bootstrap';
import './AboutUs.css'

export default function CoreValue() {
    return (
        <diV>
            <div className='theme-mould'>
                <NavLink to="/homepage">
                    <img src={Images.aboutusImage01} alt="home-active" />
                </NavLink>

                <img src={Images.aboutusImage02} alt="icon-lienquan" />
                <a>
                    <span>Về chúng tôi</span>
                </a>
                <img src={Images.aboutusImage02} alt="icon-lienquan" />
                <a to="/aboutus/corevalue">
                    <span>Giá trị cốt lõi</span>
                </a>
                <img src={Images.aboutusImage02} alt="icon-lienquan" />

            </div>

            <div style={{ display: "flex" }}>
                <Col xs={12} sm={12} md={12} lg={9} className="mould-in-left">
                    <div className="module-in-title-left">
                        <span>Giá trị cốt lõi</span>
                    </div>
                    <div className="tintuc-detail-text">
                        <img src={Images.aboutusImage03} alt="banner_firma" />

                    </div>
                    <p>RUTHIMEX- ĐÁP ỨNG CAO HƠN SỰ MONG ĐỢI CỦA KHÁCH HÀNG</p>
                    <p>Chất lượng sản phẩm, niềm tin từ khách hàng, mạng lưới thương mại hướng đến toàn cầu đã nói lên bề dày của Ruthimex, với hơn nhiều năm trong lĩnh vực chuyên sản xuất gia công và cung cấp các sản phẩm cao su, cao su- kim loại kỹ thuật cao cho mọi ngành công nghiệp.</p>
                    <div className="tintuc-detail-text-1">
                        <img src={Images.aboutusImage04} alt="dien va dien dien tu1" />
                    </div>
                    <p>Tích cực sáng tạo, tìm kiếm mức độ cao nhất sự hoàn hảo của sản phẩm với chi phí, giá thành hợp lý vì lợi ích của khách hàng và vì sự phát triển không ngừng của công ty.</p>
                    <p>Với sức mạnh kinh nghiệm, độ chính xác cao kết hợp công nghệ và quy trình sản xuất hiện đại, Ruthimex tự tin sản xuất và <span style={{ color: "#008000" }}> <strong>ĐÁP ỨNG CAO HƠN SỰ MONG ĐỢI CỦA KHÁCH HÀNG</strong></span></p>
                    <p>
                        <span style={{ color: "#008000" }}>
                            <strong style={{ backgroundcolor: "#fff0f5" }}>
                                Sánh bước cùng khách hàng, chúng tôi tự tin vươn đến toàn cầu.
                            </strong>
                        </span>
                    </p>



                </Col>

                <Col xs={0} sm={0} lg={3} className="mould-in-right">
                    <div className="golden-module-title">
                        <span> VỀ CHÚNG TÔI</span>
                    </div>
                    <div className='golden-module-body'>
                        <ul>
                            <li>
                                <NavLink to="/aboutus/corevalue">
                                    <span>Giá trị cốt lõi</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/aboutus/history">
                                    <span>Lịch sử hình thành</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/aboutus/managerteam">
                                    <span>Đội ngũ quản lý</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/aboutus/branchsystems">
                                    <span>Các xí nghiệp trực thuộc</span>
                                </NavLink>
                            </li>
                        </ul>

                    </div>

                </Col>
            </div>
        </diV >
    );
}