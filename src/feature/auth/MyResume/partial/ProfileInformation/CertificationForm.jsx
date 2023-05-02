import React from 'react';
import { DatePicker, Form, Input } from 'antd';
import { Row, Col } from '../../../../../components/Grid';
import Button from '../../../../../components/Button';
import CheckBoxForm from '../../../../../components/Form/Checkbox';

const CertificationForm = ({ onClose = () => {} }) => {
  const [isCurrently, setCurrently] = React.useState(false);
  const onCheckCurrently = () => {
    setCurrently(!isCurrently);
  };
  return (
    <div style={{ marginBottom: 20 }}>
      <Form layout="vertical">
        <Row align="end">
          <Col xl={6}>
            <Form.Item label="Name">
              <Input size="large" />
            </Form.Item>
          </Col>
          <Col xl={6}>
            <Form.Item label="Organization">
              <Input size="large" />
            </Form.Item>
          </Col>
          <Col xl={12}>
            <Form.Item name="currently">
              <CheckBoxForm
                label="This credential does not expire"
                onChange={onCheckCurrently}
                checked={isCurrently}
              />
            </Form.Item>
          </Col>
          <Col xl={6}>
            <Form.Item label="Issue Date">
              <DatePicker
                placeholder="Month"
                style={{ width: '100%' }}
                size="large"
              />
            </Form.Item>
          </Col>
          <Col xl={6}>
            <Form.Item label="">
              <DatePicker
                placeholder="Years"
                style={{ width: '100%' }}
                size="large"
              />
            </Form.Item>
          </Col>
          <Col xl={6}>
            <Form.Item label="Expiration Date">
              <DatePicker
                placeholder="Month"
                style={{ width: '100%' }}
                size="large"
              />
            </Form.Item>
          </Col>
          <Col xl={6}>
            <Form.Item label="">
              <DatePicker
                placeholder="Years"
                style={{ width: '100%' }}
                size="large"
              />
            </Form.Item>
          </Col>
          <Col xl={12}>
            <Form.Item label="Credential ID">
              <Input size="large" />
            </Form.Item>
          </Col>
          <Col xl={12}>
            <Form.Item
              label="Credential URL"
              rules={{
                type: 'url',
                message: 'invalid url',
              }}
            >
              <Input size="large" />
            </Form.Item>
          </Col>
          <Col xl={12}>
            <Row justify="end">
              <Col xl={3}>
                <Button color="outline-primary" block onClick={onClose}>
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
export default CertificationForm;
