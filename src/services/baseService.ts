import axios from 'axios';

const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
const BaseService = axios.create({baseURL: baseUrl});

export default BaseService;
