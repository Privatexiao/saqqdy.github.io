(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{472:function(p,o,r){"use strict";r.r(o);var t=r(29),n=Object(t.a)({},(function(){var p=this,o=p.$createElement,r=p._self._c||o;return r("ContentSlotsDistributor",{attrs:{"slot-key":p.$parent.slotKey}},[r("p",[p._v("历时一个月了，总算告一段落，截至目前本站已经消耗了42GB流量，巨大呀！这要换了国内主机，铁定早被停了。国内主机流量掐的太狠了，200一年的月流量5G，太坑爹了！")]),p._v(" "),r("p",[r("a",{attrs:{href:"http://www.saqqdy.com/computer-skills/excessively-high-cpu-resources-wordpress-scheduled-tasks-mechanism/attachment/cpus",rel:"attachment wp-att-744"}},[r("img",{staticClass:"alignnone size-full wp-image-744",attrs:{title:"cpus",src:"cpus.png",alt:"",width:"570",height:"487"}})])]),p._v(" "),r("p",[p._v("本来打算过一段时间再处理网站占用CPU资源过高问题的，实在是被逼无奈啊，主机都快冒烟了。 据查，本站在24小时内被限制了1000余次，这频率。。。太高了！下意识的去检查了访问 日志，发现访问最多的是wp-cron.php文件，有如下记录：")]),p._v(" "),r("blockquote",[r("p",[p._v('202.75.56.133 - - [23/May/2012:20:02:31 +0800] "POST /wp-cron.php?doing_wp_cron=1337774550 HTTP/1.0" 200 - "-" "WordPress/3.3.2; http://www.saqqdy.com"\n202.75.56.133 - - [23/May/2012:20:02:25 +0800] "POST /wp-cron.php?doing_wp_cron=1337774545 HTTP/1.0" 200 - "-" "WordPress/3.3.2; http://www.saqqdy.com"\n202.75.56.133 - - [23/May/2012:20:02:29 +0800] "POST /wp-cron.php?doing_wp_cron=1337774549 HTTP/1.0" 200 - "-" "WordPress/3.3.2; http://www.saqqdy.com"\n发现没，访问IP竟然是本站自己的IP，也就是说，WordPress在"自己访问自己"，而且执行频率特别高，一天的访问日志竟然有20MB这么大。wp-cron.php到底是干嘛的呢？')])]),p._v(" "),r("p",[p._v("WordPress站点运行时需要偶尔在后台定时运行一些任务，如定时发布文章，清空Cache的内容，同步别的站点的RSS Feed等。当然了，计划任务可以通过Linux系统下的crond实现，但考虑到不是所有的网站托管服务都能让用户设定crontab，因此Wordpress中自带了一套计划任务引擎，姑且称之为WP-Cron，这是Wordpress自带的一套函数，和单独的wp-cron插件不是一回事。")]),p._v(" "),r("p",[p._v("WP-Cron的原理是这样的：虽然用户不能通过crond设置计划任务，但网站随时可能会有用户在点击，只要在用户点击的时候，判断当时是否有需要运行的后台任务，如果则在后台运行该任务，就可以实现类似crond的效果。WP-Cron的实现还是比较轻量级的，虽然后台任务是被用户的访问激活的，但后台任务的执行并不会影响用户的访问速度，因为Wordpress在处理用户请求时，发起单独的一个HTTP请求访问wp-cron.php页面后，并不等待wp-cron.php将后台任务执行完毕，也不继续接收由wp-cron.php返回的数据，而是立即处理用户的访问请求。相关细节可以参见wp-includes/cron.php文件。\n虽然这么好用，不过占用这么高的系统资源我就不得不禁用它了。禁用方法也简单，打开wp-config.php文件，添加以下代码：")]),p._v(" "),r("blockquote",[r("p",[r("code",[p._v("define('DISABLE_WP_CRON', true);")]),p._v("\n当然了，如果你的主机可以设定crontab，你可以在你后台系统的crontab文件里，增加下面的代码：\n"),r("code",[p._v("*/15 * * * * YOUR_USER /usr/bin/wget -q --post-data '' http://YOUR_SITE/wp-cron.php?doing_wp_cron -O /dev/null")]),p._v("\n上面配置指示，每15分钟，调用wget命令访问站点的wp-cron.php文件，post-data参数指示wget用POST方法，而不是GET方法，这样可以避免WP-Super-Cache这样的缓存插件影响后台任务的正确执行，但post-data传输的数据必须是空内容，否则wp-cron.php会拒绝执行。OK，大功告成！")])])])}),[],!1,null,null,null);o.default=n.exports}}]);