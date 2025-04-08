"use strict";(self.webpackChunkberry_free_material_react_cra=self.webpackChunkberry_free_material_react_cra||[]).push([[217],{2186:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(3365),o=r(4469),a=r(3604),s=r(2832),i=r(1113),c=r(7313),l=r(1766),d=r(6417);const u=c.forwardRef((function(e,t){return(0,d.jsx)(n.Z,{ref:t,...e})}));function m(e){let{title:t,children:r,open:n,onClose:c,...m}=e;return(0,d.jsxs)(o.Z,{...m,open:n,TransitionComponent:u,children:[(0,d.jsx)(a.Z,{children:(0,d.jsxs)(s.Z,{direction:"row",sx:{justifyContent:"space-between",alignItems:"center"},children:[(0,d.jsx)(i.Z,{variant:"h2",color:"primary.main",children:t}),(0,d.jsx)(l.Z,{sx:{cursor:"pointer"},onClick:c})]})}),r]})}},1217:function(e,t,r){r.r(t),r.d(t,{default:function(){return R}});var n=r(7313),o=r(2832),a=r(8999),s=r(5266),i=r(7825),c=r(1113),l=r(4631),d=r(5480),u=r(1550),m=r(3306),x=r(4256),h=r(1405),Z=r(3929),f=r(24),p=r(1095),g=r(5627),v=r(1387),j=r(2186),C=r(1322),b=r(6417);function y(e){let{getParty:t,open:r,onClose:a,isEdit:s=!1,data:y={}}=e;const[P,S]=(0,n.useState)([]),[w,N]=(0,n.useState)(!1),{control:A,handleSubmit:D,formState:{errors:k},reset:_}=(0,g.cI)({defaultValues:{name:"",address:"",contactPerson:"",contactNumber:"",location:""}});return(0,n.useEffect)((()=>{(0,C.RY)().then((e=>S(e))).catch((e=>console.log(e)))}),[]),(0,n.useEffect)((()=>{s&&y&&(N((null===y||void 0===y?void 0:y.isTrailerAllowed)||!1),_({name:y.name||"",address:y.address||"",contactPerson:y.contactPerson||"",contactNumber:y.contactNumber||"",location:y.locationId||""}))}),[y,s,_]),(0,b.jsx)(j.Z,{open:r,fullWidth:!0,onClose:a,title:(s?"Edit":"Add")+" Party",children:(0,b.jsx)("form",{onSubmit:D((e=>{const r={...e,isTrailerAllowed:w};s?(console.log(r),console.log(y._id),(0,C.CE)(y._id,{name:e.name,address:e.address,locationId:e.location,contactPerson:e.contactPerson,contactNumber:e.contactNumber,isTrailerAllowed:w}).then((()=>{v.Am.success("Party updated successfully"),t(),a()})).catch((e=>{var t,r;v.Am.error((null===(t=e.response)||void 0===t||null===(r=t.data)||void 0===r?void 0:r.message)||"Operation failed")}))):(0,C.Q1)({name:e.name,address:e.address,locationId:e.location,contactPerson:e.contactPerson,contactNumber:e.contactNumber,isTrailerAllowed:w}).then((()=>{v.Am.success("Party added successfully"),t(),a()})).catch((e=>{var t,r;v.Am.error((null===(t=e.response)||void 0===t||null===(r=t.data)||void 0===r?void 0:r.message)||"Operation failed")}))})),children:(0,b.jsx)(i.Z,{children:(0,b.jsxs)(o.Z,{direction:"column",spacing:2,children:[(0,b.jsx)(c.Z,{variant:"h5",children:"Party Name"}),(0,b.jsx)(g.Qr,{name:"name",control:A,rules:{required:"Party Name is required"},render:e=>{let{field:t}=e;return(0,b.jsx)(l.Z,{...t,placeholder:"Enter Party Name"})}}),k.name&&(0,b.jsx)(d.Z,{error:!0,children:k.name.message}),(0,b.jsx)(c.Z,{variant:"h5",children:"Address"}),(0,b.jsx)(g.Qr,{name:"address",control:A,rules:{required:"Address is required"},render:e=>{let{field:t}=e;return(0,b.jsx)(l.Z,{...t,placeholder:"Enter Party Address"})}}),k.address&&(0,b.jsx)(d.Z,{error:!0,children:k.address.message}),(0,b.jsx)(c.Z,{variant:"h5",children:"Contact Person Name"}),(0,b.jsx)(g.Qr,{name:"contactPerson",control:A,rules:{required:"Contact Person is required"},render:e=>{let{field:t}=e;return(0,b.jsx)(l.Z,{...t,placeholder:"Enter Contact Person Name"})}}),k.contactPerson&&(0,b.jsx)(d.Z,{error:!0,children:k.contactPerson.message}),(0,b.jsx)(c.Z,{variant:"h5",children:"Contact Number"}),(0,b.jsx)(g.Qr,{name:"contactNumber",control:A,rules:{required:"Contact Number is required"},render:e=>{let{field:t}=e;return(0,b.jsx)(l.Z,{...t,placeholder:"Enter Contact Number"})}}),k.contactNumber&&(0,b.jsx)(d.Z,{error:!0,children:k.contactNumber.message}),(0,b.jsxs)(u.Z,{children:[(0,b.jsx)(m.Z,{children:"Location"}),(0,b.jsx)(g.Qr,{name:"location",control:A,rules:{required:"Location is required"},render:e=>{let{field:t}=e;return(0,b.jsxs)(x.Z,{...t,children:[(0,b.jsx)(h.Z,{value:"",children:(0,b.jsx)("em",{children:"None"})}),P.map((e=>(0,b.jsx)(h.Z,{value:e._id,children:e.name},e._id)))]})}}),k.location&&(0,b.jsx)(d.Z,{error:!0,children:k.location.message})]}),(0,b.jsx)(u.Z,{children:(0,b.jsx)(Z.Z,{control:(0,b.jsx)(f.Z,{checked:w,onChange:()=>N(!w)}),label:"Is Trailer Allowed"})}),(0,b.jsx)(p.Z,{variant:"contained",type:"submit",children:s?"Update":"Add"})]})})})})}var P=r(4469),S=r(3604),w=r(6467),N=r(7762),A=r(4117);function D(e){let{open:t,onClose:r,onConfirm:n}=e;return(0,b.jsxs)(P.Z,{open:t,onClose:r,"aria-labelledby":"delete-confirm-dialog",children:[(0,b.jsx)(S.Z,{id:"delete-confirm-dialog",children:"Confirm Deletion"}),(0,b.jsx)(w.Z,{children:(0,b.jsx)(N.Z,{children:"Are you sure you want to delete this item? This action cannot be undone."})}),(0,b.jsxs)(A.Z,{children:[(0,b.jsx)(p.Z,{onClick:r,color:"primary",children:"Cancel"}),(0,b.jsx)(p.Z,{onClick:n,color:"error",variant:"contained",children:"Delete"})]})]})}const k=["name","address","contact person","contact number","status"];function _(e){let{data:t,updateData:r,navigation:o}=e;const[i,c]=(0,n.useState)(!1),[l,d]=(0,n.useState)(),[u,m]=(0,n.useState)(!1),[x,h]=(0,n.useState)(!1),Z=(0,s.h)(t,["name","address","contactPerson","contactNumber","status"],k),f="admin"===localStorage.getItem("role");return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(y,{open:i,onClose:()=>c(!1),data:l,isEdit:x,getParty:r}),(0,b.jsx)(D,{open:u,onClose:()=>m(!1),onConfirm:()=>{console.log("Item deleted"),(0,C.T5)(l._id).then((()=>{v.Am.success("Party deleted successfully"),r()})).catch((e=>{var t,r;console.log(e),v.Am.error((null===(t=e.response)||void 0===t||null===(r=t.data)||void 0===r?void 0:r.message)||"Failed to delete")})),m(!1)}}),(0,b.jsx)(a.Z,{onClickAction:f&&o,data:Z,header:k,isShowSerialNo:!0,isShowAction:!f,actions:["delete","Edit","UpdateStatus"],onActionChange:e=>{"delete"===e.action?(console.log(e),d(e.data),m(!0),console.log(e.data._id)):"Edit"===e.action?(d(e.data),h(!0),c(!0)):"UpdateStatus"===e.action&&(0,C.X6)(e.data._id).then((()=>{v.Am.success("Party status updated successfully"),r()})).catch((e=>{var t,r;console.log(e),v.Am.error((null===(t=e.response)||void 0===t||null===(r=t.data)||void 0===r?void 0:r.message)||"Failed to update status")}))}})]})}var T=r(2040),E=r(3497);function I(e){let{buttonClick:t}=e;const r="both"===localStorage.getItem("role")||"forwarder"===localStorage.getItem("role");return(0,b.jsx)(E.Z,{children:(0,b.jsxs)(o.Z,{direction:"row",sx:{justifyContent:"space-between",alignItems:"center"},children:[(0,b.jsx)(c.Z,{variant:"h3",color:"secondary.main",children:"Manage Parties"}),r&&(0,b.jsx)(p.Z,{variant:"contained",startIcon:(0,b.jsx)(T.Z,{}),sx:{backgroundColor:"secondary.main"},onClick:t,children:"Add Parties"})]})})}var M=r(7890);function R(){const[e,t]=(0,n.useState)(!1),[r,a]=(0,n.useState)([]),s=(0,M.s0)(),i=async()=>{try{const e=await(0,C.a2)();a(e)}catch(e){console.log(e)}};(0,n.useEffect)((()=>{i()}),[]);return(0,b.jsxs)(o.Z,{direction:"column",gap:2,children:[(0,b.jsx)(y,{open:e,getParty:i,onClose:()=>t(!1)}),(0,b.jsx)(I,{buttonClick:()=>t(!0)}),(0,b.jsx)(_,{navigation:async e=>{console.log(e),s("/doBooking/"+e)},data:r,updateData:i})]})}},4117:function(e,t,r){r.d(t,{Z:function(){return f}});var n=r(3366),o=r(7462),a=r(7313),s=r(4146),i=r(1921),c=r(7592),l=r(1033),d=r(7430),u=r(2298);function m(e){return(0,u.ZP)("MuiDialogActions",e)}(0,d.Z)("MuiDialogActions",["root","spacing"]);var x=r(6417);const h=["className","disableSpacing"],Z=(0,c.ZP)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,!r.disableSpacing&&t.spacing]}})((e=>{let{ownerState:t}=e;return(0,o.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!t.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})}));var f=a.forwardRef((function(e,t){const r=(0,l.i)({props:e,name:"MuiDialogActions"}),{className:a,disableSpacing:c=!1}=r,d=(0,n.Z)(r,h),u=(0,o.Z)({},r,{disableSpacing:c}),f=(e=>{const{classes:t,disableSpacing:r}=e,n={root:["root",!r&&"spacing"]};return(0,i.Z)(n,m,t)})(u);return(0,x.jsx)(Z,(0,o.Z)({className:(0,s.Z)(f.root,a),ownerState:u,ref:t},d))}))},7762:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(3366),o=r(7462),a=r(7313),s=r(4146),i=r(1921),c=r(7592),l=r(3727),d=r(1033),u=r(1113),m=r(7430),x=r(2298);function h(e){return(0,x.ZP)("MuiDialogContentText",e)}(0,m.Z)("MuiDialogContentText",["root"]);var Z=r(6417);const f=["children","className"],p=(0,c.ZP)(u.Z,{shouldForwardProp:e=>(0,l.Z)(e)||"classes"===e,name:"MuiDialogContentText",slot:"Root",overridesResolver:(e,t)=>t.root})({});var g=a.forwardRef((function(e,t){const r=(0,d.i)({props:e,name:"MuiDialogContentText"}),{className:a}=r,c=(0,n.Z)(r,f),l=(e=>{const{classes:t}=e,r=(0,i.Z)({root:["root"]},h,t);return(0,o.Z)({},t,r)})(c);return(0,Z.jsx)(p,(0,o.Z)({component:"p",variant:"body1",color:"text.secondary",ref:t,ownerState:c,className:(0,s.Z)(l.root,a)},r,{classes:l}))}))},6467:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(3366),o=r(7462),a=r(7313),s=r(4146),i=r(1921),c=r(7592),l=r(1033),d=r(7430),u=r(2298);function m(e){return(0,u.ZP)("MuiDialogContent",e)}(0,d.Z)("MuiDialogContent",["root","dividers"]);var x=r(3174),h=r(6417);const Z=["className","dividers"],f=(0,c.ZP)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.dividers&&t.dividers]}})((e=>{let{theme:t,ownerState:r}=e;return(0,o.Z)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},r.dividers?{padding:"16px 24px",borderTop:`1px solid ${(t.vars||t).palette.divider}`,borderBottom:`1px solid ${(t.vars||t).palette.divider}`}:{[`.${x.Z.root} + &`]:{paddingTop:0}})}));var p=a.forwardRef((function(e,t){const r=(0,l.i)({props:e,name:"MuiDialogContent"}),{className:a,dividers:c=!1}=r,d=(0,n.Z)(r,Z),u=(0,o.Z)({},r,{dividers:c}),x=(e=>{const{classes:t,dividers:r}=e,n={root:["root",r&&"dividers"]};return(0,i.Z)(n,m,t)})(u);return(0,h.jsx)(f,(0,o.Z)({className:(0,s.Z)(x.root,a),ownerState:u,ref:t},d))}))}}]);