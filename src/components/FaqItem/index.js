// Write your code here.
import './index.css'

import {Component} from 'react'

class FaqItem extends Component {
  constructor(props) {
    super(props)
    const {itemDetails} = this.props
    this.state = {myList: itemDetails, isTrue: false}
  }

  onChangeImage = () => {
    this.setState(obj => ({isTrue: !obj.isTrue}))
  }

  render() {
    const {myList, isTrue} = this.state
    const {id, questionText, answerText} = myList
    return (
      <li className="list-item">
        <div className="para-container">
          <h1 className="question-heading">{questionText}</h1>
          {isTrue ? (
            <button className="button" onClick={this.onChangeImage}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
                alt="minus"
                className="image"
              />
            </button>
          ) : (
            <button className="button" onClick={this.onChangeImage}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
                alt="plus"
                className="image"
              />
            </button>
          )}
        </div>
        {isTrue && (
          <div>
            <hr />
            <p>{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}
export default FaqItem
