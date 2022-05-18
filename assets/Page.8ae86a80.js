import{S as A,U as O,V as j,_ as w,f as D,I as K,g as C,H as P,r as T,o as s,a as n,i as e,s as U,x as m,b as p,F as x,E as R,y as B,W,t as _,d as v,p as F,e as z,P as X,j as I,G as S,w as Y,X as N,N as q,C as J,K as Q,L as Z,Y as ee,k as te,z as M}from"./app.a6c21707.js";import{f as ae}from"./resolveTime.439cd54d.js";const se=i=>!A(i)||/github\.com/.test(i)?"GitHub":/bitbucket\.org/.test(i)?"Bitbucket":/gitlab\.com/.test(i)?"GitLab":/gitee\.com/.test(i)?"Gitee":null,ne={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},re=({docsRepo:i,editLinkPattern:l})=>{if(l)return l;const o=se(i);return o!==null?ne[o]:null},ie=({docsRepo:i,docsBranch:l,docsDir:o,filePathRelative:t,editLinkPattern:g})=>{if(!t)return null;const f=re({docsRepo:i,editLinkPattern:g});return f?f.replace(/:repo/,A(i)?i:`https://github.com/${i}`).replace(/:branch/,l).replace(/:path/,O(`${j(o)}/${t}`)):null},oe={class:"article-header-content"},le={key:0,class:"article-tags"},ce=["onClick"],ue={class:"article-title"},de={key:1,class:"article-subtitle"},me={class:"article-icons"},he={key:0,class:"article-icon"},_e={key:1,class:"article-icon"},pe={key:2,class:"article-icon"},ge={key:1,class:"article-image-credit"},ve=["href"],fe={key:1},ke=D({props:{currentTag:{type:String,default:""}},setup(i){const l=K(),o=C(),t=P(),g=c=>{l.currentRoute.value.path!==`/tags/${c}/`&&l.push({path:`/tags/${c}/`})},f=()=>{const c={};return t.value.layout==="Post"&&t.value.useHeaderImage&&t.value.headerImage&&(c.backgroundImage=`url(${X(t.value.headerImage)})`),c};return(c,k)=>{const a=T("VIcon");return s(),n("div",{class:B(["article-header",{"use-image":e(t).useHeaderImage}]),style:U(f())},[e(t).useHeaderImage&&e(t).headerMask?(s(),n("div",{key:0,class:"article-header-mask",style:U({background:e(t).headerMask})},null,4)):m("",!0),p("div",oe,[e(t).tags?(s(),n("div",le,[(s(!0),n(x,null,R(e(t).tags,(u,h)=>(s(),n("span",{key:h,class:B(["article-tag",{active:i.currentTag==u}]),onClick:W(b=>g(u),["stop"])},_(u),11,ce))),128))])):m("",!0),p("h1",ue,_(e(t).title),1),e(t).subtitle?(s(),n("p",de,_(e(t).subtitle),1)):m("",!0),p("div",me,[e(t).author||e(o).personalInfo.name?(s(),n("div",he,[v(a,{name:"fa-regular-user",scale:"0.9"}),p("span",null,_(e(t).author||e(o).personalInfo.name),1)])):m("",!0),e(t).date?(s(),n("div",_e,[v(a,{name:"fa-regular-calendar",scale:"0.9"}),p("span",null,_(e(ae)(e(t).date)),1)])):m("",!0),e(F).readingTime?(s(),n("div",pe,[v(a,{name:"ri-timer-line",scale:"0.9"}),p("span",null,_(e(F).readingTime.minutes)+" min",1)])):m("",!0)])]),e(t).useHeaderImage&&e(t).headerImageCredit?(s(),n("div",ge,[z(_(e(o).headerImageCredit)+" ",1),e(t).headerImageCreditLink?(s(),n("a",{key:0,href:e(t).headerImageCreditLink,target:"_blank",rel:"noopener noreferrer"},_(e(t).headerImageCredit),9,ve)):(s(),n("span",fe,_(e(t).headerImageCredit),1))])):m("",!0)],6)}}});var ze=w(ke,[["__file","ArticleHeader.vue"]]);const be={class:"page-meta"},Le={key:0,class:"meta-item edit-link"},ye={key:1,class:"meta-item last-updated"},$e={class:"meta-item-label"},Ce={class:"meta-item-info"},Ie={key:2,class:"meta-item contributors"},Pe={class:"meta-item-label"},Te={class:"meta-item-info"},xe=["title"],we=z(", "),De=D({setup(i){const l=()=>{const a=C(),u=N(),h=P();return I(()=>{var H,E,V;if(!((E=(H=h.value.editLink)!=null?H:a.value.editLink)!=null?E:!0))return null;const{repo:r,docsRepo:d=r,docsBranch:L="main",docsDir:y="",editLinkText:$}=a.value;if(!d)return null;const G=ie({docsRepo:d,docsBranch:L,docsDir:y,filePathRelative:u.value.filePathRelative,editLinkPattern:(V=h.value.editLinkPattern)!=null?V:a.value.editLinkPattern});return G?{text:$!=null?$:"Edit this page",link:G}:null})},o=()=>{const a=C(),u=N(),h=P();return I(()=>{var d,L,y,$;return!((L=(d=h.value.lastUpdated)!=null?d:a.value.lastUpdated)!=null?L:!0)||!((y=u.value.git)!=null&&y.updatedTime)?null:new Date(($=u.value.git)==null?void 0:$.updatedTime).toLocaleString()})},t=()=>{const a=C(),u=N(),h=P();return I(()=>{var r,d,L,y;return((d=(r=h.value.contributors)!=null?r:a.value.contributors)!=null?d:!0)&&(y=(L=u.value.git)==null?void 0:L.contributors)!=null?y:null})},g=C(),f=l(),c=o(),k=t();return(a,u)=>{const h=T("VIcon"),b=T("ClientOnly");return s(),n("footer",be,[e(f)?(s(),n("div",Le,[v(h,{name:"fa-pencil-alt",scale:"0.9"}),v(S,{class:"meta-item-label",item:e(f)},null,8,["item"])])):m("",!0),e(c)?(s(),n("div",ye,[p("span",$e,_(e(g).lastUpdatedText)+": ",1),v(b,null,{default:Y(()=>[p("span",Ce,_(e(c)),1)]),_:1})])):m("",!0),e(k)&&e(k).length?(s(),n("div",Ie,[p("span",Pe,_(e(g).contributorsText)+": ",1),p("span",Te,[(s(!0),n(x,null,R(e(k),(r,d)=>(s(),n(x,{key:d},[p("span",{class:"contributor",title:`email: ${r.email}`},_(r.name),9,xe),d!==e(k).length-1?(s(),n(x,{key:0},[we],64)):m("",!0)],64))),128))])])):m("",!0)])}}});var Ne=w(De,[["__file","PageMeta.vue"]]);const Se={key:0,class:"page-nav"},Ge={class:"inner"},He={key:0,class:"prev"},Ee={key:1,class:"next"},Ve=D({setup(i){const l=a=>a===!1?null:Q(a)?Z(a):ee(a)?a:!1,o=(a,u,h)=>{const b=a.findIndex(r=>r.link===u);if(b!==-1){const r=a[b+h];return r!=null&&r.link?r:null}for(const r of a)if(r.children){const d=o(r.children,u,h);if(d)return d}return null},t=P(),g=q(),f=J(),c=I(()=>{const a=l(t.value.prev);return a!==!1?a:o(g.value,f.path,-1)}),k=I(()=>{const a=l(t.value.next);return a!==!1?a:o(g.value,f.path,1)});return(a,u)=>e(c)||e(k)?(s(),n("nav",Se,[p("p",Ge,[e(c)?(s(),n("span",He,[v(S,{item:e(c)},null,8,["item"])])):m("",!0),e(k)?(s(),n("span",Ee,[v(S,{item:e(k)},null,8,["item"])])):m("",!0)])])):m("",!0)}});var Ue=w(Ve,[["__file","PageNav.vue"]]);const Be={class:"page"},Fe={class:"theme-gungnir-content"},Me=D({setup(i){const l=C(),{isDarkMode:o}=te(),t=I(()=>o.value?l.value.giscusDarkTheme:l.value.giscusLightTheme);return(g,f)=>{const c=T("Content"),k=T("GungnirGiscus");return s(),n("main",Be,[M(g.$slots,"top"),p("div",Fe,[v(c)]),v(Ne),v(Ue),M(g.$slots,"bottom"),v(k,{theme:e(t)},null,8,["theme"])])}}});var Oe=w(Me,[["__file","Page.vue"]]);export{ze as A,Oe as P};
