import { MoreOutlined } from '@ant-design/icons';
import React from 'react';

import companyDummy from '../../components/Assets/icon/company-dummy.png';
import { formatMoney } from '../Utils/formatMoney';
import PreviewIcon from '../../components/Assets/icon/preview.png';

import { CardJobListStyle, CardMenu } from './card.style';
import { Dropdown } from 'antd';
const CardJob = ({ data, onViewDetail = () => {} }) => {
  const actionDropdown = [
    {
      key: '1',
      label: (
        <CardMenu onClick={() => onViewDetail(data)}>
          <img src={PreviewIcon} alt="" />
          View Detail
        </CardMenu>
      ),
    },
  ];
  const [items, setItems] = React.useState(actionDropdown);
  return (
    <CardJobListStyle>
      <div className="referred-tabs">
        <div className="referred-card">
          <img src={companyDummy} alt="" />
          <div style={{ width: '100%' }}>
            <div className="referred-tabs__header">
              <div>
                <div className="referred-tabs__title">{data.title}</div>
                <div className="referred-tabs__company">PT Grab Indonesia</div>
                <div className="referred-tabs__city">Jakarta, Indonesia</div>
              </div>
              <Dropdown
                menu={{ items }}
                placement="bottomCenter"
                trigger="click"
              >
                <MoreOutlined className="card-action" />
              </Dropdown>
            </div>
            <div className="referred-tabs__city">
              Posted 11 Jun 2022 • Expired: 9 Jul 2022
            </div>
          </div>
        </div>
      </div>
    </CardJobListStyle>
  );
};
export default CardJob;
