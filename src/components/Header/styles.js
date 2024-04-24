import styled from "styled-components";

export const Logo = styled.img`
    width: 130px;
    height: auto;
    padding-right: 20px;
`;


export const MenuBar = styled.nav`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 30px 20vh;
    z-index: 2; 
    width: calc(100% - 40vh); 
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const MenuBarNav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    a {
        @media (max-width: 900px) {
            font-size: 0.8em ;
            line-height: 18px;
        }
        text-decoration: none;
        font-size: 0.9em ;
        font-weight: 400;
        line-height: 21px;
        text-align: left;
        margin-right: 20px;
        color: #FFFFFF;
        cursor: pointer;
    }

    .button {
        @media (max-width: 900px) {
            font-size: 0.8em ;
            line-height: 18px;
        }
        width: 105px;
        height: 28px;
        gap: 0px;
        border-radius: 5px;
        opacity: 0px;
        border: 1px #FFFFFF solid;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        a {
            padding: 6px 29px 6px 29px;
            text-align: center;
            margin: 0;
            color: #FFFFFF;
        }
    }
`;
