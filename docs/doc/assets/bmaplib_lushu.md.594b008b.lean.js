import{_ as x}from"./chunks/preload-helper.c3ed1176.js";import{r as t,g as T,c as S,d as n,b,w as V,t as B,k,v as P,l as g,a as v,f as m,o as h,h as C,i as A,j as D}from"./app.b86df7e7.js";const N=v("",8),I=n("thead",null,[n("tr",null,[n("th",null,"\u64CD\u4F5C"),n("th",null,"\u65CB\u8F6C"),n("th",null,"\u884C\u8FDB\u901F\u5EA6"),n("th",null,"\u7A97\u4F53\u5185\u5BB9")])],-1),R=v("",1),M='{"title":"\u8DEF\u4E66","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5C5E\u6027","slug":"\u5C5E\u6027"},{"level":2,"title":"\u4E8B\u4EF6","slug":"\u4E8B\u4EF6"},{"level":2,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B"},{"level":3,"title":"\u8FD8\u539F\u5929\u5B89\u95E8\u5230\u767E\u5EA6\u5927\u53A6\u7684\u9A7E\u8F66\u8DEF\u5F84","slug":"\u8FD8\u539F\u5929\u5B89\u95E8\u5230\u767E\u5EA6\u5927\u53A6\u7684\u9A7E\u8F66\u8DEF\u5F84"}],"relativePath":"bmaplib/lushu.md"}',E={},U=Object.assign(E,{setup(L){const i=t("play_arrow"),d=t([]),o=t(!0),e=t(!1),l=t("\u4E00\u8A00\u4E0D\u5408\u5C31\u5F00\u8F66"),c=t(5e3),q=t({url:"http://api.map.baidu.com/library/LuShu/1.2/examples/car.png",size:{width:52,height:26},opts:{anchor:{width:27,height:13}}}),u=t(null);T(()=>{x(()=>import("./chunks/Lushu.8dbed5da.js"),["assets/chunks/Lushu.8dbed5da.js","assets/app.b86df7e7.js"]).then(p=>{u.value=p.default})});const r=p=>{i.value=p,p==="play_arrow"&&(e.value=!1)},y=()=>{e.value=!e.value},f=p=>{d.value=p.getPlan(0).getRoute(0).getPath()};return(p,a)=>{const _=m("bm-driving"),w=m("baidu-map");return h(),S("div",null,[N,n("div",null,[b(w,{class:"map",center:{lng:116.404,lat:39.915},zoom:11},{default:V(()=>[b(_,{start:"\u5929\u5B89\u95E8",end:"\u767E\u5EA6\u5927\u53A6",onSearchcomplete:f,panel:!1,autoViewport:!0}),u.value?(h(),C(A(u.value),{key:0,onStart:a[0]||(a[0]=s=>r("pause")),onStop:a[1]||(a[1]=s=>r("play_arrow")),onPause:a[2]||(a[2]=s=>r("play_arrow")),path:d.value,rotation:o.value,content:l.value,infoWindow:!0,speed:c.value,icon:q.value,play:e.value},null,8,["path","rotation","content","speed","icon","play"])):D("",!0)]),_:1},8,["center"]),n("table",null,[I,n("tbody",null,[n("tr",null,[n("td",null,[n("span",{onClick:y},B(i.value),1)]),n("td",null,[k(n("input",{"onUpdate:modelValue":a[3]||(a[3]=s=>o.value=s),type:"radio",name:"lushu"},null,512),[[P,o.value]])]),n("td",null,[k(n("input",{"onUpdate:modelValue":a[4]||(a[4]=s=>c.value=s),type:"text"},null,512),[[g,c.value,void 0,{number:!0}]])]),n("td",null,[k(n("input",{"onUpdate:modelValue":a[5]||(a[5]=s=>l.value=s),type:"text"},null,512),[[g,l.value]])])])])])]),R])}}});export{M as __pageData,U as default};
