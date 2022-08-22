import styled from 'styled-components/native';

interface Props{
    cor: string
}

export const Contaner = styled.View`
    width: 100%;    
    `;

    export const Imagem = styled.ImageBackground`
        z-index: -1;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    `;

    export const ConteinerInfo = styled.View`
        padding: 5%;
        height: 100%;
        justify-content: space-between;
    `;
        export const ContanerPrincipal = styled.View`
            padding-top: 20%;
        `

            export const Local = styled.Text`
                font-size: 18px;
                text-transform: uppercase;
            `;

            export const  Temperatura = styled.Text<Props>`
                font-size: 110px;
                color: ${(props) => props.cor};
            `;

            export const Descricao = styled.Text`
                font-size: 15px;
            `;

        export const Info = styled.View`
        `;

            export const InfoTexto = styled.Text`
                text-align: center;
                font-size: 15px;
                color: #ffffff;
            `;

            export const InforSubTexto = styled.Text`
                font-size: 13px;
            `;

