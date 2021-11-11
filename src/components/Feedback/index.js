import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {displayThankyou: false}

  onEmojiClick = () => {
    this.setState({feedback: 'feedback'})
    this.setState(prevState => ({displayThankyou: !prevState.displayThankyou}))
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {feedback, displayThankyou} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className={` ${feedback}`}>
            <h1 className="heading">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="emojis-container">
              {emojis.map(eachItem => (
                <li className="img-name" key={eachItem.id}>
                  <img
                    src={eachItem.imageUrl}
                    alt={eachItem.name}
                    className="image"
                    onClick={this.onEmojiClick}
                  />
                  <p className="name">{eachItem.name}</p>
                </li>
              ))}
            </ul>
          </div>
          {displayThankyou && (
            <div className="card-container">
              <img src={loveEmojiUrl} className="love-image" alt="love emoji" />
              <h1 className="heading">Thank you!</h1>
              <p className="para">
                We will use your feedback to improve our customer support
                performance
              </p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
