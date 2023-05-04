import React from 'react';
import { DatePicker, Form, Input } from 'antd';
import { Row, Col } from '../../../../../components/Grid';
import FormHTML from '../../../../../components/Form/InputHtml';
import Button from '../../../../../components/Button';

const EducationForm = ({ onClose = () => {} }) => {
  return (
    <div style={{ marginBottom: 20 }}>
      <Form layout="vertical">
        <Row align="end">
          <Col xl={6}>
            <Form.Item label="School Name">
              <Input size="large" />
            </Form.Item>
          </Col>
          <Col xl={6}>
            <Form.Item label="Degree">
              <Input size="large" />
            </Form.Item>
          </Col>
          <Col xl={12}>
            <Form.Item label="Field of Study">
              <Input size="large" />
            </Form.Item>
          </Col>
          <Col xl={6}>
            <Form.Item label="Start Date">
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
            <Form.Item label="End Date">
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
            <Form.Item label="City">
              <Input size="large" />
            </Form.Item>
          </Col>
          <Col xl={6}>
            <Form.Item label="Country">
              <Input size="large" />
            </Form.Item>
          </Col>

          <Col xl={12}>
            <Form.Item label="Description">
              <FormHTML />
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
export default EducationForm;
