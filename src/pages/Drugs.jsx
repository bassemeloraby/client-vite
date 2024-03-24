import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getD } from "../features/drugs/drugsReducer";

import { DrugsList, Loading, SearchInput } from "../components";

const Drugs = () => {
  const { drugs, loading } = useSelector((state) => state.drugs);

  const [items, setItems] = useState([]);
  const [query, setQuery] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getD());
  }, [dispatch]);

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
      <div className="d-flex justify-content-between mb-1">
        <h2>All Drugs</h2>
        <Link to="/addDrug" className="btn btn-primary">
          AddDrug +
        </Link>
      </div>
      <div>
        <SearchInput
          setQuery={setQuery}
          placeholder="enter Trade name or Scientific name"
        />
        <DrugsList items={items} />
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
