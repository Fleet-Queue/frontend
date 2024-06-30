
import React, { useState,useEffect } from 'react'
import Content from './content'
import Tools from './tools'
import { Stack } from '@mui/material'
import {getTruckBasedOnStatus,updateTruck} from '../../../utils/Service'



export default function Index() {

  const [truckData, setTruckData] = useState([])

const getTrucks = (data) =>{
  getTruckBasedOnStatus(data).then((res)=>{
    setTruckData(res)
   }).catch((err) => {
  console.log(err)
   })
}
  useEffect(() => {
    getTrucks({status:"ongoing"})
  }, [])
  return (
    <Stack direction={'column'} gap={2}>
     
      <Tools />
      <Content  data={truckData} updateStatus={updateTruck} updateData={getTrucks}/>
    </Stack>
  )
}
