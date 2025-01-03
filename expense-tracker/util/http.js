import axios from "axios";
const API_URL = "https://cme-msdmps.firebaseio.com";

export const storeExpense = async (expenseData) => {
  try {
    const response = await axios.post(`${API_URL}/expenses.json`, expenseData);

    const id = response.data.name;
    return id;
  } catch (error) {
    console.log(error.message);
  }
};

export const getExpenses = async () => {
  try {
    const response = await axios.get(`${API_URL}/expenses.json`);

    const expenses = [];

    for (const key in response.data) {
      expenses.push({
        id: key,
        date: new Date(response.data[key].date),
        ...response.data[key],
      });
    }

    return expenses;
  } catch (error) {
    console.log(error.message);
  }
};
