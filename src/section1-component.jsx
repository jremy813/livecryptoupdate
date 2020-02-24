import React, { Component } from "react";
import "./App.css";
import "./section1-component.css";
import Axios from "axios";
var NumberFormat = require("react-number-format");

class Section1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cryptos: []
    };
  }

  componentDidMount() {
    Axios.get(
      "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR&api_key=71e6c0abbaf769736d4bd9887700c9428402cdfde69495f6440b82f8249236b6"
    ).then(res => {
      const cryptos = res.data;
      console.log(cryptos);
      this.setState({ cryptos: cryptos });
    });
  }

  render() {
    return (
      <div className="section1">
        <div className="sec1info">
          <div className="sec1text">
            <h1>Latest Crypto Prices</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est qui
              quisquam blanditiis laboriosam possimus sapiente culpa quo nam
              numquam ratione?
            </p>
            <button>Learn More </button>
          </div>
          <div>
            <h1 id="title">Live BTC and ETH Updates</h1>
            <div className="sec1currency">
              {Object.keys(this.state.cryptos).map(key => (
                <div id="crypto-container">
                  <h3>{key}</h3>
                  <span className="right">{this.state.cryptos[key].USD}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="wave-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#00bfa6"
              fill-opacity="1"
              d="M0,96L48,80C96,64,192,32,288,53.3C384,75,480,149,576,165.3C672,181,768,139,864,128C960,117,1056,139,1152,170.7C1248,203,1344,245,1392,266.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    );
  }
}

export default Section1;
