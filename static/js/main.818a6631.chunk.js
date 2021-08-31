(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{21:function(n,e,t){},25:function(n,e,t){"use strict";t.r(e);var r,o,c,i,a,d,s,l,u,b,j,g,h,O,f,p,x,m,k=t(1),v=t.n(k),y=t(12),w=t.n(y),D=(t(21),t(16)),C=t(6),S=t(5),T=t(2),F=t(3),H=F.c.button(r||(r=Object(T.a)(["\n  background-color: teal;\n  color: rgb(230, 230, 230);\n  padding: 10px;\n  transition: background 1s, transform 1s;\n\n  &:hover {\n    background-color: hsl(180, 100%, 30%);\n    transform: scale(1.1);\n  }\n"]))),A=F.c.form(o||(o=Object(T.a)(["\n  display: grid;\n  grid-template-columns: 1fr auto;\n  grid-gap: 10px;\n\n  @media (max-width: 767px) {\n    grid-template-columns: 1fr;\n  }\n"]))),I=F.c.input(c||(c=Object(T.a)(["\n  padding: 10px;\n  background-color: white;\n  border: 1px solid rgb(220, 220, 220);\n"]))),J=t(0),N=function(n){var e=n.addNewTask,t=Object(k.useState)(""),r=Object(S.a)(t,2),o=r[0],c=r[1],i=Object(k.useRef)(null);return Object(J.jsxs)(A,{onSubmit:function(n){n.preventDefault(),e(o.trim()),c("")},children:[Object(J.jsx)(I,{value:o,type:"text",placeholder:"What do you have to do?",onChange:function(n){var e=n.target;return c(e.value)},ref:i}),Object(J.jsx)(H,{disabled:""===o.trim(),onClick:function(){i.current.focus()},children:"Add new task"})]})},L=F.c.ul(i||(i=Object(T.a)(["\n  background-color: white;\n  list-style: none;\n  padding: 0;\n"]))),M=F.c.li(a||(a=Object(T.a)(["\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  align-items: center;\n  grid-gap: 10px;\n  padding: 10px;\n  border-bottom: 1px solid rgb(218, 218, 218);\n\n  ",";\n"])),(function(n){return n.hidden&&Object(F.b)(d||(d=Object(T.a)(["\n      display: none;\n    "])))})),z=F.c.span(s||(s=Object(T.a)(["\n  overflow-wrap: anywhere;\n\n  ","\n"])),(function(n){return n.done&&Object(F.b)(l||(l=Object(T.a)(["\n      text-decoration: line-through;\n    "])))})),B=F.c.button(u||(u=Object(T.a)(["\n  width: 30px;\n  height: 30px;\n  color: white;\n\n  ","\n\n  ","\n"])),(function(n){return n.toggleDone&&Object(F.b)(b||(b=Object(T.a)(["\n      background-color: hsl(120, 100%, 25%);\n      transition: background 1s;\n\n      &:hover {\n        background-color: hsl(120, 100%, 35%);\n      }\n    "])))}),(function(n){return n.remove&&Object(F.b)(j||(j=Object(T.a)(["\n      background-color: rgb(210, 5, 15);\n      transition: background 1s;\n\n      &:hover {\n        background-color: hsl(357, 95%, 50%)\n      }\n    "])))})),E=function(n){var e=n.tasks,t=n.hideDone,r=n.removeTask,o=n.toggleTaskDone;return Object(J.jsx)(L,{children:e.map((function(n){return Object(J.jsxs)(M,{hidden:n.done&&t,children:[Object(J.jsx)(B,{onClick:function(){return o(n.id)},toggleDone:!0,children:n.done?"\u2714":""}),Object(J.jsx)(z,{done:n.done,children:n.content}),Object(J.jsx)(B,{onClick:function(){return r(n.id)},remove:!0,children:"\ud83d\uddd1"})]},n.id)}))})},P=F.c.section(g||(g=Object(T.a)(["\n\n  display: grid;\n  grid-template-columns: auto auto;\n  grid-gap: 20px;\n\n  @media (max-width: 767px) {\n    grid-template-columns: 1fr;\n  }\n"]))),R=F.c.button(h||(h=Object(T.a)(["\n  transition: background 1s;\n  border: none;\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  ","\n"])),(function(n){return n.secondary&&Object(F.b)(O||(O=Object(T.a)(["\n      background-color: transparent;\n      color: hsl(180, 100%, 25%);\n      transition: color 1s;\n      margin: 0 10px 0 0;\n\n      &:hover {\n        color: hsl(180, 100%, 30%);\n      }\n\n      &:disabled {\n        color: grey;\n      }\n    "])))})),W=function(n){var e=n.tasks,t=n.hideDone,r=n.toggleHideDone,o=n.setAllDone;return e.length>0&&Object(J.jsx)(P,{children:e.length>0&&Object(J.jsxs)(J.Fragment,{children:[Object(J.jsxs)(R,{onClick:r,disabled:!e.some((function(n){return n.done})),secondary:!0,children:[t?"Show":"Hide"," finished tasks"]}),Object(J.jsx)(R,{onClick:o,disabled:e.every((function(n){return n.done})),secondary:!0,children:"Mark all done"})]})})},q=F.c.section(f||(f=Object(T.a)(["\n  display: grid;\n  grid-template-rows: auto minmax(50px, 1fr);\n  grid-gap: 5px;\n"]))),G=F.c.div(p||(p=Object(T.a)(["\n  display: grid;\n  grid-template-columns: 1fr auto;\n  padding: 0 0 0 15px;\n  background-color: white;\n"]))),K=F.c.div(x||(x=Object(T.a)(["\n  padding: 20px;\n  background-color: white;\n"]))),Q=function(n){var e=n.title,t=n.body,r=n.extraHeaderContent;return Object(J.jsxs)(q,{children:[Object(J.jsxs)(G,{children:[Object(J.jsx)("h2",{children:e}),r]}),Object(J.jsx)(K,{children:t})]})},U=function(n){var e=n.title;return Object(J.jsx)("header",{children:Object(J.jsx)("h1",{children:e})})},V=F.c.main(m||(m=Object(T.a)(["\n  display: grid;\n  grid-template-rows: auto 1fr;\n  grid-gap: 10px;\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 10px;\n"]))),X=function(n){var e=n.children;return Object(J.jsx)(V,{children:e})};var Y,Z=function(){var n=Object(k.useState)(!1),e=Object(S.a)(n,2),t=e[0],r=e[1],o=localStorage.getItem("tasks"),c=Object(k.useState)(o?JSON.parse(o):[]),i=Object(S.a)(c,2),a=i[0],d=i[1];return Object(k.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(a))}),[a]),Object(J.jsxs)(X,{children:[Object(J.jsx)(U,{title:"To-Do List"}),Object(J.jsx)(Q,{title:"Add new task",body:Object(J.jsx)(N,{addNewTask:function(n){d((function(e){return[].concat(Object(D.a)(e),[{content:n,done:!1,id:e.length?e[e.length-1].id+1:1}])}))}})}),Object(J.jsx)(Q,{title:"Task list",body:Object(J.jsx)(E,{tasks:a,hideDone:t,removeTask:function(n){d((function(e){return e.filter((function(e){return e.id!==n}))}))},toggleTaskDone:function(n){d((function(e){return e.map((function(e){return e.id===n?Object(C.a)(Object(C.a)({},e),{},{done:!e.done}):e}))}))}}),extraHeaderContent:Object(J.jsx)(W,{tasks:a,hideDone:t,toggleHideDone:function(){r((function(n){return!n}))},setAllDone:function(){d((function(n){return n.map((function(n){return Object(C.a)(Object(C.a)({},n),{},{done:!0})}))}))}})})]})},$=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,26)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,c=e.getLCP,i=e.getTTFB;t(n),r(n),o(n),c(n),i(n)}))},_=Object(F.a)(Y||(Y=Object(T.a)(["\n    html {\n  box-sizing: border-box;\n}\n\n    *, ::after, ::before {\n  box-sizing: inherit;\n}\n\n    body {\n  font-family: 'Montserrat', sans-serif;\n  background-color: #eee;\n}\n"])));w.a.render(Object(J.jsxs)(v.a.StrictMode,{children:[Object(J.jsx)(_,{}),Object(J.jsx)(Z,{})]}),document.getElementById("root")),$()}},[[25,1,2]]]);
//# sourceMappingURL=main.818a6631.chunk.js.map