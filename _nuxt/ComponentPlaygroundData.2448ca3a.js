import y from"./TabsHeader.8ca0b032.js";import v from"./ComponentPlaygroundProps.12cc04cc.js";import{_ as g}from"./ComponentPlaygroundSlots.vue.45a6bee6.js";import{_ as x}from"./ComponentPlaygroundTokens.vue.e1b50730.js";import{a as k}from"./index.3a83310d.js";import{d as D,r as V,b as n,c as C,g as P,I as o,W as m,av as T,f as s,k as I}from"./entry.1c5d0e6a.js";import"./ProseH4.cbe84b67.js";import"./ProseCodeInline.2371f227.js";import"./Badge.8ac1ddaa.js";import"./slot.4a2102e1.js";import"./node.676c5e99.js";import"./ProseP.edb73fd3.js";const B={class:"component-playground-data"},j=D({__name:"ComponentPlaygroundData",props:{modelValue:{type:Object,required:!1,default:()=>({})},componentData:{type:Object,required:!1,default:()=>({})}},emits:["update:modelValue"],setup(t,{emit:r}){const a=k(t,"modelValue",r),e=V(0),c=[{label:"Props"},{label:"Slots"},{label:"Design Tokens"}],d=l=>e.value=l;return(l,p)=>{const u=y,_=v,i=g,f=x;return n(),C("div",B,[P(u,{"active-tab-index":o(e),tabs:c,"onUpdate:activeTabIndex":d},null,8,["active-tab-index"]),o(e)===0?(n(),m(_,{key:0,modelValue:o(a),"onUpdate:modelValue":p[0]||(p[0]=b=>T(a)?a.value=b:null),"component-data":t.componentData},null,8,["modelValue","component-data"])):s("",!0),o(e)===1?(n(),m(i,{key:1,"component-data":t.componentData},null,8,["component-data"])):s("",!0),o(e)===2?(n(),m(f,{key:2,"component-data":t.componentData},null,8,["component-data"])):s("",!0)])}}});const A=I(j,[["__scopeId","data-v-4b2b6473"]]);export{A as default};