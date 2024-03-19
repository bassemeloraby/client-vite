import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const SingleDrug = () => {
  const { id } = useParams();
  const { drugs, loading } = useSelector((state) => state.drugs);

  return (
    <div>
      SingleDrug : {id}
      {drugs
        .filter((drug) => drug._id === id)
        .map((drug, index) => (
          <div key={index} className="card" style={{width:"18rem"}}>
            <img src="/src/assets/images/noPhoto.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{drug.TradeName}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SingleDrug;
