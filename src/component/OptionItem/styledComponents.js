import styled from 'styled-components'

export const OptionItem = styled.li`
  margin: 8p;
`

export const OptionButton = styled.button`
  background-color: transparent;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const OptionImage = styled.img`
  height: 140px;
  width: 140px;
  @media screen and (min-width: 768px) {
    height: 200px;
    width: 200px;
  }
`
