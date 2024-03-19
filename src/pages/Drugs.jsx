import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
// import { mainUrl } from "../utils/Data";
// import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { getD } from "../features/drugs/drugsReducer";


import { DrugsList, Loading, SearchInput } from "../components";
// const url = mainUrl + "allDrugs";

const Drugs = () => {
  const { drugs, loading } = useSelector((state) => state.drugs);
  // const [allDrugs, setAllDrugs] = useState(drugs);
  // const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState();
  const [scientific, setScientific] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getD());
  }, [dispatch]);

  // useEffect(() => {

    // const fetchAllDrugs = async () => {
    //   setLoading(true);
    //   try {
    //     const res = await axios.get(`${url}`);
    //     setLoading(false);
    //     setAllDrugs(res.data);
    //     // console.log(res.data);
    //   } catch (error) {
    //     setLoading(false);
    //     console.log(error);
    //   }
    // };
    // fetchAllDrugs();
  // }, []);

  useEffect(() => {
    if (!query) setItems(drugs);
    setItems((_) =>
    drugs.filter(
        (x) =>
          x.ScientificName.toLowerCase().includes(query?.toLowerCase()) ||
          x.TradeName.toLowerCase().includes(query?.toLowerCase())
      )
    );
  }, [query, drugs]);

  useEffect(() => {
    setItems(drugs);
  }, [drugs]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="d-flex mb-2">
        <h2>All Drugs</h2>
      </div>
      <div>
        <SearchInput
          setQuery={setQuery}
          placeholder="enter Trade name or Scientific name"
        />
        <DrugsList items={items} setScientific={setScientific} />
      </div>
      <Routes>
        <Route
          path="allDugsSearch"
          element={
            <div className="container">
              {" "}
              <SearchInput
                setQuery={setQuery}
                placeholder="enter Trade name or Scientific name"
              />
            </div>
          }
        />
        
      </Routes>
    </div>
  );
};

export default Drugs;
