import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const SingleDrug = () => {
  const { id } = useParams();
  const { drugs } = useSelector((state) => state.drugs);

  return (
    <div>
      SingleDrug : {id}
      {drugs
        .filter((drug) => drug._id === id)
        .map((drug, index) => (
          <section key={index} className="d-flex justify-content-around flex-wrap">
            
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="/src/assets/images/noPhoto.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{drug.TradeName}</h5>
                
              </div>
            </div>
            <div className="">
              <ul class="list-group">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
                <li class="list-group-item">A fourth item A fourth item A fourth item</li>
                <li class="list-group-item">And a fifth one</li>
              </ul>
            </div>
          </section>
        ))}
    </div>
  );
};

export default SingleDrug;
