import axios from 'axios';
import { customFetch } from "../../utils/index";

import { mainUrl } from "../../utils/Data";
const url = "allDrugs";


const API_URL = mainUrl + "allDrugs";

const getDrugs = async () => {
    // const response = await axios.get(API_URL);
    const response = await customFetch(url);
  
    return response.data;
  };


const getOneDrug = async (id) => {
    // const response = await axios.get(`${API_URL}/${id}`);
    const response = await customFetch(`${url}/${id}`);
  console.log(response)
    return response.data;
  };


  const drugsService = {
    getDrugs,
    getOneDrug,
  };
  
  export default drugsService;