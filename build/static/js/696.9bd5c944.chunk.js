"use strict";(self.webpackChunkberry_free_material_react_cra=self.webpackChunkberry_free_material_react_cra||[]).push([[696],{16:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var r=a(7313),n=a(7890),c=a(2832),o=a(8999),s=a(5266),l=a(1387),i=a(1322),d=a(6417);const u=["truckType","rate","availableFrom","status","allocation"];function h(e){let{partyId:t,data:a,updateData:n}=e;const[c,h]=(0,r.useState)(),p=(0,s.h)(a,["truckType","rate","availableFrom","status"],u);return console.log(c),(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(o.Z,{data:p,header:u,isShowSerialNo:!0,isShowAction:!0,actions:["delete"],onActionChange:e=>{console.log(e),"delete"==e.action?(console.log(e.data._id),h(e.data),(0,i.Wo)(e.data._id).then((()=>{})).catch((e=>{console.error(e),l.Am.error(e.response.data.message)}))):h(),n(t)},refreshData:()=>{n()}})})}var p=a(1113),f=a(3497);function y(){return(0,d.jsx)(f.Z,{children:(0,d.jsx)(c.Z,{direction:"row",sx:{justifyContent:"space-between",alignItems:"center"},children:(0,d.jsx)(p.Z,{variant:"h3",color:"secondary.main",children:"Cancelled DO Bookings"})})})}function g(){const[e,t]=(0,r.useState)([]);let{partyId:a}=(0,n.UO)();const o=async e=>{try{let a={status:"cancelled"};e&&(a.partyId=e);const r=await(0,i.Xy)(a);t(r)}catch(a){console.log(a)}};return(0,r.useEffect)((()=>{o(a)}),[]),(0,d.jsxs)(c.Z,{direction:"column",gap:2,children:[(0,d.jsx)(y,{partyId:a}),(0,d.jsx)(h,{partyId:a,data:e,updateData:o})]})}}}]);