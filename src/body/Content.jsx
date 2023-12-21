import { FaCheck } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa'
const Content = () => {
  return (
    <section className="section">
      <div className="center-text">
        <h1>Buy, Sell & Remit Crypto Safely in Minutes</h1>
      </div>
      <div className="center-flex">
        <div className="center-flex-item">
          <FaCheck className="icon" />
          <p>Buy and sell digital currencies seamlessly from anywhere.</p>
        </div>
        <div className="center-flex-item">
          <FaCheck className="icon" />
          <p>Store all your crypto assets safely and securely in one place.</p>
        </div>
      </div>
      <div className="get-started">
        <button className="btn-started">Get Started</button>
        <FaArrowRight className="icon-arrow" />
      </div>
    </section>
  )
}
export default Content
