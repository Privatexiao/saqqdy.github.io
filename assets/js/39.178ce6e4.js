(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{467:function(t,i,n){"use strict";n.r(i);var e=n(29),a=Object(e.a)({},(function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v('windows7系统在安装的过程中，首次安装的时候自然要面对分区的问题，究竟怎么分才好呢？windows7安装过程提供可视化分区，但是有个局限性，当安装程序运行到"您想将Windows安装在何处？"界面时，如果在此界面对磁盘进行分区操作，你会发现Win7安装程序创建的都是主分区，并没有创建逻辑分区的任何选项，这就造成了创建4个主分区后剩余的空间无法继续分配的情况。而且还会自动产生一个100MB大小的系统保留分区。')]),t._v(" "),n("p",[t._v('为了摆脱这种尴尬局面，许多朋友采用了只创建第一主分区，然后再安装系统的方法。也就是说，剩余的磁盘空间需要等系统安装成功后再用其自带的"磁盘管理"进行分配。当然也可以借助WinPE里面加载的第三方软件进行分区。但是，上述方法显得有些繁琐，而且，使用分区工具也有一个问题：不能删除系统保留的那个100MB的分区（该分区存放了系统启动引导文件），删除该分区将直接导致系统无法启动。')]),t._v(" "),n("p",[t._v("下面介绍一种最为简便的方法，可以彻底解决这一问题。")]),t._v(" "),n("p",[t._v('当安装程序运行到创建磁盘分区界面时，按下"Shift+F10"便可启动命令窗口了。之后输入Diskpart回车便可进入Diskpart的命令环境(其提示符为："DISKPART>")。在此提示符下键入相应命令就可以进行分区操作，具体用到的命令有：Clean、List、Select、Create、Format、Exit，这些命令的使用方法可以在Diskpart命令提示符下键入Help或者通过网络查询得知。假设用List Disk命令显示的目标磁盘为0号，则建立分区的步骤如下：')]),t._v(" "),n("p",[t._v("List Disk\nSelect Disk 0\nClean //清除磁盘\nCreate Partition Primary Size=30000 //创建主分区大小为30GB\nActive //将分区设置为活动分区\nFormat Quick //执行快速格式化\nCreate Partition Extended //创建扩展分区\nCreate Partition Logical Size=30000 //在扩展分区里面创建逻辑分区，大小为30GB\nFormat Quick //执行快速格式化\nCreate Partition Logical Size=30000 //在扩展分区里面创建逻辑分区，大小为30GB\nFormat Quick //执行快速格式化\nCreate Partition Logical //在扩展分区里面创建逻辑分区（把剩余空间全部创建为一个分区）\nFormat Quick //执行快速格式化\nExit\nExit\n"),n("span",{staticStyle:{color:"red"}},[t._v("（注意：代码没有大小写限制！）")])])])}),[],!1,null,null,null);i.default=a.exports}}]);