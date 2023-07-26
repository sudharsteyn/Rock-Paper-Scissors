import {OptionItem, OptionButton, OptionImage} from './styledComponents'

const OptionItems = props => {
  const {optionDetail, onUserSelectedOption} = props
  const {id, imageUrl} = optionDetail
  const onOptionSelected = () => {
    onUserSelectedOption(id)
  }
  const testId = id.toLowerCase()
  return (
    <OptionItem>
      <OptionButton
        data-testid={`${testId}Button`}
        onClick={onOptionSelected}
        type="button"
      >
        <OptionImage src={imageUrl} alt={id} />
      </OptionButton>
    </OptionItem>
  )
}

export default OptionItems
