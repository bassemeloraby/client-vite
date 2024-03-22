import axios from 'axios';

import { mainUrl } from "../../utils/Data";


const API_URL = mainUrl + "allDrugs";

const getDrugs = async () => {
    const response = await axios.get(API_URL);
  
    return response.data;
  };


const getOneDrug = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
  console.log(response)
    return response.data;
  };


  const drugsService = {
    getDrugs,
    getOneDrug,
  };
  
  export default drugsService;