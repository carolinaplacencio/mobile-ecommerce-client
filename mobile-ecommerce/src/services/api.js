import Axios from "axios";

const API_URL = "http://localhost:8080/api";

export async function getAllProducts() {
  try {
    const response = await fetch(`${API_URL}/products`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getProductById(id) {
  try {
    const response = await fetch(`${API_URL}/products/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function addItemCart(selectStorage, selectColor) {
  Axios.post(`${API_URL}/cart`, {
    storage: selectStorage,
    color: selectColor
  })
}

