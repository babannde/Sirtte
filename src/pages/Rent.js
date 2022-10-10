import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import bg from "../images/frontpagebg2.png";
import logo from "../images/airbnb.png";
import {ConnectButton, DatePicker, Select, Input, Icon, Button} from "web3uikit";
import { useState } from "react";

const Rent = () => {
  const [checkIn, setCheckIn] = useState(new Date());
  const [destination, setDestination] = useState("Lagos");
  const [tenants, setTenants] = useState(2);
  const [semesters, setSemesters] = useState(2);

  return (
    <>
      <div className="container" style={{ backgroundImage: `url(${bg})`}}>
        <div className="containerGradinet"></div>
      </div>
      <div className="topBanner">
        <div>
          <img className="logo" src={logo} alt="logo"></img>
        </div>
        <div className="tabs">
          <div><Link to={"/"} className="tabs_link">Places To Stay</Link></div>
          <div className="selected"><Link to={"/rent"} className="tabs_link">Places To Rent</Link></div>
          <div><Link to={"/culture"} className="tabs_link">Share Culture</Link></div>
        </div>
        <div className="lrContainers">
          <ConnectButton />
        </div>
      </div>
      <div className="tabContent">
        <div className="searchFields">
          <div className="inputs">
            Location
            <Select
              defaultOptionIndex={0}
              onChange={(data) => setDestination(data.label)}
                options={[
                  {
                    id: 'abj',
                    label: "Abuja"
                  },
                  {
                    id: 'lag',
                    label: "Lagos"
                  },
                  {
                    id: 'ph',
                    label: "Port Harcourt"
                  },

                ]}
            />
          </div>
          <div className="v1" />
          <div className="inputs">
            Semesters
            <Input 
              value={2}
              name="AddSemesters"
              type="number"
              onChange={(event) => setSemesters(Number(event.target.value))}
            />
          </div>
          <div className="vl" />
          <div className="inputs">
            Tenants
            <Input 
              value={2}
              name="AddTenants"
              type="number"
              onChange={(event) => setTenants(Number(event.target.value))}
            />
          </div>
          <div className="vl" />
          <div className="inputs">
            Check In
            <DatePicker 
              id="CheckIn"
              onChange={(event) => setCheckIn(event.date)}
            />
          </div>
          <Link to={"/rents"} state={{
            destination: destination,
            checkIn: checkIn,
            semesters: semesters,
            tenants: tenants
            
          }}>
          <div className="searchButton">
              <Icon fill="#ffffff" size={24} svg="search" />
          </div>
          </Link>
        </div>
      </div>
      <div className="randomLocation">
        <div className="title">Feel Amazing</div>
        <div className="text">
          Let us decide and discover new places live with friends and family.
        </div>
        <Button 
          text="Explore A Location"
          onClick={() => console.log(checkIn)}
        />
      </div>
    </>
  );
};

export default Rent;
