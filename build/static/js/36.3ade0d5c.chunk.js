"use strict";(self.webpackChunkberry_free_material_react_cra=self.webpackChunkberry_free_material_react_cra||[]).push([[36],{1036:function(t,a,e){e.r(a),e.d(a,{default:function(){return m}});var n=e(7313),r=e(7890),o=e(2832),c=e(8999),s=e(5266),i=e(1387),l=e(1322),d=e(6417);const u=["name","View DO","availableFrom","status","allocation"];function h(t){let{partyId:a,data:e,updateData:r}=t;const[o,h]=(0,n.useState)(),p=(0,s.h)(e,["truckType","link","availableFrom","status"],u);return console.log(o),(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(c.Z,{data:p,header:u,isShowSerialNo:!0,isShowAction:!0,actions:["delete"],onActionChange:t=>{console.log(t),"delete"==t.action?(console.log(t.data._id),h(t.data),(0,l.Wo)(t.data._id).then((()=>{})).catch((t=>{console.error(t),i.Am.error(t.response.data.message)}))):h(),r(a)},refreshData:()=>{r()}})})}var p=e(2040),f=e(1113),y=e(1095),x=e(3497);function j(t){let{buttonClick:a,partyId:e}=t;return(0,d.jsx)(x.Z,{children:(0,d.jsxs)(o.Z,{direction:"row",sx:{justifyContent:"space-between",alignItems:"center"},children:[(0,d.jsx)(f.Z,{variant:"h3",color:"secondary.main",children:"Allocated DO Bookings"}),e&&(0,d.jsx)(y.Z,{variant:"contained",startIcon:(0,d.jsx)(p.Z,{}),sx:{backgroundColor:"secondary.main"},onClick:a,children:"Add DO"})]})})}function m(){const[t,a]=(0,n.useState)([]);let{partyId:e}=(0,r.UO)();const c=async t=>{try{let e={status:"allocated"};t&&(e.partyId=t);const n=await(0,l.Xy)(e);a(n)}catch(e){console.log(e)}};return(0,n.useEffect)((()=>{c(e)}),[]),(0,d.jsxs)(o.Z,{direction:"column",gap:2,children:[(0,d.jsx)(j,{partyId:e}),(0,d.jsx)(h,{partyId:e,data:t,updateData:c})]})}},2040:function(t,a,e){var n=e(1171),r=e(6417);a.Z=(0,n.Z)((0,r.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add")}}]);