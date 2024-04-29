import styled from "styled-components";

export const Container = styled.div`
    margin: 10% 0;
    width: 100%;
    height: auto;
    display: flex;
    .container{
        padding: 10px 20vh;
        color: #6F6F6F;
        width: 100%;
        justify-content: center;   
        .row{
            display: flex;
            text-align: left;

        }   
        .column1{
            width: 55%;
            color: #5E5873;
            padding: 0 50px 0 0;
        }
        .column2{
            width: 45%;
        }
        .text{
            @media (max-width: 1300px) {
                font-size: 18px;
            }
            // font-family: Montserrat;
                font-size: 24px;
                font-weight: 500;
            line-height: 31.9px;
        }
        .title{
            @media (max-width: 1300px) {
                font-size: 49px;
            }
            // font-family: Montserrat;
                font-size: 56px;
            font-weight: 400;
            line-height: 59.73px;
        }
        input{
            padding:7px 10px;
            width: 100%;
            height: auto;
            border: 1px solid #D8D6DE;
            border-radius: 5px;
            margin-bottom: 16px;
        }
        label{
            color: #6F6F6F;
            font-size: 14px;
            font-weight: 400;
            line-height: 18px;
            
        }
        button{
            width: 141px;
            height: 32px;
            color: white;
            background: #9400d3;
            border-radius: 5px;
            border: 0px
        }
    }
`;
export const Icone = styled.img`
    padding-left:4px;
`;