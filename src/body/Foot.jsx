import image1 from '../Images/image1.png'
import image2 from '../Images/image2.png'
import image3 from '../Images/image3.png'
import eth from '../Images/eth.png'
import usdt from '../Images/usdt.png'
import bitcoin from '../Images/bitcoin.png'
import ltc from '../Images/ltc.png'
const Foot = () => {
  return (
    <div className="exclamation-container">
      <div className="exclamation-item">
        <div className="exclamation">
          <img src={image1} className="images" alt="image1" />
          <div className="eth">
            <img src={eth} className="eth-img" alt="eth-img" />
            <p>ETH accepted</p>
          </div>
          <div className="usdt hide">
            <img src={usdt} className="usdt-img" alt="usdt-img" />
            <p>USDT accepted</p>
          </div>
        </div>
      </div>
      <div className="exclamation-item">
        <div className="exclamation">
          <img src={image2} className="images" alt="image2" />
          <div className="bitcoin hide">
            <img src={bitcoin} className="bitcoin-img" alt="bitcoin-img" />
            <p>Bitcoin payment</p>
          </div>
          <div className="usdt usdt-two">
            <img src={usdt} className="usdt-img" alt="usdt-img" />
            <p>USDT accepted</p>
          </div>
        </div>
      </div>
      <div className="exclamation-item">
        <div className="exclamation">
          <img src={image3} className="images" alt="image3" />
          <div className="bitcoin hide">
            <img src={bitcoin} className="bitcoin-img" alt="bitcoin-img" />
            <p>Bitcoin payment</p>
          </div>
          <div className="ltc">
            <img src={ltc} className="ltc-img hide" alt="ltc-img" />
            <p>LTC accepted</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Foot
