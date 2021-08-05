(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={filter:"Filter_filter__3pCVG"}},17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(9),r=n.n(o),i=(n(17),n(12)),s=n(3),u=n(4),l=n(6),m=n(5),b=n(21),f=n(10),h=n(2),d=n.n(h),j=n(0),p=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.onSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.formReset()},t.formReset=function(){t.setState({name:"",number:""})},t.onChange=function(e){t.setState(Object(f.a)({},e.currentTarget.name,e.currentTarget.value))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(j.jsxs)("form",{onSubmit:this.onSubmit,className:d.a.form,children:[Object(j.jsxs)("label",{className:d.a.lebels,children:["Name:",Object(j.jsx)("input",{type:"text",onChange:this.onChange,value:e,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(j.jsxs)("label",{className:d.a.lebels,children:["Number:",Object(j.jsx)("input",{type:"tel",value:n,onChange:this.onChange,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(j.jsx)("button",{type:"submit",onSubmit:this.onSubmit,className:d.a.btn,children:"Add contact"})]})}}]),n}(a.Component),C=n(11),O=n.n(C),v=function(t){var e=t.value,n=t.onFilter;return Object(j.jsx)("input",{type:"text",value:e,placeholder:"Filter",onChange:n,className:O.a.filter})},g=n(8),x=n.n(g),S=function(t){var e=t.contacts,n=t.onDeleteClick;return e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(j.jsxs)("li",{className:x.a.item,children:[a,": ",c,Object(j.jsx)("button",{className:x.a.contacts_button,onClick:function(){return n(e)},type:"button",children:"Delete"})]},e)}))},_=function(t){var e=t.contacts,n=t.onDeleteClick;return Object(j.jsx)("ul",{children:Object(j.jsx)(S,{contacts:e,onDeleteClick:n})})},k=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.onSubmitForm=function(e){var n=e.name,a=e.number,c=t.state.contacts,o={id:Object(b.a)(),name:n,number:a};c.some((function(t){return t.name===n}))?alert("".concat(n," is already in contacts")):t.setState((function(t){var e=t.contacts;return{contacts:[o].concat(Object(i.a)(e))}})),console.log(o)},t.onFilterInput=function(e){var n=e.currentTarget.value;t.setState({filter:n})},t.onFilterChange=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.onDeleteContactClick=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.onFilterChange(),e=this.state.filter;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(p,{onSubmit:this.onSubmitForm}),Object(j.jsx)(v,{value:e,onFilter:this.onFilterInput}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(_,{contacts:t,onDeleteClick:this.onDeleteContactClick})]})}}]),n}(c.a.Component),y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),o(t),r(t)}))};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root")),y()},2:function(t,e,n){t.exports={form:"MyForm_form__3HwVB",btn:"MyForm_btn__2IgLO",lebels:"MyForm_lebels__38l7A"}},8:function(t,e,n){t.exports={contacts_button:"ContactItem_contacts_button__C0qff",item:"ContactItem_item__2k6wv"}}},[[19,1,2]]]);
//# sourceMappingURL=main.a977bb24.chunk.js.map