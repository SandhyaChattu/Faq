// Write your code here.
import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem'
class Faq extends Component {
  state = {isWantAnswer: false}
  show = () => {
    this.setState({isWantAnswer: true})
  }
  render() {
    const {faqsList} = this.props
    const {isWantAnswer} = this.state
    return (
      <div className="main-container">
        <div className="bg-container">
          <h1>FAQs</h1>
          <ul>
            {faqsList.map(eachItem => (
              <FaqItem
                key={eachItem.id}
                faq={eachItem}
                isWantAnswer={isWantAnswer}
                show={this.show}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faq
