"use strict";(self.webpackChunkberry_free_material_react_cra=self.webpackChunkberry_free_material_react_cra||[]).push([[865],{9848:function(o,t,n){n.d(t,{Z:function(){return m}});var e=n(7313),a=n(7592),r=n(7551),c=n(9601),s=n(1405),i=n(5954),l=n(8210),u=n(8790),d=n(4481),g=n(9916),p=n(712),h=n(7474),x=n(7131),f=n(6417);const k=(0,a.ZP)((o=>(0,f.jsx)(c.Z,{elevation:0,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},...o})))((o=>{let{theme:t}=o;return{"& .MuiPaper-root":{borderRadius:6,marginTop:t.spacing(1),minWidth:130,color:"light"===t.palette.mode?"rgb(55, 65, 81)":t.palette.grey[300],boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px","& .MuiMenu-list":{padding:"4px 0"},"& .MuiMenuItem-root":{"& .MuiSvgIcon-root":{fontSize:18,color:t.palette.text.secondary,marginRight:t.spacing(1.5)},"&:active":{backgroundColor:(0,r.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity)}}}}}));function m(o){let{data:t,actions:n=["Edit","Delete"],onActionChange:a}=o;const[r,c]=e.useState(null),m=Boolean(r),y=o=>{c(null),a&&a({action:o,data:t})};return(0,f.jsxs)("div",{children:[(0,f.jsx)(x.Z,{variant:"contained",onClick:o=>{c(o.currentTarget)},children:(0,f.jsx)(l.Z,{})}),(0,f.jsx)(k,{id:"demo-customized-menu",MenuListProps:{"aria-labelledby":"demo-customized-button"},anchorEl:r,open:m,onClose:y,children:n.map(((o,t)=>"ADD TO QUEUE"==o.toUpperCase()?(0,f.jsxs)(s.Z,{onClick:()=>y(o),sx:{color:"green","&:hover":{backgroundColor:"rgba(72, 113, 247, 0.1)"}},children:[(0,f.jsx)(u.Z,{style:{color:"green"}}),"Add To Queue"]},t):"ADDBOOKING"==o.toUpperCase()?(0,f.jsxs)(s.Z,{onClick:()=>y(o),sx:{color:"green","&:hover":{backgroundColor:"rgba(72, 113, 247, 0.1)"}},children:[(0,f.jsx)(u.Z,{style:{color:"green"}}),"Add TO BOOKING"]},t):"EDIT"==o.toUpperCase()?(0,f.jsxs)(s.Z,{onClick:()=>y(o),children:[(0,f.jsx)(i.Z,{}),"Edit"]},t):"DELETE"==o.toUpperCase()?(0,f.jsxs)(s.Z,{onClick:()=>y(o),sx:{color:"red","&:hover":{backgroundColor:"rgba(255, 0, 0, 0.1)"}},children:[(0,f.jsx)(d.Z,{style:{color:"red"}}),"Delete"]},t):"VIEW"==o.toUpperCase()?(0,f.jsxs)(s.Z,{onClick:()=>y(o),children:[(0,f.jsx)(g.Z,{}),"View"]},t):"CANCEL"==o.toUpperCase()?(0,f.jsxs)(s.Z,{sx:{color:"red"},onClick:()=>y(o),children:[(0,f.jsx)(p.Z,{color:"primary",style:{color:"red"}}),"Cancel"]},t):(0,f.jsxs)(s.Z,{onClick:()=>y(o),children:[(0,f.jsx)(h.Z,{}),o]},t)))})]})}},5842:function(o,t,n){var e=n(7313),a=n(1095),r=n(4469),c=n(3213),s=n(9840),i=n(8310),l=n(2247),u=n(5908),d=n(9289),g=n(7131),p=n(1113),h=n(1198),x=n(301),f=n(1322),k=n(1387),m=n(6417);const y=e.forwardRef((function(o,t){return(0,m.jsx)(x.Z,{direction:"up",ref:t,...o})}));t.Z=o=>{const[t,n]=e.useState(o.open);const[x,j]=e.useState({}),Z=()=>{n(!1),o.close()},w=o=>new Date(o).toLocaleString(),v=o=>{(0,f.ut)(o).then((o=>{j(o),console.log(o)})).catch((o=>{console.log(o),k.Am.error(o.response.data.message)}))},I=(t,n)=>{(0,f.jK)({status:n,allocId:t}).then((t=>{console.log(t),k.Am.success("status updated successfully"),v({doBookingId:o.doId})})).catch((o=>{console.log(o),k.Am.error(o.response.data.message)}))};return(0,e.useEffect)((()=>{o.doId&&v({doBookingId:o.doId})}),[]),(0,m.jsx)(e.Fragment,{children:(0,m.jsxs)(r.Z,{fullWidth:!0,maxWidth:"md",open:t,onClose:Z,TransitionComponent:y,children:[(0,m.jsx)(u.Z,{sx:{position:"relative"},children:(0,m.jsxs)(d.Z,{children:[(0,m.jsx)(g.Z,{edge:"start",color:"inherit",onClick:Z,"aria-label":"close",children:(0,m.jsx)(h.Z,{})}),(0,m.jsx)(p.Z,{sx:{ml:2,flex:1,color:"white"},variant:"h3",component:"div",children:"Allocated Details"}),(0,m.jsx)(a.Z,{autoFocus:!0,color:"inherit",onClick:Z,children:"Close"})]})}),(0,m.jsx)(i.Z,{children:x&&x.truckBookingId&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(s.Z,{children:[(0,m.jsx)(c.Z,{primary:x.truckBookingId.truck.name,secondary:x.truckBookingId.truck.registrationNumber}),(0,m.jsx)(c.Z,{primary:x.truckBookingId.truck.category,secondary:x.truckBookingId.truck.truckType+" FT"}),(0,m.jsx)(c.Z,{primary:"allocated on:",secondary:w(x.allocatedOn)}),(0,m.jsx)(c.Z,{primary:x.truckBookingId.truck.companyId.name,secondary:x.truckBookingId.truck.companyId.contactNumber})]},1),(0,m.jsxs)(s.Z,{children:[(0,m.jsx)(c.Z,{primary:x.truckBookingId.truck.companyId.ownerName,secondary:x.truckBookingId.truck.companyId.address}),(0,m.jsx)(c.Z,{primary:"driver: "+x.truckBookingId.truck.driverId.name,secondary:x.truckBookingId.truck.driverId.contactNumber}),(0,m.jsx)(c.Z,{primary:"Date on:",secondary:w(x.truckBookingId.availableFrom)}),(0,m.jsx)(c.Z,{primary:"Status:",secondary:x.status}),"allocated"===x.status?(0,m.jsx)(a.Z,{variant:"contained",onClick:()=>I(x._id,"ongoing"),children:"Move to Live"}):"ongoing"===x.status?(0,m.jsx)(a.Z,{variant:"contained",onClick:()=>I(x._id,"done"),children:"Move to Done"}):"expired"===x.status?(0,m.jsx)(a.Z,{variant:"contained",disabled:!0,children:"Expired"}):null]},2),(0,m.jsx)(l.Z,{})]})})]})})}},6167:function(o,t,n){var e=n(7313),a=n(1095),r=n(4469),c=n(3213),s=n(9840),i=n(8310),l=n(2247),u=n(5908),d=n(9289),g=n(7131),p=n(1113),h=n(1198),x=n(301),f=n(1387),k=n(1322),m=n(6417);const y=e.forwardRef((function(o,t){return(0,m.jsx)(x.Z,{direction:"up",ref:t,...o})}));t.Z=o=>{const[t,n]=e.useState(o.open);const[x,j]=e.useState([]),Z=()=>{n(!1),o.close()};return(0,e.useEffect)((()=>{o.type&&(o=>{console.log(o),(0,k.VW)(o).then((o=>{j(o),console.log(o)})).catch((o=>{console.log(o)}))})({status:"inqueue",type:o.type,date:o.date})}),[]),(0,m.jsx)(e.Fragment,{children:(0,m.jsxs)(r.Z,{fullWidth:!0,maxWidth:"md",open:t,onClose:Z,TransitionComponent:y,children:[(0,m.jsx)(u.Z,{sx:{position:"relative"},children:(0,m.jsxs)(d.Z,{children:[(0,m.jsx)(g.Z,{edge:"start",color:"inherit",onClick:Z,"aria-label":"close",children:(0,m.jsx)(h.Z,{})}),(0,m.jsx)(p.Z,{sx:{ml:2,flex:1,color:"white"},variant:"h3",component:"div",children:"Truck Allocation"}),(0,m.jsx)(a.Z,{autoFocus:!0,color:"inherit",onClick:Z,children:"Close"})]})}),(0,m.jsx)(i.Z,{children:x.map((t=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(s.Z,{children:[(0,m.jsx)(c.Z,{primary:t.truck.name,secondary:t.truck.registrationNumber}),(0,m.jsx)(c.Z,{primary:t.truck.companyId.name,secondary:t.truck.companyId.contactNumber}),(0,m.jsx)(c.Z,{primary:t.truck.category,secondary:t.truck.truckType+" FT"}),(0,m.jsx)(a.Z,{variant:"contained",onClick:()=>(t=>{if(console.log(t),!o.date||!o.doId)return console.log(err),!1;(0,k.T7)({doBookingId:o.doId,doDate:o.date,truckBookingId:t}).then((o=>{console.log(o),f.Am.success("DO allocation successfull!"),Z()})).catch((o=>{f.Am.error(o.response.data.message),console.log(o)}))})(t._id),children:"Allocate"})]},t._id),(0,m.jsx)(l.Z,{})]})))})]})})}},1322:function(o,t,n){n.d(t,{$K:function(){return g},$g:function(){return v},Au:function(){return d},Dx:function(){return C},ES:function(){return F},GB:function(){return p},Gu:function(){return l},Jq:function(){return N},Jr:function(){return m},KI:function(){return T},Mg:function(){return _},Pe:function(){return x},Q1:function(){return k},RY:function(){return I},S1:function(){return D},T7:function(){return Z},VW:function(){return y},Wo:function(){return S},X2:function(){return E},Xy:function(){return b},a2:function(){return f},aZ:function(){return u},cW:function(){return A},jK:function(){return w},ji:function(){return s},kR:function(){return B},kl:function(){return h},lQ:function(){return r},oR:function(){return c},r7:function(){return i},ut:function(){return j},zE:function(){return O}});var e=n(5662);console.log(window.location.hostname);const a=e.Z.create({baseURL:"http://localhost:5000/api/",headers:{"Content-Type":"application/json"}});async function r(o){const t=await a.post("company",o);return console.log(t.data),t.data}async function c(o){console.log(o);const t=await a.delete("company/"+o,o);return console.log(t.data),t.data}async function s(o,t){console.log(t);const n=await a.patch("company/"+o,t);return console.log(n.data),n.data}async function i(o){const t=await a.post("company/getAllCompany",o);return console.log(t.data),t.data}async function l(o){const t=await a.post("truck",o);return console.log(t.data),t.data}async function u(o){const t=await a.post("truck/getAllTruck",o);return console.log(t.data),t.data}async function d(o){const t=await a.post("truck/updateTruckStatus",o);return console.log(t.data),t.data}async function g(o){console.log(o);const t=await a.delete("truck/"+o,o);return console.log(t.data),t.data}async function p(o){const t=await a.post("truck/updateTruckBookingStatus",o);return console.log(t.data),t.data}async function h(o){const t=await a.post("truck/getAllTruckBookings",o);return console.log(t.data),t.data}async function x(o){const t=await a.post("truck/addTruckToBooking",o);return console.log(t.data),t.data}async function f(o){const t=await a.post("party/getAllParty",o);return console.log(t.data),t.data}async function k(o){const t=await a.post("party",o);return console.log(t.data),t.data}async function m(o){return(await a.post("truck/getAllTruckBookings",{status:o.status})).data}async function y(o){return(await a.post("truck/getInQueueTrucks",o)).data}async function j(o){const t=await a.post("allocation/getAllocationDetails",o);return console.log(t.data),t.data}async function Z(o){const t=await a.post("allocation",o);return console.log(t.data),t.data}async function w(o){const t=await a.post("allocation/changeAllocationStatus",o);return console.log(t.data),t.data}async function v(o){const t=await a.post("user/login",o);return console.log("heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"),console.log(t),console.log(t.data),t.data}async function I(o){const t=await a.post("location/getAllLocation",o);return console.log(t.data),t.data}async function C(o){const t=await a.post("location",o);return console.log(t.data),t.data}async function b(o){const t=await a.post("doBooking/getAllDO",o);return console.log(t.data),t.data}async function A(o){const t=await a.post("doBooking",o);return console.log(t.data),t.data}async function B(o){const t=await a.post("doBooking/uploadDO",o);return console.log(t.data),t.data}async function D(o){const t=await a.post("doBooking/getAllDeliveryOrders",o);return console.log(t.data),t.data}async function S(o){const t=await a.delete("doBooking",o);return console.log(t.data),t.data}async function T(o){const t=await a.delete("doBooking/deleteDeliveryOrder/"+o);return console.log(t.data),t.data}async function E(o){const t=await a.post("driver",o);return console.log(t.data),t.data}async function O(o){const t=await a.post("driver/getAllDrivers",o);return console.log(t.data),t.data}async function N(o){const t=await a.post("driver/getCompanyDrivers",o);return console.log(t.data),t.data}async function _(o){console.log(o);const t=await a.delete("driver/"+o,o);return console.log(t.data),t.data}async function F(o,t){console.log(t);const n=await a.patch("driver/"+o,t);return console.log(n.data),n.data}a.interceptors.request.use((async o=>{const t=localStorage.getItem("token");return t?o.headers.Authorization="Bearer "+t:console.warn("Token not found in localStorage"),o}),(o=>Promise.reject(o))),a.interceptors.response.use((o=>o),(o=>(o.response&&401===o.response.status&&(console.log("Unauthorized, logging out..."),localStorage.clear(),window.location.href="/login"),Promise.reject(o))))},5266:function(o,t,n){n.d(t,{h:function(){return r}});var e=n(6031),a=n.n(e);const r=(o,t,n)=>o.map((o=>a().mapKeys(o,((o,e)=>{for(let a=0;a<n.length;a++)if(e===t[a])return n[a];return e}))))},4865:function(o,t,n){n.r(t),n.d(t,{default:function(){return C}});var e=n(7313),a=n(3497),r=n(1629),c=n(6835),s=n(3477),i=n(4076),l=n(7478),u=n(3467),d=n(1095),g=n(9848),p=n(6167),h=n(5842),x=n(1322),f=n(1387),k=n(6417);function m(o){let{data:t,header:n,isShowSerialNo:m=!1,isShowAction:y=!1,actions:j=["Edit","Delete"],onActionChange:Z,refresh:w,onClickAction:v}=o;const[I,C]=(0,e.useState)(null),[b,A]=(0,e.useState)(null),[B,D]=(0,e.useState)(!1),S=(o,t)=>{(0,x.jK)({status:t,allocId:o}).then((o=>{console.log(o),f.Am.success("status updated successfully"),w({status:"ongoing"})})).catch((o=>{console.log(o),f.Am.error(o.response.data.message)}))};return(0,k.jsxs)(a.Z,{children:[(0,k.jsx)(r.Z,{children:(0,k.jsxs)(c.Z,{children:[(0,k.jsx)(s.Z,{children:(0,k.jsxs)(i.Z,{children:[m&&(0,k.jsx)(l.Z,{sx:{color:"primary.main"},children:"SLNO"}),n.map(((o,t)=>(0,k.jsx)(l.Z,{sx:{color:"primary.main"},children:o},t))),y&&(0,k.jsx)(l.Z,{sx:{color:"primary.main"},children:"Action"})]})}),(0,k.jsx)(u.Z,{children:t.map(((o,t)=>{return(0,k.jsxs)(i.Z,{onClick:()=>(o=>{v&&v(o)})(o._id),children:[m&&(0,k.jsx)(l.Z,{children:t+1}),(0,k.jsx)(l.Z,{children:o.truck.registrationNumber}),(0,k.jsx)(l.Z,{children:o.allocation.DOBookingId.partyId.name}),(0,k.jsx)(l.Z,{children:o.allocation.DOBookingId.partyId.locationId.name}),(0,k.jsx)(l.Z,{children:o.allocation.DOBookingId.partyId.contactNumber}),(0,k.jsxs)(l.Z,{children:["\u20b9",o.allocation.DOBookingId.rate]}),(0,k.jsx)(l.Z,{children:(n=o.availableFrom,new Date(n).toLocaleDateString("en-US",{day:"numeric",month:"short",year:"numeric"}))}),(0,k.jsx)(l.Z,{children:"allocated"===o.allocation.status?(0,k.jsx)(d.Z,{variant:"contained",onClick:()=>S(o.allocation._id,"ongoing"),children:"Move to Live"}):"ongoing"===o.allocation.status?(0,k.jsx)(d.Z,{variant:"contained",onClick:()=>S(o.allocation._id,"done"),children:"Move to Done"}):"expired"===o.allocation.status?(0,k.jsx)(d.Z,{variant:"contained",disabled:!0,children:"Expired"}):null}),y&&(0,k.jsx)(l.Z,{children:(0,k.jsx)(g.Z,{data:o,onActionChange:o=>{Z(o)},actions:j})})]},t);var n}))})]})}),I&&(0,k.jsx)(p.Z,{open:B,close:()=>{C(null),D(!1)},type:I}),b&&(0,k.jsx)(h.Z,{open:B,close:()=>{A(null),D(!1)},doId:b})]})}var y=n(5266);const j=["RegNo","party","location","contact","rate","Date","status"];function Z(o){let{data:t,updateStatus:n,updateData:e}=o;const a=(0,y.h)(t,["registrationNumber","party","location","contact","rate","Date","status"],j);return(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(m,{data:a,header:j,isShowSerialNo:!0,isShowAction:!0,actions:["cancel"],refresh:e,onActionChange:o=>{console.log(o),"cancel"==o.action&&(console.log(o.data._id),n({truckId:"661bf9b734601df26a2d1bc3",status:"inqueue"}).then((o=>{console.log(o.message),f.Am.success(o.message),e({status:"allocated"})})).catch((o=>{console.error(o),f.Am.error("Error occured while updating")})))}})})}var w=n(2832),v=n(1113);function I(){return(0,k.jsx)(a.Z,{children:(0,k.jsx)(w.Z,{direction:"row",sx:{justifyContent:"space-between",alignItems:"center"},children:(0,k.jsx)(v.Z,{variant:"h3",color:"secondary.main",children:"Allocated Trucks"})})})}function C(){const[o,t]=(0,e.useState)([]),n=o=>{(0,x.Jr)(o).then((o=>{t(o)})).catch((o=>{console.log(o)}))};return(0,e.useEffect)((()=>{n({status:"allocated"})}),[]),(0,k.jsxs)(w.Z,{direction:"column",gap:2,children:[(0,k.jsx)(I,{}),(0,k.jsx)(Z,{data:o,updateStatus:x.Au,updateData:n})]})}}}]);