import './index.css'
import {Component} from 'react'
import {MdOutlineCurrencyRupee} from 'react-icons/md'

class CartProduct extends Component {
  state = {
    sum: 0,
  }

  render() {
    const {productInformation} = this.props
    const {imageUrl, brand, price, availability, description, rating, title} =
      productInformation
    const {sum} = this.state

    return (
      <li className="list-style-value">
        <div className="display-utilites11">
          <img src={imageUrl} className="image-configartain" />
          <div className="margin-left-center">
            <p>{title}</p>
            <p className="description-style">{description}</p>
            <p className="brand-watch">{brand}</p>
            <p className="rating-color-">
              rating : <span>{rating}</span>
            </p>
            <p>Eligible For Free shipping</p>
            <p className="color-for-in">{availability}</p>
          </div>
          <div className="price-margin">
            <p>
              <MdOutlineCurrencyRupee />
              {price}
            </p>
          </div>
        </div>
        <hr className="margin-right-horizanta" />
      </li>
    )
  }
}

export default CartProduct
