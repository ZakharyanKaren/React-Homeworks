export const getCountries = () => {
  return fetch(`https://restcountries.eu/rest/v2/all`).then((response) =>
    response.json()
  );
};
