"use strict";(self.webpackChunkberry_free_material_react_cra=self.webpackChunkberry_free_material_react_cra||[]).push([[13],{2186:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(3365),o=n(4469),a=n(3604),i=n(2832),c=n(1113),s=n(7313),l=n(1766),d=n(6417);const u=s.forwardRef((function(e,t){return(0,d.jsx)(r.Z,{ref:t,...e})}));function p(e){let{title:t,children:n,open:r,onClose:s,...p}=e;return(0,d.jsxs)(o.Z,{...p,open:r,TransitionComponent:u,children:[(0,d.jsx)(a.Z,{children:(0,d.jsxs)(i.Z,{direction:"row",sx:{justifyContent:"space-between",alignItems:"center"},children:[(0,d.jsx)(c.Z,{variant:"h2",color:"primary.main",children:t}),(0,d.jsx)(l.Z,{sx:{cursor:"pointer"},onClick:s})]})}),n]})}},9848:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(7313),o=n(7592),a=n(7551),i=n(9601),c=n(1405),s=n(5954),l=n(8210),d=n(8790),u=n(4481),p=n(9916),h=n(712),x=n(7474),g=n(7131),f=n(6417);const m=(0,o.ZP)((e=>(0,f.jsx)(i.Z,{elevation:0,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},...e})))((e=>{let{theme:t}=e;return{"& .MuiPaper-root":{borderRadius:6,marginTop:t.spacing(1),minWidth:130,color:"light"===t.palette.mode?"rgb(55, 65, 81)":t.palette.grey[300],boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px","& .MuiMenu-list":{padding:"4px 0"},"& .MuiMenuItem-root":{"& .MuiSvgIcon-root":{fontSize:18,color:t.palette.text.secondary,marginRight:t.spacing(1.5)},"&:active":{backgroundColor:(0,a.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity)}}}}}));function y(e){let{data:t,actions:n=["Edit","Delete"],onActionChange:o}=e;const[a,i]=r.useState(null),y=Boolean(a),j=e=>{i(null),o&&o({action:e,data:t})};return(0,f.jsxs)("div",{children:[(0,f.jsx)(g.Z,{variant:"contained",onClick:e=>{i(e.currentTarget)},children:(0,f.jsx)(l.Z,{})}),(0,f.jsx)(m,{id:"demo-customized-menu",MenuListProps:{"aria-labelledby":"demo-customized-button"},anchorEl:a,open:y,onClose:j,children:n.map(((e,t)=>"ADD TO QUEUE"==e.toUpperCase()?(0,f.jsxs)(c.Z,{onClick:()=>j(e),sx:{color:"green","&:hover":{backgroundColor:"rgba(72, 113, 247, 0.1)"}},children:[(0,f.jsx)(d.Z,{style:{color:"green"}}),"Add To Queue"]},t):"ADDBOOKING"==e.toUpperCase()?(0,f.jsxs)(c.Z,{onClick:()=>j(e),sx:{color:"green","&:hover":{backgroundColor:"rgba(72, 113, 247, 0.1)"}},children:[(0,f.jsx)(d.Z,{style:{color:"green"}}),"Add TO BOOKING"]},t):"EDIT"==e.toUpperCase()?(0,f.jsxs)(c.Z,{onClick:()=>j(e),children:[(0,f.jsx)(s.Z,{}),"Edit"]},t):"DELETE"==e.toUpperCase()?(0,f.jsxs)(c.Z,{onClick:()=>j(e),sx:{color:"red","&:hover":{backgroundColor:"rgba(255, 0, 0, 0.1)"}},children:[(0,f.jsx)(u.Z,{style:{color:"red"}}),"Delete"]},t):"VIEW"==e.toUpperCase()?(0,f.jsxs)(c.Z,{onClick:()=>j(e),children:[(0,f.jsx)(p.Z,{}),"View"]},t):"CANCEL"==e.toUpperCase()?(0,f.jsxs)(c.Z,{sx:{color:"red"},onClick:()=>j(e),children:[(0,f.jsx)(h.Z,{color:"primary",style:{color:"red"}}),"Cancel"]},t):(0,f.jsxs)(c.Z,{onClick:()=>j(e),children:[(0,f.jsx)(x.Z,{}),e]},t)))})]})}},5842:function(e,t,n){var r=n(7313),o=n(1095),a=n(4469),i=n(3213),c=n(9840),s=n(8310),l=n(2247),d=n(5908),u=n(9289),p=n(7131),h=n(1113),x=n(1198),g=n(301),f=n(1322),m=n(1387),y=n(6417);const j=r.forwardRef((function(e,t){return(0,y.jsx)(g.Z,{direction:"up",ref:t,...e})}));t.Z=e=>{const[t,n]=r.useState(e.open);const[g,Z]=r.useState({}),k=()=>{n(!1),e.close()},v=e=>new Date(e).toLocaleString(),b=e=>{(0,f.ut)(e).then((e=>{Z(e),console.log(e)})).catch((e=>{console.log(e),m.Am.error(e.response.data.message)}))},C=(t,n)=>{(0,f.jK)({status:n,allocId:t}).then((t=>{console.log(t),m.Am.success("status updated successfully"),b({doBookingId:e.doId})})).catch((e=>{console.log(e),m.Am.error(e.response.data.message)}))};return(0,r.useEffect)((()=>{e.doId&&b({doBookingId:e.doId})}),[]),(0,y.jsx)(r.Fragment,{children:(0,y.jsxs)(a.Z,{fullWidth:!0,maxWidth:"md",open:t,onClose:k,TransitionComponent:j,children:[(0,y.jsx)(d.Z,{sx:{position:"relative"},children:(0,y.jsxs)(u.Z,{children:[(0,y.jsx)(p.Z,{edge:"start",color:"inherit",onClick:k,"aria-label":"close",children:(0,y.jsx)(x.Z,{})}),(0,y.jsx)(h.Z,{sx:{ml:2,flex:1,color:"white"},variant:"h3",component:"div",children:"Allocated Details"}),(0,y.jsx)(o.Z,{autoFocus:!0,color:"inherit",onClick:k,children:"Close"})]})}),(0,y.jsx)(s.Z,{children:g&&g.truckBookingId&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(c.Z,{children:[(0,y.jsx)(i.Z,{primary:g.truckBookingId.truck.name,secondary:g.truckBookingId.truck.registrationNumber}),(0,y.jsx)(i.Z,{primary:g.truckBookingId.truck.category,secondary:g.truckBookingId.truck.truckType+" FT"}),(0,y.jsx)(i.Z,{primary:"allocated on:",secondary:v(g.allocatedOn)}),(0,y.jsx)(i.Z,{primary:g.truckBookingId.truck.companyId.name,secondary:g.truckBookingId.truck.companyId.contactNumber})]},1),(0,y.jsxs)(c.Z,{children:[(0,y.jsx)(i.Z,{primary:g.truckBookingId.truck.companyId.ownerName,secondary:g.truckBookingId.truck.companyId.address}),(0,y.jsx)(i.Z,{primary:"driver: "+g.truckBookingId.truck.driverId.name,secondary:g.truckBookingId.truck.driverId.contactNumber}),(0,y.jsx)(i.Z,{primary:"Date on:",secondary:v(g.truckBookingId.availableFrom)}),(0,y.jsx)(i.Z,{primary:"Status:",secondary:g.status}),"allocated"===g.status?(0,y.jsx)(o.Z,{variant:"contained",disabled:!0,onClick:()=>C(g._id,"ongoing"),children:"Move to Live"}):"ongoing"===g.status?(0,y.jsx)(o.Z,{variant:"contained",disabled:!0,onClick:()=>C(g._id,"done"),children:"Move to Done"}):"expired"===g.status?(0,y.jsx)(o.Z,{variant:"contained",disabled:!0,children:"Expired"}):null]},2),(0,y.jsx)(l.Z,{})]})})]})})}},6167:function(e,t,n){var r=n(7313),o=n(1095),a=n(4469),i=n(3213),c=n(9840),s=n(8310),l=n(2247),d=n(5908),u=n(9289),p=n(7131),h=n(1113),x=n(1198),g=n(301),f=n(1387),m=n(1322),y=n(8372),j=n(6417);const Z=r.forwardRef((function(e,t){return(0,j.jsx)(g.Z,{direction:"up",ref:t,...e})}));t.Z=e=>{const[t,n]=r.useState(e.open);const[g,k]=r.useState([]),v=()=>{n(!1),e.close()};return(0,r.useEffect)((()=>{e.type&&(console.log(e),(e=>{console.log(e),(0,m.VW)(e).then((e=>{k(e),console.log(e)})).catch((e=>{console.log(e)}))})({status:"inqueue",type:e.type,date:e.date}))}),[]),(0,j.jsx)(r.Fragment,{children:(0,j.jsxs)(a.Z,{fullWidth:!0,maxWidth:"md",open:t,onClose:v,TransitionComponent:Z,children:[(0,j.jsx)(d.Z,{sx:{position:"relative"},children:(0,j.jsxs)(u.Z,{children:[(0,j.jsx)(p.Z,{edge:"start",color:"inherit",onClick:v,"aria-label":"close",children:(0,j.jsx)(x.Z,{})}),(0,j.jsx)(h.Z,{sx:{ml:2,flex:1,color:"white"},variant:"h3",component:"div",children:"Truck Allocation"}),(0,j.jsx)(o.Z,{autoFocus:!0,color:"inherit",onClick:v,children:"Close"})]})}),(0,j.jsxs)(s.Z,{children:[0===g.length&&(0,j.jsx)(y.Z,{sx:{display:"flex",justifyContent:"center"},children:(0,j.jsx)(h.Z,{children:"No Trucks Inqueue within the date and type"})}),g.map(((t,n)=>(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(c.Z,{children:[(0,j.jsx)(i.Z,{primary:n+1}),(0,j.jsx)(i.Z,{primary:t.truck.name,secondary:t.truck.registrationNumber}),(0,j.jsx)(i.Z,{primary:t.truck.companyId.name,secondary:t.truck.companyId.contactNumber}),(0,j.jsx)(i.Z,{primary:t.truck.category,secondary:t.truck.truckType+" FT"}),(0,j.jsx)(o.Z,{variant:"contained",onClick:()=>(t=>{if(console.log(t),console.log(e),!e.date||!e.doId)return console.log("date not found"),!1;(0,m.T7)({doBookingId:e.doId,doDate:e.date,truckBookingId:t}).then((e=>{console.log(e),f.Am.success("DO allocation successfull!"),v()})).catch((e=>{f.Am.error(e.response.data.message),console.log(e)}))})(t._id),children:"Allocate"})]},t._id),(0,j.jsx)(l.Z,{})]})))]})]})})}},1322:function(e,t,n){n.d(t,{$K:function(){return u},$g:function(){return N},AW:function(){return A},Au:function(){return d},BU:function(){return b},CE:function(){return j},Dx:function(){return E},ES:function(){return K},Et:function(){return O},GB:function(){return h},Gu:function(){return s},IB:function(){return _},Jq:function(){return V},Jr:function(){return k},K3:function(){return p},KI:function(){return q},M$:function(){return L},Mg:function(){return Y},Pe:function(){return g},Q1:function(){return m},RY:function(){return B},S1:function(){return P},T5:function(){return y},T7:function(){return w},Tj:function(){return U},VW:function(){return v},Wo:function(){return Q},X2:function(){return G},X6:function(){return Z},Xy:function(){return M},a2:function(){return f},aZ:function(){return l},cW:function(){return W},cn:function(){return T},h8:function(){return D},jK:function(){return I},ji:function(){return i},kR:function(){return $},kl:function(){return x},lQ:function(){return o},oR:function(){return a},r7:function(){return c},ss:function(){return R},ut:function(){return C},uz:function(){return S},xF:function(){return F},zE:function(){return z}});const r=n(5662).Z.create({baseURL:"http://localhost:5000/api/",headers:{"Content-Type":"application/json"}});async function o(e){return(await r.post("company",e)).data}async function a(e){return(await r.delete("company/"+e,e)).data}async function i(e,t){return(await r.patch("company/"+e,t)).data}async function c(e){return(await r.post("company/getAllCompany",e)).data}async function s(e){return(await r.post("truck",e)).data}async function l(e){return(await r.post("truck/getAllTruck",e)).data}async function d(e){return(await r.post("truck/updateTruckStatus",e)).data}async function u(e){return(await r.delete("truck/"+e,e)).data}async function p(e,t){return(await r.patch("truck/"+e,t)).data}async function h(e){return(await r.post("truck/updateTruckBookingStatus",e)).data}async function x(e){return(await r.post("truck/getAllTruckBookings",e)).data}async function g(e){return(await r.post("truck/addTruckToBooking",e)).data}async function f(e){return(await r.post("party/getAllParty",e)).data}async function m(e){return(await r.post("party",e)).data}async function y(e){return(await r.delete(`party/${e}`)).data}async function j(e,t){return(await r.post(`party/${e}`,t)).data}async function Z(e){return(await r.put(`party/updateStatus/${e}`)).data}async function k(e){return(await r.post("truck/getAllTruckBookings",{status:e.status})).data}async function v(e){return(await r.post("truck/getInQueueTrucks",e)).data}async function b(e){return(await r.post("truck/getTruckQueue",e)).data}async function C(e){return(await r.post("allocation/getAllocationDetails",e)).data}async function w(e){return(await r.post("allocation",e)).data}async function I(e){return(await r.post("allocation/changeAllocationStatus",e)).data}async function T(e){return(await r.post("user",e)).data}async function S(e){return(await r.post("user/editUser",e)).data}async function A(e){return(await r.get("user/getAllUsers"+(e?`?companyId=${e}`:""))).data}async function D(e){return(await r.delete(`user/${e}`)).data}async function N(e){const t=await r.post("user/login",e);return console.log(t),t.data}async function B(e){return(await r.post("location/getAllLocation",e)).data}async function E(e){return(await r.post("location",e)).data}async function M(e){return(await r.post("doBooking/getAllDO",e)).data}async function W(e){return(await r.post("doBooking",e)).data}async function $(e){return(await r.post("doBooking/uploadDO",e)).data}async function L(e,t){try{return(await r.put(`doBooking/updateDO/${e}`,t)).data}catch(n){throw console.error("Error updating delivery order:",n),n}}async function O(e,t){try{return(await r.post(`doBooking/cancelDO/${e}`,t)).data}catch(n){throw console.error("Error updating delivery order:",n),n}}async function R(e,t){try{return(await r.post(`doBooking/cancelDOBooking/${e}`,t)).data}catch(n){throw console.error("Error cancelling Do booking:",n),n}}async function F(e){try{return(await r.post(`doBooking/reopen-do-booking/${e}`)).data}catch(t){throw console.error("Error cancelling Do booking:",t),t}}async function _(e,t){try{return(await r.post(`allocation/cancel-allocated-booking/${e}`,t)).data}catch(n){throw console.error("Error cancelling Do booking:",n),n}}async function U(e){try{return(await r.post(`allocation/re-allocate-booking/${e}`)).data}catch(t){throw console.error("Error cancelling Do booking:",t),t}}async function P(e){return(await r.post("doBooking/getAllDeliveryOrders",e)).data}async function Q(e){return(await r.delete("doBooking",e)).data}async function q(e){return(await r.delete("doBooking/deleteDeliveryOrder/"+e)).data}async function G(e){return(await r.post("driver",e)).data}async function z(e){return(await r.post("driver/getAllDrivers",e)).data}async function V(e){return(await r.post("driver/getCompanyDrivers",e)).data}async function Y(e){return(await r.delete("driver/"+e,e)).data}async function K(e,t){return(await r.patch("driver/"+e,t)).data}r.interceptors.request.use((async e=>{const t=localStorage.getItem("token");return t?e.headers.Authorization="Bearer "+t:console.warn("Token not found in localStorage"),e}),(e=>Promise.reject(e))),r.interceptors.response.use((e=>e),(e=>(e.response&&401===e.response.status&&(console.log("Unauthorized, logging out..."),localStorage.clear(),window.location.href="/login"),Promise.reject(e))))},5266:function(e,t,n){n.d(t,{h:function(){return a}});var r=n(6031),o=n.n(r);const a=(e,t,n)=>e.map((e=>o().mapKeys(e,((e,r)=>{for(let o=0;o<n.length;o++)if(r===t[o])return n[o];return r}))))},7013:function(e,t,n){n.r(t),n.d(t,{default:function(){return H}});var r=n(7313),o=n(3497),a=n(1629),i=n(6835),c=n(3477),s=n(4076),l=n(7478),d=n(3467),u=n(1095),p=n(9848),h=n(6167),x=n(5842),g=n(658),f=n.n(g),m=n(6417);function y(e){let{data:t,header:n,isShowSerialNo:g=!1,isShowAction:y=!1,actions:j=["Edit","Delete"],onActionChange:Z,onClickAction:k,refreshData:v,addTruckBooking:b}=e;const[C,w]=(0,r.useState)(null),[I,T]=(0,r.useState)(null),[S,A]=(0,r.useState)(null),[D,N]=(0,r.useState)(null),[B,E]=(0,r.useState)(!1);return(0,m.jsxs)(o.Z,{children:[(0,m.jsx)(a.Z,{children:(0,m.jsxs)(i.Z,{children:[(0,m.jsx)(c.Z,{children:(0,m.jsxs)(s.Z,{children:[g&&(0,m.jsx)(l.Z,{sx:{color:"primary.main"},children:"SLNO"}),n.map(((e,t)=>(0,m.jsx)(l.Z,{sx:{color:"primary.main"},children:e},t))),(0,m.jsx)(l.Z,{sx:{color:"primary.main"},children:"Add To Queue"}),y&&(0,m.jsx)(l.Z,{sx:{color:"primary.main"},children:"Action"})]})}),(0,m.jsx)(d.Z,{children:t.map(((e,t)=>(0,m.jsxs)(s.Z,{onClick:()=>(e=>{k&&k(e)})(e._id),children:[g&&(0,m.jsx)(l.Z,{children:t+1}),n.map(((t,n)=>{if("IMAGE"===t.toUpperCase())return(0,m.jsx)(l.Z,{children:(0,m.jsx)("img",{style:{height:"100px"},src:`${e[`${t}`]}`,alt:"img"})},n);if("allocated"!=e.status&&"ALLOCATION"===t.toUpperCase())return console.log("dfffffffffffffffffffffffffffffffffffff"),console.log(e),(0,m.jsx)(l.Z,{children:(0,m.jsx)(u.Z,{variant:"contained",onClick:()=>(e=>{w(e.truckType),T(e.date),N(e.doId),console.log(e.truckType),E(!0)})({doId:e._id,truckType:e.truckType,date:e["available from"]}),children:"Allocate"})},n);if("allocated"==e.status&&"ALLOCATION"===t.toUpperCase())return(0,m.jsx)(l.Z,{children:(0,m.jsx)(u.Z,{variant:"contained",onClick:()=>{return t=e._id,A(t),void E(!0);var t},children:"View Allocation"})},n);if("VIEW DO"===t.toUpperCase()){const t=e["view DO"]||e.deliveryOrderId&&e.deliveryOrderId.doLink;return t?(0,m.jsx)(l.Z,{children:(0,m.jsx)(u.Z,{variant:"contained",onClick:()=>window.open(t,"_blank"),children:"View File"})},n):(0,m.jsx)(l.Z,{children:(0,m.jsx)(u.Z,{variant:"contained",disabled:!0,children:"No File"})},n)}return"isHighRangeArea"!=e.status&&"ISHIGHRANGEAREA"===t.toUpperCase()?(0,m.jsx)(l.Z,{children:e[`${t}`]?"Yes":"No"},n):"STATUS"===t.toUpperCase()?(0,m.jsx)(l.Z,{children:e[`${t}`]?"Active":"Inactive"},n):(0,m.jsx)(l.Z,{children:e[`${t}`]},n)})),(0,m.jsx)(l.Z,{children:(0,m.jsx)(u.Z,{variant:"contained",onClick:()=>(e=>{console.log("heyyyyy"),console.log(e);const t=f()(),n=f()(t).format("YYYY-MM-DD");b({truckId:e,availableFrom:n})})(e._id),children:"Add To Queue"})}),y&&(0,m.jsx)(l.Z,{children:(0,m.jsx)(p.Z,{data:e,onActionChange:e=>{Z(e)},actions:j})})]},t)))})]})}),C&&(0,m.jsx)(h.Z,{open:B,close:()=>{w(null),v(),E(!1)},doId:D,date:I,type:C}),S&&(0,m.jsx)(x.Z,{open:B,close:()=>{A(null),v(),E(!1)},doId:S})]})}var j=n(5266),Z=n(7825),k=n(2832),v=n(1550),b=n(1113),C=n(8797),w=n(1405),I=n(5480),T=n(4631),S=n(3306),A=n(5627),D=n(1387),N=n(2186),B=n(1322);function E(e){let{getTrucks:t,open:n,onClose:o,isEdit:a=!1,data:i={}}=e;const[c,s]=(0,r.useState)([]),[l,d]=(0,r.useState)([]),[p,h]=(0,r.useState)(""),{control:x,handleSubmit:g,formState:{errors:f},reset:y}=(0,A.cI)({defaultValues:a?{name:i.name,registrationNumber:i.RegNo,category:i.category,truckType:i.truckType,companyId:i.companyId,driverId:i.driverId}:""});(0,r.useEffect)((()=>{h(i.companyId),(0,B.r7)({companyTypes:["transporter","both"]}).then((e=>{d(e)})).catch((e=>{console.log(e),D.Am.error(e)}))}),[]);const j=()=>{y(),h(""),o()};return(0,r.useEffect)((()=>{p?(0,B.Jq)({companyId:p}).then((e=>{s(e)})).catch((e=>{console.log(e)})):s([])}),[p]),(0,m.jsx)(N.Z,{open:n,fullWidth:!0,onClose:j,title:(a?"Edit":"Add")+" Truck",children:(0,m.jsx)("form",{onSubmit:g((e=>{const n={name:e.name,registrationNumber:e.registrationNumber,driverId:e.driverId,category:e.category,companyId:e.companyId,truckType:e.type};a?(0,B.K3)(i._id,n).then((()=>{t(),j()})).catch((e=>{var t,n;console.error(e),D.Am.error(null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.message)})):(0,B.Gu)(n).then((()=>{t(),j()})).catch((e=>{var t,n;console.error(e),D.Am.error(null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.message)}))})),children:(0,m.jsx)(Z.Z,{children:(0,m.jsxs)(k.Z,{direction:"column",sx:{p:2},spacing:1,children:[(0,m.jsxs)(v.Z,{error:Boolean(f.companyId),children:[(0,m.jsx)(b.Z,{variant:"h5",children:"Company"}),(0,m.jsx)(A.Qr,{name:"companyId",control:x,render:e=>{let{field:t}=e;return(0,m.jsxs)(C.Z,{...t,labelId:"type-select-label",id:"type-select",value:t.value||"",onChange:e=>{t.onChange(e.target.value),h(e.target.value)},children:[(0,m.jsx)(w.Z,{value:"",children:(0,m.jsx)("em",{children:"None"})}),l.map((e=>(0,m.jsxs)(w.Z,{value:e._id,children:[e.name," Mob: ",e.contactNumber," Address: ",e.address," "]},e._id)))]})},rules:{required:"Company is required"}}),f.companyId&&(0,m.jsx)(I.Z,{children:f.companyId.message})]}),(0,m.jsx)(b.Z,{variant:"h5",children:"Truck Name"}),(0,m.jsx)(A.Qr,{name:"name",control:x,render:e=>{let{field:t}=e;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(T.Z,{...t,placeholder:"Enter Truck Name"}),f.name&&(0,m.jsx)("span",{style:{color:"#f00"},children:f.name.message})]})},rules:{required:"Truck Name is required"}}),(0,m.jsx)(b.Z,{variant:"h5",children:"Reg Number"}),(0,m.jsx)(A.Qr,{name:"registrationNumber",control:x,render:e=>{let{field:t}=e;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(T.Z,{...t,placeholder:"Eg: KL40 A 1234"}),f.registrationNumber&&(0,m.jsx)("span",{style:{color:"#f00"},children:f.registrationNumber.message})]})},rules:{required:"Reg No is required"}}),(0,m.jsxs)(v.Z,{error:Boolean(f.driverId),disabled:!p,children:[(0,m.jsx)(S.Z,{id:"driver-select-label",children:"Driver"}),(0,m.jsx)(A.Qr,{name:"driverId",control:x,render:e=>{let{field:t}=e;return(0,m.jsxs)(C.Z,{...t,labelId:"driver-select-label",id:"driver-select",label:"Driver",value:t.value||"",onChange:e=>t.onChange(e.target.value),children:[(0,m.jsx)(w.Z,{value:"",children:(0,m.jsx)("em",{children:"None"})}),c.map((e=>(0,m.jsxs)(w.Z,{value:e._id,children:[e.name," Mob: ",e.contactNumber," Type: ",e.licenceType]},e._id)))]})},rules:{required:"Driver is required"}}),f.driverId&&(0,m.jsx)(I.Z,{children:f.driverId.message})]}),!p&&(0,m.jsx)(b.Z,{variant:"body2",color:"error",children:"Please select a company first to see the drivers."}),(0,m.jsxs)(v.Z,{error:Boolean(f.category),children:[(0,m.jsx)(S.Z,{id:"type-select-label",children:"Category"}),(0,m.jsx)(A.Qr,{name:"category",control:x,defaultValue:"MULTIAXIL",render:e=>{let{field:t}=e;return(0,m.jsxs)(C.Z,{...t,labelId:"type-select-label",id:"type-select",label:"category",onChange:e=>t.onChange(e.target.value),children:[(0,m.jsx)(w.Z,{value:"MULTIAXIL",children:"MULTIAXIL"}),(0,m.jsx)(w.Z,{value:"Trailer",children:"Trailer"}),(0,m.jsx)(w.Z,{value:"DA",children:"DA"})]})},rules:{required:"Category is required"}}),f.category&&(0,m.jsx)(I.Z,{children:f.category.message})]}),(0,m.jsxs)(v.Z,{error:Boolean(f.type),children:[(0,m.jsx)(S.Z,{id:"type-select-label",children:"Type"}),(0,m.jsx)(A.Qr,{name:"type",control:x,defaultValue:20,render:e=>{let{field:t}=e;return(0,m.jsxs)(C.Z,{...t,labelId:"type-select-label",id:"type-select",label:"Type",onChange:e=>t.onChange(e.target.value),children:[(0,m.jsx)(w.Z,{value:20,children:"20 FT"}),(0,m.jsx)(w.Z,{value:40,children:"40 FT"})]})},rules:{required:"Type is required"}}),f.type&&(0,m.jsx)(I.Z,{children:f.type.message})]}),(0,m.jsx)(u.Z,{variant:"contained",type:"submit",sx:{width:"150px"},children:"Add"})]})})})})}var M=n(9536),W=n(9019),$=n(4469),L=n(4117),O=n(6467),R=n(7762),F=n(3604),_=n(7131),U=n(1198),P=n(6046),Q=n(3208),q=n(5904),G=n(57);function z(e){const[t,n]=r.useState(!1),[o,a]=r.useState(f()()),i=new Date,c=i,s=(0,G.E)(i,30),l=new Date(c),d=`${l.getFullYear()}-${String(l.getMonth()+1).padStart(2,"0")}-${String(l.getDate()).padStart(2,"0")}`,p=new Date(s),h=`${p.getFullYear()}-${String(p.getMonth()+3).padStart(2,"0")}-${String(p.getDate()).padStart(2,"0")}`,x=()=>{n(!1),e.onClose()};r.useEffect((()=>{n(e.open)}),[e]);return(0,m.jsx)(r.Fragment,{children:(0,m.jsx)(Q._,{dateAdapter:q.y,children:(0,m.jsxs)($.Z,{fullWidth:!0,maxWidth:"sm",open:t,onClose:x,children:[(0,m.jsx)(F.Z,{children:"Select Date"}),(0,m.jsx)(_.Z,{"aria-label":"close",onClick:x,sx:{position:"absolute",right:8,top:8,color:e=>e.palette.grey[500]},children:(0,m.jsx)(U.Z,{})}),(0,m.jsxs)(O.Z,{children:[(0,m.jsx)(R.Z,{children:"Select FromDate from which truck is open for booking."}),(0,m.jsx)(M.Z,{noValidate:!0,component:"form",sx:{display:"flex",flexDirection:"column",m:"auto",width:"fit-content"},children:(0,m.jsx)(v.Z,{sx:{mt:2,minWidth:120},children:(0,m.jsx)(P.M,{label:"From Date",disabled:!0,value:o,onChange:e=>a(e),minDate:f()(d),maxDate:f()(h),renderInput:e=>(0,m.jsx)(T.Z,{...e})})})})]}),(0,m.jsx)(L.Z,{children:(0,m.jsx)(u.Z,{variant:"contained",onClick:()=>{o||console.log("Please select a date");const t=f()(o).format("YYYY-MM-DD");let n=e.data._id;e.submit({truckId:n,availableFrom:t}),x()},children:"ADD TO QUEUE"})})]})})})}const V=["name","RegNo","category","truckType","company"];function Y(e){let{data:t,updateData:n,addTruckBooking:o}=e;const[a,i]=(0,r.useState)(!1),[c,s]=(0,r.useState)(!1),[l,d]=(0,r.useState)(),[u,p]=(0,r.useState)(""),[h,x]=(0,r.useState)(""),g=t.filter((e=>{const t=e.registrationNumber.toLowerCase().includes(u.toLowerCase()),n=e.companyName.toLowerCase().includes(h.toLowerCase());return t&&n})),f=(0,j.h)(g,["name","registrationNumber","category","truckType","companyName"],V),Z="admin"===localStorage.getItem("role");return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(M.Z,{sx:{mb:2},children:(0,m.jsxs)(W.ZP,{container:!0,spacing:2,children:[(0,m.jsx)(W.ZP,{item:!0,xs:6,md:4,children:(0,m.jsx)(T.Z,{label:"Search Registration Number",variant:"outlined",size:"small",fullWidth:!0,value:u,onChange:e=>p(e.target.value)})}),Z&&(0,m.jsx)(W.ZP,{item:!0,xs:6,md:4,children:(0,m.jsx)(T.Z,{label:"Search Company",variant:"outlined",size:"small",fullWidth:!0,value:h,onChange:e=>x(e.target.value)})})]})}),a&&(0,m.jsx)(E,{getTrucks:n,open:a,onClose:()=>{n(),i(!1)},data:l,isEdit:!0}),(0,m.jsx)(z,{open:c,onClose:()=>{s(!1)},submit:o,data:l}),(0,m.jsx)(y,{data:f,header:V,isShowSerialNo:!0,isShowAction:!0,actions:Z?["Add To Queue","Edit","delete"]:["Add To Queue","Edit"],onActionChange:async e=>{console.log(e),"delete"==e.action?(console.log(e.data._id),d(e.data),(0,B.$K)(e.data._id).then((()=>{n()})).catch((e=>{console.error(e),D.Am.error(e.response.data.message)}))):"Add To Queue"==e.action?(d(e.data),s(!0),console.log("add to booking"),console.log(e.data._id)):"Edit"==e.action?(console.log("Edit"),i(!0),d(e.data)):d()},addTruckBooking:o})]})}var K=n(2040);function X(e){let{buttonClick:t}=e;const n="admin"===localStorage.getItem("role");return(0,m.jsx)(o.Z,{children:(0,m.jsxs)(k.Z,{direction:"row",sx:{justifyContent:"space-between",alignItems:"center"},children:[(0,m.jsx)(b.Z,{variant:"h3",color:"secondary.main",children:"Manage Trucks"}),n&&(0,m.jsx)(u.Z,{variant:"contained",startIcon:(0,m.jsx)(K.Z,{}),sx:{backgroundColor:"secondary.main"},onClick:t,children:"Add Truck"})]})})}function H(){const[e,t]=(0,r.useState)(!1),[n,o]=(0,r.useState)([]),a=()=>{(0,B.aZ)().then((e=>{o(e)})).catch((e=>{console.log(e)}))};return(0,r.useEffect)((()=>{a()}),[]),(0,m.jsxs)(k.Z,{direction:"column",gap:2,children:[(0,m.jsx)(E,{open:e,getTrucks:a,onClose:()=>{t(!1)}}),(0,m.jsx)(X,{buttonClick:()=>t(!0)}),(0,m.jsx)(Y,{data:n,updateData:a,addTruckBooking:e=>{console.log("heeeeeeeeeee"),(0,B.Pe)({truckId:e.truckId,availableFrom:e.availableFrom}).then((()=>{D.Am.success("Truck Added to Queue")})).catch((e=>{console.log(e),D.Am.error(e.response.data.message)}))}})]})}},2040:function(e,t,n){var r=n(1171),o=n(6417);t.Z=(0,r.Z)((0,o.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add")},1766:function(e,t,n){var r=n(1171),o=n(6417);t.Z=(0,r.Z)((0,o.jsx)("path",{d:"M18.3 5.71a.9959.9959 0 0 0-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"}),"CloseRounded")},7825:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(3366),o=n(7462),a=n(7313),i=n(4146),c=n(2298),s=n(1921),l=n(8831),d=n(4614),u=n(6694),p=n(1821),h=n(6417);const x=["className","component","disableGutters","fixed","maxWidth","classes"],g=(0,p.Z)(),f=(0,u.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`maxWidth${(0,l.Z)(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),m=e=>(0,d.Z)({props:e,name:"MuiContainer",defaultTheme:g}),y=(e,t)=>{const{classes:n,fixed:r,disableGutters:o,maxWidth:a}=e,i={root:["root",a&&`maxWidth${(0,l.Z)(String(a))}`,r&&"fixed",o&&"disableGutters"]};return(0,s.Z)(i,(e=>(0,c.ZP)(t,e)),n)};var j=n(1615),Z=n(7592),k=n(1033);const v=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{createStyledComponent:t=f,useThemeProps:n=m,componentName:c="MuiContainer"}=e,s=t((e=>{let{theme:t,ownerState:n}=e;return(0,o.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!n.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}})}),(e=>{let{theme:t,ownerState:n}=e;return n.fixed&&Object.keys(t.breakpoints.values).reduce(((e,n)=>{const r=n,o=t.breakpoints.values[r];return 0!==o&&(e[t.breakpoints.up(r)]={maxWidth:`${o}${t.breakpoints.unit}`}),e}),{})}),(e=>{let{theme:t,ownerState:n}=e;return(0,o.Z)({},"xs"===n.maxWidth&&{[t.breakpoints.up("xs")]:{maxWidth:Math.max(t.breakpoints.values.xs,444)}},n.maxWidth&&"xs"!==n.maxWidth&&{[t.breakpoints.up(n.maxWidth)]:{maxWidth:`${t.breakpoints.values[n.maxWidth]}${t.breakpoints.unit}`}})})),l=a.forwardRef((function(e,t){const a=n(e),{className:l,component:d="div",disableGutters:u=!1,fixed:p=!1,maxWidth:g="lg"}=a,f=(0,r.Z)(a,x),m=(0,o.Z)({},a,{component:d,disableGutters:u,fixed:p,maxWidth:g}),j=y(m,c);return(0,h.jsx)(s,(0,o.Z)({as:d,ownerState:m,className:(0,i.Z)(j.root,l),ref:t},f))}));return l}({createStyledComponent:(0,Z.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`maxWidth${(0,j.Z)(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,k.i)({props:e,name:"MuiContainer"})});var b=v},7762:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(3366),o=n(7462),a=n(7313),i=n(4146),c=n(1921),s=n(7592),l=n(3727),d=n(1033),u=n(1113),p=n(7430),h=n(2298);function x(e){return(0,h.ZP)("MuiDialogContentText",e)}(0,p.Z)("MuiDialogContentText",["root"]);var g=n(6417);const f=["children","className"],m=(0,s.ZP)(u.Z,{shouldForwardProp:e=>(0,l.Z)(e)||"classes"===e,name:"MuiDialogContentText",slot:"Root",overridesResolver:(e,t)=>t.root})({});var y=a.forwardRef((function(e,t){const n=(0,d.i)({props:e,name:"MuiDialogContentText"}),{className:a}=n,s=(0,r.Z)(n,f),l=(e=>{const{classes:t}=e,n=(0,c.Z)({root:["root"]},x,t);return(0,o.Z)({},t,n)})(s);return(0,g.jsx)(m,(0,o.Z)({component:"p",variant:"body1",color:"text.secondary",ref:t,ownerState:s,className:(0,i.Z)(l.root,a)},n,{classes:l}))}))},57:function(e,t,n){function r(e){const t=Object.prototype.toString.call(e);return e instanceof Date||"object"===typeof e&&"[object Date]"===t?new e.constructor(+e):"number"===typeof e||"[object Number]"===t||"string"===typeof e||"[object String]"===t?new Date(e):new Date(NaN)}n.d(t,{E:function(){return a}});function o(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function a(e,t){const n=r(e);return isNaN(t)?o(e,NaN):t?(n.setDate(n.getDate()+t),n):n}}}]);