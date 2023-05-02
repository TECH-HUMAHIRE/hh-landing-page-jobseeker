import React from 'react';
import TabMenu from '../../../../../components/Tabs';
import Certification from './Certification';
import Education from './Education';
import Experience from './Experience';
import ProfileInformationStyle from './profile-information.style';
const dummyData = [
  {
    name: 'Senior Product Designer',
    id: 1,
    job_location: 'at G****',
    location: 'Jakarta, Indonesia',
    date: 'Jun 2020 - Jul 2022',
    last: '2 years 1 month',
    desc: "You are my fire the one desire believe when I say I want it that way. But we are two worlds apart can't reach to your heart when you say that I want it that way.",
  },
  {
    name: 'Product Designer',
    id: 2,
    job_location: 'at G****',
    location: 'Jakarta, Indonesia',
    date: 'Jun 2020 - Jul 2022',
    last: '2 years 1 month',
    desc: "You are my fire the one desire believe when I say I want it that way. But we are two worlds apart can't reach to your heart when you say that I want it that way.",
  },
  {
    name: 'Senior Product Designer',
    id: 3,
    job_location: 'at G****',
    location: 'Jakarta, Indonesia',
    date: 'Jun 2020 - Jul 2022',
    last: '2 years 1 month',
    desc: "You are my fire the one desire believe when I say I want it that way. But we are two worlds apart can't reach to your heart when you say that I want it that way.",
  },
];
const ProfileInformation = () => {
  return (
    <ProfileInformationStyle>
      <TabMenu
        item={[
          {
            label: `Experience`,
            key: '1',
            children: <Experience data={dummyData} />,
          },
          {
            label: `Education`,
            key: '2',
            children: <Education data={dummyData} />,
          },
          {
            label: `Certification`,
            key: '3',
            children: <Certification data={dummyData} />,
          },
          {
            label: `Upload CV`,
            key: '4',
            children: <div>Certification</div>,
          },
          {
            label: `Job Preference`,
            key: '5',
            children: <div>Certification</div>,
          },
        ]}
      />
    </ProfileInformationStyle>
  );
};
export default ProfileInformation;
