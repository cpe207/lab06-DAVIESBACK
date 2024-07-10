import axios from "axios";


const getUser = async (userId: number): Promise<string> => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = response.data;
    return user.name;
  } catch (error) {
    return "INVALID USER ID";
  }
};

// Test cases
const input1 = 1;
const input2 = 100;

// Run
getUser(input1).then((result) => console.log(result)); 
getUser(input2).then((result) => console.log(result)); 

export default getUser;
