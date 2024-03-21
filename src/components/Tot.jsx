import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { takeScreenShot } from "../utils/TakeScreenShot";

const Tot = () => {
  const [master, setMaster] = useState(0);
  const [span, setSpan] = useState(0);
  const [visa, setVisa] = useState(0);
  const [insurance, setInsurance] = useState(0);
  const [tot, setTot] = useState(0);
  const bank = parseInt(master) + parseInt(span) + parseInt(visa);
  const [vat, setVat] = useState(0);

  const clear = () => {
    setMaster(0);
    setSpan(0);
    setVisa(0);
    setInsurance(0);
    setTot(0);
    setVat(0);
  };

  const captureScreenShot = () => {
    takeScreenShot("capDiv", "MyImage", "image/jpeg", "#f5f5f5");
  };

  return (
    <div className="mt-2">
      <section className="1 col-3 me-2">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Master</td>
              <td><input
              value={master}
              onChange={(e) => setMaster(e.target.value)}
            /></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Span</td>
              <td>
                {" "}
                <input value={span} onChange={(e) => setSpan(e.target.value)} />
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Visa</td>
              <td>
                <input value={visa} onChange={(e) => setVisa(e.target.value)} />
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Bank</td>
              <td className="text-center">
                <h3 className="border bg-warning"> {bank}</h3>
              </td>
            </tr>
          </tbody>
        </table>{" "}
       </section>

      <section
        className="2  col-6 rounded border border-5 border-primary text-center"
        id="capDiv"
      >
        {" "}
        
        <Table striped  hover >
          <thead>
            <tr>
              <th>Kind</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Cash :
              </td>
              <td>{tot - (parseInt(bank) + parseInt(insurance))}</td>
            </tr>
            <tr>
              <td>
                Span : 
              </td>
              <td>
              <span className="border">{bank}</span>
              </td>
              
            </tr>
            <tr>
              <td>
                Insurance{" "}
                
              </td>
              <td>
              <input
              value={insurance}
              onChange={(e) => setInsurance(e.target.value)}
              className="text-center"
            />
                
              </td>

            </tr>
            <tr>
              <td>
                Tot{" "}
                
              </td>
              <td>
                
                <input value={tot} onChange={(e) => setTot(e.target.value)}  className="text-center"/>
              </td>
            </tr>
            <tr>
              <td>
                Vat{" "}
                
              </td>
              <td>
                
                <input value={vat} onChange={(e) => setVat(e.target.value)}  className="text-center" />
              </td>
            </tr>
            <tr>
              <td>
                Tot - Vat : 
              </td>
              <td>
                <span>{tot - vat} </span>
              </td>
            </tr>
          </tbody>
          
        </Table>
        <button onClick={clear} className="bg-danger">
            clear
          </button>
          <button onClick={captureScreenShot}>screenshot</button>
      </section>
    </div>
  );
};

export default Tot;
