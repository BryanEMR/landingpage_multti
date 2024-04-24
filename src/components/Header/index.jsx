import React from "react";
import { Link } from "react-scroll";
import { Logo, MenuBar, MenuBarNav } from "./styles";
import logo from "../../assets/Header/Logo.png";

export default function Header() {


    return (
        <MenuBar>
            <Logo src={logo} alt="Multti" />
            <MenuBarNav>
                <Link to="about">
                    {"Soluções"}
                </Link>
                <Link to="solution">
                    {"Tarifas"}
                </Link>
                <Link to="functionality">
                    {"Depoimentos"}
                </Link>
                <Link to="whouse">
                    {"Cadastro"}
                </Link>
                <Link to="price">
                    {"Contato"}
                </Link>
                <div className="button">
                    <a
                        href="#TesteClique"
                        target="_blank"
                    >
                        {"Entrar"}
                    </a>
                </div>
            </MenuBarNav>
        </MenuBar>
    )
}