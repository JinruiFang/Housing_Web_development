import React, { useState } from 'react';
import '../style.css';
import Header from './header';

// Jinrui's page
const Sell = () => {

  // set state for user information and render user input 
  const [firstName, setFirstName] = useState("");
  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  }

  const [lastName, setLastName] = useState("");
  const handleLastName = (event) => {
    setLastName(event.target.value);
  }

  const [address, setAddress] = useState("");
  const handleAddress = (event) => {
    setAddress(event.target.value);
  }

  const [alertMessage, setAlertMessage] = useState(null);
  console.log(alertMessage);
  const [areaName, setareaName] = useState("");
  const handleArea = (event) => {
    setareaName(event.target.value);
  }

  if (areaName == "") {

  } else {
    fetchTax(areaName);
  }


  const [fetchreturnPrice, setEsiPrice] = useState("0");
  const handleAreaSubmit = (event) => {
    console.log(fetchreturnPrice);
    alert("Hi, the median housing price of your interested county " + areaName + " is: $" + fetchreturnPrice);
    event.preventDefault();
  }


  const message1 = "";
  const handleSubmit = (event) => {
    alert("Hi " + firstName + " " + lastName + ", you have submitted the request to sell your property at: " + address + ". We will contact you as soon as possible. Thanks for choosing Housing here!");
    event.preventDefault();
  }


  // ajax part begin
  // ajax will be used when the user ask for the estimate price for their house. 
  // the returned data will be used to display for users' references

  function fetchTax(userGivenArea) {
    fetch("price.json")
      .then(function (response) {  //when done downloading
        console.log(response);
        return response.json();  //start encoding into an object
      })
      .then(function (data) {
        if (data.length === 0) {
          setAlertMessage("No results found.");
        }
        let price = "0";
        for (let i = 0; i < 39; i++) {
          console.log("name", data[i].name);
          console.log("userGivenArea", userGivenArea)
          if (data[i].name == userGivenArea) {
            price = data[i].price;
            console.log("price", price);
            setEsiPrice(price);
          }
        }
      })
      .catch(function (err) {
        setAlertMessage("err+" + err.message);
      })
  }



  // render sell page
  return (
    <div>
      <Header />

      <main>
        <section className="Sell">
          <h2>Welcome to Sell your house!</h2>
        </section>

        {/* price estimate form */}
        <h3>Check out median housing price in your county</h3>
        <section className="UserInformation">
          <p>If you would like to check out the median home price in one county in 2021, then fill the form below please. Thank you!</p>
          <form onSubmit={handleAreaSubmit}>
            <label className="fname">Enter the county name in Washington State that you want to check the average price (i.e: King):<br />
              <input type="text" name="fname" placeholder="Your interested county name"
                value={areaName} onChange={handleArea} />
            </label>
            <p>click submit to see the price</p>
            <input type="submit" value="Submit" onChange={handleAreaSubmit} />
            <br />
          </form>
        </section>





        {/* sell form */}
        <h3>Sell Form</h3>
        <section className="UserInformation">
          <p>If you would like to sell your house, then fill the form below please. Thank you!</p>
          <form onSubmit={handleSubmit}>

            <label className="fname">First name:<br />
              <input type="text" name="fname" placeholder="Your first name.."
                value={firstName} onChange={handleFirstName} />
            </label>
            <br />

            <label className="lname">Last name:<br />
              <input type="text" name="lname" placeholder="Your last name.."
                value={lastName} onChange={handleLastName} />
            </label>
            <br />

            <label className="HouseAdress">Your house's address:<br />
              <input type="text" name="address" placeholder="Your house's address.."
                value={address} onChange={handleAddress} />
            </label>
            <br />

            <label className="money">How much You want to Sell?:<br />
              <select name="Price" id="Price">
                <option value="text">Not decided yet</option>
                <option value="exlowPrice">10,000-30,000</option>
                <option value="lowPrice">30,000-50,000</option>
                <option value="midPrice">50,000-100,00</option>
                <option value="highPrice">100,000+</option>
              </select>
            </label>
            <br /><br />

            <div className='responseBar'>
              <p>Hi {firstName} {lastName}, we will contact you as soon as possible. Thanks for choosing Housing here! </p>
            </div>

            <input type="submit" value="Submit" onChange={handleSubmit} />
            <div>
              <p>{message1}</p>
              <p>Please check your information before submit!</p>
            </div>
          </form>
        </section>
      </main>

      <footer className="twondfooter">
        <p>Median Home Price Data from <a href="https://cdn.nar.realtor/sites/default/files/documents/2021-q4-county-median-home-prices-and-local-affordability-by-state-03-08-2022.pdf">https://cdn.nar.realtor</a></p>
        <address>Have a Question? Contact me at <a href="mailto:me@here.com">HousingHere@uw.edu</a>.</address>
        <p>Copyright &copy; 2022 Spring UW INFO340 Group9. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Sell;

