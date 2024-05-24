import axios from 'axios';

// const baseURL = `http://${window.location.hostname}:3005/`;
//const baseURL = `https://container-terminal-backend.onrender.com/`;
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
export async function addTruck(data) {
  const response = await apiInstance.post(`truck`,data);
  console.log(response.data);
  return response.data;
}

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

//Truck Booking API
export async function updateTruckBooking(data) {
  const response = await apiInstance.post(`truck/updateTruckBookingStatus`,data);
  console.log(response.data);
  return response.data;
}

export async function getTruckBooking(data) {
  const response = await apiInstance.post(`truck/getAllTruckBookings`,data);
  console.log(response.data);
  return response.data;
}

export async function AddTruckBooking(data) {
  const response = await apiInstance.post(`truck/addTruckToBooking`,data);
  console.log(response.data);
  return response.data;
}

//parties
export async function getAllParties(data) {
  const response = await apiInstance.post(`party/getAllParty`,data);
  console.log(response.data);
  return response.data;
}

export async function addParty(data) {
  const response = await apiInstance.post(`party`,data);
  console.log(response.data);
  return response.data;
}



//////Dashboard API
export async function getTruckBasedOnStatus(data) {
  const response = await apiInstance.post(`truck/getAllTruckBookings`,{status:data.status});
  return response.data;
}



////allocation 
export async function getAllocationDetails(data) {
  const response = await apiInstance.post(`allocation/getAllocationDetails`,data);
  console.log(response.data);
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
  console.log("heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
  console.log(response)
  console.log(response.data);
  return response.data;
}

//location
export async function getAllLocation(data) {
  const response = await apiInstance.post(`location/getAllLocation`,data);
  console.log(response.data);
  return response.data;
}
export async function addLocation(data) {
  const response = await apiInstance.post(`location`,data);
  console.log(response.data);
  return response.data;
}



//doBooking
export async function gellAllBooking(data) {
  const response = await apiInstance.post(`doBooking/getAllDO`,data);
  console.log(response.data);
  return response.data;
}


//driver
export async function getCompanyDrivers() {
  const response = await apiInstance.get(`driver/getCompanyDrivers`);
  console.log(response.data);
  return response.data;
}
