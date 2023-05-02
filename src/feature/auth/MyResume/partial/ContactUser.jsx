import React from 'react';
import { Col, Row } from '../../../../components/Grid';
import MessegerIcon from '../../../../components/Icon/Messeger';
import PhoneIcon from '../../../../components/Icon/Phone';
const ContactUser = () => {
    return (
        <Row align="center">
            <Col xl={4} lg={4} md={4} sm={12} className="border">
                <div className="resume-information__profile ">
                    <div className="resume-information__initial">JR</div>
                    <div>
                        <div className="resume-information__name">
                            Jack Skywalker
                        </div>
                        <div>Bandung, Indonesia</div>
                    </div>
                </div>
            </Col>
            <Col xl={4} lg={4} md={4} sm={12} className="border">
                <div>
                    <h4>Phone</h4>
                    <PhoneIcon color="#444444" /> +62-819-1234-5678
                </div>
            </Col>
            <Col xl={4} lg={4} md={4} sm={12}>
                <h4>Email</h4>
                <div className="resume-information__email">
                    <a href="mailto:themandalorian@gmail.com">
                        <MessegerIcon /> themandalorian@gmail.com
                    </a>
                </div>
            </Col>
        </Row>
    );
};
export default ContactUser;
