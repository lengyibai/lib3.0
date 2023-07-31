import{_ as n,h as r,a as d,c as a,b as o,w as u,f as e,i as l}from"./app.970a7209.js";const g=JSON.parse('{"title":"迁移改变","description":"","frontmatter":{},"headers":[],"relativePath":"Components/base/change.md","lastUpdated":1690254337000}'),s={name:"Components/base/change.md"},c=e("h1",{id:"迁移改变",tabindex:"-1"},[l("迁移改变 "),e("a",{class:"header-anchor",href:"#迁移改变","aria-hidden":"true"},"#")],-1),i=e("p",null,[l("由于"),e("code",null,"VitePress"),l("的特性，一些组件无法展示，已从3.0版本移除")],-1),h=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"组件"),e("th",null,"名"),e("th",null,"原因")])]),e("tbody",null,[e("tr",null,[e("td",null,"Swiper"),e("td",null,"Swiper轮播图"),e("td",null,"第三方库无法适配")]),e("tr",null,[e("td",null,"QrCode"),e("td",null,"生成二维码"),e("td",null,"第三方组件无法适配")]),e("tr",null,[e("td",null,"Echarts"),e("td",null,"Echarts图表"),e("td",null,"没必要保留")]),e("tr",null,[e("td",null,"PdrPulSingle"),e("td",null,"上拉加载下拉刷新"),e("td",null,[l("VitePress内的父组件无法引入"),e("code",null,"axios"),l("，导致数据加载失败"),e("br"),l("但在Vue3内应该能正常使用Vue2版的，但需要注意此组件内的图片引入"),e("br"),l("在"),e("code",null,"Vite"),l("内，需要更改引入图片的方式："),e("code",null,"require")])]),e("tr",null,[e("td",null,"SelectAddress"),e("td",null,"省市区选择器"),e("td",null,[l("引用的是"),e("code",null,"Element"),l("组件库的级联选择器，可参考"),e("code",null,"Vue2"),l("版本的组件进行修改")])]),e("tr",null,[e("td",null,"RichText"),e("td",null,"富文本编辑器"),e("td",null,[e("code",null,"Vue3"),l("有更好的富文本编辑器组件："),e("a",{href:"https://www.wangeditor.com",target:"_blank",rel:"noreferrer"},"wangeditor")])])])],-1);function p(_,m,f,x,V,b){const t=r("ContainerBox");return d(),a("div",null,[c,o(t,{title:"Tip"},{desc:u(()=>[i,h]),_:1})])}const C=n(s,[["render",p]]);export{g as __pageData,C as default};