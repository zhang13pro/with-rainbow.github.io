import{B as h,g,I as P,j as o,Q as y}from"./app.a6c21707.js";import{d,c as M}from"./resolveTime.439cd54d.js";const v=e=>e.sort((t,s)=>M(t,s)),x=e=>{const t={},s=[];for(const a of e){const r=d(a.frontmatter.date,"year");t[r]?t[r].push(a):t[r]=[a]}for(const a in t){const r=t[a];v(r),s.unshift({year:a,data:r})}return s},N=(e,t)=>t===""?e:e.filter((s,a)=>s.frontmatter.tags.includes(t));async function B(){return(await y()).filter(t=>t.frontmatter.layout==="Post"&&!t.frontmatter.hide)}const k=e=>{const t=v(e);return t.map((s,a)=>{const r=s;return r.next=a>0?{title:t[a-1].title,link:t[a-1].path}:null,r.prev=a<t.length-1?{title:t[a+1].title,link:t[a+1].path}:null,r})},R=e=>{const t=h([]),s=g(),a=P();B().then(n=>t.value=k(n));const r=o(()=>s.value.postNumPerPage),l=o(()=>Math.max(1,Math.ceil(t.value.length/r.value))),u=o(()=>e?Math.max(1,Math.min(e.value,l.value)):-1),c=o(()=>t.value.findIndex(n=>n.path===a.currentRoute.value.path)),i=o(()=>c.value===-1?null:t.value[c.value]),f=o(()=>{if(t.value.length===0||u.value===-1)return t.value;const n=(u.value-1)*r.value;return t.value.slice(n,Math.min(n+r.value,t.value.length))}),m=o(()=>{if(!e)return{};const n=u.value>1?Math.min(e.value,l.value)-1===1?"/":`/page/${e.value-1}`:null,p=u.value<l.value?`/page/${e.value+1}`:null;return{next:n,prev:p}});return{posts:t,postIndex:c,post:i,slicedPosts:f,pagerLink:m}};export{N as f,x as g,R as u};
