"use strict";(self.webpackChunkberry_free_material_react_cra=self.webpackChunkberry_free_material_react_cra||[]).push([[285],{2186:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(3365),a=r(4469),o=r(3604),s=r(2832),i=r(1113),l=r(7313),c=r(1766),d=r(6417);const u=l.forwardRef((function(e,t){return(0,d.jsx)(n.Z,{ref:t,...e})}));function h(e){let{title:t,children:r,open:n,onClose:l,...h}=e;return(0,d.jsxs)(a.Z,{...h,open:n,TransitionComponent:u,children:[(0,d.jsx)(o.Z,{children:(0,d.jsxs)(s.Z,{direction:"row",sx:{justifyContent:"space-between",alignItems:"center"},children:[(0,d.jsx)(i.Z,{variant:"h2",color:"primary.main",children:t}),(0,d.jsx)(c.Z,{sx:{cursor:"pointer"},onClick:l})]})}),r]})}},8999:function(e,t,r){r.d(t,{Z:function(){return f}});var n=r(7313),a=r(3497),o=r(1629),s=r(6835),i=r(3477),l=r(4076),c=r(7478),d=r(3467),u=r(1095),h=r(9848),x=r(6167),m=r(5842),p=r(6417);function f(e){let{data:t,header:r,isShowSerialNo:f=!1,isShowAction:g=!1,actions:j=["Edit","Delete"],onActionChange:Z,onClickAction:b,refreshData:v}=e;const[y,C]=(0,n.useState)(null),[k,S]=(0,n.useState)(null),[T,A]=(0,n.useState)(null),[N,w]=(0,n.useState)(null),[D,I]=(0,n.useState)(!1);return(0,p.jsxs)(a.Z,{children:[(0,p.jsx)(o.Z,{children:(0,p.jsxs)(s.Z,{children:[(0,p.jsx)(i.Z,{children:(0,p.jsxs)(l.Z,{children:[f&&(0,p.jsx)(c.Z,{sx:{color:"primary.main"},children:"SLNO"}),r.map(((e,t)=>(0,p.jsx)(c.Z,{sx:{color:"primary.main"},children:e},t))),g&&(0,p.jsx)(c.Z,{sx:{color:"primary.main"},children:"Action"})]})}),(0,p.jsx)(d.Z,{children:t.map(((e,t)=>(0,p.jsxs)(l.Z,{onClick:()=>(e=>{b&&b(e)})(e._id),children:[f&&(0,p.jsx)(c.Z,{children:t+1}),r.map(((t,r)=>{if("IMAGE"===t.toUpperCase())return(0,p.jsx)(c.Z,{children:(0,p.jsx)("img",{style:{height:"100px"},src:`${e[`${t}`]}`,alt:"img"})},r);if("allocated"!=e.status&&"ALLOCATION"===t.toUpperCase())return console.log("dfffffffffffffffffffffffffffffffffffff"),console.log(e),(0,p.jsx)(c.Z,{children:(0,p.jsx)(u.Z,{variant:"contained",onClick:()=>(e=>{console.log("select alloccccccccccccccccccccccc"),console.log(e),console.log("heeeeeeeeeeeeeeeeeeeeeeedataaaaaaaaaaaaaaaa"),C(e.truckType),S(e.date),w(e.doId),console.log(e.truckType),I(!0)})({doId:e._id,truckType:e.truckType,date:e["available from"]}),children:"Allocate"})},r);if("allocated"==e.status&&"ALLOCATION"===t.toUpperCase())return(0,p.jsx)(c.Z,{children:(0,p.jsx)(u.Z,{variant:"contained",onClick:()=>{return t=e._id,A(t),void I(!0);var t},children:"View Allocation"})},r);if("VIEW DO"===t.toUpperCase()){const t=e["view DO"]||e.deliveryOrderId&&e.deliveryOrderId.doLink;return t?(0,p.jsx)(c.Z,{children:(0,p.jsx)(u.Z,{variant:"contained",onClick:()=>window.open(t,"_blank"),children:"View File"})},r):(0,p.jsx)(c.Z,{children:(0,p.jsx)(u.Z,{variant:"contained",disabled:!0,children:"No File"})},r)}return"isHighRangeArea"!=e.status&&"ISHIGHRANGEAREA"===t.toUpperCase()?(0,p.jsx)(c.Z,{children:e[`${t}`]?"Yes":"No"},r):"STATUS"===t.toUpperCase()?(0,p.jsx)(c.Z,{children:e[`${t}`]?"Active":"Inactive"},r):(0,p.jsx)(c.Z,{children:e[`${t}`]},r)})),g&&(0,p.jsx)(c.Z,{children:(0,p.jsx)(h.Z,{data:e,onActionChange:e=>{Z(e)},actions:j})})]},t)))})]})}),y&&(0,p.jsx)(x.Z,{open:D,close:()=>{C(null),console.log("heeeeeeeeeeeeeeeeeeeeeeeey"),v(),I(!1)},doId:N,date:k,type:y}),T&&(0,p.jsx)(m.Z,{open:D,close:()=>{A(null),v(),I(!1)},doId:T})]})}},5285:function(e,t,r){r.r(t),r.d(t,{default:function(){return O}});var n=r(7313),a=r(8999),o=r(5266),s=r(7825),i=r(2832),l=r(1550),c=r(3306),d=r(4256),u=r(1405),h=r(5480),x=r(1113),m=r(4631),p=r(1095),f=r(5627),g=r(1387),j=r(2186),Z=r(1322),b=r(6417);function v(e){let{getTrucks:t,open:r,onClose:a,isEdit:o=!1,data:v={}}=e;const[y,C]=(0,n.useState)([]),[k,S]=(0,n.useState)([]),[T,A]=(0,n.useState)(""),{control:N,handleSubmit:w,formState:{errors:D},reset:I}=(0,f.cI)({defaultValues:o?{name:v.name,registrationNumber:v.RegNo,category:v.category,truckType:v.truckType}:""});(0,n.useEffect)((()=>{(0,Z.r7)({companyTypes:["transporter","both"]}).then((e=>{console.log(e),S(e)})).catch((e=>{console.log(e),g.Am.error(e)}))}),[]);const M=()=>{I(),A(""),a()};return(0,n.useEffect)((()=>{T?(0,Z.Jq)({companyId:T}).then((e=>{console.log(e),C(e)})).catch((e=>{console.log(e)})):C([])}),[T]),(0,b.jsx)(j.Z,{open:r,fullWidth:!0,onClose:M,title:(o?"Edit":"Add")+" Truck",children:(0,b.jsx)("form",{onSubmit:w((e=>{console.log(e),(0,Z.Gu)({name:e.name,registrationNumber:e.registrationNumber,driverId:e.driver,category:e.category,companyId:e.company,truckType:e.type}).then((e=>{console.log(e),t(),M()})).catch((e=>{console.error(e),g.Am.error(e)}))})),children:(0,b.jsx)(s.Z,{children:(0,b.jsxs)(i.Z,{direction:"column",sx:{p:2},spacing:1,children:[(0,b.jsxs)(l.Z,{error:Boolean(D.driver),children:[(0,b.jsx)(c.Z,{id:"type-select-label",children:"Company"}),(0,b.jsx)(f.Qr,{name:"company",control:N,render:e=>{let{field:t}=e;return(0,b.jsxs)(d.Z,{...t,labelId:"type-select-label",id:"type-select",label:"company",value:t.value||"",onChange:e=>{t.onChange(e.target.value),A(e.target.value)},children:[(0,b.jsx)(u.Z,{value:"",children:(0,b.jsx)("em",{children:"None"})}),k.map((e=>(0,b.jsxs)(u.Z,{value:e._id,children:[e.name," Mob: ",e.contactNumber," Address: ",e.address," "]},e._id)))]})},rules:{required:"Company is required"}}),D.company&&(0,b.jsx)(h.Z,{children:D.company.message})]}),(0,b.jsx)(x.Z,{variant:"h5",children:"Truck Name"}),(0,b.jsx)(f.Qr,{name:"name",control:N,render:e=>{let{field:t}=e;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(m.Z,{...t,placeholder:"Enter Truck Name"}),D.name&&(0,b.jsx)("span",{style:{color:"#f00"},children:D.name.message})]})},rules:{required:"Truck Name is required"}}),(0,b.jsx)(x.Z,{variant:"h5",children:"Reg Number"}),(0,b.jsx)(f.Qr,{name:"registrationNumber",control:N,render:e=>{let{field:t}=e;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(m.Z,{...t,placeholder:"Eg: KL40 A 1234"}),D.registrationNumber&&(0,b.jsx)("span",{style:{color:"#f00"},children:D.registrationNumber.message})]})},rules:{required:"Reg No is required"}}),(0,b.jsxs)(l.Z,{error:Boolean(D.driver),disabled:!T,children:[(0,b.jsx)(c.Z,{id:"driver-select-label",children:"Driver"}),(0,b.jsx)(f.Qr,{name:"driver",control:N,render:e=>{let{field:t}=e;return(0,b.jsxs)(d.Z,{...t,labelId:"driver-select-label",id:"driver-select",label:"Driver",value:t.value||"",onChange:e=>t.onChange(e.target.value),children:[(0,b.jsx)(u.Z,{value:"",children:(0,b.jsx)("em",{children:"None"})}),y.map((e=>(0,b.jsxs)(u.Z,{value:e._id,children:[e.name," Mob: ",e.contactNumber," Type: ",e.licenceType]},e._id)))]})},rules:{required:"Driver is required"}}),D.driver&&(0,b.jsx)(h.Z,{children:D.driver.message})]}),!T&&(0,b.jsx)(x.Z,{variant:"body2",color:"error",children:"Please select a company first to see the drivers."}),(0,b.jsxs)(l.Z,{error:Boolean(D.category),children:[(0,b.jsx)(c.Z,{id:"type-select-label",children:"Category"}),(0,b.jsx)(f.Qr,{name:"category",control:N,defaultValue:"MULTIAXIL",render:e=>{let{field:t}=e;return(0,b.jsxs)(d.Z,{...t,labelId:"type-select-label",id:"type-select",label:"category",onChange:e=>t.onChange(e.target.value),children:[(0,b.jsx)(u.Z,{value:"MULTIAXIL",children:"MULTIAXIL"}),(0,b.jsx)(u.Z,{value:"Trailer",children:"Trailer"}),(0,b.jsx)(u.Z,{value:"DA",children:"DA"})]})},rules:{required:"Category is required"}}),D.category&&(0,b.jsx)(h.Z,{children:D.category.message})]}),(0,b.jsxs)(l.Z,{error:Boolean(D.type),children:[(0,b.jsx)(c.Z,{id:"type-select-label",children:"Type"}),(0,b.jsx)(f.Qr,{name:"type",control:N,defaultValue:20,render:e=>{let{field:t}=e;return(0,b.jsxs)(d.Z,{...t,labelId:"type-select-label",id:"type-select",label:"Type",onChange:e=>t.onChange(e.target.value),children:[(0,b.jsx)(u.Z,{value:20,children:"20 FT"}),(0,b.jsx)(u.Z,{value:40,children:"40 FT"})]})},rules:{required:"Type is required"}}),D.type&&(0,b.jsx)(h.Z,{children:D.type.message})]}),(0,b.jsx)(p.Z,{variant:"contained",type:"submit",sx:{width:"150px"},children:"Add"})]})})})})}var y=r(9536),C=r(4469),k=r(4117),S=r(6467),T=r(7762),A=r(3604),N=r(7131),w=r(1198),D=r(6046),I=r(3208),M=r(5904),W=r(57),E=r(658),_=r.n(E);function L(e){const[t,r]=n.useState(!1),[a,o]=n.useState(null),s=new Date,i=s,c=(0,W.E)(s,30),d=new Date(i),u=`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`,h=new Date(c),x=`${h.getFullYear()}-${String(h.getMonth()+3).padStart(2,"0")}-${String(h.getDate()).padStart(2,"0")}`,f=()=>{r(!1),e.onClose()};n.useEffect((()=>{r(e.open)}),[e]);return(0,b.jsx)(n.Fragment,{children:(0,b.jsx)(I._,{dateAdapter:M.y,children:(0,b.jsxs)(C.Z,{fullWidth:!0,maxWidth:"sm",open:t,onClose:f,children:[(0,b.jsx)(A.Z,{children:"Select Date"}),(0,b.jsx)(N.Z,{"aria-label":"close",onClick:f,sx:{position:"absolute",right:8,top:8,color:e=>e.palette.grey[500]},children:(0,b.jsx)(w.Z,{})}),(0,b.jsxs)(S.Z,{children:[(0,b.jsx)(T.Z,{children:"Select FromDate from which truck is open for booking."}),(0,b.jsx)(y.Z,{noValidate:!0,component:"form",sx:{display:"flex",flexDirection:"column",m:"auto",width:"fit-content"},children:(0,b.jsx)(l.Z,{sx:{mt:2,minWidth:120},children:(0,b.jsx)(D.M,{label:"From Date",value:a,onChange:e=>o(e),minDate:_()(u),maxDate:_()(x),renderInput:e=>(0,b.jsx)(m.Z,{...e})})})})]}),(0,b.jsx)(k.Z,{children:(0,b.jsx)(p.Z,{variant:"contained",onClick:()=>{a||console.log("Please select a date");const t=_()(a).format("YYYY-MM-DD");console.log(t),console.log(a),console.log(e.data);let r=e.data._id;e.submit({truckId:r,availableFrom:t}),f()},children:"ADD TO QUEUE"})})]})})})}const R=["name","RegNo","category","truckType"];function $(e){let{data:t,updateData:r,addTruckBooking:s}=e;const[i,l]=(0,n.useState)(!1),[c,d]=(0,n.useState)(!1),[u,h]=(0,n.useState)(),x=(0,o.h)(t,["name","registrationNumber","category","truckType"],R),m="admin"===localStorage.getItem("role");return(0,b.jsxs)(b.Fragment,{children:[i&&(0,b.jsx)(v,{open:i,onClose:()=>{l(!1)},data:u,isEdit:!0}),(0,b.jsx)(L,{open:c,onClose:()=>{d(!1)},submit:s,data:u}),(0,b.jsx)(a.Z,{data:x,header:R,isShowSerialNo:!0,isShowAction:!0,actions:m?["Add To Queue","Edit","delete"]:["Add To Queue"],onActionChange:async e=>{console.log(e),"delete"==e.action?(console.log(e.data._id),h(e.data),(0,Z.$K)(e.data._id).then((()=>{r()})).catch((e=>{console.error(e),g.Am.error(e.response.data.message)}))):"Add To Queue"==e.action?(h(e.data),d(!0),console.log("add to booking"),console.log(e.data._id)):"Edit"==e.action?(console.log("Edit"),l(!0),h(e.data)):h()}})]})}var F=r(2040),G=r(3497);function q(e){let{buttonClick:t}=e;const r="admin"===localStorage.getItem("role");return(0,b.jsx)(G.Z,{children:(0,b.jsxs)(i.Z,{direction:"row",sx:{justifyContent:"space-between",alignItems:"center"},children:[(0,b.jsx)(x.Z,{variant:"h3",color:"secondary.main",children:"Manage Trucks"}),r&&(0,b.jsx)(p.Z,{variant:"contained",startIcon:(0,b.jsx)(F.Z,{}),sx:{backgroundColor:"secondary.main"},onClick:t,children:"Add Truck"})]})})}function O(){const[e,t]=(0,n.useState)(!1),[r,a]=(0,n.useState)([]),o=()=>{(0,Z.aZ)().then((e=>{a(e)})).catch((e=>{console.log(e)}))};return(0,n.useEffect)((()=>{o()}),[]),(0,b.jsxs)(i.Z,{direction:"column",gap:2,children:[(0,b.jsx)(v,{open:e,getTrucks:o,onClose:()=>{t(!1)}}),(0,b.jsx)(q,{buttonClick:()=>t(!0)}),(0,b.jsx)($,{data:r,updateData:o,addTruckBooking:e=>{(0,Z.Pe)({truckId:e.truckId,availableFrom:e.availableFrom}).then((()=>{g.Am.success("Truck Added to Queue")})).catch((e=>{console.log(e),g.Am.error(e.response.data.message)}))}})]})}},2040:function(e,t,r){var n=r(1171),a=r(6417);t.Z=(0,n.Z)((0,a.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add")},1766:function(e,t,r){var n=r(1171),a=r(6417);t.Z=(0,n.Z)((0,a.jsx)("path",{d:"M18.3 5.71a.9959.9959 0 0 0-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"}),"CloseRounded")},7825:function(e,t,r){r.d(t,{Z:function(){return C}});var n=r(3366),a=r(7462),o=r(7313),s=r(4146),i=r(2298),l=r(1921),c=r(8831),d=r(4614),u=r(6694),h=r(1821),x=r(6417);const m=["className","component","disableGutters","fixed","maxWidth","classes"],p=(0,h.Z)(),f=(0,u.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`maxWidth${(0,c.Z)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),g=e=>(0,d.Z)({props:e,name:"MuiContainer",defaultTheme:p}),j=(e,t)=>{const{classes:r,fixed:n,disableGutters:a,maxWidth:o}=e,s={root:["root",o&&`maxWidth${(0,c.Z)(String(o))}`,n&&"fixed",a&&"disableGutters"]};return(0,l.Z)(s,(e=>(0,i.ZP)(t,e)),r)};var Z=r(1615),b=r(7592),v=r(1033);const y=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{createStyledComponent:t=f,useThemeProps:r=g,componentName:i="MuiContainer"}=e,l=t((e=>{let{theme:t,ownerState:r}=e;return(0,a.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!r.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}})}),(e=>{let{theme:t,ownerState:r}=e;return r.fixed&&Object.keys(t.breakpoints.values).reduce(((e,r)=>{const n=r,a=t.breakpoints.values[n];return 0!==a&&(e[t.breakpoints.up(n)]={maxWidth:`${a}${t.breakpoints.unit}`}),e}),{})}),(e=>{let{theme:t,ownerState:r}=e;return(0,a.Z)({},"xs"===r.maxWidth&&{[t.breakpoints.up("xs")]:{maxWidth:Math.max(t.breakpoints.values.xs,444)}},r.maxWidth&&"xs"!==r.maxWidth&&{[t.breakpoints.up(r.maxWidth)]:{maxWidth:`${t.breakpoints.values[r.maxWidth]}${t.breakpoints.unit}`}})})),c=o.forwardRef((function(e,t){const o=r(e),{className:c,component:d="div",disableGutters:u=!1,fixed:h=!1,maxWidth:p="lg"}=o,f=(0,n.Z)(o,m),g=(0,a.Z)({},o,{component:d,disableGutters:u,fixed:h,maxWidth:p}),Z=j(g,i);return(0,x.jsx)(l,(0,a.Z)({as:d,ownerState:g,className:(0,s.Z)(Z.root,c),ref:t},f))}));return c}({createStyledComponent:(0,b.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`maxWidth${(0,Z.Z)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,v.i)({props:e,name:"MuiContainer"})});var C=y},7762:function(e,t,r){r.d(t,{Z:function(){return j}});var n=r(3366),a=r(7462),o=r(7313),s=r(4146),i=r(1921),l=r(7592),c=r(3727),d=r(1033),u=r(1113),h=r(7430),x=r(2298);function m(e){return(0,x.ZP)("MuiDialogContentText",e)}(0,h.Z)("MuiDialogContentText",["root"]);var p=r(6417);const f=["children","className"],g=(0,l.ZP)(u.Z,{shouldForwardProp:e=>(0,c.Z)(e)||"classes"===e,name:"MuiDialogContentText",slot:"Root",overridesResolver:(e,t)=>t.root})({});var j=o.forwardRef((function(e,t){const r=(0,d.i)({props:e,name:"MuiDialogContentText"}),{className:o}=r,l=(0,n.Z)(r,f),c=(e=>{const{classes:t}=e,r=(0,i.Z)({root:["root"]},m,t);return(0,a.Z)({},t,r)})(l);return(0,p.jsx)(g,(0,a.Z)({component:"p",variant:"body1",color:"text.secondary",ref:t,ownerState:l,className:(0,s.Z)(c.root,o)},r,{classes:c}))}))},57:function(e,t,r){function n(e){const t=Object.prototype.toString.call(e);return e instanceof Date||"object"===typeof e&&"[object Date]"===t?new e.constructor(+e):"number"===typeof e||"[object Number]"===t||"string"===typeof e||"[object String]"===t?new Date(e):new Date(NaN)}r.d(t,{E:function(){return o}});function a(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function o(e,t){const r=n(e);return isNaN(t)?a(e,NaN):t?(r.setDate(r.getDate()+t),r):r}}}]);