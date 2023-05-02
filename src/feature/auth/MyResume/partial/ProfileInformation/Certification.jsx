import { PlusOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import React from 'react';
import Button from '../../../../../components/Button';
import { Row, Col } from '../../../../../components/Grid';
import EditIcon from '../../../../../components/Icon/Edit';
import TrashIcon from '../../../../../components/Icon/Trash';
import { color } from '../../../../../components/Utils/variable';
import CertificationForm from './CertificationForm';
import DummyImage from '../../../../../components/Assets/images/defaultImage.png';
const Certification = ({ data = [] }) => {
    const [isEdit, setEdit] = React.useState(false);
    const [detailJob, setDetailJob] = React.useState(null);
    const onEditExperience = (data) => {
        setEdit(!isEdit);
        if (isEdit) {
            setDetailJob(null);
        } else {
            setDetailJob(data);
        }
    };
    return (
        <div>
            <div className="resume-top">
                <h4 className="title">Certification</h4>
                <Button
                    onClick={onEditExperience}
                    color="outline-primary"
                    icon={<PlusOutlined />}
                    size="small">
                    Add Certification
                </Button>
            </div>
            {!detailJob?.id && isEdit && (
                <CertificationForm onClose={onEditExperience} />
            )}

            <div>
                <Row>
                    {data.map((item, key) => {
                        return detailJob?.id !== item.id ? (
                            <Col key={key} xl={12}>
                                <div className="resume-certification">
                                    <div>
                                        <Avatar
                                            src={DummyImage}
                                            style={{
                                                width: 50,
                                                height: 50,
                                                marginRight: 20
                                            }}
                                        />
                                    </div>
                                    <div className="resume-certification__info">
                                        <div className="resume-header">
                                            <h2 className="title">
                                                {item.name}
                                            </h2>
                                            <div>
                                                <span
                                                    onClick={() =>
                                                        onEditExperience(item)
                                                    }
                                                    style={{
                                                        marginRight: 10,
                                                        cursor: 'pointer'
                                                    }}>
                                                    <EditIcon
                                                        color={
                                                            color.employee
                                                                .primary
                                                        }
                                                    />
                                                </span>
                                                <span
                                                    style={{
                                                        cursor: 'pointer'
                                                    }}>
                                                    <TrashIcon
                                                        color={
                                                            color.employee
                                                                .primary
                                                        }
                                                    />
                                                </span>
                                            </div>
                                        </div>

                                        <div className="resume-experience__date">
                                            {item.date} • {item.last}
                                        </div>
                                        <div className="resume-experience__location">
                                            {item.location}
                                        </div>
                                        <div className="resume-experience__desc">
                                            {item.desc}
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ) : (
                            <CertificationForm onClose={onEditExperience} />
                        );
                    })}
                </Row>
            </div>
        </div>
    );
};
export default Certification;
