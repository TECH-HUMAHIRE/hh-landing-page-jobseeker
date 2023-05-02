import React from 'react';
import BagIcon from '../Icon/Bag';
import StartIcon from '../Icon/Star';
import UsersIcon from '../Icon/Users';
import ChatIcon from '../Icon/Chat';
import CheckIcon from '../Icon/Check';
import CloseIcon from '../Icon/Close';
import { Style, MenuLink } from './style';
// import {
//     dashboardApi,
//     useDeleteJobMutation,
//     useUpdateStatusJobCandidatesMutation
// } from '../../app/actions/dashboardApi';
import { message } from 'antd';

const TapHeader = () => {
    // const [_, response] = useUpdateStatusJobCandidatesMutation({
    //     fixedCacheKey: 'statusJobCandidates'
    // });
    // const [
    //     __,
    //     { data: dataDelete, isSuccess: successDeleteJob } // This is the mutation trigger
    // ] = useDeleteJobMutation({
    //     fixedCacheKey: 'deleteJobList'
    // });
    const [menu, setMenu] = React.useState([
        {
            total: 0,
            label: 'Invited Job',
            icon: <UsersIcon active />,
            activeColor: '#FCD0CD',
            activeLink: ''
        },
        {
            total: 0,
            label: 'Accepted Job',
            icon: <StartIcon active />,
            activeColor: '#FCD0CD',
            activeLink: 'accepted-job'
        },
        {
            total: 0,
            label: 'Interview',
            icon: <CheckIcon active />,
            activeColor: '#FCD0CD',
            activeLink: 'interview'
        },

        {
            total: 0,
            label: 'Archived',
            icon: <CloseIcon active />,
            activeColor: '#FCD0CD',
            activeLink: 'archived'
        }
    ]);

    // const [getJobCount, { data, isSuccess }] =
    //     dashboardApi.endpoints.getJobCount.useLazyQuery();
    // const [
    //     getJobStatusCount,
    //     { isSuccess: successUpdateStatusCount, data: countJobPost }
    // ] = dashboardApi.endpoints.getJobStatusCount.useLazyQuery();
    const checkActiveLink = () => {
        let url = window.location.pathname.split('/');
        return url[1];
    };
    const sum = (obj) => {
        var sum = 0;
        for (var el in obj) {
            // eslint-disable-next-line no-prototype-builtins
            if (obj.hasOwnProperty(el)) {
                sum += parseFloat(obj[el]);
            }
        }
        return sum;
    };
    // React.useEffect(() => {
    //     if (isSuccess || successUpdateStatusCount) {
    //         setMenu([
    //             {
    //                 ...menu[0],
    //                 total: sum(countJobPost?.data)
    //             },
    //             {
    //                 ...menu[1],
    //                 total: data?.data?.referred_candidates
    //             },
    //             {
    //                 ...menu[2],
    //                 total: data?.data?.shortlisted_candidates
    //             },
    //             {
    //                 ...menu[3],
    //                 total: data?.data?.interview_candidates
    //             },
    //             {
    //                 ...menu[4],
    //                 total: data?.data?.hired_candidates
    //             },
    //             {
    //                 ...menu[5],
    //                 total: data?.data?.rejected_candidates
    //             }
    //         ]);
    //     }
    // }, [isSuccess, successUpdateStatusCount]);

    // React.useEffect(() => {
    //     getJobCount();
    //     getJobStatusCount();
    // }, []);
    // React.useEffect(() => {
    //     if (response.isSuccess) {
    //         getJobCount();
    //     }
    // }, [response]);
    // React.useEffect(() => {
    //     if (successDeleteJob) {
    //         message.success(dataDelete.meta.message, 1.5);
    //         getJobCount();
    //         getJobStatusCount();
    //     }
    // }, [successDeleteJob]);
    return (
        <Style>
            <div className="job-nav">
                {menu.map((item, key) => {
                    return (
                        <MenuLink
                            activecolor={item.activeColor}
                            key={key}
                            to={`/${item.activeLink}`}
                            className={`job-status ${
                                checkActiveLink() === item.activeLink
                                    ? 'active'
                                    : ''
                            }`}>
                            <span className="job-status__total">
                                {item.total}
                            </span>
                            <span className="job-status__label">
                                {item.label}
                            </span>
                            <div className="job-status__icon">{item.icon}</div>
                        </MenuLink>
                    );
                })}
            </div>
        </Style>
    );
};
export default TapHeader;
