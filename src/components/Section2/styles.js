import styled from "styled-components";
import vector from "../../assets/Section2/Vector.png";

export const Container = styled.div`
    margin: 7% 0;
    width: 100%;
    height: 600px;
    background: #E9ECEF;
    background-image: url(${vector});
    background-repeat: no-repeat;
    background-position: right center; 
    display: flex;

    .container{
        color: #6F6F6F;
        width: 100%;
        justify-content: center;      
        .slide{
            @media (max-width: 1300px) {
                padding: 8vh 5vh;
            }
            @media (max-width: 1100px) {
                padding: 5vh 10vh;
            }
            height: calc(100% - 120px);
            padding: 10vh 20vh;
            display: flex;
            align-items: center;
            .column1 {
                padding-top: 90px;
                padding-right: 70px;
                width: 30%;
                height: 100%;
                text-align: left;
                font-weight: 400;
                line-height: 34px;
                position: relative;
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
            }
            .column2 {
                @media (max-width: 1300px) {
                    font-size: 14px;
                }
                @media (max-width: 1100px) {
                    font-size: 12px;
                }
                background: #F8F8F8;
                height: auto;
                width: 70%;
                text-align: left;
                border-radius: 16px;
                padding: 50px 30px;
                display: flex;
                font-size: 16px;
                line-height: 22px;
                .insert{
                    width: 60%;
                    form{
                        width: 80%;
                        input {
                            margin-top: 6px;
                            background: #FFF;
                            border-radius: 5px;
                            padding: 10px;
                            border: 2px solid #EEEEEE;
                            width: 100%; 
        
                        }

                        select {
                            margin-top: 6px;
                            background: #FFF;
                            border-radius: 5px;
                            padding: 10px;
                            border: 2px solid #EEEEEE;
                            width: calc(100% + 25px); 
                        }
                    }
                }
                .values{
                    width: 40%;
                    table{
                        width: 100%;
                        th{
                            @media (max-width: 1250px) {
                                font-size: 20px;
                            }
                            @media (max-width: 1050px) {
                                font-size: 16px;
                            }
                            font-weight: 500;
                            padding: 0 0 14px 0;
                            font-size: 24px;
                        }
                        td{
                            padding: 14px 0;
                        }
                    }
                }
            }
        }
    }
`;
export const Icone = styled.img`
    padding-left:4px;
`;