(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{13:function(t,e,i){t.exports={Modal:"modal_Modal__3877h",Arrow:"modal_Arrow__1gHYn",Gallary:"modal_Gallary__1G0vD",CurrentImage:"modal_CurrentImage__2pncn"}},16:function(t,e,i){t.exports={Profile:"profile_Profile__c49Mi",contact:"profile_contact__38FnR",SpinButton:"profile_SpinButton__155gC",spin:"profile_spin__2NKjX"}},17:function(t,e,i){t.exports={Skill:"skill_Skill__1ATTH",flex:"skill_flex__U-Ltw",Category:"skill_Category__1CJ1Z"}},20:function(t,e,i){t.exports={Intro:"intro_Intro__1_9EY",content:"intro_content__28GOK"}},38:function(t,e,i){},39:function(t,e,i){"use strict";i.r(e);var s=i(1),n=i.n(s),a=i(22),r=i.n(a),o=i(14),c=i(2),l=i(3),d=i(5),h=i(4),u=i(7),p=i(16),f=i.n(p),b=i(0),j=function(t){Object(d.a)(i,t);var e=Object(h.a)(i);function i(){return Object(c.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var t=this.props.data,e=t.contents.map((function(t){return Object(b.jsx)("a",{className:f.a.SpinButton,target:"_blabk",title:t.link,href:t.link,children:Object(b.jsx)("i",{class:t.style})})}));return Object(b.jsx)("header",{className:f.a.Profile,children:Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{src:"profile.jpg"}),Object(b.jsx)("h1",{children:t.name}),Object(b.jsx)("h3",{children:t.intro}),Object(b.jsx)("div",{className:f.a.contact,children:e})]})})}}]),i}(s.Component),m=i(6),g=i.n(m),_=i(20),O=i.n(_),y=function(t){Object(d.a)(i,t);var e=Object(h.a)(i);function i(){return Object(c.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var t=this.props.data;return Object(b.jsxs)("section",{className:O.a.Intro,children:[Object(b.jsx)("h2",{children:t.subject}),Object(b.jsx)("div",{className:g.a.border_top}),Object(b.jsx)("div",{className:g.a.border_bot}),Object(b.jsx)("p",{className:O.a.content,children:t.content})]})}}]),i}(s.Component),x=function(t){Object(d.a)(i,t);var e=Object(h.a)(i);function i(){return Object(c.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:g.a.left,children:[Object(b.jsx)("h5",{children:this.props.title}),Object(b.jsx)("a",{href:this.props.add,target:"_blank",children:this.props.add})]})}}]),i}(s.Component),v=i(13),k=i.n(v),w=function(t){Object(d.a)(i,t);var e=Object(h.a)(i);function i(t){var s;return Object(c.a)(this,i),(s=e.call(this,t)).changeImage=function(t){s.setState({index:t})},s.state={index:s.props.index},s}return Object(l.a)(i,[{key:"render",value:function(){var t=this,e=this.props.folder,i=this.props.images[this.state.index],s=this.props.images.length,n=this.props.images.map((function(i,s){if(s===t.state.index)var n=k.a.CurrentImage;return Object(b.jsx)("button",{className:n,onClick:function(){return t.changeImage(s)},children:Object(b.jsx)("img",{className:k.a.ImageView,src:"projects/".concat(e,"/").concat(i,".png")})})}));return Object(b.jsx)("div",{className:k.a.Modal,onClick:this.props.close,children:Object(b.jsxs)("section",{onClick:function(t){return t.stopPropagation()},children:[" ",Object(b.jsxs)("header",{children:[Object(b.jsx)("h5",{children:this.props.title}),Object(b.jsx)("p",{children:this.props.subtitle})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:k.a.Arrow,children:Object(b.jsx)("i",{class:"fas fa-chevron-left",onClick:function(){return t.changeImage((t.state.index-1+s)%s)}})}),Object(b.jsx)("div",{className:k.a.Gallary,children:Object(b.jsx)("img",{src:"projects/".concat(e,"/").concat(i,".png")})}),Object(b.jsx)("div",{className:k.a.Arrow,children:Object(b.jsx)("i",{class:"fas fa-chevron-right",onClick:function(){return t.changeImage((t.state.index+1+s)%s)}})})]}),Object(b.jsx)("footer",{children:n})]})})}}]),i}(s.Component),S=function(t){Object(d.a)(i,t);var e=Object(h.a)(i);function i(){var t;return Object(c.a)(this,i),(t=e.call(this)).test=function(e){t.setState({imgIndex:e,modalOn:!t.state.modalOn})},t.state={imgIndex:null,modalOn:!1},t}return Object(l.a)(i,[{key:"render",value:function(){var t=this,e=this.props.content,i=this.props.keywords.map((function(t){return Object(b.jsx)("span",{className:g.a.keyword,children:t})})),s=this.props.folder,n=e.map((function(t){if(t.sub.length){var e=Object(b.jsx)("ul",{children:t.sub.map((function(t){return Object(b.jsx)("li",{children:t})}))});return Object(b.jsx)("li",{className:g.a.details,children:Object(b.jsxs)("details",{children:[Object(b.jsx)("summary",{children:t.main}),e]})})}return Object(b.jsx)("li",{children:t.main})})),a=this.props.images.map((function(e,i){return Object(b.jsx)("img",{className:g.a.ImageView,src:"projects/".concat(s,"/").concat(e,".png"),onClick:function(){return t.test(i)}})})),r=this.props.pdfs.map((function(t){return Object(b.jsx)(o.b,{to:"/pdfviewer/".concat(s,"/").concat(t),target:"_blank",children:"PDF GO"})}));return Object(b.jsxs)("div",{className:g.a.right,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h5",{children:this.props.title}),Object(b.jsx)("p",{children:this.props.subtitle}),Object(b.jsx)("ul",{children:n})]}),Object(b.jsx)("div",{children:a}),Object(b.jsx)("div",{children:i}),Object(b.jsx)("div",{children:r}),this.state.modalOn&&Object(b.jsx)(w,{index:this.state.imgIndex,close:function(){return t.test(null)},images:this.props.images,title:this.props.title,subtitle:this.props.subtitle,folder:this.props.folder})]})}}]),i}(s.Component),C=function(t){Object(d.a)(i,t);var e=Object(h.a)(i);function i(){return Object(c.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var t=this.props.data,e=t.contents.map((function(t){return Object(b.jsxs)("div",{className:g.a.Wrapper,children:[Object(b.jsx)(x,{title:t.left_title,add:t.left_add}),Object(b.jsx)(S,{title:t.right_title,subtitle:t.right_subtitle,content:t.content,folder:t.folder,images:t.images,pdfs:t.pdfs,keywords:t.keywords})]})}));return Object(b.jsxs)("section",{className:g.a.Main,children:[Object(b.jsx)("h2",{children:t.subject}),Object(b.jsx)("div",{className:g.a.border_top}),Object(b.jsx)("div",{className:g.a.border_bot}),e]})}}]),i}(s.Component),I=i(17),M=i.n(I),N=function(t){Object(d.a)(i,t);var e=Object(h.a)(i);function i(){return Object(c.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var t=this.props.content.map((function(t){return Object(b.jsx)("li",{children:t})}));return Object(b.jsx)("div",{children:Object(b.jsx)("ul",{children:t})})}}]),i}(s.Component),A=function(t){Object(d.a)(i,t);var e=Object(h.a)(i);function i(){return Object(c.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var t=this.props.data,e=t.contents.map((function(t){return Object(b.jsxs)("div",{className:M.a.Category,children:[Object(b.jsx)("h5",{children:t.title}),Object(b.jsx)(N,{content:t.content})]})}));return Object(b.jsxs)("section",{className:M.a.Skill,children:[Object(b.jsx)("h2",{children:t.subject}),Object(b.jsx)("div",{className:g.a.border_top}),Object(b.jsx)("div",{className:g.a.border_bot}),Object(b.jsx)("div",{className:M.a.flex,children:e})]})}}]),i}(s.Component),P=function(t){Object(d.a)(i,t);var e=Object(h.a)(i);function i(){return Object(c.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(b.jsx)("footer",{children:Object(b.jsx)("div",{})})}}]),i}(s.Component),T={profiles:{subject:"Profiles",name:"\uae40\ud638\ube48",intro:"Junior Software Engineer",contents:[{title:"\uc804\ud654\ubc88\ud638",link:"",style:"fas fa-phone-volume"},{title:"email",link:"mailto:isb0573@naver.com",style:"fas fa-at"},{title:"git",link:"https://github.com/Kim-Hobin",style:"fab fa-github"},{title:"blog",link:"https://isb0573.tistory.com/",style:"fas fa-blog"}]},intro:{subject:"About Me",content:"\uc548\ub155\ud558\uc138\uc694!! Front-and \uac1c\ubc1c\uc790\ub97c \uafc8\uafb8\ub294 \ud559\uc0dd\uc785\ub2c8\ub2e4.         \ud559\ucc3d\uc2dc\uc808, \ub17c\ubb38\uc744 \uc4f0\uace0 \ud559\uc220\ub300\ud68c\uc5d0 \ucc38\uac00\ud558\uc5ec \ubc1c\ud45c\ub97c \ud558\uc5ec \uc6b4\uc88b\uac8c \uc6b0\uc218\ub17c\ubb38\uc0c1\uc744 \ubc1b\uc558\uc2b5\ub2c8\ub2e4.         \ud2b9\ud5c8\ucd9c\uc6d0\ub3c4 \ud574\ubcf4\uc558\uace0, \uc0c8\ub85c \uc2e0\uc124\ub41c AI \ubd80\uc804\uacf5\uc744 \uc774\uc218\ud558\ub294 \ub4f1 \ub9ce\uc740 \uacbd\ud5d8\uc744 \ud560 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4.         \ud558\uc9c0\ub9cc \uc9c1\uc811\uc801\uc73c\ub85c \uac1c\ubc1c\uc744 \ud588\ub358 \uacbd\ud5d8\uc774 \uc801\uace0 \uac1c\ubc1c\uc2e4\ub825\uc774 \ubd80\uc871\ud558\ub2e4\uace0 \uc0dd\uac01\ud558\uc5ec         \ud604\uc7ac \ubd80\uc871\ud55c \ubd80\ubd84\uc744 \ud0a4\uc6b0\uace0\uc790 \ubc31\uc900 \uc0ac\uc774\ud2b8\uc640 \uc54c\uace0\ub9ac\uc998 \ud574\uacb0 \uc804\ub7b5\uc774\ub77c\ub294 \ucc45\uc744 \ud1b5\ud574 \uafb8\uc900\ud788 \uc54c\uace0\ub9ac\uc998 \uacf5\ubd80\uc640 \uc791\uc740 \ud504\ub85c\uc81d\ud2b8\ub97c \ubcd1\ud589\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.         \ub610\ud55c \ud604\uc7ac \ub9ac\uc5d1\ud2b8\ub97c \uacf5\ubd80\ud558\uc5ec \uae30\uc220 \uc774\ub825\uc11c\ub97c \uac1c\ubc1c\ud558\uace0 \uc788\uc73c\uba70 \uc774\ud6c4\uc5d0\ub294 \uc2a4\ud504\ub9c1 \ud504\ub808\uc784\uc6cc\ud06c\uc5d0 \ub300\ud574 \uacf5\ubd80\ud560 \uacc4\ud68d\uc785\ub2c8\ub2e4.         \uc800\ub294 \uc0ac\ub78c\ub4e4\uacfc \uc5b4\uc6b8\ub9ac\ub294 \uac83\uc744 \uc88b\uc544\ud558\uace0 \ucde8\ubbf8\ub85c \ubc30\ub4dc\ubbfc\ud134 \ub808\uc2a8\uacfc \ub3d9\ud638\ud68c\ub97c \ud558\ub294 \ub4f1 \ud65c\ub3d9\uc801\uc778 \uc0ac\ub78c\uc774\uba70        \ubc30\uc6b0\ub294 \uac83\uc5d0 \uc695\uc2ec\uc774 \ub9ce\uace0 \ud55c\ubc88 \ubd99\uc7a1\uc73c\uba74 \ubbf8\uce5c\ub4ef\uc774 \ud558\ub294 \ud3b8\uc785\ub2c8\ub2e4.        \ub9ce\uc774 \ubc30\uc6b0\uace0 \uc131\uc7a5\ud560 \uc218 \uc788\ub294 \uae30\ud68c\uac00 \uc788\uc5c8\uc73c\uba74 \uc88b\uaca0\uc2b5\ub2c8\ub2e4."},skills:{subject:"Skills",contents:[{title:"Front-end",content:["HTML","CSS","javaScrpit","React"]},{title:"Back-end",content:["C++","PHP","Python","Node.js","Django","Spring"]},{title:"ETC",content:["Git","mySQL","MongoDB"]}]},projects:{subject:"Projects",contents:[{left_title:"2021.9 ~ 2021.9",left_add:"https:/asdadasd.com",right_title:"\uae30\uc220 \uc774\ub825\uc11c",right_subtitle:"Github Page \uc774\ub825\uc11c",content:[{main:"\uc6f9 \ud504\ub860\ud2b8\uc5d4\ub4dc \ud504\ub808\uc784\uc6cc\ud06c\uc778 \ub9ac\uc5d1\ud2b8\ub97c \uacf5\ubd80\ud558\uba70 \uc2e4\uc2b5\uc73c\ub85c \ub9cc\ub4e0 \uc774\ub825\uc11c",sub:[]},{main:"\uc804\uccb4\ub97c Wrapper, Left, Right 3\ubd80\ubd84\uc73c\ub85c \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub098\ub204\uc5b4 \uc7ac\uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \uad6c\ud604",sub:[]},{main:"\ub3d9\uc801\uc778 \ud504\ub85c\ud544 \ubc84\ud2bc\uacfc \uc774\ubbf8\uc9c0 \ubaa8\ub2ec \uad6c\ud604",sub:["asdfasfsadf","\u3141\u3134\u3147\u313b\u3134\u3147\u313b\u3134\u3147\u3139","\u3141\u3141\u3134\u3147\u3134\u3141\u3147\u3141\u3141\u3141"]}],keywords:["React","HTML","CSS","JS"],folder:"./resume",images:[],pdfs:[]},{left_title:"2021.07 ~ 2021.08",left_add:"https:/asdadasd.com",right_title:"\ud558\uc6b0\uc2a4 \ub9e4\ub274\uc5bc",right_subtitle:"\uc219\ubc15 \uc608\uc57d \ud398\uc774\uc9c0 \uc194\ub8e8\uc158 \ud504\ub85c\uc81d\ud2b8",content:[{main:"\uace0\uac1d\uc774 \uc219\ubc15\uc744 \uc608\uc57d\ud558\uba74 URl\uc744 \ud1b5\ud574 \uace0\uac1d\uc774 \uc608\uc57d\uc815\ubcf4\ub97c \uc54c \uc218 \uc788\ub3c4\ub85d \ud568",sub:[]},{main:"html, css, javascript\ub85c \ud074\ub77c\uc774\uc5b8\ud2b8, Django + MongoDB \uc11c\ubc84 \uad6c\ud604",sub:[]},{main:"\uae30\ubcf8\uc801\uc778 CRUD \ubc0f \ubc18\uc751\ud615 \uc6f9\uc571\uc73c\ub85c \uad6c\ud604",sub:[]}],keywords:["Django","MongoDB","HTML","CSS","JS"],folder:"./house-manual",images:["1","2","3","4","5"],pdfs:[]},{left_title:"2020.03 ~ 2020.12",left_add:"https:/asdadasd.com",right_title:"\uad11\ud559 \uc74c\uc545 \uc778\uc2dd \uae30\ubc18 \uc790\ub3d9 \ud3b8\uace1 \uc2dc\uc2a4\ud15c",right_subtitle:"\ucea1\uc2a4\ud1a4\ub514\uc790\uc7781, 2 \uad50\uacfc\ubaa9 \uc5f0\uacc4 \uc878\uc5c5\ud504\ub85c\uc81d\ud2b8",content:[{main:"\ube44\uc804\ubb38\uac00\ub4e4\ub3c4 \uc545\ubcf4\ub97c \ub370\uc774\ud130\ud654\ud558\uc5ec \uc27d\uac8c \ud3b8\uc9d1\ud558\uace0 \uc74c\uc545 \ud30c\uc77c\ub85c \ucd9c\ub825\ud560 \uc218 \uc788\ub294 \uc545\ubcf4 \uc778\uc2dd \uae30\ubc18 \ud3b8\uace1 \uc7a5\uce58\ub97c \uc81c\uacf5\ud558\uace0\uc790 \ud568",sub:[]},{main:"\uc0ac\uc6a9\uc790\ub294 \ud3b8\uace1\ud558\uace0\uc790 \ud558\ub294 \uc74c\uc545\uc758 \uc545\ubcf4\ub97c \uc785\ub825\ud558\uace0 \ud3b8\uace1\ub41c \uc74c\uc545 \ud30c\uc77c\uc744 \uc81c\uacf5 \ubc1b\uc74c",sub:[]},{main:"\ud06c\uac8c \uad11\ud559 \uc74c\uc545 \uc778\uc2dd \ubaa8\ub4c8\uacfc \uc790\ub3d9 \ud3b8\uace1 \ubaa8\ub4c8\ub85c \uad6c\uc131",sub:[]},{main:"\uad11\ud559 \uc74c\uc545 \uc778\uc2dd \ubaa8\ub4c8\uc5d0 OpenCV \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud558\uc600\uc73c\uba70, \uc18d\ub3c4\ub97c \uc704\ud574 jni + ndk\ub97c \uc0ac\uc6a9\ud568",sub:[]},{main:"\ud074\ub77c\uc774\uc5b8\ud2b8\ub294 \uc548\ub4dc\ub85c\uc774\ub4dc \uc560\ud50c\ub9ac\ucf00\uc774\uc158, \uc11c\ubc84\ub294 \ud30c\uc774\uc36c\uc73c\ub85c \uad6c\ud604",sub:[]},{main:"\uc545\ubcf4\ub97c \uc778\uc2dd\ud558\ub294 \uacfc\uc815\uc740 30\uc5ec \uac1c\uac00 \ub118\ub294 \uc545\ubcf4\uc758 \uad6c\uc131\uc694\uc18c\ub4e4\uc744 \uc778\uc2dd\ud558\uace0 \ubd84\ub958\ud574\uc57c\ud568",sub:[]},{main:"\ubcf8 \ud504\ub85c\uc81d\ud2b8\ub97c \ud1b5\ud574 \uc791\uac8c \ub098\ub9c8 \ucef4\ud4e8\ud130\ube44\uc804, \uba38\uc2e0 \ub7ec\ub2dd \ub4f1 \uc778\uacf5\uc9c0\ub2a5 \ubd84\uc57c\uc758 \ud559\uc2b5 \uacc4\uae30\uac00 \ub428",sub:[]}],keywords:["C++","JAVA","Python","Android","OpenCV","TensorFlow"],folder:"./senior-project",images:["1","2"],pdfs:[]},{left_title:"2019.09 ~ 2019.12",left_add:"https:/asdadasd.com",right_title:"PC \uacac\uc801 \uad00\ub9ac \uc6f9\uc0ac\uc774\ud2b8",right_subtitle:"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc124\uacc4 \uad50\uacfc\ubaa9 \uc5f0\uacc4 \ud504\ub85c\uc81d\ud2b8",content:[{main:"PC\ubd80\ud488\uc5d0 \ub300\ud55c \uc9c0\uc2dd \uc5c6\uc774 \uc870\ub9bd\ud615 PC\ub97c \uad6c\ub9e4\ud560 \uc218 \uc788\ub294 PC\uacac\uc801 \ubc0f \uacbd\ub9e4 \uc0ac\uc774\ud2b8",sub:[]},{main:"\ub85c\uadf8\uc778, \ub85c\uadf8\uc544\uc6c3, \ud68c\uc6d0\uac00\uc785, \uc5ed\uacbd\ub9e4/\uc785\ucc30, \ud398\uc774\uc9d5, \uad00\ub9ac\uc790 \ud398\uc774\uc9c0 \ub4f1\uc758 \uae30\ub2a5 \uc81c\uacf5",sub:[]},{main:"HTML + CSS + JavaScirpt\ub85c \ud074\ub77c\uc774\uc5b8\ud2b8, Apache + PHP\ub85c \ub85c\uceec\uc11c\ubc84 \uad6c\ud604",sub:[]}],keywords:["PHP","MySQL","HTML","CSS","JavaScript"],folder:"./PC-auction",images:["1","2"],pdfs:[]},{left_title:"2019.09 ~ 2019.12",left_add:"",right_title:"\uc628\ub77c\uc778 \ub3c4\uc11c \uad6c\ub9e4 \uc2dc\uc2a4\ud15c",right_subtitle:"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc124\uacc4 \uad50\uacfc\ubaa9 \uc5f0\uacc4 \ud504\ub85c\uc81d\ud2b8",content:[{main:"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc2e4\uc2b5\uc744 \uc704\ud574 \uc54c\ub77c\ub518, YES24, \ub9ac\ub514\ubd81\uc2a4\uc640 \uac19\uc740 \uc628\ub77c\uc778 \ub3c4\uc11c \uad6c\ub9e4 \uc0ac\uc774\ud2b8\ub97c \uad6c\ud604",sub:[]},{main:"\ub85c\uadf8\uc778/\ub85c\uadf8\uc544\uc6c3, \ud68c\uc6d0\uac00\uc785, \ub9c8\uc774\ud398\uc774\uc9c0(\uc2e0\uc6a9\uce74\ub4dc, \uc7a5\ubc14\uad6c\ub2c8, \uc8fc\ubb38\ub0b4\uc5ed, \uc8fc\ubb38\uc0c1\uc138), \uc8fc\ubb38, \ub9ac\ubdf0 \ub4f1\uc758 \uae30\ub2a5 \uc81c\uacf5",sub:[]},{main:"HTML + CSS + JavaScirpt\ub85c \ud074\ub77c\uc774\uc5b8\ud2b8, Apache + PHP\ub85c \ub85c\uceec\uc11c\ubc84 \uad6c\ud604",sub:[]},{main:"MySQL\ub85c \uac1d\uccb4\uc758 \uc18d\uc131\uc774\ub098 \uad00\uacc4\uc5d0 \ub300\ud574 \uc9c1\uc811 \uc124\uacc4",sub:[]}],keywords:["PHP","MySQL","HTML","CSS","JS"],folder:"./book-manage",images:["1","2"],pdfs:[]},{left_title:"2019.09 ~ 2019.12",left_add:"https:/asdadasd.com",right_title:"\ud50c\ub9ac\ub9c8\ucf13 \ud1b5\ud569 \uad00\ub9ac \uc2dc\uc2a4\ud15c",right_subtitle:"\uc18c\ud504\ud2b8\uc6e8\uc5b4\ubd84\uc11d\uc124\uacc4\uacfc\ubaa9 \uad50\uacfc\ubaa9 \uc5f0\uacc4 \ud504\ub85c\uc81d\ud2b8",content:[{main:"\ud574\ub2f9 \ud504\ub85c\uc81d\ud2b8\ub294 \uac1c\ubc1c \uc9c1\uc804 \ub2e8\uacc4\uae4c\uc9c0\uc758 \uc124\uacc4\ub97c \ubaa9\ud45c\ub85c \ub450\uace0 \ud504\ub85c\uc81d\ud2b8 \uc815\uc758\uc11c, \ub2e4\uc591\ud55c \ubb38\uc11c\ub97c \uc791\uc131 \ud574\ubcf8 \ud504\ub85c\uc81d\ud2b8",sub:[]},{main:"\ud50c\ub9ac\ub9c8\ucf13\uc758 \uc140\ub7ec\uc640 \uc8fc\ucd5c\uc790, \ucc38\uac00\uc790\uc5d0\uac8c \uae30\uc874\uc758 \ubd88\ud3b8\ud55c \uc694\uc18c\ub4e4\uc744 \ud574\uc18c\ud560 \uc218 \uc788\ub3c4\ub85d \ud558\ub294 \ud50c\ub9ac\ub9c8\ucf13 \ud1b5\ud569 \uad00\ub9ac \uc2dc\uc2a4\ud15c",sub:[]},{main:"\uc124\uacc4 \ubb38\uc11c\ub294 \ud504\ub85c\uc81d\ud2b8 \uc815\uc758\uc11c, \uc694\uad6c\uc0ac\ud56d\uae30\uc220\uc11c, \ud074\ub798\uc2a4\ubd84\uc11d\uc11c, UI\uc124\uacc4\uc11c, \ub370\uc774\ud2b8\ubca0\uc774\uc2a4\uc124\uacc4\uc11c \ub4f1\uc744 \uc791\uc131",sub:[]},{main:"\ud504\ub85c\uc81d\ud2b8 \uc124\uacc4\ubc29\ubc95\uacfc StarUML\uacfc \uac19\uc740 \uc124\uacc4\ud234\uc5d0 \ub300\ud574 \ubc30\uc6b8\uc218 \uc788\uc5c8\uc74c",sub:[]}],keywords:["StarUML"],folder:"./fleamarket",images:["1","2"],pdfs:["1","2"]},{left_title:"2019.09 ~ 2019.12",left_add:"",right_title:"TAPC2",right_subtitle:"\uc18c\ud504\ud2b8\uc6e8\uc5b4 \uac1c\ubc1c \uc2e4\uc2b54 \uad50\uacfc\ubaa9 \uc5f0\uacc4 \ud504\ub85c\uc81d\ud2b8",content:[{main:"\uace0\uc9c0\ub300\uc5d0 \uc704\uce58\ud55c \ud559\uad50\uc758 \uc9c0\ub9ac\uc801 \ud2b9\uc131\uc5d0 \ud0dd\uc2dc\ud569\uc2b9\uad00\ub828 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc124\uacc4, \uac1c\ubc1c",sub:[]},{main:"\ud074\ub77c\uc774\uc5b8\ud2b8\ub294 \uc548\ub4dc\ub85c\uc774\ub4dc \uc560\ud50c\ub9ac\ucf00\uc774\uc158, \uc11c\ubc84\ub294 Node.js, DB\ub294 MySQL\ub85c \uad6c\ud604",sub:[]},{main:"\ub85c\uadf8\uc778/\ub85c\uadf8\uc544\uc6c3, \ud68c\uc6d0\uac00\uc785 \ub4f1\uc744 \uc704\ud55c http \uc11c\ubc84\uc640 \ub9e4\uce6d/\ucc44\ud305\uc744 \uc704\ud55c \uc18c\ucf13 \uc11c\ubc84\ub97c \uad6c\ud604",sub:[]},{main:"\uc548\ub4dc\ub85c\uc774\ub4dc \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uacfc \uc6f9\uc11c\ubc84\ub97c \ucc98\uc74c \uc5f0\ub3d9\ud55c \ud504\ub85c\uc81d\ud2b8",sub:[]}],keywords:["Node.js","MySQL","JAVA","JavaScrpit","Andriod"],folder:"./tapc2",images:["1","2"],pdfs:[]},{left_title:"2018.03 ~ 2018.06",left_add:"",right_title:"\ubc30\ub4dc\ubbfc\ud134 \uc1fc\ud551\ubab0",right_subtitle:"\uc18c\ud504\ud2b8\uc6e8\uc5b4\uac1c\ubc1c\uc2e4\uc2b52 \uad50\uacfc\ubaa9 \uc5f0\uacc4 \ud504\ub85c\uc81d\ud2b8",content:[{main:"\ubc30\ub4dc\ubbfc\ud134 \uad00\ub828 \uc1fc\ud551\ubab0 \uc0ac\uc774\ud2b8",sub:[]},{main:"html + css + javascript\uc744 \uae30\ubc18\uc73c\ub85c \uc11c\ubc84\uac00 \uc5c6\ub294 \uc815\uc801 \ud398\uc774\uc9c0",sub:[]}],keywords:["HTML","CSS","JS"],folder:"./badmintorn-market",images:["1","2"],pdfs:[]}]},educations:{subject:"Education",contents:[{left_title:"2014.12 ~ 2015.11",left_add:"",right_title:"\ub3d9\uc11c\ub300\ud559\uad50 \uc878\uc5c5",right_subtitle:"\ucef4\ud4e8\ud130\uacf5\ud559\uacfc / \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc804\uacf5 / AI\uacf5\ud559 \ubd80\uc804\uacf5 / \ud559\uc810 : 4.17",content:[],keywords:[],folder:"",images:[],pdfs:[]},{left_title:"2014.12 ~ 2015.11",left_add:"",right_title:"\ubd80\uc0b0\uc6a9\uc778\uace0 \uc878\uc5c5",right_subtitle:"\ubd80\uc0b0\uad11\uc5ed\uc2dc \ub3d9\ub798\uad6c \uba85\uc7a5\ub3d9",content:[],keywords:[],folder:"",images:[],pdfs:[]}]},awards:{subject:"Awards",contents:[{left_title:"2020.12.17",left_add:"",right_title:"2020\ub144\ub3c4 \uc628\ud0dd\ud2b8\uae30\ubc18 \ub3d9\uc11c\uc778 FAIR - \ucd5c\uc6b0\uc218\uc0c1",right_subtitle:"",content:[],keywords:[],folder:"",images:[],pdfs:[]},{left_title:"2020.11.28",left_add:"",right_title:"\ud55c\uad6d\uc9c0\ub2a5\uc2dc\uc2a4\ud15c\ud559\ud68c 30\uc8fc\ub144 \uae30\ub150 2020 \ucd94\uacc4\ud559\uc220\ub300\ud68c - \uc6b0\uc218\ub17c\ubb38\uc0c1",right_subtitle:"",content:[],keywords:[],folder:"",images:[],pdfs:[]},{left_title:"2020.08.31",left_add:"",right_title:"\ub3d9\uc11c\uc778 AI\ud574\ucee4\ud1a4 \uacbd\uc9c4\ub300\ud68c - \uc7a5\ub824\uc0c1",right_subtitle:"",content:[],keywords:[],folder:"",images:[],pdfs:[]},{left_title:"2020.06.08",left_add:"",right_title:"2020\ub144\ub3c4 \ub3d9\uc11c AI\xb7SW \uc544\uc774\ub514\uc5b4 \uacbd\uc9c4\ub300\ud68c - \uc7a5\ub824\uc0c1",right_subtitle:"",content:[],keywords:[],folder:"",images:[],pdfs:[]}]},reserchs:{subject:"Reserch",contents:[{left_title:"2020.01.18",left_add:"",right_title:"Journal of The Korean Instiute of Inteligent System",right_subtitle:"Optical Music Recognition-based Auto Arrangement System",content:[{main:"\uad6c\ubd84 : Journal",sub:["\ud754\ud788 \uc74c\uc545\uc744 \ucd94\uc0c1\uc801\uc774\uace0 \ubd88\ud655\uc2e4\uc131\uc774 \ub192\uc740 \uc608\uc220 \ubd84\uc57c\ub77c \uc0dd\uac01\ud558\uc9c0\ub9cc, \uc5c4\uc5f0\ud788 \ud654\uc131\ud559\uacfc \ub300\uc704\ubc95 \ub4f1 \uc815\ub9bd\ub41c \uc774\ub860\uc774 \uc874\uc7ac\ud55c\ub2e4. \ucef4\ud4e8\ud130\uc640 \uc778\uacf5\uc9c0\ub2a5\uc774 \ub4f1\uc7a5\ud568\uc5d0 \ub530\ub77c \uc774\ub7f0 \uc774\ub860\ub4e4\uc744 \ubc14\ud0d5\uc73c\ub85c \uc74c\uc545\uc744 \uc791\uace1\ud558\uac70\ub098 \ud3b8\uace1\ud558\ub824\ub294 \uc2dc\ub3c4\uac00 \uc0dd\uaca8\ub0ac\uace0, \ud604\uc7ac\uae4c\uc9c0\ub3c4 \ub9ce\uc740 \uc5f0\uad6c\uac00 \uc9c4\ud589\ub418\uace0 \uc788\ub2e4. \ubcf8 \ub17c\ubb38\uc5d0\uc11c\ub294 \uc545\ubcf4 \uc774\ubbf8\uc9c0\ub97c \uc785\ub825\ubc1b\uc544 \uc54c\uace0\ub9ac\uc998\uc744 \ud1b5\ud574 \uc790\ub3d9 \ud3b8\uace1\ud55c \uc74c\uc545 \ud30c\uc77c\uc744 \ucd9c\ub825\ud560 \uc218 \uc788\ub3c4\ub85d \ud558\ub294 \uc545\ubcf4 \uc778\uc2dd \uae30\ubc18 \uc790\ub3d9 \ud3b8\uace1 \uc2dc\uc2a4\ud15c\uc744 \uc81c\uc548\ud558\uc600\ub2e4. \uad11\ud559 \uc74c\uc545 \uc778\uc2dd\uc744 \ud1b5\ud574 \uc545\ubcf4\ub97c \ucef4\ud4e8\ud130\uac00 \uc774\ud574\ud558\uae30 \uc26c\uc6b4 \ub370\uc774\ud130 \ud615\ud0dc\ub85c \ubcc0\ud658\ud558\uc600\uace0, \uba5c\ub85c\ub514\ub97c \uae30\ubc18\uc73c\ub85c \ucf54\ub4dc\ub97c \uc0dd\uc131\ud568\uc73c\ub85c\uc368 \ud3b8\uace1 \uc2dc\uc2a4\ud15c\uc758 \uc77c\ubd80\ubd84\uc744 \uad6c\ud604\ud558\uc600\ub2e4. \ucf54\ub4dc\ub97c \uc0dd\uc131\ud558\ub294 \uc791\uc5c5\uc5d0\ub294 \uc2e4\uc81c \uc545\uace1\uc758 \uba5c\ub85c\ub514\uc640 \ucf54\ub4dc\ub97c \uae30\ubc18\uc73c\ub85c \uc2ec\uce35 \uc2e0\uacbd\ub9dd\uc744 \uc0ac\uc6a9\ud558\uc600\ub2e4. \ucf54\ub4dc\ub97c \uc0dd\uc131\ud558\ub294 \ub370\uc5d0\ub294 \ub2e4\uc591\ud55c \uc120\ud0dd\uc9c0\uac00 \uc788\uc74c\uc5d0\ub3c4 \ubd88\uad6c, \uc2e4\uc81c \uc545\uace1\uacfc\uc758 \ube44\uad50\uc5d0\uc11c \uc57d 55%\uc758 \uc77c\uce58\uc728\uc744 \ubcf4\uc600\ub2e4."]}],keywords:[],folder:"",images:[],pdfs:[]},{left_title:"2020.11.28",left_add:"",right_title:"\ucef4\ud4e8\ud130\uacf5\ud559\ubd80\uc878\uc5c5\ub17c\ubb38\uc9d1",right_subtitle:"\uad11\ud559 \uc74c\uc545 \uc778\uc2dd \uae30\ubc18 \ud3b8\uace1 \uc2dc\uc2a4\ud15c",content:[{main:"\uad6c\ubd84 : Thesis",sub:["4\ucc28 \uc0b0\uc5c5\ud601\uba85\uc774 \uc9c4\ud589\ub418\uba70 \uc778\uacf5\uc9c0\ub2a5\uc774 \ub2e4\uc591\ud55c \ubd84\uc57c\uc5d0\uc11c \ud65c\uc6a9\ub418\uace0 \uc788\ub2e4. \uc74c\uc545 \ubd84\uc57c \ub610\ud55c \uc778\uacf5\uc9c0\ub2a5\uacfc\uc758 \uc735\ud569\uc5d0 \ub9ce\uc740 \uc5f0\uad6c\uac00 \uc9c4\ud589\ub418\uace0 \uc788\ub2e4. \ud55c\ud3b8 \uc0ac\ud68c \uc804\ubc18\uc801\uc73c\ub85c \uc74c\uc545\uc5d0 \ub300\ud55c \uc218\uc694\ub294 \uafb8\uc900\ud788 \ub298\uace0 \uc788\uc73c\uba70, \uadf8\uc911\uc5d0\uc11c\ub3c4 \ud3b8\uace1\uc5d0 \ub300\ud55c \uad00\uc2ec\uc774 \ub298\uace0 \uc788\ub2e4. \ub2e4\ub9cc \ud3b8\uace1 \uc791\uc5c5\uc740 \uc9c4\uc785\uc7a5\ubcbd\uc774 \ub192\uc544, \uc804\uacf5\uc790\uac00 \uc544\ub2cc \uc77c\ubc18\uc778\ub4e4\uc774 \uc2dc\ub3c4\ud558\uae30\uc5d0\ub294 \uc5b4\ub824\uc6c0\uc774 \uc788\ub2e4. \uc774\uc5d0 \ub530\ub77c \ubcf8 \ub17c\ubb38\uc5d0\uc11c\ub294 \uad11\ud559 \uc74c\uc545 \uc778\uc2dd \uae30\ubc18 \uc790\ub3d9 \ud3b8\uace1 \uc2dc\uc2a4\ud15c\uc744 \uc81c\uc548\ud55c\ub2e4. \ud3b8\uace1\uc744 \uc704\ud55c \ub370\uc774\ud130 \ud655\ubcf4\ub97c \uc704\ud574 \uad11\ud559 \uc74c\uc545 \uc778\uc2dd\uc744 \uc0ac\uc6a9\ud558\uc600\uace0 \ud3b8\uace1 \uacfc\uc815 \uc911, \ud654\uc131 \uc0dd\uc131\uc758 \uacbd\uc6b0 \uba5c\ub85c\ub514\uc5d0 \uae30\ubc18\ud55c \uc2e0\uacbd\ub9dd \uae30\ubc95\uc744 \uc0ac\uc6a9\ud558\uc600\ub2e4. \uc81c\uc548\ud55c \uad11\ud559 \uc74c\uc545 \uc778\uc2dd \uae30\ubc95\uc740 \ubcf5\uc7a1\ub3c4 \u2018\ud558\u2019\uc5d0 \ud574\ub2f9\ud558\ub294 \uc545\ubcf4 20\uc7a5\uc5d0 \ub300\ud574 95%\uc758 \uc778\uc2dd\ub960\uc744 \ubcf4\uc600\uc73c\uba70 \uc2e0\uacbd\ub9dd\uc744 \ud1b5\ud574 \uc0dd\uc131\ub41c \ud654\uc131\ub4e4\uc740 \ud654\uc131\ud559\uc5d0 \uadfc\uac70\ud558\uc5ec \uc2e4\uc81c \ud3b8\uace1\uc5d0 \uc801\uc6a9\ud560 \uc218 \uc788\uc74c\uc744 \ud655\uc778\ud558\uc600\ub2e4."]}],keywords:[],folder:"",images:[],pdfs:[]},{left_title:"2020.11.28",left_add:"",right_title:"\ud55c\uad6d\uc9c0\ub2a5\uc2dc\uc2a4\ud15c\ud559\ud68c 30\uc8fc\ub144 \uae30\ub150 2020 \ucd94\uacc4\ud559\uc220\ub300\ud68c",right_subtitle:"\uad11\ud559 \uc74c\uc545 \uc778\uc2dd \uae30\ubc18 \ud3b8\uace1 \uc2dc\uc2a4\ud15c",content:[{main:"\uad6c\ubd84 : Conference",sub:["\uc778\uacf5\uc9c0\ub2a5\uc5d0 \ub300\ud55c \uad00\uc2ec\uacfc \ud65c\uc6a9\uc774 \uc99d\uac00\ud568\uc5d0 \ub530\ub77c 4\ucc28 \uc0b0\uc5c5\ud601\uba85\uc758 \uc8fc\uc694 \uae30\uc220\ub85c \uac01\uad11\ubc1b\uace0 \uc788\ub2e4.                     \uc74c\uc545\ubd84\uc57c\uc5d0\uc11c\ub3c4 \uc778\uacf5\uc9c0\ub2a5\uacfc\uc758 \uc735\ud569\uc5d0 \ub9ce\uc740 \uc5f0\uad6c\uac00 \ud65c\ubc1c\ud788 \uc9c4\ud589\ub418\uace0 \uc788\ub2e4. \ubcf8 \ub17c\ubb38\uc5d0\uc11c\ub294 \uad11\ud559\uc74c\uc545\uc778\uc2dd \uae30\ubc18 \uc790\ub3d9 \ud3b8\uace1 \uc2dc\uc2a4\ud15c\uc744 \uc81c\uc548\ud55c\ub2e4.                     \ud3b8\uace1\uc5d0\ub294 \ud15c\ud3ec \uc870\uc808, \uc870\uc62e\uae40, \ud654\uc131 \uc0dd\uc131\uacfc \uac19\uc740 \ub2e4\uc591\ud55c \uacfc\uc815\uc774 \ud3ec\ud568\ub41c\ub2e4. \ud3b8\uace1\uc744 \uc704\ud55c \ub370\uc774\ud130 \ud655\ubcf4\ub97c \uc704\ud574 \uad11\ud559 \uc74c\uc545 \uc778\uc2dd\uc744 \uc0ac\uc6a9\ud558\uc600\uace0 \uba5c\ub85c\ub514\uc5d0                     \uc5b4\uc6b8\ub9ac\ub294 \ud654\uc131\uc744 \uc0dd\uc131\ud558\uae30 \uc704\ud574 \uc2e0\uacbd\ub9dd \uae30\ubc95\uc744 \uc0ac\uc6a9\ud558\uc600\ub2e4. \uc0dd\uc131\ub41c \ud654\uc131\ub4e4\uc740 \ud654\uc131\ud559\uc5d0 \uadfc\uac70\ud558\uc5ec \uc2e4\uc81c \ud3b8\uace1\uc5d0 \uc801\uc6a9\uc2dc\ud0ac \uc218 \uc788\uc74c\uc744 \ud655\uc778\ud558\uc600\ub2e4."]}],keywords:[],folder:"",images:[],pdfs:[]},{left_title:"2020.11.10",left_add:"",right_title:"\ubc1c\uba85 \ud2b9\ud5c8 \ucd9c\uc6d0",right_subtitle:"\uc545\ubcf4 \uc778\uc2dd \uae30\ubc18 \ud3b8\uace1 \uc7a5\uce58 \ubc0f \uc545\ubcf4 \uc778\uc2dd \uae30\ubc18 \ud3b8\uace1 \ubc29\ubc95",content:[{main:"\uad6c\ubd84 : Conference",sub:["\ubcf8 \ubc1c\uba85\uc740 \uc545\ubcf4 \uc778\uc2dd \uae30\ubc18 \ud3b8\uace1 \uc7a5\uce58 \ubc0f \ubc29\ubc95\uc5d0 \uad00\ud55c \uac83\uc73c\ub85c, \ub354 \uc0c1\uc138\ud558\uac8c\ub294 \uad11\ud559 \uc778\uc2dd \uc54c\uace0\ub9ac\uc998\uc744 \uc774\uc6a9\ud558\uc5ec \uc545\ubcf4\ub85c\ubd80\ud130 \ub370\uc774\ud130\ub97c \ucd94\ucd9c\ud558\uace0,                     \ucd94\ucd9c\ub41c \ub370\uc774\ud130\ub97c \ud3b8\uc9d1\ud568\uc73c\ub85c\uc368 \uc0ac\uc6a9\uc790\uac00 \uc27d\uac8c \uc545\ubcf4\ub97c \ud3b8\uace1\ud558\ub3c4\ub85d \uc81c\uacf5\ud558\uba70, \ud3b8\uace1\ub41c \uc74c\uc545\uc744 \ud30c\uc77c\ub85c \uc81c\uacf5\ubc1b\ub3c4\ub85d \ud558\ub294 \uc545\ubcf4 \uc778\uc2dd \uae30\ubc18 \ud3b8\uace1 \uc7a5\uce58 \ubc0f \ubc29\ubc95\uc5d0 \uad00\ud55c \uac83\uc774\ub2e4."]}],keywords:[],folder:"",images:[],pdfs:[]},{left_title:"2020.08.31",left_add:"",right_title:"ICCT2020 SCOPUS",right_subtitle:"Computer-Vision-based Advanced Optical Music Recognition System",content:[{main:"\uad6c\ubd84 : SCOPUS",sub:["Computer vision is an artificial intelligence technology that studies techniques for extracting information from images. Several studies have been performed to identify and edit music scores using computer vision. This study proposes a system to identify musical notes and print arranged music. Music is produced by general rules; consequently, the components of music have specific patterns. There are four approaches in pattern recognition that can be used classify images using patterns. Our proposed method of identifying music sheets is as follows. Several pretreatment processes (image binary, noise and staff elimination, image resizing) are performed to aid the identification. The components of the music sheet are identified by statistical pattern recognition. Applying an artificial intelligence model (Markov chain) to extracted music data aids in arranging the data. From applying the pattern recognition technique, a recognition rate of 100% was shown for music sheets of low complexity. The components included in the recognition rate are signs, notes, and beats. However, there was a low recognition rate for some music sheet and can be addressed by adding a classification to the navigation process. To increase the recognition rate of the music sheet with intermediate complexity, it is necessary to refine the pre-processing process and pattern recognition algorithm. We will also apply neural network-based models to the arrangement process."]}],keywords:[],folder:"",images:[],pdfs:[]},{left_title:"2020.07.09",left_add:"",right_title:"The 10th International Conference on Convergence Technology in 2020",right_subtitle:"Advanced Optical Music Recognition System for Automatic Arrangement",content:[{main:"\uad6c\ubd84 : Conference",sub:["In general, the demand for music is increasing among them; the demand and interest for remake songs are increasing. However, the skill related to the arrangement is difficult to learn, and its quantity has been recognized only as an expert area. On the other hand, AI (artificial intelligence) is active in many fields, among which music-related AI is also in the spotlight. In this paper, we proposed the contents of the development of a system that makes it easy for the general public who is not a music major to arrange music using computer vision and machine learning technology easily. Initially, a template matching algorithm was applied to score recognition. However, there was a problem with a low recognition rate. In order to solve the problem, we proposed advanced optical music recognition with high versatility."]}],keywords:[],folder:"",images:[],pdfs:[]}]},certificates:{subject:"certificate",contents:[{left_title:"2020.07.09",left_add:"",right_title:"\uc815\ubcf4\ucc98\ub9ac\uae30\uc0ac",right_subtitle:"\ud55c\uad6d\uc0b0\uc5c5\uc778\ub825\uacf5\ub2e8",content:[],keywords:[],folder:"",images:[],pdfs:[]},{left_title:"2020.07.09",left_add:"",right_title:"\ub9ac\ub205\uc2a4 \ub9c8\uc2a4\ud130 2\uae09",right_subtitle:"\ub300\ud55c\uc0c1\uacf5\ud68c\uc758\uc18c \uc790\uaca9\ud321\uac00\uc0ac\uc5c5\ub2e8",content:[],keywords:[],folder:"",images:[],pdfs:[]},{left_title:"2020.07.09",left_add:"",right_title:"\uc6cc\ub4dc\ud504\ub85c\uc138\uc2a4 1\uae09",right_subtitle:"\ub300\ud55c\uc0c1\uacf5\ud68c\uc758\uc18c \uc790\uaca9\ud321\uac00\uc0ac\uc5c5\ub2e8",content:[],keywords:[],folder:"",images:[],pdfs:[]},{left_title:"2020.07.09",left_add:"",right_title:"\ucef4\ud4e8\ud130\ud65c\uc6a9\ub2a5\ub825 1\uae09",right_subtitle:"\ub300\ud55c\uc0c1\uacf5\ud68c\uc758\uc18c \uc790\uaca9\ud321\uac00\uc0ac\uc5c5\ub2e8",content:[],keywords:[],folder:"",images:[],pdfs:[]}]}},H=function(t){Object(d.a)(i,t);var e=Object(h.a)(i);function i(t){var s;return Object(c.a)(this,i),(s=e.call(this,t)).state=T,s}return Object(l.a)(i,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:g.a.resume,children:[Object(b.jsx)(j,{data:this.state.profiles}),Object(b.jsx)(y,{data:this.state.intro}),Object(b.jsx)(A,{data:this.state.skills}),Object(b.jsx)(C,{data:this.state.projects}),Object(b.jsx)(C,{data:this.state.reserchs}),Object(b.jsx)(C,{data:this.state.educations}),Object(b.jsx)(C,{data:this.state.awards}),Object(b.jsx)(C,{data:this.state.certificates}),Object(b.jsx)(P,{})]})}}]),i}(s.Component),L=function(t){Object(d.a)(i,t);var e=Object(h.a)(i);function i(){return Object(c.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var t="/projects/".concat(this.props.match.params.folder,"/").concat(this.props.match.params.pdf,".pdf");return Object(b.jsx)("div",{children:Object(b.jsx)("embed",{src:t,type:"application/pdf"})})}}]),i}(s.Component),J=function(t){Object(d.a)(i,t);var e=Object(h.a)(i);function i(){return Object(c.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(u.a,{exact:!0,path:"/",component:H}),Object(b.jsx)(u.a,{exact:!0,path:"/pdfviewer/:folder/:pdf",component:L})]})}}]),i}(s.Component);i(38);r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(o.a,{children:Object(b.jsx)(J,{})})}),document.getElementById("root"))},6:function(t,e,i){t.exports={border_top:"styles_border_top__KB5eX",border_bot:"styles_border_bot__2gZ40",resume:"styles_resume__2WVEA",Main:"styles_Main__Ngvek",Wrapper:"styles_Wrapper__2QZj_",left:"styles_left__3eS8T",right:"styles_right__2MhDf",ImageView:"styles_ImageView__3uqJX",keyword:"styles_keyword__G9BAa",details:"styles_details__3UxxE"}}},[[39,1,2]]]);
//# sourceMappingURL=main.845edc56.chunk.js.map