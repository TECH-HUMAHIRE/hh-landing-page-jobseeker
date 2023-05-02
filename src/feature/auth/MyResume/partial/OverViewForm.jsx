import { Form, Input, InputNumber } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React from 'react';
import Button from '../../../../components/Button';
import { Col, Row } from '../../../../components/Grid';
import BagIcon from '../../../../components/Icon/Bag';
import DressIcon from '../../../../components/Icon/Dress';
import FoundedIcon from '../../../../components/Icon/Founded';
import MoneyIcon from '../../../../components/Icon/Money';
const OverviewForm = ({ onCancel = () => {} }) => {
    return (
        <>
            <Form layout="vertical">
                <Form.Item label="About">
                    <TextArea className="input-textarea" />
                </Form.Item>
                <hr />
                <div className="overview-bottom">
                    <Row>
                        <Col xl={3} md={3}>
                            <Form.Item label="Experience Level">
                                <Input
                                    prefix={
                                        <div className="overview-information__icon">
                                            <BagIcon />
                                        </div>
                                    }
                                />
                            </Form.Item>
                        </Col>
                        <Col xl={3} md={3}>
                            <Form.Item label="Working Experience">
                                <Input
                                    prefix={
                                        <div className="overview-information__icon">
                                            <FoundedIcon color="#666666" />
                                        </div>
                                    }
                                />
                            </Form.Item>
                        </Col>
                        <Col xl={3} md={3}>
                            <Form.Item label="Education">
                                <Input
                                    prefix={
                                        <div className="overview-information__icon">
                                            <DressIcon color="#666666" />
                                        </div>
                                    }
                                />
                            </Form.Item>
                        </Col>
                        <Col xl={3} md={3}>
                            <Form.Item label="Expected Salar">
                                <InputNumber
                                    style={{ width: '100%' }}
                                    // pattern="[^0-9]"
                                    formatter={(value) =>
                                        `${value}`.replace(
                                            /\B(?=(\d{3})+(?!\d))/g,
                                            ','
                                        )
                                    }
                                    type="tel"
                                    size={'large'}
                                    parser={(value) =>
                                        value.replace(/\$\s?|(,*)/g, '')
                                    }
                                    prefix={
                                        <div className="overview-information__icon">
                                            <MoneyIcon color="#666666" />
                                        </div>
                                    }
                                />
                            </Form.Item>
                        </Col>
                        <Col xl={12}>
                            <Row justify="end">
                                <Col xl={3}>
                                    <Button
                                        onClick={onCancel}
                                        color="outline-primary"
                                        block>
                                        Cancel
                                    </Button>
                                </Col>
                                <Col xl={3}>
                                    <Button color="primary" block>
                                        Save
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Form>
        </>
    );
};
export default OverviewForm;
