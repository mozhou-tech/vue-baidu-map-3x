import{_ as r,c as n,a as t,b as e,w as h,d as c,f as a,o as i}from"./app.d046b8b1.js";const v='{"title":"\u5B9A\u4F4D\u63A7\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5C5E\u6027","slug":"\u5C5E\u6027"},{"level":2,"title":"\u4E8B\u4EF6","slug":"\u4E8B\u4EF6"},{"level":2,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B"},{"level":3,"title":"\u5728\u5730\u56FE\u53F3\u4E0B\u89D2\u52A0\u5165\u5B9A\u4F4D\u63A7\u4EF6","slug":"\u5728\u5730\u56FE\u53F3\u4E0B\u89D2\u52A0\u5165\u5B9A\u4F4D\u63A7\u4EF6"}],"relativePath":"control/geolocation.md"}',l={},s=c('<h1 id="\u5B9A\u4F4D\u63A7\u4EF6" tabindex="-1">\u5B9A\u4F4D\u63A7\u4EF6 <a class="header-anchor" href="#\u5B9A\u4F4D\u63A7\u4EF6" aria-hidden="true">#</a></h1><p><code>BmGeolocation</code></p><h2 id="\u5C5E\u6027" tabindex="-1">\u5C5E\u6027 <a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027\u540D</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>anchor</td><td>ControlAnchor</td><td></td><td>\u63A7\u4EF6\u505C\u9760\u4F4D\u7F6E</td></tr><tr><td>offset</td><td>Size</td><td></td><td>\u63A7\u4EF6\u504F\u79FB\u503C</td></tr><tr><td>showAddressBar</td><td>Boolean</td><td></td><td>\u662F\u5426\u663E\u793A\u5B9A\u4F4D\u4FE1\u606F\u9762\u677F\u3002\u9ED8\u8BA4\u663E\u793A\u5B9A\u4F4D\u4FE1\u606F\u9762\u677F</td></tr><tr><td>autoLocation</td><td>Boolean</td><td>false</td><td>\u6DFB\u52A0\u63A7\u4EF6\u65F6\u662F\u5426\u8FDB\u884C\u5B9A\u4F4D\u3002\u6839\u636E <a href="https://www.w3.org/TR/geolocation-API/#privacy_for_uas" target="_blank" rel="noopener noreferrer">W3C\u76F8\u5173\u6807\u51C6</a> \u63CF\u8FF0\uFF0C\u4E3A\u4FDD\u8BC1\u7528\u6237\u9690\u79C1\u5B89\u5168\uFF0CgeoLocation API \u5FC5\u987B\u4F7F\u7528 SSL \u8FDE\u63A5\uFF0C\u5E76\u83B7\u5F97\u7528\u6237\u7684\u624B\u52A8\u8BB8\u53EF\u3002\u8BF7\u786E\u4FDD\u4F7F\u7528\u8BE5\u5C5E\u6027\u65F6\u6EE1\u8DB3\u4E0A\u8FF0\u6761\u4EF6\u3002</td></tr><tr><td>locationIcon</td><td>Icon</td><td></td><td>\u53EF\u81EA\u5B9A\u4E49\u5B9A\u4F4D\u4E2D\u5FC3\u70B9\u7684Icon\u6837\u5F0F</td></tr></tbody></table><h2 id="\u4E8B\u4EF6" tabindex="-1">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u53C2\u6570</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>locationSuccess</td><td><code>{point, AddressComponent, marker}</code></td><td>\u5B9A\u4F4D\u6210\u529F\u540E\u89E6\u53D1\u6B64\u4E8B\u4EF6</td></tr><tr><td>locationError</td><td><code>{StatusCode}</code></td><td>\u5B9A\u4F4D\u5931\u8D25\u540E\u89E6\u53D1\u6B64\u4E8B\u4EF6</td></tr></tbody></table><h2 id="\u793A\u4F8B" tabindex="-1">\u793A\u4F8B <a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a></h2><h3 id="\u5728\u5730\u56FE\u53F3\u4E0B\u89D2\u52A0\u5165\u5B9A\u4F4D\u63A7\u4EF6" tabindex="-1">\u5728\u5730\u56FE\u53F3\u4E0B\u89D2\u52A0\u5165\u5B9A\u4F4D\u63A7\u4EF6 <a class="header-anchor" href="#\u5728\u5730\u56FE\u53F3\u4E0B\u89D2\u52A0\u5165\u5B9A\u4F4D\u63A7\u4EF6" aria-hidden="true">#</a></h3><h4 id="\u4EE3\u7801" tabindex="-1">\u4EE3\u7801 <a class="header-anchor" href="#\u4EE3\u7801" aria-hidden="true">#</a></h4>',9);function _(u,p,f,b,m,g){const d=a("bm-geolocation"),o=a("baidu-map");return i(),n("div",null,[s,t("template",null,[t("div",null,[e(o,{class:"map",center:"\u5317\u4EAC"},{default:h(()=>[e(d,{anchor:"BMAP_ANCHOR_BOTTOM_RIGHT",showAddressBar:!0,autoLocation:!0})]),_:1})])])])}var x=r(l,[["render",_]]);export{v as __pageData,x as default};
