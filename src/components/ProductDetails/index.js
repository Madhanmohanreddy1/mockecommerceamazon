import Cookies from 'js-cookie'
import {Component} from 'react'
import Header from '../Header'
import {MdOutlineCurrencyRupee} from 'react-icons/md'
import ProductCard from '../ProductCard'
import './index.css'
import {Link} from 'react-router-dom'

const array = [1, 2, 3, 4, 5]

class ProductDetails extends Component {
  state = {
    itemDataValue: 'INTIAL',
    array: array,
    value: array[0],
  }

  componentDidMount() {
    this.getSingleItemDetails()
  }

  getSingleItemDetails = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/products/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedData = {
        imageUrl: data.image_url,
        price: data.price,
        availability: data.availability,
        brand: data.brand,
        description: data.description,
        rating: data.rating,
        id: data.id,
        title: data.title,
      }
      this.setState({itemDataValue: updatedData})
    } else {
      console.log('Failure')
    }
  }
  quantityChange = event => {
    this.setState({value: event.target.value})
  }

  render() {
    const {itemDataValue, value} = this.state
    const {
      imageUrl,
      price,
      description,
      availability,
      brand,
      rating,
      id,
      title,
    } = itemDataValue
    const res =
      availability === 'In Stock' ? 'availabile-green' : 'availabile-red'
    console.log(res)

    return (
      <div className="margin-for-smaal">
        <Header />
        <div className="display-con">
          <div className="display-utilites">
            <img src={imageUrl} alt="img" className="image-styling" />
          </div>
          <div className="another-container">
            <h3 className="heading">{title}</h3>
            <p className="para-width">{description}</p>
            <p className="brand">{brand}</p>
            <hr className="horizantal" />
            <div className="brand">
              <h2>
                MRP : <MdOutlineCurrencyRupee /> {price}
              </h2>
              <span className="span1">Fullfilled</span>
              <p className="inclusive-style">Inclusive of all taxes</p>
              <h3 className={`${res}`}>{availability}</h3>
              <p className="rating-rate">rating : {rating}</p>
            </div>
            <hr />
            <div className="button-element">
              <select
                value={value}
                className="quantity-avalible"
                onChange={this.quantityChange}
              >
                {array.map(values => {
                  return <option value={values}>Quantity : {values}</option>
                })}
              </select>{' '}
              <br />
              <button className="add-button-styling" onClick={this.addtoCart}>
                <Link to={`/cart/${id}`} className="add-style">
                  Add to Cart
                </Link>
              </button>
              <br />
              <button className="add-button-styling1"><Link to={`/cart/${id}`} className="add-style">Buy Now</Link></button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductDetails
