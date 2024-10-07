"use strict";(self.webpackChunkberry_free_material_react_cra=self.webpackChunkberry_free_material_react_cra||[]).push([[565],{1322:function(e,n,t){t.d(n,{$K:function(){return p},$g:function(){return k},Au:function(){return d},Dx:function(){return P},ES:function(){return W},GB:function(){return g},Gu:function(){return l},Jq:function(){return _},Jr:function(){return y},KI:function(){return T},Mg:function(){return H},Pe:function(){return f},Q1:function(){return x},RY:function(){return b},S1:function(){return C},T7:function(){return v},VW:function(){return w},Wo:function(){return I},X2:function(){return D},Xy:function(){return S},a2:function(){return m},aZ:function(){return u},cW:function(){return B},jK:function(){return Z},ji:function(){return c},kR:function(){return A},kl:function(){return h},lQ:function(){return r},oR:function(){return s},r7:function(){return i},ut:function(){return j},zE:function(){return E}});var o=t(5662);console.log(window.location.hostname);const a=o.Z.create({baseURL:"http://localhost:5000/api/",headers:{"Content-Type":"application/json"}});async function r(e){const n=await a.post("company",e);return console.log(n.data),n.data}async function s(e){console.log(e);const n=await a.delete("company/"+e,e);return console.log(n.data),n.data}async function c(e,n){console.log(n);const t=await a.patch("company/"+e,n);return console.log(t.data),t.data}async function i(e){const n=await a.post("company/getAllCompany",e);return console.log(n.data),n.data}async function l(e){const n=await a.post("truck",e);return console.log(n.data),n.data}async function u(e){const n=await a.post("truck/getAllTruck",e);return console.log(n.data),n.data}async function d(e){const n=await a.post("truck/updateTruckStatus",e);return console.log(n.data),n.data}async function p(e){console.log(e);const n=await a.delete("truck/"+e,e);return console.log(n.data),n.data}async function g(e){const n=await a.post("truck/updateTruckBookingStatus",e);return console.log(n.data),n.data}async function h(e){const n=await a.post("truck/getAllTruckBookings",e);return console.log(n.data),n.data}async function f(e){const n=await a.post("truck/addTruckToBooking",e);return console.log(n.data),n.data}async function m(e){const n=await a.post("party/getAllParty",e);return console.log(n.data),n.data}async function x(e){const n=await a.post("party",e);return console.log(n.data),n.data}async function y(e){return(await a.post("truck/getAllTruckBookings",{status:e.status})).data}async function w(e){return(await a.post("truck/getInQueueTrucks",e)).data}async function j(e){const n=await a.post("allocation/getAllocationDetails",e);return console.log(n.data),n.data}async function v(e){const n=await a.post("allocation",e);return console.log(n.data),n.data}async function Z(e){const n=await a.post("allocation/changeAllocationStatus",e);return console.log(n.data),n.data}async function k(e){const n=await a.post("user/login",e);return console.log("heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"),console.log(n),console.log(n.data),n.data}async function b(e){const n=await a.post("location/getAllLocation",e);return console.log(n.data),n.data}async function P(e){const n=await a.post("location",e);return console.log(n.data),n.data}async function S(e){const n=await a.post("doBooking/getAllDO",e);return console.log(n.data),n.data}async function B(e){const n=await a.post("doBooking",e);return console.log(n.data),n.data}async function A(e){const n=await a.post("doBooking/uploadDO",e);return console.log(n.data),n.data}async function C(e){const n=await a.post("doBooking/getAllDeliveryOrders",e);return console.log(n.data),n.data}async function I(e){const n=await a.delete("doBooking",e);return console.log(n.data),n.data}async function T(e){const n=await a.delete("doBooking/deleteDeliveryOrder/"+e);return console.log(n.data),n.data}async function D(e){const n=await a.post("driver",e);return console.log(n.data),n.data}async function E(e){const n=await a.post("driver/getAllDrivers",e);return console.log(n.data),n.data}async function _(e){const n=await a.post("driver/getCompanyDrivers",e);return console.log(n.data),n.data}async function H(e){console.log(e);const n=await a.delete("driver/"+e,e);return console.log(n.data),n.data}async function W(e,n){console.log(n);const t=await a.patch("driver/"+e,n);return console.log(t.data),t.data}a.interceptors.request.use((async e=>{const n=localStorage.getItem("token");return n?e.headers.Authorization="Bearer "+n:console.warn("Token not found in localStorage"),e}),(e=>Promise.reject(e))),a.interceptors.response.use((e=>e),(e=>(e.response&&401===e.response.status&&(console.log("Unauthorized, logging out..."),localStorage.clear(),window.location.href="/login"),Promise.reject(e))))},3565:function(e,n,t){t.r(n),t.d(n,{default:function(){return W}});var o=t(7890),a=t(9466),r=t(7313),s=t(9860),c=t(5300),i=t(9019),l=t(2832),u=t(1113),d=t(2247);var p=(0,t(7592).ZP)("div")((e=>{let{theme:n}=e;return{backgroundColor:n.palette.primary.light,minHeight:"100vh"}})),g=t(9536),h=t(3497),f=t(6417);var m=e=>{let{children:n,...t}=e;return(0,f.jsx)(h.Z,{sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1,...t,children:(0,f.jsx)(g.Z,{sx:{p:{xs:2,sm:3,xl:5}},children:n})})},x=t(1387),y=t(1550),w=t(3306),j=t(7843),v=t(5480),Z=t(1727),k=t(7131),b=t(1095),P=t(3463),S=t(9429),B=t(551),A=t(1730);const C=(0,r.forwardRef)(((e,n)=>{var t,o;let a,r,{children:s,type:c,direction:i,offset:l,scale:u}=e;switch(i){case"up":case"left":a=l,r=0;break;default:a=0,r=l}const[d,p]=(0,B.n)(a,r),[g,h]=(0,B.n)(a,r);switch(c){case"rotate":return(0,f.jsx)(A.E.div,{ref:n,animate:{rotate:360},transition:{repeat:1/0,repeatType:"loop",duration:2,repeatDelay:0},children:s});case"slide":return"up"===i||"down"===i?(0,f.jsx)(A.E.div,{ref:n,animate:{y:void 0!==g?g:""},onHoverEnd:()=>h(),onHoverStart:()=>h(),children:s}):(0,f.jsx)(A.E.div,{ref:n,animate:{x:void 0!==d?d:""},onHoverEnd:()=>p(),onHoverStart:()=>p(),children:s});default:return"number"===typeof u&&(u={hover:u,tap:u}),(0,f.jsx)(A.E.div,{ref:n,whileHover:{scale:null===(t=u)||void 0===t?void 0:t.hover},whileTap:{scale:null===(o=u)||void 0===o?void 0:o.tap},children:s})}}));C.defaultProps={type:"scale",offset:10,direction:"right",scale:{hover:1,tap:.9}};var I=C,T=t(237),D=t(2611);var E=e=>{let{adminLogin:n,...t}=e;const a=(0,s.Z)(),c=(0,o.s0)(),[i,l]=(0,r.useState)(!1),u=()=>{l(!i)},d=e=>{e.preventDefault()};return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(S.J9,{initialValues:{phone:"7518978333",password:"Y@123",submit:null},validationSchema:P.Ry().shape({phone:P.Z_().matches(/^[0-9]{10}$/,"Must be a valid 10-digit phone number").required("Phone number is required"),password:P.Z_().max(255).required("Password is required")}),onSubmit:async e=>{try{n({phone:e.phone,password:e.password}).then((e=>{console.log(e);let n="admin";e.user.companyId&&(n=e.user.companyId.companyType),localStorage.setItem("role",n),localStorage.setItem("token",e.accessToken),localStorage.setItem("user",JSON.stringify(e.user)),x.Am.success("Login Success"),c("/dashboard")})).catch((e=>{console.log(e),x.Am.error(e.response.data.msg),console.log(e)}))}catch(t){x.Am.error(t),console.error(t)}},children:e=>{let{errors:n,handleBlur:o,handleChange:r,handleSubmit:s,isSubmitting:c,touched:l,values:p}=e;return(0,f.jsxs)("form",{noValidate:!0,onSubmit:s,...t,children:[(0,f.jsxs)(y.Z,{fullWidth:!0,error:Boolean(l.phone&&n.phone),sx:{...a.typography.customInput},children:[(0,f.jsx)(w.Z,{htmlFor:"outlined-adornment-email-login",children:"Phone Number"}),(0,f.jsx)(j.Z,{id:"outlined-adornment-email-login",type:"number",value:p.phone,name:"phone",onBlur:o,onChange:r,label:"Phone Number ",inputProps:{}}),l.phone&&n.phone&&(0,f.jsx)(v.Z,{error:!0,id:"standard-weight-helper-text-email-login",children:n.phone})]}),(0,f.jsxs)(y.Z,{fullWidth:!0,error:Boolean(l.password&&n.password),sx:{...a.typography.customInput},children:[(0,f.jsx)(w.Z,{htmlFor:"outlined-adornment-password-login",children:"Password"}),(0,f.jsx)(j.Z,{id:"outlined-adornment-password-login",type:i?"text":"password",value:p.password,name:"password",onBlur:o,onChange:r,endAdornment:(0,f.jsx)(Z.Z,{position:"end",children:(0,f.jsx)(k.Z,{"aria-label":"toggle password visibility",onClick:u,onMouseDown:d,edge:"end",size:"large",children:i?(0,f.jsx)(T.Z,{}):(0,f.jsx)(D.Z,{})})}),label:"Password",inputProps:{}}),l.password&&n.password&&(0,f.jsx)(v.Z,{error:!0,id:"standard-weight-helper-text-password-login",children:n.password})]}),n.submit&&(0,f.jsx)(g.Z,{sx:{mt:3},children:(0,f.jsx)(v.Z,{error:!0,children:n.submit})}),(0,f.jsx)(g.Z,{sx:{mt:2},children:(0,f.jsx)(I,{children:(0,f.jsx)(b.Z,{disableElevation:!0,disabled:c,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Sign in"})})})]})}})})},_=t(9062),H=t(1322);var W=()=>{const e=(0,s.Z)(),n=(0,c.Z)(e.breakpoints.down("md")),t=(0,o.s0)();return(0,r.useEffect)((()=>{let e=JSON.parse(localStorage.getItem("user"));console.log(e),e&&t("/dashboard")}),[]),(0,f.jsx)(p,{children:(0,f.jsx)(i.ZP,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:(0,f.jsx)(i.ZP,{item:!0,xs:12,children:(0,f.jsx)(i.ZP,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:(0,f.jsx)(i.ZP,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:(0,f.jsx)(m,{children:(0,f.jsxs)(i.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,f.jsx)(i.ZP,{item:!0,sx:{mb:3},children:(0,f.jsx)(a.rU,{to:"#",children:(0,f.jsx)(_.Z,{})})}),(0,f.jsx)(i.ZP,{item:!0,xs:12,children:(0,f.jsx)(i.ZP,{container:!0,direction:n?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:(0,f.jsx)(i.ZP,{item:!0,children:(0,f.jsxs)(l.Z,{alignItems:"center",justifyContent:"center",spacing:1,children:[(0,f.jsx)(u.Z,{color:e.palette.secondary.main,gutterBottom:!0,variant:n?"h3":"h2",children:"Hi, Welcome Back"}),(0,f.jsx)(u.Z,{variant:"caption",fontSize:"16px",textAlign:n?"center":"inherit",children:"Enter your credentials to continue"})]})})})}),(0,f.jsx)(i.ZP,{item:!0,xs:12,children:(0,f.jsx)(E,{adminLogin:H.$g})}),(0,f.jsx)(i.ZP,{item:!0,xs:12,children:(0,f.jsx)(d.Z,{})}),(0,f.jsx)(i.ZP,{item:!0,xs:12})]})})})})})})})}}}]);