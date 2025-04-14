"use strict";(self.webpackChunkberry_free_material_react_cra=self.webpackChunkberry_free_material_react_cra||[]).push([[900],{9848:function(t,n,o){o.d(n,{Z:function(){return k}});var r=o(7313),e=o(7592),a=o(7551),c=o(9601),i=o(1405),s=o(5954),u=o(8210),l=o(8790),d=o(4481),p=o(9916),g=o(712),f=o(7474),h=o(7131),x=o(6417);const y=(0,e.ZP)((t=>(0,x.jsx)(c.Z,{elevation:0,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},...t})))((t=>{let{theme:n}=t;return{"& .MuiPaper-root":{borderRadius:6,marginTop:n.spacing(1),minWidth:130,color:"light"===n.palette.mode?"rgb(55, 65, 81)":n.palette.grey[300],boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px","& .MuiMenu-list":{padding:"4px 0"},"& .MuiMenuItem-root":{"& .MuiSvgIcon-root":{fontSize:18,color:n.palette.text.secondary,marginRight:n.spacing(1.5)},"&:active":{backgroundColor:(0,a.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}}}}));function k(t){let{data:n,actions:o=["Edit","Delete"],onActionChange:e}=t;const[a,c]=r.useState(null),k=Boolean(a),m=t=>{c(null),e&&e({action:t,data:n})};return(0,x.jsxs)("div",{children:[(0,x.jsx)(h.Z,{variant:"contained",onClick:t=>{c(t.currentTarget)},children:(0,x.jsx)(u.Z,{})}),(0,x.jsx)(y,{id:"demo-customized-menu",MenuListProps:{"aria-labelledby":"demo-customized-button"},anchorEl:a,open:k,onClose:m,children:o.map(((t,n)=>"ADD TO QUEUE"==t.toUpperCase()?(0,x.jsxs)(i.Z,{onClick:()=>m(t),sx:{color:"green","&:hover":{backgroundColor:"rgba(72, 113, 247, 0.1)"}},children:[(0,x.jsx)(l.Z,{style:{color:"green"}}),"Add To Queue"]},n):"ADDBOOKING"==t.toUpperCase()?(0,x.jsxs)(i.Z,{onClick:()=>m(t),sx:{color:"green","&:hover":{backgroundColor:"rgba(72, 113, 247, 0.1)"}},children:[(0,x.jsx)(l.Z,{style:{color:"green"}}),"Add TO BOOKING"]},n):"EDIT"==t.toUpperCase()?(0,x.jsxs)(i.Z,{onClick:()=>m(t),children:[(0,x.jsx)(s.Z,{}),"Edit"]},n):"DELETE"==t.toUpperCase()?(0,x.jsxs)(i.Z,{onClick:()=>m(t),sx:{color:"red","&:hover":{backgroundColor:"rgba(255, 0, 0, 0.1)"}},children:[(0,x.jsx)(d.Z,{style:{color:"red"}}),"Delete"]},n):"VIEW"==t.toUpperCase()?(0,x.jsxs)(i.Z,{onClick:()=>m(t),children:[(0,x.jsx)(p.Z,{}),"View"]},n):"CANCEL"==t.toUpperCase()?(0,x.jsxs)(i.Z,{sx:{color:"red"},onClick:()=>m(t),children:[(0,x.jsx)(g.Z,{color:"primary",style:{color:"red"}}),"Cancel"]},n):(0,x.jsxs)(i.Z,{onClick:()=>m(t),children:[(0,x.jsx)(f.Z,{}),t]},n)))})]})}},5842:function(t,n,o){var r=o(7313),e=o(1095),a=o(4469),c=o(3213),i=o(9840),s=o(8310),u=o(2247),l=o(5908),d=o(9289),p=o(7131),g=o(1113),f=o(1198),h=o(301),x=o(1322),y=o(1387),k=o(6417);const m=r.forwardRef((function(t,n){return(0,k.jsx)(h.Z,{direction:"up",ref:n,...t})}));n.Z=t=>{const[n,o]=r.useState(t.open);const[h,j]=r.useState({}),Z=()=>{o(!1),t.close()},w=t=>new Date(t).toLocaleString(),v=t=>{(0,x.ut)(t).then((t=>{j(t),console.log(t)})).catch((t=>{console.log(t),y.Am.error(t.response.data.message)}))},I=(n,o)=>{(0,x.jK)({status:o,allocId:n}).then((n=>{console.log(n),y.Am.success("status updated successfully"),v({doBookingId:t.doId})})).catch((t=>{console.log(t),y.Am.error(t.response.data.message)}))};return(0,r.useEffect)((()=>{t.doId&&v({doBookingId:t.doId})}),[]),(0,k.jsx)(r.Fragment,{children:(0,k.jsxs)(a.Z,{fullWidth:!0,maxWidth:"md",open:n,onClose:Z,TransitionComponent:m,children:[(0,k.jsx)(l.Z,{sx:{position:"relative"},children:(0,k.jsxs)(d.Z,{children:[(0,k.jsx)(p.Z,{edge:"start",color:"inherit",onClick:Z,"aria-label":"close",children:(0,k.jsx)(f.Z,{})}),(0,k.jsx)(g.Z,{sx:{ml:2,flex:1,color:"white"},variant:"h3",component:"div",children:"Allocated Details"}),(0,k.jsx)(e.Z,{autoFocus:!0,color:"inherit",onClick:Z,children:"Close"})]})}),(0,k.jsx)(s.Z,{children:h&&h.truckBookingId&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(i.Z,{children:[(0,k.jsx)(c.Z,{primary:h.truckBookingId.truck.name,secondary:h.truckBookingId.truck.registrationNumber}),(0,k.jsx)(c.Z,{primary:h.truckBookingId.truck.category,secondary:h.truckBookingId.truck.truckType+" FT"}),(0,k.jsx)(c.Z,{primary:"allocated on:",secondary:w(h.allocatedOn)}),(0,k.jsx)(c.Z,{primary:h.truckBookingId.truck.companyId.name,secondary:h.truckBookingId.truck.companyId.contactNumber})]},1),(0,k.jsxs)(i.Z,{children:[(0,k.jsx)(c.Z,{primary:h.truckBookingId.truck.companyId.ownerName,secondary:h.truckBookingId.truck.companyId.address}),(0,k.jsx)(c.Z,{primary:"driver: "+h.truckBookingId.truck.driverId.name,secondary:h.truckBookingId.truck.driverId.contactNumber}),(0,k.jsx)(c.Z,{primary:"Date on:",secondary:w(h.truckBookingId.availableFrom)}),(0,k.jsx)(c.Z,{primary:"Status:",secondary:h.status}),"allocated"===h.status?(0,k.jsx)(e.Z,{variant:"contained",disabled:!0,onClick:()=>I(h._id,"ongoing"),children:"Move to Live"}):"ongoing"===h.status?(0,k.jsx)(e.Z,{variant:"contained",disabled:!0,onClick:()=>I(h._id,"done"),children:"Move to Done"}):"expired"===h.status?(0,k.jsx)(e.Z,{variant:"contained",disabled:!0,children:"Expired"}):null]},2),(0,k.jsx)(u.Z,{})]})})]})})}},6167:function(t,n,o){var r=o(7313),e=o(1095),a=o(4469),c=o(3213),i=o(9840),s=o(8310),u=o(2247),l=o(5908),d=o(9289),p=o(7131),g=o(1113),f=o(1198),h=o(301),x=o(1387),y=o(1322),k=o(8372),m=o(6417);const j=r.forwardRef((function(t,n){return(0,m.jsx)(h.Z,{direction:"up",ref:n,...t})}));n.Z=t=>{const[n,o]=r.useState(t.open);const[h,Z]=r.useState([]),w=()=>{o(!1),t.close()};return(0,r.useEffect)((()=>{t.type&&(console.log(t),(t=>{console.log(t),(0,y.VW)(t).then((t=>{Z(t),console.log(t)})).catch((t=>{console.log(t)}))})({status:"inqueue",type:t.type,date:t.date}))}),[]),(0,m.jsx)(r.Fragment,{children:(0,m.jsxs)(a.Z,{fullWidth:!0,maxWidth:"md",open:n,onClose:w,TransitionComponent:j,children:[(0,m.jsx)(l.Z,{sx:{position:"relative"},children:(0,m.jsxs)(d.Z,{children:[(0,m.jsx)(p.Z,{edge:"start",color:"inherit",onClick:w,"aria-label":"close",children:(0,m.jsx)(f.Z,{})}),(0,m.jsx)(g.Z,{sx:{ml:2,flex:1,color:"white"},variant:"h3",component:"div",children:"Truck Allocation"}),(0,m.jsx)(e.Z,{autoFocus:!0,color:"inherit",onClick:w,children:"Close"})]})}),(0,m.jsxs)(s.Z,{children:[0===h.length&&(0,m.jsx)(k.Z,{sx:{display:"flex",justifyContent:"center"},children:(0,m.jsx)(g.Z,{children:"No Trucks Inqueue within the date and type"})}),h.map(((n,o)=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(i.Z,{children:[(0,m.jsx)(c.Z,{primary:o+1}),(0,m.jsx)(c.Z,{primary:n.truck.name,secondary:n.truck.registrationNumber}),(0,m.jsx)(c.Z,{primary:n.truck.companyId.name,secondary:n.truck.companyId.contactNumber}),(0,m.jsx)(c.Z,{primary:n.truck.category,secondary:n.truck.truckType+" FT"}),(0,m.jsx)(e.Z,{variant:"contained",onClick:()=>(n=>{if(console.log(n),console.log(t),!t.date||!t.doId)return console.log("date not found"),!1;(0,y.T7)({doBookingId:t.doId,doDate:t.date,truckBookingId:n}).then((t=>{console.log(t),x.Am.success("DO allocation successfull!"),w()})).catch((t=>{x.Am.error(t.response.data.message),console.log(t)}))})(n._id),children:"Allocate"})]},n._id),(0,m.jsx)(u.Z,{})]})))]})]})})}},1322:function(t,n,o){o.d(n,{$K:function(){return d},$g:function(){return T},AW:function(){return D},Au:function(){return l},BU:function(){return v},CE:function(){return m},Dx:function(){return O},ES:function(){return J},Et:function(){return F},GB:function(){return g},Gu:function(){return s},IB:function(){return L},Jq:function(){return G},Jr:function(){return Z},K3:function(){return p},KI:function(){return P},M$:function(){return $},Mg:function(){return V},Pe:function(){return h},Q1:function(){return y},RY:function(){return E},S1:function(){return K},T5:function(){return k},T7:function(){return b},Tj:function(){return z},VW:function(){return w},Wo:function(){return R},X2:function(){return q},X6:function(){return j},Xy:function(){return N},a2:function(){return x},aZ:function(){return u},cW:function(){return _},cn:function(){return B},h8:function(){return S},jK:function(){return C},ji:function(){return c},kR:function(){return U},kl:function(){return f},lQ:function(){return e},oR:function(){return a},r7:function(){return i},ss:function(){return M},ut:function(){return I},uz:function(){return A},xF:function(){return W},zE:function(){return Q}});const r=o(5662).Z.create({baseURL:"http://localhost:5000/api/",headers:{"Content-Type":"application/json"}});async function e(t){return(await r.post("company",t)).data}async function a(t){return(await r.delete("company/"+t,t)).data}async function c(t,n){return(await r.patch("company/"+t,n)).data}async function i(t){return(await r.post("company/getAllCompany",t)).data}async function s(t){return(await r.post("truck",t)).data}async function u(t){return(await r.post("truck/getAllTruck",t)).data}async function l(t){return(await r.post("truck/updateTruckStatus",t)).data}async function d(t){return(await r.delete("truck/"+t,t)).data}async function p(t,n){return(await r.patch("truck/"+t,n)).data}async function g(t){return(await r.post("truck/updateTruckBookingStatus",t)).data}async function f(t){return(await r.post("truck/getAllTruckBookings",t)).data}async function h(t){return(await r.post("truck/addTruckToBooking",t)).data}async function x(t){return(await r.post("party/getAllParty",t)).data}async function y(t){return(await r.post("party",t)).data}async function k(t){return(await r.delete(`party/${t}`)).data}async function m(t,n){return(await r.post(`party/${t}`,n)).data}async function j(t){return(await r.put(`party/updateStatus/${t}`)).data}async function Z(t){return(await r.post("truck/getAllTruckBookings",{status:t.status})).data}async function w(t){return(await r.post("truck/getInQueueTrucks",t)).data}async function v(t){return(await r.post("truck/getTruckQueue",t)).data}async function I(t){return(await r.post("allocation/getAllocationDetails",t)).data}async function b(t){return(await r.post("allocation",t)).data}async function C(t){return(await r.post("allocation/changeAllocationStatus",t)).data}async function B(t){return(await r.post("user",t)).data}async function A(t){return(await r.post("user/editUser",t)).data}async function D(t){return(await r.get("user/getAllUsers"+(t?`?companyId=${t}`:""))).data}async function S(t){return(await r.delete(`user/${t}`)).data}async function T(t){const n=await r.post("user/login",t);return console.log(n),n.data}async function E(t){return(await r.post("location/getAllLocation",t)).data}async function O(t){return(await r.post("location",t)).data}async function N(t){return(await r.post("doBooking/getAllDO",t)).data}async function _(t){return(await r.post("doBooking",t)).data}async function U(t){return(await r.post("doBooking/uploadDO",t)).data}async function $(t,n){try{return(await r.put(`doBooking/updateDO/${t}`,n)).data}catch(o){throw console.error("Error updating delivery order:",o),o}}async function F(t,n){try{return(await r.post(`doBooking/cancelDO/${t}`,n)).data}catch(o){throw console.error("Error updating delivery order:",o),o}}async function M(t,n){try{return(await r.post(`doBooking/cancelDOBooking/${t}`,n)).data}catch(o){throw console.error("Error cancelling Do booking:",o),o}}async function W(t){try{return(await r.post(`doBooking/reopen-do-booking/${t}`)).data}catch(n){throw console.error("Error cancelling Do booking:",n),n}}async function L(t,n){try{return(await r.post(`allocation/cancel-allocated-booking/${t}`,n)).data}catch(o){throw console.error("Error cancelling Do booking:",o),o}}async function z(t){try{return(await r.post(`allocation/re-allocate-booking/${t}`)).data}catch(n){throw console.error("Error cancelling Do booking:",n),n}}async function K(t){return(await r.post("doBooking/getAllDeliveryOrders",t)).data}async function R(t){return(await r.delete("doBooking",t)).data}async function P(t){return(await r.delete("doBooking/deleteDeliveryOrder/"+t)).data}async function q(t){return(await r.post("driver",t)).data}async function Q(t){return(await r.post("driver/getAllDrivers",t)).data}async function G(t){return(await r.post("driver/getCompanyDrivers",t)).data}async function V(t){return(await r.delete("driver/"+t,t)).data}async function J(t,n){return(await r.patch("driver/"+t,n)).data}r.interceptors.request.use((async t=>{const n=localStorage.getItem("token");return n?t.headers.Authorization="Bearer "+n:console.warn("Token not found in localStorage"),t}),(t=>Promise.reject(t))),r.interceptors.response.use((t=>t),(t=>(t.response&&401===t.response.status&&(console.log("Unauthorized, logging out..."),localStorage.clear(),window.location.href="/login"),Promise.reject(t))))},5266:function(t,n,o){o.d(n,{h:function(){return a}});var r=o(6031),e=o.n(r);const a=(t,n,o)=>t.map((t=>e().mapKeys(t,((t,r)=>{for(let e=0;e<o.length;e++)if(r===n[e])return o[e];return r}))))},8900:function(t,n,o){o.r(n),o.d(n,{default:function(){return b}});var r=o(7313),e=o(3497),a=o(1629),c=o(6835),i=o(3477),s=o(4076),u=o(7478),l=o(3467),d=o(1095),p=o(9848),g=o(6167),f=o(5842),h=o(1322),x=o(1387),y=o(6417);function k(t){let{data:n,header:o,isShowSerialNo:k=!1,isShowAction:m=!1,actions:j=["Edit","Delete"],onActionChange:Z,refresh:w,onClickAction:v}=t;const[I,b]=(0,r.useState)(null),[C,B]=(0,r.useState)(null),[A,D]=(0,r.useState)(!1),S=(t,n)=>{(0,h.jK)({status:n,allocId:t}).then((t=>{console.log(t),x.Am.success("Status updated successfully"),w({status:"allocated"})})).catch((t=>{console.log(t),x.Am.error(t.response.data.message)}))};return(0,y.jsxs)(e.Z,{children:[(0,y.jsx)(a.Z,{children:(0,y.jsxs)(c.Z,{children:[(0,y.jsx)(i.Z,{children:(0,y.jsxs)(s.Z,{children:[k&&(0,y.jsx)(u.Z,{sx:{color:"primary.main"},children:"SLNO"}),o.map(((t,n)=>(0,y.jsx)(u.Z,{sx:{color:"primary.main"},children:t},n))),m&&(0,y.jsx)(u.Z,{sx:{color:"primary.main"},children:"Action"})]})}),(0,y.jsx)(l.Z,{children:n.map(((t,n)=>{return(0,y.jsxs)(s.Z,{onClick:()=>(t=>{v&&v(t)})(t._id),children:[k&&(0,y.jsx)(u.Z,{children:n+1}),(0,y.jsx)(u.Z,{children:t.truck.registrationNumber}),(0,y.jsx)(u.Z,{children:t.allocation.DOBookingId.partyId.name}),(0,y.jsx)(u.Z,{children:t.allocation.DOBookingId.partyId.locationId.name}),(0,y.jsx)(u.Z,{children:t.allocation.DOBookingId.partyId.contactNumber}),(0,y.jsxs)(u.Z,{children:["\u20b9",t.allocation.DOBookingId.rate]}),(0,y.jsx)(u.Z,{children:(o=t.availableFrom,new Date(o).toLocaleDateString("en-US",{day:"numeric",month:"short",year:"numeric"}))}),(0,y.jsx)(u.Z,{children:"allocated"===t.allocation.status?(0,y.jsx)(d.Z,{variant:"contained",disabled:!0,onClick:()=>S(t.allocation._id,"ongoing"),children:"Move to Live"}):"ongoing"===t.allocation.status?(0,y.jsx)(d.Z,{variant:"contained",disabled:!0,onClick:()=>S(t.allocation._id,"done"),children:"Move to Done"}):"expired"===t.allocation.status?(0,y.jsx)(d.Z,{variant:"contained",disabled:!0,children:"Expired"}):null}),m&&(0,y.jsx)(u.Z,{children:(0,y.jsx)(p.Z,{data:t,onActionChange:t=>{Z(t)},actions:j})})]},n);var o}))})]})}),I&&(0,y.jsx)(g.Z,{open:A,close:()=>{b(null),D(!1)},type:I}),C&&(0,y.jsx)(f.Z,{open:A,close:()=>{B(null),D(!1)},doId:C})]})}var m=o(5266);const j=["RegNo","party","location","contact","rate","date","status"];function Z(t){let{data:n,updateStatus:o,updateData:r}=t;const e=(0,m.h)(n,["registrationNumber","party","location","contact","rate","date","status"],j);return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(k,{data:e,header:j,isShowSerialNo:!0,isShowAction:!0,actions:["cancel"],refresh:r,onActionChange:t=>{console.log(t),"cancel"==t.action&&(console.log(t.data._id),o({truckId:"661bf9b734601df26a2d1bc3",status:"inqueue"}).then((t=>{console.log(t.message),x.Am.success(t.message),r({status:"allocated"})})).catch((t=>{console.error(t),x.Am.error("Error occured while updating")})))}})})}var w=o(2832),v=o(1113);function I(){return(0,y.jsx)(e.Z,{children:(0,y.jsx)(w.Z,{direction:"row",sx:{justifyContent:"space-between",alignItems:"center"},children:(0,y.jsx)(v.Z,{variant:"h3",color:"secondary.main",children:"Ongoing Trucks"})})})}function b(){const[t,n]=(0,r.useState)([]),o=t=>{(0,h.Jr)(t).then((t=>{n(t)})).catch((t=>{console.log(t)}))};return(0,r.useEffect)((()=>{o({status:"ongoing"})}),[]),(0,y.jsxs)(w.Z,{direction:"column",gap:2,children:[(0,y.jsx)(I,{}),(0,y.jsx)(Z,{data:t,updateStatus:h.Au,updateData:o})]})}}}]);