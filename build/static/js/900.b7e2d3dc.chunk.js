"use strict";(self.webpackChunkberry_free_material_react_cra=self.webpackChunkberry_free_material_react_cra||[]).push([[900],{8900:function(e,n,t){t.r(n),t.d(n,{default:function(){return A}});var a=t(7313),o=t(3497),c=t(1629),r=t(6835),s=t(3477),i=t(4076),l=t(7478),d=t(3467),u=t(1095),h=t(9848),x=t(6167),j=t(5842),g=t(1322),m=t(1387),Z=t(6417);function p(e){let{data:n,header:t,isShowSerialNo:p=!1,isShowAction:f=!1,actions:y=["Edit","Delete"],onActionChange:S,refresh:k,onClickAction:b}=e;const[v,A]=(0,a.useState)(null),[I,_]=(0,a.useState)(null),[w,C]=(0,a.useState)(!1),D=(e,n)=>{(0,g.jK)({status:n,allocId:e}).then((e=>{console.log(e),m.Am.success("Status updated successfully"),k({status:"allocated"})})).catch((e=>{console.log(e),m.Am.error(e.response.data.message)}))};return(0,Z.jsxs)(o.Z,{children:[(0,Z.jsx)(c.Z,{children:(0,Z.jsxs)(r.Z,{children:[(0,Z.jsx)(s.Z,{children:(0,Z.jsxs)(i.Z,{children:[p&&(0,Z.jsx)(l.Z,{sx:{color:"primary.main"},children:"SLNO"}),t.map(((e,n)=>(0,Z.jsx)(l.Z,{sx:{color:"primary.main"},children:e},n))),f&&(0,Z.jsx)(l.Z,{sx:{color:"primary.main"},children:"Action"})]})}),(0,Z.jsx)(d.Z,{children:n.map(((e,n)=>{return(0,Z.jsxs)(i.Z,{onClick:()=>(e=>{b&&b(e)})(e._id),children:[p&&(0,Z.jsx)(l.Z,{children:n+1}),(0,Z.jsx)(l.Z,{children:e.truck.registrationNumber}),(0,Z.jsx)(l.Z,{children:e.allocation.DOBookingId.partyId.name}),(0,Z.jsx)(l.Z,{children:e.allocation.DOBookingId.partyId.locationId.name}),(0,Z.jsx)(l.Z,{children:e.allocation.DOBookingId.partyId.contactNumber}),(0,Z.jsxs)(l.Z,{children:["\u20b9",e.allocation.DOBookingId.rate]}),(0,Z.jsx)(l.Z,{children:(t=e.availableFrom,new Date(t).toLocaleDateString("en-US",{day:"numeric",month:"short",year:"numeric"}))}),(0,Z.jsx)(l.Z,{children:"allocated"===e.allocation.status?(0,Z.jsx)(u.Z,{variant:"contained",onClick:()=>D(e.allocation._id,"ongoing"),children:"Move to Live"}):"ongoing"===e.allocation.status?(0,Z.jsx)(u.Z,{variant:"contained",onClick:()=>D(e.allocation._id,"done"),children:"Move to Done"}):"expired"===e.allocation.status?(0,Z.jsx)(u.Z,{variant:"contained",disabled:!0,children:"Expired"}):null}),f&&(0,Z.jsx)(l.Z,{children:(0,Z.jsx)(h.Z,{data:e,onActionChange:e=>{S(e)},actions:y})})]},n);var t}))})]})}),v&&(0,Z.jsx)(x.Z,{open:w,close:()=>{A(null),C(!1)},type:v}),I&&(0,Z.jsx)(j.Z,{open:w,close:()=>{_(null),C(!1)},doId:I})]})}var f=t(5266);const y=["RegNo","party","location","contact","rate","date","status"];function S(e){let{data:n,updateStatus:t,updateData:a}=e;const o=(0,f.h)(n,["registrationNumber","party","location","contact","rate","date","status"],y);return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(p,{data:o,header:y,isShowSerialNo:!0,isShowAction:!0,actions:["cancel"],refresh:a,onActionChange:e=>{console.log(e),"cancel"==e.action&&(console.log(e.data._id),t({truckId:"661bf9b734601df26a2d1bc3",status:"inqueue"}).then((e=>{console.log(e.message),m.Am.success(e.message),a({status:"allocated"})})).catch((e=>{console.error(e),m.Am.error("Error occured while updating")})))}})})}var k=t(2832),b=t(1113);function v(){return(0,Z.jsx)(o.Z,{children:(0,Z.jsx)(k.Z,{direction:"row",sx:{justifyContent:"space-between",alignItems:"center"},children:(0,Z.jsx)(b.Z,{variant:"h3",color:"secondary.main",children:"Ongoing Trucks"})})})}function A(){const[e,n]=(0,a.useState)([]),t=e=>{(0,g.Jr)(e).then((e=>{n(e)})).catch((e=>{console.log(e)}))};return(0,a.useEffect)((()=>{t({status:"ongoing"})}),[]),(0,Z.jsxs)(k.Z,{direction:"column",gap:2,children:[(0,Z.jsx)(v,{}),(0,Z.jsx)(S,{data:e,updateStatus:g.Au,updateData:t})]})}}}]);