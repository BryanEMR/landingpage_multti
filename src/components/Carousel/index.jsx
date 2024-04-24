import React from "react";
import { dataCarousel } from "./data";
import { Carrossel } from "./styles";

export default function Carousel () {
    

    return (
        <Carrossel>
            {
                dataCarousel.map(()=>{
                    
                })
            }
        </Carrossel>
    )
}