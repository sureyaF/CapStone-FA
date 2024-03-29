import React from 'react'
import  "./Info.css";
import{keyframes} from 'styled-components'
import { Button } from '../components/Button'
import {bounce} from 'react-animations'
//import { Button } from "react-scroll";
import { Column2, ImgWrap, InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Img } from '../InfoSection/InfoElement'
import dashboardImg from '../images/dashboard.png';
import styled from 'styled-components';
const Bounce = styled.div`animation:2s ${keyframes`${bounce}`} infinite;`;
const InfoSection = ( { lightBg, id, lightText, imgStart, topLine, darkText, buttonLabel,  heading, description, primary, dark,} ) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                            <Bounce>   <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{heading}</Heading>
                               <Subtitle darkText={darkText}>{description}</Subtitle></Bounce>
                                <BtnWrap>
                                    <Button to='sign-up'smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact = 'true'
                                    offset={-80}
                                    primary={primary? 0:1}
                                    dark ={ dark ? 1: 0}
                                    >
                                        {buttonLabel}
                                    </Button>
                                </BtnWrap>

                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img /><img src={dashboardImg} alt='dashbord'/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>

            </InfoContainer>
        </>
    )
}

export default InfoSection
