(window.webpackJsonp=window.webpackJsonp||[]).push([[355],{784:function(e,t,n){"use strict";n.r(t);var l=n(29),r=Object(l.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v('说到系统默认浏览器的问题大家都会有一定了解吧！据我所知，很多网友都很喜欢用360的安全浏览器，估计很大一部分原因是因为其"安全"俩字。到底安全不安全我也不好说，我是不会用那玩意儿的，当然不是怀疑360的安全性，我是很注重视觉享受的，本人不太喜欢绿色，觉得360安全浏览器的皮肤实在是太难看了，太OUT了，纵观各种形形色色的浏览器，都会有一个"把xxx设置为默认浏览器"的选项，太欺负广大网民了。尤其是那些不太懂电脑的人，莫名其妙的就把默认浏览器换了。\n其次，360采用IE的内核，这点我也不喜欢，如果360真的牛逼的话就自己搞个自己的浏览器得了呗。\n很多人其实都会后悔，突然发现自己的默认浏览器变了，又不知道如何改回去。\n本人是IE的忠实使用者，当然，IE的最大的毛病就是我行我素，自创一套，搞的各大浏览器的兼容性问题日渐扩大。都是为了商业利益的结局啊。。。。IE6我当然是不会用了，设计网页或者皮肤的时候还是会用一下下的，比较国内怀旧人员太多了，我想说的是，IE6真的很OUT了，还是用IE8吧，貌似IE9也快发布了吧？鼓励大家放弃IE6。\n好了，题外话说完了，该说说正事了，就教教大家怎么把默认浏览器改回来吧（以IE为例，如果你喜欢其他浏览器，方法类似！）')]),e._v(" "),n("p",[e._v('方法一：打开IE浏览器的"Internet选项"，大家都知道在哪吧，我就不说了。')]),e._v(" "),n("p",[e._v("如图所示：\n"),n("a",{attrs:{href:"IE.gif"}},[n("img",{staticClass:"alignnone size-full wp-image-278",attrs:{title:"IE",src:"http://www.saqqdy.com/wp-content/uploads/2010/09/IE.gif",alt:"",width:"418",height:"495"}})])]),e._v(" "),n("p",[e._v("按照图示处，按自己的意愿随意设置吧！")]),e._v(" "),n("p",[e._v("方法二：直接修改注册表")]),e._v(" "),n("p",[e._v('运行regedit打开注册表编辑器\n找到（1）：HKEY_CLASSES_ROOT\\http\\shell\\open\\command，双击"默认"，输入要用浏览器的可执行文件的完全路径。例如：输入"C:\\Program Files\\Internet Explorer\\iexplore.exe"\n（2）：HKEY_CLASSES_ROOT\\http\\shell\\open\\ddeexec\\Application，双击"默认"，设置浏览器名，如果是Firefox则输入Firefox，如果是IE则输入IExplore。')]),e._v(" "),n("p",[e._v('接下来是最主要的，64位操作系统里面会有32位IE跟64位IE，系统默认使用32位IE，因为Adobe flash player组件不支持64位（悲剧啊！）还有个别其他组件也不支持！\n当然，系统也有犯傻的时候，也可以通过注册表将它改回来。\n以windows 7操作系统为例，方法如下；\n找到：HKEY_CLASSES_ROOT\\http\\shell\\open\\command，双击"默认"，输入要用浏览器的可执行文件的完全路径。例如：输入"** C:\\Program Files (x86)\\Internet Explorer\\iexplore.exe **"\n** （注意：浏览器地址请准确改写！） **\n这样，就把系统默认浏览器改正过来了。如果你还不懂的话或者没有解决你的问题，欢迎留言！')])])}),[],!1,null,null,null);t.default=r.exports}}]);