// Write your code here.
import './index.css'
const FaqItem = props => {
  const {faq, isWantAnswer, show} = props
  const altText = isWantAnswer ? 'plus' : 'minus'
  const imgUrl = isWantAnswer
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png '
  const ShowAnswer = () => {
    show()
  }
  return (
    <li className="container">
      <div className="onlyLoaded">
        <h1>{faq.questionText}</h1>
        <button type="button" onClick={ShowAnswer}>
          <img src={imgUrl} alt={altText} />
        </button>
        <hr />
      </div>
    </li>
  )
}
export default FaqItem
