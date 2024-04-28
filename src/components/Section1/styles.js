import styled from "styled-components";
import background from "../../assets/Section1/Background.png"

export const Container = styled.div`
@media (max-width: 1450px) {
    height: 121vh;

}
@media (max-width: 1300px) {
    height: 107vh;

}
@media (max-width: 1150px) {
    height: 97vh;

}
@media (max-width: 1050px) {
    height: 87vh;

}
@media (max-width: 950px) {
    height: 80vh;

}
@media (max-width: 850px) {
    height: 70vh;

}
    height: 130vh;
    width: 100%;
    background-image: url(${background});
    background-size: 100%; 
    background-repeat: no-repeat;
    display: flex;
    .text{
        z-index: 2; 
        margin: 15% 0 0 20vh;
        color: #FFFFFF;
        width: 40%;
        text-align: left;
    }
    .large{
        @media (max-width: 1050px) {
            font-size: 42px;
            line-height: 42px;
        }
        @media (max-width: 950px) {
            font-size: 36px;
            line-height: 36px;
        }
        @media (max-width: 850px) {
            font-size: 30px;
            line-height: 30px;
        }
        //font-family: Montserrat;
        font-size: 48px;
        font-weight: 400;
        line-height: 48px;
    }
    .small{
        @media (max-width: 1050px) {
            font-size: 16px;
            line-height: 28px;
        }
        @media (max-width: 950px) {
            font-size: 14px;
            line-height: 26px;
        }
        @media (max-width: 850px) {
            font-size: 12px;
            line-height: 24px;
        }
        padding-top: 20px;
        //font-family: Montserrat;
        font-size: 18px;
        font-weight: 400;
        line-height: 30px;
    }
    .bold{
        font-weight: bold;
    }
`;


export const Image = styled.img`
    @media (max-width: 1300px) {
        top:5%;
        right: 10vh;
        width: 600px;
    }
    @media (max-width: 1050px) {
        top:5%;
        right: 7vh;
        width: 500px;
    }
    @media (max-width: 950px) {
        top:5%;
        right: 5vh;
        width: 400px;
    }
    @media (max-width: 850px) {
        top:5%;
        right: vh;
        width: 350px;
    }
    position: absolute;
    top:0%;
    right: 10vh;
    width: 800px;
    height: auto;
    display: flex;
`;

export const Icon = styled.img`
@media (max-width: 1550px) {
    width: 60px;
    bottom: -15vh; 
    right: 5vh;
}
@media (max-width: 1450px) {
    width: 60px;
    bottom: -5vh; 
    right: 5vh;
}
@media (max-width: 1300px) {
    width: 55px;
    bottom: 7vh; 
    right: 5vh;
}
@media (max-width: 1150px) {
    width: 55px;
    bottom: 15vh; 
    right: 5vh;
}
@media (max-width: 1050px) {
    width: 55px;
    bottom: 22vh; 
    right: 5vh;
}
@media (max-width: 950px) {
    width: 50px;
    bottom: 30vh; 
    right: 5vh;
}
@media (max-width: 850px) {
    width: 50px;
    bottom: 35vh; 
    right: 5vh;
}
    position: absolute;
    bottom: -25vh; 
    right: 5vh;
    width: 60px;
    height: auto;
    display: flex;
`;