import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    padding-top: 120px;
    .container{
        color: #5E5873;
        padding: 48px 20vh 24px 20vh;
        width: 100%;
        justify-content: center;   
        .row{
            display: flex;
            text-align: left;
        }   
        .column{
            width: calc(100% * (6/1));
            color: #5E5873;
        }
        .title{
            // font-family: Montserrat;
            font-size: 18px;
            font-weight: 500;
            line-height: 31.9px;
            text-align: left;
            padding-bottom: 24px;
        }
        .text{
            // font-family: Montserrat;
            font-size: 12px;
            font-weight: 400;
            line-height: 18px;
            text-align: left;
        }
        .padding{
            @media (max-width: 1450px) {
                padding-right: 0;
            }
            padding-right: 56px;
        }
        .center{
            font-size: 12px;
            font-weight: 400;
            line-height: 18px;
            text-align: center;
        }
        .bandeiras{
            margin-top: -60px
        }
        .right{
            text-align: right;

        }
    }
`;