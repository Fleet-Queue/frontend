
import React, { useState,useEffect } from 'react'
import Content from './content'
import Tools from './tools'
import { Stack } from '@mui/material'
import AdsForm from './TruckAdForm'
import { toast } from 'react-toastify';
import {getAllTruck,AddTruckBooking} from '../../../utils/Service'



export default function Index() {
  const [formOpen, setFormOpen] = useState(false)
  const [truckData, setTruckData] = useState([])

const getTrucks = () =>{
  getAllTruck().then((res)=>{
    setTruckData(res)
   }).catch((err) => {
  console.log(err)
   })
}

const addTruckBooking = (data) =>{
  console.log("heeeeeeeeeee")
  AddTruckBooking({truckId:data.truckId,availableFrom:data.availableFrom}).then(()=>{
    toast.success("Truck Added to Queue");
  }).catch((err) => {
    console.log(err)
    toast.error(err.response.data.message);
  })
}
  useEffect(() => {
    getTrucks()
  }, [])
  return (
    <Stack direction={'column'} gap={2}>
      <AdsForm open={formOpen} getTrucks={getTrucks}  onClose={() => { setFormOpen(false) }} />
      <Tools buttonClick={()=>setFormOpen(true)}/>
      <Content  data={truckData} updateData={getTrucks} addTruckBooking={addTruckBooking}/>
    </Stack>
  )
}
