import React from 'react';
import { Col, Row } from '../../../../components/Grid';
import BagIcon from '../../../../components/Icon/Bag';
import DressIcon from '../../../../components/Icon/Dress';
import FoundedIcon from '../../../../components/Icon/Founded';
import MoneyIcon from '../../../../components/Icon/Money';
import { formatMoney } from '../../../../components/Utils/formatMoney';

const Overview = () => {
    return (
        <>
            <div className="title">About</div>
            <div className="overview-about">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
                culpa itaque dolorem quae eos pariatur magnam, quaerat quidem
                esse delectus quam beatae tenetur dolores architecto commodi ut
                est iusto qui?
            </div>
            <hr />
            <div className="overview-bottom">
                <Row>
                    <Col xl={3} md={3}>
                        <div className="title">Experience Level</div>
                        <div className="overview-information">
                            <div className="overview-information__icon">
                                <BagIcon />
                            </div>
                            <div>SeniorJava Programmer</div>
                        </div>
                    </Col>
                    <Col xl={3} md={3}>
                        <div className="title">Working Experience</div>
                        <div className="overview-information">
                            <div className="overview-information__icon">
                                <FoundedIcon color="#666666" />
                            </div>
                            <div>12 years of exp</div>
                        </div>
                    </Col>
                    <Col xl={3} md={3}>
                        <div className="title">Education</div>
                        <div className="overview-information">
                            <div className="overview-information__icon">
                                <DressIcon color="#666666" />
                            </div>
                            <div>Master of Computer Science</div>
                        </div>
                    </Col>
                    <Col xl={3} md={3}>
                        <div className="title">Expected Salary</div>
                        <div className="overview-information">
                            <div className="overview-information__icon">
                                <MoneyIcon color="#666666" />
                            </div>
                            <div>{formatMoney(14000000)}</div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
};
export default Overview;
