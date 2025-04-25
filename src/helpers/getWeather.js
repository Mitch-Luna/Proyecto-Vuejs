import axios from "axios"

const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=13&longitude=-85&current=temperature_2m&timezone=auto&forecast_days=1'

 export const getTemperatura = async ()=>{
 const repuesta = await axios.get(API_URL)
 const nuevaTemperatura = repuesta.data.current.temperature_2m
 return nuevaTemperatura
}