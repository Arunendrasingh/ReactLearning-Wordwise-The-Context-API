import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  console.log("Country Detail: ", country);
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
