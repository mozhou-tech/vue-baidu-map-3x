import{r as s,c as h,a as d,b as o,w as _,d as p,f as n,o as u}from"./app.d046b8b1.js";const b=p("",8),v='{"title":"\u6D77\u91CF\u70B9","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5C5E\u6027","slug":"\u5C5E\u6027"},{"level":2,"title":"\u4E8B\u4EF6","slug":"\u4E8B\u4EF6"},{"level":2,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B"},{"level":3,"title":"\u6DFB\u52A0 1000 \u4E2A\u968F\u673A\u70B9","slug":"\u6DFB\u52A0-1000-\u4E2A\u968F\u673A\u70B9"}],"relativePath":"overlay/point-collection.md"}',m={},P=Object.assign(m,{setup(f){const r=s([]),l=t=>{alert(`\u5355\u51FB\u70B9\u7684\u5750\u6807\u4E3A\uFF1A${t.point.lng}\uFF0C${t.point.lat}`)},c=()=>{const t=[];for(var e=0;e<1e3;e++){const a={lng:Math.random()*40+85,lat:Math.random()*30+21};t.push(a)}r.value=t};return(t,e)=>{const a=n("bm-point-collection"),i=n("baidu-map");return u(),h("div",null,[b,d("template",null,[d("div",null,[o(i,{class:"map",onInit:c,center:{lng:105,lat:38},zoom:4},{default:_(()=>[o(a,{points:r.value,shape:"BMAP_POINT_SHAPE_STAR",color:"red",size:"BMAP_POINT_SIZE_SMALL",onClick:l},null,8,["points"])]),_:1},8,["center"])])])])}}});export{v as __pageData,P as default};
