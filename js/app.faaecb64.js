(function(t){function e(e){for(var n,a,c=e[0],r=e[1],u=e[2],d=0,m=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&m.push(o[a][0]),o[a]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);l&&l(e);while(m.length)m.shift()();return i.push.apply(i,u||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],n=!0,c=1;c<s.length;c++){var r=s[c];0!==o[r]&&(n=!1)}n&&(i.splice(e--,1),t=a(a.s=s[0]))}return t}var n={},o={app:0},i=[];function a(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=n,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(s,n,function(e){return t[e]}.bind(null,n));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/Study-Cat/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=r;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var n=s("85ec"),o=s.n(n);o.a},1458:function(t,e,s){var n={"./af":"8fdd","./af.js":"8fdd","./ar":"ecab","./ar-dz":"fdac","./ar-dz.js":"fdac","./ar-kw":"cc3b","./ar-kw.js":"cc3b","./ar-ly":"c6aa","./ar-ly.js":"c6aa","./ar-ma":"049c","./ar-ma.js":"049c","./ar-sa":"78db","./ar-sa.js":"78db","./ar-tn":"5e5e","./ar-tn.js":"5e5e","./ar.js":"ecab","./az":"ba7a","./az.js":"ba7a","./be":"8e16","./be.js":"8e16","./bg":"46bb","./bg.js":"46bb","./bm":"4d62","./bm.js":"4d62","./bn":"e21f","./bn.js":"e21f","./bo":"0e3a","./bo.js":"0e3a","./br":"1802","./br.js":"1802","./bs":"f4e4","./bs.js":"f4e4","./ca":"37f7","./ca.js":"37f7","./cs":"a222","./cs.js":"a222","./cv":"340a","./cv.js":"340a","./cy":"8fa4","./cy.js":"8fa4","./da":"f4c1","./da.js":"f4c1","./de":"5b7e","./de-at":"bb4d","./de-at.js":"bb4d","./de-ch":"2327","./de-ch.js":"2327","./de.js":"5b7e","./dv":"62ce","./dv.js":"62ce","./el":"1d02","./el.js":"1d02","./en-au":"881b","./en-au.js":"881b","./en-ca":"3938","./en-ca.js":"3938","./en-gb":"4158","./en-gb.js":"4158","./en-ie":"d76c","./en-ie.js":"d76c","./en-il":"c7c9","./en-il.js":"c7c9","./en-in":"c7d8","./en-in.js":"c7d8","./en-nz":"35d5","./en-nz.js":"35d5","./en-sg":"e7cd","./en-sg.js":"e7cd","./eo":"a53d","./eo.js":"a53d","./es":"f3dd","./es-do":"7800","./es-do.js":"7800","./es-us":"ad5d","./es-us.js":"ad5d","./es.js":"f3dd","./et":"b6ac","./et.js":"b6ac","./eu":"9690","./eu.js":"9690","./fa":"1f4b","./fa.js":"1f4b","./fi":"c64b","./fi.js":"c64b","./fil":"11bf","./fil.js":"11bf","./fo":"48db","./fo.js":"48db","./fr":"fc48","./fr-ca":"a5d8","./fr-ca.js":"a5d8","./fr-ch":"4b8a","./fr-ch.js":"4b8a","./fr.js":"fc48","./fy":"95e9","./fy.js":"95e9","./ga":"aacd","./ga.js":"aacd","./gd":"cede","./gd.js":"cede","./gl":"440c","./gl.js":"440c","./gom-deva":"8902","./gom-deva.js":"8902","./gom-latn":"26ad","./gom-latn.js":"26ad","./gu":"5038","./gu.js":"5038","./he":"0900","./he.js":"0900","./hi":"02da","./hi.js":"02da","./hr":"9dbe","./hr.js":"9dbe","./hu":"bbde","./hu.js":"bbde","./hy-am":"e67d","./hy-am.js":"e67d","./id":"a04d","./id.js":"a04d","./is":"fd22","./is.js":"fd22","./it":"66fe","./it-ch":"36cb","./it-ch.js":"36cb","./it.js":"66fe","./ja":"034b","./ja.js":"034b","./jv":"bcac","./jv.js":"bcac","./ka":"dd28","./ka.js":"dd28","./kk":"7f7b","./kk.js":"7f7b","./km":"c2f1","./km.js":"c2f1","./kn":"4b58","./kn.js":"4b58","./ko":"4ae9","./ko.js":"4ae9","./ku":"542b","./ku.js":"542b","./ky":"6699","./ky.js":"6699","./lb":"9a33","./lb.js":"9a33","./lo":"0c29","./lo.js":"0c29","./lt":"2ecc","./lt.js":"2ecc","./lv":"0473","./lv.js":"0473","./me":"04b7","./me.js":"04b7","./mi":"2cbb","./mi.js":"2cbb","./mk":"228b","./mk.js":"228b","./ml":"31da","./ml.js":"31da","./mn":"b54fc","./mn.js":"b54fc","./mr":"d2d2","./mr.js":"d2d2","./ms":"a423","./ms-my":"67c6","./ms-my.js":"67c6","./ms.js":"a423","./mt":"7385","./mt.js":"7385","./my":"1aeb","./my.js":"1aeb","./nb":"7c02","./nb.js":"7c02","./ne":"f7ee","./ne.js":"f7ee","./nl":"12b5","./nl-be":"bbb8","./nl-be.js":"bbb8","./nl.js":"12b5","./nn":"53cc","./nn.js":"53cc","./oc-lnc":"93bc","./oc-lnc.js":"93bc","./pa-in":"7075","./pa-in.js":"7075","./pl":"0d19","./pl.js":"0d19","./pt":"d454","./pt-br":"832e","./pt-br.js":"832e","./pt.js":"d454","./ro":"41e4","./ro.js":"41e4","./ru":"e1b9","./ru.js":"e1b9","./sd":"ffe3","./sd.js":"ffe3","./se":"9f76","./se.js":"9f76","./si":"0de2","./si.js":"0de2","./sk":"d3b8","./sk.js":"d3b8","./sl":"0030","./sl.js":"0030","./sq":"cb4a","./sq.js":"cb4a","./sr":"a880","./sr-cyrl":"a8a6","./sr-cyrl.js":"a8a6","./sr.js":"a880","./ss":"530b","./ss.js":"530b","./sv":"2f23","./sv.js":"2f23","./sw":"9db1","./sw.js":"9db1","./ta":"bb3e","./ta.js":"bb3e","./te":"e474","./te.js":"e474","./tet":"74ce","./tet.js":"74ce","./tg":"2040","./tg.js":"2040","./th":"c4ef","./th.js":"c4ef","./tk":"ce6b","./tk.js":"ce6b","./tl-ph":"f373","./tl-ph.js":"f373","./tlh":"fc39","./tlh.js":"fc39","./tr":"6c70","./tr.js":"6c70","./tzl":"dcde","./tzl.js":"dcde","./tzm":"e9b1","./tzm-latn":"9678","./tzm-latn.js":"9678","./tzm.js":"e9b1","./ug-cn":"0609","./ug-cn.js":"0609","./uk":"052f","./uk.js":"052f","./ur":"1a8f","./ur.js":"1a8f","./uz":"5c35","./uz-latn":"d422","./uz-latn.js":"d422","./uz.js":"5c35","./vi":"25e7","./vi.js":"25e7","./x-pseudo":"e6a4","./x-pseudo.js":"e6a4","./yo":"a465","./yo.js":"a465","./zh-cn":"0e91","./zh-cn.js":"0e91","./zh-hk":"bc52","./zh-hk.js":"bc52","./zh-mo":"859b","./zh-mo.js":"859b","./zh-tw":"9b15","./zh-tw.js":"9b15"};function o(t){var e=i(t);return s(e)}function i(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}o.keys=function(){return Object.keys(n)},o.resolve=i,t.exports=o,o.id="1458"},"14e0":function(t,e,s){"use strict";var n=s("c99d"),o=s.n(n);o.a},1517:function(t,e,s){t.exports=s.p+"img/work_pomodoro.3ba9ded7.png"},"4b90":function(t,e,s){t.exports=s.p+"img/little tomato.22bea164.png"},"507a":function(t,e,s){t.exports=s.p+"media/rest_done_sound.a9c44ade.mp3"},5547:function(t,e){t.exports="data:image/png;base64,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"},"567c":function(t,e,s){t.exports=s.p+"img/Group 26.6e663a87.png"},"56d7":function(t,e,s){"use strict";s.r(e);s("b0c0");var n=s("ade3"),o=s("5530"),i=(s("e260"),s("e6cf"),s("cca6"),s("a79d"),s("a026")),a=s("f23d"),c=s("5f5b"),r=s("b1e0"),u=s("8c4f"),l=(s("202f"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[t._m(0),s("div",{staticClass:"mx-auto d-flex justify-content-center mb-3",staticStyle:{"max-width":"300px"}},[s("router-link",{staticClass:"nav-btn",class:{"nav-btn-active":"/pomodoro"===t.$router.currentRoute.path},attrs:{to:"/pomodoro"}},[t._v("番茄鐘")]),s("router-link",{staticClass:"nav-btn",class:{"nav-btn-active":"/projects"===t.$router.currentRoute.path},attrs:{to:"/projects"}},[t._v("任務")]),s("router-link",{staticClass:"nav-btn",class:{"nav-btn-active":"/discuss"===t.$router.currentRoute.path},attrs:{to:"/discuss"}},[t._v("筆記/討論")])],1),s("a-divider"),s("router-view",{key:t.$route.fullPath,attrs:{projects:t.projects,user:t.user},on:{"update:projects":function(e){t.projects=e}}}),s("div",{staticClass:"d-flex flex-column fab-buttons"},[s("a-button",{staticClass:"fab-btn",attrs:{type:"circle",icon:"setting",size:"large"},on:{click:function(e){t.showSetting=!0}}})],1),s("a-modal",{attrs:{title:"設定",visible:t.showSetting},on:{ok:function(e){t.showSetting=!1},cancel:function(e){t.showSetting=!1}}},[s("p",[t._v("我的姓名")]),s("a-input",{model:{value:t.user.name,callback:function(e){t.$set(t.user,"name",e)},expression:"user.name"}})],1)],1)}),d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("img",{attrs:{src:s("567c"),width:"208",height:"61"}})])}],m=(s("d3b7"),s("ac1f"),s("3ca3"),s("841c"),s("9911"),s("ddb0"),s("2b3d"),s("96cf"),s("1da1")),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a-dropdown",{staticClass:"w-50 p-3"},[n("a",{staticClass:"ant-dropdown-link font-weight-bold"},[t._v(t._s(t.pomoSess.currentProject)),n("a-icon",{attrs:{type:"down"}})],1),n("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},t._l(Object.values(t.projects),(function(e){return n("a-menu-item",{key:e.name,staticClass:"font-weight-bold",attrs:{value:e.name},on:{click:t.switchProject}},[t._v(t._s(e.name))])})),1)],1),n("br"),n("p",[!0===t.isWorkCycle?n("img",{attrs:{src:s("1517"),width:"300",height:"300"}}):n("img",{attrs:{src:s("b504"),width:"300",height:"300"}})]),n("div",{staticClass:"tomato-container"},[n("div",{staticClass:"p1"},[n("span",[n("p",{staticClass:"font-weight-bold",staticStyle:{"font-size":"100px",display:"inline"},on:{click:function(e){return t.setPomoSess({workMinutes:.05,restMinutes:.05})}}},[t._v(t._s(Math.floor(t.currentTimerSecondsLeft/60)))]),n("p",{staticStyle:{"font-size":"32px",display:"inline"}},[t._v(t._s((t.currentTimerSecondsLeft%60).toString().padStart(2,"0")))])])]),n("p",{staticStyle:{opacity:"0"}},[t._v("haha")]),n("div",{staticClass:"p2 font-weight-bold"},[t._v(t._s(t.totalPomodoro))])]),n("a-space",{attrs:{align:"baseline"}},t._l(2*t.pomoSess.perCycle,(function(e){return n("span",{key:e,style:{opacity:e>t.pomoSess.cyclePassed+1?.1:1}},[n("img",e%2===1?{attrs:{src:s("5547"),width:"36"}}:{attrs:{src:s("b504"),width:"24"}})])})),0),n("p"),t.editingTime?n("a-space",[n("a-slider",{staticStyle:{width:"300px"},attrs:{max:60,min:1},model:{value:t.pomoSess.workMinutes,callback:function(e){t.$set(t.pomoSess,"workMinutes",e)},expression:"pomoSess.workMinutes"}})],1):n("a-space",[t.isWorkCycle?n("div",{staticClass:"buttonStart",on:{click:t.switchTimer}},[t._v(t._s(t.timerRunning?"放棄":"開始！"))]):n("a-space",[n("div",{staticClass:"buttonStart",on:{click:t.switchTimer}},[t._v(t._s(t.timerRunning?"放棄":"休息去！"))]),n("div",{staticClass:"buttonStart",on:{click:t.nextPomo}},[t._v("跳過休息")])])],1),!t.timerRunning&&t.isWorkCycle?n("div",[n("div",{staticClass:"button",on:{click:function(e){t.editingTime=!t.editingTime}}},[t._v(t._s(t.editingTime?"調整完成":"調整時間"))]),n("div",{staticClass:"button",on:{click:t.submitt}},[t._v("儲存")])]):t._e()],1)},p=[],b=(s("13d5"),s("07ac"),s("3d20")),j=s.n(b),h=s("2f62"),g=s("bc3a"),v=s.n(g),w={name:"pomodoro-timer",components:{},props:{user:Object},data:function(){return{now:Date.now(),editingTime:!1}},computed:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(h["d"])({pomoSess:function(t){return t.pomoSession},projects:function(t){return t.projects}})),Object(h["b"])({isWorkCycle:"isWorkCycle",intervalTimer:"currentTimerSecondsLeft"})),{},{currentTimerSecondsLeft:function(){var t=this.pomoSess.timerBegun,e=(this.now-t)/1e3;if(t){var s=Math.floor(this.intervalTimer-e);return console.log("Tick ",s),this.isTimeout(),s>=0?s:0}return Math.floor(this.intervalTimer)},totalPomodoro:function(){return Object.values(this.projects).reduce((function(t,e){return t+e.pomodoro}),0)},timerRunning:function(){return null!==this.pomoSess.timerBegun}}),methods:Object(o["a"])(Object(o["a"])({},Object(h["c"])({setPomoSess:"updatePomoSession",onPomoDone:"onPomoDone",nextPomo:"nextPomo"})),{},{isTimeout:function(){var t=-1,e=this.pomoSess.timerBegun;if(!e)return!1;var s=(this.now-e)/1e3,n=this.intervalTimer;t=Math.floor(n-s);var o=t<0;return o&&this.onPomoDone(),o},switchTimer:function(){var t=this;console.log("Switch Timer"),this.timerRunning?this.isWorkCycle?j.a.fire({title:"",icon:"warning",html:"確定要放棄嗎？半途而廢就搜集不到這顆蕃茄囉！",showCancelButton:!0,focusConfirm:!1,confirmButtonText:"放棄",cancelButtonText:"繼續專注"}).then((function(e){e.isConfirmed&&t.setPomoSess({timerBegun:null})})):t.setPomoSess({timerBegun:null}):this.setPomoSess({timerBegun:Date.now()})},switchProject:function(t){var e=t.key;this.setPomoSess({currentProject:e})},submitt:function(){var t={"entry.1990721791":"無名氏","entry.880743640":JSON.stringify(this.projects)};v.a.post("https://cors-anywhere.herokuapp.com/https://docs.google.com/forms/d/e/1FAIpQLSccetvzM7NpL1rEBqHUEikTrvo9jDcFRlrdICze5g8tQy7yUg/formResponse",t)}}),mounted:function(){this.timeLeft=60*this.workMinutes},created:function(){var t=this;setInterval((function(){t.now=Date.now()}),1e3)}},k=w,y=(s("c3c3"),s("2877")),A=Object(y["a"])(k,f,p,!1,null,null,null),S=A.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container d-flex justify-content-center"},[n("div",{staticClass:"w-100 mt-2",staticStyle:{"max-width":"400px"}},[t._l(Object.values(t.projects),(function(e){return n("div",{staticClass:"list-item d-flex align-items-center"},[n("div",{staticClass:"flex-grow-1"},[t.editingProjectName!==e.name?n("p",{staticClass:"m-0 pl-2 text-left"},[t._v(t._s(e.name))]):n("input",{directives:[{name:"model",rawName:"v-model",value:t.editingProjectNewName,expression:"editingProjectNewName"}],staticClass:"input1 w-100",domProps:{value:t.editingProjectNewName},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.commitEdit(e)},input:function(e){e.target.composing||(t.editingProjectNewName=e.target.value)}}})]),t.editingProjectName!==e.name?n("div",{staticClass:"ml-2"},[t.editingProject?n("div",[n("button",{staticClass:"font-weight-bold buttonEdit",on:{click:function(s){return t.setEditingProjects(e)}}},[t._v("修改")]),n("button",{staticClass:"font-weight-bold buttonDelete",on:{click:function(s){return t.deleteProject(e)}}},[t._v("刪除")])]):n("span",{staticClass:"d-flex containerTomatoNum"},[n("span",{staticClass:"font-weight-bold pTomato"},[t._v(t._s(e.pomodoro))]),n("img",{attrs:{src:s("4b90"),width:"30",height:"30"}})])]):n("div",[n("button",{staticClass:"font-weight-bold buttonEdit",on:{click:t.commitEdit}},[t._v("完成")])])])})),n("div",{staticClass:"d-flex align-items-center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newProjectName,expression:"newProjectName"}],staticClass:"input flex-grow-1",attrs:{placeholder:"想新增什麼科目呢？"},domProps:{value:t.newProjectName},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addProjects(e)},input:function(e){e.target.composing||(t.newProjectName=e.target.value)}}}),n("button",{directives:[{name:"show",rawName:"v-show",value:0!==t.newProjectName.length,expression:"newProjectName.length !== 0"}],staticClass:"font-weight-bold buttonAdd",attrs:{icon:"plus",shape:"circle"},on:{click:t.addProjects}},[t._v("＋")]),n("button",{staticClass:"w-50 font-weight-bold buttonAdd",attrs:{icon:"plus",shape:"circle"},on:{click:function(e){t.editingProject=!t.editingProject}}},[t._v(t._s(t.editingProject?"完成":"編輯"))])])],2)])},P=[],x={name:"tasks-list",props:{pomodoroStatus:{}},data:function(){return{newProjectName:"",editingProjectName:null,editingProjectNewName:"",editingProject:!1,firstTimeAddProject:!0}},computed:Object(o["a"])({},Object(h["d"])({projects:function(t){return t.projects}})),methods:Object(o["a"])(Object(o["a"])({},Object(h["c"])(["addProject","updateProjects"])),{},{addProjects:function(){this.firstTimeAddProject&&(this.firstTimeAddProject=!1,j.a.fire({icon:"info",title:"",html:"新增的任務可以在<b>番茄鐘</b>及<b>討論版/筆記</b>中選取喔！",confirmButtonText:"確定"}));var t=this.newProjectName,e={name:t,pomodoro:0};this.addProject(e),this.newProjectName=""},setEditingProjects:function(t){this.editingProjectName&&this.commitEdit(),this.editingProjectName=t.name,this.editingProjectNewName=t.name},commitEdit:function(){if(this.editingProjectName!==this.editingProjectNewName){var t=Object(o["a"])({},this.projects);t[this.editingProjectNewName]=t[this.editingProjectName],t[this.editingProjectNewName].name=this.editingProjectNewName,delete t[this.editingProjectName],this.updateProjects(t)}this.editingProjectName=null},deleteProject:function(t){var e=Object(o["a"])({},this.projects);delete e[t.name],this.updateProjects(e)}})},T=x,E=(s("14e0"),Object(y["a"])(T,C,P,!1,null,null,null)),O=E.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container d-flex justify-content-center bg-white"},[n("div",{staticClass:"w-100",staticStyle:{"max-width":"400px"}},[n("a-dropdown",{staticClass:"w-50"},[n("a",{staticClass:"ant-dropdown-link font-weight-bold"},[t._v(t._s(t.browsingSubject)),n("a-icon",{attrs:{type:"down"}})],1),n("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},t._l(Object.values(t.projects),(function(e){return n("a-menu-item",{key:e.name,staticClass:"font-weight-bold",attrs:{value:e.name},on:{click:t.switchProject}},[t._v(t._s(e.name))])})),1)],1),n("br"),n("br"),n("a-space",{attrs:{align:"start"}},t._l(["全部","問題","筆記"],(function(e){return n("div",{key:e,staticClass:"d-flex align-items-center",on:{click:function(s){t.browsingType=e}}},[t.browsingType===e?n("img",{attrs:{src:s("8372"),width:"15",height:"15"}}):t._e(),n("span",{staticClass:"ml-1"},[t._v(" "+t._s(e))]),n("a-divider",{attrs:{type:"vertical"}})],1)})),0),t._l(t.discusses,(function(e){return n("a-card",{key:e.content+e.author,staticClass:"w-100 p-3 mt-2 text-left"},[n("div",{staticClass:"d-flex align w-100",staticStyle:{width:"100%"},attrs:{align:"start"}},[n("a-space",{staticClass:"text-center",attrs:{direction:"vertical"}},[n("a-avatar"),n("span",[t._v(t._s(e.author))]),"問題"===e.type?n("button",{directives:[{name:"show",rawName:"v-show",value:e.author===t.user.name,expression:"discuss.author === user.name"}],staticClass:"btn-solved",on:{click:function(s){return t.showAlert(e)}}},[t._v(t._s("solved"===e.status?"已解決":"未解決"))]):n("button",{staticClass:"btn-solved"},[t._v("筆記")])],1),n("div",{staticClass:"ml-2",staticStyle:{width:"calc(100% - 50px)"}},[n("a-card",{staticClass:"box w-100"},[t._v(t._s(e.content))])],1)],1),n("a-divider",{staticClass:"operation-zone",attrs:{orientation:"left"}},[n("a-space",{attrs:{align:"end"}},[n("span",[t._v(t._s(e.star.length))]),n("a-button",{attrs:{type:"link"},on:{click:function(s){return t.starDiscuss(e)}}},[n("a-icon",{attrs:{type:"star",theme:e.star.includes(t.user.name)?"filled":"outlined"}})],1),n("span",[t._v(t._s(e.comments.length))]),n("a-button",{attrs:{icon:"message",type:"link"}})],1)],1),t._l(e.comments,(function(e){return n("div",{key:JSON.stringify(e),staticClass:"mb-3 w-100"},[n("div",{staticClass:"d-flex align w-100",staticStyle:{width:"100%"},attrs:{align:"start"}},[n("a-space",{attrs:{direction:"vertical"}},[n("a-avatar"),n("span",{staticClass:"box"},[t._v(t._s(e.author))])],1),n("div",{staticClass:"ml-2",staticStyle:{width:"calc(100% - 50px)"}},[n("a-card",[t._v(t._s(e.content))])],1)],1)])})),n("a-textarea",{attrs:{placeholder:"你的評論...",autoSize:!0},model:{value:e.commentDraft,callback:function(s){t.$set(e,"commentDraft",s)},expression:"discuss.commentDraft"}}),n("button",{staticClass:"sendC",attrs:{type:"link"},on:{click:function(s){return t.addComment(e)}}},[t._v("送出評論"),n("a-icon",{attrs:{type:"enter"}})],1)],2)})),n("div",{staticClass:"position-relative mt-3"},[n("a-textarea",{attrs:{placeholder:"縮縮你的問題...",autoSize:!0},model:{value:t.sendingDiscussContent,callback:function(e){t.sendingDiscussContent=e},expression:"sendingDiscussContent"}}),n("button",{staticClass:"sendQ",attrs:{type:"link"},on:{click:t.addDiscuss}},[t._v("送出問題"),n("a-icon",{attrs:{type:"enter"}})],1)],1)],2)])},U=[],N=(s("4de4"),s("caad"),s("c975"),s("a434"),s("2532"),{name:"discuss",props:{user:{}},data:function(){return{sendingDiscussContent:"",sendingComment:"",browsingSubject:"日常瑣事",browsingDiscussStatus:"all",browsingType:"全部",hintsStatus:!1,subjectDiscuss:{"日常瑣事":[{type:"問題",status:"unsolved",time:"2020",author:"無名氏",star:["a"],content:"什麼是微分？",commentDraft:"",comments:[{author:"Annoy",content:"先別管微分了，你聽過積分嗎？"}]},{type:"筆記",status:"unsolved",time:"2020",author:"無名氏",star:["a"],content:"現代文學史的演進史",commentDraft:"",comments:[{author:"Annoy",content:"標題黨"}]}]}}},computed:Object(o["a"])(Object(o["a"])({},Object(h["d"])({projects:function(t){return t.projects}})),{},{discusses:{get:function(){var t=this,e=this.subjectDiscuss[this.browsingSubject];return"all"!==this.browsingDiscussStatus&&(e=e.filter((function(e){return e.status===t.browsingDiscussStatus}))),"全部"!==this.browsingType&&(e=e.filter((function(e){return e.type===t.browsingType}))),e},set:function(t){this.subjectDiscuss=t}}}),methods:{starDiscuss:function(t){t.star.includes(this.user.name)?t.star.splice(t.star.indexOf(this.user.name),1):t.star.push(this.user.name)},addDiscuss:function(){this.discusses.push({content:this.sendingDiscussContent,status:"unsolved",time:"2020",author:this.user.name,star:[],comments:[]}),this.sendingDiscussContent=""},addComment:function(t){t.comments.push({content:t.commentDraft,author:this.user.name}),t.commentDraft=""},switchProject:function(t){var e=t.key;this.browsingSubject=e},switchDiscussStatus:function(t){this.browsingDiscussStatus=t,"unsolved"===t&&j.a.fire({title:"",icon:"question",html:"確定解決這題問題了嗎？",showCloseButton:!0,showCancelButton:!0,focusConfirm:!1,confirmButtonText:"確定",cancelButtonText:"取消"})},showAlert:function(t){j.a.fire({icon:"question",title:"",html:"確認解決這題問題了嗎？",showCloseButton:!0,showCancelButton:!0,focusConfirm:!1,confirmButtonText:"確定",cancelButtonText:"取消"}).then((function(e){e.isConfirmed&&(t.status="solved")}))}}}),D=N,z=(s("8688"),Object(y["a"])(D,_,U,!1,null,null,null)),B=z.exports,J=s("b375"),R=s.n(J),W={url:"https://api.line.me/oauth2/v2.1/token",grant_type:"authorization_code",client_id:"1655016607",client_secret:"9a2ae7335f215fc00dac198546b2a25e",redirect_uri:"http://localhost:8080",scope:"baz"},Y={name:"App",components:{Discuss:B,TasksList:O,PomodoroTimer:S},data:function(){return{section:"discuss",projects:{"日常瑣事":{name:"日常瑣事",pomodoro:0}},user:{name:"無名氏"},showSetting:!1,loginURL:"https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1655016607&state=123&scope=profile%20openid&redirect_uri=http://localhost:8080"}},mounted:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var s,n,i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null===t.code){e.next=14;break}return W.code=t.code,s=R.a.client(v.a.create(),W),e.next=5,s();case 5:return t.user.token=e.sent,n=t.user.token.access_token,i={method:"GET",headers:{Authorization:"Bearer ".concat(n)},url:"https://api.line.me/v2/profile"},e.next=10,v()(i);case 10:a=e.sent,console.log(a.data),t.$message.success("你已登入為 ".concat(a.data.displayName)),t.user=Object(o["a"])(Object(o["a"])({},t.user),a.data);case 14:case"end":return e.stop()}}),e)})))()},computed:{link:function(){return new URLSearchParams(window.location.search)},code:function(){return this.link.get("code")}}},L=Y,H=(s("034f"),Object(y["a"])(L,l,d,!1,null,null,null)),K=H.exports,M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._v("Coop note is coming soon")])},G=[],V={name:"CoopNote"},F=V,Q=Object(y["a"])(F,M,G,!1,null,"4b1189cc",null),I=Q.exports,q=[{path:"/pomodoro",component:S,props:!0},{path:"/projects",component:O,props:!0},{path:"/discuss",component:B,props:!0},{path:"/coop-note",component:I,props:!0}],Z=new u["a"]({routes:q});s("f9e3"),s("2dd8");i["default"].use(h["a"]),i["default"].use(u["a"]),i["default"].use(c["a"]),i["default"].use(r["a"]),i["default"].use(a["a"]),i["default"].config.productionTip=!1;var X=new Audio(s("f3f9")),$=new Audio(s("507a")),tt=new h["a"].Store({state:{pomoSession:{timerBegun:null,currentProject:"日常瑣事",workMinutes:1,restMinutes:1,perCycle:4,cyclePassed:0},projects:{"日常瑣事":{name:"日常瑣事",pomodoro:0}}},getters:{isWorkCycle:function(t){return t.pomoSession.cyclePassed%2===0},currentTimerSecondsLeft:function(t){var e=t.pomoSession.cyclePassed%2===0,s=60*(e?t.pomoSession.workMinutes:t.pomoSession.restMinutes);return s}},mutations:{updatePomoSession:function(t,e){console.log(e),t.pomoSession=Object(o["a"])(Object(o["a"])({},t.pomoSession),e),console.log(t.pomoSession.workMinutes)},updateProjects:function(t,e){t.projects=e},nextPomo:function(t){t.pomoSession.cyclePassed+=1,t.pomoSession.cyclePassed%=2*t.pomoSession.perCycle,t.pomoSession.timerBegun=null},onPomoDone:function(t){if(t.pomoSession.timerBegun=null,t.pomoSession.cyclePassed+=1,t.pomoSession.cyclePassed%=2*t.pomoSession.perCycle,console.log("Stop Timer"),t.pomoSession.cyclePassed%2==0)return $.play(),j.a.fire({icon:"success",title:"",html:"休息結束囉！再接再厲！",confirmButtonText:"確定"}).then((function(){$.pause(),$.currentTime=0})),null;var e=t.projects[t.pomoSession.currentProject];if(e){var s=Object(n["a"])({},e.name,e);s[e.name].pomodoro+=1,X.play(),1===s[e.name].pomodoro?j.a.fire({icon:"success",title:"",html:"恭喜你收集到第一顆番茄！右下角小番茄是<b>今日總共收集的番茄</b>～科目蒐集到的番茄可以在<b>任務</b>中查詢喔",confirmButtonText:"確定"}).then((function(){X.pause(),X.currentTime=0})):j.a.fire({icon:"success",title:"",html:"恭喜你又收集到一顆番茄！為自己掌聲鼓勵！",confirmButtonText:"確定"}).then((function(){X.pause(),X.currentTime=0})),t.projects=s}else console.error("Project name not found!")},addProject:function(t,e){i["default"].set(t.projects,e.name,e)}}});new i["default"]({router:Z,store:tt,render:function(t){return t(K)}}).$mount("#app")},"5b1f":function(t,e,s){},6963:function(t,e,s){},8372:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAlCAYAAAAuqZsAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUXSURBVHgBvVhNbBtFFH4zu84PP8UFKhWlKE5opASpIQ4ShZS2DiciIUG4wSWmaiUEQhREAIlD0gMSJIAiULlgijk0RZUIDQIKAmG3SV3KITHtwZVaWgdStYK2sVJUknTt6Xtj73q92fXPOs0n2Tvzdmb32zcz730zDFYAu4MBr8ez5BOCezVNjY+EoymoEgyqABGqUTOvUhF/XtNDRxY1vqcagipUgRpPJgICOqx2gUSRcACLfnAJBVyif8fWIGPsRb2+vmEd3LHmdvjv2nXDtKWzkR2bmomCC7j2GFPYALmG0N2zGZ7AH+HXwycggr9sI+jD/0FwAQ4ugHPLh6R8VK6rrzVIEboCHdImgW3eebmrEVzAFTFVTT+jl5taGgruEan7Gu416jcWlV5YLWK46p7Wy22bHlh237+5zSgLU9tKUDExGkYGLKDXfRaPEdra82SpLYUVuNXEPDwd0Mu+jRtg7d1rlrWh4WzamCdco6aDUCGWrco3dj4e4MADRfoYQ9NpGjIrWtFr589eyNVY35s7tzl7TYj40OcTh8wmI/L3B7s6mEf9Rl9t5eD1waCtxwipq/Pw4WAYygaDpACtd/izWJyqcijlvFHVSCWkWnHSO5EiePGeeThLAt/NhBrZHXzUR1U5lLWKGBC5XEfzg1aVEYtsUJ9rUwrP73oKEif/hLmr1xzbLPy/CKdPnsM281T1elTPF3jtlsQEE0G94UtvPVfUE5Ug+5EPlmzXtqkZ9n0yJsu4imXu5W9TFM+B3L9SpCpBU0vB6vZStuALOE91C03Yi7P/wmojdWVeH0qJd/fGZjhpJgEiqhtHQ9/LebFaOH9mFvYOHTDqGCbG6Splz7b25iOCy3lWR5Px1NQZGUfIxbcSpELG9v8CmpbOGgSkeHqpdzI+m5LEJuPJVNfDDT8xwZ9ERnJ1UnBM4tdQdK+/rRZWEjR0o6HvYPr3RN4oMI6ltZ6h8PHTVDWEYmzq70tbH2oaF0rGhw5tlQ/AZZ44dU7GoztRBK4EaOgO4HS5eOGyiZOI3kgr3R+FJ5K6zVbzY/oYxMuA2Uaaq9uku9zgeDQOP4wdtZr3DIWODlqNttKa5PBjnfcfYQJVhGloyXNr73EXTshTB7/8MW/A+ZRhmZ7h0ETYrr2juvggNBnlad5NOUy30cJwi5QpHFAVJ7mf3uHUvqjskTHOlD/Xb1gHbmHWaNln1xXd2hUlhtrLkNAkl6vJChaN5jU/u2JinPHtermjjJxXCj5TXOQKbAe3xDC5G1/V3FKBhHGAWQYJwdx5jJQs5KQQJXfa0Dph4fqiDAXTJxJQlJglWefeYQvHDa8ilD70WO6Bzt7KRnEKmNnkTxveHa886xhWWtub5UcQMNOQ16J27Rw9hrkzoJf9j9jPL0r2lIB1UpIohgXSVk7eI+2lg3HnrZ3zEYEpTNh57DBG8Fjuy60gcmP7f5ZXa7YoEAZFpHyxyW/EGYrahhGHbt/HXxeSogSsaX6u8SYq62Ya1k/fH4W5K/ngatF7jrHM8bRni7+xDaO+lLmUjiipziYvybRy+Z85EylxaCmt9FACJpViFQJ0+kNCgPqfTczAtwcjhsxhQnx1bPqvcbv3Ox7ckeTOqJlpMB3ILYd4bSg0MWJ3x04IFHbNpqX3wr8loRJihP5duNfM4F6TWeYCDhcm4BeK5bpS/VF79Q6HY3GnvmUdddIhHTDcvXBxl0jDH1pGCVdyjCn75yJ9uf1vAkEV9LmxHNKEAAAAAElFTkSuQmCC"},"85ec":function(t,e,s){},8688:function(t,e,s){"use strict";var n=s("5b1f"),o=s.n(n);o.a},b504:function(t,e,s){t.exports=s.p+"img/rest_pomodoro.fe290492.png"},c3c3:function(t,e,s){"use strict";var n=s("6963"),o=s.n(n);o.a},c99d:function(t,e,s){},f3f9:function(t,e,s){t.exports=s.p+"media/work_done.8e4ed44b.mp3"}});
//# sourceMappingURL=app.faaecb64.js.map