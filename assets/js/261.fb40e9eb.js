(window.webpackJsonp=window.webpackJsonp||[]).push([[261],{694:function(e,n,s){"use strict";s.r(n);var t=s(29),o=Object(t.a)({},(function(){var e=this.$createElement,n=this._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("p",[this._v('实现效果：如果信息是在1分钟之内提交的，则显示"xxx秒以前",如果信息是在1小时之内提交的，则显示"xxx分钟以前"，如果信息是在24小时以内提交的，则显示"xxx小时以前"，如果信息是在30天以内提交的，则显示"xxx天以前"，超过30天之后则直接显示日期和时间，如：07-27 01:22 。?')]),this._v(" "),n("p",[this._v('<%\nsaqqdy=(news.Fields.Item("time").Value) //使用时把此行代码中的"(news.Fields.Item("time").Value)"替换为你的记录集里的时间字段即可!\nif year(now)=year(saqqdy) then if month(now)=month(saqqdy) then\nif day(now)=day(saqqdy) then if hour(now)=hour(saqqdy) then\nif minute(now)=minute(saqqdy) then\nresponse.Write(""&second(now)-second(saqqdy)&"秒以前"&"")\nelse response.Write(""&minute(now)-minute(saqqdy)&"分钟以前"&"")\nend if\nelse response.Write(""&hour(now)-hour(saqqdy)&"小时以前"&"")\nend if\nelseif day(now)-day(saqqdy)<0 then\nif month(saqqdy)=1 or 3 or 5 or 7 or 8 or 10 or 12 then\nresponse.Write(31-day(saqqdy)+day(now)&"天以前")\nelseif month(saqqdy)=2 then\nresponse.Write(28-day(saqqdy)+day(now)&"天以前")\nelse response.Write(30-day(saqqdy)+day(now)&"天以前")\nend if\nelse response.Write(day(now)-day(saqqdy)&"天以前")\nend if\nelse response.Write(month(saqqdy)&"-"&day(saqqdy)&"?"&hour(saqqdy)&minute(saqqdy))\nend if\nelse response.Write(month(saqqdy)&"-"&day(saqqdy)&"?"&hour(saqqdy)&minute(saqqdy))\nend if\n%>')]),this._v(" "),n("p",[this._v("此ASP程序还将继续完善与升级！欢迎拷贝与使用，谢谢大家的支持！另外本代码由本人自行设计，使用时请注明出处：上岸QQ的鱼不会使用的朋友可以加我QQ：365060713")])])}),[],!1,null,null,null);n.default=o.exports}}]);