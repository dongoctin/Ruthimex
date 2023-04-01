import React from 'react';

export default function Footer() {
    return (
        <div>
            <div className="foot_act">
                <p>
                    <strong>
                        <span style={{ fontSize: 'small' }}><span style={{ fontFamily: 'Arial' }}>Address:</span></span>
                    </strong>
                    <span style={{ fontSize: 'small' }}>
                        <span style={{ fontFamily: 'Arial' }}> No. 06 Nguyen Trong Quyen, Tan Thoi Hoa Ward, Tan Phu District, Ho Chi Minh City <br />
                            <strong>Telephone:</strong>(+84)-28 39615453 / 37355875 <strong>Hotline :</strong> 0903 361 965 <br />
                            <strong>Fax:</strong> (+84)-28 37355874 / 37355879<br />
                            <strong>Email: </strong>pr@ruthimex.com.vn - tnrceo@gmail.com<br />
                        </span>
                    </span>
                </p>
                {/* <div className="col-md-3 visible-lg">
                    <div className="f-social">
                        <a className="f-facebook" href />
                        <a className="f-youtube" href />
                        <a className="f-google" href />
                    </div>
                </div> */}
            </div>
            <footer>
                Ruthimex Company Limited.
                <br />
                Copyright @ 2023 by Tinpro
            </footer>

        </div >

    );
}
