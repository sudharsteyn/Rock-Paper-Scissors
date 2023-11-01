import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import ScoreCard from '../ScoreCard'
import OptionItems from '../OptionItem'

import {
  GameContainer,
  PlayingViewContainer,
  RulesButton,
  GameOptionItemList,
  GameResultContainer,
  SelectedOptionContainer,
  Player,
  ResultText,
  ResultImage,
  SelectedOptions,
  PlayAgainButton,
  PopupContainer,
  PopupImage,
  CloseButton,
} from './styledComponents'

const gameOption = {
  rock: 'ROCK',
  paper: 'PAPER',
  scissors: 'SCISSORS',
}

const resultText = {
  win: 'YOU WON',
  lose: 'YOU LOSE',
  draw: 'IT IS DRAW',
}

class RockPaperScissorsGame extends Component {
  state = {
    isGameStart: true,
    userSelected: '',
    computerSelected: '',
    score: 0,
    result: '',
  }

  onUserSelectedOption = id => {
    const {choicesList} = this.props
    const randomPick = Math.floor(Math.random() * choicesList.length)
    this.setState(
      {
        isGameStart: false,
        userSelected: id,
        computerSelected: choicesList[randomPick].id,
      },
      this.checkResult,
    )
  }

  checkResult = () => {
    const {userSelected, computerSelected} = this.state
    if (userSelected === computerSelected) {
      this.setState({result: resultText.draw})
    } else if (userSelected === gameOption.rock) {
      if (computerSelected === gameOption.scissors) {
        this.setState(prevState => ({
          score: prevState.score + 1,
          result: resultText.win,
        }))
      } else {
        this.setState(prevState => ({
          score: prevState.score - 1,
          result: resultText.lose,
        }))
      }
    } else if (userSelected === gameOption.paper) {
      if (computerSelected === gameOption.rock) {
        this.setState(prevState => ({
          score: prevState.score + 1,
          result: resultText.win,
        }))
      } else {
        this.setState(prevState => ({
          score: prevState.score - 1,
          result: resultText.lose,
        }))
      }
    } else if (userSelected === gameOption.scissors) {
      if (computerSelected === gameOption.paper) {
        this.setState(prevState => ({
          score: prevState.score + 1,
          result: resultText.win,
        }))
      } else {
        this.setState(prevState => ({
          score: prevState.score - 1,
          result: resultText.lose,
        }))
      }
    }
  }

  playerAgain = () => {
    this.setState({isGameStart: true})
  }

  findSelectedOption = id => {
    const {choicesList} = this.props
    const selected = choicesList.find(eachChoice => eachChoice.id === id)
    return selected
  }

  renderPlayingView = () => {
    const {choicesList} = this.props
    return (
      <PlayingViewContainer>
        <GameOptionItemList>
          {choicesList.map(eachOption => (
            <OptionItems
              key={eachOption.id}
              optionDetail={eachOption}
              onUserSelectedOption={this.onUserSelectedOption}
            />
          ))}
        </GameOptionItemList>
      </PlayingViewContainer>
    )
  }

  renderResultView = () => {
    const {result, userSelected, computerSelected} = this.state
    const userSelectedOption = this.findSelectedOption(userSelected)
    const computerSelectedOption = this.findSelectedOption(computerSelected)
    return (
      <GameResultContainer>
        <SelectedOptions>
          <SelectedOptionContainer>
            <Player>YOU</Player>
            <ResultImage src={userSelectedOption.imageUrl} alt="your choice" />
          </SelectedOptionContainer>
          <SelectedOptionContainer>
            <Player>OPPONENT</Player>
            <ResultImage
              src={computerSelectedOption.imageUrl}
              alt="opponent choice"
            />
          </SelectedOptionContainer>
        </SelectedOptions>
        <ResultText>{result}</ResultText>
        <PlayAgainButton onClick={this.playerAgain} type="button">
          PLAY AGAIN
        </PlayAgainButton>
      </GameResultContainer>
    )
  }

  render() {
    const {isGameStart, score} = this.state
    return (
      <GameContainer>
        <ScoreCard score={score} />
        {isGameStart ? this.renderPlayingView() : this.renderResultView()}
        <Popup modal trigger={<RulesButton>RULES</RulesButton>}>
          {close => (
            <PopupContainer>
              <CloseButton type="button" onClick={() => close()}>
                <RiCloseLine size={20} />
              </CloseButton>
              <PopupImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </PopupContainer>
          )}
        </Popup>
      </GameContainer>
    )
  }
}

export default RockPaperScissorsGame
