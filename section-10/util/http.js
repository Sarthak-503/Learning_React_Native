import axios from "axios";

const BACKEND_URL =
  "https://react-native-project-5993c-default-rtdb.asia-southeast1.firebasedatabase.app";
// post -> for creating new data into database
export const storeExpenses = async (expenseData) => {
  const response = await axios.post(
    `${BACKEND_URL}/expenses.json`,
    expenseData
  );
  const id = response.data.name;
  return id;
};

// I will turn this into a async function here and then we can await this promise and store the eventually returned data,
// which in this case will be a response object
export async function fetchExpenses() {
  const response = await axios.get(BACKEND_URL + "/expenses.json");
  // next line will execute once response is there from server.
  console.log(response.data);

  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date), // date is stored in string format in db
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }
  return expenses;
}
// And we now have async await on this fetchExpenses function, which means, because of the way async await works,that this function will
// also yield a promise.So in RecentExpenses component, fetchExpenses now yields a promise. And that means that we can now wait for this promise to resolve
// to get hold of the actual data that was returned,which we of course want here in RecentExpenses.To get hold of the data, we can use async
//  await here as well though we should not turn this effect function into a async function,

export  function updateExpenses(id, expenseData) {
  return axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData);
}
export  function deleteExpenses(id) {
  return axios.delete(BACKEND_URL + `/expenses/${id}.json`,);
}
