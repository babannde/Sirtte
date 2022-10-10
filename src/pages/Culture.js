import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import bg from "../images/culture.jpg";
import logo from "../images/airbnb.png";
import clt1 from "../images/culture.jpg";
import {ConnectButton, DatePicker, Select, Input, Icon, Button, Card, Illustration} from "web3uikit";
import { useState } from "react";

const Culture = () => {

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
          <div><Link to={"/rent"} className="tabs_link">Places To Rent</Link></div>
          <div className="selected" ><Link to={"/culture"} className="tabs_link">Share Culture</Link></div>
        </div>
        <div className="lrContainers">
          <ConnectButton />
        </div>
      </div>



      <div className=" flex-container">
            <div className='card'>
                <img src={clt1} alt="" />
                
            </div>
        
            <div className='card'>
                <img src={clt1} alt="" />
                
            </div>
      </div>
    </>
  );
};

export default Culture;
