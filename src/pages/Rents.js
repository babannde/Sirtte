import React from "react";
import "./Rentals.css";
import logo from "../images/airbnbRed.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Button, ConnectButton, Icon } from "web3uikit";
import RentalsMap from "../components/RentalsMap";
import { useState } from "react";

const Rents = () => {

  const { state: searchFilters} = useLocation();

  const [highLight, setHighLight] = useState();
  const rentsList = [
    {
      attributes: {
        city: "Lagos",
        unoDescription: "2 Tenants • 2 Beds",
        dosDescription: "Wifi • Kitchen",
        imgUrl:
          "https://ipfs.moralis.io:2053/ipfs/QmS3gdXVcjM72JSGH82ZEvu4D7nS6sYhbi5YyCw8u8z4pE/media/3",
        lat: "6.50837",
        long: "3.384247",
        name: "Apartment in Yaba",
        pricePerSemester: "3",
      },
    },
  ];

let cords =[];
rentsList.forEach((e) => {
  cords.push({ lat: e.attributes.lat, lng: e.attributes.long });
});


  return (
    <>
      <div className="topBanner">
        <div>
          <Link to="/">
            <img className="logo" src={logo} alt="logo"></img>
          </Link>
        </div>
        <div className="searchReminder">
          <div className="filter">
            {searchFilters.destination}
          </div>
          <div className="vl" />
          <div className="filter">
            {`
              ${searchFilters.checkIn.toLocaleString("default", {month: "short",})}
              ${searchFilters.checkIn.toLocaleString("default", {day: "2-digit",})}
            `}
          </div>
          <div className="vl"></div>
          <div className="filter">
            {searchFilters.tenants} Tenants
          </div>
          <div className="vl"></div>
          <div className="filter">
            {searchFilters.semesters} Semester
          </div>
          <div className="searchFiltersIcon">
            <Icon fill="#ffffff" size={20} svg="search" />
          </div>
        </div>
        <div className="lrContainers">
          <ConnectButton />
        </div>
      </div>

      <hr className="line" />
      <div className="rentalsContent">
        <div className="rentalsContentL">
          Stays Available For Your Destination
          {rentsList &&
            rentsList.map((e,i) => {
              return (
                <>

                  <hr className="line2" />
                  <div className={highLight == i ? "rentalDivH": "rentalDiv"}>
                    <img className="rentalImg" src={e.attributes.imgUrl} alt="img"></img>
                    <div className="rentalInfo">
                      <div className="rentalTitle">{e.attributes.name}</div>
                      <div className="rentalDesc">
                        {e.attributes.unoDescription}
                      </div>
                      <div className="rentalDesc">
                        {e.attributes.dosDescription}
                      </div>
                      <div className="bottomButton">
                        <Button 
                        text="Rent" 
                        />
                        <div className="price">
                          <Icon fill="#808080" size={10} svg="matic" /> {e.attributes.pricePerSemester} / Semester
                        </div>
                      </div>
                    </div>
                  </div>

                </>
              )
            })
          }
        </div>
        <div className="rentalsContentR">
          <RentalsMap locations={cords} setHighLight={setHighLight}/>
        </div>
      </div>
    </>
  );
};

export default Rents;
