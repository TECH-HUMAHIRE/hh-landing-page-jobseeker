import styled from 'styled-components';
import { color } from '../../../components/Utils/variable';

const Style = styled.section`
  .resume {
    &-notes {
      background-color: #fff6f5;
      border-color: #fcd0cd;
      margin-bottom: 35px;
      .ant-card-body {
        padding-top: 17px;
        padding-bottom: 17px;
      }
      h4 {
        color: #444444;
        font-weight: bold;
        margin: 0;
      }
      &__flex {
        display: flex;
        align-items: center;
        &.flex-end {
          justify-content: space-between;
        }
        .notes-icon {
          width: 20px;
          margin-right: 10px;
        }
      }
      &__text {
        font-weight: 400;
        font-size: 14px;
      }
    }

    &-information {
      &__card {
        display: flex;
        align-items: center;
      }

      &__user {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      &__initial {
        padding: 10px 12px;
        font-size: 24px;
        display: flex;
        align-items: center;
        font-weight: 700;
        margin-right: 12px;
        color: #fff;
        background-color: blue;
        border-radius: 8px;
      }
      &__profile {
        display: flex;
        margin-right: 40px;
      }
      &__email {
        a {
          white-space: pre-wrap;
          word-break: keep-all;
          text-overflow: ellipsis;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          max-width: 100%;
          max-height: 100%;
          display: flex;
          align-items: center;
          span {
            margin-right: 5px;
          }
        }
      }
    }
  }
  .border {
    position: relative;
    padding-right: 12px;
    &:before {
      position: absolute;
      content: '';
      right: 0;
      width: 1px;
      background-color: #e8e8e8;
      height: 100%;
    }
  }
  .ant-card {
    margin-bottom: 20px;
  }
  .ant-card {
    div,
    .title {
      color: #666666;
    }
  }
  .overview {
    &-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    hr {
      margin-bottom: 20px;
      margin-top: 20px;
    }
    &-information {
      display: flex;
      align-items: center;
      &__icon {
        margin-right: 10px;
        padding: 10px 11px;
        border-radius: 50%;
        background: #fafafa;
        display: flex;
        align-items: center;
        width: 42px;
        margin-right: 10px;
        img {
          width: 18px;
          height: 18px;
          object-fit: contain;
        }
        span {
          width: 19px;
          height: 19px;
          object-fit: contain;
        }
      }
    }
    .input {
      &-textarea {
        height: 100px;
        overflow: auto;
      }
    }
  }
  .step {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-check {
      width: 30px;
      height: 30px;
      margin-bottom: 10px;
      margin-right: auto;
      margin-left: auto;
      border-radius: 50%;
      border: 1px solid #aaaaaa;
      position: relative;
      &.uncheck {
        &:after {
          content: '';
          left: 9px;
          top: 9px;
          width: 10px;
          height: 10px;
          border-style: solid;
          border-color: rgba(170, 170, 170, 0.667);
          border-image: initial;
          border-width: 2px;
          /* transform: rotate(45deg); */
          position: absolute;
          border-radius: 50%;
          background: #aaa;
        }
      }
      &.checked {
        background: ${color.employee.primary};
        border-color: ${color.employee.primary};
        &:after {
          content: '';
          left: 10px;
          top: 6px;
          width: 8px;
          height: 14px;
          border-style: solid;
          border-color: white;
          border-image: initial;
          border-width: 0px 3px 3px 0px;
          transform: rotate(45deg);
          position: absolute;
        }
      }
    }
  }
`;
export default Style;
