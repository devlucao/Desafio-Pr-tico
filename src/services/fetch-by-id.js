import { apiConfig } from "./api-config.js"

export async function clienteFecthById({ id }) {
  console.log("undefined", id)
  try {
    const response = await fetch(`${apiConfig.baseUrl}/${id}`);

    const data = await response.json();

    const result = data.filter((selectedId) => selectedId === id);
    console.log(data, result)
  } catch (error) {
    console.log(error)
    alert("Não foi possível buscar o cliente, tente novamente.")
  }
}