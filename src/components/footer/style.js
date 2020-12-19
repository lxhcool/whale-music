import styled from 'styled-components';

export const FooterWrapper = styled.div`
  width: 100%;
  margin-top: 50px;
  .container {
    padding: 20px 0;
    a {
      position: relative;
      border-radius: 50%;
      text-align: center;
      font-size: 1rem;
      color: #6D7685;
      font-weight: 400;
      display: inline-block;
      transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
      i {
        font-size: 18px;
      }
    }
    .links {
      a {
        margin-right: 15px;
      }
    }
  }
`