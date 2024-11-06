import './index.css'
import {Component} from 'react'
import Cookies from 'js-cookie'
import CartProduct from '../CartProduct'
import Header from '../Header'
import {Link} from 'react-router-dom'

const arr = []

class Cart extends Component {
  state = {
    product: [],
    isLoading: false,
    sum: 0,
  }

  componentDidMount() {
    this.cartProductDetails()
  }

  cartProductDetails = async () => {
    const {sum} = this.state
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
    arr.push(updatedData)
    this.setState(prevState => ({
      product: [...prevState.product, updatedData],
      isLoading: true,
      sum: updatedData.price + sum,
    }))
  }

  render() {
    const {product, isLoading, sum} = this.state
    return (
      <div>
        <Header />
        <div className="flex-property">
          <div className="background-color-main">
            <div className="display-heading">
              <h1 className="heading-small">Shopping List</h1>
              <p className="price-style">Price</p>
            </div>
            <hr className="horizantal-1" />
            {isLoading ? (
              <ul>
                {arr.map(result => {
                  return (
                    <CartProduct key={result.id} productInformation={result} />
                  )
                })}
              </ul>
            ) : (
              ''
            )}
          </div>
          <div className="sub-total">
            <h2>Sub Total : {sum} /-</h2>
            <button className="background-color-for-pay">
              <Link to="/check-out" className="link-button">
                Proceed to pay
              </Link>
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Cart
