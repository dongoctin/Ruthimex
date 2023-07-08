import React from 'react'
import { NavLink } from 'react-router-dom';
import { Images } from '../../images';
import { Container, Col, Row, nav } from 'react-bootstrap';
import '../Products/Products.css';
import './ContactUs.css'

export default function ContactUs() {
    return (
        <div >
            <div className='theme-mould'>
                <NavLink to="/homepage">
                    <img src={Images.aboutusImage01} alt="home-active" />
                </NavLink>

                <img src={Images.aboutusImage02} alt="icon-lienquan" />
                <a>
                    <span>Liên hệ</span>
                </a>
                <img src={Images.aboutusImage02} alt="icon-lienquan" />

            </div>

            <div className="Formcontactus">
                <div className='Infor'>
                    <h2>* Trụ sở chính :</h2>
                    <h1>CÔNG TY TNHH MỘT THÀNH VIÊN CAO SU THỐNG NHẤT</h1>
                    <p>Số 06 Nguyễn Trọng Quyền, Phường Tân Thới Hòa, Quận Tân Phú, TP Hồ Chí Minh, Việt Nam</p>
                    <p>Mã số thuế: 0300770151</p>
                    <p>Điện thoại: (84-28) 39615453 / 37355875; Fax: (84-28) 37355874 / 37355879</p>
                    <p>Hotline : 0903 361 965</p>
                    <p>
                        Email: <a href="pr@ruthimex.com.vn"> pr@ruthimex.com.vn - tnrceo@gmail.com</a>
                    </p>
                    <p>*** Bản đồ công ty ***</p>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.608649407948!2d106.62996087417264!3d10.7646141594133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752e9ce12f1f39%3A0xf2e8dd9d12d35984!2zQ8O0bmcgVHkgQ2FvIFN1IFRo4buRbmcgTmjhuqV0!5e0!3m2!1svi!2s!4v1688806590077!5m2!1svi!2s"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="contact">
                    <h2>Gửi thông tin liên hệ</h2>
                    <input type="text" name="uname" placeholder='Your Name'></input>
                    <br />
                    <br />
                    <input type="email" name="email" placeholder='Email'></input>
                    <br />
                    <br />
                    <input type="number" name="phone" placeholder='Phone'></input>
                    <br />
                    <br />
                    <textarea name="message" placeholder="Your message"></textarea>
                    <br />
                    <br />
                    <button>Send Email</button>
                </div>

            </div>



        </div >
    );
}