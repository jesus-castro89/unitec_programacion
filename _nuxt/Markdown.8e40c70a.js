import s from"./ContentSlot.a9a0ac41.js";import{d as o,a4 as m,H as p,as as u}from"./entry.eab94f7a.js";import"./MDCSlot.5f7913b1.js";import"./node.676c5e99.js";const l=o({name:"Markdown",extends:s,setup(t){const{parent:e}=u(),{between:n,default:a}=m(),r=p(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:a,tags:r,between:n,parent:e}}});export{l as default};