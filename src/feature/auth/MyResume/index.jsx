import { Card } from 'antd';
import React from 'react';
import Button from '../../../components/Button';
import Style from './my-resume.style';
import NotesIcon from '../../../components/Assets/icon/notes.png';
import ContactUser from './partial/ContactUser';
import VerifyStep from './partial/VerifyStep';
import Overview from './partial/Overview';
import ProfileInformation from './partial/ProfileInformation';
import OverviewForm from './partial/OverViewForm';
import EditIcon from '../../../components/Icon/Edit';
import { color } from '../../../components/Utils/variable';

const MyResume = () => {
    const [isEditOverview, setEditOverview] = React.useState(false);

    const onEditOverView = () => {
        setEditOverview(!isEditOverview);
    };
    return (
        <Style>
            <Card className="resume-notes">
                <div className="resume-notes__flex flex-end">
                    <div className="resume-notes__flex">
                        <div>
                            <img
                                className="notes-icon"
                                src={NotesIcon}
                                alt="notes"
                            />
                        </div>
                        <div>
                            <div>
                                <h4>Change your profile setting</h4>
                            </div>
                            <div className="resume-notes__text">
                                To change profile, like names, telaphone number,
                                and email{' '}
                            </div>
                        </div>
                    </div>
                    <div>
                        <Button color="primary" size="large">
                            Change Profile
                        </Button>
                    </div>
                </div>
            </Card>
            <div>
                <h2 className="title">My Resume</h2>
                <Card>
                    <ContactUser />
                </Card>
            </div>
            <VerifyStep />
            <Card className="overview" id="overview">
                <div className="overview-header">
                    <h3 className="title">Overview</h3>
                    {!isEditOverview && (
                        <Button
                            onClick={onEditOverView}
                            size="large"
                            icon={<EditIcon color={color.employee.primary} />}
                            color="outline-primary">
                            Edit
                        </Button>
                    )}
                </div>
                {isEditOverview ? (
                    <OverviewForm onCancel={onEditOverView} />
                ) : (
                    <Overview />
                )}
            </Card>
            <ProfileInformation />
        </Style>
    );
};
export default MyResume;
