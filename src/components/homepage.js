import React, { useState } from 'react';
import '../style.css';
import { Link } from 'react-router-dom';
import Header from './header';
import _ from 'lodash'
import { element } from 'prop-types';

const Home = (props) => {
    let data = props.displayedData;
    let DistrictGroups = Object.keys(_.groupBy(data, 'district'));
    let DistrictGroupsDis = DistrictGroups.map((item) => {
        return <option key={item.district} value={item}>{item}</option>
    })

    const [district, setdistrict] = useState('');
    const [priceRange, setpriceRange] = useState('');

    const handleDis = (event) => {
        let value = event.target.value;
        setdistrict(value);
    }

    const handlePri = (event) => {
        let value = event.target.value;
        setpriceRange(value);
    }

    let displayedData = data.filter((item) => {
        if (district == '') {
            if (priceRange == '') {
                return item;
            }
            return item.priceNum > priceRange;
        } else {
            return item.district == district && item.priceNum > priceRange;
        }
    })

    const house = displayedData.map((element) => {
        return <HouseList key={element.id} houseInfo={element} />
    })



    return (
        <div>
            {/* header start */}
            <Header />
            {/* header end here, copy and paste this part to every component you need a header */}

            <main>
                <section className="searchBar">
                    <form className="search">
                        <input type="search" name="q" placeholder="Search Your House" aria-label="Search through site content" />
                        <button>
                            <svg viewBox="0 0 1024 1024"><path className="path1" d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path></svg>
                        </button>
                    </form>

                    <form >
                        <ul className="filter">
                            <li>
                                <label htlmfor="Area">Areas:</label>
                                <select name="ares" id="areas" value={district} onChange={handleDis}>
                                    <option key="all" value="">All District</option>
                                    {DistrictGroupsDis}
                                </select>
                            </li>
                            <li>
                                <label htlmfor="PriceRange">Price Rane:</label>
                                <select name="Price" id="Price" value={priceRange} onChange={handlePri}>
                                    <option key="all" value="">All Price</option>
                                    <option key="300000" value="300000">Above 300,000</option>
                                    <option key="400000" value="400000">Above 400,000</option>
                                    <option key="500000" value="500000">Above 500,000</option>

                                </select>
                            </li>
                        </ul>
                    </form>
                </section>

                <section className="List">
                    <h2>Housing List</h2>
                    <div className="houseInfo">

                        {house}


                    </div>
                </section>

                <section id="about" className="About Us">
                    <h2>About Us</h2>
                    <p className="description"> We are a group of non-profit making team that help you choose the home that you are most comfortable
                        with. The listings here have been screened by us and these are our top recommendations for great Seattle
                        listings.One of the things that sets us apart from other housing sites is that our housing listings contain
                        publicly available government documents about your interested properties, including Real Estate Exercise Tax Affidavit,
                        Addendum/Amendment to Purchase and Sale Agreement, Statutory Warranty Deed, etc. We provide these government public documents directly for your reference, saving your time for researching for housing. You are welcome to check them out!</p >
                    <div className="spacingfix"> space </div>
                </section>

            </main>

            <footer className="twondfooter">
                {/* <!-- Author Info --> */}
                <address>Have a Question? Contact me at < a href=" ">HousingHere@uw.edu</ a>.</address>
                <p>Copyright &copy; 2022 Spring UW INFO340 Group9. All rights reserved.</p >
            </footer>
        </div>
    );
};

function HouseList({ houseInfo }) {
    return (
        <div>
            <Link to='/secondPage' state={houseInfo}>
                < img src={houseInfo.img} alt={houseInfo.img} />
                <p className="price">{houseInfo.price}</p >
                <p>{houseInfo.address}</p >
            </Link>
        </div>
    );
}

export default Home;
