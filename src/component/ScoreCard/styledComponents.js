import styled from 'styled-components'

export const ScoreContainer = styled.div`
  border: 2px solid #ffffff;
  border-radius: 8px;
  padding: 12px 28px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 70%;
    padding: 18px 38px;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
  font-family: 'Bree Serif';
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  margin: 0px;
  width: 100px;
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`

export const ScoreBox = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 8px 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    padding: 18px 38px;
  }
`
export const ScoreText = styled.p`
  font-family: 'Roboto';
  color: #223a5f;
  font-size: 18px;
  font-weight: 500;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`

export const Score = styled.p`
  font-family: 'Roboto';
  color: #223a5f;
  font-size: 18px;
  font-weight: 500;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`
