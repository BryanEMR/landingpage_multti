import styled from "styled-components";

export const CarouselContainer = styled.div`
    width: 100%;
    z-index: 3;  
    display: flex;
    justify-content: center;
    .container{
        width: 100%;
        display: flex;
        justify-content: center;
        .space{
            width: 20px;
            height: 35px;
            position: relative;
            top: 50%;
            transform: translate(0, -50%); 
            padding-left: 100px;
            padding-right: 50px;
        }
        .slide {
            transition: opacity 0.3s ease-in-out;
            opacity: 1; 
        }
        .slide.fade-out {
            opacity: 0.5; 
        }        
        .slide{
            border-radius: 16px;
            background: #F8F8F8;
            width: 850px;
            height: 475px;
            display: flex;
            box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
            align-items: center;
            .centralizar{
                position: absolute;
                top: 50%;
                transform: translate(0, -50%);
            }
            .column1 {
                width: 70%;
                padding: 40px 60px;
                text-align: left;
                font-weight: 400;
                line-height: 34px;
                // font-family: Montserrat;
                position: relative;
                .title{
                    @media (max-width: 1050px) {
                        font-size: 28px;
                        line-height: 28px;
                    }
                    font-size: 32px;
                    padding-right: 50px
                }
                .text{
                    @media (max-width: 1050px) {
                        font-size: 14px;
                        line-height: 28px;
    
                    }
                    font-size: 18px;
                    padding-right: 40px
                }
                .linkText{
                    @media (max-width: 1050px) {
                        font-size: 14px;
                    }
                    font-size: 18px;
                }
            }
            
            .column2 {
                width: 40%;
                img{
                    position:relative;
                    left:-105px;
                    top:-19px;
                }
            }
        }
    }
   
`;

export const Transition = styled.img`
    width: 20px;
    height: 35px;
    position: relative;
    top: 50%;
    transform: translate(0, -50%); 
    padding-left: 100px;
    padding-right: 50px;
`;
