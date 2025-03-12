import { clienteFecthById } from "../services/fetch-by-id";

const form = document.querySelector("form");
const inputedId = document.getElementById("number-card");
const valueId = inputedId.value;

form.onsubmit = (event) => {
  event.preventDefault();
  console.log("FORM SUBIMIT");

  clienteFecthById(valueId)
}