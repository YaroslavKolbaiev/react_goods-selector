(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(5),r=n.n(c),a=n(4),s=n(6),o=n(7),l=n(9),i=n(8),u=n(1),d=n.n(u),p=n(2),m=n.n(p),h=(n(14),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),j=n(0),b=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={selectedItem:["Jam"]},e.selectButton=function(t){e.setState((function(e){return{selectedItem:[].concat(Object(a.a)(e.selectedItem),[t])}}))},e.removeButton=function(t){var n,c=null===(n=t.currentTarget.parentElement)||void 0===n?void 0:n.innerText.split("\n").slice(0,1).toString();e.setState((function(e){return{selectedItem:Object(a.a)(e.selectedItem).filter((function(e){return e!==c}))}}))},e.titleText=function(){var t=e.state.selectedItem;switch(t.length){default:return"".concat(t.map((function(e,t,n){return t===n.length-2?e:t===n.length-1?"and ".concat(e):"".concat(e,",")})).join(" ")," are selected");case 0:return"No goods selected";case 1:return"".concat(t.toString()," is selected");case 2:return"".concat(t.map((function(e,t,n){return t===n.length-1?"and ".concat(e):e})).join(" ")," are selected")}},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.state.selectedItem;return Object(j.jsx)("main",{className:"App",children:Object(j.jsxs)("div",{className:"App__wrapper",children:[Object(j.jsx)("header",{className:"App__header",children:Object(j.jsxs)("h1",{className:"App__title",children:[this.titleText(),Object(j.jsx)("button",{type:"button",className:d()("App__clear",{"App__clear--active":!t.length}),onClick:function(){e.setState({selectedItem:[]})},children:"Clear"})]})}),Object(j.jsx)("ul",{className:"App__list",children:h.map((function(n){return Object(j.jsxs)("li",{className:d()("Good",{"Good--active":t.includes(n)}),children:[n,Object(j.jsx)("button",{type:"button",className:d()("Good__select",{"Good__select--active":t.includes(n)}),onClick:function(){return e.selectButton(n)},children:"Select"}),Object(j.jsx)("button",{type:"button",className:d()("Good__remove",{"Good__remove--active":!t.includes(n)}),onClick:function(t){return e.removeButton(t)},children:"Remove"})]},n)}))})]})})}}]),n}(m.a.Component);r.a.render(Object(j.jsx)(b,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.69117b09.chunk.js.map