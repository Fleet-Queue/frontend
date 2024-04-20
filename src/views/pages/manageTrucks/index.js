
import React, { useState,useEffect } from 'react'
import Content from './content'
import Tools from './tools'
import { Stack } from '@mui/material'
import AdsForm from './TruckAdForm'
import {getAllTruck} from '../../../utils/Service'



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
  useEffect(() => {
    getTrucks()
  }, [])
  return (
    <Stack direction={'column'} gap={2}>
      <AdsForm open={formOpen} getTrucks={getTrucks}  onClose={() => { setFormOpen(false) }} />
      <Tools buttonClick={()=>setFormOpen(true)}/>
      <Content  data={truckData} updateData={getTrucks}/>
    </Stack>
  )
}
