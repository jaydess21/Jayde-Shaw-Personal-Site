import React, { useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import music from '../assets/sounds/BurnaBoy.mp3'

const Box = styled.div`
display: flex;
cursor: pointer;
position: fixed;
top:4%;
left: 92%; /* Center horizontally */
transform: translateX(-50%);
bottom: 0rem; /* Adjust the distance from the bottom */
z-index: 3;

  & > *:nth-child(1) {
    animation-delay: 0.2s;
  }
  & > *:nth-child(2) {
    animation-delay: 0.3s;
  }
  & > *:nth-child(3) {
    animation-delay: 0.4s;
  }
  & > *:nth-child(4) {
    animation-delay: 0.5s;
  }
  & > *:nth-child(5) {
    animation-delay: 0.8s;
  }

  &:before {
    content: 'Play music';
    font-family: 'La Belle Aurore', cursive;
    color: #FF1493;
    font-size: 15px;
    position: absolute;
    margin-top: -28px;
    left: -320px;
    opacity: 0.9;
    line-height: 20 px;
  }
`

const play = keyframes`
0%{
    transform:scaleY(1);
}
50%{
    transform:scaleY(2);
}
100%{
    transform:scaleY(1);
}
`
const Line = styled.span`
  background: #000000;
  border: 1px solid #FF1493;


  animation: ${play} 1s ease infinite;
  animation-play-state: ${(props) => (props.click ? 'running' : 'paused')};
  height: .5rem;
  width: 3px;
  margin: 0 0.1rem;
  position: relative;
  left: -300px;
  
`
const SoundBar = () => {
  const ref = useRef(null)
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)

    if (!click) {
      ref.current.play()
    } else {
      ref.current.pause()
    }
  }
  return (
    <Box onClick={() => handleClick()}>
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <audio src={music} ref={ref} loop />
    </Box>
  )
}

export default SoundBar