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
                    <span>Lịch sử hình thành</span>
                </a>
                <img src={Images.aboutusImage02} alt="icon-lienquan" />

            </div>

            <div style={{ display: "flex" }}>
                <Col xs={12} sm={12} md={12} lg={9} className="mould-in-left-history">
                    <div className="module-in-title-left">
                        <span>Lịch sử hình thành</span>
                    </div>

                    <p>Tiền thân của Công ty Cao Su Thống Nhất là Xí nghiệp Công tư Hợp doanh Kỹ nghệ Cao su Độc lập được thành lập ngày 01-08-1978. Qua nhiều lần cải tổ, sắp xếp lại, đến ngày 19-05-1981 Xí nghiệp ly được tách ra làm 03 xưởng là Xưởng Công tư Hợp Doanh Cao su Tiến Bộ 3,4 và 5.

                        Năm 1986 Xưởng Công tư Hợp doanh Cao su Tiến Bộ 4 được sáp nhập vào Xưởng Công tư Hợp doanh Cao su Tiến Bộ  5 thành Xí nghiệp Công tư Hợp doanh Cao su Thống Nhất.

                        Ngày 25-06-1992 theo chủ trương của Nhà nước, các tài sản của chủ cũ được hoàn trả và thực hiện quốc hữu hóa các tài sản vắng chủ, Xí nghiệp được đổi tên là Xí nghiệp Quốc doanh Cao su Thống Nhất, trực thuộc Liên hiệp Xí nghiệp Cao su - Sở Công nghiệp T/P Hồ Chí Minh.

                        Ngày 10-11-1992 Ủy Ban Nhân Dân Thành phố HCM ra quyết định thành lập lại doanh nghiệp Nhà nước công ty mang tên là Xí nghiệp Quốc doanh Cao su Thống Nhất.

                        Ngày 01-02-1994 Xí nghiệp Quốc doanh Cao su Thống Nhất tách ra thành Xí nghiệp hạch toán độc lập trực thuộc Sở Công Nghiệp TP.HCM.

                        Ngày 26-04-1994 Xí nghiệp được UBND TP.HCM đổi tên thành Công ty Cao su Thống Nhất có giấy phép xuất nhập khẩu trực tiếp.

                        Trong các năm 1994, 1998, 2000 Công ty Cao su Thống Nhất tiếp nhận thêm 03 đơn vị sản xuất kinh doanh : Ngày 20-08-1994 Công ty Cơ Khi Tiêu Dùng sáp nhập; Ngày 27-05-1998 Xí nghiệp Sản xuất Hoá màu sáp nhập; Ngày 11-07-2000 Nhà máy Thủy Tinh Sài Gòn sáp nhập.

                        Theo quyết định số 1325/QĐ-UBND ngày 27/3/2006 Ủy Ban Nhân Dân TP.HCM về thành lập Tổng Công ty Công nghiệp Sài Gòn hoạt động theo mô hình Công ty mẹ – Công ty con; trong đó Công ty Cao su
                    </p>
                    <div className="lich-su-hinh-thanh">
                        <img src={Images.aboutusImage06} alt="lịch sử hình thành" />

                    </div>
                    <p>
                        <span style={{ color: "black" }}>
                            Theo Quyết định  số 3329/QĐ-UBND ngày 30/7/2010 của UBND TP.HCM về việc phê duyệt đề án chuyển đổi Công ty Cao su Thống Nhất thành <strong style={{ backgroundcolor: "#fff0f5" }}>
                                Công ty TNHH Một thành viên Cao su Thống Nhất.
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