import React from 'react';
import styles from './countries.module.css';
import { getCountries } from '../fetchAPI/getCountries';

class Countries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'none',
      countries: [],
      filteredCountries: [],
      search: '',
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.searchFunc = this.searchFunc.bind(this);
  }

  componentDidMount() {
    getCountries()
      .then((result) => {
        this.setState({
          countries: result,
          filteredCountries: result,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  toggleMenu() {
    this.setState((prevState) => ({
      display: prevState.display === 'none' ? 'block' : 'none',
    }));
  }

  handleChange(e) {
    const val = e.target.value;

    this.setState({
      search: val,
      filteredCountries: this.searchFunc(val),
    });
  }

  searchFunc(val) {
    if (val === '') {
      return this.state.countries;
    } else {
      const filterCountries = this.state.countries.filter((country) => {
        return country.name.toLowerCase().indexOf(val) > -1;
      });
      return filterCountries;
    }
  }

  render() {
    return (
      <div className={styles.countriesWrapper}>
        <input
          onChange={this.handleChange}
          onClick={this.toggleMenu}
          className={styles.countryInput}
          value={this.state.search}
          type="text"
        />
        <div
          className={styles.container}
          style={{ display: this.state.display }}
        >
          {this.state.filteredCountries.map((country) => {
            return (
              <a
                href={`https://en.wikipedia.org/wiki/${country.name}`}
                className={styles.countryDiv}
              >
                <img
                  src={country.flag}
                  className={styles.countryFlag}
                  alt="There must be a pic"
                />
                <p className={styles.countryName}>{country.name}</p>
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Countries;
