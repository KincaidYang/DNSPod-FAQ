"use strict";(self.webpackChunkdns_pod_cp=self.webpackChunkdns_pod_cp||[]).push([[374],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=m(n),u=a,k=d["".concat(l,".").concat(u)]||d[u]||s[u]||i;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},353:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:5,description:"\u57df\u540d\u8bc1\u4e66\u76f8\u5173\u95ee\u9898\uff08\u5982\u4e0b\u8f7d\u57df\u540d\u8bc1\u4e66\uff09"},o="\u57df\u540d\u8bc1\u4e66",p={unversionedId:"guide/Domain/DomainCertificate",id:"guide/Domain/DomainCertificate",title:"\u57df\u540d\u8bc1\u4e66",description:"\u57df\u540d\u8bc1\u4e66\u76f8\u5173\u95ee\u9898\uff08\u5982\u4e0b\u8f7d\u57df\u540d\u8bc1\u4e66\uff09",source:"@site/docs/guide/Domain/DomainCertificate.md",sourceDirName:"guide/Domain",slug:"/guide/Domain/DomainCertificate",permalink:"/guide/Domain/DomainCertificate",draft:!1,editUrl:"https://github.com/KincaidYang/DNSPod-FAQ/tree/main/blog/docs/guide/Domain/DomainCertificate.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"\u57df\u540d\u8bc1\u4e66\u76f8\u5173\u95ee\u9898\uff08\u5982\u4e0b\u8f7d\u57df\u540d\u8bc1\u4e66\uff09"},sidebar:"tutorialSidebar",previous:{title:"\u57df\u540d\u8f6c\u51fa",permalink:"/guide/Domain/DomainTransferOUT"},next:{title:"\u57df\u540d\u6545\u969c",permalink:"/guide/Domain/DomainFailure"}},l={},m=[{value:"\u5982\u4f55\u4e0b\u8f7d\u57df\u540d\u8bc1\u4e66\uff1f",id:"\u5982\u4f55\u4e0b\u8f7d\u57df\u540d\u8bc1\u4e66",level:2},{value:"\u57df\u540d\u8bc1\u4e66\u6587\u4ef6\u8fc7\u5927\u65e0\u6cd5\u4e0a\u4f20\uff1f",id:"\u57df\u540d\u8bc1\u4e66\u6587\u4ef6\u8fc7\u5927\u65e0\u6cd5\u4e0a\u4f20",level:2},{value:"\u65b9\u6cd5\u4e00\uff1a\u4f7f\u7528\u5fae\u4fe1\u538b\u7f29\u8bc1\u4e66\u56fe\u7247",id:"\u65b9\u6cd5\u4e00\u4f7f\u7528\u5fae\u4fe1\u538b\u7f29\u8bc1\u4e66\u56fe\u7247",level:3},{value:"\u65b9\u6cd5\u4e8c\uff1a\u4f7f\u7528\u753b\u56fe\u5de5\u5177\u538b\u7f29\u8bc1\u4e66\u56fe\u7247",id:"\u65b9\u6cd5\u4e8c\u4f7f\u7528\u753b\u56fe\u5de5\u5177\u538b\u7f29\u8bc1\u4e66\u56fe\u7247",level:3},{value:"\u65b9\u6cd5\u4e09\uff1a\u4f7f\u7528\u5728\u7ebf\u5de5\u5177\u538b\u7f29\u8bc1\u4e66\u56fe\u7247",id:"\u65b9\u6cd5\u4e09\u4f7f\u7528\u5728\u7ebf\u5de5\u5177\u538b\u7f29\u8bc1\u4e66\u56fe\u7247",level:3}],c={toc:m};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u57df\u540d\u8bc1\u4e66"},"\u57df\u540d\u8bc1\u4e66"),(0,a.kt)("p",null,"\u672c\u6587\u6863\u5c06\u4e3a\u60a8\u4ecb\u7ecd\u5982\u4f55\u89e3\u51b3\u57df\u540d\u8bc1\u4e66\u76f8\u5173\u95ee\u9898\uff0c\u60a8\u53ef\u901a\u8fc7\u53f3\u4fa7\u76ee\u5f55\u5feb\u901f\u9009\u62e9\u60a8\u9047\u5230\u7684\u95ee\u9898\u3002"),(0,a.kt)("h2",{id:"\u5982\u4f55\u4e0b\u8f7d\u57df\u540d\u8bc1\u4e66"},"\u5982\u4f55\u4e0b\u8f7d\u57df\u540d\u8bc1\u4e66\uff1f"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u767b\u5f55 ",(0,a.kt)("a",{parentName:"p",href:"https://console.cloud.tencent.com/domain"},"\u817e\u8baf\u4e91\u57df\u540d\u63a7\u5236\u53f0"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u627e\u5230\u9700\u8981\u4e0b\u8f7d\u8bc1\u4e66\u7684\u57df\u540d\uff0c\u5355\u51fb\u53f3\u4fa7",(0,a.kt)("strong",{parentName:"p"},"\u66f4\u591a>\u4e0b\u8f7d\u57df\u540d\u8bc1\u4e66"),"\u3002\n",(0,a.kt)("img",{parentName:"p",src:"https://resources.r2wind.cn/img/dnspodfaq/domain/20221118153432.png",alt:"\u4e0b\u8f7d\u57df\u540d\u8bc1\u4e66"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728\u5f39\u51fa\u5bf9\u8bdd\u6846\u4e2d\u5355\u51fb",(0,a.kt)("strong",{parentName:"p"},"\u4e0b\u8f7d\u8bc1\u4e66"),"\uff0c\u5373\u53ef\u4e0b\u8f7d\u8bc1\u4e66\u3002\n",(0,a.kt)("img",{parentName:"p",src:"https://resources.r2wind.cn/img/dnspodfaq/domain/20221118154810.png",alt:"\u4e0b\u8f7d\u8bc1\u4e66"})))),(0,a.kt)("h2",{id:"\u57df\u540d\u8bc1\u4e66\u6587\u4ef6\u8fc7\u5927\u65e0\u6cd5\u4e0a\u4f20"},"\u57df\u540d\u8bc1\u4e66\u6587\u4ef6\u8fc7\u5927\u65e0\u6cd5\u4e0a\u4f20\uff1f"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u60a8\u53ef\u80fd\u5728\u8fdb\u884c\u5907\u6848\u65f6\u9700\u8981\u4e0a\u4f20\u57df\u540d\u8bc1\u4e66\uff0c\u4f46\u53ef\u80fd\u7531\u4e8e\u57df\u540d\u8bc1\u4e66\u6587\u4ef6\u5927\u5c0f\u8d85\u51fa\u9650\u5236\uff0c\u5bfc\u81f4\u65e0\u6cd5\u4e0a\u4f20\uff0c\u53ef\u53c2\u7167\u4ee5\u4e0b\u65b9\u6cd5\u8fdb\u884c\u89e3\u51b3\u3002")),(0,a.kt)("h3",{id:"\u65b9\u6cd5\u4e00\u4f7f\u7528\u5fae\u4fe1\u538b\u7f29\u8bc1\u4e66\u56fe\u7247"},"\u65b9\u6cd5\u4e00\uff1a\u4f7f\u7528\u5fae\u4fe1\u538b\u7f29\u8bc1\u4e66\u56fe\u7247"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6253\u5f00\u5fae\u4fe1\uff0c\u901a\u8fc7\u5fae\u4fe1\u6587\u4ef6\u4f20\u8f93\u52a9\u624b\u5c06\u8bc1\u4e66\u56fe\u7247\u53d1\u9001\u5230\u624b\u673a\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u624b\u673a\u4e2d\u6253\u5f00\u5fae\u4fe1\uff0c\u5355\u51fb",(0,a.kt)("strong",{parentName:"p"},"\u6587\u4ef6\u4f20\u8f93\u52a9\u624b"),"\uff0c\u5355\u51fb",(0,a.kt)("strong",{parentName:"p"},"\u8bc1\u4e66\u56fe\u7247"),"\uff0c\u957f\u6309\u4fdd\u5b58\u5230\u624b\u673a\u3002"),(0,a.kt)("admonition",{parentName:"li",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u4fdd\u5b58\u56fe\u7247\u524d\u8bf7\u70b9\u51fb\u67e5\u770b\u539f\u56fe\uff0c\u5f85\u539f\u56fe\u52a0\u8f7d\u5b8c\u6210\u540e\u4fdd\u5b58\u3002"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4fdd\u5b58\u540e\u5728\u624b\u673a\u5fae\u4fe1\u5c06\u8bc1\u4e66\u56fe\u7247\u901a\u8fc7\u6587\u4ef6\u4f20\u8f93\u52a9\u624b\u53d1\u9001\u5230\u7535\u8111\u3002"),(0,a.kt)("admonition",{parentName:"li",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u9009\u62e9\u56fe\u7247\u65f6\u8bf7\u4e0d\u8981\u9009\u62e9\u539f\u56fe\uff0c\u5426\u5219\u5c06\u5bfc\u81f4\u6b64\u65b9\u6cd5\u5931\u6548\u3002"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728\u7535\u8111\u4e2d\u4fdd\u5b58\u521a\u521a\u53d1\u9001\u7684\u56fe\u7247\uff0c\u5e76\u524d\u5f80\u5bf9\u5e94\u7684\u5907\u6848\u7cfb\u7edf\u5b8c\u6210\u4e0a\u4f20\u3002"))),(0,a.kt)("h3",{id:"\u65b9\u6cd5\u4e8c\u4f7f\u7528\u753b\u56fe\u5de5\u5177\u538b\u7f29\u8bc1\u4e66\u56fe\u7247"},"\u65b9\u6cd5\u4e8c\uff1a\u4f7f\u7528\u753b\u56fe\u5de5\u5177\u538b\u7f29\u8bc1\u4e66\u56fe\u7247"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u53f3\u952e\u5355\u51fb\u8bc1\u4e66\u56fe\u7247\uff0c\u9009\u62e9",(0,a.kt)("strong",{parentName:"p"},"\u6253\u5f00\u65b9\u5f0f>\u753b\u56fe"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,a.kt)("strong",{parentName:"p"},"\u91cd\u8bbe\u5927\u5c0f"),"\n",(0,a.kt)("img",{parentName:"p",src:"https://resources.r2wind.cn/img/dnspodfaq/domain/20221118161455.png",alt:"\u91cd\u8bbe\u5927\u5c0f"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728\u5f39\u51fa\u5bf9\u8bdd\u6846\u4e2d\u5c06",(0,a.kt)("strong",{parentName:"p"},"\u6c34\u5e73"),"\u548c",(0,a.kt)("strong",{parentName:"p"},"\u5782\u76f4"),"\u8c03\u6574\u4e3a",(0,a.kt)("strong",{parentName:"p"},"50"),"\uff0c\u5355\u51fb",(0,a.kt)("strong",{parentName:"p"},"\u786e\u5b9a"),"\u3002\n",(0,a.kt)("img",{parentName:"p",src:"https://resources.r2wind.cn/img/dnspodfaq/domain/20221118162336.png",alt:"\u8c03\u6574\u5927\u5c0f"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u8c03\u6574\u5b8c\u6210\u540e\u4fdd\u5b58\u5373\u53ef\u3002"))),(0,a.kt)("h3",{id:"\u65b9\u6cd5\u4e09\u4f7f\u7528\u5728\u7ebf\u5de5\u5177\u538b\u7f29\u8bc1\u4e66\u56fe\u7247"},"\u65b9\u6cd5\u4e09\uff1a\u4f7f\u7528\u5728\u7ebf\u5de5\u5177\u538b\u7f29\u8bc1\u4e66\u56fe\u7247"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6253\u5f00 ",(0,a.kt)("a",{parentName:"p",href:"https://tinypng.com/"},"\u5728\u7ebf\u56fe\u7247\u538b\u7f29"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4e0a\u4f20\u9700\u8981\u538b\u7f29\u7684\u57df\u540d\u8bc1\u4e66\u56fe\u7247\uff0c\u538b\u7f29\u5b8c\u6210\u540e\u70b9\u51fb Download all \u5373\u53ef\u4e0b\u8f7d\u538b\u7f29\u540e\u7684\u56fe\u7247\u3002\n",(0,a.kt)("img",{parentName:"p",src:"https://resources.r2wind.cn/img/dnspodfaq/domain/20221118162722.png",alt:"\u538b\u7f29\u56fe\u7247"})))))}s.isMDXComponent=!0}}]);