
import React, { useState,useEffect } from 'react'
import Content from './content'
import Tools from './tools'
import { Stack } from '@mui/material'
import {getTruckBooking,updateTruckBooking} from '../../../utils/Service'



export default function Index() {

  const [truckData, setTruckData] = useState([])

const getTrucks = (data) =>{
  getTruckBooking(data).then((res)=>{
    console.log("caleddddddddddddddddddddddddddddddddddddddddddddd")
    setTruckData(res)
   }).catch((err) => {
  console.log(err)
   })
}
  useEffect(() => {
    getTrucks({status:"inqueue"})
  }, [])
  return (
    <Stack direction={'column'} gap={2}>
     
      <Tools />
      <Content  data={truckData} updateStatus={updateTruckBooking} updateData={getTrucks}/>
    </Stack>
  )
}
