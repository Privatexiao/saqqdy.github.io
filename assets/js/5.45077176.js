(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{397:function(t,e,n){},427:function(t,e,n){"use strict";n(397)},437:function(t,e,n){"use strict";n.r(e);var i={name:"BaseCodeBox",props:{title:String,description:String,onlineLink:{type:String,default:""}},data:function(){return{isShow:!1,codeTextBtn:"显示代码",codeTextBtnOnline:"在线运行"}},methods:{handleToggleShow:function(){this.isShow=!this.isShow,this.codeTextBtn=this.isShow?"隐藏代码":"显示代码"},handleOnline:function(){window.open(this.onlineLink)}}},s=(n(427),n(29)),o=Object(s.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"code"},[n("div",{staticClass:"code--title"},[n("h2",[t._v(t._s(t.title))]),t._v(" "),n("small",[t._v(t._s(t.description))])]),t._v(" "),n("div",{staticClass:"code--demo"},[n("div",{staticClass:"code-content"},[t._t("default")],2)]),t._v(" "),t.isShow?n("div",{staticClass:"code--segment"},[t._t("codeText")],2):t._e(),t._v(" "),t.$slots.codeText?n("div",{staticClass:"code--button"},[n("div",{staticClass:"code--show",on:{click:t.handleToggleShow}},[t._v("\n            "+t._s(t.codeTextBtn)+"\n        ")]),t._v(" "),t.onlineLink?n("div",{staticClass:"code--online",on:{click:t.handleOnline}},[t._v("\n            "+t._s(t.codeTextBtnOnline)+"\n        ")]):t._e()]):t._e()])}),[],!1,null,"7b10e969",null);e.default=o.exports}}]);