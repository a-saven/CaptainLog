(this.webpackJsonpcaptainsreact=this.webpackJsonpcaptainsreact||[]).push([[0],{116:function(e,t,a){e.exports=a(131)},121:function(e,t,a){},131:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),i=a.n(o);a(121),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(100),c=a(161),s=Object(l.a)({status:{danger:"red"}}),m=function(e){return r.a.createElement(c.a,{theme:s},e.children)},u=a(101),p=a(55),g=a(39),d=a(18),b=a(17),f=a(36),E=a(177),h=a(170),v=a(166),O=a(175),y=a(168),w=a(176),j=a(164),x=a(167),k=a(174),C=a(65),P=a.n(C),S=a(103),N=a(90),D=a(165),I=function(){return r.a.createElement(S.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(j.a,{color:"inherit",href:"https://material-ui.com/"},"Captain's Log")," ",(new Date).getFullYear(),".")},$=a(35),M=a.n($),B=a(32);function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function W(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(a,!0).forEach((function(t){Object(d.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var R=r.a.createContext(),A={id:"",name:"",token:""},q=function(e,t){switch(t.type){case"reset":return A;case"login":case"signup":case"logout":return W({},e,{},t.payload);default:return e}};function L(e){var t=r.a.useReducer(q,A),a=Object(b.a)(t,2),n={state:a[0],dispatch:a[1]};return r.a.createElement(R.Provider,{value:n},e.children)}R.Consumer;function z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function U(){var e=Object(f.a)(["\n  mutation signUp ($name: String, $email: String, $password: String) {\n    signUp(name: $name, email: $email, password: $password) {\n      token\n    }\n  }\n"]);return U=function(){return e},e}var Y=Object(N.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}})),F=M()(U());function H(){var e=Y(),t=Object(g.g)(),a=Object(n.useState)({name:"",email:"",password:""}),o=Object(b.a)(a,2),i=o[0],l=o[1],c=Object(n.useContext)(R),s=(c.state,c.dispatch),m=Object(B.a)(F,{variables:i,onCompleted:function(e){s("signup",e),t.push("/"),sessionStorage.setItem("token",e.singUp.token)}}),u=Object(b.a)(m,2),p=u[0],f=(u[1].data,function(e){return function(t){l(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?z(a,!0).forEach((function(t){Object(d.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):z(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},i,Object(d.a)({},e,t.target.value)))}});return r.a.createElement(D.a,{component:"main",maxWidth:"xs"},r.a.createElement(v.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(E.a,{className:e.avatar},r.a.createElement(P.a,null)),r.a.createElement(S.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(x.a,{container:!0,spacing:2},r.a.createElement(x.a,{item:!0,xs:12},r.a.createElement(O.a,{autoComplete:"name",name:"name",variant:"outlined",required:!0,fullWidth:!0,id:"name",label:"Name",value:i.name,onChange:f("name"),autoFocus:!0})),r.a.createElement(x.a,{item:!0,xs:12},r.a.createElement(O.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",autoComplete:"email",value:i.email,onChange:f("email")})),r.a.createElement(x.a,{item:!0,xs:12},r.a.createElement(O.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:i.password,onChange:f("password")})),r.a.createElement(x.a,{item:!0,xs:12},r.a.createElement(y.a,{control:r.a.createElement(w.a,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive inspiration, marketing promotions and updates via email."}))),r.a.createElement(h.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(e){e.preventDefault(),p()}},"Sign Up"),r.a.createElement(x.a,{container:!0,justify:"flex-end"},r.a.createElement(x.a,{item:!0},r.a.createElement(j.a,{href:"/login",variant:"body2"},"Already have an account? Sign in"))))),r.a.createElement(k.a,{mt:5},r.a.createElement(I,null)))}var _=a(133);function G(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function J(){var e=Object(f.a)(["\n  mutation signIn ($email: String, $password: String) {\n    signIn(email: $email, password: $password ) {\n      token\n    }\n  }"]);return J=function(){return e},e}var V=Object(N.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundColor:"dark"===e.palette.type?e.palette.grey[900]:e.palette.grey[50],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),Q=M()(J());function K(){var e=V(),t=Object(g.g)(),a=Object(n.useContext)(R),o=(a.state,a.dispatch),i=Object(n.useState)({email:"",password:""}),l=Object(b.a)(i,2),c=l[0],s=l[1],m=Object(B.a)(Q,{variables:c,onCompleted:function(e){o("login",e),sessionStorage.setItem("token",e.signIn.token),t.push("/")}}),u=Object(b.a)(m,2),p=u[0],f=(u[1].data,function(e){return function(t){s(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?G(a,!0).forEach((function(t){Object(d.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):G(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},c,Object(d.a)({},e,t.target.value)))}});return r.a.createElement(x.a,{container:!0,component:"main",className:e.root},r.a.createElement(v.a,null),r.a.createElement(x.a,{item:!0,xs:!1,sm:4,md:7,className:e.image}),r.a.createElement(x.a,{item:!0,xs:12,sm:8,md:5,component:_.a,elevation:6,square:!0},r.a.createElement("div",{className:e.paper},r.a.createElement(E.a,{className:e.avatar},r.a.createElement(P.a,null)),r.a.createElement(S.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(O.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:c.email,onChange:f("email")}),r.a.createElement(O.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",value:c.password,autoComplete:"current-password",onChange:f("password")}),r.a.createElement(y.a,{control:r.a.createElement(w.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(h.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(e){e.preventDefault(),p()}},"Sign In"),r.a.createElement(x.a,{container:!0},r.a.createElement(x.a,{item:!0,xs:!0},r.a.createElement(j.a,{href:"/forgot",variant:"body2"},"Forgot password?")),r.a.createElement(x.a,{item:!0},r.a.createElement(j.a,{href:"/signUp",variant:"body2"},"Don't have an account? Sign Up"))),r.a.createElement(k.a,{mt:5},r.a.createElement(I,null))))))}var X=a(68),Z=a(96),ee=a.n(Z),te=a(169),ae=a(99),ne=a(179),re=a(67),oe=a.n(re),ie=["Edit","Delete"],le=48;function ce(){var e=r.a.useState(null),t=Object(b.a)(e,2),a=t[0],n=t[1],o=Boolean(a),i=function(){n(null)};return r.a.createElement("div",null,r.a.createElement(te.a,{"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:function(e){n(e.currentTarget)}},r.a.createElement(oe.a,null)),r.a.createElement(ae.a,{id:"long-menu",anchorEl:a,keepMounted:!0,open:o,onClose:i,PaperProps:{style:{maxHeight:4.5*le,width:200}}},ie.map((function(e){return r.a.createElement(ne.a,{key:e,selected:"Pyxis"===e,onClick:i},e)}))))}var se=Object(N.a)((function(e){return{main:{width:"100%",padding:e.spacing(3)},avatar:{margin:e.spacing(1),backgroundColor:e.palette.primary.main,height:"3vh",width:"3vh"},wrap:{display:"flex",flexDirection:"column"},header:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},gridItem:{flexGrow:0},bottomLine:{justifyContent:"space-between",alignItems:"center",fontSize:14},textArea:{marginTop:e.spacing(1),marginBottom:e.spacing(1)}}})),me=function(e){var t=e.params,a=se();return t?r.a.createElement(_.a,{xs:12,className:a.main,key:t._id},r.a.createElement(x.a,{item:!0,container:!0,spacing:2,className:a.wrap},r.a.createElement(x.a,{item:!0,className:a.header},r.a.createElement(x.a,{item:!0,className:a.gridItem},r.a.createElement(E.a,{className:a.avatar,src:"images/avatars/chatBot.png"})),r.a.createElement(x.a,{item:!0},r.a.createElement(S.a,{variant:"subtitle1"},r.a.createElement("p",null,t.title||"Post title"))),r.a.createElement(x.a,null,r.a.createElement(ce,null))),r.a.createElement(x.a,{container:!0,className:a.textArea},r.a.createElement(S.a,{variant:"body1"},t.text)),r.a.createElement(x.a,{container:!0,className:a.bottomLine},r.a.createElement(S.a,{variant:"caption",display:"block",gutterBottom:!0},r.a.createElement(ee.a,{format:"HH:MM:SS D MMM YYYY",unix:!0},t.createdAt/1e3)),r.a.createElement(S.a,{variant:"caption",display:"block",gutterBottom:!0},t.tag||"Tag")))):r.a.createElement(_.a,{className:a.main})};function ue(){var e=Object(f.a)(["\n    {\n      getAllPosts {\n        _id\n        text\n        title\n        tag\n        createdAt\n        userId\n        index\n      }\n    }"]);return ue=function(){return e},e}var pe=Object(X.b)(ue()),ge=Object(N.a)((function(e){return{paper:{maxHeight:"70vh",height:"100%",display:"flex",overflow:"auto",flexDirection:"column",alignItems:"center",margin:e.spacing(1)}}}));function de(){var e=Object(B.b)(pe),t=e.loading,a=e.error,n=e.data,o=ge();return t?r.a.createElement("p",null,"Loading..."):a?r.a.createElement("p",null,"Error :("):r.a.createElement(k.a,{className:o.paper,xs:12},n.getAllPosts.map((function(e){return r.a.createElement(me,{params:e,key:e._id,className:o.post})})))}function be(){var e=Object(f.a)(["\n  mutation addPost($text: String, $title: String, $tag: String) {\n    addPost(text: $text, title: $title, tag: $tag ) {\n      _id\n      text\n      tag\n      userId\n      createdAt\n      index\n    }\n  }\n"]);return be=function(){return e},e}var fe=M()(be());function Ee(e){var t=e.text,a=e.title,n=e.tag,o=e.clearInput,i=Object(B.a)(fe,{variables:{text:t,title:a,tag:n},refetchQueries:[{query:pe}],onCompleted:function(){o()}}),l=Object(b.a)(i,2),c=l[0];l[1].data;return r.a.createElement(h.a,{type:"submit",variant:"contained",color:"primary",onClick:c,"data-testid":"post-button"},"Submit")}function he(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ve(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?he(a,!0).forEach((function(t){Object(d.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):he(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Oe=Object(N.a)((function(e){return{field:{display:"flex",flexDirection:"column",justifyContent:"space-between"},input:{flexGrow:1,marginRight:e.spacing(1)},paper:{margin:e.spacing(1),padding:e.spacing(1)}}})),ye=function(){var e=Oe(),t=Object(n.useState)({text:"",title:"",tag:""}),a=Object(b.a)(t,2),o=a[0],i=a[1];Object(n.useEffect)((function(){}));var l=function(e){return function(t){i(ve({},o,Object(d.a)({},e,t.target.value)))}};return r.a.createElement(_.a,{className:e.paper},r.a.createElement("form",{onSubmit:function(e){return e.preventDefault()},className:e.field},r.a.createElement(O.a,{id:"title-input",value:o.title,onChange:l("title"),className:e.input,placeholder:"Title"}),r.a.createElement(O.a,{id:"text-input",value:o.text,onChange:l("text"),className:e.input,placeholder:"Text"}),r.a.createElement(O.a,{id:"tag-input",value:o.tag,onChange:l("tag"),className:e.input,placeholder:"Tags"}),r.a.createElement(Ee,{text:o.text,title:o.title,tag:o.tag,clearInput:function(){i(ve({},o,{text:"",title:"",tag:""}))}})))},we=a(14),je=a(172),xe=a(173),ke=a(178),Ce=a(171),Pe=a(97),Se=a.n(Pe),Ne=a(98),De=a.n(Ne),Ie=a(74),$e=a.n(Ie),Me=a(72),Be=a.n(Me),Te=a(73),We=a.n(Te),Re=Object(N.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(d.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(d.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(we.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(we.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(d.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200}),sectionDesktop:Object(d.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(d.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));function Ae(){var e=Re(),t=r.a.useState(null),a=Object(b.a)(t,2),n=a[0],o=a[1],i=r.a.useState(null),l=Object(b.a)(i,2),c=l[0],s=l[1],m=Boolean(n),u=Boolean(c),p=Object(g.g)(),d=function(e){o(e.currentTarget)},f=function(){s(null)},E=function(){o(null),f()},h="primary-search-account-menu",v=r.a.createElement(ae.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},id:h,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:m,onClose:E},r.a.createElement(ne.a,{onClick:E},"Profile"),r.a.createElement(ne.a,{onClick:E},"My account"),r.a.createElement(ne.a,{onClick:function(){sessionStorage.removeItem("token"),p.push("/login")}},"Logout")),O=r.a.createElement(ae.a,{anchorEl:c,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:u,onClose:f},r.a.createElement(ne.a,null,r.a.createElement(te.a,{"aria-label":"show 4 new mails",color:"inherit"},r.a.createElement(Ce.a,{badgeContent:4,color:"secondary"},r.a.createElement(Be.a,null))),r.a.createElement("p",null,"Messages")),r.a.createElement(ne.a,null,r.a.createElement(te.a,{"aria-label":"show 11 new notifications",color:"inherit"},r.a.createElement(Ce.a,{badgeContent:11,color:"secondary"},r.a.createElement(We.a,null))),r.a.createElement("p",null,"Notifications")),r.a.createElement(ne.a,{onClick:d},r.a.createElement(te.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},r.a.createElement($e.a,null)),r.a.createElement("p",null,"Profile")));return r.a.createElement("div",{className:e.grow},r.a.createElement(je.a,{position:"static"},r.a.createElement(xe.a,null,r.a.createElement(te.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"open drawer"},r.a.createElement(Se.a,null)),r.a.createElement(S.a,{className:e.title,variant:"h6",noWrap:!0},"Capitain's Log"),r.a.createElement("div",{className:e.search},r.a.createElement("div",{className:e.searchIcon},r.a.createElement(De.a,null)),r.a.createElement(ke.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})),r.a.createElement("div",{className:e.grow}),r.a.createElement("div",{className:e.sectionDesktop},r.a.createElement(te.a,{"aria-label":"show 4 new mails",color:"inherit"},r.a.createElement(Ce.a,{badgeContent:0,color:"secondary"},r.a.createElement(Be.a,null))),r.a.createElement(te.a,{"aria-label":"show 17 new notifications",color:"inherit"},r.a.createElement(Ce.a,{badgeContent:0,color:"secondary"},r.a.createElement(We.a,null))),r.a.createElement(te.a,{edge:"end","aria-label":"account of current user","aria-controls":h,"aria-haspopup":"true",onClick:d,color:"inherit"},r.a.createElement($e.a,null))),r.a.createElement("div",{className:e.sectionMobile},r.a.createElement(te.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){s(e.currentTarget)},color:"inherit"},r.a.createElement(oe.a,null))))),O,v)}var qe=function(){return r.a.createElement(D.a,null,r.a.createElement(Ae,null),r.a.createElement(de,null),r.a.createElement(ye,null))};function Le(){return r.a.createElement(p.a,null,r.a.createElement(g.d,null,r.a.createElement(g.b,{path:"/login"},r.a.createElement(K,null)),r.a.createElement(g.b,{path:"/signup"},r.a.createElement(H,null)),r.a.createElement(ze,{path:"/"},r.a.createElement(qe,null))))}function ze(e){var t=e.children,a=Object(u.a)(e,["children"]),n=sessionStorage.getItem("token");return r.a.createElement(g.b,Object.assign({},a,{render:function(e){var a=e.location;return n?t:r.a.createElement(g.a,{to:{pathname:"/login",state:{from:a}}})}}))}var Ue=a(21),Ye=new X.a({uri:"http://captainlog.herokuapp.com:80/",request:function(e){var t=sessionStorage.getItem("token");e.setContext({headers:{authorization:t||""}})}});i.a.render(r.a.createElement((function(){return r.a.createElement(Ue.a,{client:Ye},r.a.createElement(v.a,null),r.a.createElement(L,null,r.a.createElement(m,null,r.a.createElement(Le,null))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[116,1,2]]]);
//# sourceMappingURL=main.fe968e43.chunk.js.map