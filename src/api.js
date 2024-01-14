import axios from 'axios'
const URL="http://localhost:8080/regis";
const loadCar=()=>axios.get(`${URL}/get`);
const loadCarId=(username)=>axios.get(`${URL}/getid/${username}`);
const updateCar=(username,car)=>axios.put(`${URL}/put/${username}`,car)
export{loadCar,loadCarId,updateCar};