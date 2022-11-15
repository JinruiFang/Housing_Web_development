import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style.css';
import Header from './header';
import { useLocation } from 'react-router-dom';


const SecondPage = (props) => {
    const location = useLocation();
    const houseInfo = location.state;

    return (
        <div>
            <Header />

            <main>
                <section>
                    <div className="containerj">
                        <div className="itemj">
                            <img className="img205" src={houseInfo.img} alt={houseInfo.address} />
                            <div className="flex-card-basic">
                                <div className="card-item">
                                    <h1 className="h1-address1">{houseInfo.address}</h1>
                                    <h1 className="h1-address">Map: <Link to='/Maps'>{houseInfo.district}</Link></h1>
                                    <h1 className="h1-address">{houseInfo.price}</h1>
                                    <p className="picon"><span className="material-icons">real_estate_agent</span>{houseInfo.mortage}</p>
                                    <p className="picon"><span className="material-icons">king_bed</span>{houseInfo.beds_number} Bed(s) <span className="material-icons">bathtub</span>{houseInfo.full_bath_number} Bath(s) <span className="material-icons">square_foot</span>{houseInfo.square_foot} sqft</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2>Description</h2>
                    <p className="description">{houseInfo.Description}</p>
                </section>

                <h2>Home Highlights</h2>
                <section>
                    <div className="flex-card">
                        <div className="icon-item">
                            <p><span className="material-icons">local_parking</span>Parking</p>
                            <p>{houseInfo.Parking}</p>
                        </div>
                        <div className="icon-item">
                            <p><span className="material-icons">deck</span>Outdoor</p>
                            <p>{houseInfo.Outdoor}</p>
                        </div>
                        <div className="icon-item">
                            <p><span className="material-icons">thermostat</span>A/C</p>
                            <p>{houseInfo.AC}</p>
                        </div>

                        <div className="icon-item">
                            <p><span className="material-icons">smartphone</span>HOA</p>
                            <p>{houseInfo.HOA}</p>
                        </div>
                        <div className="icon-item">
                            <p><span className="material-icons">square_foot</span>Price/Sqft</p>
                            <p>{houseInfo.PriceSqft}</p>
                        </div>
                        <div className="icon-item">
                            <p><span className="material-icons">list</span>Listed</p>
                            <p>{houseInfo.Listed}</p>
                        </div>
                    </div>
                </section>


                {/* <!--Jiani --> */}
                <div className="interior feature">
                    <div className="interior feature heading">
                        <h2>Home Details for {houseInfo.address}</h2>
                    </div>
                    <div className="interior_feature_table">
                        <table className="Int_Feature">
                            <thead className="JZtableheading" >
                                <th scope="col"><img src="img/4426053.png" alt="interior feature icon" width="30" height="30" /> Interior Features</th>
                                <th scope="col"></th>
                            </thead>
                            <tbody>
                                <tr className="Dimensions and Layout">
                                    <td>
                                        <div className="tablesubh">Dimensions and Layout</div>
                                        <ul>
                                            <li> Land SqFt: {houseInfo.land_sqaure}</li>
                                            <li> Total Finished Area: {houseInfo.Total_finished_square}</li>
                                        </ul>
                                    </td>
                                    <td>
                                        <div className="spacingfix"> space </div>
                                        <ul>
                                            <li> 1st Floor Area: {houseInfo.first_area}</li>
                                            <li> 1/2 Floor Area: {houseInfo.one_half_area}</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr className="Bedrooms and Bathrooms">
                                    <td>
                                        <div className="tablesubh">Bedrooms and Bathrooms</div>
                                        <ul>
                                            <li> Number of Bedrooms: {houseInfo.beds_number}</li>
                                            <li> Number of Full Baths: {houseInfo.full_bath_number}</li>
                                        </ul>
                                    </td>
                                    <td>
                                        <div className="spacingfix"> space </div>
                                        <ul>
                                            <li> Number of 1/2 Baths: {houseInfo.beds_number}</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr className="Appliances and Utilities">
                                    <td>
                                        <div className="tablesubh">Appliances and Utilities</div>
                                        <ul>
                                            <li> Appliances: </li>
                                            <li> {houseInfo.Appliances}</li>
                                        </ul>
                                    </td>
                                    <td>
                                        <div className="spacingfix"> space </div>
                                        <ul>
                                            <li>Utilities: </li>
                                            <li> {houseInfo.Utilities}</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p> </p>
                    <div className="Property_Information_table">
                        <table className="Int_Feature">
                            <thead className="JZtableheading" >
                                <th scope="col"><img src="img/2380124.png" alt="property information icon" width="30" height="30" /> Property Information</th>
                                <th scope="col"></th>
                            </thead>
                            <tbody>
                                <tr className="Building_history">
                                    <td>
                                        <div className="tablesubh">Building History</div>
                                        <ul>
                                            <li> Number of Buildings: {houseInfo.Num_Buildings}</li>
                                            <li> Condition: {houseInfo.Condition}</li>
                                        </ul>
                                    </td>
                                    <td>
                                        <div className="spacingfix"> space </div>
                                        <ul>
                                            <li> Year Built: {houseInfo.Year_Built} </li>
                                            <li> Year Renovated: {houseInfo.Year_Renovated}</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr className="Property Type">
                                    <td>
                                        <div className="tablesubh">Property Type</div>
                                        <ul>
                                            <li> Highest & Best Use As If Vacant: {houseInfo.Best_Use}</li>
                                        </ul>
                                    </td>
                                    <td>
                                        <div className="spacingfix"> space </div>
                                        <ul>
                                            <li> Present Use: {houseInfo.Present_Use} </li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p> </p>


                    <div className="Sales History heading">
                        <h2>Sales History for 205 40th Avenue E</h2>
                    </div>
                    <table className="Int_Feature">
                        <thead className="JZtheading" >
                            <th scope="col"> Excise Number </th>
                            <th scope="col"> Recording Number </th>
                            <th scope="col"> Document Date</th>
                            <th scope="col"> Sale Price </th>
                        </thead>
                        <tbody>
                            <tr className="Exercise">
                                <td><a id="exercise1" href="https://recordsearch.kingcounty.gov/Landmarkweb/Document/GetTifDocumentByCFN/?cfn=3040737">{houseInfo.Excise_Number}</a></td>
                                <td><a id="recording1" href="https://recordsearch.kingcounty.gov/Landmarkweb/Document/GetTifDocumentByCFN/?cfn=20200330001403">{houseInfo.Recording_Number}</a></td>
                                <td>{houseInfo.Document_Date}</td>
                                <td>{houseInfo.Sale_Price}</td>
                            </tr>


                        </tbody>
                    </table>
                    <p>All sales history is from the <a href="https://blue.kingcounty.com/Assessor/eRealProperty/Detail.aspx?ParcelNbr=1954700200">King County Department of Assessments</a> public records.</p>
                </div>
            </main>

            <footer className="twondfooter">
                {/* <!-- Author Info --> */}
                <address>Have a Question? Contact me at <a href="mailto:me@here.com">HousingHere@uw.edu</a>.</address>
                <p>Copyright &copy; 2022 Spring UW INFO340 Group9. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default SecondPage;