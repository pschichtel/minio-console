"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[3034,1435],{21435:function(e,n,t){var i=t(29439),o=t(1413),a=t(72791),r=t(27391),l=t(61889),s=t(30829),c=t(20068),d=t(13400),x=t(20165),u=t(3579),p=t(11135),h=t(72455),m=t(25787),v=t(23814),f=t(29945),j=t(28182),Z=t(80184),y=(0,h.Z)((function(e){return(0,p.Z)((0,o.Z)({},v.gM))}));function b(e){var n=y();return(0,Z.jsx)(r.Z,(0,o.Z)({InputProps:{classes:n}},e))}n.Z=(0,m.Z)((function(e){return(0,p.Z)((0,o.Z)((0,o.Z)((0,o.Z)({},v.YI),v.Hr),{},{textBoxContainer:{flexGrow:1,position:"relative"},overlayAction:{position:"absolute",right:5,top:6,"& svg":{maxWidth:15,maxHeight:15},"&.withLabel":{top:5}}}))}))((function(e){var n=e.label,t=e.onChange,r=e.value,p=e.id,h=e.name,m=e.type,v=void 0===m?"text":m,y=e.autoComplete,g=void 0===y?"off":y,C=e.disabled,k=void 0!==C&&C,S=e.multiline,K=void 0!==S&&S,M=e.tooltip,P=void 0===M?"":M,z=e.index,I=void 0===z?0:z,w=e.error,F=void 0===w?"":w,N=e.required,A=void 0!==N&&N,R=e.placeholder,B=void 0===R?"":R,L=e.min,T=e.max,E=e.overlayId,O=e.overlayIcon,W=void 0===O?null:O,Y=e.overlayObject,_=void 0===Y?null:Y,H=e.extraInputProps,V=void 0===H?{}:H,q=e.overlayAction,D=e.noLabelMinWidth,G=void 0!==D&&D,X=e.pattern,J=void 0===X?"":X,Q=e.autoFocus,U=void 0!==Q&&Q,$=e.classes,ee=e.className,ne=void 0===ee?"":ee,te=e.onKeyPress,ie=e.onFocus,oe=e.onPaste,ae=(0,o.Z)({"data-index":I},V),re=(0,a.useState)(!1),le=(0,i.Z)(re,2),se=le[0],ce=le[1];"number"===v&&L&&(ae.min=L),"number"===v&&T&&(ae.max=T),""!==J&&(ae.pattern=J);var de=W,xe=v;return"password"===v&&null===W&&(de=se?(0,Z.jsx)(x.Z,{}):(0,Z.jsx)(u.Z,{}),xe=se?"text":"password"),(0,Z.jsx)(a.Fragment,{children:(0,Z.jsxs)(l.ZP,{container:!0,className:(0,j.Z)(""!==ne?ne:"",""!==F?$.errorInField:$.inputBoxContainer),children:[""!==n&&(0,Z.jsxs)(s.Z,{htmlFor:p,className:G?$.noMinWidthLabel:$.inputLabel,children:[(0,Z.jsxs)("span",{children:[n,A?"*":""]}),""!==P&&(0,Z.jsx)("div",{className:$.tooltipContainer,children:(0,Z.jsx)(c.Z,{title:P,placement:"top-start",children:(0,Z.jsx)("div",{className:$.tooltip,children:(0,Z.jsx)(f.byK,{})})})})]}),(0,Z.jsxs)("div",{className:$.textBoxContainer,children:[(0,Z.jsx)(b,{id:p,name:h,fullWidth:!0,value:r,autoFocus:U,disabled:k,onChange:t,type:xe,multiline:K,autoComplete:g,inputProps:ae,error:""!==F,helperText:F,placeholder:B,className:$.inputRebase,onKeyPress:te,onFocus:ie,onPaste:oe}),de&&(0,Z.jsx)("div",{className:"".concat($.overlayAction," ").concat(""!==n?"withLabel":""),children:(0,Z.jsx)(d.Z,{onClick:q?function(){q()}:function(){return ce(!se)},id:E,size:"small",disableFocusRipple:!1,disableRipple:!1,disableTouchRipple:!1,children:de})}),_&&(0,Z.jsx)("div",{className:"".concat($.overlayAction," ").concat(""!==n?"withLabel":""),children:_})]})]})})}))},33034:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var i=t(72791),o=t(61889),a=t(56087),r=t(87995),l=t(57689),s=t(81551),c=t(29439),d=t(64554),x=t(29945),u=t(21435),p=t(9505),h=t(40214),m=t(80184),v=function(e){var n=e.onSuccess,t=e.onError,a=(0,p.Z)(n,t),r=(0,c.Z)(a,2),l=r[0],s=r[1],v=(0,i.useState)(""),f=(0,c.Z)(v,2),j=f[0],Z=f[1],y=""!==j.trim()&&-1===j.indexOf(" ");return(0,m.jsx)(x.Xgh,{children:(0,m.jsx)(x.ltY,{title:"Create Key",icon:(0,m.jsx)(x.sR0,{}),helpBox:(0,m.jsx)(h.Z,{helpText:"Encryption Key",contents:["Create a new cryptographic key in the Key Management Service server connected to MINIO."]}),children:(0,m.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),s("POST","/api/v1/kms/keys/",{key:j})},children:(0,m.jsxs)(o.ZP,{container:!0,item:!0,spacing:1,children:[(0,m.jsx)(o.ZP,{item:!0,xs:12,children:(0,m.jsx)(u.Z,{id:"key-name",name:"key-name",label:"Key Name",autoFocus:!0,value:j,error:function(e){return-1!==e.indexOf(" ")?"Key name cannot contain spaces":""}(j),onChange:function(e){Z(e.target.value)}})}),(0,m.jsx)(o.ZP,{item:!0,xs:12,textAlign:"right",children:(0,m.jsxs)(d.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end",marginTop:"20px",gap:"15px"},children:[(0,m.jsx)(x.zxk,{id:"clear",type:"button",variant:"regular",onClick:function(){Z("")},label:"Clear"}),(0,m.jsx)(x.zxk,{id:"save-key",type:"submit",variant:"callAction",color:"primary",disabled:l||!y,label:"Save"})]})})]})})})})},f=t(47974),j=function(){var e=(0,s.TL)(),n=(0,l.s0)();return(0,m.jsx)(i.Fragment,{children:(0,m.jsxs)(o.ZP,{item:!0,xs:12,children:[(0,m.jsx)(f.Z,{label:(0,m.jsx)(x.hbI,{label:"Keys",onClick:function(){return n(a.gA.KMS_KEYS)}})}),(0,m.jsx)(v,{onError:function(n){return e((0,r.Ih)(n))},onSuccess:function(){return n("".concat(a.gA.KMS_KEYS))}})]})})}},40214:function(e,n,t){t(72791);var i=t(64554),o=t(29945),a=t(80184);n.Z=function(e){var n=e.helpText,t=e.contents;return(0,a.jsxs)(i.Z,{sx:{flex:1,border:"1px solid #eaeaea",borderRadius:"2px",display:"flex",flexFlow:"column",padding:"20px"},children:[(0,a.jsxs)(i.Z,{sx:{fontSize:"16px",fontWeight:600,display:"flex",alignItems:"center",marginBottom:"16px",paddingBottom:"20px","& .min-icon":{height:"21px",width:"21px",marginRight:"15px"}},children:[(0,a.jsx)(o.M9A,{}),(0,a.jsx)("div",{children:n})]}),(0,a.jsx)(i.Z,{sx:{fontSize:"14px",marginBottom:"15px"},children:t.map((function(e){return(0,a.jsx)(i.Z,{sx:{paddingBottom:"20px"},children:e})}))})]})}},3579:function(e,n,t){var i=t(64836);n.Z=void 0;var o=i(t(45649)),a=t(80184),r=(0,o.default)((0,a.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"RemoveRedEye");n.Z=r},20165:function(e,n,t){var i=t(64836);n.Z=void 0;var o=i(t(45649)),a=t(80184),r=(0,o.default)((0,a.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");n.Z=r}}]);
//# sourceMappingURL=3034.31866fc8.chunk.js.map