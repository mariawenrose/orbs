import React from 'react';

class Orb extends React.Component {
  constructor(props) {
    super(props)
    let { size, primary, secondary, delay } = this.props

    // if(color = 'random') {}
    let styleSheet = document.styleSheets[0]

    let animationName = `animation${this.randNum(0, 1000)}`

    let keyframes =
      `@-webkit-keyframes ${animationName} {
        0% {
          width: ${0.5 * size}em; 
          height: ${0.5 * size}em;
        } 
        50% {
          width: ${1.5 * size}em; 
          margin-left: ${-0.25 * size}em;
          height: ${1.5 * size}em;
          margin-top: ${-0.25 * size}em;
          box-shadow:
            0 0 ${0.5 * size}em ${0.5 * size}em ${primary},
            0 0 ${0.5 * size}em ${size}em ${secondary};
          }
          100% {
            width: ${0.5 * size}em; 
            height: ${0.5 * size}em;
          } 
    }`

    styleSheet.insertRule(keyframes, styleSheet.cssRules.length)

    let interval = setInterval(() => this.setPosition(), (delay * 1000))

    this.state = {
      interval: interval,
      animationName: animationName,
      top: this.randNum(5, 90) + '%',
      left: this.randNum(5, 90) + '%'
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.interval)
  }

  randNum = (min, max) => {
    return (Math.floor(Math.random() * (max - min)) + min)
  }

  setPosition = () => {
    this.setState({
      top: this.randNum(5, 90) + '%',
      left: this.randNum(5, 90) + '%'
    })
  }

  render() {

    let { animationName, top, left } = this.state

    let style = {
      animationName: animationName,
      borderRadius: '50%',
      animationDuration: this.props.delay + 's',
      animationDelay: this.props.delay + "s",
      animationIterationCount: 'infinite',
      position: 'fixed',
      top: top,
      left: left
    }

    return (
      <div className="box" style={style}></div>
    )
  }
}

export default Orb;