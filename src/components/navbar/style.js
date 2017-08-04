import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dotted black;
`
export const Button = styled.button`
  background: transparent;
  padding: 3%;
  border-radius: 3em;
  border: 1px solid;
  outline: none;
  &:hover {
    background-color: rgb(66, 198, 146);
    color: white;
  }
`

export const ButtonsWrapper = styled.div`
display: flex;
flex-basis: 25%;
justify-content: space-around;
align-items: center;
margin-right: 5%;
`
