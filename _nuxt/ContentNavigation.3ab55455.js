import{l as f,a2 as c,_ as v,d as g,ay as d,H as l,m as h,U as _,at as y,a4 as C,M as r,D as w}from"./entry.1c5d0e6a.js";import{q as P,w as m,e as $,s as N,j}from"./query.dfd1b44b.js";import{u as T}from"./preview.c6fd9f10.js";const D=async e=>{const{content:t}=f().public;typeof(e==null?void 0:e.params)!="function"&&(e=P(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${c(a)}.${t.integrity}`}/${$(a)}.json`):m(`/navigation/${c(a)}.${t.integrity}.json`);if(N())return(await v(()=>import("./client-db.23e540a9.js"),["./client-db.23e540a9.js","./entry.1c5d0e6a.js","./entry.05e90c6b.css","./slugify.891e0759.js","./query.dfd1b44b.js","./preview.c6fd9f10.js"],import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:j(a),previewToken:T().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},E=g({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=d(e),a=l(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&h("dd-navigation").value){const{navigation:n}=_();return{navigation:n}}const{data:s}=await y(`content-navigation-${c(a.value)}`,()=>D(a.value));return{navigation:s}},render(e){const t=C(),{navigation:a}=e,s=o=>r(w,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),p=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):p(a)}}),Q=E;export{Q as default};