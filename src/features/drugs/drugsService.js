import axios from 'axios';
import { customFetch } from "../../utils/index";

// import { mainUrl } from "../../utils/Data";
const url = "allDrugs";


// const API_URL = mainUrl + "allDrugs";

const getDrugs = async () => {
    // const response = await axios.get(API_URL);
    const response = await customFetch(url);
  
    return response.data;
  };


const getOneDrug = async (id) => {
    // const response = await axios.get(`${API_URL}/${id}`);
    const response = await customFetch(`${url}/${id}`);
    return response.data;
  };

const deleteOneDrug = async (id) => {
    // const response = await axios.get(`${API_URL}/${id}`);
    const response = await customFetch.delete(`${url}/${id}`);
    console.log(id)
  console.log(response)
    return response.data;
  };

const updateOneDrug = async ({ id, TradeName }) => {
    const response = await customFetch.patch(`${url}/${id}`,{ TradeName });
    console.log(id)
    console.log(TradeName)
  console.log(response)
    return response.data;
  };


  const drugsService = {
    getDrugs,
    getOneDrug,
    deleteOneDrug,
    updateOneDrug
  };
  
  export default drugsService;