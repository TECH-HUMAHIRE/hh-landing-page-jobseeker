import React from 'react';
import { DatePicker, Form, Input } from 'antd';
import SelectOption from '../../../../../components/Form/SelectOption';
import { Row, Col } from '../../../../../components/Grid';
import CheckBoxForm from '../../../../../components/Form/Checkbox';
import FormHTML from '../../../../../components/Form/InputHtml';
import Button from '../../../../../components/Button';

const ExperienceForm = ({ onClose = () => {} }) => {
    const [isCurrently, setCurrently] = React.useState(false);
    const onCheckCurrently = () => {
        setCurrently(!isCurrently);
    };
    return (
        <div style={{ marginBottom: 20 }}>
            <Form layout="vertical">
                <Row>
                    <Col xl={6}>
                        <Form.Item label="Job Title">
                            <Input size="large" />
                        </Form.Item>
                    </Col>
                    <Col xl={6}>
                        <Form.Item label="Job Title">
                            <SelectOption
                                options={[
                                    {
                                        label: 'Junior',
                                        value: 'Junior'
                                    },
                                    {
                                        label: 'Middle',
                                        value: 'Middle'
                                    },
                                    {
                                        label: 'Senior',
                                        value: 'Senior'
                                    }
                                ]}
                            />
                        </Form.Item>
                    </Col>
                    <Col xl={12}>
                        <Form.Item label="Company">
                            <Input size="large" />
                        </Form.Item>
                    </Col>
                    <Col xl={12}>
                        <Form.Item label="City">
                            <Input size="large" />
                        </Form.Item>
                    </Col>
                    <Col xl={6}>
                        <Form.Item label="From">
                            <DatePicker
                                style={{ width: '100%' }}
                                size="large"
                            />
                        </Form.Item>
                    </Col>
                    <Col xl={6}>
                        <Form.Item label="To">
                            <DatePicker
                                style={{ width: '100%' }}
                                size="large"
                            />
                        </Form.Item>
                    </Col>

                    <Col xl={6}>
                        <Form.Item name="currently">
                            <CheckBoxForm
                                label="I currently work here"
                                onChange={onCheckCurrently}
                                checked={isCurrently}
                            />
                        </Form.Item>
                    </Col>
                    <Col xl={12}>
                        <Form.Item label="Job requirement">
                            <FormHTML />
                        </Form.Item>
                    </Col>
                    <Col xl={12}>
                        <Row justify="end">
                            <Col xl={3}>
                                <Button
                                    color="outline-primary"
                                    block
                                    onClick={onClose}>
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
            </Form>
        </div>
    );
};
export default ExperienceForm;
