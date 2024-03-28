import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Loading } from "../components";
import { getOneD } from '../features/drugs/oneDrugReducer';

const UpdateDrug = () => {
  const { id } = useParams();
  const { oneDrug, loading } = useSelector((state) => state.oneDrug);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneD(id));
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>UpdateDrug <div>
    {oneDrug[0].TradeName} 
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
  </div></div>
  )
}

export default UpdateDrug