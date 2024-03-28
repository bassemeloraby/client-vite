import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneD } from "../features/drugs/oneDrugReducer";
import { DrugCard, Loading } from "../components";
import { deleteOneD } from "../features/drugs/drugsReducer";

const SingleDrug = () => {
  const { id } = useParams();
  const { oneDrug, loading } = useSelector((state) => state.oneDrug);
  // const { drugs } = useSelector((state) => state.drugs);
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
    <DrugCard oneDrug={oneDrug} deleteHandler={deleteHandler}/>

    {/*<Routes>
    <Route
          path="updateDrug"
          element={
            <UpdateDrug
              
            />
          }
        />
        </Routes>*/}
     
    </div>
  );
};

export default SingleDrug;
