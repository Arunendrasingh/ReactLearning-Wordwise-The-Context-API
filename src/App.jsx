import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/CityList";
import { useEffect, useState } from "react";
// import PageNav from "./components/PageNav";

/* 
setup a virtual server to server cities data. using json-server
*/

const BASE_URL = "http://localhost:8000";

function App() {
  // Create State and lode city here.
  const [isLoading, setIsLoading] = useState(false);
  const [cityList, setCityList] = useState([]);

  // built a useEffect to load cities data
  useEffect(() => {
    async function get_cities() {
      try {
        setIsLoading(true)
        const response = await fetch(`${BASE_URL}/cities`);
        const cities = await response.json();
        setCityList(cities)
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        console.error(
          "Failed to Load the cities data. Please Reload the page to load the data."
        );
      }
    }
    get_cities();
  }, []);
  return (
    <>
      <BrowserRouter>
        {/* <PageNav /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            {/* <Route index element={<CityList />} /> */}
            <Route index element={<CityList cityList={cityList} isLoading={isLoading} />} />
            <Route path="cities" element={<CityList cityList={cityList} isLoading={isLoading} />} />
            <Route path="countries" element={<p> List of Contry</p>} />
            <Route path="form" element={<p> Form</p>} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
