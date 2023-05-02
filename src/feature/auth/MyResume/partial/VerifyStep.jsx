import { Card } from 'antd';
import React from 'react';
import { Col, Row } from '../../../../components/Grid';

const VerifyStep = () => {
    return (
        <Card>
            <Row align="center">
                <Col xl={5}>
                    <h3 className="title">Your account is being verified</h3>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam et enim id est. Facilisi ornare lorem ut nulla in
                        amet, morbi tincidunt.
                    </div>
                </Col>
                <Col xl={7}>
                    <div className="step">
                        <div>
                            <div className="step-check checked">
                                <div></div>
                            </div>
                            <div>Profile</div>
                        </div>
                        <div>
                            <div className="step-check checked"></div>
                            <div>Experience</div>
                        </div>
                        <div>
                            <div className="step-check uncheck"></div>
                            <div>About</div>
                        </div>
                        <div>
                            <div className="step-check uncheck"></div>
                            <div>Certification</div>
                        </div>
                        <div>
                            <div className="step-check uncheck"></div>
                            <div>Preferences</div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Card>
    );
};
export default VerifyStep;
