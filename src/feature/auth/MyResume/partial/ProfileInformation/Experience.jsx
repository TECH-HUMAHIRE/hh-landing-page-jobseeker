import { PlusOutlined } from '@ant-design/icons';
import React from 'react';
import Button from '../../../../../components/Button';
import { Row, Col } from '../../../../../components/Grid';
import EditIcon from '../../../../../components/Icon/Edit';
import TrashIcon from '../../../../../components/Icon/Trash';
import { color } from '../../../../../components/Utils/variable';
import ExperienceForm from './ExperienceForm';
const Experience = ({ data = [] }) => {
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
        <h4 className="title">Experience</h4>
        <Button
          onClick={onEditExperience}
          color="outline-primary"
          icon={<PlusOutlined />}
          size="small"
        >
          Add Experience
        </Button>
      </div>
      {!detailJob?.id && isEdit && (
        <ExperienceForm onClose={onEditExperience} />
      )}

      <div>
        <Row>
          {data.map((item, key) => {
            return detailJob?.id !== item.id ? (
              <Col
                className={`resume-experience ${key === 0 ? 'current' : ''}`}
                key={key}
                xl={12}
              >
                <div className="resume-header">
                  <h2 className="title">
                    {item.name}{' '}
                    {key === 0 && (
                      <span className="resume-experience__current">
                        Current
                      </span>
                    )}
                  </h2>
                  <div>
                    <span
                      onClick={() => onEditExperience(item)}
                      style={{
                        marginRight: 10,
                        cursor: 'pointer',
                      }}
                    >
                      <EditIcon color={color.employee.primary} />
                    </span>
                    <span style={{ cursor: 'pointer' }}>
                      <TrashIcon color={color.employee.primary} />
                    </span>
                  </div>
                </div>
                <div className="resume-experience__job">
                  {item.job_location}
                </div>
                <div className="resume-experience__date">
                  {item.date} • {item.last}
                </div>
                <div className="resume-experience__location">
                  {item.location}
                </div>
                <div className="resume-experience__desc">{item.desc}</div>
              </Col>
            ) : (
              <ExperienceForm onClose={onEditExperience} />
            );
          })}
        </Row>
      </div>
    </div>
  );
};
export default Experience;
