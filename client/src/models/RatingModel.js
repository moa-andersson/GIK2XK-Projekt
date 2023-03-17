import api from "../api.js";

export async function getAll() {
  const result = api.get("/ratings");

  if (result.status === 200) return result;
  else {
    console.log(result.status);
    console.log(result.data);
    return [];
  }
}
