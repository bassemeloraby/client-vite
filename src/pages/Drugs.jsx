import React, {  useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { mainUrl } from "../utils/Data";
import axios from "axios";

// import AllDrugsList from "../../components/medicine/AllDrugsList";
// import ScientificName from "../../components/medicine/ScientificName";
// import SearchInput from "../../components/SearchInput";
import { DrugsList, Loading, ScientificName, SearchInput } from "../components";
const url = mainUrl + "allDrugs";

const Drugs = () => {

  const [allDrugs, setAllDrugs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState();
  const [scientific, setScientific] = useState();

  useEffect(() => {
    const fetchAllDrugs = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${url}`);
        setLoading(false);
        setAllDrugs(res.data);
        console.log(res.data);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchAllDrugs();
  }, []);

  useEffect(() => {
    if (!query) setItems(allDrugs);
    setItems((_) =>
      allDrugs.filter(
        (x) =>
          x.ScientificName.toLowerCase().includes(query?.toLowerCase()) ||
          x.TradeName.toLowerCase().includes(query?.toLowerCase())
      )
    );
  }, [query, allDrugs]);

  useEffect(() => {
    setItems(allDrugs);
  }, [allDrugs]);

  if (loading) {
    return <Loading />;
  }


  return (
    <div>
    <div className="d-flex mb-2">
      <h2>All Drugs</h2>
    </div>
    <Routes>
      <Route
        path="allDugsSearch"
        element={
          <div className="container">
            {" "}
            <SearchInput setQuery={setQuery} placeholder="enter Trade name or Scientific name"/>
            <DrugsList items={items} setScientific={setScientific}/>
          </div>
        }
      />
      <Route path="scientificName" element={<ScientificName allDrugs={allDrugs} scientific={scientific}  />} />
    </Routes>
  </div>
  )
}

export default Drugs