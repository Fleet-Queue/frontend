import axios from 'axios';
// import { Navigate } from 'react-router-dom';

// const baseURL = `http://${window.location.hostname}:3005/`;

const baseURL = `http://localhost:5000/`;
//const baseURL = `https://apis.fleetq.live/`
console.log(window.location.hostname);

const apiInstance = axios.create({
  baseURL: `${baseURL}api/`,
  headers: {
    'Content-Type': 'application/json',
  }
});


apiInstance.interceptors.request.use(
  async config => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    } else {
      console.warn('Token not found in localStorage');
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);


apiInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response && error.response.status === 401) {
  
      console.log('Unauthorized, logging out...');
     
     localStorage.clear();
    //  Navigate('/login')
      window.location.href = '/login'; // redirect to login page
    }

    // Return any other error responses
    return Promise.reject(error);
  }
);

//Company
export async function addCompany(data) {
  const response = await apiInstance.post(`company`,data);
  console.log(response.data);
  return response.data;
}

export async function deleteCompany(data) {
  console.log(data)
  const response = await apiInstance.delete(`company/`+data,data);
  console.log(response.data);
  return response.data;
}

export async function editCompany(id,data) {
  console.log(data)
  const response = await apiInstance.patch(`company/`+id,data);
  console.log(response.data);
  return response.data;
}

export async function getAllCompany(data) {
  const response = await apiInstance.post(`company/getAllCompany`,data);
  console.log(response.data);
  return response.data;
}

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

export async function deleteTruck(data) {
  console.log(data)
  const response = await apiInstance.delete(`truck/`+data,data);
  console.log(response.data);
  return response.data;
}

export async function editTruck(id,data) {
  console.log(data)
  const response = await apiInstance.patch(`truck/`+id,data);
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

export async function getMatchingInqueueTrucks(data) {
  const response = await apiInstance.post(`truck/getInQueueTrucks`,data);
  return response.data;
}

////allocation 
export async function getAllocationDetails(data) {
  const response = await apiInstance.post(`allocation/getAllocationDetails`,data);
  console.log(response.data);
  return response.data;
}

export async function doAllocation(data) {
  const response = await apiInstance.post(`allocation`,data);
  console.log(response.data);
  return response.data;
}

export async function changeAllocationStatus(data) {
  const response = await apiInstance.post(`allocation/changeAllocationStatus`,data);
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
export async function getAllBooking(data) {
  const response = await apiInstance.post(`doBooking/getAllDO`,data);
  console.log(response.data);
  return response.data;
}

export async function createDo(data) {
  const response = await apiInstance.post(`doBooking`,data);
  console.log(response.data);
  return response.data;
}

export async function uploadDo(data) {
  const response = await apiInstance.post(`doBooking/uploadDO`,data);
  console.log(response.data);
  return response.data;
}

export async function getAllDoUpload(data) {
  const response = await apiInstance.post(`doBooking/getAllDeliveryOrders`,data);
  console.log(response.data);
  return response.data;
}


export async function deleteDo(data) {
  const response = await apiInstance.delete(`doBooking`,data);
  console.log(response.data);
  return response.data;
}

export async function deleteDeliveryOrder(data) {
  const response = await apiInstance.delete(`doBooking/deleteDeliveryOrder/`+data);
  console.log(response.data);
  return response.data;
}


//driver

export async function addDriver(data) {
  const response = await apiInstance.post(`driver`,data);
  console.log(response.data);
  return response.data;
}

export async function getAllDrivers(data) {
  const response = await apiInstance.post(`driver/getAllDrivers`,data);
  console.log(response.data);
  return response.data;
}

export async function getCompanyDrivers(data) {
  const response = await apiInstance.post(`driver/getCompanyDrivers`,data);
  console.log(response.data);
  return response.data;
}

export async function deleteDriver(data) {
  console.log(data)
  const response = await apiInstance.delete(`driver/`+data,data);
  console.log(response.data);
  return response.data;
}

export async function editDriver(id,data) {
  console.log(data)
  const response = await apiInstance.patch(`driver/`+id,data);
  console.log(response.data);
  return response.data;
}