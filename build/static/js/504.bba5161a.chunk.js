"use strict";(self.webpackChunkberry_free_material_react_cra=self.webpackChunkberry_free_material_react_cra||[]).push([[504],{8999:function(e,n,o){o.d(n,{Z:function(){return Z}});var t=o(7313),a=o(3497),r=o(1629),i=o(6835),s=o(3477),c=o(4076),l=o(7478),d=o(3467),u=o(1095),f=o(9848),p=o(6167),h=o(5842),x=o(6417);function Z(e){let{data:n,header:o,isShowSerialNo:Z=!1,isShowAction:v=!1,actions:m=["Edit","Delete"],onActionChange:g,onClickAction:j,refreshData:y}=e;const[C,S]=(0,t.useState)(null),[A,w]=(0,t.useState)(null),[I,k]=(0,t.useState)(null),[b,D]=(0,t.useState)(null),[N,O]=(0,t.useState)(!1);return(0,x.jsxs)(a.Z,{children:[(0,x.jsx)(r.Z,{children:(0,x.jsxs)(i.Z,{children:[(0,x.jsx)(s.Z,{children:(0,x.jsxs)(c.Z,{children:[Z&&(0,x.jsx)(l.Z,{sx:{color:"primary.main"},children:"SLNO"}),o.map(((e,n)=>(0,x.jsx)(l.Z,{sx:{color:"primary.main"},children:e},n))),v&&(0,x.jsx)(l.Z,{sx:{color:"primary.main"},children:"Action"})]})}),(0,x.jsx)(d.Z,{children:n.map(((e,n)=>(0,x.jsxs)(c.Z,{onClick:()=>(e=>{j&&j(e)})(e._id),children:[Z&&(0,x.jsx)(l.Z,{children:n+1}),o.map(((n,o)=>{if("IMAGE"===n.toUpperCase())return(0,x.jsx)(l.Z,{children:(0,x.jsx)("img",{style:{height:"100px"},src:`${e[`${n}`]}`,alt:"img"})},o);if("allocated"!=e.status&&"ALLOCATION"===n.toUpperCase())return console.log("dfffffffffffffffffffffffffffffffffffff"),console.log(e),(0,x.jsx)(l.Z,{children:(0,x.jsx)(u.Z,{variant:"contained",onClick:()=>(e=>{console.log("select alloccccccccccccccccccccccc"),console.log(e),console.log("heeeeeeeeeeeeeeeeeeeeeeedataaaaaaaaaaaaaaaa"),S(e.truckType),w(e.date),D(e.doId),console.log(e.truckType),O(!0)})({doId:e._id,truckType:e.truckType,date:e["available from"]}),children:"Allocate"})},o);if("allocated"==e.status&&"ALLOCATION"===n.toUpperCase())return(0,x.jsx)(l.Z,{children:(0,x.jsx)(u.Z,{variant:"contained",onClick:()=>{return n=e._id,k(n),void O(!0);var n},children:"View Allocation"})},o);if("VIEW DO"===n.toUpperCase()){const n=e["view DO"]||e.deliveryOrderId&&e.deliveryOrderId.doLink;return n?(0,x.jsx)(l.Z,{children:(0,x.jsx)(u.Z,{variant:"contained",onClick:()=>window.open(n,"_blank"),children:"View File"})},o):(0,x.jsx)(l.Z,{children:(0,x.jsx)(u.Z,{variant:"contained",disabled:!0,children:"No File"})},o)}return"isHighRangeArea"!=e.status&&"ISHIGHRANGEAREA"===n.toUpperCase()?(0,x.jsx)(l.Z,{children:e[`${n}`]?"Yes":"No"},o):"STATUS"===n.toUpperCase()?(0,x.jsx)(l.Z,{children:e[`${n}`]?"Active":"Inactive"},o):(0,x.jsx)(l.Z,{children:e[`${n}`]},o)})),v&&(0,x.jsx)(l.Z,{children:(0,x.jsx)(f.Z,{data:e,onActionChange:e=>{g(e)},actions:m})})]},n)))})]})}),C&&(0,x.jsx)(p.Z,{open:N,close:()=>{S(null),console.log("heeeeeeeeeeeeeeeeeeeeeeeey"),y(),O(!1)},doId:b,date:A,type:C}),I&&(0,x.jsx)(h.Z,{open:N,close:()=>{k(null),y(),O(!1)},doId:I})]})}},5713:function(e,n,o){var t=o(7313),a=o(4469),r=o(3604),i=o(6467),s=o(1113),c=o(4631),l=o(4117),d=o(1095),u=o(6417);n.Z=e=>{let{open:n,handleClose:o,itemId:f,itemName:p,onConfirm:h,formHeading:x="cancel"}=e;const[Z,v]=(0,t.useState)("");return(0,u.jsxs)(a.Z,{open:n,onClose:o,children:[(0,u.jsxs)(r.Z,{children:[x," Item"]}),(0,u.jsxs)(i.Z,{children:[(0,u.jsxs)(s.Z,{children:["   Are you sure you want to ",x," the order for ",(0,u.jsx)("strong",{children:p}),"?"]}),(0,u.jsx)(c.Z,{autoFocus:!0,margin:"dense",label:" Reason",type:"text",fullWidth:!0,variant:"outlined",value:Z,onChange:e=>v(e.target.value)})]}),(0,u.jsxs)(l.Z,{children:[(0,u.jsx)(d.Z,{onClick:o,color:"primary",children:"back"}),(0,u.jsxs)(d.Z,{onClick:()=>{""!==Z.trim()?(h(f,Z),o()):alert("Please provide a reason for cancellation.")},color:"error",children:["Confirm ",x]})]})]})}},4504:function(e,n,o){o.r(n),o.d(n,{default:function(){return g}});var t=o(7313),a=o(7890),r=o(2832),i=o(8999),s=o(5266),c=o(1387),l=o(1322),d=o(5713),u=o(6417);const f=["truckType","rate","available from","status","allocation","view DO"];function p(e){let{partyId:n,data:o,updateData:a}=e;const[r,p]=(0,t.useState)(),[h,x]=(0,t.useState)(!1),Z=(0,s.h)(o,["truckType","rate","availableFrom","status"],f),v=()=>{a()};return console.log(r),(0,u.jsxs)(u.Fragment,{children:[r&&(0,u.jsx)(d.Z,{open:h,handleClose:()=>{x(!1),p(null)},itemId:r._id,itemName:r.deliveryOrderId.doNumber,onConfirm:(e,n)=>{console.log(`Cancelled item with ID: ${e} for reason: ${n}`),(0,l.ss)(e,{cancelReason:n}).then((()=>{c.Am.success("Successfully cancelled "),v()})).catch((e=>{var n,o;console.log(e),c.Am.error((null===(n=e.response)||void 0===n||null===(o=n.data)||void 0===o?void 0:o.message)||"Failed to cancel the item")}))},formHeading:"cancel"}),(0,u.jsx)(i.Z,{data:Z,header:f,isShowSerialNo:!0,isShowAction:!0,actions:["cancel","re-open"],onActionChange:e=>{console.log(e),"cancel"==e.action?(console.log(e.data._id),p(e.data),x(!0)):"re-open"==e.action?(0,l.xF)(e.data._id).then((()=>{c.Am.success("Successfully re opened "),v()})).catch((e=>{var n,o;console.log(e),c.Am.error((null===(n=e.response)||void 0===n||null===(o=n.data)||void 0===o?void 0:o.message)||"Failed to re open the item")})):p(),a(n)},refreshData:v})]})}var h=o(2040),x=o(1113),Z=o(1095),v=o(3497);function m(e){let{buttonClick:n,partyId:o}=e;return(0,u.jsx)(v.Z,{children:(0,u.jsxs)(r.Z,{direction:"row",sx:{justifyContent:"space-between",alignItems:"center"},children:[(0,u.jsx)(x.Z,{variant:"h3",color:"secondary.main",children:"Open DO Bookings"}),o&&(!1)((0,u.jsx)(Z.Z,{variant:"contained",startIcon:(0,u.jsx)(h.Z,{}),sx:{backgroundColor:"secondary.main"},onClick:n,children:"Open DOs"}))]})})}function g(){const[e,n]=(0,t.useState)([]);let{partyId:o}=(0,a.UO)();const i=async e=>{try{let o={status:"open"};e&&(o.partyId=e);const t=await(0,l.Xy)(o);n(t)}catch(o){console.log(o)}};return(0,t.useEffect)((()=>{i(o)}),[]),(0,u.jsxs)(r.Z,{direction:"column",gap:2,children:[(0,u.jsx)(m,{partyId:o}),(0,u.jsx)(p,{partyId:o,data:e,updateData:i})]})}},2040:function(e,n,o){var t=o(1171),a=o(6417);n.Z=(0,t.Z)((0,a.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add")},4117:function(e,n,o){o.d(n,{Z:function(){return Z}});var t=o(3366),a=o(7462),r=o(7313),i=o(4146),s=o(1921),c=o(7592),l=o(1033),d=o(7430),u=o(2298);function f(e){return(0,u.ZP)("MuiDialogActions",e)}(0,d.Z)("MuiDialogActions",["root","spacing"]);var p=o(6417);const h=["className","disableSpacing"],x=(0,c.ZP)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.root,!o.disableSpacing&&n.spacing]}})((e=>{let{ownerState:n}=e;return(0,a.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!n.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})}));var Z=r.forwardRef((function(e,n){const o=(0,l.i)({props:e,name:"MuiDialogActions"}),{className:r,disableSpacing:c=!1}=o,d=(0,t.Z)(o,h),u=(0,a.Z)({},o,{disableSpacing:c}),Z=(e=>{const{classes:n,disableSpacing:o}=e,t={root:["root",!o&&"spacing"]};return(0,s.Z)(t,f,n)})(u);return(0,p.jsx)(x,(0,a.Z)({className:(0,i.Z)(Z.root,r),ownerState:u,ref:n},d))}))},6467:function(e,n,o){o.d(n,{Z:function(){return v}});var t=o(3366),a=o(7462),r=o(7313),i=o(4146),s=o(1921),c=o(7592),l=o(1033),d=o(7430),u=o(2298);function f(e){return(0,u.ZP)("MuiDialogContent",e)}(0,d.Z)("MuiDialogContent",["root","dividers"]);var p=o(3174),h=o(6417);const x=["className","dividers"],Z=(0,c.ZP)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.root,o.dividers&&n.dividers]}})((e=>{let{theme:n,ownerState:o}=e;return(0,a.Z)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},o.dividers?{padding:"16px 24px",borderTop:`1px solid ${(n.vars||n).palette.divider}`,borderBottom:`1px solid ${(n.vars||n).palette.divider}`}:{[`.${p.Z.root} + &`]:{paddingTop:0}})}));var v=r.forwardRef((function(e,n){const o=(0,l.i)({props:e,name:"MuiDialogContent"}),{className:r,dividers:c=!1}=o,d=(0,t.Z)(o,x),u=(0,a.Z)({},o,{dividers:c}),p=(e=>{const{classes:n,dividers:o}=e,t={root:["root",o&&"dividers"]};return(0,s.Z)(t,f,n)})(u);return(0,h.jsx)(Z,(0,a.Z)({className:(0,i.Z)(p.root,r),ownerState:u,ref:n},d))}))}}]);