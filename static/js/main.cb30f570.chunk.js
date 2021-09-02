(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{21:function(n,e,t){},25:function(n,e,t){"use strict";t.r(e);var o,r,c,a,i,d,s,l,u,b,j,g,h,O,f,p,x,m,k=t(1),v=t.n(k),w=t(12),y=t.n(w),D=(t(21),t(4)),T=t(2),C=t(3),S=C.c.button(o||(o=Object(T.a)(["\n  background-color: teal;\n  color: rgb(230, 230, 230);\n  padding: 10px;\n  transition: background 1s, transform 1s;\n\n  &:hover {\n    background-color: hsl(180, 100%, 30%);\n    transform: scale(1.1);\n  }\n"]))),A=C.c.form(r||(r=Object(T.a)(["\n  display: grid;\n  grid-template-columns: 1fr auto;\n  grid-gap: 10px;\n\n  @media (max-width: 767px) {\n    grid-template-columns: 1fr;\n  }\n"]))),N=C.c.input(c||(c=Object(T.a)(["\n  padding: 10px;\n  background-color: white;\n  border: 1px solid rgb(220, 220, 220);\n"]))),F=t(0),H=function(n){var e=n.addNewTask,t=Object(k.useState)(""),o=Object(D.a)(t,2),r=o[0],c=o[1],a=Object(k.useRef)(null);return Object(F.jsxs)(A,{onSubmit:function(n){n.preventDefault(),e(r.trim()),c("")},children:[Object(F.jsx)(N,{value:r,type:"text",placeholder:"What do you have to do?",onChange:function(n){var e=n.target;return c(e.value)},ref:a}),Object(F.jsx)(S,{disabled:""===r.trim(),onClick:function(){a.current.focus()},children:"Add new task"})]})},I=C.c.ul(a||(a=Object(T.a)(["\n  background-color: white;\n  list-style: none;\n  padding: 0;\n"]))),J=C.c.li(i||(i=Object(T.a)(["\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  align-items: center;\n  grid-gap: 10px;\n  padding: 10px;\n  border-bottom: 1px solid rgb(218, 218, 218);\n\n  ",";\n"])),(function(n){return n.hidden&&Object(C.b)(d||(d=Object(T.a)(["\n      display: none;\n    "])))})),L=C.c.span(s||(s=Object(T.a)(["\n  overflow-wrap: anywhere;\n\n  ","\n"])),(function(n){return n.done&&Object(C.b)(l||(l=Object(T.a)(["\n      text-decoration: line-through;\n    "])))})),M=C.c.button(u||(u=Object(T.a)(["\n  width: 30px;\n  height: 30px;\n  color: white;\n  border: none;\n\n  ","\n\n  ","\n"])),(function(n){return n.toggleDone&&Object(C.b)(b||(b=Object(T.a)(["\n      background-color: hsl(120, 100%, 25%);\n      transition: background 1s;\n\n      &:hover {\n        background-color: hsl(120, 100%, 35%);\n      }\n    "])))}),(function(n){return n.remove&&Object(C.b)(j||(j=Object(T.a)(["\n      background-color: rgb(210, 5, 15);\n      transition: background 1s;\n\n      &:hover {\n        background-color: hsl(357, 95%, 50%);\n      }\n    "])))})),z=function(n){var e=n.tasks,t=n.hideDone,o=n.removeTask,r=n.toggleTaskDone;return Object(F.jsx)(I,{children:e.map((function(n){return Object(F.jsxs)(J,{hidden:n.done&&t,children:[Object(F.jsx)(M,{onClick:function(){return r(n.id)},toggleDone:!0,children:n.done?"\u2714":""}),Object(F.jsx)(L,{done:n.done,children:n.content}),Object(F.jsx)(M,{onClick:function(){return o(n.id)},remove:!0,children:"\ud83d\uddd1"})]},n.id)}))})},B=C.c.section(g||(g=Object(T.a)(["\n\n  display: grid;\n  grid-template-columns: auto auto;\n  grid-gap: 20px;\n\n  @media (max-width: 767px) {\n    grid-template-columns: 1fr;\n  }\n"]))),E=C.c.button(h||(h=Object(T.a)(["\n  transition: background 1s;\n  border: none;\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  ","\n"])),(function(n){return n.secondary&&Object(C.b)(O||(O=Object(T.a)(["\n      background-color: transparent;\n      color: hsl(180, 100%, 25%);\n      transition: color 1s;\n      margin: 0 10px 0 0;\n\n      &:hover {\n        color: hsl(180, 100%, 30%);\n      }\n\n      &:disabled {\n        color: grey;\n      }\n    "])))})),P=function(n){var e=n.tasks,t=n.hideDone,o=n.toggleHideDone,r=n.setAllDone;return e.length>0&&Object(F.jsx)(B,{children:e.length>0&&Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)(E,{onClick:o,disabled:!e.some((function(n){return n.done})),secondary:!0,children:[t?"Show":"Hide"," finished tasks"]}),Object(F.jsx)(E,{onClick:r,disabled:e.every((function(n){return n.done})),secondary:!0,children:"Mark all done"})]})})},R=C.c.section(f||(f=Object(T.a)(["\n  display: grid;\n  grid-template-rows: auto minmax(50px, 1fr);\n  grid-gap: 5px;\n"]))),W=C.c.div(p||(p=Object(T.a)(["\n  display: grid;\n  grid-template-columns: 1fr auto;\n  padding: 0 0 0 15px;\n  background-color: white;\n"]))),q=C.c.div(x||(x=Object(T.a)(["\n  padding: 20px;\n  background-color: white;\n"]))),G=function(n){var e=n.title,t=n.body,o=n.extraHeaderContent;return Object(F.jsxs)(R,{children:[Object(F.jsxs)(W,{children:[Object(F.jsx)("h2",{children:e}),o]}),Object(F.jsx)(q,{children:t})]})},K=function(n){var e=n.title;return Object(F.jsx)("header",{children:Object(F.jsx)("h1",{children:e})})},Q=C.c.main(m||(m=Object(T.a)(["\n  display: grid;\n  grid-template-rows: auto 1fr;\n  grid-gap: 10px;\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 10px;\n"]))),U=function(n){var e=n.children;return Object(F.jsx)(Q,{children:e})},V=t(16),X=t(6);var Y,Z=function(){var n=function(){var n=localStorage.getItem("tasks"),e=Object(k.useState)(n?JSON.parse(n):[]),t=Object(D.a)(e,2),o=t[0],r=t[1];return Object(k.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(o))}),[o]),{tasks:o,removeTask:function(n){r((function(e){return e.filter((function(e){return e.id!==n}))}))},toggleTaskDone:function(n){r((function(e){return e.map((function(e){return e.id===n?Object(X.a)(Object(X.a)({},e),{},{done:!e.done}):e}))}))},setAllDone:function(){r((function(n){return n.map((function(n){return Object(X.a)(Object(X.a)({},n),{},{done:!0})}))}))},addNewTask:function(n){r((function(e){return[].concat(Object(V.a)(e),[{content:n,done:!1,id:e.length?e[e.length-1].id+1:1}])}))}}}(),e=n.tasks,t=n.removeTask,o=n.toggleTaskDone,r=n.setAllDone,c=n.addNewTask,a=Object(k.useState)(!1),i=Object(D.a)(a,2),d=i[0],s=i[1];return Object(F.jsxs)(U,{children:[Object(F.jsx)(K,{title:"To-Do List"}),Object(F.jsx)(G,{title:"Add new task",body:Object(F.jsx)(H,{addNewTask:c})}),Object(F.jsx)(G,{title:"Task list",body:Object(F.jsx)(z,{tasks:e,hideDone:d,removeTask:t,toggleTaskDone:o}),extraHeaderContent:Object(F.jsx)(P,{tasks:e,hideDone:d,toggleHideDone:function(){s((function(n){return!n}))},setAllDone:r})})]})},$=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,26)).then((function(e){var t=e.getCLS,o=e.getFID,r=e.getFCP,c=e.getLCP,a=e.getTTFB;t(n),o(n),r(n),c(n),a(n)}))},_=Object(C.a)(Y||(Y=Object(T.a)(["\n    html {\n  box-sizing: border-box;\n}\n\n    *, ::after, ::before {\n  box-sizing: inherit;\n}\n\n    body {\n  font-family: 'Montserrat', sans-serif;\n  background-color: #eee;\n}\n"])));y.a.render(Object(F.jsxs)(v.a.StrictMode,{children:[Object(F.jsx)(_,{}),Object(F.jsx)(Z,{})]}),document.getElementById("root")),$()}},[[25,1,2]]]);
//# sourceMappingURL=main.cb30f570.chunk.js.map