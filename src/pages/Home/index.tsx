import React from "react";
import {Contaner, Imagem, Local, ConteinerInfo, Temperatura, Info, InfoTexto, InforSubTexto, ContanerPrincipal, Descricao} from './styles'
import { BlurView } from 'expo-blur';
import blurViewStyle from "./blurViewStyle";


function Home() {
    return (  
        <Contaner>
            <Imagem source={require("../../images/chuva.jpg")}/>
            <ConteinerInfo>
                <ContanerPrincipal>
                    <Local>Atibaia, SP, Brasil</Local>
                    <Temperatura cor="#f2f2">22°</Temperatura>
                    <Descricao>Nublado</Descricao>
                </ContanerPrincipal>

                    <BlurView intensity={100} tint='default' style={blurViewStyle.blurConteiner}> 
            
                        <Info>
                            <InfoTexto>64%</InfoTexto>
                            <InforSubTexto>Umidade</InforSubTexto>
                        </Info>
                        <Info>
                            <InfoTexto>4km</InfoTexto>
                            <InforSubTexto>Vento</InforSubTexto>
                        </Info>
                        <Info>
                            <InfoTexto>25°</InfoTexto>
                            <InforSubTexto>Máxima</InforSubTexto>
                        </Info>
                    </BlurView>
            </ConteinerInfo>
        </Contaner>
    );
}

export default Home;