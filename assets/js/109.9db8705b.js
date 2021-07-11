(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{538:function(t,s,n){"use strict";n.r(s);var i=n(29),o=Object(i.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("每次启动电脑后，如果需要运行一个新的程序，首先Windows会把程序文件从硬盘读入内存，并等待处理器的处理。当然，电脑里可能会同时运行很多程序，其中很多因为是在后台悄悄运行的，因此我们并没有察觉。")]),t._v(" "),n("p",[t._v('假设经过一段时间的使用，电脑里运行了很多程序，这些程序有些保留在内存中，有些"暂存"在硬盘中。如果这时候我们不打算使用电脑，那么"关机"、"休眠"，和"睡眠"的不同点就可以体现出来了。')]),t._v(" "),n("p",[t._v('如果"关机"，这时候Windows会保存所有运行中的程序的状态，把所有程序都关闭，并保存到硬盘中，然后彻底切断电脑的电源。')]),t._v(" "),n("p",[t._v('如果"休眠"，这时候Windows也会把运行中的所有程序重新保存到硬盘。但和关机的不同在于：关机时候，所有程序都已经退出，重新开机的时候需要重新打开各个程序。')]),t._v(" "),n("p",[t._v('如果"睡眠"，当然的运行状态数据保留在了内存里面，Windows会切断除了内存之外其他所有设备的供电，但对内存的供电依然持续，因此内存中的数据不会丢失。')]),t._v(" "),n("p",[t._v("这也就是说，如果要让电脑关机，Windows首先要关闭所有运行中的程序，然后关闭系统后台的服务，接着向主板和电源发出特殊的信号，让电源切断对所有设备的供电，电脑彻底关闭。下次开机后，电脑完成自检工作，然后将Windows系统载入内存，接着继续加载其他后台服务，并显示登录界面。登录后，才可以运行自己的程序，开始使用电脑。整个过程因为要彻底关闭并重头开始启动系统和程序，因此所需的时间最常。")]),t._v(" "),n("p",[t._v('对于待机模式，如果要将电脑放入待机模式，Windows会自动向电源发出另一种特殊信号，随后电源会切断除了内存外其他设备的供电，内存中依然保存了系统运行中的所有数据，这个过程一两秒钟就可以完成。当从待机状态进入正常状态时，只要通电，然后Windows就会继续从内存中保存的上一次的"状态数据"下运行，这个过程也只需要几秒钟。')]),t._v(" "),n("p",[t._v("可见，对于待机状态，完全可以不用关闭自己的程序，如果需要，随时可以待机。而要恢复时也只需要按下电源按钮，几秒钟即可恢复。但这种模式虽然方便，但有一个致命的缺陷：不能停止对内存的供电。")]),t._v(" "),n("p",[t._v("因为内存是一种易失性存储设备，必须在保证供电的情况下才能维持其中的数据。因此一旦电脑在待机状态下断电，哪怕不到一秒钟，内存中的数据将丢失，下次开机的时候，Windows会像从关机状态下启动那样重新开始。")]),t._v(" "),n("p",[t._v("休眠模式和待机模式类似，只不过在休眠状态下，Windows会将内存中的数据保存到硬盘上系统盘根目录下的一个文件中。而下次开机后则从内存上的休眠文件内读取数据，并载入物理内存。休眠模式可以实现和待机模式类似的功能，只不过恢复速度稍慢，而且需要在硬盘上占据一块和物理内存一样大的空间来保存休眠文件。物理内存越多，占用的空间就越多，而进入状态和从状态恢复所需的时间也就越长(毕竟需要把文件从硬盘读入内存，而硬盘的速度一直都是最慢的)。但这种模式的优点也有很多，不怕断电!毕竟断电后硬盘上的数据并不会丢失。")]),t._v(" "),n("p",[t._v("Windows Vista中开始新增了的一种睡眠模式则结合了待机和休眠模式的所有优点。在进入睡眠模式后，Windows会首先将内存中的数据保存到硬盘上(这一点类似休眠)，同时切断除了内存外其他设备的供电(这一点类似待机)。在恢复时，如果没有断过电，那么系统会从内存中直接恢复，只需要几秒钟；而就算断电，因为硬盘中还保存有内存的状态镜像，因此还可以从硬盘上恢复，虽然速度要稍微慢一些，但至少不用担心数据丢失。")]),t._v(" "),n("p",[t._v("睡眠几秒钟不断电的情况下几秒钟需要对内存进行少量供电断电后，未保存数据不受损，但恢复速度需要略微延长些")]),t._v(" "),n("p",[t._v("休眠两分钟左右两分钟左右完全不耗电未保存数据不会丢失")]),t._v(" "),n("p",[t._v("待机几秒钟几秒钟需要对内存进行少量供电断电后所有未保存数据都会丢失")]),t._v(" "),n("p",[t._v("综上所述，这几种模式各有利弊，但只要Windows和所用硬件支持，则强烈建议使用睡眠功能代替以往习惯的关机操作。毕竟睡眠功能的优势显而易见，不仅可以避免漫长的启动过程，而且完全可以把电脑当作电视一样的一般电器，随开随关，完全不用担心丢失数据。\n"),n("a",{attrs:{href:"windows7-battery-set1.gif"}},[n("img",{staticClass:"alignnone size-full wp-image-267",attrs:{title:"windows7 battery set",src:"http://www.saqqdy.com/wp-content/uploads/2010/09/windows7-battery-set1.gif",alt:"",width:"620",height:"472"}})])]),t._v(" "),n("p",[t._v('按照设计，我们可以通过不同的方式触发不同的结果。例如，如果键盘上有"电源"按钮，我们可以设定按下该按钮后，Windows进入某种模式；如果是笔记本电脑，可以选择关闭上盖后，Windows进入某种模式；同时还可以设置在按下机箱上的电源按钮后，Windows进入另一种模式。\n如果希望详细设置这些不同的操作，可以打开控制面板，在窗口右上角的搜索框中输入"电源"，随后在搜索结果中单击"更改电源按钮行为"链接。')])])}),[],!1,null,null,null);s.default=o.exports}}]);