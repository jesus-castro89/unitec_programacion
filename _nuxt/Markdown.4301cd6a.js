import s from"./ContentSlot.b317fb70.js";import{d as o,a4 as m,H as p,as as u}from"./entry.5ab95fa4.js";import"./MDCSlot.b3110c00.js";import"./node.676c5e99.js";const l=o({name:"Markdown",extends:s,setup(t){const{parent:e}=u(),{between:n,default:a}=m(),r=p(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:a,tags:r,between:n,parent:e}}});export{l as default};