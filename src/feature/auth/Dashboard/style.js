import styled from 'styled-components';

export const MyTaskStyle = styled.div`
  .card {
    &-section {
      min-height: 570px;
      border-radius: 8px;
    }
  }
`;
export const DashboardCandidatesStyle = styled.div`
  .ant-tabs-nav {
    width: 32%;
  }
  .ant-tabs-tab-btn {
    width: 100%;
  }
  .tab {
    &-recruiter {
      color: #444444;
      font-weight: bold;
      display: flex;
      align-items: center;
      &__avatar {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
    }
  }
  .ant-tabs-tab {
    border-bottom: 1px solid #e8e8e8;
    margin-right: 10px !important;
    &.ant-tabs-tab-active {
      border: 1px solid #faa19b;
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
    }
  }
`;
