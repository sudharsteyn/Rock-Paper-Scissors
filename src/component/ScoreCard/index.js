import {
  ScoreContainer,
  TitleContainer,
  Title,
  ScoreBox,
  ScoreText,
  Score,
} from './styledComponents'

const ScoreCard = props => {
  const {score} = props
  return (
    <ScoreContainer>
      <TitleContainer>
        <Title>ROCK PAPER SCISSORS</Title>
      </TitleContainer>
      <ScoreBox>
        <ScoreText>Score</ScoreText>
        <Score>{score}</Score>
      </ScoreBox>
    </ScoreContainer>
  )
}

export default ScoreCard
