import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const getDashboard = async (state) => {
  const response = await API.get(`/dashboard/${state}`);
  return response.data;
};

export const getHeatmap = async () => {
  const response = await API.get("/heatmap/");
  return response.data;
};