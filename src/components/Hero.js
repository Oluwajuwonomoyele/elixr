import styled, {css} from "styled-components";
import { useState, useRef, useEffect } from "react";
import { Button } from "../Button";
import { IoIosArrowForward, IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from 'react-icons/io'


const HeroSection = styled.section`
    height: 100vh;
    overflow: hidden;
`
const HeroContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`
const HeroSlide = styled.div`
    z-index: 1;
    width: 100%;
    height: 100%;
`
const Slider = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        opacity: 0.7;
        background: linear-gradient(0deg, rgba(0,0,0, 0.3), rgba(0,0,0,0.5));
        overflow: hidden;
        z-index: 9;
    }
`
const SliderImg = styled.img`
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    object-fit: cover;
    height: 100vh;

`
const SliderContent = styled.div`
    z-index: 10;
    color: #fff;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 3rem ;

    h1 {
        font-size: clamp(1.5rem, 5vw, 3rem);
        font-weight: 400;
        text-transform: uppercase;
        text-shadow: 0px 20px 20px rgba(0,0,0,0.4);
        margin-bottom: 1rem;
        text-align: left;
    }

    p {
        margin-bottom: 1.2rem;
        text-shadow: 0px 20px 20px rgba(0,0,0,0.4);
        font-size: 1.5rem;
    }
`
const Arrow = styled(IoIosArrowForward)`
    font-size: 1rem;
`
const SliderButtons = styled.div`
    position: absolute;
    bottom: 50px;
    right: 50px;
    display: inline-flex;
    gap: 3rem;
    align-items: center;
    margin-right: 50px;
    z-index: 10;
`
const arrowBtns = css`
    width: 50px;
    height: 50px;
    color: #fff;
    padding: 10px;
    background-color: #000d1a;
    cursor: pointer;
    border-radius: 50px;
    user-select: none;
    transition: all 0.3s ease;

    &:hover {
        background-color: #cd853f;
        transform: scale(1.05);
    }

`
const PrevArrow = styled(IoIosArrowDropleftCircle)`
    ${arrowBtns}
`
const NextArrow = styled(IoIosArrowDroprightCircle)`
    ${arrowBtns}
`


const Hero = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);

    // useEffect(() => {
    //     const nextSlide = () => {setCurrent(current => (current === length -1 ? 0 : current + 1 ))}

    //     timeout.current = setTimeout(nextSlide, 3000);

    //     return () => {
    //         if(timeout.current){
    //             clearTimeout(timeout.current)
    //         }
    //     }
    // }, [current, length])

    if(!Array.isArray(slides) || slides.length <= 0){
        return null
    }

    const handleNext = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const handlePrev = () => {
        setCurrent(current === 0 ? length - 1 : current - 1 )
    }

    return ( 
        <HeroSection> 
            <HeroContainer>
                {slides.map((slide, index) => {
                    return (
                        <HeroSlide key={index}>
                            {current === index && (
                                <Slider>
                                    <SliderImg src={slide.image} alt={slide.alt}/>
                                    <SliderContent>
                                        <h1>{slide.title}</h1>
                                        <p>{slide.price}</p>
                                        <Button to={slide.path} primary='true'>{slide.label} <Arrow /></Button>
                                    </SliderContent>
                                </Slider>
                            )}
                        </HeroSlide>
                    )
                })}
                <SliderButtons>
                    <PrevArrow onClick={handlePrev}/>
                    <NextArrow onClick={handleNext}/>
                </SliderButtons>
            </HeroContainer>
        </HeroSection>
     );
}
 
export default Hero;