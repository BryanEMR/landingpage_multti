import styled from "styled-components";

export const Container = styled.div`
    margin: 50px 0;
    width: 100%;
    height: 600px;
    color: #6F6F6F;
    .row{
        display: flex;
        flex-flow: row wrap;
    }
    .margin-top-5{
        margin-top: 5px;

    }
    .coluna-2 {
        width: calc(((100%) * (2 / 12)) - 10px); 
        margin: 0px 5px;
        display: flex;
    }
    .coluna-4 {
        width: calc(((100%) * (4 / 12)) - 10px); 
        margin: 0px 5px;
    }
    .coluna-6 {
        width: calc( ( (100%) * (6 / 12) ) - 5px );
        margin: 0 2.5px; 
    }
    .coluna-8 {
        width: calc((100% ) * (8/ 12)); 
        
    }
    .coluna-12 {
        width: calc(100% )
    }
    .flex{
        display: flex;
    }
    .center{
        justify-content: center;
    }
    .obs{
        font-size:12px;
        text-align: left;
        padding-left: 10px;
        margin: 0
    }
    .title{
        // font-family: Montserrat;
        font-size: 28px;
        font-weight: 500;
        line-height: 0px;
        text-align: left;        
    }
    .text{
        // font-family: Montserrat;
        font-size: 12px;
        font-weight: 400;
        line-height: 0px;
        text-align: left;
    }
    .gray{
        display: flex;
        color: white;
        background: #B6B6B6;
        border-radius: 20px;
        opacity: 0.4px;
        height: 36px;
        font-size: 14px;
        justify-content: center;
        align-items: center;
    }
    .white{
        display: flex;
        background: white;
        border-radius: 20px;
        height: 36px;
        font-size: 14px;
        justify-content: left;
        align-items: center;
    }
    .padding-10{
        padding-left: 20px
    }
    .dark-blue{
        display: flex;
        color: white;
        background: #7367F0        ;
        border-radius: 20px;
        opacity: 0.4px;
        height: 36px;
        font-size: 14px;
        justify-content: center;
        align-items: center;
    }
    .light-blue{
        display: flex;
        color: white;
        background: #43CBFF;
        border-radius: 20px;
        opacity: 0.4px;
        height: 36px;
        font-size: 14px;
        justify-content: center;
        align-items: center;
    }
`;