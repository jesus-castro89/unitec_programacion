import{d as y,r as l,al as k,am as w,v as x,b as a,c as p,e as m,g as v,w as S,W as _,I as f,T as b,n as C,ab as $,p as I,i as P,k as h,t as z,f as N,Y as T}from"./entry.4daf38a0.js";const V=e=>(I("data-v-a5aad185"),e=e(),P(),e),A=V(()=>m("span",{class:"sr-only"},"Copy to clipboard",-1)),M={class:"icon-wrapper"},R=y({__name:"ProseCodeCopyButton",props:{content:{type:String,default:""},show:{type:Boolean,default:!1}},setup(e){const n=e,s=l(),{copy:t}=k();w(s,()=>{o.value==="copied"&&(o.value="init")});const{prose:c}=x(),o=l("init"),g=B=>{t(n.content).then(()=>{o.value="copied"}).catch(d=>{console.warn("Couldn't copy to clipboard!",d)})};return(B,d)=>{const u=$;return a(),p("button",{ref_key:"copyButtonRef",ref:s,class:C([(e.show||o.value==="copied")&&"show"]),onClick:g},[A,m("span",M,[v(b,{name:"fade"},{default:S(()=>{var r,i;return[o.value==="copied"?(a(),_(u,{key:0,name:(r=f(c).copyButton)==null?void 0:r.iconCopied,size:"18",class:"copied"},null,8,["name"])):(a(),_(u,{key:1,name:(i=f(c).copyButton)==null?void 0:i.iconCopy,size:"18"},null,8,["name"]))]}),_:1})])],2)}}});const D=h(R,[["__scopeId","data-v-a5aad185"]]),E={key:0,class:"filename"},O=y({__name:"ProseCode",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]}},setup(e){const n=l(!1);return(s,t)=>{const c=D;return a(),p("div",{class:C([[`highlight-${e.language}`],"prose-code"]),onMouseenter:t[0]||(t[0]=o=>n.value=!0),onMouseleave:t[1]||(t[1]=o=>n.value=!1)},[e.filename?(a(),p("span",E,z(e.filename),1)):N("",!0),T(s.$slots,"default",{},void 0,!0),v(c,{show:n.value,content:e.code,class:"copy-button"},null,8,["show","content"])],34)}}});const Y=h(O,[["__scopeId","data-v-8f163f2a"]]);export{Y as default};
