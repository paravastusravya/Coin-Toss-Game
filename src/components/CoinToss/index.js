// Write your code here
import {Component} from 'react'

import './index.css'

const headsTailsImage = [
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  },
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
  },
]

class CoinToss extends Component {
  state = {
    activeImage: headsTailsImage[0].imageUrl,
    totalCount: 0,
    headsCount: 0,
    tailsCount: 0,
  }

  onClickTossBtn = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      this.setState(prevState => ({
        activeImage: headsTailsImage[0].imageUrl,
        totalCount: prevState.totalCount + 1,
        headsCount: prevState.headsCount + 1,
      }))
    } else {
      this.setState(prevState => ({
        activeImage: headsTailsImage[1].imageUrl,
        totalCount: prevState.totalCount + 1,
        tailsCount: prevState.tailsCount + 1,
      }))
    }
  }

  render() {
    const {activeImage, totalCount, headsCount, tailsCount} = this.state
    return (
      <div className="app-container">
        <div className="container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={activeImage} alt="toss result" className="image" />
          <button
            type="button"
            className="button"
            onClick={this.onClickTossBtn}
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads:{headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
