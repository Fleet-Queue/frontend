import axios from 'axios';

// const baseURL = `http://${window.location.hostname}:3005/`;
//const baseURL = `http://192.168.1.17:3005/`;
const baseURL = `http://localhost:5000/`;
console.log(window.location.hostname);

const apiInstance = axios.create({
  baseURL: `${baseURL}api/`,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  }
});

// export async function addUser(data) {
//   try {
//     const response = await userInstance.post(`user`,data);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// }

// export async function getAllOffers(data) {
//   try {
//     const response = await apiInstance.get(`offer`);
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// }


////Trucks
export async function getAllTruck(data) {
  const response = await apiInstance.post(`truck/getAllTruck`,data);
  console.log(response.data);
  return response.data;
}

export async function updateTruck(data) {
  const response = await apiInstance.post(`truck/updateTruckStatus`,data);
  console.log(response.data);
  return response.data;
}


//parties
export async function getAllParties(data) {
  const response = await apiInstance.post(`party/getAllParty`,data);
  console.log(response.data);
  return response.data;
}

export async function createAds(data) {
  const response = await apiInstance.post(`ads`,data);
  console.log(response.data);
  return response.data;
}

export async function deleteAd(data) {
  const response = await apiInstance.delete(`ads/${data}`);
  console.log(response.data);
  return response.data;
}



//////Dashboard API
export async function getOngoingTruck() {
  const response = await apiInstance.post(`truck/getAllTruck`,{status:'ongoing'});
  return response.data;
}

export async function getInQueueTruck() {
  const response = await apiInstance.post(`truck/getAllTruck`,{status:'inqueue'});
  return response.data;
}



export async function deleteOffer(data) {
 
    const response = await apiInstance.delete(`offer/${data}`);
    console.log(response.data);
    return response.data;
  }

  export async function updateOffer(data) {
 
    const response = await apiInstance.patch(`offer`,data);
    console.log(response.data);
    return response.data;
  }

export async function createOffer(data) {
  const response = await apiInstance.post(`offer`,data);
  console.log(response.data);
  return response.data;
}

///users
export async function getAllUsers() {
  const response = await apiInstance.get(`user`);
  console.log(response.data);
  return response.data;
}

///admin

export async function adminLogin(data) {
  const response = await apiInstance.post(`user/login`,data);
  console.log(response.data);
  return response.data;
}

//daily Limit

export async function createDailyLimit(data) {
  const response = await apiInstance.post(`dailyLimit`,data);
  console.log(response.data);
  return response.data;
}

export async function getDailyLimit() {
  const response = await apiInstance.get(`dailyLimit`);
  console.log(response.data);
  return response.data;
}