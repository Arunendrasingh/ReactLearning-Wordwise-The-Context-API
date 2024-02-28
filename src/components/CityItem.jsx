import styles from "./CityItem.module.css";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

export default function CityItem({ city }) {
  console.log("city Detail: ", city);
  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{city.emoji}</span>
      <h3 className={styles.name}>{city.cityName}</h3>
      <time className={styles.data}>{formatDate(city.date)}</time>
      <button className={styles.deleteBtn}>&times;</button>
    </li>
  );
}
