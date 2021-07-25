import React from 'react';
import styles from './countries.module.css';
import { getCountries } from '../fetchAPI/getCountries';

class Countries extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        countries: [],
      };
  }

  componentDidMount() {
    getCountries()
      .then((result) => {
        this.setState({
          countries: result,
        });
      }).catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className={styles.countriesWrapper}>
        <input className={styles.countryInput} type="text" />
        <div className={styles.container}>
          {
            this.state.countries.map((country) => {
              return (
                <a href={`https://en.wikipedia.org/wiki/${country.name}`} className={styles.countryDiv}>
                  <img src={country.flag} className={styles.countryFlag} alt='There must be a pic' />
                  <p className={styles.countryName}>{country.name}</p>
                </a>
              )
            })
          }

        



        </div>
      </div>
    );
  }
}
  
export default Countries;