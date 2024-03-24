import React from "react";
import { Virtuoso } from "react-virtuoso";
import { useNavigate } from "react-router-dom";
import GoogleLink from "./GoogleLink";
import { useDispatch } from "react-redux";
import { getOneD } from "../features/drugs/oneDrugReducer";

const DrugsList = ({ items }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handelS = (s) => {
    navigate(`/drugs/${s}`);
    console.log(s)
  };
  const handleIndication = (i) => {
    navigate(`/indication/${i}`);
  };

  const handleCard =(id) =>{
    console.log(id)
    dispatch(getOneD(id));
    navigate(`/singleDrug/${id}`);
  }

  return (
    <div>
    <Virtuoso
      style={{ height: "600px", background: "#f8f8f8" }}
      data={items}
      totalCount={10500}
      itemContent={(index, drug) => (
        <div
          style={{
            background: index % 2 === 0 ? "#ffbb00" : "#ffcc99",
            color: "#333",
            padding: "10px",
            fontSize: "16px",
            fontFamily: "Arial, sans-serif",
            border: "1px solid #ccc",
            borderRadius: "5px",
            margin: "5px 0",
          }}
          className=""
        >
          <div>
            <h3>
              {drug.TradeName} {drug.Strength} {drug.StrengthUnit}
            </h3>
            <h6>{drug.ScientificName} </h6>
            <h6>{drug.PublicPrice} SR </h6>
          </div>
        {/* -----------------options ----------------*/}
          <div className="d-flex bg-light rounded-2">
            <span
            className="ms-2"
              style={{ cursor: "pointer", color: "blue" }}
              onClick={() => handelS(drug.ScientificName)}
            >
              Alternative
            </span>
            <span
            className="me-2 ms-2"
              style={{ cursor: "pointer", color: "green" }}
              onClick={() => handleIndication(drug.ScientificName)}
            >
              Indication
            </span>{" "}
            <span
            className="me-2 ms-2"
              style={{ cursor: "pointer", color: "black" }}
              onClick={() => handleCard(drug._id)}
            >
              Card
            </span>{" "}
            <GoogleLink
              name={drug.TradeName + drug.Strength + drug.StrengthUnit}
            />
          </div>
        </div>
      )}
    />{" "}
  </div>
  )
}

export default DrugsList