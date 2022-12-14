import React from 'react'
import styled, { keyframes } from 'styled-components'
import Title from '../../texts/Title'

const Member = ({img, name, desc, color}) => {
  return (
    <Container color={color}>
      <img src={img} />
      <Title className='title' size={1.3}>{name}</Title>
      <span className='desc'>{desc}</span>
    </Container>
  )
}

const Container = styled.div`
  aspect-ratio: 3/4;
  width: 18rem;
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.1),
    rgba(0, 0, 0, 0.1),
    rgba(255, 255, 255, 0.07)
  );
  background-size: 400% 400%;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .3);
  display: grid;
  place-items: center;
  grid-template-rows: 10fr 1fr 5fr;
  backdrop-filter: blur(10px);
  margin: 1rem;
  transition: background .2s ease-in-out;

  &:hover{
    background-position: 0% 25%;
    & img {
      transform: scale(1.03);
      box-shadow: 10px 10px 25px rgba(0, 0, 0, .5);
    }
  }

  & .title {
    place-content: center;
    margin: 0 !important;
    text-shadow: 2px 2px 3px rgba(0, 0, 0, .3);
    text-transform: uppercase;
  }

  & img {
    place-content: center;
    aspect-ratio: 1;
    width: 8rem;
    border-radius: 100%;
    box-shadow: 0 0 25px rgba(0, 0, 0, .5);
    transition: all .2s ease-in-out;
  }

  & .desc {
    place-content: start center;
    color: white;
    background-color: ${props => props.color};
    border-radius: 20px;
    padding: 2px 12px;
    font-weight: normal;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, .2);
  }
`

export default Member