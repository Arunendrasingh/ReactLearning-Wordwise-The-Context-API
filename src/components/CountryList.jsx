import React from "react";

import Message from "./Message";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  const countryList = cities.reduce((arr, city) => {
    if (arr.map((el) => el.country).includes(city.country)) {
      return arr;
    } else {
      return [...arr, { country: city.country, emoji: city.emoji }];
    }
  }, []);
  // const countryList = [];
  if (!countryList.length)
    return (
      <Message message="No City is present to display. Please add new city or reload the page." />
    );
  return (
    <ul className={styles.countryList}>
      {countryList.map((country) => (
        <CountryItem country={country} />
      ))}
    </ul>
  );
}

export default CountryList;
