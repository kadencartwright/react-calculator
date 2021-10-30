(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],{21:function(e,r,t){},22:function(e,r,t){},28:function(e,r,t){"use strict";t.r(r);var n,a,i,u,o=t(0),c=t.n(o),l=t(12),d=t.n(l),s=(t(21),t(22),t(2)),p=t(5),g=t(3),v=t(4),b=v.a.div(n||(n=Object(g.a)(['\n  display: grid;\n  grid-template-rows: repeat(5, 1fr);\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 2px;\n  width: 400px;\n  height: 520px;\n  grid-template-areas:\n    "AC plusMinus percent divide"\n    "seven eight nine multiply"\n    "four five six subtract"\n    "one two three add"\n    "zero zero period equal";\n']))),j=t(16),h=[{color:"orange",values:[{value:"+",gridArea:"add",type:"operation"},{value:"-",gridArea:"subtract",type:"operation"},{value:"=",gridArea:"equal",type:"operation"},{value:"\xf7",gridArea:"divide",type:"operation"},{value:"\xd7",gridArea:"multiply",type:"operation"}]},{color:"lightGray",values:[{value:".",gridArea:"period",type:"decimal"},{value:"0",gridArea:"zero",type:"number"},{value:"1",gridArea:"one",type:"number"},{value:"2",gridArea:"two",type:"number"},{value:"3",gridArea:"three",type:"number"},{value:"4",gridArea:"four",type:"number"},{value:"5",gridArea:"five",type:"number"},{value:"6",gridArea:"six",type:"number"},{value:"7",gridArea:"seven",type:"number"},{value:"8",gridArea:"eight",type:"number"},{value:"9",gridArea:"nine",type:"number"}]},{color:"darkGray",values:[{value:"AC",gridArea:"AC",type:"clear"},{value:"+/-",gridArea:"plusMinus",type:"modifier"},{value:"%",gridArea:"percent",type:"modifier"}]}].flatMap((function(e){var r=e.color,t=e.values;return Object(j.a)(t.map((function(e){var t=e.value,n=e.gridArea,a=e.type;return{value:t,color:r,gridArea:n,type:a}})))})),f={lightGray:{notPressed:"#7D7A80",pressed:"#9D9D9E"},darkGray:{notPressed:"#383B40",pressed:"#5B5A5E"},orange:{notPressed:"#FFA00A",pressed:"#C97C00"}},m=v.a.button(a||(a=Object(g.a)(["\n  width: 100%;\n  height: 100%;\n  color: white;\n  font-size: 2.5rem;\n  background-color: ",";\n  border: none;\n  &.pressed {\n    background-color: ",";\n  }\n"])),(function(e){var r=e.color;return f[r||"lightGray"].notPressed}),(function(e){var r=e.color;return f[r||"lightGray"].pressed})),O=t(1),y=function(e){var r=Object(o.useState)(!1),t=Object(p.a)(r,2),n=t[0],a=t[1];return Object(O.jsx)(m,Object(s.a)(Object(s.a)({},e),{},{className:n?"pressed":"",onMouseUp:function(){return a(!1)},onMouseDown:function(){return a(!0)},onClick:e.onClick}))},A=function(e){return Object(O.jsx)(b,{children:h.map((function(r){var t=r.color,n=r.value,a=r.gridArea,i=r.type;return Object(O.jsx)("div",{style:{gridArea:a,height:"100%"},children:Object(O.jsx)(y,{value:n,color:t,onClick:function(){return e.onClick({type:i,value:n})},children:n})},n)}))})},x=v.a.div(i||(i=Object(g.a)(["\n  width: 400px;\n  height: 120px;\n  background-color: #545057;\n  align-items: right;\n\n  p {\n    font-weight: 200;\n    color: white;\n    padding-top: 20px;\n    line-height: 100px;\n    width: fit-content;\n    margin-right: 10px;\n    margin-left: auto;\n    font-size: 4rem;\n  }\n"]))),w=function(e){return Object(O.jsx)(x,{children:Object(O.jsx)("p",{children:e.value||"0"})})},k=v.a.div(u||(u=Object(g.a)(["\n  height: 640px;\n  width: 400px;\n  background-color: #514e54;\n  margin-left: auto;\n  margin-right: auto;\n"]))),V=function(e){return Number((e.positive?"+0":"-0")+e.integerValue+"."+e.decimalValue+"0")},C=function(e){var r=Number(e).toString(),t=S();"-"===r[0]&&(t.positive=!1);var n=("-"===r[0]||"+"===r[0]?r.slice(1):r).split("."),a=Object(p.a)(n,2),i=a[0],u=a[1];return t.hasDecimal=!!u,t.decimalValue=u||t.decimalValue,t.integerValue=i,t},S=function(){return{positive:!0,integerValue:"",hasDecimal:!1,decimalValue:""}},D=function(e,r,t){switch(e){case"+":return C((n=t||S(),a=r,V(n)+V(a)));case"-":return C(function(e,r){return V(e)-V(r)}(t||S(),r));case"\xf7":return C(function(e,r){return V(e)/V(r)}(t||S(),r));default:return C(function(e,r){return V(e)*V(r)}(t||S(),r))}var n,a},E=function(){var e=Object(o.useState)(S),r=Object(p.a)(e,2),t=r[0],n=r[1],a=Object(o.useState)(null),i=Object(p.a)(a,2),u=i[0],c=i[1],l=Object(o.useState)(null),d=Object(p.a)(l,2),g=d[0],v=d[1];Object(o.useEffect)((function(){c(V(t).toString())}),[t]);return Object(O.jsxs)(k,{children:[Object(O.jsx)(w,{value:u||"0"}),Object(O.jsx)(A,{onClick:function(e){switch(e.type){case"number":n(Object(s.a)(Object(s.a)({},t),{},{integerValue:t.integerValue+e.value}));break;case"clear":n(S);break;case"operation":!function(e,r,t,n,a){"="===e.value?((null===n||void 0===n?void 0:n.operator)&&r(D(null===n||void 0===n?void 0:n.operator,t,n)),a(null)):((null===n||void 0===n?void 0:n.operator)?a(Object(s.a)(Object(s.a)({},D(n.operator,t,n)),{},{operator:e.value})):a(Object(s.a)(Object(s.a)({},t),{},{operator:e.value})),r(S()))}(e,n,t,g,v);break;case"modifier":switch(e.value){case"+/-":n(Object(s.a)(Object(s.a)({},t),{},{positive:!t.positive}));break;case"%":n(function(e){var r=e.integerValue.length>2?e.integerValue.slice(0,-2):"0",t=(e.integerValue.length>2?e.integerValue.slice(-2):e.integerValue.padStart(2,"0"))+e.decimalValue;return Object(s.a)(Object(s.a)({},e),{},{hasDecimal:!0,integerValue:r,decimalValue:t})}(t));break;default:throw new Error("invalid modifier type")}break;case"decimal":break;default:throw new Error("invalid button type")}}})]})};var G=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(E,{})})};d.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(G,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.1915fd07.chunk.js.map