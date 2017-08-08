import styled from 'styled-components'

export const imageStyle = {
  width: '100%',
  objectFit: 'cover',
  objectPosition: '50% 50%',
  height: '100%'
}

export const Header = styled.div`
  text-align: center;
  font-size: 0.6em;
`

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
`

export const ImageWrapper = styled.div`
padding: 8%;
box-sizing: border-box;
margin-bottom: 2%;
max-height: 300px;
width: 100%;
overflow: hidden;
display: flex;
align-content: stretch;
`
export const Book = styled.div`
width: 15%;
display: flex;
flex-direction: column;
align-items: center;
margin: 1.5%;
border: 1px solid black;
font-size: 0.8em;
`

export const Title = styled.h4`
font-size: 1.4em;
`

export const IconWrapper = styled.div`
  height: 8%;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
`

export const Icon = styled.i`
  margin: 1px 5px;
  color: rgb(66, 198, 146);
`
