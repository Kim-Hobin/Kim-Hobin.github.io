(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{1:function(t,e,i){t.exports={border_top:"styles_border_top__KB5eX",border_bot:"styles_border_bot__2gZ40",width_left:"styles_width_left__1vGG1",width_right:"styles_width_right__30Qp3",ImageView:"styles_ImageView__3uqJX",Wrapper:"styles_Wrapper__2QZj_",Skill:"styles_Skill__27lXr",Category:"styles_Category__MspOD",contact:"styles_contact__2Xgx1",SpinButton:"styles_SpinButton__1H5bY",spin:"styles_spin__2M8gb",Modal:"styles_Modal__186pf",Arrow:"styles_Arrow__1UH3G",Gallary:"styles_Gallary__2iXFA",CurrentImage:"styles_CurrentImage__3ibOh"}},13:function(t,e,i){},15:function(t,e,i){"use strict";i.r(e);var s=i(2),n=i.n(s),a=i(8),r=i.n(a),c=(i(13),i(3)),l=i(4),o=i(6),h=i(5),d=i(1),u=i.n(d),b=i(0),j=function(t){Object(o.a)(i,t);var e=Object(h.a)(i);function i(){return Object(c.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var t=this.props.data,e=t.contents.map((function(t){return Object(b.jsx)("a",{className:u.a.SpinButton,href:t.link,children:Object(b.jsx)("i",{class:t.style})})}));return Object(b.jsx)("header",{children:Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{src:"profile.jpg"}),Object(b.jsx)("h1",{children:t.name}),Object(b.jsx)("h3",{children:t.intro}),Object(b.jsx)("div",{className:u.a.contact,children:e})]})})}}]),i}(s.Component),p=function(t){Object(o.a)(i,t);var e=Object(h.a)(i);function i(){return Object(c.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var t=this.props.data;return Object(b.jsxs)("section",{className:u.a.Intro,children:[Object(b.jsx)("h2",{children:t.subject}),Object(b.jsx)("div",{className:u.a.border_top}),Object(b.jsx)("div",{className:u.a.border_bot}),Object(b.jsx)("p",{children:t.content})]})}}]),i}(s.Component),g=function(t){Object(o.a)(i,t);var e=Object(h.a)(i);function i(){return Object(c.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(b.jsxs)("span",{className:u.a.width_left,children:[Object(b.jsx)("h5",{children:this.props.subtitle}),Object(b.jsx)("p",{children:this.props.add})]})}}]),i}(s.Component),f=function(t){Object(o.a)(i,t);var e=Object(h.a)(i);function i(){return Object(c.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var t=this.props.content.map((function(t){return Object(b.jsx)("li",{children:t})}));return Object(b.jsxs)("span",{className:u.a.width_right,children:[Object(b.jsx)("h5",{children:this.props.title}),Object(b.jsx)("p",{children:this.props.subtitle}),t]})}}]),i}(s.Component),m=function(t){Object(o.a)(i,t);var e=Object(h.a)(i);function i(){return Object(c.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var t=this.props.data,e=t.contents.map((function(t){return Object(b.jsxs)("div",{className:u.a.Wrapper,children:[Object(b.jsx)(g,{title:t.left_title,subtitle:t.left_subtitle,add:t.left_add}),Object(b.jsx)(f,{title:t.right_title,subtitle:t.right_subtitle,content:t.right})]})}));return Object(b.jsxs)("section",{className:u.a.basic,children:[Object(b.jsx)("h2",{children:t.subject}),Object(b.jsx)("div",{className:u.a.border_top}),Object(b.jsx)("div",{className:u.a.border_bot}),e]})}}]),i}(s.Component),_=function(t){Object(o.a)(i,t);var e=Object(h.a)(i);function i(){return Object(c.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:u.a.width_left,children:[Object(b.jsx)("h5",{children:this.props.subtitle}),Object(b.jsx)("p",{children:this.props.add})]})}}]),i}(s.Component),O=function(t){Object(o.a)(i,t);var e=Object(h.a)(i);function i(t){var s;return Object(c.a)(this,i),(s=e.call(this,t)).changeImage=function(t){s.setState({index:t})},s.state={index:s.props.index},s}return Object(l.a)(i,[{key:"render",value:function(){var t=this,e=this.props.images[this.state.index],i=this.props.images.length,s=this.props.images.map((function(e,i){if(i===t.state.index)var s=u.a.CurrentImage;return Object(b.jsx)("button",{className:s,onClick:function(){return t.changeImage(i)},children:Object(b.jsx)("img",{className:u.a.ImageView,src:e})})}));return Object(b.jsx)("div",{className:u.a.Modal,onClick:this.props.close,children:Object(b.jsxs)("section",{onClick:function(t){return t.stopPropagation()},children:[" ",Object(b.jsxs)("header",{children:[Object(b.jsx)("h5",{children:this.props.title}),Object(b.jsx)("p",{children:this.props.subtitle})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:u.a.Arrow,children:Object(b.jsx)("i",{class:"fas fa-arrow-alt-circle-left",onClick:function(){return t.changeImage((t.state.index-1+i)%i)}})}),Object(b.jsx)("div",{className:u.a.Gallary,children:Object(b.jsx)("img",{src:e})}),Object(b.jsx)("div",{className:u.a.Arrow,children:Object(b.jsx)("i",{class:"fas fa-arrow-alt-circle-right",onClick:function(){return t.changeImage((t.state.index+1+i)%i)}})})]}),Object(b.jsx)("footer",{children:s})]})})}}]),i}(s.Component),x=function(t){Object(o.a)(i,t);var e=Object(h.a)(i);function i(){var t;return Object(c.a)(this,i),(t=e.call(this)).test=function(e){t.setState({imgIndex:e,modalOn:!t.state.modalOn})},t.state={imgIndex:null,modalOn:!1},t}return Object(l.a)(i,[{key:"render",value:function(){var t=this,e=this.props.content.map((function(t){return Object(b.jsx)("li",{children:t})})),i=this.props.images.map((function(e,i){return Object(b.jsx)("img",{className:u.a.ImageView,src:e,onClick:function(){return t.test(i)}})}));return Object(b.jsxs)("div",{className:u.a.width_right,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h5",{children:this.props.title}),Object(b.jsx)("p",{children:this.props.subtitle}),e]}),Object(b.jsx)("div",{children:i}),this.state.modalOn&&Object(b.jsx)(O,{index:this.state.imgIndex,close:function(){return t.test(null)},images:this.props.images,title:this.props.title,subtitle:this.props.subtitle})]})}}]),i}(s.Component),v=function(t){Object(o.a)(i,t);var e=Object(h.a)(i);function i(){return Object(c.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var t=this.props.data,e=t.contents.map((function(t){return Object(b.jsxs)("div",{className:u.a.Wrapper,children:[Object(b.jsx)(_,{title:t.left_title,subtitle:t.left_subtitle,add:t.left_add}),Object(b.jsx)(x,{title:t.right_title,subtitle:t.right_subtitle,content:t.content,images:t.images})]})}));return Object(b.jsxs)("section",{className:u.a.Project,children:[Object(b.jsx)("h2",{children:t.subject}),Object(b.jsx)("div",{className:u.a.border_top}),Object(b.jsx)("div",{className:u.a.border_bot}),e]})}}]),i}(s.Component),y=function(t){Object(o.a)(i,t);var e=Object(h.a)(i);function i(){return Object(c.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var t=this.props.content.map((function(t){return Object(b.jsx)("span",{children:t})}));return Object(b.jsx)("div",{children:t})}}]),i}(s.Component),C=function(t){Object(o.a)(i,t);var e=Object(h.a)(i);function i(){return Object(c.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var t=this.props.data,e=t.contents.map((function(t){return Object(b.jsxs)("div",{className:u.a.Category,children:[Object(b.jsx)("h5",{children:t.title}),Object(b.jsx)(y,{content:t.content})]})}));return Object(b.jsxs)("section",{className:u.a.Skill,children:[Object(b.jsx)("h2",{children:t.subject}),Object(b.jsx)("div",{className:u.a.border_top}),Object(b.jsx)("div",{className:u.a.border_bot}),e]})}}]),i}(s.Component),w=function(t){Object(o.a)(i,t);var e=Object(h.a)(i);function i(){return Object(c.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(b.jsx)("footer",{children:Object(b.jsx)("div",{})})}}]),i}(s.Component),k={profiles:{subject:"Profiles",name:"\uae40\ud638\ube48",intro:"Web Frontend Enginier",contents:[{title:"\uc804\ud654\ubc88\ud638",link:"010 - 5534 - 0573",style:"fas fa-phone-volume"},{title:"email",link:"isb0573@naver.com",style:"fas fa-at"},{title:"git",link:"https://github.com/Kim-Hobin",style:"fab fa-github"},{title:"blog",link:"https://isb0573.tistory.com/",style:"fas fa-blog"}]},intro:{subject:"About Me",content:"\uc548\ub155\ud558\uc138\uc694 \uc6f9 \uac1c\ubc1c\uc744 \uafc8\uafb8\ub294 \ud559\uc0dd\uc785\ub2c8\ub2e4. \ud604\uc7ac\ub294 \uc2a4\uc2a4\ub85c \ubb38\uc81c\ud574\uacb0\ub2a5\ub825\uacfc \uad6c\ud604\ub825\uc774 \ub9ce\uc774 \ubd80\uc871\ud558\ub2e4\uace0 \ub290\uaef4 \ubc31\uc900\uc774\ub77c\ub294 \uc54c\uace0\ub9ac\uc998 \ubb38\uc81c \ud478\ub294 \uc0ac\uc774\ud2b8\ub97c \ud1b5\ud574 \uc54c\uace0\ub9ac\uc998\uacfc \ub9ac\uc5d1\ud2b8 \uacf5\ubd80\ub97c \ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.        \uc774\ud6c4\uc5d0\ub294 \uc878\uc5c5\uc791\ud488\uacfc \ubc31\uc900 \ud480\uc774\ubc95 \ub4f1\uc5d0 \ub300\ud55c \ube14\ub85c\uadf8 \ud65c\ub3d9\uacfc \uc2a4\ud504\ub9c1 \uacf5\ubd80\uc5d0 \ub300\ud574 \uacc4\ud68d\uc911\uc785\ub2c8\ub2e4."},skills:{subject:"Skills",contents:[{title:"Front-and",content:["HTML/CSS","javaScrpit","React"]},{title:"back-end",content:["C","C++","PHP","Android","Java","Node.js"]},{title:"DataBase",content:["mySQL","MongoDB"]}]},projects:{subject:"Projects",contents:[{left_title:"",left_subtitle:"2021.9 ~ 2021.9",left_add:"https:/asdadasd.com",right_title:"\uae30\uc220 \uc774\ub825\uc11c",right_subtitle:"",content:["\uc6f9 \ud504\ub860\ud2b8\uc5d4\ub4dc \ud504\ub808\uc784\uc6cc\ud06c\uc778 \ub9ac\uc5d1\ud2b8\ub97c \uacf5\ubd80\ud558\uba70 \uc2e4\uc2b5\uc73c\ub85c \ub9cc\ub4e0 \uc774\ub825\uc11c","\uc804\uccb4\ub97c Wrapper, Left, Right 3\ubd80\ubd84\uc73c\ub85c \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub098\ub204\uc5b4 \uc7ac\uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \uad6c\ud604","\ub3d9\uc801\uc778 \ud504\ub85c\ud544 \ubc84\ud2bc\uacfc \uc774\ubbf8\uc9c0 \ubaa8\ub2ec \uad6c\ud604"],images:["logo512.png","test.png"]},{left_title:"",left_subtitle:"2021.07 ~ 2021.08",left_add:"https:/asdadasd.com",right_title:"\ud558\uc6b0\uc2a4 \uba54\ub274\uc5bc",right_subtitle:"\uc219\ubc15 \uc608\uc57d \ud398\uc774\uc9c0 \uc194\ub8e8\uc158 \ud504\ub85c\uc81d\ud2b8",content:["\uace0\uac1d\uc774 \uc219\ubc15\uc744 \uc608\uc57d\ud558\uba74 URl\uc744 \ud1b5\ud574 \uace0\uac1d\uc774 \uc608\uc57d\uc815\ubcf4\ub97c \uc54c \uc218 \uc788\ub3c4\ub85d \ud568","html, css, javascript\ub85c \ud074\ub77c\uc774\uc5b8\ud2b8, Django + MongoDB \uc11c\ubc84 \uad6c\ud604","\uae30\ubcf8\uc801\uc778 CRUD \ubc0f \ubc18\uc751\ud615 \uc6f9\uc571\uc73c\ub85c \uad6c\ud604"],images:["logo512.png","test.png"]},{left_title:"",left_subtitle:"2020.03 ~ 2020.12",left_add:"https:/asdadasd.com",right_title:"\uad11\ud559\uc74c\uc545\uc778\uc2dd\uae30\ubc18 \uc790\ub3d9\ud3b8\uace1\uc2dc\uc2a4\ud15c",right_subtitle:"\ucea1\uc2a4\ud1a4\ub514\uc790\uc7781, 2 \uad50\uacfc\ubaa9 \uc5f0\uacc4 \uc878\uc5c5\ud504\ub85c\uc81d\ud2b8",content:["\ube44\uc804\ubb38\uac00\ub4e4\ub3c4 \uc545\ubcf4\ub97c \ub370\uc774\ud130\ud654\ud558\uc5ec \uc27d\uac8c \ud3b8\uc9d1\ud558\uace0 \uc74c\uc545 \ud30c\uc77c\ub85c                    \ucd9c\ub825\ud560 \uc218 \uc788\ub294 \uc545\ubcf4 \uc778\uc2dd \uae30\ubc18 \ud3b8\uace1 \uc7a5\uce58\ub97c \uc81c\uacf5\ud558\uace0\uc790 \ud568","\uc0ac\uc6a9\uc790\ub294 \ud3b8\uace1\ud558\uace0\uc790 \ud558\ub294 \uc74c\uc545\uc758 \uc545\ubcf4\ub97c \uc785\ub825\ud558\uace0 \ud3b8\uace1\ub41c \uc74c\uc545 \ud30c\uc77c\uc744 \uc81c\uacf5 \ubc1b\uc74c","\ud06c\uac8c \uad11\ud559 \uc74c\uc545 \uc778\uc2dd \ubaa8\ub4c8\uacfc \uc790\ub3d9 \ud3b8\uace1 \ubaa8\ub4c8\ub85c \uad6c\uc131","\uad11\ud559 \uc74c\uc545 \uc778\uc2dd \ubaa8\ub4c8\uc5d0 OpenCV \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud558\uc600\uc73c\uba70,                    \uc18d\ub3c4\ub97c \uc704\ud574 jni + ndk\ub97c \uc0ac\uc6a9\ud568","\ud074\ub77c\uc774\uc5b8\ud2b8\ub294 \uc548\ub4dc\ub85c\uc774\ub4dc \uc560\ud50c\ub9ac\ucf00\uc774\uc158, \uc11c\ubc84\ub294 \ud30c\uc774\uc36c\uc73c\ub85c \uad6c\ud604","\uc545\ubcf4\ub97c \uc778\uc2dd\ud558\ub294 \uacfc\uc815\uc740 30\uc5ec \uac1c\uac00 \ub118\ub294 \uc545\ubcf4\uc758 \uad6c\uc131\uc694\uc18c\ub4e4\uc744 \uc778\uc2dd\ud558\uace0 \ubd84\ub958\ud574\uc57c\ud568","\ubcf8 \ud504\ub85c\uc81d\ud2b8\ub97c \ud1b5\ud574 \uc791\uac8c \ub098\ub9c8 \ucef4\ud4e8\ud130\ube44\uc804, \uba38\uc2e0 \ub7ec\ub2dd \ub4f1 \uc778\uacf5\uc9c0\ub2a5 \ubd84\uc57c\uc758 \ud559\uc2b5 \uacc4\uae30\uac00 \ub428","\ub290\ub080\uc810 ---- "],images:["logo512.png","test.png"]},{left_title:"",left_subtitle:"2019.09 ~ 2019.12",left_add:"https:/asdadasd.com",right_title:"PC \uacac\uc801\uad00\ub9ac \uc6f9\uc0ac\uc774\ud2b8",right_subtitle:"\ub370\uc774\ud130\ubca0\uc774\uc2a4\uc124\uacc4 \uad50\uacfc\ubaa9 \uc5f0\uacc4 \ud504\ub85c\uc81d\ud2b8",content:["PC\ubd80\ud488\uc5d0 \ub300\ud55c \uc9c0\uc2dd \uc5c6\uc774 \uc870\ub9bd\ud615 PC\ub97c \uad6c\ub9e4\ud560 \uc218 \uc788\ub294 PC\uacac\uc801 \ubc0f \uacbd\ub9e4 \uc0ac\uc774\ud2b8","\ub85c\uadf8\uc778, \ub85c\uadf8\uc544\uc6c3, \ud68c\uc6d0\uac00\uc785, \uc5ed\uacbd\ub9e4/\uc785\ucc30, \ud398\uc774\uc9d5, \uad00\ub9ac\uc790 \ud398\uc774\uc9c0 \ub4f1\uc758 \uae30\ub2a5 \uc81c\uacf5","HTML + CSS + JavaScirpt\ub85c \ud074\ub77c\uc774\uc5b8\ud2b8, Apache + PHP\ub85c \ub85c\uceec\uc11c\ubc84 \uad6c\ud604"],images:["logo512.png","test.png"]},{left_title:"",left_subtitle:"2019.09 ~ 2019.12",left_add:"",right_title:"\ub3c4\uc11c \uad00\ub9ac\uc2dc\uc2a4\ud15c",right_subtitle:"\ub370\uc774\ud130\ubca0\uc774\uc2a4\uc124\uacc4 \uad50\uacfc\ubaa9 \uc5f0\uacc4 \ud504\ub85c\uc81d\ud2b8",content:["\ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc2e4\uc2b5\uc744 \uc704\ud574 \uc54c\ub77c\ub518, YES24, \ub9ac\ub514\ubd81\uc2a4\uc640 \uac19\uc740 \uc628\ub77c\uc778 \ub3c4\uc11c \uad6c\ub9e4 \uc0ac\uc774\ud2b8\ub97c \uad6c\ud604","\ub85c\uadf8\uc778/\ub85c\uadf8\uc544\uc6c3, \ud68c\uc6d0\uac00\uc785, \ub9c8\uc774\ud398\uc774\uc9c0(\uc2e0\uc6a9\uce74\ub4dc, \uc7a5\ubc14\uad6c\ub2c8, \uc8fc\ubb38\ub0b4\uc5ed, \uc8fc\ubb38\uc0c1\uc138), \uc8fc\ubb38, \ub9ac\ubdf0 \ub4f1\uc758 \uae30\ub2a5 \uc81c\uacf5","HTML + CSS + JavaScirpt\ub85c \ud074\ub77c\uc774\uc5b8\ud2b8, Apache + PHP\ub85c \ub85c\uceec\uc11c\ubc84 \uad6c\ud604","MySQL\ub85c \uac1d\uccb4\uc758 \uc18d\uc131\uc774\ub098 \uad00\uacc4\uc5d0 \ub300\ud574 \uc9c1\uc811 \uc124\uacc4"],images:["logo512.png","test.png"]},{left_title:"",left_subtitle:"2019.09 ~ 2019.12",left_add:"https:/asdadasd.com",right_title:"\ud50c\ub9ac\ub9c8\ucf13 \ud1b5\ud569\uad00\ub9ac\uc2dc\uc2a4\ud15c",right_subtitle:"\uc18c\ud504\ud2b8\uc6e8\uc5b4\ubd84\uc11d\uc124\uacc4\uacfc\ubaa9 \uad50\uacfc\ubaa9 \uc5f0\uacc4 \ud504\ub85c\uc81d\ud2b8",content:["\ud574\ub2f9 \ud504\ub85c\uc81d\ud2b8\ub294 \uac1c\ubc1c \uc9c1\uc804 \ub2e8\uacc4\uae4c\uc9c0\uc758 \uc124\uacc4\ub97c \ubaa9\ud45c\ub85c \ub450\uace0 \ud504\ub85c\uc81d\ud2b8 \uc815\uc758\uc11c,                     \ub2e4\uc591\ud55c \ubb38\uc11c\ub97c \uc791\uc131 \ud574\ubcf8 \ud504\ub85c\uc81d\ud2b8","\ud50c\ub9ac\ub9c8\ucf13\uc758 \uc140\ub7ec\uc640 \uc8fc\ucd5c\uc790, \ucc38\uac00\uc790\uc5d0\uac8c \uae30\uc874\uc758 \ubd88\ud3b8\ud55c \uc694\uc18c\ub4e4\uc744 \ud574\uc18c\ud560 \uc218 \uc788\ub3c4\ub85d                     \ud558\ub294 \ud50c\ub9ac\ub9c8\ucf13 \ud1b5\ud569 \uad00\ub9ac \uc2dc\uc2a4\ud15c","\uc124\uacc4 \ubb38\uc11c\ub294 \ud504\ub85c\uc81d\ud2b8 \uc815\uc758\uc11c, \uc694\uad6c\uc0ac\ud56d\uae30\uc220\uc11c, \ud074\ub798\uc2a4\ubd84\uc11d\uc11c, UI\uc124\uacc4\uc11c, \ub370\uc774\ud2b8\ubca0\uc774\uc2a4\uc124\uacc4\uc11c \ub4f1\uc744 \uc791\uc131","\ud504\ub85c\uc81d\ud2b8 \uc124\uacc4\ubc29\ubc95\uacfc StarUML\uacfc \uac19\uc740 \uc124\uacc4\ud234\uc5d0 \ub300\ud574 \ubc30\uc6b8\uc218 \uc788\uc5c8\uc74c"],images:["logo512.png","test.png"]},{left_title:"",left_subtitle:"2019.09 ~ 2019.12",left_add:"",right_title:"TAPC2",right_subtitle:"\uc18c\ud504\ud2b8\uc6e8\uc5b4\uac1c\ubc1c\uc2e4\uc2b54 \uad50\uacfc\ubaa9 \uc5f0\uacc4 \ud504\ub85c\uc81d\ud2b8",content:["\uace0\uc9c0\ub300\uc5d0 \uc704\uce58\ud55c \ud559\uad50\uc758 \uc9c0\ub9ac\uc801 \ud2b9\uc131\uc5d0 \ud0dd\uc2dc\ud569\uc2b9\uad00\ub828 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc124\uacc4, \uac1c\ubc1c","\ud074\ub77c\uc774\uc5b8\ud2b8\ub294 \uc548\ub4dc\ub85c\uc774\ub4dc \uc560\ud50c\ub9ac\ucf00\uc774\uc158, \uc11c\ubc84\ub294 Node.js, DB\ub294 MySQL\ub85c \uad6c\ud604","\ub85c\uadf8\uc778/\ub85c\uadf8\uc544\uc6c3, \ud68c\uc6d0\uac00\uc785 \ub4f1\uc744 \uc704\ud55c http \uc11c\ubc84\uc640 \ub9e4\uce6d/\ucc44\ud305\uc744 \uc704\ud55c \uc18c\ucf13 \uc11c\ubc84\ub97c \uad6c\ud604","\uc548\ub4dc\ub85c\uc774\ub4dc \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uacfc \uc6f9\uc11c\ubc84\ub97c \ucc98\uc74c \uc5f0\ub3d9\ud55c \ud504\ub85c\uc81d\ud2b8"],images:["logo512.png","test.png"]},{left_title:"",left_subtitle:"2018.03 ~ 2018.06",left_add:"",right_title:"\ubc30\ub4dc\ubbfc\ud134 \uc1fc\ud551\ubab0",right_subtitle:"\uc18c\ud504\ud2b8\uc6e8\uc5b4\uac1c\ubc1c\uc2e4\uc2b52 \uad50\uacfc\ubaa9 \uc5f0\uacc4 \ud504\ub85c\uc81d\ud2b8",content:["\ubc30\ub4dc\ubbfc\ud134 \uad00\ub828 \uc1fc\ud551\ubab0 \uc0ac\uc774\ud2b8","html + css + javascript\uc744 \uae30\ubc18\uc73c\ub85c \uc11c\ubc84\uac00 \uc5c6\ub294 \uc815\uc801 \ud398\uc774\uc9c0"],images:["test.png","test2.png","test3.png"]}]},educations:{subject:"Education",contents:[{id:1,left_title:"",left_subtitle:"2014.12 ~ 2015.11",right_title:"\ub3d9\uc11c\ub300\ud559\uad50 \uc878\uc5c5",right_subtitle:"\ucef4\ud4e8\ud130\uacf5\ud559\uacfc / \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc804\uacf5 / AI\uacf5\ud559 \ubd80\uc804\uacf5 / \ud559\uc810 : 4.17",right:[]},{id:2,left_title:"",left_subtitle:"2014.12 ~ 2015.11",left_add:"",right_title:"\ubd80\uc0b0\uc6a9\uc778\uace0 \uc878\uc5c5",right_subtitle:"\ubd80\uc0b0\uad11\uc5ed\uc2dc \ub3d9\ub798\uad6c \uba85\uc7a5\ub3d9",right:[]}]},awards:{subject:"Awards",contents:[{left_subtitle:"2020.12.17",right_title:"2020\ub144\ub3c4 \uc628\ud0dd\ud2b8\uae30\ubc18 \ub3d9\uc11c\uc778 FAIR - \ucd5c\uc6b0\uc218\uc0c1",right_subtitle:"\uad11\ud559 \uc74c\uc545 \uc778\uc2dd \uae30\ubc18 \ud3b8\uace1 \uc2dc\uc2a4\ud15c",right:[]},{left_subtitle:"2020.11.28",right_title:"\ud55c\uad6d\uc9c0\ub2a5\uc2dc\uc2a4\ud15c\ud559\ud68c 30\uc8fc\ub144 \uae30\ub150 2020 \ucd94\uacc4\ud559\uc220\ub300\ud68c - \uc6b0\uc218\ub17c\ubb38\uc0c1",right_subtitle:"\uad11\ud559 \uc74c\uc545 \uc778\uc2dd \uae30\ubc18 \ud3b8\uace1 \uc2dc\uc2a4\ud15c",right:[]},{left_subtitle:"2020.08.31",right_title:"\ub3d9\uc11c\uc778 AI\ud574\ucee4\ud1a4 \uacbd\uc9c4\ub300\ud68c - \uc7a5\ub824\uc0c1",right_subtitle:"\ucef4\ud4e8\ud130 \ube44\uc804\uc744 \uc774\uc6a9\ud55c \uc545\ubcf4 \uc778\uc2dd \uae30\ubc18 \ud3b8\uace1 \uc2dc\uc2a4\ud15c",right:[]},{left_subtitle:"2020.06.08",right_title:"2020\ub144\ub3c4 \ub3d9\uc11c AI\xb7SW \uc544\uc774\ub514\uc5b4 \uacbd\uc9c4\ub300\ud68c - \uc7a5\ub824\uc0c1",right_subtitle:"\uad11\ud559 \uc74c\uc545 \uc778\uc2dd\uc744 \uc774\uc6a9\ud55c \uc790\ub3d9 \ud3b8\uace1 \uc2dc\uc2a4\ud15c",right:[]}]},reserchs:{subject:"Reserch",contents:[{left_subtitle:"2020.01.18",right_title:"Journal of The Korean Instiute of Inteligent System",right_subtitle:"Optical Music Recognition-based Auto Arrangement System",right:["\uad6c\ubd84 : Journal","\ud754\ud788 \uc74c\uc545\uc744 \ucd94\uc0c1\uc801\uc774\uace0 \ubd88\ud655\uc2e4\uc131\uc774 \ub192\uc740 \uc608\uc220 \ubd84\uc57c\ub77c \uc0dd\uac01\ud558\uc9c0\ub9cc, \uc5c4\uc5f0\ud788 \ud654\uc131\ud559\uacfc \ub300\uc704\ubc95 \ub4f1 \uc815\ub9bd\ub41c                     \uc774\ub860\uc774 \uc874\uc7ac\ud55c\ub2e4. \ucef4\ud4e8\ud130\uc640 \uc778\uacf5\uc9c0\ub2a5\uc774 \ub4f1\uc7a5\ud568\uc5d0 \ub530\ub77c \uc774\ub7f0 \uc774\ub860\ub4e4\uc744 \ubc14\ud0d5\uc73c\ub85c \uc74c\uc545\uc744 \uc791\uace1\ud558\uac70\ub098 \ud3b8\uace1\ud558\ub824\ub294 \uc2dc\ub3c4\uac00 \uc0dd\uaca8\ub0ac\uace0, \ud604\uc7ac\uae4c\uc9c0\ub3c4 \ub9ce\uc740 \uc5f0\uad6c\uac00 \uc9c4\ud589\ub418\uace0 \uc788\ub2e4. \ubcf8 \ub17c\ubb38\uc5d0\uc11c\ub294 \uc545\ubcf4 \uc774\ubbf8\uc9c0\ub97c \uc785\ub825\ubc1b\uc544 \uc54c\uace0\ub9ac\uc998\uc744 \ud1b5\ud574 \uc790\ub3d9 \ud3b8\uace1\ud55c \uc74c\uc545 \ud30c\uc77c\uc744 \ucd9c\ub825\ud560 \uc218 \uc788\ub3c4\ub85d \ud558\ub294 \uc545\ubcf4 \uc778\uc2dd \uae30\ubc18 \uc790\ub3d9 \ud3b8\uace1 \uc2dc\uc2a4\ud15c\uc744 \uc81c\uc548\ud558\uc600\ub2e4. \uad11\ud559 \uc74c\uc545 \uc778\uc2dd\uc744 \ud1b5\ud574 \uc545\ubcf4\ub97c \ucef4\ud4e8\ud130\uac00 \uc774\ud574\ud558\uae30 \uc26c\uc6b4 \ub370\uc774\ud130 \ud615\ud0dc\ub85c \ubcc0\ud658\ud558\uc600\uace0, \uba5c\ub85c\ub514\ub97c \uae30\ubc18\uc73c\ub85c \ucf54\ub4dc\ub97c \uc0dd\uc131\ud568\uc73c\ub85c\uc368 \ud3b8\uace1 \uc2dc\uc2a4\ud15c\uc758 \uc77c\ubd80\ubd84\uc744 \uad6c\ud604\ud558\uc600\ub2e4. \ucf54\ub4dc\ub97c \uc0dd\uc131\ud558\ub294 \uc791\uc5c5\uc5d0\ub294 \uc2e4\uc81c \uc545\uace1\uc758 \uba5c\ub85c\ub514\uc640 \ucf54\ub4dc\ub97c \uae30\ubc18\uc73c\ub85c \uc2ec\uce35 \uc2e0\uacbd\ub9dd\uc744 \uc0ac\uc6a9\ud558\uc600\ub2e4. \ucf54\ub4dc\ub97c \uc0dd\uc131\ud558\ub294 \ub370\uc5d0\ub294 \ub2e4\uc591\ud55c \uc120\ud0dd\uc9c0\uac00 \uc788\uc74c\uc5d0\ub3c4 \ubd88\uad6c, \uc2e4\uc81c \uc545\uace1\uacfc\uc758 \ube44\uad50\uc5d0\uc11c \uc57d 55%\uc758 \uc77c\uce58\uc728\uc744 \ubcf4\uc600\ub2e4."]},{left_subtitle:"2020.11.28",right_title:"\ucef4\ud4e8\ud130\uacf5\ud559\ubd80\uc878\uc5c5\ub17c\ubb38\uc9d1",right_subtitle:"\uad11\ud559 \uc74c\uc545 \uc778\uc2dd \uae30\ubc18 \ud3b8\uace1 \uc2dc\uc2a4\ud15c",right:["\uad6c\ubd84 : Thesis","4\ucc28 \uc0b0\uc5c5\ud601\uba85\uc774 \uc9c4\ud589\ub418\uba70 \uc778\uacf5\uc9c0\ub2a5\uc774 \ub2e4\uc591\ud55c \ubd84\uc57c\uc5d0\uc11c \ud65c\uc6a9\ub418\uace0 \uc788\ub2e4. \uc74c\uc545 \ubd84\uc57c \ub610\ud55c \uc778\uacf5\uc9c0\ub2a5\uacfc\uc758 \uc735\ud569\uc5d0 \ub9ce\uc740 \uc5f0\uad6c\uac00 \uc9c4\ud589\ub418\uace0 \uc788\ub2e4.                    \ud55c\ud3b8 \uc0ac\ud68c \uc804\ubc18\uc801\uc73c\ub85c \uc74c\uc545\uc5d0 \ub300\ud55c \uc218\uc694\ub294 \uafb8\uc900\ud788 \ub298\uace0 \uc788\uc73c\uba70, \uadf8\uc911\uc5d0\uc11c\ub3c4 \ud3b8\uace1\uc5d0 \ub300\ud55c \uad00\uc2ec\uc774 \ub298\uace0 \uc788\ub2e4. \ub2e4\ub9cc \ud3b8\uace1 \uc791\uc5c5\uc740 \uc9c4\uc785\uc7a5\ubcbd\uc774 \ub192\uc544, \uc804\uacf5\uc790\uac00 \uc544\ub2cc \uc77c\ubc18\uc778\ub4e4\uc774 \uc2dc\ub3c4\ud558\uae30\uc5d0\ub294 \uc5b4\ub824\uc6c0\uc774 \uc788\ub2e4. \uc774\uc5d0 \ub530\ub77c \ubcf8 \ub17c\ubb38\uc5d0\uc11c\ub294 \uad11\ud559 \uc74c\uc545 \uc778\uc2dd \uae30\ubc18 \uc790\ub3d9 \ud3b8\uace1 \uc2dc\uc2a4\ud15c\uc744 \uc81c\uc548\ud55c\ub2e4. \ud3b8\uace1\uc744 \uc704\ud55c \ub370\uc774\ud130 \ud655\ubcf4\ub97c \uc704\ud574 \uad11\ud559 \uc74c\uc545 \uc778\uc2dd\uc744 \uc0ac\uc6a9\ud558\uc600\uace0 \ud3b8\uace1 \uacfc\uc815 \uc911, \ud654\uc131 \uc0dd\uc131\uc758 \uacbd\uc6b0 \uba5c\ub85c\ub514\uc5d0 \uae30\ubc18\ud55c \uc2e0\uacbd\ub9dd \uae30\ubc95\uc744 \uc0ac\uc6a9\ud558\uc600\ub2e4. \uc81c\uc548\ud55c \uad11\ud559 \uc74c\uc545 \uc778\uc2dd \uae30\ubc95\uc740 \ubcf5\uc7a1\ub3c4 \u2018\ud558\u2019\uc5d0 \ud574\ub2f9\ud558\ub294 \uc545\ubcf4 20\uc7a5\uc5d0 \ub300\ud574 95%\uc758 \uc778\uc2dd\ub960\uc744 \ubcf4\uc600\uc73c\uba70 \uc2e0\uacbd\ub9dd\uc744 \ud1b5\ud574 \uc0dd\uc131\ub41c \ud654\uc131\ub4e4\uc740 \ud654\uc131\ud559\uc5d0 \uadfc\uac70\ud558\uc5ec \uc2e4\uc81c \ud3b8\uace1\uc5d0 \uc801\uc6a9\ud560 \uc218 \uc788\uc74c\uc744 \ud655\uc778\ud558\uc600\ub2e4."]},{left_subtitle:"2020.11.28",right_title:"\ud55c\uad6d\uc9c0\ub2a5\uc2dc\uc2a4\ud15c\ud559\ud68c 30\uc8fc\ub144 \uae30\ub150 2020 \ucd94\uacc4\ud559\uc220\ub300\ud68c",right_subtitle:"\uad11\ud559 \uc74c\uc545 \uc778\uc2dd \uae30\ubc18 \ud3b8\uace1 \uc2dc\uc2a4\ud15c",right:["\uad6c\ubd84 : Conference","\uc778\uacf5\uc9c0\ub2a5\uc5d0 \ub300\ud55c \uad00\uc2ec\uacfc \ud65c\uc6a9\uc774 \uc99d\uac00\ud568\uc5d0 \ub530\ub77c 4\ucc28 \uc0b0\uc5c5\ud601\uba85\uc758 \uc8fc\uc694 \uae30\uc220\ub85c \uac01\uad11\ubc1b\uace0 \uc788\ub2e4.                     \uc74c\uc545\ubd84\uc57c\uc5d0\uc11c\ub3c4 \uc778\uacf5\uc9c0\ub2a5\uacfc\uc758 \uc735\ud569\uc5d0 \ub9ce\uc740 \uc5f0\uad6c\uac00 \ud65c\ubc1c\ud788 \uc9c4\ud589\ub418\uace0 \uc788\ub2e4. \ubcf8 \ub17c\ubb38\uc5d0\uc11c\ub294 \uad11\ud559\uc74c\uc545\uc778\uc2dd \uae30\ubc18 \uc790\ub3d9 \ud3b8\uace1 \uc2dc\uc2a4\ud15c\uc744 \uc81c\uc548\ud55c\ub2e4.                     \ud3b8\uace1\uc5d0\ub294 \ud15c\ud3ec \uc870\uc808, \uc870\uc62e\uae40, \ud654\uc131 \uc0dd\uc131\uacfc \uac19\uc740 \ub2e4\uc591\ud55c \uacfc\uc815\uc774 \ud3ec\ud568\ub41c\ub2e4. \ud3b8\uace1\uc744 \uc704\ud55c \ub370\uc774\ud130 \ud655\ubcf4\ub97c \uc704\ud574 \uad11\ud559 \uc74c\uc545 \uc778\uc2dd\uc744 \uc0ac\uc6a9\ud558\uc600\uace0 \uba5c\ub85c\ub514\uc5d0                     \uc5b4\uc6b8\ub9ac\ub294 \ud654\uc131\uc744 \uc0dd\uc131\ud558\uae30 \uc704\ud574 \uc2e0\uacbd\ub9dd \uae30\ubc95\uc744 \uc0ac\uc6a9\ud558\uc600\ub2e4. \uc0dd\uc131\ub41c \ud654\uc131\ub4e4\uc740 \ud654\uc131\ud559\uc5d0 \uadfc\uac70\ud558\uc5ec \uc2e4\uc81c \ud3b8\uace1\uc5d0 \uc801\uc6a9\uc2dc\ud0ac \uc218 \uc788\uc74c\uc744 \ud655\uc778\ud558\uc600\ub2e4."]},{left_subtitle:"2020.11.10",right_title:"\ubc1c\uba85 \ud2b9\ud5c8 \ucd9c\uc6d0",right_subtitle:"\uc545\ubcf4 \uc778\uc2dd \uae30\ubc18 \ud3b8\uace1 \uc7a5\uce58 \ubc0f \uc545\ubcf4 \uc778\uc2dd \uae30\ubc18 \ud3b8\uace1 \ubc29\ubc95",right:["\uad6c\ubd84 : Conference","\ubcf8 \ubc1c\uba85\uc740 \uc545\ubcf4 \uc778\uc2dd \uae30\ubc18 \ud3b8\uace1 \uc7a5\uce58 \ubc0f \ubc29\ubc95\uc5d0 \uad00\ud55c \uac83\uc73c\ub85c, \ub354 \uc0c1\uc138\ud558\uac8c\ub294 \uad11\ud559 \uc778\uc2dd \uc54c\uace0\ub9ac\uc998\uc744 \uc774\uc6a9\ud558\uc5ec \uc545\ubcf4\ub85c\ubd80\ud130 \ub370\uc774\ud130\ub97c \ucd94\ucd9c\ud558\uace0,                     \ucd94\ucd9c\ub41c \ub370\uc774\ud130\ub97c \ud3b8\uc9d1\ud568\uc73c\ub85c\uc368 \uc0ac\uc6a9\uc790\uac00 \uc27d\uac8c \uc545\ubcf4\ub97c \ud3b8\uace1\ud558\ub3c4\ub85d \uc81c\uacf5\ud558\uba70, \ud3b8\uace1\ub41c \uc74c\uc545\uc744 \ud30c\uc77c\ub85c \uc81c\uacf5\ubc1b\ub3c4\ub85d \ud558\ub294 \uc545\ubcf4 \uc778\uc2dd \uae30\ubc18 \ud3b8\uace1 \uc7a5\uce58 \ubc0f \ubc29\ubc95\uc5d0 \uad00\ud55c \uac83\uc774\ub2e4."]},{left_subtitle:"2020.08.31",right_title:"ICCT202 SCOPUS",right_subtitle:"Computer-Vision-based Advanced Optical Music Recognition System",right:["\uad6c\ubd84 : SCOPUS","Computer vision is an artificial intelligence technology that studies techniques for extracting information from images. Several studies have been performed to identify and edit music scores using computer vision. This study proposes a system to identify musical notes and print arranged music. Music is produced by general rules; consequently, the components of music have specific patterns. There are four approaches in pattern recognition that can be used classify images using patterns. Our proposed method of identifying music sheets is as follows. Several pretreatment processes (image binary, noise and staff elimination, image resizing) are performed to aid the identification. The components of the music sheet are identified by statistical pattern recognition. Applying an artificial intelligence model (Markov chain) to extracted music data aids in arranging the data. From applying the pattern recognition technique, a recognition rate of 100% was shown for music sheets of low complexity. The components included in the recognition rate are signs, notes, and beats. However, there was a low recognition rate for some music sheet and can be addressed by adding a classification to the navigation process. To increase the recognition rate of the music sheet with intermediate complexity, it is necessary to refine the pre-processing process and pattern recognition algorithm. We will also apply neural network-based models to the arrangement process."]},{left_subtitle:"2020.07.09",right_title:"The 10th International Conference on Convergence Technology in 2020",right_subtitle:"Advanced Optical Music Recognition System for Automatic Arrangement",right:["\uad6c\ubd84 : Conference","In general, the demand for music is increasing among them; the demand and interest for remake songs are increasing. However, the skill related to the arrangement is difficult to learn, and its quantity has been recognized only as an expert area. On the other hand, AI (artificial intelligence) is active in many fields, among which music-related AI is also in the spotlight. In this paper, we proposed the contents of the development of a system that makes it easy for the general public who is not a music major to arrange music using computer vision and machine learning technology easily. Initially, a template matching algorithm was applied to score recognition. However, there was a problem with a low recognition rate. In order to solve the problem, we proposed advanced optical music recognition with high versatility."]}]},certificates:{subject:"certificate",contents:[{left_subtitle:"-",right_title:"\uc815\ubcf4\ucc98\ub9ac\uae30\uc0ac",right_subtitle:"\ud55c\uad6d\uc0b0\uc5c5\uc778\ub825\uacf5\ub2e8",right:[]},{left_subtitle:"-",right_title:"\ub9ac\ub205\uc2a4 \ub9c8\uc2a4\ud130 2\uae09",right_subtitle:"\ub300\ud55c\uc0c1\uacf5\ud68c\uc758\uc18c \uc790\uaca9\ud321\uac00\uc0ac\uc5c5\ub2e8",right:[]},{left_subtitle:"-",right_title:"\uc6cc\ub4dc\ud504\ub85c\uc138\uc2a4 1\uae09",right_subtitle:"\ub300\ud55c\uc0c1\uacf5\ud68c\uc758\uc18c \uc790\uaca9\ud321\uac00\uc0ac\uc5c5\ub2e8",right:[]},{left_subtitle:"-",right_title:"\ucef4\ud4e8\ud130\ud65c\uc6a9\ub2a5\ub825 1\uae09",right_subtitle:"\ub300\ud55c\uc0c1\uacf5\ud68c\uc758\uc18c \uc790\uaca9\ud321\uac00\uc0ac\uc5c5\ub2e8",right:[]}]}},S=function(t){Object(o.a)(i,t);var e=Object(h.a)(i);function i(t){var s;return Object(c.a)(this,i),(s=e.call(this,t)).state=k,s}return Object(l.a)(i,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(j,{data:this.state.profiles}),Object(b.jsx)(p,{data:this.state.intro}),Object(b.jsx)(C,{data:this.state.skills}),Object(b.jsx)(v,{data:this.state.projects}),Object(b.jsx)(m,{data:this.state.reserchs}),Object(b.jsx)(m,{data:this.state.educations}),Object(b.jsx)(m,{data:this.state.awards}),Object(b.jsx)(m,{data:this.state.certificates}),Object(b.jsx)(w,{})]})}}]),i}(s.Component),I=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,16)).then((function(e){var i=e.getCLS,s=e.getFID,n=e.getFCP,a=e.getLCP,r=e.getTTFB;i(t),s(t),n(t),a(t),r(t)}))};r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root")),I()}},[[15,1,2]]]);
//# sourceMappingURL=main.f6acfbef.chunk.js.map