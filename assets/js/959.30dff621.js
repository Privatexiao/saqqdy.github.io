(window.webpackJsonp=window.webpackJsonp||[]).push([[959],{1390:function(s,e,n){"use strict";n.r(e);var t=n(29),o=Object(t.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("很多人都认为制作封装系统是一件很复杂、很高深的事情。事实上，真正做过1次封装系统以后，就会发觉做封装系统并不困难。只要具有一定电脑基础（会装操作系统、安装软件，能够比较熟练地使用常用的应用软件），再加上一点点细心和耐心，制作一个属于自己的封装系统是一件轻而易举的事情。下面，我们一起来制作属于自己的Windows7封装系统吧。")]),s._v(" "),n("p",[n("span",{staticStyle:{color:"#ff0000"}},[s._v("** 本文最后会附上DOC格式手册供大家下载，图片解释更加清楚明了。 **")])]),s._v(" "),n("p",[s._v("** "),n("span",{staticStyle:{"font-size":"16px"}},[s._v("一、封装前准备 **")])]),s._v(" "),n("p",[s._v("1、Windows7官方发布的安装光盘（镜像）。\n2、需要预装的各种应用软件，如Office、Photoshop、完美解码等等。\n3、UltraISO和Windows7AIK。Windows7AIK简体中文版的下载地址为：\n"),n("a",{attrs:{href:"http://download.microsoft.com/download/6/3/1/631A7F90-E5CE-43AA-AB05-EA82AEAA402A/KB3AIK_CN.iso"}},[s._v("http://download.microsoft.com/download/6/3/1/631A7F90-E5CE-43AA-AB05-EA82AEAA402A/KB3AIK_CN.iso")]),s._v("\n4、WindowsPE\nWindows7PE光盘可以使用Windows7AIK制作。")]),s._v(" "),n("p",[n("span",{staticStyle:{"font-size":"16px"}},[s._v("** 二、安装操作系统和应用程序 **")])]),s._v(" "),n("p",[s._v('1、安装Windows7操作系统。\n安装操作系统有4个环节要注意：\n①操作系统最好安装在C盘，安装期间（包括后面安装应用程序和进行封装）最好不要连接到网络。\n②如果在安装操作系统过程中输入序列号，进行封装以后再重新安装操作系统不会再提示输入序列号。除非要制作成OEM版的封装系统，否则在安装过程中提示输入序列号时，不要输入序列号，直接点"下一步"继续系统的安装。\n③为保持封装系统纯净，安装好Windows7操作系统后最好不要安装硬件的驱动。当然，安装驱动程序也不会影响系统的封装。\n④为避免调整优化系统、安装应用软件过程中出现不必要的错误和产生错误报告文件，第一次进入系统后应当禁用UAC和关闭错误报告。禁用UAC和关闭错误报告的方法如下：\n--打开"控制面板"，点击"系统和安全"，选择"操作中心"，点击"安全"，在展开的详细设置内容中找到并点击"用户帐户控制"下方的"选择您UAC级别"，然后在弹出的对话框中将左边的滑杆调整为"从不通知"，再点击"确定"就可以禁用UAC了（需要重新启动系统才能生效）。')]),s._v(" "),n("p",[s._v('--接下来，再点击"维护"，在展开的详细设置内容中找到并点击"检查问题报告的解决方案"下方的"设置"，在弹出页面内选择"从不检查解决方案（不推荐）"，点击"确定"就可以禁用错误报告了。')]),s._v(" "),n("p",[s._v("2、安装需要封装的各种应用软件。\n需要注意的是：1张普通DVD光盘的容量为4.37G，为避免生成的封装文件过大无法刻录到DVD光盘，安装应用程序时要控制好系统盘的容量。一般情况下要确保系统盘去除休眠文件（hiberfil.sys）和页面文件（pagefile.sys）后占用空间不超过8.5G。\n3、根据自己的喜好对系统和安装的应用程序进行调整优化，并对系统进行临时文件、垃圾文件和注册表进行清理。\n这里要注意调整优化、清理后有可能造成系统不稳定的问题，必须要对所使用的优化软件和要进行调整优化、清理的项目有比较全面了解。不要因为调整优化、清理而给系统本身带来不稳定的因素，而在封装以后又把这些不稳定因素带到新的系统里。")]),s._v(" "),n("p",[n("span",{staticStyle:{"font-size":"16px"}},[s._v("** 三、进行封装 **")])]),s._v(" "),n("p",[s._v('1、启用Administrator管理员用户帐户和禁用当前使用的管理员用户帐户。\n①右键"计算机"，点击"管理"，系统会弹出"计算机管理"界面。在"计算机管理"界面左边窗格在双击"本地用户和组"，再点击"用户"，"计算机管理"界面中间窗格就会显示计算机里的所有用户帐户，其中名称与安装系统时输入用户名相同就是当前使用的管理员用户帐户。')]),s._v(" "),n("p",[s._v('②右键Administrator用户图标，点击"属性"，在弹出的Administrator属性对话框内把"帐户已禁用"前面勾去除，再点"确定"就可以启用Administrator用户帐户了。')]),s._v(" "),s._v('③接下来，右键当前正在使用的管理员用户图标，点击"属性"，在弹出的当前正在使用的管理员用户属性对话框内选上"帐户已禁用"，点击"确定"禁用当前正在使用的管理员用户帐户。\n'),n("p",[s._v('④启用Administrator管理员用户帐户和禁用当前使用的管理员用户帐户后，重新启动计算机，系统会自动使用Administrator用户帐户进行登陆。\n2、将原来对系统和应用程序的设置转换成对所有用户的默认设置（也就是说以后每建立1个新用户帐户，都可以直接使用刚被禁用的用户帐户对系统和应用程序所作的设置）。\n①打开"控制面板"，点击"外观和个性化"，找到并点击"文件夹选项"下方的"显示隐藏的文件和文件夹"，在弹出的"文件夹选项"对话框中，将"隐藏受保护的操作系统文件（推荐）"前面的勾去除，再选上"显示隐藏的文件和文件夹"，点击"确定"使计算机所有文件和文件夹都显示出来。')]),s._v(" "),n("p",[s._v("②打开系统盘的用户文件夹C:\\Users，可以看到每个用户帐户对应的文件夹。")]),s._v(" "),n("p",[s._v('③将刚被禁用用户帐户的文件夹（Maker）里面的"AppData"文件夹和NTUSER.DAT、 ntuser.dat.LOG1 、 ntuser.dat.LOG2 、 NTUSER.DAT{xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx}.TM.blf、 NTUSER.DAT{xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx}.TMContainer00000000000000000001.regtrans-ms、 NTUSER.DAT{xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx}.TMContainer00000000000000000002.regtrans-ms 、 ntuser.ini（如果有SciTE.sessio、全局缩写.properties这2个文件的话，也要选上）复制到默认用户的文件夹（C:\\Users\\Default）内，复制过程中如果提示有文件或文件夹同名则点击"确定"覆盖或合并即可。')]),s._v(" "),n("p",[s._v('3、删除原来的用户帐户（即刚被禁用的用户帐户）及其配置文件夹。\n①右键"计算机"，点击"管理"，系统会弹出"计算机管理"界面。在"计算机管理"界面左边窗格在双击"本地用户和组"，再点击"用户"，在"计算机管理"界面中间窗格找到原来的用户帐户（即刚被禁用的用户帐户），右键该用户图标，然后点击"删除"。')]),s._v(" "),n("p",[s._v('②退出"计算机管理"界面，右键"计算机"，点击"属性"，再点击"高级系统设置"，在弹出的"系统属性"对话框里切换到"高级"选项卡，点击"用户配置文件"框内的"设置"，系统会弹出的"用户配置文件"对话框，这里会看到有3个用户的配置文件（1个是Administrator的配置文件，1个默认配置文件，还有1个显示为未知的帐户），显示为未知的帐户就是刚刚删除的用户帐户，把它的配置文件删除即可：选择"未知的帐户"，点击"删除"，再点击"确定"退出。')]),s._v(" "),n("p",[s._v('接下来，打开"计算机"，在打开系统盘的用户文件夹C:\\Users，看看刚被删除用户帐户的配置文件夹是否已经完全删除，如果在用户文件夹内还存在刚被删除用户帐户的配置文件夹，则将该文件夹删除。然后在"文件夹选项"里将"显示隐藏的文件和文件夹"设置还原为默认值。\n如果安装有虚拟光驱软件，要运行虚拟光驱软件，将虚拟光驱数设置为0，避免虚拟光驱在以后安装系统时造成盘符错乱。\n如果设置了禁用UAC和关闭错误报告，则设置成启用UAC和打开错误报告。\n4、执行封装。\n①打开"计算机"，在C:\\Windows\\System32\\sysprep目录下，找到并运行sysprep.exe，在"系统清理操作"下方选择"进入系统全新体验（OOBE）"，并把"通用"选上，然后在"关机选项"选择"关机"，再点击"确定"开始执行封闭。')]),s._v(" "),n("p",[s._v("?②执行封装整个过程需要1-2分钟，期间不要进行其他操作。执行封装完成后，计算机会自动关机。")]),s._v(" "),n("span",{staticStyle:{"font-size":"16px"}},[s._v("** 四、制作封装系统镜像。 **\n"),n("p",[s._v('执行封装以后，接下来要做的就是使用Ghost或ImageX制作封装系统镜像。Ghost和Imagex两种各有优缺点：Ghost使用最高压缩制作时间相对Imagex使用最高压缩时间短，而且还原（安装）的时间也比Imagex快不少，但是生成备份文件大，而且定制性不强，不能添加第三方驱动程序、升级补丁等；Imagex虽然备份时间长、还原（安装）时间相对长一些，但是生成的镜像文件较小，而且可以添加第三方驱动、升级补丁等，有很强的定制性。\n1、使用Ghost制作封装镜像。\n使用Ghost制作封装镜像过程比较简单，用WindowsPE光盘（不一定要Windows7PE）启动计算机后，运行Ghost32.exe把系统分区制作成*.GHO文件就可以。制作镜像文件时，最好加上split、z参数启用最高压缩和对镜像文件进行拆分。比如：运行"ghost32 -span -split=2000 -z9"，在制作镜像时，Ghost会启用最好压缩，并将镜像文件拆分为2000M。\n制作成封装镜像后，要将封装系统安装到另一台计算机，只需将封装的镜像还原即可。\n2、使用Imagex制作封装镜像。\n①如果WindowsPE不带用Imagex.exe，先将Imagex.exe（最好是6.1.7600.16385版本）复制到U盘。\n②用WindowsPE光盘（最好是Windows7PE）启动计算机进入WindowsPE系统，插入带有Imagex.exe的U盘，通过Dir命令查找操作系统和Imagex.exe所在分区，系统切换到Imagex.exe所在目录，运行以下命令制作封装系统镜像：\nimagex /compress maximum /check /scroll /capture X: Y:\\install.wim "Windows 7 Ultimate"\n其中：/compress maximum表示启用最高压缩；/check表示检查wim文件的完整性；/scroll表示滚动要重定向的输出；/capture X:表示要捕获制作镜像的操作系统所在分区；Y:\\install.wim表示生成镜像文件的位置和文件名；"Windows 7 Ultimate"表示向wim文件添加说明，以便于查看，双引号里面的内容可以根据个人自己的喜好设定。例如，操作系统安装在D盘，要制作封装镜像文件到E盘的根目录下，取名为install.wim，可以使用如下命令：\nimagex /compress maximum /check /scroll /capture D: E:\\install.wim "Windows 7 Ultimate"')]),s._v(" "),n("p",[s._v("运行封装命令后，Imagex.exe会对操作系统分区内的文件和文件夹进行扫描，然后开始捕获。捕获完成后，在命令窗口内出现成功（successfully）的提示，关闭命令窗口退出WindowsPE系统重新计算机。")]),s._v(" "),n("p",[s._v('计算机重新启动后会立即进入重新安装状态，对系统进行初始化、更新注册表和安装驱动程序等等。在这个过程可以检验一下所做的封装有什么问题。\n3、制作封装系统安装光盘。\n如果检验封装系统没有什么问题，接下来就可以使用Imagex制作的镜像文件制作封装系统安装盘了。\n①安装Windows7AIK。在开始菜单中找到并运行"Windows系统映像管理器"，在"文件"菜单上，单击"选择 Windows 映像"，"选择 Windows 映像"对话框会打开，选择之前制作的install.wim文件，点击"打开"，会弹出创建文件编录文件的对话框，点击"是"开始创建编录文件。')]),s._v(" "),n("p",[s._v("完成创建编录文件后，在install.wim所目录就会出现一个clg文件。")]),s._v(" "),n("p",[s._v("②安装UltraISO。用UltraISO打开Windows7原版光盘镜像，在光盘镜像sources目录找到install.wim和5个intall_Windows 7******.clg文件，将它们全部删除。")]),s._v(" "),n("p",[s._v('③将自己制作install.wim和刚生成的编录文件添加到光盘镜像的sources目录下，点击"保存"（不要选择"另存为"）就完成封装系统光盘镜像制作了。')]),s._v(" "),n("p",[s._v("至此，Windows7封装系统基本完成！")]),s._v(" "),s._v("** "),n("span",{staticStyle:{"font-size":"16px"}},[s._v("五、让封装系统更加完美。 **\n"),n("p",[s._v('按照前面的步骤制作完成封装系统以后，尽管已经可以安装其他计算机上并且系统各项功能和预装的各种应用程序都可以正常使用，但是还有几个不够完美的地方：\n--可能会出现第一次登录系统时出现黑屏，需要重新设定桌面背景。\n--运行预装的应用程序以后，在用户文件夹里发现原来已经删除的用户帐户的文件夹又重新生成了。\n--运行注册表编辑器，查找"Users<已经删除的用户名>"（如"Users\\Maker"），竟然还找了很多"Users<已经删除的用户名>"的注册表项目。')]),s._v(" "),n("p",[s._v('1、第一种解决办法：将所有"Users<已经删除的用户名>"注册表项目修改成"Users\\Default"，在系统第一次登录之前导入到系统。\n①查找注册表文件。使用自己制作的封装系统进行安装，登录系统以后，运行C:\\Widows目录下的regedit.exe打开注册表编辑器，点击"编辑"，再点击"查找"，在"查找"对话框里输入"Users<已经删除的用户名>"（如Users\\Maker），点击"查找下一个"开始查找。')]),s._v(" "),n("p",[s._v('②导出注册表文件。发现包含"Users<已经删除的用户名>"字段的注册表项目的时候，点击"文件"，再点击"导出"将该注册表项目导出到硬盘（保存为reg文件）。')]),s._v(" "),n("p",[s._v('然后按F3键继续查找，发现包含"Users<已经删除的用户名>"字段的注册表项的时候继续导出，一直查找到HKEY_LOCAL_MACHINE的结尾处（HKEY_USERS后面发现的注册表项不用理会）。')]),s._v(" "),n("p",[s._v("完成查找和导出完成后，关闭注册表编辑器，转到导出注册表所在目录，可以看到导出的所有的注册表项（预装的应用软件不同，导出注册表文件多少也不同）。")]),s._v(" "),n("p",[s._v('③合并注册表文件。在"开始菜单"-"附件"里找到并运行"记事本"，在第一行输入"Windows Registry Editor Version 5.00"后，右键其中1个注册表文件，在弹出菜单中点击"编辑"打开该注册表文件，将该注册表文件中的键名（即带中括号的字段）和带有"Users<已经删除的用户名>"字段的项目（其他的不用理会）复制到记事本内。然后继续打开另1个注册表文件，按照同样方法将键名和包含有"Users<已经删除的用户名>"字段的项目复制到记事本内，直到将所有导出的注册表文件的键名和包含有"Users<已经删除的用户名>"字段的项目全部复制到记事本为止。')]),s._v(" "),n("p",[s._v('这个过程中要十分小心，同时也要善于利用记事本的"查找"功能，要确保每1个注册表项目能够正确地复制到记事本中。完成以后，最好再复查一遍。\n④替换注册表项目。在记事本菜单栏点击"编辑"，再点击"替换"，在弹出对话框内的"查找内容"输入已经删除的用户名，在"替换为"输入"Default"，然后点击"全部替换"。')]),s._v(" "),n("p",[s._v('⑤保存注册表文件。在记事本菜单栏点击"文件"，再点击"另存为"，在弹出"另存为"对话框中选择要保存的位置，在"保存类型"选择"所有文件"，在"文件名"输入文件名（一定要记得加上reg后缀名），最后点"保存"退出记事本。')]),s._v(" "),n("p",[s._v('⑥创建脚本文件。打开记事本，输入以下内容，然后分别保存为oobe.cmd和system.cmd文件：\n@echo off\nregedit /s %systemroot%\\setup\\scripts\\fix.reg\nrmdir /s /q %systemroot%\\setup\\scripts\n其中：fix.reg是上一步保存的注册表文件，可根据自己的实际情况修改。oobe.cmd和system.cmd的内容都是一样的，保存的时候要记得将"保存类型"选为"所有文件"。')]),s._v(" "),n("p",[s._v("⑦修改封装系统镜像。创建1个名为$oem$的文件夹，在$oem$文件夹内再创建1个名为$$的文件夹，接着又在$$文件夹内继续创建1个名为setup的文件夹，最后在setup的文件夹内创建1个名为scripts的文件夹（$oem$文件夹最终的目录结构为：$oem$$$\\setup\\scripts）。然后将保存的注册表文件（fix.reg）和oobe.cmd、system.cmd复制到$oem$$$\\setup\\scripts目录下。")]),s._v(" "),s._v('用UltraISO打开前面制作的封装系统镜像，将$oem$文件夹添加到光盘镜像sources目录下，点击"保存"退出。\n'),n("p",[s._v('经过修正的封装系统光盘镜像制作完成。\n2、第二种解决办法：使用编程工具编写一个自动修改注册表的程序，在系统第一次登录时将所有"Users<已经删除的用户名>"注册表项目修改成"Users<新用户名>"。\n编写自动修改注册表、将"Users<已经删除的用户名>"注册表项目修改成"Users<新用户名>"的程序需要具备一定的编程基础，如何编写这个程序这里暂不介绍，有编程基础的朋友，可以根据自己的实际编写并编译成可执行程序。这里主要介绍如何实现在系统第一次登录时运行自动修改注册表程序（假设这个自动修改注册表程序名为fix.exe）。\n①开记事本，输入以下内容，然后另存为runonce.reg注册表文件：\nWindows Registry Editor Version 5.00\n?[HKEY_CURRENT_USER\\Control Panel\\Desktop]\n"Wallpaper"="C:\\Users\\Default\\AppData\\Roaming\\Microsoft\\Windows\\Themes\\TranscodedWallpaper.jpg"\n[HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\RunOnce]\n"Fix"="C:\\Windows\\Setup\\ scripts \\fix.exe "')]),s._v(" "),n("p",[s._v("②打开记事本，输入以下内容，然后分别保存为oobe.cmd和system.cmd文件：\n@echo off\nregedit /s %systemroot%\\setup\\scripts\\runonce.reg")]),s._v(" "),n("p",[s._v('③创建1个名为$oem$的文件夹，在$oem$文件夹内再创建1个名为$$的文件夹，接着又在$$文件夹内继续创建1个名为setup的文件夹，最后在setup的文件夹内创建1个名为scripts的文件夹（$oem$文件夹最终的目录结构为：$oem$$$\\setup\\scripts）。然后将fix.exe、runonce.reg和oobe.cmd、system.cmd复制到$oem$$$\\setup\\scripts目录下。用UltraISO打开封装系统镜像，将$oem$文件夹添加到光盘镜像sources目录下，点击"保存"镜像文件即可。\n到这里，制作Windows7封装系统的整个过程全部介绍完毕。当然，本文所介绍的并不是制作Windows7封装系统的唯一方法，还有更多更好的方法、途径和技巧需要我们去学习和研究。只要多学多练，一定能够制作出更加完美的封装系统！')]),s._v(" "),n("p",[s._v("附上DOC格式文档供大家下载（含图）："),n("a",{attrs:{href:"http://pan.baidu.com/share/link?shareid=132491&uk=1661085386"}},[n("span",{staticStyle:{color:"#ff0000"}},[s._v("** 本地下载 **")])])])])])])}),[],!1,null,null,null);e.default=o.exports}}]);