(window.webpackJsonp=window.webpackJsonp||[]).push([[966],{1395:function(n,t,i){"use strict";i.r(t);var e=i(29),_=Object(e.a)({},(function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[i("p",[n._v("相信大部分人都遇到了Windows7 SP1无法安装的问题，SP1包刚刚出来大家都跃跃欲试吧？但是装不了就很让人蛋疼了，我就遇到了这样的问题，最后是重新安装系统再装上的，当然，大家大可不必这么费事，解决方法其实很简单！")]),n._v(" "),i("p",[n._v("自从Windows 7 SP1 RTM正式版放出下载开始，装不了的朋友大致是以下几种：")]),n._v(" "),i("p",[n._v('1、安装Windows 7 SP1 正式版的时候提示"系统缺少必要的组件"（这是最普遍的问题，是使用优化软件清理了"系统驱动备份"引起的，上岸QQ的鱼遇到的就是这个情况）。')]),n._v(" "),i("p",[n._v('2、安装Windows 7 SP1 正式版的时候提示"系统找不到指定的路径"')]),n._v(" "),i("p",[n._v('3、安装Windows7 SP1 后重启后出现"配置错误"等问题（无法配置SP 安装失败。错误代码：0x80070002。ERROR_FILE_NOT_FOUND（系统无法找到指定的文件）')]),n._v(" "),i("p",[n._v('产生此类问题的根源，和使用Win7优化大师、魔方等软件清理了"系统驱动备份"这个有关系，通过1月16日周日的全天排查，确定和 C:\\Windows\\System32\\DriverStore\\FileRepository 这个文件夹下的 atiilhag.inf_amd64_neutral_0a660e899f5038a2 、atiriol6.inf_amd64_neutral_bde34ad5722cca75 等文件夹有关系，删除了这些文件夹会让Win7 SP1 安装时提示"系统缺少必要的组件"。')]),n._v(" "),i("p",[n._v('同时，恢复这两个文件后还会产生"系统找不到指定的路径"等问题，所以，解决方法只能是恢复那些驱动备份文件。通过手动恢复因为涉及到文件权限和32位、64位系统的问题，对初级用户修复起来比较复杂，所以，推荐大家** 使用Win7光盘来修复下系统 **。')])])}),[],!1,null,null,null);t.default=_.exports}}]);