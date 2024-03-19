import React, { Fragment } from "react";
import Table from "react-bootstrap/Table";
import GoogleLink from "../components/GoogleLink";
import { useParams } from "react-router-dom";
// import axios from "axios";
import { mainUrl } from "../utils/Data";
import { Loading } from "../components";
import { useSelector } from "react-redux";


// const url = mainUrl + "allDrugs";

const ScientificName = () => {
  const { ScientificName } = useParams();
  const { drugs, loading } = useSelector((state) => state.drugs);

  // const [allDrugs, setAllDrugs] = useState([]);
  // const [loading, setLoading] = useState(false);



  // useEffect(() => {
  //   const fetchAllDrugs = async () => {
  //     setLoading(true);
  //     try {
  //       const res = await axios.get(`${url}`);
  //       setLoading(false);
  //       setAllDrugs(res.data);
  //       // console.log(res.data);
  //     } catch (error) {
  //       setLoading(false);
  //       console.log(error);
  //     }
  //   };
  //   fetchAllDrugs();
  // }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Fragment>
      <div className="d-flex justify-content-center">
        <h3>Scientific Name : {ScientificName}</h3>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Trade Name</th>
            <th>Pharmaceutical Form</th>
            <th>Public Price</th>
          </tr>
        </thead>
        <tbody>
          {drugs
            .filter((drug) => drug.ScientificName === ScientificName)
            .map((drug, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td className="d-flex justify-content-between">
                  <div>
                    {" "}
                    {drug.TradeName} {drug.Strength} {drug.StrengthUnit}
                  </div>
                  <GoogleLink name={drug.TradeName} />
                </td>
                <td> {drug.PharmaceuticalForm}</td>
                <td> {drug.PublicPrice} SR</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Fragment>
  );
};

export default ScientificName;
