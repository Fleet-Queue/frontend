"use strict";(self.webpackChunkberry_free_material_react_cra=self.webpackChunkberry_free_material_react_cra||[]).push([[835],{5842:function(e,t,n){var r=n(7313),o=n(1095),a=n(4469),s=n(3213),i=n(9840),c=n(8310),l=n(2247),d=n(5908),u=n(9289),h=n(7131),x=n(1113),g=n(1198),m=n(301),p=n(1322),j=n(1387),Z=n(6417);const f=r.forwardRef((function(e,t){return(0,Z.jsx)(m.Z,{direction:"up",ref:t,...e})}));t.Z=e=>{const[t,n]=r.useState(e.open);const[m,y]=r.useState({}),k=()=>{n(!1),e.close()},v=e=>new Date(e).toLocaleString(),b=e=>{(0,p.ut)(e).then((e=>{y(e),console.log(e)})).catch((e=>{console.log(e),j.Am.error(e.response.data.message)}))},P=(t,n)=>{(0,p.jK)({status:n,allocId:t}).then((t=>{console.log(t),j.Am.success("status updated successfully"),b({doBookingId:e.doId})})).catch((e=>{console.log(e),j.Am.error(e.response.data.message)}))};return(0,r.useEffect)((()=>{e.doId&&b({doBookingId:e.doId})}),[]),(0,Z.jsx)(r.Fragment,{children:(0,Z.jsxs)(a.Z,{fullWidth:!0,maxWidth:"md",open:t,onClose:k,TransitionComponent:f,children:[(0,Z.jsx)(d.Z,{sx:{position:"relative"},children:(0,Z.jsxs)(u.Z,{children:[(0,Z.jsx)(h.Z,{edge:"start",color:"inherit",onClick:k,"aria-label":"close",children:(0,Z.jsx)(g.Z,{})}),(0,Z.jsx)(x.Z,{sx:{ml:2,flex:1,color:"white"},variant:"h3",component:"div",children:"Allocated Details"}),(0,Z.jsx)(o.Z,{autoFocus:!0,color:"inherit",onClick:k,children:"Close"})]})}),(0,Z.jsx)(c.Z,{children:m&&m.truckBookingId&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(i.Z,{children:[(0,Z.jsx)(s.Z,{primary:m.truckBookingId.truck.name,secondary:m.truckBookingId.truck.registrationNumber}),(0,Z.jsx)(s.Z,{primary:m.truckBookingId.truck.category,secondary:m.truckBookingId.truck.truckType+" FT"}),(0,Z.jsx)(s.Z,{primary:"allocated on:",secondary:v(m.allocatedOn)}),(0,Z.jsx)(s.Z,{primary:m.truckBookingId.truck.companyId.name,secondary:m.truckBookingId.truck.companyId.contactNumber})]},1),(0,Z.jsxs)(i.Z,{children:[(0,Z.jsx)(s.Z,{primary:m.truckBookingId.truck.companyId.ownerName,secondary:m.truckBookingId.truck.companyId.address}),(0,Z.jsx)(s.Z,{primary:"driver: "+m.truckBookingId.truck.driverId.name,secondary:m.truckBookingId.truck.driverId.contactNumber}),(0,Z.jsx)(s.Z,{primary:"Date on:",secondary:v(m.truckBookingId.availableFrom)}),(0,Z.jsx)(s.Z,{primary:"Status:",secondary:m.status}),"allocated"===m.status?(0,Z.jsx)(o.Z,{variant:"contained",onClick:()=>P(m._id,"ongoing"),children:"Move to Live"}):"ongoing"===m.status?(0,Z.jsx)(o.Z,{variant:"contained",onClick:()=>P(m._id,"done"),children:"Move to Done"}):"expired"===m.status?(0,Z.jsx)(o.Z,{variant:"contained",disabled:!0,children:"Expired"}):null]},2),(0,Z.jsx)(l.Z,{})]})})]})})}},1322:function(e,t,n){n.d(t,{$K:function(){return h},$g:function(){return b},Au:function(){return u},Dx:function(){return w},ES:function(){return z},GB:function(){return x},Gu:function(){return l},Jq:function(){return F},Jr:function(){return Z},KI:function(){return B},Mg:function(){return L},Pe:function(){return m},Q1:function(){return j},RY:function(){return P},S1:function(){return I},T7:function(){return k},VW:function(){return f},Wo:function(){return D},X2:function(){return N},Xy:function(){return A},a2:function(){return p},aZ:function(){return d},cW:function(){return C},jK:function(){return v},ji:function(){return i},kR:function(){return S},kl:function(){return g},lQ:function(){return a},oR:function(){return s},r7:function(){return c},ut:function(){return y},zE:function(){return O}});var r=n(5662);console.log(window.location.hostname);const o=r.Z.create({baseURL:"https://apis.fleetq.live/api/",headers:{"Content-Type":"application/json"}});async function a(e){const t=await o.post("company",e);return console.log(t.data),t.data}async function s(e){console.log(e);const t=await o.delete("company/"+e,e);return console.log(t.data),t.data}async function i(e,t){console.log(t);const n=await o.patch("company/"+e,t);return console.log(n.data),n.data}async function c(e){const t=await o.post("company/getAllCompany",e);return console.log(t.data),t.data}async function l(e){const t=await o.post("truck",e);return console.log(t.data),t.data}async function d(e){const t=await o.post("truck/getAllTruck",e);return console.log(t.data),t.data}async function u(e){const t=await o.post("truck/updateTruckStatus",e);return console.log(t.data),t.data}async function h(e){console.log(e);const t=await o.delete("truck/"+e,e);return console.log(t.data),t.data}async function x(e){const t=await o.post("truck/updateTruckBookingStatus",e);return console.log(t.data),t.data}async function g(e){const t=await o.post("truck/getAllTruckBookings",e);return console.log(t.data),t.data}async function m(e){const t=await o.post("truck/addTruckToBooking",e);return console.log(t.data),t.data}async function p(e){const t=await o.post("party/getAllParty",e);return console.log(t.data),t.data}async function j(e){const t=await o.post("party",e);return console.log(t.data),t.data}async function Z(e){return(await o.post("truck/getAllTruckBookings",{status:e.status})).data}async function f(e){return(await o.post("truck/getInQueueTrucks",e)).data}async function y(e){const t=await o.post("allocation/getAllocationDetails",e);return console.log(t.data),t.data}async function k(e){const t=await o.post("allocation",e);return console.log(t.data),t.data}async function v(e){const t=await o.post("allocation/changeAllocationStatus",e);return console.log(t.data),t.data}async function b(e){const t=await o.post("user/login",e);return console.log("heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"),console.log(t),console.log(t.data),t.data}async function P(e){const t=await o.post("location/getAllLocation",e);return console.log(t.data),t.data}async function w(e){const t=await o.post("location",e);return console.log(t.data),t.data}async function A(e){const t=await o.post("doBooking/getAllDO",e);return console.log(t.data),t.data}async function C(e){const t=await o.post("doBooking",e);return console.log(t.data),t.data}async function S(e){const t=await o.post("doBooking/uploadDO",e);return console.log(t.data),t.data}async function I(e){const t=await o.post("doBooking/getAllDeliveryOrders",e);return console.log(t.data),t.data}async function D(e){const t=await o.delete("doBooking",e);return console.log(t.data),t.data}async function B(e){const t=await o.delete("doBooking/deleteDeliveryOrder/"+e);return console.log(t.data),t.data}async function N(e){const t=await o.post("driver",e);return console.log(t.data),t.data}async function O(e){const t=await o.post("driver/getAllDrivers",e);return console.log(t.data),t.data}async function F(e){const t=await o.post("driver/getCompanyDrivers",e);return console.log(t.data),t.data}async function L(e){console.log(e);const t=await o.delete("driver/"+e,e);return console.log(t.data),t.data}async function z(e,t){console.log(t);const n=await o.patch("driver/"+e,t);return console.log(n.data),n.data}o.interceptors.request.use((async e=>{const t=localStorage.getItem("token");return t?e.headers.Authorization="Bearer "+t:console.warn("Token not found in localStorage"),e}),(e=>Promise.reject(e))),o.interceptors.response.use((e=>e),(e=>(e.response&&401===e.response.status&&(console.log("Unauthorized, logging out..."),localStorage.clear(),window.location.href="/login"),Promise.reject(e))))},7713:function(e,t,n){var r=n(421),o=n(7120);const a=(0,r.ZF)({apiKey:"AIzaSyCBwJaecXhomn4kYayf-XMwOVfBZZyvtZ8",authDomain:"container-management-e3afb.firebaseapp.com",projectId:"container-management-e3afb",storageBucket:"container-management-e3afb.appspot.com",messagingSenderId:"355036042666",appId:"1:355036042666:web:d26919044f6afc7be387d3"}),s=(0,o.cF)(a);t.Z=s},2835:function(e,t,n){n.r(t),n.d(t,{default:function(){return V}});var r=n(7313),o=n(9019),a=n(1113),s=n(1095),i=n(7592),c=n(9860),l=n(9536),d=n(9088),u=n(3497),h=n(3428),x=n(3405),g=n(4488),m=n(6417);var p=()=>(0,m.jsx)(h.Z,{children:(0,m.jsx)(x.Z,{children:(0,m.jsxs)(o.ZP,{container:!0,direction:"column",children:[(0,m.jsx)(o.ZP,{item:!0,children:(0,m.jsxs)(o.ZP,{container:!0,justifyContent:"space-between",children:[(0,m.jsx)(o.ZP,{item:!0,children:(0,m.jsx)(g.Z,{variant:"rectangular",width:44,height:44})}),(0,m.jsx)(o.ZP,{item:!0,children:(0,m.jsx)(g.Z,{variant:"rectangular",width:34,height:34})})]})}),(0,m.jsx)(o.ZP,{item:!0,children:(0,m.jsx)(g.Z,{variant:"rectangular",sx:{my:2},height:40})}),(0,m.jsx)(o.ZP,{item:!0,children:(0,m.jsx)(g.Z,{variant:"rectangular",height:30})})]})})}),j="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABkElEQVR4nNXUTUtVURTG8VumYdAFrVE5KSQINJMoNBwJQtBACs2GWSSBiNTASUpC4QskGQ1Sy7KCkMoPUE77Xr/Y13XjENfj5XqF3PCwD/vl/Nez1t67UDj0DcM1qrlawHYNP/+GM9UCVmtwPft/AdAVOoez0XfljL/FFMYqqLcSoDVUTMWLvjVnfBE3cCWjLVzFM0zUJUV4FQF2YCUz/xFN9QCsRvRj/wBuJx0k4Bje/wWgP5QK2B59f874pwC8w3WMxncxA1lIB2O/Du7jZRT+At5gE5dwE0/rfg/sgKfDwdcDuWh2npOVMuALNmqpQWF3wBo6S4UOS7MxcRIPMI62ahxEvh9jCA2ZNM2UHZQAUajv6MNlfE5R5AFwF3O4iFv4EA47w/F2GfAaL+JGpkiexNOwgfMVlNb3RHrTmV/CNdzDSGZdyUExKv4bLVjGj4j0V8ztpvQknMZPTGIg7c3MP8raThE9x1E04g4e7nGalsN1E46H41N5GwYjj2tRuCN7AE5gPtavoztv/eFsfwCPiI96xTnUPwAAAABJRU5ErkJggg==",Z=n(7715),f=n(5228),y=n(6362);const k=(0,i.ZP)(u.Z)((e=>{let{theme:t}=e;return{backgroundColor:t.palette.secondary.dark,color:"#fff",overflow:"hidden",position:"relative","&:after":{content:'""',position:"absolute",width:210,height:210,background:t.palette.secondary[800],borderRadius:"50%",top:-85,right:-95,[t.breakpoints.down("sm")]:{top:-105,right:-140}},"&:before":{content:'""',position:"absolute",width:210,height:210,background:t.palette.secondary[800],borderRadius:"50%",top:-125,right:-15,opacity:.5,[t.breakpoints.down("sm")]:{top:-155,right:-70}}}}));var v=e=>{let{isLoading:t,data:n}=e;const s=(0,c.Z)(),[i,u]=(0,r.useState)(n);return(0,r.useEffect)((()=>{u(n)}),[n,t]),(0,m.jsx)(m.Fragment,{children:t||!i?(0,m.jsx)(p,{}):(0,m.jsx)(k,{border:!1,content:!1,children:(0,m.jsx)(l.Z,{sx:{p:2.25},children:(0,m.jsxs)(o.ZP,{container:!0,direction:"column",children:[(0,m.jsx)(o.ZP,{item:!0,children:(0,m.jsxs)(o.ZP,{container:!0,justifyContent:"space-between",children:[(0,m.jsx)(o.ZP,{item:!0,children:(0,m.jsx)(d.Z,{variant:"rounded",sx:{...s.typography.commonAvatar,...s.typography.largeAvatar,backgroundColor:s.palette.secondary[800],mt:1},children:(0,m.jsx)("img",{src:j,alt:"truck"})})}),(0,m.jsx)(o.ZP,{item:!0,children:(0,m.jsx)(f.Z,{color:"secondary",badgeContent:i.truck.truckType+"FT",max:999,sx:{marginTop:1,marginRight:1.5},children:(0,m.jsx)(y.Z,{})})})]})}),(0,m.jsx)(o.ZP,{item:!0,children:(0,m.jsxs)(o.ZP,{container:!0,alignItems:"center",children:[(0,m.jsx)(o.ZP,{item:!0,children:(0,m.jsx)(a.Z,{sx:{fontSize:"2rem",fontWeight:500,mr:1,mt:1.75,mb:.75},children:i.truck.registrationNumber})}),(0,m.jsx)(o.ZP,{item:!0,children:(0,m.jsx)(d.Z,{sx:{cursor:"pointer",...s.typography.smallAvatar,backgroundColor:s.palette.secondary[200],color:s.palette.secondary.dark},children:(0,m.jsx)(Z.Z,{fontSize:"inherit"})})})]})}),(0,m.jsxs)(o.ZP,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,m.jsxs)(o.ZP,{item:!0,children:[(0,m.jsxs)(a.Z,{sx:{fontSize:"1rem",fontWeight:500,color:s.palette.secondary[200]},children:["Category: ",i.truck.category]}),(0,m.jsxs)(a.Z,{sx:{fontSize:"1rem",fontWeight:500,color:s.palette.secondary[200]},children:["Date: ",new Date(i.availableFrom).toLocaleString("en-US",{month:"long",day:"numeric",year:"numeric"})]})]}),(0,m.jsxs)(o.ZP,{item:!0,children:[(0,m.jsxs)(a.Z,{sx:{fontSize:"1rem",fontWeight:500,color:s.palette.secondary[200]},children:["Party: ",i.allocation.DOBookingId.partyId.name]}),(0,m.jsxs)(a.Z,{sx:{fontSize:"1rem",fontWeight:500,color:s.palette.secondary[200]},children:["Contact: ",i.allocation.DOBookingId.partyId.contactNumber]})]})]})]})})})})},b=n(7131),P=n(1689),w=n(3997),A=n(5842),C=n(9601),S=n(1405),I=n(9431);const D=(0,i.ZP)(u.Z)((e=>{let{theme:t}=e;return{backgroundColor:t.palette.secondary.dark,color:"#fff",overflow:"hidden",position:"relative","&:before":{content:'""',position:"absolute",width:210,height:210,background:t.palette.secondary[800],borderRadius:"50%",top:-125,right:-55,opacity:50,[t.breakpoints.down("sm")]:{top:-155,right:-70}}}}));var B=e=>{let{isLoading:t,data:n}=e;const i=(0,c.Z)(),[u,h]=(0,r.useState)(n);(0,r.useEffect)((()=>{h(n)}),[n,t]);const[x,g]=(0,r.useState)(null),[f,y]=(0,r.useState)(!1);return(0,m.jsxs)(m.Fragment,{children:[t||!u?(0,m.jsx)(p,{}):(0,m.jsx)(D,{border:!1,content:!1,children:(0,m.jsx)(l.Z,{sx:{p:2.25},children:(0,m.jsxs)(o.ZP,{container:!0,direction:"column",children:[(0,m.jsx)(o.ZP,{item:!0,children:(0,m.jsxs)(o.ZP,{container:!0,justifyContent:"space-between",children:[(0,m.jsx)(o.ZP,{item:!0,children:(0,m.jsx)(d.Z,{variant:"rounded",sx:{...i.typography.commonAvatar,...i.typography.largeAvatar,backgroundColor:i.palette.secondary[800],mt:1},children:(0,m.jsx)("img",{src:j,alt:"truck"})})}),(0,m.jsx)(o.ZP,{item:!0,children:(0,m.jsx)(I.ZP,{variant:"popover",popupId:"demo-popup-menu",children:e=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(b.Z,{...(0,I.vW)(e),sx:{color:"white"},"aria-label":"more",children:(0,m.jsx)(w.Z,{})}),(0,m.jsxs)(C.Z,{...(0,I.wK)(e),children:[(0,m.jsx)(S.Z,{onClick:e.close,children:"Update"}),(0,m.jsx)(S.Z,{onClick:e.close,children:"Cancel"})]})]})})})]})}),(0,m.jsx)(o.ZP,{item:!0,children:(0,m.jsxs)(o.ZP,{container:!0,alignItems:"center",children:[(0,m.jsx)(o.ZP,{item:!0,children:(0,m.jsx)(P.Z,{title:u.deliveryOrderId.name,arrow:!0,children:(0,m.jsx)(a.Z,{sx:{fontSize:"2rem",fontWeight:500,mr:1,mt:1.75,mb:.75},children:(k=u.deliveryOrderId.name,v=10,k.length>v?k.substring(0,v)+"...":k)})})}),(0,m.jsx)(o.ZP,{item:!0,children:(0,m.jsx)(d.Z,{sx:{cursor:"pointer",...i.typography.smallAvatar,backgroundColor:i.palette.secondary[200],color:i.palette.secondary.dark},children:(0,m.jsx)(Z.Z,{fontSize:"inherit"})})})]})}),(0,m.jsx)(o.ZP,{item:!0,children:(0,m.jsx)(l.Z,{style:{display:"flex",justifyContent:"space-between"},children:(0,m.jsxs)(a.Z,{sx:{fontSize:"1rem",fontWeight:500,color:i.palette.secondary[200]},children:["uploadDate: ",new Date(u.deliveryOrderId.createdAt).toLocaleString("en-US",{month:"long",day:"numeric",year:"numeric"})]})})}),(0,m.jsx)(o.ZP,{item:!0,paddingTop:1,children:(0,m.jsxs)(l.Z,{style:{display:"flex",justifyContent:"space-between"},children:[(0,m.jsx)(s.Z,{variant:"contained",color:"secondary",onClick:()=>{return e=u._id,g(e),void y(!0);var e},children:"View Allocation"}),(0,m.jsx)(s.Z,{variant:"contained",color:"secondary",onClick:()=>window.open(u.deliveryOrderId.doLink),children:"Download Do"})]})})]})})}),x&&(0,m.jsx)(A.Z,{open:f,close:()=>{g(null),refreshData(),y(!1)},doId:x})]});var k,v},N=n(2999);const O=(0,i.ZP)(u.Z)((e=>{let{theme:t}=e;return{backgroundColor:t.palette.primary.dark,color:"#fff",overflow:"hidden",position:"relative","&>div":{position:"relative",zIndex:5},"&:after":{content:'""',position:"absolute",width:210,height:210,background:t.palette.primary[800],borderRadius:"50%",zIndex:1,top:-85,right:-95,[t.breakpoints.down("sm")]:{top:-105,right:-140}},"&:before":{content:'""',position:"absolute",zIndex:1,width:210,height:210,background:t.palette.primary[800],borderRadius:"50%",top:-125,right:-15,opacity:.5,[t.breakpoints.down("sm")]:{top:-155,right:-70}}}}));var F=e=>{let{isLoading:t,data:n}=e;const s=(0,c.Z)(),[i,u]=(0,r.useState)(n);return(0,r.useEffect)((()=>{console.log(t),console.log(n),u(n)}),[n,t]),(0,m.jsx)(m.Fragment,{children:t||!i?(0,m.jsx)(p,{}):(0,m.jsx)(O,{border:!1,content:!1,children:(0,m.jsx)(l.Z,{sx:{p:2.25},children:(0,m.jsxs)(o.ZP,{container:!0,direction:"column",children:[(0,m.jsx)(o.ZP,{item:!0,children:(0,m.jsxs)(o.ZP,{container:!0,justifyContent:"space-between",children:[(0,m.jsx)(o.ZP,{item:!0,children:(0,m.jsx)(d.Z,{variant:"rounded",sx:{...s.typography.commonAvatar,...s.typography.largeAvatar,backgroundColor:s.palette.primary[800],mt:1},children:(0,m.jsx)("img",{src:j,alt:"Notification"})})}),(0,m.jsx)(o.ZP,{item:!0,children:(0,m.jsx)(f.Z,{color:"primary",badgeContent:i.truck.truckType+"FT",max:999,sx:{marginTop:1,marginRight:1.5}})})]})}),(0,m.jsx)(o.ZP,{item:!0,children:(0,m.jsxs)(o.ZP,{container:!0,alignItems:"center",children:[(0,m.jsx)(o.ZP,{item:!0,children:(0,m.jsx)(a.Z,{sx:{fontSize:"2rem",fontWeight:500,mr:1,mt:1.75,mb:.75},children:i.truck.registrationNumber})}),(0,m.jsx)(o.ZP,{item:!0,children:(0,m.jsx)(d.Z,{sx:{cursor:"pointer",...s.typography.smallAvatar,backgroundColor:s.palette.primary[200],color:s.palette.primary.dark},children:(0,m.jsx)(N.Z,{fontSize:"inherit"})})})]})}),(0,m.jsxs)(o.ZP,{item:!0,sx:{mb:1.25},children:[(0,m.jsxs)(a.Z,{sx:{fontSize:"1rem",fontWeight:500,color:s.palette.primary[200]},children:["Category: ",i.truck.category]}),(0,m.jsxs)(a.Z,{sx:{fontSize:"1rem",fontWeight:500,color:s.palette.primary[200]},children:["Type: ",i.truckType," Feet"]})]})]})})})})},L=n(2401),z=n(1322),T=n(1387),U=n(7890);const W=(0,i.ZP)(u.Z)((e=>{let{theme:t}=e;return{backgroundColor:t.palette.primary.dark,color:"#fff",overflow:"hidden",position:"relative","&>div":{position:"relative",zIndex:5},"&:after":{content:'""',position:"absolute",width:210,height:210,background:t.palette.primary[800],borderRadius:"50%",zIndex:1,top:-85,right:-95,[t.breakpoints.down("sm")]:{top:-105,right:-140}},"&:before":{content:'""',position:"absolute",zIndex:1,width:210,height:210,background:t.palette.primary[800],borderRadius:"50%",top:-125,right:-15,opacity:.5,[t.breakpoints.down("sm")]:{top:-155,right:-70}}}}));var E=e=>{let{isLoading:t,data:n}=e;const i=(0,c.Z)(),[u,h]=(0,r.useState)(n),x=(0,U.s0)();(0,r.useEffect)((()=>{h(n)}),[n,t]);const g=(e,t)=>e.length>t?e.substring(0,t)+"...":e;return(0,m.jsx)(m.Fragment,{children:t||!u?(0,m.jsx)(p,{}):(0,m.jsx)(W,{border:!1,content:!1,children:(0,m.jsx)(l.Z,{sx:{p:2.25},children:(0,m.jsxs)(o.ZP,{container:!0,direction:"column",children:[(0,m.jsx)(o.ZP,{item:!0,children:(0,m.jsxs)(o.ZP,{container:!0,justifyContent:"space-between",children:[(0,m.jsx)(o.ZP,{item:!0,children:(0,m.jsx)(d.Z,{variant:"rounded",sx:{...i.typography.commonAvatar,...i.typography.largeAvatar,backgroundColor:i.palette.primary[800],mt:1},children:(0,m.jsx)("img",{src:j,alt:"Notification"})})}),(0,m.jsx)(o.ZP,{item:!0,children:(0,m.jsx)(I.ZP,{variant:"popover",popupId:"demo-popup-menu",children:e=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(b.Z,{sx:{color:"white"},...(0,I.vW)(e),children:(0,m.jsx)(w.Z,{})}),(0,m.jsxs)(C.Z,{...(0,I.wK)(e),children:[(0,m.jsx)(S.Z,{onClick:()=>{console.log("Update clicked"),e.close()},children:"Update"}),(0,m.jsx)(S.Z,{onClick:()=>{console.log("Cancel clicked"),e.close()},children:"Cancel"})]})]})})})]})}),(0,m.jsx)(o.ZP,{item:!0,onClick:()=>x("/doUpload"),children:(0,m.jsxs)(o.ZP,{container:!0,alignItems:"center",children:[(0,m.jsx)(o.ZP,{item:!0,children:(0,m.jsx)(P.Z,{title:u.name,arrow:!0,children:(0,m.jsx)(a.Z,{sx:{fontSize:"2rem",fontWeight:500,mr:1,mt:1.75,mb:.75},children:g(u.name,10)})})}),(0,m.jsx)(o.ZP,{item:!0,children:(0,m.jsx)(d.Z,{sx:{cursor:"pointer",...i.typography.smallAvatar,backgroundColor:i.palette.primary[200],color:i.palette.primary.dark},children:(0,m.jsx)(N.Z,{fontSize:"inherit"})})})]})}),(0,m.jsxs)(o.ZP,{item:!0,sx:{mb:1.25},children:[(0,m.jsxs)(l.Z,{style:{display:"flex",justifyContent:"space-between"},children:[(0,m.jsxs)(a.Z,{sx:{fontSize:"1rem",fontWeight:500,color:i.palette.primary[200]},children:["uploadDate: ",u.uploadDate]}),(0,m.jsx)(s.Z,{variant:"contained",onClick:()=>window.open(u.link),children:"Download DO"})]}),(0,m.jsx)(l.Z,{children:(0,m.jsx)(P.Z,{title:u.fileName,arrow:!0,children:(0,m.jsxs)(a.Z,{sx:{fontSize:"1rem",fontWeight:300,color:i.palette.primary[200]},children:["fileName: ",g(u.fileName,20)]})})})]})]})})})})},R=n(2040),M=n(9214);var V=()=>{const[e,t]=(0,r.useState)(!0),[n,i]=(0,r.useState)([]),[c,l]=(0,r.useState)([]),[d,u]=(0,r.useState)([]),[h,x]=(0,r.useState)([]),[g,p]=(0,r.useState)([]),[j,Z]=(0,r.useState)([]),[f,y]=(0,r.useState)([]),[k,b]=(0,r.useState)([]),[P,w]=(0,r.useState)(!1),[A,C]=(0,r.useState)(""),S=()=>{(0,z.S1)({status:0}).then((e=>{x(e),console.log(e)})).catch((e=>{T.Am.error(e.response.data.msg)}))},I=()=>{(0,z.Xy)({status:"allocated"}).then((e=>{u(e),console.log(e)})).catch((e=>{T.Am.error(e.response.data.msg)}))};return(0,r.useEffect)((()=>{let e=localStorage.getItem("role");C(localStorage.getItem("role")),"transporter"!==e&&"both"!==e||((0,z.Jr)({status:"ongoing"}).then((e=>{console.log(e),l(e)})).catch((e=>{T.Am.error(e.response.data.msg)})),(0,z.Jr)({status:"inqueue"}).then((e=>{console.log(e),i(e)})).catch((e=>{T.Am.error(e.response.data.msg)}))),"admin"!==e&&"forwarder"!==e||(S(),I()),"forwarder"!==e&&"both"!==e||((0,z.S1)({status:1}).then((e=>{p(e),console.log(e)})).catch((e=>{T.Am.error(e.response.data.msg)})),(0,z.S1)({status:3}).then((e=>{Z(e),console.log(e)})).catch((e=>{T.Am.error(e.response.data.msg)})),(0,z.S1)({status:5}).then((e=>{y(e),console.log(e)})).catch((e=>{T.Am.error(e.response.data.msg)})),(0,z.S1)({status:6}).then((e=>{b(e),console.log(e)})).catch((e=>{T.Am.error(e.response.data.msg)})),I()),t(!1),console.log(A)}),[]),(0,m.jsxs)("div",{style:{overflowX:"auto"},children:[(0,m.jsx)(M.Z,{open:P,onClose:()=>{w(!1),S()}}),(0,m.jsxs)(o.ZP,{container:!0,spacing:L.dv,children:["transporter"===A||"both"===A?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(o.ZP,{item:!0,xs:12,children:[(0,m.jsx)(o.ZP,{py:4,children:(0,m.jsx)(a.Z,{variant:"h2",children:"Ongoing"})}),(0,m.jsx)(o.ZP,{container:!0,spacing:L.dv,children:c&&c.length>0?c.map((t=>(0,m.jsx)(o.ZP,{item:!0,lg:4,md:4,sm:6,xs:12,children:(0,m.jsx)(v,{data:t,isLoading:e})},t._id))):(0,m.jsx)(o.ZP,{item:!0,lg:4,md:4,sm:6,xs:12,children:e?(0,m.jsx)(v,{data:[],isLoading:!0}):(0,m.jsx)(a.Z,{variant:"body1",children:"Currently No Ongoing Trucks"})},1)})]}),(0,m.jsxs)(o.ZP,{item:!0,xs:12,children:[(0,m.jsx)(o.ZP,{py:3,children:(0,m.jsx)(a.Z,{variant:"h2",children:"In Queue"})}),(0,m.jsx)(o.ZP,{container:!0,spacing:L.dv,children:n&&n.length>0?n.map((t=>(0,m.jsx)(o.ZP,{item:!0,lg:4,md:4,sm:6,xs:12,children:(0,m.jsx)(F,{data:t,isLoading:e})},t.registrationNumber))):(0,m.jsx)(o.ZP,{item:!0,lg:4,md:4,sm:6,xs:12,children:e?(0,m.jsx)(F,{data:[],isLoading:!0}):(0,m.jsx)(a.Z,{variant:"body1",children:"Currently No Inqueue available"})},1)})]})]}):(0,m.jsx)(m.Fragment,{}),"forwarder"===A||"both"===A?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(o.ZP,{item:!0,xs:12,children:[(0,m.jsxs)(o.ZP,{container:!0,py:5,justifyContent:"space-between",alignItems:"center",children:[(0,m.jsx)(o.ZP,{item:!0,children:(0,m.jsx)(a.Z,{variant:"h2",children:"Open DOs"})}),(0,m.jsx)(o.ZP,{item:!0,children:(0,m.jsx)(s.Z,{variant:"contained",startIcon:(0,m.jsx)(R.Z,{}),onClick:()=>w(!0),sx:{backgroundColor:"primary.main"},children:"Upload DO"})})]}),(0,m.jsx)(o.ZP,{container:!0,spacing:L.dv,children:h&&h.length>0?h.map((t=>(0,m.jsx)(o.ZP,{item:!0,lg:4,md:4,sm:6,xs:12,children:(0,m.jsx)(E,{data:t,isLoading:e})},t._id))):(0,m.jsx)(o.ZP,{item:!0,lg:4,md:4,sm:6,xs:12,children:e?(0,m.jsx)(F,{data:[],isLoading:!0}):(0,m.jsx)(a.Z,{variant:"body1",children:"No Open DOs"})},1)})]}),(0,m.jsxs)(o.ZP,{item:!0,xs:12,children:[(0,m.jsx)(o.ZP,{container:!0,py:5,justifyContent:"space-between",alignItems:"center",children:(0,m.jsx)(o.ZP,{item:!0,children:(0,m.jsx)(a.Z,{variant:"h2",children:"Inqueue DOs"})})}),(0,m.jsx)(o.ZP,{container:!0,spacing:L.dv,children:g&&g.length>0?g.map((t=>(0,m.jsx)(o.ZP,{item:!0,lg:4,md:4,sm:6,xs:12,children:(0,m.jsx)(E,{data:t,isLoading:e})},t._id))):(0,m.jsx)(o.ZP,{item:!0,lg:4,md:4,sm:6,xs:12,children:e?(0,m.jsx)(F,{data:[],isLoading:!0}):(0,m.jsx)(a.Z,{variant:"body1",children:"No Inqueue DOs"})},1)})]}),(0,m.jsxs)(o.ZP,{item:!0,xs:12,children:[(0,m.jsx)(o.ZP,{py:4,children:(0,m.jsx)(a.Z,{variant:"h2",children:"Allocated Do"})}),(0,m.jsx)(o.ZP,{container:!0,spacing:L.dv,children:d&&d.length>0?d.map((t=>(0,m.jsx)(o.ZP,{item:!0,lg:4,md:4,sm:6,xs:12,children:(0,m.jsx)(B,{data:t,isLoading:e})},t._id))):(0,m.jsx)(o.ZP,{item:!0,lg:4,md:4,sm:6,xs:12,children:e?(0,m.jsx)(v,{data:[],isLoading:!0}):(0,m.jsx)(a.Z,{variant:"body1",children:"Currently No Allocated Do"})},1)})]}),(0,m.jsxs)(o.ZP,{item:!0,xs:12,children:[(0,m.jsx)(o.ZP,{container:!0,py:5,justifyContent:"space-between",alignItems:"center",children:(0,m.jsx)(o.ZP,{item:!0,children:(0,m.jsx)(a.Z,{variant:"h2",children:"Ongoing DOs"})})}),(0,m.jsx)(o.ZP,{container:!0,spacing:L.dv,children:j&&j.length>0?j.map((t=>(0,m.jsx)(o.ZP,{item:!0,lg:4,md:4,sm:6,xs:12,children:(0,m.jsx)(E,{data:t,isLoading:e})},t._id))):(0,m.jsx)(o.ZP,{item:!0,lg:4,md:4,sm:6,xs:12,children:e?(0,m.jsx)(F,{data:[],isLoading:!0}):(0,m.jsx)(a.Z,{variant:"body1",children:"No Ongoing DOs"})},1)})]}),(0,m.jsxs)(o.ZP,{item:!0,xs:12,children:[(0,m.jsx)(o.ZP,{container:!0,py:5,justifyContent:"space-between",alignItems:"center",children:(0,m.jsx)(o.ZP,{item:!0,children:(0,m.jsx)(a.Z,{variant:"h2",children:"Rejected DOs"})})}),(0,m.jsx)(o.ZP,{container:!0,spacing:L.dv,children:f&&f.length>0?f.map((t=>(0,m.jsx)(o.ZP,{item:!0,lg:4,md:4,sm:6,xs:12,children:(0,m.jsx)(E,{data:t,isLoading:e})},t._id))):(0,m.jsx)(o.ZP,{item:!0,lg:4,md:4,sm:6,xs:12,children:e?(0,m.jsx)(F,{data:[],isLoading:!0}):(0,m.jsx)(a.Z,{variant:"body1",children:"No Rejected DOs"})},1)})]}),(0,m.jsxs)(o.ZP,{item:!0,xs:12,children:[(0,m.jsx)(o.ZP,{container:!0,py:5,justifyContent:"space-between",alignItems:"center",children:(0,m.jsx)(o.ZP,{item:!0,children:(0,m.jsx)(a.Z,{variant:"h2",children:"Cancelled DOs"})})}),(0,m.jsx)(o.ZP,{container:!0,spacing:L.dv,children:k&&k.length>0?k.map((t=>(0,m.jsx)(o.ZP,{item:!0,lg:4,md:4,sm:6,xs:12,children:(0,m.jsx)(E,{data:t,isLoading:e})},t._id))):(0,m.jsx)(o.ZP,{item:!0,lg:4,md:4,sm:6,xs:12,children:e?(0,m.jsx)(F,{data:[],isLoading:!0}):(0,m.jsx)(a.Z,{variant:"body1",children:"No Cancelled DOs"})},1)})]})]}):(0,m.jsx)(m.Fragment,{}),"admin"===A?(0,m.jsxs)(o.ZP,{item:!0,xs:12,children:[(0,m.jsx)(o.ZP,{py:3,children:(0,m.jsx)(a.Z,{variant:"h2",children:"Open Dos"})}),(0,m.jsx)(o.ZP,{container:!0,spacing:L.dv,children:doUploads&&doUploads.length>0?doUploads.map((t=>(0,m.jsx)(o.ZP,{item:!0,lg:4,md:4,sm:6,xs:12,children:(0,m.jsx)(E,{data:t,isLoading:e})},t._id))):(0,m.jsx)(o.ZP,{item:!0,lg:4,md:4,sm:6,xs:12,children:e?(0,m.jsx)(F,{data:[],isLoading:!0}):(0,m.jsx)(a.Z,{variant:"body1",children:"No Open Dos"})},1)})]}):(0,m.jsx)(m.Fragment,{})]})]})}},9214:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(7313),o=n(1095),a=n(4469),s=n(4117),i=n(6467),c=n(7762),l=n(3604),d=n(7713),u=n(7131),h=n(4631),x=n(5480),g=n(5627),m=n(1322),p=n(1387),j=n(9176),Z=n(1113),f=n(7120),y=n(8586),k=n(9818),v=n(8372),b=n(2549),P=n(6417);function w(e){const[t,n]=r.useState(!1),[j,w]=r.useState([]),[C,S]=r.useState(null),{register:I,handleSubmit:D,setValue:B,formState:{errors:N}}=(0,g.cI)({defaultValues:{}}),O=()=>{e.onClose(),S(null),w([]),n(!1)};r.useEffect((()=>{n(e.open)}),[e.open]);const F=async(e,t)=>{const n=`${t}-${(0,b.Z)()}`,r=(0,f.iH)(d.Z,`/DoBookings/${n}`),o=(0,f.B0)(r,e);return new Promise(((r,a)=>{o.on("state_changed",(e=>{const t=Math.round(e.bytesTransferred/e.totalBytes*100);S(t)}),(e=>a(e)),(()=>{(0,f.Jt)(o.snapshot.ref).then((o=>{(0,m.kR)({doLink:o,name:t,uniqueName:n,fileName:e.name}).then((()=>{r()})).catch((e=>{a(e)}))}))}))}))};return(0,P.jsx)(r.Fragment,{children:(0,P.jsx)(a.Z,{fullWidth:!0,maxWidth:"sm",open:t,onClose:O,children:(0,P.jsxs)("form",{onSubmit:D((async e=>{const{files:t,name:n}=e;if(t&&0!==t.length){for(let e of t)try{await F(e,n)}catch(a){var r,o;console.log(a),p.Am.error((null===(r=a.response)||void 0===r||null===(o=r.data)||void 0===o?void 0:o.message)||"Failed to upload file");break}O()}else p.Am.error("Please choose at least one file")})),children:[(0,P.jsxs)(l.Z,{children:["Upload DO",(0,P.jsx)(u.Z,{"aria-label":"close",onClick:O,sx:{position:"absolute",right:8,top:8,color:e=>e.palette.grey[500]},children:(0,P.jsx)(y.Z,{})})]}),(0,P.jsxs)(i.Z,{children:[(0,P.jsx)(c.Z,{children:"Upload Delivery Orders."}),(0,P.jsx)(h.Z,{label:"Name",variant:"outlined",fullWidth:!0,margin:"normal",...I("name",{required:!0}),error:!!N.name,helperText:N.name?"Name is required":""}),(0,P.jsx)("input",{accept:"image/*,.pdf",style:{display:"none"},id:"raised-button-file",type:"file",multiple:!0,onChange:e=>{const t=Array.from(e.target.files);w(t.map((e=>e.name))),B("files",t)}}),(0,P.jsxs)("label",{htmlFor:"raised-button-file",children:[(0,P.jsx)(v.Z,{display:"flex",justifyContent:"center",alignItems:"center",height:150,children:(0,P.jsx)(k.Z,{style:{fontSize:100}})}),(0,P.jsx)(Z.Z,{variant:"h6",align:"center",sx:{marginTop:1,marginBottom:1},children:"Upload Files"}),null!==C&&(0,P.jsx)(v.Z,{sx:{width:"100%"},children:(0,P.jsx)(A,{value:C})})]}),j.length>0&&j.map(((e,t)=>(0,P.jsx)(x.Z,{children:e},t)))]}),(0,P.jsxs)(s.Z,{children:[(0,P.jsx)(o.Z,{onClick:O,color:"secondary",variant:"outlined",children:"Cancel"}),(0,P.jsx)(o.Z,{variant:"contained",type:"submit",children:"Submit"})]})]})})})}function A(e){return(0,P.jsxs)(v.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,P.jsx)(v.Z,{sx:{width:"100%",mr:1},children:(0,P.jsx)(j.Z,{variant:"determinate",...e})}),(0,P.jsx)(v.Z,{sx:{minWidth:35},children:(0,P.jsx)(Z.Z,{variant:"body2",color:"text.secondary",children:`${Math.round(e.value)}%`})})]})}}}]);