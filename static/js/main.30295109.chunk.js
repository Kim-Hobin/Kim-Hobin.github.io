(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{14:function(e,t,a){e.exports={Modal:"modal_Modal__3877h",i:"modal_i__3CxY2",Gallary:"modal_Gallary__1G0vD",Slide:"modal_Slide__GimqB",CurrentImage:"modal_CurrentImage__2pncn"}},19:function(e,t,a){e.exports={Profile:"profile_Profile__c49Mi",contact:"profile_contact__38FnR",SpinButton:"profile_SpinButton__155gC",spin:"profile_spin__2NKjX"}},20:function(e,t,a){e.exports={Skill:"skill_Skill__1ATTH",flex:"skill_flex__U-Ltw",Category:"skill_Category__1CJ1Z"}},23:function(e,t,a){e.exports={Intro:"intro_Intro__1_9EY",content:"intro_content__28GOK"}},25:function(e,t,a){e.exports={topBtn:"scroll_topBtn__3ydoR",active:"scroll_active__2aMHk"}},29:function(e,t,a){e.exports={Footer:"footer_Footer__PM45w"}},31:function(e,t,a){e.exports=a(48)},44:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(18),s=a.n(r),o=a(16),l=a(1),c=a(2),m=a(4),u=a(3),d=a(7),p=a(19),f=a.n(p),h=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.data,t=e.contents.map((function(e){return i.a.createElement("a",{className:f.a.SpinButton,target:"_blabk",title:e.link,href:e.link},i.a.createElement("i",{class:e.style}))}));return i.a.createElement("header",{className:f.a.Profile},i.a.createElement("div",null,i.a.createElement("img",{src:"profile/profile.jpg",alt:"alt"}),i.a.createElement("h1",null,e.name),i.a.createElement("h3",null,e.intro),i.a.createElement("div",{className:f.a.contact},t)))}}]),a}(n.Component),g=a(5),b=a.n(g),_=a(23),y=a.n(_),v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.data;return i.a.createElement("section",{className:y.a.Intro},i.a.createElement("div",null,i.a.createElement("h2",null,e.subject),i.a.createElement("div",{className:b.a.border_top}),i.a.createElement("div",{className:b.a.border_bot}),i.a.createElement("p",{className:y.a.content},e.content)))}}]),a}(n.Component),E=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:b.a.left},i.a.createElement("h5",null,this.props.title),i.a.createElement("a",{href:this.props.add,target:"_blank"},this.props.add))}}]),a}(n.Component),w=a(14),j=a.n(w),k=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).changeImage=function(e){n.setState({index:e})},n.state={index:n.props.index},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props.folder,a=this.props.images[this.state.index],n=this.props.images.length,r=this.props.images.map((function(a,n){if(n===e.state.index)var r=j.a.CurrentImage;return i.a.createElement("button",{className:r,onClick:function(){return e.changeImage(n)}},i.a.createElement("img",{className:j.a.ImageView,src:"projects/".concat(t,"/").concat(a,".png")}))}));return i.a.createElement("div",{className:j.a.Modal,onClick:this.props.close},i.a.createElement("section",{onClick:function(e){return e.stopPropagation()}}," ",i.a.createElement("header",null,i.a.createElement("h5",null,this.props.title),i.a.createElement("p",null,this.props.subtitle),i.a.createElement("i",{class:"fas fa-times",onClick:this.props.close})),i.a.createElement("div",{className:j.a.Gallary},i.a.createElement("i",{style:{left:"1%"},class:"fas fa-chevron-left",onClick:function(){return e.changeImage((e.state.index-1+n)%n)}}),i.a.createElement("div",{className:j.a.Slide},i.a.createElement("img",{src:"projects/".concat(t,"/").concat(a,".png")})),i.a.createElement("i",{style:{right:"1%"},class:"fas fa-chevron-right",onClick:function(){return e.changeImage((e.state.index+1+n)%n)}})),i.a.createElement("footer",null,r)))}}]),a}(n.Component),O=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).test=function(t){e.setState({imgIndex:t,modalOn:!e.state.modalOn})},e.state={imgIndex:null,modalOn:!1},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props.content,a=this.props.keywords.map((function(e){return i.a.createElement("span",{className:b.a.keyword},e)})),n=this.props.folder,r=t.map((function(e){if(e.sub.length){var t=i.a.createElement("ul",null,e.sub.map((function(e){return i.a.createElement("li",null,e)})));return i.a.createElement("li",{className:b.a.details},i.a.createElement("details",null,i.a.createElement("summary",null,e.main),t))}return i.a.createElement("li",null,e.main)})),s=this.props.images.map((function(t,a){return i.a.createElement("img",{className:b.a.ImageView,src:"projects/".concat(n,"/").concat(t,".png"),onClick:function(){return e.test(a)}})})),l=this.props.pdfs.map((function(e){return i.a.createElement(o.b,{to:"/pdfviewer/".concat(n,"/").concat(e),target:"_blank"},"PDF GO")}));return i.a.createElement("div",{className:b.a.right},i.a.createElement("div",null,i.a.createElement("h5",null,this.props.title),i.a.createElement("p",null,this.props.subtitle),i.a.createElement("ul",null,r)),i.a.createElement("div",null,s),i.a.createElement("div",null,a),i.a.createElement("div",null,l),this.state.modalOn&&i.a.createElement(k,{index:this.state.imgIndex,close:function(){return e.test(null)},images:this.props.images,title:this.props.title,subtitle:this.props.subtitle,folder:this.props.folder}))}}]),a}(n.Component),S=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.data,t=e.contents.map((function(e){return i.a.createElement("div",{className:b.a.Wrapper},i.a.createElement(E,{title:e.left_title,add:e.left_add}),i.a.createElement(O,{title:e.right_title,subtitle:e.right_subtitle,content:e.content,folder:e.folder,images:e.images,pdfs:e.pdfs,keywords:e.keywords}))}));return i.a.createElement("section",{className:b.a.Main},i.a.createElement("h2",null,e.subject),i.a.createElement("div",{className:b.a.border_top}),i.a.createElement("div",{className:b.a.border_bot}),t)}}]),a}(n.Component),C=a(20),x=a.n(C),M=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.content.map((function(e){return i.a.createElement("li",null,e)}));return i.a.createElement("div",null,i.a.createElement("ul",null,e))}}]),a}(n.Component),N=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.data,t=e.contents.map((function(e){return i.a.createElement("div",{className:x.a.Category},i.a.createElement("h5",null,e.title),i.a.createElement(M,{content:e.content}))}));return i.a.createElement("section",{className:x.a.Skill},i.a.createElement("h2",null,e.subject),i.a.createElement("div",{className:b.a.border_top}),i.a.createElement("div",{className:b.a.border_bot}),i.a.createElement("div",{className:x.a.flex},t))}}]),a}(n.Component),I=a(29),P=a.n(I),A=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("footer",{className:P.a.Footer},i.a.createElement("div",null,i.a.createElement("img",{id:this.test,src:"footer/stamp.png"})))}}]),a}(n.Component),H=a(11),T=a(25),L=a.n(T);var J=function(){var e=Object(n.useState)(0),t=Object(H.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(!1),o=Object(H.a)(s,2),l=o[0],c=o[1],m=function(){r(window.pageYOffset),c(a>100)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",m),function(){window.removeEventListener("scroll",m)}})),i.a.createElement("div",null,i.a.createElement("button",{className:l?L.a.active:L.a.topBtn,onClick:function(){window.scrollTo({top:0,behavior:"smooth"}),r(0),c(!1)}},"TOP"))};a(44);var R={profiles:{subject:"Profiles",name:"\uae40\ud638\ube48",intro:"Junior Software Engineer",contents:[{title:"\uc804\ud654\ubc88\ud638",link:"",style:"fas fa-phone-volume"},{title:"email",link:"mailto:isb0573@naver.com",style:"fas fa-at"},{title:"git",link:"https://github.com/Kim-Hobin",style:"fab fa-github"},{title:"blog",link:"https://isb0573.tistory.com/",style:"fas fa-blog"}]},intro:{subject:"About Me",content:"\uc548\ub155\ud558\uc138\uc694!! \uac1c\ubc1c\uc790\ub97c \uafc8\uafb8\ub294 \ud559\uc0dd\uc785\ub2c8\ub2e4.         \ud559\ucc3d \uc2dc\uc808, \ub17c\ubb38\uc744 \uc4f0\uace0 \ud559\uc220\ub300\ud68c\uc5d0 \ucc38\uac00\ud558\uc5ec \ubc1c\ud45c\ub97c \ud558\uc5ec \uc6b4 \uc88b\uac8c \uc6b0\uc218\ub17c\ubb38\uc0c1\uc744 \ubc1b\uace0         \ud2b9\ud5c8\ucd9c\uc6d0\uc774\ub098 \uacbd\uc9c4\ub300\ud68c, \uc0c8\ub85c \uc2e0\uc124\ub41c AI \ubd80\uc804\uacf5\uc744 \uc774\uc218\ud558\ub294 \ub4f1\uc758 \uacbd\ud5d8\uc744 \ud588\uc2b5\ub2c8\ub2e4.         \ud558\uc9c0\ub9cc \uc9c1\uc811\uc801\uc778 \uac1c\ubc1c \uacbd\ud5d8\uc774 \uc801\uace0 \ubd80\uc871\ud558\ub2e4\uace0 \ub290\uaef4         \uc878\uc5c5 \ud6c4, \ud604\uc7ac \ubd80\uc871\ud55c \ubd80\ubd84\uc744 \ud0a4\uc6b0\uace0\uc790 \ubc31\uc900 \uc0ac\uc774\ud2b8\uc640 \uc54c\uace0\ub9ac\uc998 \ud574\uacb0 \uc804\ub7b5\uc774\ub77c\ub294 \ucc45\uc744 \ud1b5\ud574 \uc54c\uace0\ub9ac\uc998 \uacf5\ubd80\uc640 \uc791\uc740 \ud504\ub85c\uc81d\ud2b8\ub97c \ubcd1\ud589\ud558\uba70 \uc790\uae30\uacc4\ubc1c\uc744 \ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.         \ub9ac\uc5d1\ud2b8\ub97c \uacf5\ubd80\ud558\uc5ec \uae30\uc220 \uc774\ub825\uc11c\ub97c \uac1c\ubc1c\ud588\uace0, \ud604\uc7ac \uc2a4\ud504\ub9c1 \ud504\ub808\uc784\uc6cc\ud06c\ub97c \uacf5\ubd80\ud558\uace0 \uc608\uc804 \uac1c\ubc1c\uc9c1\uc804\ub2e8\uacc4\uae4c\uc9c0 \uc124\uacc4\ud588\ub358 \ud50c\ub9ac\ub9c8\ucf13 \ud504\ub85c\uc81d\ud2b8\ub97c Spring\uacfc Next.js\ub85c \uad6c\ud604\ud560 \uacc4\ud68d\uc785\ub2c8\ub2e4.        \uc800\ub294 \ub2e4\ub978 \uc0ac\ub78c\ub4e4\uacfc \ud568\uaed8 \ubb34\uc5b8\uac00\ub97c \ud558\uac70\ub098 \ub3d9\uc801\uc778 \ud65c\ub3d9\uc744 \uc88b\uc544\ud569\ub2c8\ub2e4. \ubc30\ub4dc\ubbfc\ud134\uc744 \uc8fc\ucde8\ubbf8\ub85c \ud558\uace0 \uc788\uc73c\uba70 \ub808\uc2a8\uacfc \ub3d9\ud638\ud68c \ud65c\ub3d9\uc744 \ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.        \ud558\ub8e8\ube68\ub9ac \uc120\ubc30\ub2d8\ub4e4 \ubc11\uc5d0\uc11c \ub9ce\uc774 \ubc30\uc6b0\uace0 \uc131\uc7a5\ud560 \uae30\ud68c\uac00 \uc788\uc5c8\uc73c\uba74 \uc88b\uaca0\uc2b5\ub2c8\ub2e4."},experience:{subject:"Experience",contents:[{left_title:"2020.07 ~ 2020.08",left_add:"",right_title:"(\uc8fc)\uc794\ub2e4 \uc778\ud134 \uadfc\ubb34",right_subtitle:"\ub3d9\uc11c\ub300\ud559\uad50 2020\ud559\ub144\ub3c4 \ud558\uacc4 \uad6d\ub0b4\uc778\ud134\uc2ed",content:[{main:"\ud558\uc6b0\uc2a4 \ub9e4\ub274\uc5bc \uc194\ub8e8\uc158 \uac1c\ubc1c",sub:[]}],keywords:[],folder:"",images:[],pdfs:[]}]},skills:{subject:"Skills",contents:[{title:"Frontend",content:["HTML","CSS","JavaScrpit","React"]},{title:"Backend",content:["C++","PHP","Python","Node.js","Django","Spring"]},{title:"ETC",content:["Git","mySQL"]}]},projects:{subject:"Projects",contents:[{left_title:"2021.09 ~ 2021.10",left_add:"https://github.com/Kim-Hobin/Resume",right_title:"\uae30\uc220 \uc774\ub825\uc11c",right_subtitle:"React Based Github Pages Resume",content:[{main:"React \uae30\ubc18 \uae43\ud5c8\ube0c \uc774\ub825\uc11c",sub:[]},{main:"Wrapper, Left, Rgiht \uad6c\uc870\ub85c \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub098\ub204\uc5b4 \uad6c\ud604",sub:[]},{main:"\uac01 \ud504\ub85c\uc81d\ud2b8 \uc774\ubbf8\uc9c0\uc758 \ubaa8\ub2ec \uad6c\ud604, PDF Viewer \uad6c\ud604",sub:[]}],keywords:["React","HTML","CSS","JS"],folder:"./resume",images:[],pdfs:[]},{left_title:"2020.07 ~ 2020.08",left_add:"https://github.com/Kim-Hobin/House-Mannual",right_title:"\ud558\uc6b0\uc2a4 \ub9e4\ub274\uc5bc",right_subtitle:"\uc219\ubc15 \uc608\uc57d \ud398\uc774\uc9c0 \uc194\ub8e8\uc158 \ud504\ub85c\uc81d\ud2b8",content:[{main:"\uace0\uac1d\uc774 \ud638\ud154\uc744 \uc608\uc57d\ud558\uba74 URL\uc744 \ud1b5\ud574 \uc544\uc774\ud15c\uc758 \uc815\ubcf4\ub97c \ubcf4\uc5ec\uc8fc\ub3c4\ub85d \ud568",sub:[]},{main:"html, css, javascript\ub85c \ud074\ub77c\uc774\uc5b8\ud2b8, Django + MongoDB \uc11c\ubc84 \uad6c\ud604",sub:[]},{main:"\uae30\ub2a5 \uad6c\ud604",sub:["\uae30\ubcf8\uc801\uc778 CRUD \ubc0f \ubc18\uc751\ud615 \uc6f9\uc571 \uad6c\ud604","\uc0ac\uc6a9\uc790\uc758 \uad8c\ud55c\uc5d0 \ub530\ub77c \ubdf0\ub97c \ub2e4\ub974\uac8c \uad6c\uc131","Slug \ub4f1\ub85d\uc744 \ud1b5\ud574 \uc6d0\ud558\ub294 URL \uad6c\uc131, \uc774\ubbf8\uc9c0 \uc2ac\ub77c\uc774\ub4dc \uad6c\ud604"]}],keywords:["Django","MongoDB","HTML","CSS","JS"],folder:"./house-manual",images:["1","2","3","4"],pdfs:[]},{left_title:"2020.03 ~ 2020.12",left_add:"https://github.com/Kim-Hobin/OMR-based-automatic-arragement-system",right_title:"\uad11\ud559 \uc74c\uc545 \uc778\uc2dd \uae30\ubc18 \uc790\ub3d9 \ud3b8\uace1 \uc2dc\uc2a4\ud15c",right_subtitle:"\ucea1\uc2a4\ud1a4\ub514\uc790\uc7781, 2 \uad50\uacfc\ubaa9 \uc5f0\uacc4 \uc878\uc5c5\ud504\ub85c\uc81d\ud2b8",content:[{main:"\uc77c\ubc18\uc778\ub3c4 \uc545\ubcf4\ub97c \ub370\uc774\ud130\ud654\ud558\uc5ec \uc27d\uac8c \ud3b8\uc9d1\ud558\uace0 \uc74c\uc545 \ud30c\uc77c\ub85c \ucd9c\ub825\ud560 \uc218 \uc788\ub294 \uc545\ubcf4 \uc778\uc2dd \uae30\ubc18 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158",sub:["\uc0ac\uc6a9\uc790\ub294 \ud3b8\uace1\ud558\uace0\uc790 \ud558\ub294 \uc74c\uc545\uc758 \uc545\ubcf4\ub97c \uc785\ub825\ud558\uace0 \ud3b8\uace1\ub41c \uc74c\uc545 \ud30c\uc77c\uc744 \uc81c\uacf5 \ubc1b\uc74c"]},{main:"\ud06c\uac8c \uad11\ud559 \uc74c\uc545 \uc778\uc2dd \ubaa8\ub4c8\uacfc \uc790\ub3d9 \ud3b8\uace1 \ubaa8\ub4c8\ub85c \uad6c\uc131",sub:["\ud074\ub77c\uc774\uc5b8\ud2b8\ub294 \uc548\ub4dc\ub85c\uc774\ub4dc \uc560\ud50c\ub9ac\ucf00\uc774\uc158, \uc11c\ubc84\ub294 \ud30c\uc774\uc36c\uc73c\ub85c \uad6c\ud604","\uad11\ud559 \uc74c\uc545 \uc778\uc2dd \ubaa8\ub4c8\uc5d0 OpenCV \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud558\uc600\uc73c\uba70, \uc18d\ub3c4\ub97c \uc704\ud574 jni + ndk\ub97c \uc0ac\uc6a9\ud568"]},{main:"\ubcf8 \ud504\ub85c\uc81d\ud2b8\ub97c \ud1b5\ud574 \uc791\uac8c \ub098\ub9c8 \ucef4\ud4e8\ud130\ube44\uc804, \uba38\uc2e0 \ub7ec\ub2dd \ub4f1 \uc778\uacf5\uc9c0\ub2a5 \ubd84\uc57c\uc758 \ud559\uc2b5 \uacc4\uae30\uac00 \ub428",sub:["\uc545\ubcf4\uc758 \uad6c\uc131\uc694\uc18c\ub4e4\uc774 \uac00\uc9c4 \uad6c\uc870\uc801 \ud2b9\uc131\uc744 \uc774\uc6a9\ud574 \uc778\uc2dd \ubaa8\ub4c8\uc744 \uad6c\ud604","\uc790\ub3d9 \ud3b8\uace1 \ubaa8\ub4c8\uc5d0 \ub2e4\uce35 \ud37c\uc149\ud2b8\ub860 \uad6c\uc870\uc758 \uc2e0\uacbd\ub9dd\uc744 \ud1b5\ud574 \uba5c\ub85c\ub514 \uae30\ubc18 \ud654\uc131\uc744 \uc0dd\uc131"]}],keywords:["C++","JAVA","Python","Android","OpenCV","TensorFlow"],folder:"./senior-project",images:["1","2"],pdfs:[]},{left_title:"2019.09 ~ 2019.12",left_add:"https://github.com/Kim-Hobin/PC-auction",right_title:"PC \uacac\uc801 \uad00\ub9ac \uc6f9\uc0ac\uc774\ud2b8",right_subtitle:"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc124\uacc4 \uad50\uacfc\ubaa9 \uc5f0\uacc4 \ud504\ub85c\uc81d\ud2b8",content:[{main:"PC\ubd80\ud488\uc5d0 \ub300\ud55c \uc9c0\uc2dd \uc5c6\uc774 \uc870\ub9bd\ud615 PC\ub97c \uad6c\ub9e4\ud560 \uc218 \uc788\ub294 PC\uacac\uc801 \ubc0f \uacbd\ub9e4 \uc0ac\uc774\ud2b8",sub:[]},{main:"HTML + CSS + JavaScirpt\ub85c \ud074\ub77c\uc774\uc5b8\ud2b8, Apache + PHP\ub85c \ub85c\uceec\uc11c\ubc84 \uad6c\ud604",sub:[]},{main:"\ub85c\uadf8\uc778, \ub85c\uadf8\uc544\uc6c3, \ud68c\uc6d0\uac00\uc785, \uc5ed\uacbd\ub9e4/\uc785\ucc30, \ud398\uc774\uc9d5, \uad00\ub9ac\uc790 \ud398\uc774\uc9c0 \ub4f1\uc758 \uae30\ub2a5 \uc81c\uacf5",sub:[]}],keywords:["PHP","MySQL","HTML","CSS","JavaScript"],folder:"./PC-auction",images:["1","2"],pdfs:[]},{left_title:"2019.09 ~ 2019.12",left_add:"https://github.com/Kim-Hobin/Online-Book-Purchase-System",right_title:"\uc628\ub77c\uc778 \ub3c4\uc11c \uad6c\ub9e4 \uc2dc\uc2a4\ud15c",right_subtitle:"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc124\uacc4 \uad50\uacfc\ubaa9 \uc5f0\uacc4 \ud504\ub85c\uc81d\ud2b8",content:[{main:"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc2e4\uc2b5\uc744 \uc704\ud574 \uc54c\ub77c\ub518, YES24, \ub9ac\ub514\ubd81\uc2a4\uc640 \uac19\uc740 \uc628\ub77c\uc778 \ub3c4\uc11c \uad6c\ub9e4 \uc0ac\uc774\ud2b8\ub97c \uad6c\ud604",sub:[]},{main:"HTML + CSS + JavaScirpt\ub85c \ud074\ub77c\uc774\uc5b8\ud2b8, Apache + PHP\ub85c \ub85c\uceec\uc11c\ubc84 \uad6c\ud604",sub:[]},{main:"\ub85c\uadf8\uc778/\ub85c\uadf8\uc544\uc6c3, \ud68c\uc6d0\uac00\uc785, \ub9c8\uc774\ud398\uc774\uc9c0(\uc2e0\uc6a9\uce74\ub4dc, \uc7a5\ubc14\uad6c\ub2c8, \uc8fc\ubb38\ub0b4\uc5ed, \uc8fc\ubb38\uc0c1\uc138), \uc8fc\ubb38, \ub9ac\ubdf0 \ub4f1\uc758 \uae30\ub2a5 \uc81c\uacf5",sub:[]},{main:"MySQL\uc758 \ud14c\uc774\ube14\uc758 \uc18d\uc131\uc774\ub098 \uad00\uacc4\uc5d0 \ub300\ud574 \uc9c1\uc811 \uc124\uacc4",sub:[]}],keywords:["PHP","MySQL","HTML","CSS","JS"],folder:"./book-manage",images:["1","2"],pdfs:[]},{left_title:"2019.09 ~ 2019.12",left_add:"",right_title:"\ud50c\ub9ac\ub9c8\ucf13 \ud1b5\ud569 \uad00\ub9ac \uc2dc\uc2a4\ud15c",right_subtitle:"\uc18c\ud504\ud2b8\uc6e8\uc5b4\ubd84\uc11d\uc124\uacc4\uacfc\ubaa9 \uad50\uacfc\ubaa9 \uc5f0\uacc4 \ud504\ub85c\uc81d\ud2b8",content:[{main:"\ud50c\ub9ac\ub9c8\ucf13\uc758 \uc140\ub7ec\uc640 \uc8fc\ucd5c\uc790, \ucc38\uac00\uc790\uc5d0\uac8c \uae30\uc874\uc758 \ubd88\ud3b8\ud55c \uc694\uc18c\ub4e4\uc744 \ud574\uc18c\ud560 \uc218 \uc788\ub3c4\ub85d \ud558\ub294 \ud50c\ub9ac\ub9c8\ucf13 \ud1b5\ud569 \uad00\ub9ac \uc2dc\uc2a4\ud15c",sub:[]},{main:"\ud574\ub2f9 \ud504\ub85c\uc81d\ud2b8\ub294 \uac1c\ubc1c \uc9c1\uc804 \ub2e8\uacc4\uae4c\uc9c0\uc758 \uc124\uacc4\ub97c \ubaa9\ud45c\ub85c \ub450\uace0 \ud504\ub85c\uc81d\ud2b8 \uc815\uc758\uc11c, \ub2e4\uc591\ud55c \ubb38\uc11c\ub97c \uc791\uc131 \ud574\ubcf8 \ud504\ub85c\uc81d\ud2b8",sub:["\ud504\ub85c\uc81d\ud2b8 \uc815\uc758\uc11c, \uc694\uad6c\uc0ac\ud56d\uae30\uc220\uc11c, \ud074\ub798\uc2a4\ubd84\uc11d\uc11c, UI\uc124\uacc4\uc11c, \ub370\uc774\ud2b8\ubca0\uc774\uc2a4\uc124\uacc4\uc11c \ub4f1\uc758 \uc124\uacc4 \ubb38\uc11c \uc791\uc131","\ud504\ub85c\uc81d\ud2b8 \uc124\uacc4\ubc29\ubc95\uacfc StarUML\uacfc \uac19\uc740 \uc124\uacc4\ud234\uc5d0 \ub300\ud574 \ubc30\uc6b8\uc218 \uc788\uc5c8\uc74c"]}],keywords:["StarUML"],folder:"./fleamarket",images:[],pdfs:["1","2"]},{left_title:"2019.09 ~ 2019.12",left_add:"https://github.com/Kim-Hobin/tap-the-taxi-2",right_title:"TAPC2",right_subtitle:"\uc18c\ud504\ud2b8\uc6e8\uc5b4 \uac1c\ubc1c \uc2e4\uc2b54 \uad50\uacfc\ubaa9 \uc5f0\uacc4 \ud504\ub85c\uc81d\ud2b8",content:[{main:"\uace0\uc9c0\ub300\uc5d0 \uc704\uce58\ud55c \ud559\uad50\uc758 \uc9c0\ub9ac\uc801 \ud2b9\uc131\uc5d0 \ud0dd\uc2dc\ud569\uc2b9\uad00\ub828 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158",sub:[]},{main:"\ud074\ub77c\uc774\uc5b8\ud2b8\ub294 \uc548\ub4dc\ub85c\uc774\ub4dc \uc560\ud50c\ub9ac\ucf00\uc774\uc158, \uc11c\ubc84\ub294 Node.js, DB\ub294 MySQL\ub85c \uad6c\ud604",sub:["\ub85c\uadf8\uc778/\ub85c\uadf8\uc544\uc6c3, \ud68c\uc6d0\uac00\uc785 \ub4f1\uc744 \uc704\ud55c http \uc11c\ubc84\uc640 \ub9e4\uce6d/\ucc44\ud305\uc744 \uc704\ud55c \uc18c\ucf13 \uc11c\ubc84\ub97c \uad6c\ud604","\uae30\uc874 TapC\uc758 FIreBase\ub97c \ub300\uccb4\ud558\uc5ec \uc6f9 \uc11c\ubc84 \uc5f0\ub3d9"]}],keywords:["Node.js","MySQL","JAVA","JavaScrpit","Andriod"],folder:"./tapc2",images:["1","2"],pdfs:[]},{left_title:"2018.03 ~ 2018.06",left_add:"https://github.com/Kim-Hobin/Online-badminton-Shopping-Mall",right_title:"\ubc30\ub4dc\ubbfc\ud134 \uc1fc\ud551\ubab0",right_subtitle:"\uc18c\ud504\ud2b8\uc6e8\uc5b4\uac1c\ubc1c\uc2e4\uc2b52 \uad50\uacfc\ubaa9 \uc5f0\uacc4 \ud504\ub85c\uc81d\ud2b8",content:[{main:"\ubc30\ub4dc\ubbfc\ud134 \uad00\ub828 \uc1fc\ud551\ubab0 \uc0ac\uc774\ud2b8",sub:[]},{main:"html + css + javascript\uc744 \uae30\ubc18\uc73c\ub85c \uc11c\ubc84\uac00 \uc5c6\ub294 \uc815\uc801 \ud398\uc774\uc9c0\ub85c \uc774\ubbf8\uc9c0 \uc2ac\ub77c\uc774\ub4dc \uad6c\ud604",sub:[]}],keywords:["HTML","CSS","JS"],folder:"./badmintorn-market",images:["1","2","3","4"],pdfs:[]}]},educations:{subject:"Education",contents:[{left_title:"2014.12 ~ 2015.11",left_add:"",right_title:"\ub3d9\uc11c\ub300\ud559\uad50 \uc878\uc5c5",right_subtitle:"\ucef4\ud4e8\ud130\uacf5\ud559\uacfc / \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc804\uacf5 / AI\uacf5\ud559 \ubd80\uc804\uacf5 / \ud559\uc810 : 4.17",content:[],keywords:[],folder:"",images:[],pdfs:[]},{left_title:"2014.12 ~ 2015.11",left_add:"",right_title:"\ubd80\uc0b0\uc6a9\uc778\uace0 \uc878\uc5c5",right_subtitle:"\ubd80\uc0b0\uad11\uc5ed\uc2dc \ub3d9\ub798\uad6c \uba85\uc7a5\ub3d9",content:[],keywords:[],folder:"",images:[],pdfs:[]}]},awards:{subject:"Awards",contents:[{left_title:"2020.12.17",left_add:"https://www.dongseo.ac.kr/kr/index.php?pCode=MN2000192&pg=10&mode=view&idx=83639",right_title:"2020\ub144\ub3c4 \uc628\ud0dd\ud2b8\uae30\ubc18 \ub3d9\uc11c\uc778 FAIR - \ucd5c\uc6b0\uc218\uc0c1",right_subtitle:"",content:[],keywords:[],folder:"",images:[],pdfs:[]},{left_title:"2020.11.28",left_add:"",right_title:"\ud55c\uad6d\uc9c0\ub2a5\uc2dc\uc2a4\ud15c\ud559\ud68c 30\uc8fc\ub144 \uae30\ub150 2020 \ucd94\uacc4\ud559\uc220\ub300\ud68c - \uc6b0\uc218\ub17c\ubb38\uc0c1",right_subtitle:"",content:[],keywords:[],folder:"",images:[],pdfs:[]},{left_title:"2020.08.31",left_add:"https://www.dongseo.ac.kr/kr/index.php?pCode=MN2000192&pg=15&mode=view&idx=82307",right_title:"\ub3d9\uc11c\uc778 AI\ud574\ucee4\ud1a4 \uacbd\uc9c4\ub300\ud68c - \uc7a5\ub824\uc0c1",right_subtitle:"",content:[],keywords:[],folder:"",images:[],pdfs:[]},{left_title:"2020.06.08",left_add:"https://uni.dongseo.ac.kr/sw/index.php?pCode=MN1000014&pg=3&mode=view&idx=442",right_title:"2020\ub144\ub3c4 \ub3d9\uc11c AI\xb7SW \uc544\uc774\ub514\uc5b4 \uacbd\uc9c4\ub300\ud68c - \uc7a5\ub824\uc0c1",right_subtitle:"",content:[],keywords:[],folder:"",images:[],pdfs:[]}]},reserchs:{subject:"Reserch",contents:[{left_title:"2020.01.18",left_add:"https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE10572152",right_title:"Journal of The Korean Instiute of Inteligent System",right_subtitle:"Optical Music Recognition-based Auto Arrangement System",content:[{main:"\uad6c\ubd84 : Journal",sub:["\ud754\ud788 \uc74c\uc545\uc744 \ucd94\uc0c1\uc801\uc774\uace0 \ubd88\ud655\uc2e4\uc131\uc774 \ub192\uc740 \uc608\uc220 \ubd84\uc57c\ub77c \uc0dd\uac01\ud558\uc9c0\ub9cc, \uc5c4\uc5f0\ud788 \ud654\uc131\ud559\uacfc \ub300\uc704\ubc95 \ub4f1 \uc815\ub9bd\ub41c \uc774\ub860\uc774 \uc874\uc7ac\ud55c\ub2e4. \ucef4\ud4e8\ud130\uc640 \uc778\uacf5\uc9c0\ub2a5\uc774 \ub4f1\uc7a5\ud568\uc5d0 \ub530\ub77c \uc774\ub7f0 \uc774\ub860\ub4e4\uc744 \ubc14\ud0d5\uc73c\ub85c \uc74c\uc545\uc744 \uc791\uace1\ud558\uac70\ub098 \ud3b8\uace1\ud558\ub824\ub294 \uc2dc\ub3c4\uac00 \uc0dd\uaca8\ub0ac\uace0, \ud604\uc7ac\uae4c\uc9c0\ub3c4 \ub9ce\uc740 \uc5f0\uad6c\uac00 \uc9c4\ud589\ub418\uace0 \uc788\ub2e4. \ubcf8 \ub17c\ubb38\uc5d0\uc11c\ub294 \uc545\ubcf4 \uc774\ubbf8\uc9c0\ub97c \uc785\ub825\ubc1b\uc544 \uc54c\uace0\ub9ac\uc998\uc744 \ud1b5\ud574 \uc790\ub3d9 \ud3b8\uace1\ud55c \uc74c\uc545 \ud30c\uc77c\uc744 \ucd9c\ub825\ud560 \uc218 \uc788\ub3c4\ub85d \ud558\ub294 \uc545\ubcf4 \uc778\uc2dd \uae30\ubc18 \uc790\ub3d9 \ud3b8\uace1 \uc2dc\uc2a4\ud15c\uc744 \uc81c\uc548\ud558\uc600\ub2e4. \uad11\ud559 \uc74c\uc545 \uc778\uc2dd\uc744 \ud1b5\ud574 \uc545\ubcf4\ub97c \ucef4\ud4e8\ud130\uac00 \uc774\ud574\ud558\uae30 \uc26c\uc6b4 \ub370\uc774\ud130 \ud615\ud0dc\ub85c \ubcc0\ud658\ud558\uc600\uace0, \uba5c\ub85c\ub514\ub97c \uae30\ubc18\uc73c\ub85c \ucf54\ub4dc\ub97c \uc0dd\uc131\ud568\uc73c\ub85c\uc368 \ud3b8\uace1 \uc2dc\uc2a4\ud15c\uc758 \uc77c\ubd80\ubd84\uc744 \uad6c\ud604\ud558\uc600\ub2e4. \ucf54\ub4dc\ub97c \uc0dd\uc131\ud558\ub294 \uc791\uc5c5\uc5d0\ub294 \uc2e4\uc81c \uc545\uace1\uc758 \uba5c\ub85c\ub514\uc640 \ucf54\ub4dc\ub97c \uae30\ubc18\uc73c\ub85c \uc2ec\uce35 \uc2e0\uacbd\ub9dd\uc744 \uc0ac\uc6a9\ud558\uc600\ub2e4. \ucf54\ub4dc\ub97c \uc0dd\uc131\ud558\ub294 \ub370\uc5d0\ub294 \ub2e4\uc591\ud55c \uc120\ud0dd\uc9c0\uac00 \uc788\uc74c\uc5d0\ub3c4 \ubd88\uad6c, \uc2e4\uc81c \uc545\uace1\uacfc\uc758 \ube44\uad50\uc5d0\uc11c \uc57d 55%\uc758 \uc77c\uce58\uc728\uc744 \ubcf4\uc600\ub2e4."]}],keywords:[],folder:"",images:[],pdfs:[]},{left_title:"2020.11.28",left_add:"",right_title:"\ucef4\ud4e8\ud130\uacf5\ud559\ubd80\uc878\uc5c5\ub17c\ubb38\uc9d1",right_subtitle:"\uad11\ud559 \uc74c\uc545 \uc778\uc2dd \uae30\ubc18 \ud3b8\uace1 \uc2dc\uc2a4\ud15c",content:[{main:"\uad6c\ubd84 : Thesis",sub:["4\ucc28 \uc0b0\uc5c5\ud601\uba85\uc774 \uc9c4\ud589\ub418\uba70 \uc778\uacf5\uc9c0\ub2a5\uc774 \ub2e4\uc591\ud55c \ubd84\uc57c\uc5d0\uc11c \ud65c\uc6a9\ub418\uace0 \uc788\ub2e4. \uc74c\uc545 \ubd84\uc57c \ub610\ud55c \uc778\uacf5\uc9c0\ub2a5\uacfc\uc758 \uc735\ud569\uc5d0 \ub9ce\uc740 \uc5f0\uad6c\uac00 \uc9c4\ud589\ub418\uace0 \uc788\ub2e4. \ud55c\ud3b8 \uc0ac\ud68c \uc804\ubc18\uc801\uc73c\ub85c \uc74c\uc545\uc5d0 \ub300\ud55c \uc218\uc694\ub294 \uafb8\uc900\ud788 \ub298\uace0 \uc788\uc73c\uba70, \uadf8\uc911\uc5d0\uc11c\ub3c4 \ud3b8\uace1\uc5d0 \ub300\ud55c \uad00\uc2ec\uc774 \ub298\uace0 \uc788\ub2e4. \ub2e4\ub9cc \ud3b8\uace1 \uc791\uc5c5\uc740 \uc9c4\uc785\uc7a5\ubcbd\uc774 \ub192\uc544, \uc804\uacf5\uc790\uac00 \uc544\ub2cc \uc77c\ubc18\uc778\ub4e4\uc774 \uc2dc\ub3c4\ud558\uae30\uc5d0\ub294 \uc5b4\ub824\uc6c0\uc774 \uc788\ub2e4. \uc774\uc5d0 \ub530\ub77c \ubcf8 \ub17c\ubb38\uc5d0\uc11c\ub294 \uad11\ud559 \uc74c\uc545 \uc778\uc2dd \uae30\ubc18 \uc790\ub3d9 \ud3b8\uace1 \uc2dc\uc2a4\ud15c\uc744 \uc81c\uc548\ud55c\ub2e4. \ud3b8\uace1\uc744 \uc704\ud55c \ub370\uc774\ud130 \ud655\ubcf4\ub97c \uc704\ud574 \uad11\ud559 \uc74c\uc545 \uc778\uc2dd\uc744 \uc0ac\uc6a9\ud558\uc600\uace0 \ud3b8\uace1 \uacfc\uc815 \uc911, \ud654\uc131 \uc0dd\uc131\uc758 \uacbd\uc6b0 \uba5c\ub85c\ub514\uc5d0 \uae30\ubc18\ud55c \uc2e0\uacbd\ub9dd \uae30\ubc95\uc744 \uc0ac\uc6a9\ud558\uc600\ub2e4. \uc81c\uc548\ud55c \uad11\ud559 \uc74c\uc545 \uc778\uc2dd \uae30\ubc95\uc740 \ubcf5\uc7a1\ub3c4 \u2018\ud558\u2019\uc5d0 \ud574\ub2f9\ud558\ub294 \uc545\ubcf4 20\uc7a5\uc5d0 \ub300\ud574 95%\uc758 \uc778\uc2dd\ub960\uc744 \ubcf4\uc600\uc73c\uba70 \uc2e0\uacbd\ub9dd\uc744 \ud1b5\ud574 \uc0dd\uc131\ub41c \ud654\uc131\ub4e4\uc740 \ud654\uc131\ud559\uc5d0 \uadfc\uac70\ud558\uc5ec \uc2e4\uc81c \ud3b8\uace1\uc5d0 \uc801\uc6a9\ud560 \uc218 \uc788\uc74c\uc744 \ud655\uc778\ud558\uc600\ub2e4."]}],keywords:[],folder:"",images:[],pdfs:[]},{left_title:"2020.11.28",left_add:"",right_title:"\ud55c\uad6d\uc9c0\ub2a5\uc2dc\uc2a4\ud15c\ud559\ud68c 30\uc8fc\ub144 \uae30\ub150 2020 \ucd94\uacc4\ud559\uc220\ub300\ud68c",right_subtitle:"\uad11\ud559 \uc74c\uc545 \uc778\uc2dd \uae30\ubc18 \ud3b8\uace1 \uc2dc\uc2a4\ud15c",content:[{main:"\uad6c\ubd84 : Conference",sub:["\uc778\uacf5\uc9c0\ub2a5\uc5d0 \ub300\ud55c \uad00\uc2ec\uacfc \ud65c\uc6a9\uc774 \uc99d\uac00\ud568\uc5d0 \ub530\ub77c 4\ucc28 \uc0b0\uc5c5\ud601\uba85\uc758 \uc8fc\uc694 \uae30\uc220\ub85c \uac01\uad11\ubc1b\uace0 \uc788\ub2e4.                     \uc74c\uc545\ubd84\uc57c\uc5d0\uc11c\ub3c4 \uc778\uacf5\uc9c0\ub2a5\uacfc\uc758 \uc735\ud569\uc5d0 \ub9ce\uc740 \uc5f0\uad6c\uac00 \ud65c\ubc1c\ud788 \uc9c4\ud589\ub418\uace0 \uc788\ub2e4. \ubcf8 \ub17c\ubb38\uc5d0\uc11c\ub294 \uad11\ud559\uc74c\uc545\uc778\uc2dd \uae30\ubc18 \uc790\ub3d9 \ud3b8\uace1 \uc2dc\uc2a4\ud15c\uc744 \uc81c\uc548\ud55c\ub2e4.                     \ud3b8\uace1\uc5d0\ub294 \ud15c\ud3ec \uc870\uc808, \uc870\uc62e\uae40, \ud654\uc131 \uc0dd\uc131\uacfc \uac19\uc740 \ub2e4\uc591\ud55c \uacfc\uc815\uc774 \ud3ec\ud568\ub41c\ub2e4. \ud3b8\uace1\uc744 \uc704\ud55c \ub370\uc774\ud130 \ud655\ubcf4\ub97c \uc704\ud574 \uad11\ud559 \uc74c\uc545 \uc778\uc2dd\uc744 \uc0ac\uc6a9\ud558\uc600\uace0 \uba5c\ub85c\ub514\uc5d0                     \uc5b4\uc6b8\ub9ac\ub294 \ud654\uc131\uc744 \uc0dd\uc131\ud558\uae30 \uc704\ud574 \uc2e0\uacbd\ub9dd \uae30\ubc95\uc744 \uc0ac\uc6a9\ud558\uc600\ub2e4. \uc0dd\uc131\ub41c \ud654\uc131\ub4e4\uc740 \ud654\uc131\ud559\uc5d0 \uadfc\uac70\ud558\uc5ec \uc2e4\uc81c \ud3b8\uace1\uc5d0 \uc801\uc6a9\uc2dc\ud0ac \uc218 \uc788\uc74c\uc744 \ud655\uc778\ud558\uc600\ub2e4."]}],keywords:[],folder:"",images:[],pdfs:[]},{left_title:"2020.11.10",left_add:"",right_title:"\ubc1c\uba85 \ud2b9\ud5c8 \ucd9c\uc6d0",right_subtitle:"\uc545\ubcf4 \uc778\uc2dd \uae30\ubc18 \ud3b8\uace1 \uc7a5\uce58 \ubc0f \uc545\ubcf4 \uc778\uc2dd \uae30\ubc18 \ud3b8\uace1 \ubc29\ubc95",content:[{main:"\uad6c\ubd84 : Conference",sub:["\ubcf8 \ubc1c\uba85\uc740 \uc545\ubcf4 \uc778\uc2dd \uae30\ubc18 \ud3b8\uace1 \uc7a5\uce58 \ubc0f \ubc29\ubc95\uc5d0 \uad00\ud55c \uac83\uc73c\ub85c, \ub354 \uc0c1\uc138\ud558\uac8c\ub294 \uad11\ud559 \uc778\uc2dd \uc54c\uace0\ub9ac\uc998\uc744 \uc774\uc6a9\ud558\uc5ec \uc545\ubcf4\ub85c\ubd80\ud130 \ub370\uc774\ud130\ub97c \ucd94\ucd9c\ud558\uace0,                     \ucd94\ucd9c\ub41c \ub370\uc774\ud130\ub97c \ud3b8\uc9d1\ud568\uc73c\ub85c\uc368 \uc0ac\uc6a9\uc790\uac00 \uc27d\uac8c \uc545\ubcf4\ub97c \ud3b8\uace1\ud558\ub3c4\ub85d \uc81c\uacf5\ud558\uba70, \ud3b8\uace1\ub41c \uc74c\uc545\uc744 \ud30c\uc77c\ub85c \uc81c\uacf5\ubc1b\ub3c4\ub85d \ud558\ub294 \uc545\ubcf4 \uc778\uc2dd \uae30\ubc18 \ud3b8\uace1 \uc7a5\uce58 \ubc0f \ubc29\ubc95\uc5d0 \uad00\ud55c \uac83\uc774\ub2e4."]}],keywords:[],folder:"",images:[],pdfs:[]},{left_title:"2020.08.31",left_add:"http://www.aspbs.com/ctn/contents-ctn2021.htm",right_title:"ICCT2020 SCOPUS",right_subtitle:"Computer-Vision-based Advanced Optical Music Recognition System",content:[{main:"\uad6c\ubd84 : SCOPUS",sub:["Computer vision is an artificial intelligence technology that studies techniques for extracting information from images. Several studies have been performed to identify and edit music scores using computer vision. This study proposes a system to identify musical notes and print arranged music. Music is produced by general rules; consequently, the components of music have specific patterns. There are four approaches in pattern recognition that can be used classify images using patterns. Our proposed method of identifying music sheets is as follows. Several pretreatment processes (image binary, noise and staff elimination, image resizing) are performed to aid the identification. The components of the music sheet are identified by statistical pattern recognition. Applying an artificial intelligence model (Markov chain) to extracted music data aids in arranging the data. From applying the pattern recognition technique, a recognition rate of 100% was shown for music sheets of low complexity. The components included in the recognition rate are signs, notes, and beats. However, there was a low recognition rate for some music sheet and can be addressed by adding a classification to the navigation process. To increase the recognition rate of the music sheet with intermediate complexity, it is necessary to refine the pre-processing process and pattern recognition algorithm. We will also apply neural network-based models to the arrangement process."]}],keywords:[],folder:"",images:[],pdfs:[]},{left_title:"2020.07.09",left_add:"",right_title:"The 10th International Conference on Convergence Technology in 2020",right_subtitle:"Advanced Optical Music Recognition System for Automatic Arrangement",content:[{main:"\uad6c\ubd84 : Conference",sub:["In general, the demand for music is increasing among them; the demand and interest for remake songs are increasing. However, the skill related to the arrangement is difficult to learn, and its quantity has been recognized only as an expert area. On the other hand, AI (artificial intelligence) is active in many fields, among which music-related AI is also in the spotlight. In this paper, we proposed the contents of the development of a system that makes it easy for the general public who is not a music major to arrange music using computer vision and machine learning technology easily. Initially, a template matching algorithm was applied to score recognition. However, there was a problem with a low recognition rate. In order to solve the problem, we proposed advanced optical music recognition with high versatility."]}],keywords:[],folder:"",images:[],pdfs:[]}]},certificates:{contents:[]}},B=a(26),D=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state=R,n}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:b.a.resume},i.a.createElement(J,null),i.a.createElement(B.a,null,i.a.createElement(h,{data:this.state.profiles}),i.a.createElement(v,{data:this.state.intro}),i.a.createElement(N,{data:this.state.skills}),i.a.createElement(S,{data:this.state.experience})),i.a.createElement(S,{data:this.state.projects}),i.a.createElement(B.a,null,i.a.createElement(S,{data:this.state.reserchs}),i.a.createElement(S,{data:this.state.educations}),i.a.createElement(S,{data:this.state.awards}),i.a.createElement(S,{data:this.state.certificates})),i.a.createElement(A,null))}}]),a}(n.Component),F=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e="/projects/".concat(this.props.match.params.folder,"/").concat(this.props.match.params.pdf,".pdf");return i.a.createElement("div",null,i.a.createElement("embed",{src:e,type:"application/pdf"}))}}]),a}(n.Component),K=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(d.a,{exact:!0,path:"/",component:D}),i.a.createElement(d.a,{exact:!0,path:"/pdfviewer/:folder/:pdf",component:F}))}}]),a}(n.Component);a(47);s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(o.a,null,i.a.createElement(K,null))),document.getElementById("root"))},5:function(e,t,a){e.exports={border_bot:"styles_border_bot__2gZ40",resume:"styles_resume__2WVEA",Main:"styles_Main__Ngvek",Wrapper:"styles_Wrapper__2QZj_",left:"styles_left__3eS8T",right:"styles_right__2MhDf",ImageView:"styles_ImageView__3uqJX",keyword:"styles_keyword__G9BAa",details:"styles_details__3UxxE"}}},[[31,1,2]]]);
//# sourceMappingURL=main.30295109.chunk.js.map