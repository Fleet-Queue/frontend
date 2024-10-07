"use strict";(self.webpackChunkberry_free_material_react_cra=self.webpackChunkberry_free_material_react_cra||[]).push([[303],{1766:function(e,t,a){var r=a(1171),o=a(6417);t.Z=(0,r.Z)((0,o.jsx)("path",{d:"M18.3 5.71a.9959.9959 0 0 0-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"}),"CloseRounded")},7825:function(e,t,a){a.d(t,{Z:function(){return $}});var r=a(3366),o=a(7462),i=a(7313),s=a(4146),n=a(1167),c=a(8007),l=a(1179),d=a(4614),h=a(6694),p=a(1821),u=a(6417);const m=["className","component","disableGutters","fixed","maxWidth","classes"],b=(0,p.Z)(),g=(0,h.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[`maxWidth${(0,l.Z)(String(a.maxWidth))}`],a.fixed&&t.fixed,a.disableGutters&&t.disableGutters]}}),v=e=>(0,d.Z)({props:e,name:"MuiContainer",defaultTheme:b}),x=(e,t)=>{const{classes:a,fixed:r,disableGutters:o,maxWidth:i}=e,s={root:["root",i&&`maxWidth${(0,l.Z)(String(i))}`,r&&"fixed",o&&"disableGutters"]};return(0,c.Z)(s,(e=>(0,n.ZP)(t,e)),a)};var k=a(1615),w=a(7592),f=a(7342);const Z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{createStyledComponent:t=g,useThemeProps:a=v,componentName:n="MuiContainer"}=e,c=t((e=>{let{theme:t,ownerState:a}=e;return(0,o.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!a.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}})}),(e=>{let{theme:t,ownerState:a}=e;return a.fixed&&Object.keys(t.breakpoints.values).reduce(((e,a)=>{const r=a,o=t.breakpoints.values[r];return 0!==o&&(e[t.breakpoints.up(r)]={maxWidth:`${o}${t.breakpoints.unit}`}),e}),{})}),(e=>{let{theme:t,ownerState:a}=e;return(0,o.Z)({},"xs"===a.maxWidth&&{[t.breakpoints.up("xs")]:{maxWidth:Math.max(t.breakpoints.values.xs,444)}},a.maxWidth&&"xs"!==a.maxWidth&&{[t.breakpoints.up(a.maxWidth)]:{maxWidth:`${t.breakpoints.values[a.maxWidth]}${t.breakpoints.unit}`}})})),l=i.forwardRef((function(e,t){const i=a(e),{className:l,component:d="div",disableGutters:h=!1,fixed:p=!1,maxWidth:b="lg"}=i,g=(0,r.Z)(i,m),v=(0,o.Z)({},i,{component:d,disableGutters:h,fixed:p,maxWidth:b}),k=x(v,n);return(0,u.jsx)(c,(0,o.Z)({as:d,ownerState:v,className:(0,s.Z)(k.root,l),ref:t},g))}));return l}({createStyledComponent:(0,w.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[`maxWidth${(0,k.Z)(String(a.maxWidth))}`],a.fixed&&t.fixed,a.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,f.Z)({props:e,name:"MuiContainer"})});var $=Z},24:function(e,t,a){a.d(t,{Z:function(){return S}});var r=a(3366),o=a(7462),i=a(7313),s=a(4146),n=a(8007),c=a(8552),l=a(1615),d=a(7423),h=a(9009),p=a(7592),u=a(4363),m=a(1167);function b(e){return(0,m.ZP)("MuiSwitch",e)}var g=(0,u.Z)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),v=a(6417);const x=["className","color","edge","size","sx"],k=(0,h.U)("MuiSwitch"),w=(0,p.ZP)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.edge&&t[`edge${(0,l.Z)(a.edge)}`],t[`size${(0,l.Z)(a.size)}`]]}})({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,[`& .${g.thumb}`]:{width:16,height:16},[`& .${g.switchBase}`]:{padding:4,[`&.${g.checked}`]:{transform:"translateX(16px)"}}}}]}),f=(0,p.ZP)(d.Z,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.switchBase,{[`& .${g.input}`]:t.input},"default"!==a.color&&t[`color${(0,l.Z)(a.color)}`]]}})((e=>{let{theme:t}=e;return{position:"absolute",top:0,left:0,zIndex:1,color:t.vars?t.vars.palette.Switch.defaultColor:`${"light"===t.palette.mode?t.palette.common.white:t.palette.grey[300]}`,transition:t.transitions.create(["left","transform"],{duration:t.transitions.duration.shortest}),[`&.${g.checked}`]:{transform:"translateX(20px)"},[`&.${g.disabled}`]:{color:t.vars?t.vars.palette.Switch.defaultDisabledColor:`${"light"===t.palette.mode?t.palette.grey[100]:t.palette.grey[600]}`},[`&.${g.checked} + .${g.track}`]:{opacity:.5},[`&.${g.disabled} + .${g.track}`]:{opacity:t.vars?t.vars.opacity.switchTrackDisabled:""+("light"===t.palette.mode?.12:.2)},[`& .${g.input}`]:{left:"-100%",width:"300%"}}}),(e=>{let{theme:t}=e;return{"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,c.Fq)(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(t.palette).filter((e=>{let[,t]=e;return t.main&&t.light})).map((e=>{let[a]=e;return{props:{color:a},style:{[`&.${g.checked}`]:{color:(t.vars||t).palette[a].main,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[a].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,c.Fq)(t.palette[a].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${g.disabled}`]:{color:t.vars?t.vars.palette.Switch[`${a}DisabledColor`]:`${"light"===t.palette.mode?(0,c.$n)(t.palette[a].main,.62):(0,c._j)(t.palette[a].main,.55)}`}},[`&.${g.checked} + .${g.track}`]:{backgroundColor:(t.vars||t).palette[a].main}}}}))]}})),Z=(0,p.ZP)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,t)=>t.track})((e=>{let{theme:t}=e;return{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:`${"light"===t.palette.mode?t.palette.common.black:t.palette.common.white}`,opacity:t.vars?t.vars.opacity.switchTrack:""+("light"===t.palette.mode?.38:.3)}})),$=(0,p.ZP)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,t)=>t.thumb})((e=>{let{theme:t}=e;return{boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}}));var S=i.forwardRef((function(e,t){const a=k({props:e,name:"MuiSwitch"}),{className:i,color:c="primary",edge:d=!1,size:h="medium",sx:p}=a,u=(0,r.Z)(a,x),m=(0,o.Z)({},a,{color:c,edge:d,size:h}),g=(e=>{const{classes:t,edge:a,size:r,color:i,checked:s,disabled:c}=e,d={root:["root",a&&`edge${(0,l.Z)(a)}`,`size${(0,l.Z)(r)}`],switchBase:["switchBase",`color${(0,l.Z)(i)}`,s&&"checked",c&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},h=(0,n.Z)(d,b,t);return(0,o.Z)({},t,h)})(m),S=(0,v.jsx)($,{className:g.thumb,ownerState:m});return(0,v.jsxs)(w,{className:(0,s.Z)(g.root,i),sx:p,ownerState:m,children:[(0,v.jsx)(f,(0,o.Z)({type:"checkbox",icon:S,checkedIcon:S,ref:t,ownerState:m},u,{classes:(0,o.Z)({},g,{root:g.switchBase})})),(0,v.jsx)(Z,{className:g.track,ownerState:m})]})}))}}]);