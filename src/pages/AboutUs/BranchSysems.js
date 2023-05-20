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
                <a to="/aboutus/branchsysems">
                    <span>Các xí nghiệp trực thuộc</span>
                </a>
                <img src={Images.aboutusImage02} alt="icon-lienquan" />

            </div>

            <div style={{ display: "flex" }}>
                <Col xs={12} sm={12} md={12} lg={9} className="mould-in-left">
                    <div className="module-in-title-left">
                        <span>Các xí nghiệp trực thuộc</span>
                    </div>
                    <div className="module-in-title-left-branch">
                        <i class="fa-solid fa-snowflake"></i><span> <strong>Xí nghiệp Cao Su Kỹ Thuật Cao</strong> </span>
                        <p>- Địa chỉ: Số 89, đường 128, ấp 12, xã Tân Thạnh Đông, huyện Củ Chi, Tp.HCM</p>
                        <p>- Điện thoại: 028.22407978</p>

                        <i class="fa-solid fa-snowflake"></i><span> <strong>Xí nghiệp Ruthimex 1</strong> </span>
                        <p>- Địa chỉ: Số 89, đường 128, ấp 12, xã Tân Thạnh Đông, huyện Củ Chi, Tp.HCM</p>
                        <p>- Điện thoại: 028.36018721</p>

                        <i class="fa-solid fa-snowflake"></i><span> <strong>Xí nghiệp Sản Xuất Hổn Hợp Cao Su</strong> </span>
                        <p>- Địa chỉ: Số 89, đường 128, ấp 12, xã Tân Thạnh Đông, huyện Củ Chi, Tp.HCM</p>
                        <p>-  Điện thoại: 028.37952875</p>

                    </div>

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