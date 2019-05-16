import React, { Component } from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';
import CountryDetail from './CountryDetail';

export default class Country extends Component {
  state = { countries };

  showCountries = _ => {
    const countryList = this.state.countries.map((country, i) => {
      return (
        <li className="list-group-item list-group-item-action" href={this.state.countries.cca3} key={i}>
          <Link to={`/countries/${i}`}>{country.name.common}</Link>
        </li>
      );
    });
    return countryList;
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-5 col-5-style">
            <div className="list-group">
              <ul>{this.showCountries()}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}