"use strict";(self.webpackChunkberry_free_material_react_cra=self.webpackChunkberry_free_material_react_cra||[]).push([[504],{5713:function(e,t,o){var n=o(7313),r=o(4469),a=o(3604),s=o(6467),i=o(1113),l=o(4631),c=o(4117),d=o(1095),u=o(6417);t.Z=e=>{let{open:t,handleClose:o,itemId:p,itemName:v,onConfirm:f,formHeading:m="cancel"}=e;const[g,h]=(0,n.useState)("");return(0,u.jsxs)(r.Z,{open:t,onClose:o,children:[(0,u.jsxs)(a.Z,{children:[m," Item"]}),(0,u.jsxs)(s.Z,{children:[(0,u.jsxs)(i.Z,{children:["   Are you sure you want to ",m," the order for ",(0,u.jsx)("strong",{children:v}),"?"]}),(0,u.jsx)(l.Z,{autoFocus:!0,margin:"dense",label:" Reason",type:"text",fullWidth:!0,variant:"outlined",value:g,onChange:e=>h(e.target.value)})]}),(0,u.jsxs)(c.Z,{children:[(0,u.jsx)(d.Z,{onClick:o,color:"primary",children:"back"}),(0,u.jsxs)(d.Z,{onClick:()=>{""!==g.trim()?(f(p,g),o()):alert("Please provide a reason for cancellation.")},color:"error",children:["Confirm ",m]})]})]})}},4504:function(e,t,o){o.r(t),o.d(t,{default:function(){return x}});var n=o(7313),r=o(7890),a=o(2832),s=o(8999),i=o(5266),l=o(1387),c=o(1322),d=o(5713),u=o(6417);const p=["truckType","rate","available from","status","allocation","view DO"];function v(e){let{partyId:t,data:o,updateData:r}=e;const[a,v]=(0,n.useState)(),[f,m]=(0,n.useState)(!1),g=(0,i.h)(o,["truckType","rate","availableFrom","status"],p),h=()=>{r()};return console.log(a),(0,u.jsxs)(u.Fragment,{children:[a&&(0,u.jsx)(d.Z,{open:f,handleClose:()=>{m(!1),v(null)},itemId:a._id,itemName:a.deliveryOrderId.doNumber,onConfirm:(e,t)=>{console.log(`Cancelled item with ID: ${e} for reason: ${t}`),(0,c.ss)(e,{cancelReason:t}).then((()=>{l.Am.success("Successfully cancelled "),h()})).catch((e=>{var t,o;console.log(e),l.Am.error((null===(t=e.response)||void 0===t||null===(o=t.data)||void 0===o?void 0:o.message)||"Failed to cancel the item")}))},formHeading:"cancel"}),(0,u.jsx)(s.Z,{data:g,header:p,isShowSerialNo:!0,isShowAction:!0,actions:["cancel","re-open"],onActionChange:e=>{console.log(e),"cancel"==e.action?(console.log(e.data._id),v(e.data),m(!0)):"re-open"==e.action?(0,c.xF)(e.data._id).then((()=>{l.Am.success("Successfully re opened "),h()})).catch((e=>{var t,o;console.log(e),l.Am.error((null===(t=e.response)||void 0===t||null===(o=t.data)||void 0===o?void 0:o.message)||"Failed to re open the item")})):v(),r(t)},refreshData:h})]})}var f=o(2040),m=o(1113),g=o(1095),h=o(3497);function Z(e){let{buttonClick:t,partyId:o}=e;return(0,u.jsx)(h.Z,{children:(0,u.jsxs)(a.Z,{direction:"row",sx:{justifyContent:"space-between",alignItems:"center"},children:[(0,u.jsx)(m.Z,{variant:"h3",color:"secondary.main",children:"Open DO Bookings"}),o&&(!1)((0,u.jsx)(g.Z,{variant:"contained",startIcon:(0,u.jsx)(f.Z,{}),sx:{backgroundColor:"secondary.main"},onClick:t,children:"Open DOs"}))]})})}function x(){const[e,t]=(0,n.useState)([]);let{partyId:o}=(0,r.UO)();const s=async e=>{try{let o={status:"open"};e&&(o.partyId=e);const n=await(0,c.Xy)(o);t(n)}catch(o){console.log(o)}};return(0,n.useEffect)((()=>{s(o)}),[]),(0,u.jsxs)(a.Z,{direction:"column",gap:2,children:[(0,u.jsx)(Z,{partyId:o}),(0,u.jsx)(v,{partyId:o,data:e,updateData:s})]})}},2040:function(e,t,o){var n=o(1171),r=o(6417);t.Z=(0,n.Z)((0,r.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add")},4117:function(e,t,o){o.d(t,{Z:function(){return g}});var n=o(3366),r=o(7462),a=o(7313),s=o(4146),i=o(1921),l=o(7592),c=o(1033),d=o(7430),u=o(2298);function p(e){return(0,u.ZP)("MuiDialogActions",e)}(0,d.Z)("MuiDialogActions",["root","spacing"]);var v=o(6417);const f=["className","disableSpacing"],m=(0,l.ZP)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.disableSpacing&&t.spacing]}})((e=>{let{ownerState:t}=e;return(0,r.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!t.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})}));var g=a.forwardRef((function(e,t){const o=(0,c.i)({props:e,name:"MuiDialogActions"}),{className:a,disableSpacing:l=!1}=o,d=(0,n.Z)(o,f),u=(0,r.Z)({},o,{disableSpacing:l}),g=(e=>{const{classes:t,disableSpacing:o}=e,n={root:["root",!o&&"spacing"]};return(0,i.Z)(n,p,t)})(u);return(0,v.jsx)(m,(0,r.Z)({className:(0,s.Z)(g.root,a),ownerState:u,ref:t},d))}))},6467:function(e,t,o){o.d(t,{Z:function(){return h}});var n=o(3366),r=o(7462),a=o(7313),s=o(4146),i=o(1921),l=o(7592),c=o(1033),d=o(7430),u=o(2298);function p(e){return(0,u.ZP)("MuiDialogContent",e)}(0,d.Z)("MuiDialogContent",["root","dividers"]);var v=o(3174),f=o(6417);const m=["className","dividers"],g=(0,l.ZP)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.dividers&&t.dividers]}})((e=>{let{theme:t,ownerState:o}=e;return(0,r.Z)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},o.dividers?{padding:"16px 24px",borderTop:`1px solid ${(t.vars||t).palette.divider}`,borderBottom:`1px solid ${(t.vars||t).palette.divider}`}:{[`.${v.Z.root} + &`]:{paddingTop:0}})}));var h=a.forwardRef((function(e,t){const o=(0,c.i)({props:e,name:"MuiDialogContent"}),{className:a,dividers:l=!1}=o,d=(0,n.Z)(o,m),u=(0,r.Z)({},o,{dividers:l}),v=(e=>{const{classes:t,dividers:o}=e,n={root:["root",o&&"dividers"]};return(0,i.Z)(n,p,t)})(u);return(0,f.jsx)(g,(0,r.Z)({className:(0,s.Z)(v.root,a),ownerState:u,ref:t},d))}))}}]);