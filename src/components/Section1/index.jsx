import React from "react";
import { Container, Icon, Image } from "./styles";
import laptop from "../../assets/Section1/Laptop.png";
import whatsapp from "../../assets/Section1/Whatsapp.png";
import Carousel from "../Carousel";

export default function Section1() {


    return (
        <>
            <Container>
                <div class="text">
                    <div class="large">
                        Tecnologia e <br/> segurança pra <br/>você <span class="bold">vender mais.</span>
                    </div>
                    <div class="small">
                        Venda online com a segurança e tecnologia <br/>mpays. Soluções simples e flexíveis para <br/>digitalizar o seu negócio.

                    </div>
                </div>
                <Image src={laptop} alt="Laptop" />
                <Icon src={whatsapp} alt="Whatsapp" />
                
            </Container>
            <Carousel/>
        </>


    )
}