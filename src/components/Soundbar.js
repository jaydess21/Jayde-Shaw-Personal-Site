import React, { useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import music from '../assets/sounds/drake.mp3'

const Box = styled.div`
  display: flex;
  cursor: pointer;
  position: fixed;
  right: 8rem;
  top: 3rem;
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
    content: '<Play music & Browse>';
    font-family: 'La Belle Aurore', cursive;
    color: #eec0c8;
    font-size: 18px;
    position: absolute;
    margin-top: -35px;
    left: -350px;
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
  background: #eec0c8;
  border: 1px solid;


  animation: ${play} 1s ease infinite;
  animation-play-state: ${(props) => (props.click ? 'running' : 'paused')};
  height: .5rem;
  width: 5px;
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
      <audio src={music} ref={ref} loop /> &nbsp;
    </Box>
  )
}

export default SoundBar