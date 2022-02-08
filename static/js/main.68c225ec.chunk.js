(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{149:function(e,t,s){},162:function(e,t,s){"use strict";s.r(t);var r=s(0),a=s(54),n=s.n(a),i=(s(149),s(59)),c=s(10),l=s(11),d=s(12),o=s(13),h=s(86),j=s(83),u=s(163),b=s(178),p=s(176),v=s(14),g=s(1),m=function(e){Object(d.a)(s,e);var t=Object(o.a)(s);function s(){var e;Object(c.a)(this,s);for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={loginDisplay:!1,registerDisplay:!1,login:"",register:"",registerName:""},e.handleLoginDisplay=function(){e.setState({loginDisplay:!0})},e.handleRegisterDisplay=function(){e.setState({registerDisplay:!0})},e.handleBackDisplay=function(){e.setState({loginDisplay:!1,registerDisplay:!1,login:"",register:""})},e.handleFormChange=function(t){e.setState(Object(h.a)({},t.target.name,t.target.value))},e.handleRegister=function(){fetch("http://localhost:3000/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e.state.register,favorites:[]})}).then((function(e){return e.json()})).then((function(t){e.props.newUser(t)}))},e}return Object(l.a)(s,[{key:"render",value:function(){var e,t=this;return this.props.user.username?e=Object(g.jsxs)(r.Fragment,{children:[Object(g.jsx)(j.a,{style:{"font-size":"16px",padding:"15px 10px"},className:"ui",children:this.props.user.username}),Object(g.jsx)(u.a,{onClick:function(){t.props.logout(),t.handleBackDisplay()},children:"Logout"})]}):this.state.loginDisplay||this.state.registerDisplay?this.state.loginDisplay?e=Object(g.jsxs)(b.a,{onChange:function(e){return t.handleFormChange(e)},onSubmit:function(e){return t.props.login(e,t.state.login)},children:[Object(g.jsx)(p.a,{type:"text",name:"login",value:this.state.login,placeholder:"Username"}),Object(g.jsx)("br",{}),Object(g.jsx)(p.a,{type:"submit",value:"Login"}),Object(g.jsx)(u.a,{onClick:this.handleBackDisplay,children:"Back"})]}):this.state.registerDisplay&&(e=Object(g.jsxs)(b.a,{onChange:function(e){return t.handleFormChange(e)},onSubmit:function(e){return t.handleRegister(e)},children:[Object(g.jsx)(p.a,{type:"text",name:"register",value:this.state.register,placeholder:"New User"}),Object(g.jsx)("br",{}),Object(g.jsx)(p.a,{type:"submit",value:"Register"}),Object(g.jsx)(u.a,{onClick:this.handleBackDisplay,children:"Back"})]})):e=Object(g.jsxs)(r.Fragment,{children:[Object(g.jsx)(u.a,{onClick:this.handleLoginDisplay,children:"Login"})," ",Object(g.jsx)(u.a,{onClick:this.handleRegisterDisplay,children:"Register"})]}),Object(g.jsxs)("div",{className:"ui huge menu navbar",children:[Object(g.jsx)("div",{className:"ui container grid",children:Object(g.jsxs)("div",{className:"computer only row",children:[Object(g.jsx)("a",{className:"header item",children:"Beveragr"}),Object(g.jsx)(v.d,{to:"/beveragr",activeClassName:"active",children:Object(g.jsx)("a",{className:"item",children:"Home"})}),Object(g.jsx)(v.d,{to:"/beveragr/createbev/base",activeClassName:"active",children:Object(g.jsx)("a",{className:"item",children:"Create"})}),Object(g.jsx)(v.d,{to:"/beveragr/ambience",activeClassName:"active",children:Object(g.jsx)("a",{className:"item",children:"Ambience"})})]})}),e]})}}]),s}(r.Component),O=s.p+"static/media/icecube.44bab483.svg",f=s.p+"static/media/not_iced.785e830c.svg",x=s.p+"static/media/hot.5a5205d8.svg",y=s.p+"static/media/not_hot.f68b64c5.svg",C=s.p+"static/media/vegan.bdc7784f.svg",N=s.p+"static/media/not_vegan.d0bedc1b.svg",F=s.p+"static/media/on_star.5cdfd13e.svg",k=s.p+"static/media/off_star.13e41838.svg",w=function(e){Object(d.a)(s,e);var t=Object(o.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{className:"ui grid centered",style:{margin:"20px 0px"},children:[Object(g.jsxs)("select",{onChange:function(t){return e.props.handleFilter(t)},children:[Object(g.jsx)("option",{value:"",children:"All"}),Object(g.jsx)("option",{value:"coffee",children:"Coffee"}),Object(g.jsx)("option",{value:"tea",children:"Tea"})]}),Object(g.jsx)("img",{className:"ui image tiny",src:this.props.filterState.icedFilter?O:f,onClick:this.props.handleIcedFilter}),Object(g.jsx)("img",{className:"ui image tiny",src:this.props.filterState.hotFilter?x:y,onClick:this.props.handleHotFilter}),Object(g.jsx)("img",{className:"ui image tiny",src:this.props.filterState.veganFilter?C:N,onClick:this.props.handleVeganFilter}),this.props.favorites?Object(g.jsx)("img",{className:"ui image tiny",src:this.props.filterState.favoriteFilter?F:k,onClick:this.props.handleFavFilter}):null]})}}]),s}(r.Component),S=s.p+"static/media/coffee.7264d433.png",B=s.p+"static/media/tea.b86025fb.png",D=s.p+"static/media/icedcoffee.6030994a.png",P=s.p+"static/media/icedtea.08813eee.png",T={coffee:S,tea:B,icedcoffee:D,icedtea:P},A=function(e){Object(d.a)(s,e);var t=Object(o.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){var e=this,t=this.props.beverage.iced?"iced":"";return Object(g.jsxs)("div",{className:"ui card",children:[Object(g.jsx)("div",{className:"ui small centered image",style:{"background-color":"#fff"},children:Object(g.jsx)("img",{alt:"",src:T["".concat(t).concat(this.props.beverage.baseType)]})}),Object(g.jsxs)("div",{className:"content",children:[Object(g.jsx)("div",{className:"header",children:this.props.beverage.name}),Object(g.jsx)("div",{className:"meta",children:this.props.beverage.description}),Object(g.jsxs)("div",{className:"description",children:[Object(g.jsx)("b",{children:this.props.beverage.base}),Object(g.jsx)("br",{}),this.props.beverage.creamer,Object(g.jsx)("br",{}),this.props.beverage.addins.join(", "),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),this.props.beverage.vegan?Object(g.jsx)("img",{alt:"",style:{width:"10%"},src:C}):null,Object(g.jsx)("br",{}),this.props.favorites?Object(g.jsx)("div",{children:Object(g.jsx)("img",{onClick:function(){return e.props.handleFavButton(e.props.beverage.id)},className:"favorite",alt:"",src:this.props.favorites.some((function(t){return t===e.props.beverage.id}))?F:k})}):null]})]})]})}}]),s}(r.Component),I=function(e){Object(d.a)(s,e);var t=Object(o.a)(s);function s(){var e;Object(c.a)(this,s);for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={filterText:"",icedFilter:!1,hotFilter:!1,veganFilter:!1,favoriteFilter:!1},e.handleFilter=function(t){e.setState({filterText:t.target.value})},e.handleIcedFilter=function(){e.setState({icedFilter:!e.state.icedFilter,hotFilter:!1})},e.handleHotFilter=function(){e.setState({icedFilter:!1,hotFilter:!e.state.hotFilter})},e.handleVeganFilter=function(){e.setState({veganFilter:!e.state.veganFilter})},e.handleFavFilter=function(){e.setState({favoriteFilter:!e.state.favoriteFilter})},e}return Object(l.a)(s,[{key:"render",value:function(){var e=this,t=this.props.beverages.filter((function(t){return t.baseType.includes(e.state.filterText)})).filter((function(t){return e.state.icedFilter?t.iced===e.state.icedFilter:t})).filter((function(t){return e.state.hotFilter?t.iced!==e.state.hotFilter:t})).filter((function(t){return e.state.veganFilter?t.vegan===e.state.veganFilter:t})),s=this.state.favoriteFilter?t.filter((function(t){return e.props.user.favorites.includes(t.id)})):t;return Object(g.jsxs)("div",{children:[Object(g.jsx)(w,{favorites:this.props.user.favorites,handleFavFilter:this.handleFavFilter,handleFilter:this.handleFilter,filterState:this.state,handleHotFilter:this.handleHotFilter,handleIcedFilter:this.handleIcedFilter,handleVeganFilter:this.handleVeganFilter}),Object(g.jsx)("div",{className:"ui grid cards centered columns",children:s.map((function(t){return Object(g.jsx)(A,{beverage:t,favorites:e.props.user.favorites,handleFavButton:e.props.handleFavButton})}))})]})}}]),s}(r.Component),H=function(e){Object(d.a)(s,e);var t=Object(o.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){var e=this,t=this.props.ingredient,s=t.vegan?Object(g.jsx)("img",{style:{width:"15%"},src:C}):null;return Object(g.jsxs)("div",{className:"ui card",onClick:function(){return e.props.setIngredient(t)},children:[Object(g.jsx)("div",{className:"ui small centered image"}),Object(g.jsxs)("div",{className:"content",children:[Object(g.jsx)("div",{className:"header",children:t.name}),Object(g.jsx)("div",{className:"meta",children:t.description}),Object(g.jsx)("div",{className:"description",children:s})]})]})}}]),s}(r.Component),L=s.p+"static/media/press.c0f6fb32.png",_=s.p+"static/media/teabag.40bb72b7.png",z=function(e){Object(d.a)(s,e);var t=Object(o.a)(s);function s(){var e;Object(c.a)(this,s);for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={display:""},e.handleDisplay=function(t){e.setState({display:t})},e}return Object(l.a)(s,[{key:"render",value:function(){var e=this,t=this.props.base.filter((function(e){return"coffee"===e.type})),s=this.props.base.filter((function(e){return"tea"===e.type}));return Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"ui grid cards centered columns",children:[Object(g.jsxs)("div",{className:"ui medium centered image",onClick:function(){return e.handleDisplay("coffee")},children:[Object(g.jsx)("img",{alt:"",src:this.props.beverageCurrent.iced?D:L}),Object(g.jsx)("br",{}),Object(g.jsx)("span",{className:"ui large header",children:"Coffee"})]}),Object(g.jsxs)("div",{className:"ui medium centered image",onClick:function(){return e.handleDisplay("tea")},children:[Object(g.jsx)("img",{alt:"",src:this.props.beverageCurrent.iced?P:_}),Object(g.jsx)("br",{}),Object(g.jsx)("span",{className:"ui large header",children:"Tea"})]})]}),Object(g.jsxs)("div",{className:"ui grid cards centered four columns",children:["coffee"===this.state.display?t.map((function(t){return Object(g.jsx)(H,{ingredient:t,setIngredient:e.props.setBase})})):null,"tea"===this.state.display?s.map((function(t){return Object(g.jsx)(H,{ingredient:t,setIngredient:e.props.setBase})})):null]}),Object(g.jsxs)("div",{className:"ui grid cards centered columns",children:[Object(g.jsx)("img",{alt:"",className:"ui image tiny",src:this.props.beverageCurrent.iced?O:f,onClick:this.props.setIced}),Object(g.jsx)(v.c,{to:this.props.beverageCurrent.base.length>0?"/createbev/creamer":"#",children:Object(g.jsx)(u.a,{disabled:!(this.props.beverageCurrent.base.length>0),children:"Next"})})]}),""!==this.props.beverageCurrent.baseType?Object(g.jsx)("div",{className:"ui left bevstate",children:Object(g.jsxs)("ul",{children:[Object(g.jsxs)("li",{children:[this.props.beverageCurrent.iced?"Iced":null," ",this.props.beverageCurrent.base]}),""!==this.props.beverageCurrent.creamer?Object(g.jsx)("li",{children:this.props.beverageCurrent.creamer}):null,this.props.beverageCurrent.addins.length>0?this.props.beverageCurrent.addins.map((function(e){return Object(g.jsx)("li",{children:e})})):null,this.props.beverageCurrent.vegan?Object(g.jsx)("li",{children:"Vegan"}):null]})}):null]})}}]),s}(r.Component),R=s.p+"static/media/milk.b8005703.png",U=function(e){Object(d.a)(s,e);var t=Object(o.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:"ui grid cards centered columns",children:Object(g.jsxs)("div",{className:"ui medium centered image",children:[Object(g.jsx)("img",{alt:"",src:R}),Object(g.jsx)("br",{}),Object(g.jsx)("span",{className:"ui large header",children:"Creamers"})]})}),Object(g.jsx)("div",{className:"ui grid cards four centered columns",children:this.props.creamer.map((function(t){return Object(g.jsx)(H,{ingredient:t,setIngredient:e.props.setCreamer})}))}),Object(g.jsxs)("div",{className:"ui grid cards centered columns",children:[Object(g.jsx)(v.c,{to:"/createbev/base",children:Object(g.jsx)(u.a,{children:"Back"})}),Object(g.jsx)(v.c,{to:"/createbev/addins",children:Object(g.jsx)(u.a,{children:"Next"})})]}),""!==this.props.beverageCurrent.baseType?Object(g.jsx)("div",{className:"ui left bevstate",children:Object(g.jsxs)("ul",{children:[Object(g.jsxs)("li",{children:[this.props.beverageCurrent.iced?"Iced":null," ",this.props.beverageCurrent.base]}),""!==this.props.beverageCurrent.creamer?Object(g.jsx)("li",{children:this.props.beverageCurrent.creamer}):null,this.props.beverageCurrent.addins.length>0?this.props.beverageCurrent.addins.map((function(e){return Object(g.jsx)("li",{children:e})})):null,this.props.beverageCurrent.vegan?Object(g.jsx)("li",{children:"Vegan"}):null]})}):null]})}}]),s}(r.Component),V=s.p+"static/media/addins.7c223ce9.png",J=function(e){Object(d.a)(s,e);var t=Object(o.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:"ui grid cards centered columns",children:Object(g.jsxs)("div",{className:"ui medium centered image",children:[Object(g.jsx)("img",{alt:"",src:V}),Object(g.jsx)("br",{}),Object(g.jsx)("span",{className:"ui large header",children:"Addins"})]})}),Object(g.jsx)("div",{className:"ui grid cards centered four columns",children:this.props.addins.map((function(t){return Object(g.jsx)(H,{ingredient:t,setIngredient:e.props.setAddins})}))}),Object(g.jsxs)("div",{className:"ui grid cards centered columns",children:[Object(g.jsx)(v.c,{to:"/createbev/creamer",children:Object(g.jsx)(u.a,{children:"Back"})}),Object(g.jsx)(v.c,{to:"/createbev/review",children:Object(g.jsx)(u.a,{children:"Finish"})})]}),""!==this.props.beverageCurrent.baseType?Object(g.jsx)("div",{className:"ui left bevstate",children:Object(g.jsxs)("ul",{children:[Object(g.jsxs)("li",{children:[this.props.beverageCurrent.iced?"Iced":null," ",this.props.beverageCurrent.base]}),""!==this.props.beverageCurrent.creamer?Object(g.jsx)("li",{children:this.props.beverageCurrent.creamer}):null,this.props.beverageCurrent.addins.length>0?this.props.beverageCurrent.addins.map((function(e){return Object(g.jsx)("li",{children:e})})):null,this.props.beverageCurrent.vegan?Object(g.jsx)("li",{children:"Vegan"}):null]})}):null]})}}]),s}(r.Component),E=s(177),M={coffee:S,tea:B,icedcoffee:D,icedtea:P},q=function(e){Object(d.a)(s,e);var t=Object(o.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){var e=this,t=this.props.beverageCurrent.iced?"iced":"";return Object(g.jsxs)("div",{className:"ui grid centered cards",style:{margin:"20px 0px"},children:[Object(g.jsxs)("div",{className:"ui card centered",style:{padding:"15px","font-size":"18px"},children:[Object(g.jsx)("div",{className:"ui tiny centered image",style:{"background-color":"#fff"},children:Object(g.jsx)("img",{alt:"",src:M["".concat(t).concat(this.props.beverageCurrent.baseType)]})}),Object(g.jsx)("br",{}),Object(g.jsxs)("div",{children:[Object(g.jsx)("b",{children:"Base:"})," ",this.props.beverageCurrent.base]}),Object(g.jsx)("br",{}),Object(g.jsxs)("div",{children:[Object(g.jsx)("b",{children:"Creamer:"})," ",this.props.beverageCurrent.creamer]}),Object(g.jsx)("br",{}),Object(g.jsxs)("div",{children:[Object(g.jsx)("b",{children:"Addins:"})," ",this.props.beverageCurrent.addins.join(", ")," "]}),Object(g.jsx)("br",{})]}),Object(g.jsxs)("div",{className:"ui grid row centered",children:[Object(g.jsxs)(b.a,{children:[Object(g.jsx)("label",{children:Object(g.jsx)("input",{onChange:function(t){return e.props.setName(t)},type:"text",value:this.props.beverageCurrent.name,placeholder:"Name your beverage"})}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)(E.a,{onChange:function(t){return e.props.setDescription(t)},placeholder:"Describe your beverage",value:this.props.beverageCurrent.description})]}),Object(g.jsx)("br",{}),Object(g.jsx)(u.a,{onClick:this.props.handleSubmit,children:"Submit"})]}),Object(g.jsxs)("div",{className:"ui grid row centered",children:[Object(g.jsx)(v.c,{to:"/createbev/base",children:Object(g.jsx)(u.a,{children:"Change Base"})}),Object(g.jsx)(v.c,{to:"/createbev/creamer",children:Object(g.jsx)(u.a,{children:"Change Creamer"})}),Object(g.jsx)(v.c,{to:"/createbev/addins",children:Object(g.jsx)(u.a,{children:"Add Addins"})})]})]})}}]),s}(r.Component),G=s(15),K=function(e){Object(d.a)(s,e);var t=Object(o.a)(s);function s(){var e;Object(c.a)(this,s);for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={name:"",baseType:"",base:"",creamer:"",addins:[],iced:!1,vegan:!0,description:""},e.setBase=function(t){e.setState({base:t.name,baseType:t.type})},e.setIced=function(){e.setState({iced:!e.state.iced})},e.setCreamer=function(t){e.setState({creamer:t.name},(function(){e.veganChecker()}))},e.setAddins=function(t){e.state.addins.some((function(e){return e===t.name}))||e.setState({addins:[].concat(Object(i.a)(e.state.addins),[t.name])},(function(){e.veganChecker()}))},e.veganChecker=function(){var t=[e.state.base,e.state.creamer].concat(Object(i.a)(e.state.addins));e.props.ingredients.filter((function(e){return t.includes(e.name)})).some((function(e){return!e.vegan}))?e.setState({vegan:!1}):e.setState({vegan:!0})},e.setName=function(t){e.setState({name:t.target.value})},e.setDescription=function(t){e.setState({description:t.target.value})},e.handleSubmit=function(){fetch("http://localhost:3000/beverages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.state)}).then((function(e){return e.json()})).then((function(t){e.props.handleNewBeverage(t),e.setState({name:"",base:"",creamer:"",addins:[],iced:!1,vegan:!0,description:""});window.history.pushState({path:"/"},"home page","/"),window.location.reload()}))},e}return Object(l.a)(s,[{key:"render",value:function(){var e=this.props.ingredients.filter((function(e){return"coffee"===e.type||"tea"===e.type})),t=this.props.ingredients.filter((function(e){return"cream"===e.type})),s=this.props.ingredients.filter((function(e){return"addin"===e.type}));return Object(g.jsx)(v.a,{children:Object(g.jsxs)(G.c,{children:[Object(g.jsx)(G.a,{exact:!0,path:"/beveragr/createbev/base",children:Object(g.jsx)(z,{base:e,setBase:this.setBase,beverageCurrent:this.state,setIced:this.setIced})}),Object(g.jsx)(G.a,{exact:!0,path:"/beveragr/createbev/creamer",children:Object(g.jsx)(U,{creamer:t,setCreamer:this.setCreamer,beverageCurrent:this.state})}),Object(g.jsx)(G.a,{exact:!0,path:"/beveragr/createbev/addins",children:Object(g.jsx)(J,{addins:s,setAddins:this.setAddins,beverageCurrent:this.state})}),Object(g.jsx)(G.a,{exact:!0,path:"/beveragr/createbev/review",children:Object(g.jsx)(q,{beverageCurrent:this.state,setName:this.setName,setDescription:this.setDescription,handleSubmit:this.handleSubmit})})]})})}}]),s}(r.Component),Q=s(61),W=s.p+"static/media/coffee_fire.f880cec9.wav",X=s.p+"static/media/storm_fire.9e6de93b.wav",Y=s.p+"static/media/breeze_chimes.a9fa4968.wav",Z=s.p+"static/media/wind_wave.058a9db0.wav",$=s.p+"static/media/summer_night.00bf7c0f.wav",ee=new Q.Howl({src:W,loop:!0}),te=new Q.Howl({src:X,loop:!0}),se=new Q.Howl({src:Y,loop:!0}),re=new Q.Howl({src:Z,loop:!0}),ae=new Q.Howl({src:$,loop:!0}),ne=function(e){Object(d.a)(s,e);var t=Object(o.a)(s);function s(){var e;Object(c.a)(this,s);for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={house:!1,storm:!1,breeze:!1,wave:!1,summer:!1},e.handePlayPause=function(t,s){t.playing()?t.pause():t.play(),e.setState(Object(h.a)({},s,!e.state[s]))},e}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return Q.Howler.volume(1),Object(g.jsx)("div",{children:Object(g.jsxs)("div",{className:"ui grid cards centered",children:[Object(g.jsxs)("div",{className:"ui card",children:[Object(g.jsx)("div",{className:"ui image",children:"Coffeehouse Fireplace"}),Object(g.jsx)(u.a,{onClick:function(){return e.handePlayPause(ee,"house")},children:this.state.house?"Pause":"Play"})]}),Object(g.jsxs)("div",{className:"ui card",children:[Object(g.jsx)("div",{className:"ui image",children:"Cozy Storm"}),Object(g.jsx)(u.a,{onClick:function(){return e.handePlayPause(te,"storm")},children:this.state.storm?"Pause":"Play"})]}),Object(g.jsxs)("div",{className:"ui card",children:[Object(g.jsx)("div",{className:"ui image",children:"Breeze & Chimes"}),Object(g.jsx)(u.a,{onClick:function(){return e.handePlayPause(se,"breeze")},children:this.state.breeze?"Pause":"Play"})]}),Object(g.jsxs)("div",{className:"ui card",children:[Object(g.jsx)("div",{className:"ui image",children:"Beachfront"}),Object(g.jsx)(u.a,{onClick:function(){return e.handePlayPause(re,"wave")},children:this.state.wave?"Pause":"Play"})]}),Object(g.jsxs)("div",{className:"ui card",children:[Object(g.jsx)("div",{className:"ui image",children:"Campfire"}),Object(g.jsx)(u.a,{onClick:function(){return e.handePlayPause(ae,"summer")},children:this.state.summer?"Pause":"Play"})]})]})})}}]),s}(r.Component),ie=function(e){Object(d.a)(s,e);var t=Object(o.a)(s);function s(){var e;Object(c.a)(this,s);for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={beverages:[],user:{},ingredients:[]},e.handleFavButton=function(t){if(e.state.user.favorites.some((function(e){return e===t}))){var s=Object(i.a)(e.state.user.favorites);fetch("http://localhost:3000/users/".concat(e.state.user.id),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({favorites:s.filter((function(e){return e!==t}))})}).then((function(e){return e.json()})).then((function(t){e.setState({user:t})}))}else fetch("http://localhost:3000/users/".concat(e.state.user.id),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({favorites:[].concat(Object(i.a)(e.state.user.favorites),[t])})}).then((function(e){return e.json()})).then((function(t){e.setState({user:t})}))},e.handleLogin=function(t,s){t.preventDefault(),console.log(s),fetch("http://localhost:3000/users?username=".concat(s)).then((function(e){return e.json()})).then((function(t){if(t.length<=0)alert("This user does not exist.");else{var s=t[0];console.log(s),e.setState({user:s})}}))},e.handeNewUserLogin=function(t){e.setState({user:t})},e.handleLogout=function(){e.setState({user:{}})},e.handleNewBeverage=function(t){e.setState({beverages:[].concat(Object(i.a)(e.state.beverages),[t])})},e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:3000/beverages").then((function(e){return e.json()})).then((function(t){e.setState({beverages:t})})),fetch("http://localhost:3000/ingredients").then((function(e){return e.json()})).then((function(t){e.setState({ingredients:t})}))}},{key:"render",value:function(){return Object(g.jsxs)(v.a,{children:[Object(g.jsx)(m,{user:this.state.user,login:this.handleLogin,logout:this.handleLogout,newUser:this.handeNewUserLogin}),Object(g.jsxs)(G.c,{children:[Object(g.jsx)(G.a,{path:"/beveragr/createbev",children:Object(g.jsx)(K,{ingredients:this.state.ingredients,handleNewBeverage:this.handleNewBeverage})}),Object(g.jsx)(G.a,{exact:!0,path:"/beveragr",children:Object(g.jsx)(I,{beverages:this.state.beverages,user:this.state.user,handleFavButton:this.handleFavButton})}),Object(g.jsx)(G.a,{exact:!0,path:"/beveragr/ambience",children:Object(g.jsx)(ne,{})}),Object(g.jsx)(G.a,{children:Object(g.jsx)("div",{children:"404 No matching URL"})})]})]})}}]),s}(r.Component);s(161);n.a.render(Object(g.jsx)(v.b,{children:Object(g.jsx)(ie,{})}),document.getElementById("root"))}},[[162,1,2]]]);
//# sourceMappingURL=main.68c225ec.chunk.js.map