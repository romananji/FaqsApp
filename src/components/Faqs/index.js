// Write your code here.
import {Component} from 'react'
import './index.css'

import FaqItem from '../FaqItem'

class Faqs extends Component {
  constructor(props) {
    super(props)
    const {faqsList} = this.props
    this.state = {myList: faqsList}
  }

  render() {
    const {myList} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">FAQs</h1>
          <ul className="list-container">
            {myList.map(each => (
              <FaqItem itemDetails={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
