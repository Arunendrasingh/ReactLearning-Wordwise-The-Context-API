import CityItem from './CityItem'
import styles from './CityList.module.css'
import Spinner from "./Spinner"
import Message from "./Message"

function CityList({cityList, isLoading}) {
    if (isLoading) return <Spinner />

    if (!cityList.length) return <Message message="No City is present to display. Please add new city or reload the page."/>
    return (
        <ul className={styles.cityList}>
            {cityList.map((city)=> <CityItem city={city}/>)}
        </ul>
    )
}

export default CityList
