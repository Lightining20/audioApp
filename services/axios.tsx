import { BASE_URL } from "@/constants/appConstants";
import axios from "axios";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export default instance;
