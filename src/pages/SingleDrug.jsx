import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteOneD, getOneD } from "../features/drugs/oneDrugReducer";
import { Loading } from "../components";

const SingleDrug = () => {
  const { id } = useParams();
  const { oneDrug, loading } = useSelector((state) => state.oneDrug);
  const dispatch = useDispatch();
  const navigate = useNavigate();


const deleteHandler = (id) => {
dispatch(deleteOneD(id))
navigate("/drugs");
console.log(id)
}

  useEffect(() => {
    dispatch(getOneD(id));
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div>
        {oneDrug[0].TradeName} hallo
        <section className="d-flex justify-content-around flex-wrap">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="/src/assets/images/noPhoto.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{oneDrug[0].TradeName}</h5>
            </div>
          </div>
          <div className="">
            {
              <ul className="list-group">
                <li className="list-group-item d-flex">
                  <h6>DrugType</h6>: {oneDrug[0].DrugType}
                </li>
                <li className="list-group-item d-flex">
                  <h6>ScientificName</h6>: {oneDrug[0].ScientificName}
                </li>
                <li className="list-group-item d-flex">
                  <h6>ScientificDescriptionCodeRoot</h6>:
                  {oneDrug[0].ScientificDescriptionCodeRoot}
                </li>
                <li className="list-group-item d-flex">
                  <h6>Strength - StrengthUnit</h6>: {oneDrug[0].Strength}{" "}
                  {oneDrug[0].StrengthUnit}
                </li>
                <li className="list-group-item d-flex">
                  <h6>PharmaceuticalForm</h6>:{oneDrug[0].PharmaceuticalForm}
                </li>
                <li className="list-group-item d-flex">
                  <h6>PharmaceuticalFormCodeRoot</h6>:
                  {oneDrug[0].PharmaceuticalFormCodeRoot}
                </li>
                <li className="list-group-item d-flex">
                  <h6>AdministrationRoute</h6>:{oneDrug[0].AdministrationRoute}
                </li>
                <li className="list-group-item d-flex">
                  <h6>Size-Unit</h6>: {oneDrug[0].Size} {oneDrug[0].SizeUnit}
                </li>
                <li className="list-group-item d-flex">
                  <h6>PackageTypes</h6>: {oneDrug[0].PackageTypes}
                </li>
                <li className="list-group-item d-flex">
                  <h6>LegalStatus</h6>: {oneDrug[0].LegalStatus}
                </li>
                <li className="list-group-item d-flex">
                  <h6>ProductControl</h6>: {oneDrug[0].ProductControl}
                </li>
                <li className="list-group-item d-flex">
                  <h6>DistributeArea</h6>: {oneDrug[0].DistributeArea}
                </li>
                <li className="list-group-item d-flex">
                  <h6>PublicPrice</h6>: {oneDrug[0].PublicPrice}
                </li>
                <li className="list-group-item d-flex">
                  <h6>shelfLife</h6>: {oneDrug[0].shelfLife}
                </li>
                <li className="list-group-item d-flex">
                  <h6>StorageConditions</h6>: {oneDrug[0].StorageConditions}
                </li>
                <li className="list-group-item d-flex">
                  <h6>MarketingCompany</h6>: {oneDrug[0].MarketingCompany}
                </li>
                <li className="list-group-item d-flex">
                  <h6>MarketingCountry</h6>: {oneDrug[0].MarketingCountry}
                </li>
                <li className="list-group-item d-flex">
                  <h6>ManufactureName</h6>: {oneDrug[0].ManufactureName}
                </li>
              </ul>
            }
          </div>
        </section>
      </div>
      <div className="options">
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => deleteHandler(oneDrug[0]._id)}
        >
          delete
        </button>
        <button type="button" className="btn btn-link">
          Link
        </button>
      </div>
    </div>
  );
};

export default SingleDrug;
