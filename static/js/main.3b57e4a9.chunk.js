(this["webpackJsonptodo-ts"]=this["webpackJsonptodo-ts"]||[]).push([[0],{26:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n(0),r=n.n(o),s=n(17),i=n.n(s),a=(n(26),n(8)),d=n(2),l=function(){return Object(c.jsx)("nav",{children:Object(c.jsxs)("div",{className:"nav-wrapper indigo darken-1 p-5",children:[Object(c.jsx)("a",{href:"/todo-ts",className:"brand-logo",children:"Todo with TS"}),Object(c.jsxs)("ul",{className:"right hide-on-med-and-down",children:[Object(c.jsx)("li",{children:Object(c.jsx)(a.b,{to:"/todo-ts",children:"Todo List"})}),Object(c.jsx)("li",{children:Object(c.jsx)(a.b,{to:"/todo-ts/about",children:"Information"})})]})]})})},j=n(19),u=n(20),b=function(e){var t=Object(o.useRef)(null);return Object(c.jsxs)("div",{className:"input-field mt2",children:[Object(c.jsx)("input",{ref:t,type:"text",id:"title",placeholder:"Add your new task",onKeyPress:function(n){""!==n.target.value&&"Enter"===n.key&&(e.onAdd(t.current.value),t.current.value="")}}),Object(c.jsx)("label",{htmlFor:"title",className:"active",children:"New task"})]})},h=function(e){var t=e.todos,n=e.onRemove,o=e.onToggle;if(0===t.length)return Object(c.jsx)("p",{className:"center",children:"No tasks yet!"});return Object(c.jsx)("ul",{children:t.map((function(e){var t,r=["todo"];return e.completed&&r.push("completed"),Object(c.jsx)("li",{className:r.join(" "),children:Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{type:"checkbox",checked:e.completed,onChange:(t=e.id,function(e){return o(e.target.checked,t)})}),Object(c.jsx)("span",{children:e.title}),Object(c.jsx)("i",{className:"material-icons red-text",onClick:function(t){return function(e,t){e.preventDefault(),n(t)}(t,e.id)},children:"delete"})]})},e.id)}))})},f=function(){var e=Object(o.useState)([]),t=Object(u.a)(e,2),n=t[0],s=t[1];Object(o.useEffect)((function(){var e=JSON.parse(localStorage.getItem("todos")||"[]");s(e)}),[]),Object(o.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]);return Object(c.jsxs)(r.a.Fragment,{children:[Object(c.jsx)(b,{onAdd:function(e){var t={title:e,id:Date.now(),completed:!1};s((function(e){return[t].concat(Object(j.a)(e))}))}}),Object(c.jsx)(h,{todos:n,onToggle:function(e,t){s((function(n){return n.map((function(n){return n.id===t&&(n.completed=e),n}))}))},onRemove:function(e){confirm("Are you sure to delete this task?")&&s((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})},O=function(){var e=Object(d.f)();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"Information Page"}),Object(c.jsx)("h5",{children:"Technology stack: Typescript, JavaScript, HTML, MaterializeCSS"}),Object(c.jsx)("br",{}),Object(c.jsx)("hr",{}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{className:"btn waves-effect waves-light indigo darken-4",onClick:function(){return e.push("/todo-ts")},children:"Back to Todo List"})]})},x=function(){return Object(c.jsxs)(a.a,{children:[Object(c.jsx)(l,{}),Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)(d.c,{children:[Object(c.jsx)(d.a,{component:f,path:"/todo-ts",exact:!0}),Object(c.jsx)(d.a,{component:O,path:"/todo-ts/about"})]})})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),o(e),r(e),s(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),m()}},[[32,1,2]]]);
//# sourceMappingURL=main.3b57e4a9.chunk.js.map