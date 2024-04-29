import styled from "styled-components";

export const Container = styled.div`
    margin: 7% 0;
    width: 100%;
    height: 600px;
    .container{
        padding: 0px 20vh;
        .row{
            display: flex;
        }
        .title{
            @media (max-width: 1300px) {
                font-size: 41px;
                line-height: 52px;
            }
            @media (max-width: 1100px) {
                font-size: 34px;
                line-height: 45px;
            }
            font-size: 49px;
            font-weight: 400;
            line-height: 60px;
            text-align: left;
            
        }
        .text{
            @media (max-width: 1300px) {
                font-size: 16px;
                line-height: 28px;
            }
            @media (max-width: 1100px) {
                font-size: 14px;
                line-height: 28px;
            }
            font-size: 18px;
            font-weight: 400;
            line-height: 31.9px;
            text-align: left;
        }
        .center{
            justify-content: center;
        }
        .depositions{
            background: #FAFAFA;
            width: calc(33% - 20px );
            height: auto;
            border-radius: 8px;
            margin: 100px 10px;
            padding: 0 50px 50px 50px;
            color: #333333;
            .imgTestimony{
                position: relative;
                top: -70px
            }
            .imgDoubleQuotes{
                position: relative;
                top: -40px

            }
            .testimony{
                // font-family: Mulish;
                font-size: 14px;
                font-weight: 400;
                line-height: 17.57px;
                text-align: center;

            }
            .name{
                // font-family: Montserrat;
                font-size: 18px;
                font-weight: 500;
                line-height: 31.9px;
                text-align: center;

            }
            .company{
                // font-family: Montserrat;                         
                font-size: 14px;
                font-weight: 400;
                line-height: 21px;
                text-align: center;
            }
        }
    }
    
`;