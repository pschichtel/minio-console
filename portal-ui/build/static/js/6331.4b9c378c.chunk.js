"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[6331],{23804:function(e,n,t){t(72791);var i=t(11135),r=t(25787),a=t(61889),o=t(80184);n.Z=(0,r.Z)((function(e){return(0,i.Z)({root:{border:"1px solid #E2E2E2",borderRadius:2,backgroundColor:"#FBFAFA",paddingLeft:25,paddingTop:31,paddingBottom:21,paddingRight:30},leftItems:{fontSize:16,fontWeight:"bold",marginBottom:15,display:"flex",alignItems:"center","& .min-icon":{marginRight:15,height:28,width:38}},helpText:{fontSize:16,paddingLeft:5}})}))((function(e){var n=e.classes,t=e.iconComponent,i=e.title,r=e.help;return(0,o.jsx)("div",{className:n.root,children:(0,o.jsxs)(a.ZP,{container:!0,children:[(0,o.jsxs)(a.ZP,{item:!0,xs:12,className:n.leftItems,children:[t,i]}),(0,o.jsx)(a.ZP,{item:!0,xs:12,className:n.helpText,children:r})]})})}))},66331:function(e,n,t){t.r(n),t.d(n,{default:function(){return q}});var i=t(1413),r=t(72791),a=t(61889),o=t(36151),s=t(40986),l=t(11135),d=t(25787),c=t(23814),u=t(21435),b=t(83679),x=t(45248),h=t(60364),m=t(37516),g=t(32291),j=t(84669),f=t(51047),p=t(74794),v=t(56578),k=t(25739),Z=t(23804),C=t(50896),y=t(87995),B=t(64561),_=t(92717),F=t(80184),P=function(){var e=(0,h.I0)(),n=(0,h.v9)((function(e){return e.addBucket.name}));return(0,F.jsx)(u.Z,{id:"bucket-name",name:"bucket-name",autoFocus:!0,onChange:function(n){e((0,B.qC)(n.target.value))},label:"Bucket Name",value:n})},q=(0,d.Z)((function(e){return(0,l.Z)((0,i.Z)({buttonContainer:{marginTop:24,textAlign:"right","& .MuiButton-root":{marginLeft:8}},error:{color:"#b53b4b",border:"1px solid #b53b4b",padding:8,borderRadius:3},alertVersioning:{border:"#E2E2E2 1px solid",backgroundColor:"#FBFAFA",borderRadius:3,display:"flex",alignItems:"center",padding:"10px",color:"#767676","& > .min-icon ":{width:20,height:20,marginRight:10}},title:{marginBottom:8},headTitle:{fontWeight:"bold",fontSize:16,paddingLeft:8},h6title:{fontWeight:"bold",color:"#000000",fontSize:20}},(0,c.Bz)(e.spacing(4))))}))((function(e){var n=e.classes,t=(0,h.I0)(),i=(0,h.v9)((function(e){return e.addBucket.versioningEnabled})),l=(0,h.v9)((function(e){return e.addBucket.lockingEnabled})),d=(0,h.v9)((function(e){return e.addBucket.quotaEnabled})),c=(0,h.v9)((function(e){return e.addBucket.quotaSize})),q=(0,h.v9)((function(e){return e.addBucket.quotaUnit})),N=(0,h.v9)((function(e){return e.addBucket.retentionEnabled})),E=(0,h.v9)((function(e){return e.addBucket.retentionMode})),z=(0,h.v9)((function(e){return e.addBucket.retentionUnit})),R=(0,h.v9)((function(e){return e.addBucket.retentionValidity})),S=(0,h.v9)((function(e){return e.addBucket.loading})),w=(0,h.v9)((function(e){return e.addBucket.valid})),V=(0,h.v9)((function(e){return e.addBucket.lockingFieldDisabled})),I=(0,h.v9)(y.N5),L=(0,h.v9)(y.gw);return(0,F.jsxs)(r.Fragment,{children:[(0,F.jsx)(g.Z,{label:(0,F.jsx)(j.Z,{to:"/buckets",label:"Buckets"})}),(0,F.jsx)(p.Z,{children:(0,F.jsx)(k.Z,{title:"Create Bucket",icon:(0,F.jsx)(f.wNb,{}),helpbox:(0,F.jsx)(Z.Z,{iconComponent:(0,F.jsx)(f.wNb,{}),title:"Buckets",help:(0,F.jsxs)(r.Fragment,{children:["MinIO uses buckets to organize objects. A bucket is similar to a folder or directory in a filesystem, where each bucket can hold an arbitrary number of objects.",(0,F.jsx)("br",{}),(0,F.jsx)("br",{}),(0,F.jsx)("b",{children:"Versioning"})," allows to keep multiple versions of the same object under the same key.",(0,F.jsx)("br",{}),(0,F.jsx)("br",{}),(0,F.jsx)("b",{children:"Object Locking"})," prevents objects from being deleted. Required to support retention and legal hold. Can only be enabled at bucket creation.",(0,F.jsx)("br",{}),(0,F.jsx)("br",{}),(0,F.jsx)("b",{children:"Quota"})," limits the amount of data in the bucket.",(0,F.jsx)("br",{}),(0,F.jsx)("br",{}),(0,F.jsx)("b",{children:"Retention"})," imposes rules to prevent object deletion for a period of time."]})}),children:(0,F.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),t((0,_.I)())},children:[(0,F.jsxs)(a.ZP,{container:!0,marginTop:1,spacing:2,children:[(0,F.jsx)(a.ZP,{item:!0,xs:12,children:(0,F.jsx)(P,{})}),(0,F.jsxs)(a.ZP,{item:!0,xs:12,children:[(0,F.jsx)(C.Z,{children:"Features"}),!I&&(0,F.jsxs)(r.Fragment,{children:[(0,F.jsxs)("div",{className:n.error,children:["These features are unavailable in a single-disk setup.",(0,F.jsx)("br",{}),"Please deploy a server in"," ",(0,F.jsx)("a",{href:"https://docs.min.io/minio/baremetal/installation/deploy-minio-distributed.html?ref=con",target:"_blank",rel:"noreferrer",children:"Distributed Mode"})," ","to use these features."]}),(0,F.jsx)("br",{}),(0,F.jsx)("br",{})]})]}),(0,F.jsxs)(a.ZP,{item:!0,xs:12,children:[L.enabled&&(0,F.jsxs)(r.Fragment,{children:[(0,F.jsx)("br",{}),(0,F.jsxs)("div",{className:n.alertVersioning,children:[(0,F.jsx)(f.szr,{})," Versioning setting cannot be changed as cluster replication is enabled for this site."]}),(0,F.jsx)("br",{})]}),(0,F.jsx)(m.Z,{value:"versioned",id:"versioned",name:"versioned",checked:i,onChange:function(e){t((0,B.E2)(e.target.checked))},label:"Versioning",disabled:!I||l||L.enabled})]}),(0,F.jsx)(a.ZP,{item:!0,xs:12,children:(0,F.jsx)(m.Z,{value:"locking",id:"locking",name:"locking",disabled:V||!I,checked:l,onChange:function(e){t((0,B.j9)(e.target.checked)),e.target.checked&&!L.enabled&&t((0,B.E2)(!0))},label:"Object Locking"})}),(0,F.jsx)(a.ZP,{item:!0,xs:12,children:(0,F.jsx)(m.Z,{value:"bucket_quota",id:"bucket_quota",name:"bucket_quota",checked:d,onChange:function(e){t((0,B.WC)(e.target.checked))},label:"Quota",disabled:!I})}),d&&I&&(0,F.jsx)(r.Fragment,{children:(0,F.jsx)(a.ZP,{item:!0,xs:12,children:(0,F.jsx)(u.Z,{type:"number",id:"quota_size",name:"quota_size",onChange:function(e){e.target.validity.valid&&t((0,B.Rj)(e.target.value))},label:"Capacity",value:c,required:!0,min:"1",pattern:"[0-9]*",overlayObject:(0,F.jsx)(v.Z,{id:"quota_unit",onUnitChange:function(e){t((0,B.ND)(e))},unitSelected:q,unitsList:(0,x.zQ)(["Ki"]),disabled:!1})})})}),i&&I&&(0,F.jsx)(a.ZP,{item:!0,xs:12,children:(0,F.jsx)(m.Z,{value:"bucket_retention",id:"bucket_retention",name:"bucket_retention",checked:N,onChange:function(e){t((0,B.bc)(e.target.checked))},label:"Retention"})}),N&&I&&(0,F.jsxs)(r.Fragment,{children:[(0,F.jsx)(a.ZP,{item:!0,xs:12,children:(0,F.jsx)(b.Z,{currentSelection:E,id:"retention_mode",name:"retention_mode",label:"Mode",onChange:function(e){t((0,B.VK)(e.target.value))},selectorOptions:[{value:"compliance",label:"Compliance"},{value:"governance",label:"Governance"}]})}),(0,F.jsx)(a.ZP,{item:!0,xs:12,children:(0,F.jsx)(u.Z,{type:"number",id:"retention_validity",name:"retention_validity",onChange:function(e){t((0,B.Mn)(e.target.valueAsNumber))},label:"Validity",value:String(R),required:!0,overlayObject:(0,F.jsx)(v.Z,{id:"retention_unit",onUnitChange:function(e){t((0,B.hx)(e))},unitSelected:z,unitsList:[{value:"days",label:"Days"},{value:"years",label:"Years"}],disabled:!1})})})]})]}),(0,F.jsxs)(a.ZP,{item:!0,xs:12,className:n.buttonContainer,children:[(0,F.jsx)(o.Z,{type:"button",variant:"outlined",className:n.clearButton,onClick:function(){t((0,B.Fx)())},children:"Clear"}),(0,F.jsx)(o.Z,{type:"submit",variant:"contained",color:"primary",disabled:S||w,children:"Create Bucket"})]}),S&&(0,F.jsx)(a.ZP,{item:!0,xs:12,children:(0,F.jsx)(s.Z,{})})]})})})]})}))},25739:function(e,n,t){t(72791);var i=t(64554),r=t(50896),a=t(80184);n.Z=function(e){var n=e.children,t=e.title,o=e.helpbox,s=e.icon;return(0,a.jsxs)(i.Z,{sx:{display:"grid",padding:"25px",gap:"25px",gridTemplateColumns:{md:"2fr 1.2fr",xs:"1fr"},border:"1px solid #eaeaea"},children:[(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(r.Z,{icon:s,children:t}),n]}),o]})}}}]);
//# sourceMappingURL=6331.4b9c378c.chunk.js.map