import styled from 'styled-components'

export const GameContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
    padding: 32px;
  }
`

export const PlayingViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const GameResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SelectedOptions = styled.div`
  display: flex;
  justify-content: space-between;
`

export const SelectedOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Player = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`

export const ResultText = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`

export const ResultImage = styled.img`
  height: 140px;
  width: 140px;
  @media screen and (min-width: 768px) {
    height: 200px;
    width: 200px;
  }
`

export const PlayAgainButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 14px;
  font-weight: 500;
  padding: 8px 28px;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`

export const RulesButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 14px;
  font-weight: 500;
  padding: 8px 18px;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  align-self: flex-end;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`

export const GameOptionItemList = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    width: 80%;
  }
`

export const PopupContainer = styled.div`
  background-color: #ffffff;
  padding: 4px;
  margin: 8px;
  display: flex;
  flex-direction: column;
`

export const PopupImage = styled.img`
  width: 100%;
  padding-left: 18px;
  padding-right: 18px;
  padding-bottom: 18px;
  padding-top: 4px;
  @media screen and (min-width: 768px) {
    height: 600px;
  }
`

export const CloseButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
`
