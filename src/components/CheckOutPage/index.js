import {Component} from 'react'
import Header from '../Header'
import './index.css'

const countries = [
  'United States',
  'India',
  'Japan',
  'Afganisthan',
  'Australia',
]
class CheckOutPage extends Component {
  state = {
    country: '',
    state: '',
    city: '',
    pincode: '',
    phoneNo: '',
  }

  countryChange = event => {
    this.setState({country: event.target.value})
  }
  stateValue = event => {
    this.setState({state: event.target.value})
  }

  phone = event => {
    this.setState({phoneNo: event.target.value})
  }
  city = event => {
    this.setState({city: event.target.value})
  }
  pincode = event => {
    this.setState({pincode: event.target.value})
  }

  render() {
    const {country, state, phoneNo, pincode, city} = this.state
    return (
      <>
        <Header />
        <div className="shipping-display">
          <div>
            <h3 className="enter-heading">1.Enter a Shipping address</h3>
            <div className="border-main-con">
              <p className="country-style">Country/Region</p>
              <select
                value={country}
                className="select-style"
                onChange={this.countryChange}
              >
                {countries.map(count => {
                  return <option value={count}>{count}</option>
                })}
              </select>{' '}
              <br />
              <label
                htmlFor="name"
                className="country-style margin-top-address"
              >
                Full Name (first and lastname) :
              </label>{' '}
              <br />
              <input
                type="text"
                className="select-style"
                placeholder="please enter full name"
                id="name"
              />
              <br />
              <label
                htmlFor="name1"
                className="country-style margin-top-address"
              >
                Phone Number :
              </label>{' '}
              <br />
              <input
                type="text"
                id="name1"
                className="select-style"
                onChange={this.phone}
              />{' '}
              <br />
              <label
                htmlFor="name2"
                className="country-style margin-top-address"
              >
                Address
              </label>{' '}
              <br />
              <input
                type="text"
                placeholder="Street address or P.O Box"
                id="name2"
                className="select-style"
              />
              <br />
              <input
                type="text"
                placeholder="Bulding/flat no or etc.."
                className="select-style"
              />{' '}
              <br />
              <div className="address-display-value">
                <div className="margin-left-for-zipcode">
                  <label htmlFor="name3" className="country-style ">
                    City
                  </label>{' '}
                  <br />
                  <input
                    type="text"
                    id="name3"
                    className="special-width"
                    onChange={this.city}
                  />
                </div>
                <div className="margin-left-for-zipcode">
                  <label htmlFor="name4" className="country-style">
                    State
                  </label>{' '}
                  <br />
                  <input
                    type="text"
                    id="name4"
                    className="special-width"
                    onChange={this.stateValue}
                  />
                </div>
                <div className="margin-left-for-zipcode last-state-code">
                  <label htmlFor="name5" className="country-style ">
                    ZIP code
                  </label>{' '}
                  <br />
                  <input
                    type="text"
                    id="name5"
                    className="special-width"
                    onChange={this.pincode}
                  />
                </div>
              </div>
              <div className="last-state-code">
                <input type="checkbox" />
                <label>make this my default address</label>
              </div>
            </div>
            <hr />
            <h3 className="margin-left-hr">2. Payment Method</h3>
            <hr />
            <h3 className="margin-left-hr">3. Items and Delivery</h3>
            <hr />
          </div>
          <div className="under-display">
            <div>
              <button className="proced-butttons">Use this address</button>
              <p className="para-address">
                Choose a shipping address to deliver to continue checkout.you'll
                still have a chance to edit before final before
              </p>

              <hr />
              <h3>Order Summary</h3>
              <p>
                payment : <span className="span-element">Success</span>
              </p>
              <p>
                Delivery Expected:{' '}
                <span className="span2-element">9 Nov 2024 </span>
              </p>
              <p className="span2-element">
                Adress : {country} {state} {city} {pincode} {phoneNo}
              </p>
              <p className="span2-element">orderd placed Thank you!</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default CheckOutPage
