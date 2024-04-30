import styled from "styled-components";

export const Container = styled.div`
    margin: 50px 0;
    width: 100%;
    height: 600px;
    color: #6F6F6F;
    color: #000;
    .title{
        @media (max-width: 1500px) {
            font-size: 17px;

        }
        @media (max-width: 1300px) {
            font-size: 16px;
        }
        // font-family: Montserrat;
        font-size: 18px;
        font-weight: 500;
        line-height: 21.94px;
        text-align: left;        
    }
    .text{
        @media (max-width: 1500px) {
            font-size: 13px;
            line-height: 18px;

        }
        @media (max-width: 1300px) {
            font-size: 12px;
            line-height: 16px;

        }
        // font-family: Montserrat;
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
        text-align: left;
    }
    .bold{
        font-weight: 600;
    }
    .flex{
        display: flex;
    }
    .dot{
        padding: 0 10px;
    }
   
`;