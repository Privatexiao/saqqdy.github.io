(window.webpackJsonp=window.webpackJsonp||[]).push([[900],{1329:function(e,t,r){"use strict";r.r(t);var a=r(29),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("请参照"),r("a",{attrs:{href:"http://www.saqqdy.com/untitled/start-mac-apache-service-for-php"}},[e._v("《5分钟学会开启MAC系统内置APACHE服务》")]),e._v("先开启apache服务\n")]),e._v(" "),r("p",[e._v("开启rewrite："),r("br"),e._v("在apache网站目录创建.htaccess文件：touch .htaccess"),r("br"),e._v("加入以下内容\n")]),e._v(" "),r("blockquote",{staticClass:"wp-block-quote"},[r("IfModule",{attrs:{"mod_rewrite.c":""}},[r("br"),e._v("RewriteEngine On"),r("br"),e._v("RewriteBase /"),r("br"),e._v("RewriteRule ^index.html$ - [L]"),r("br"),e._v("RewriteCond %{REQUEST_FILENAME} !-f"),r("br"),e._v("RewriteCond %{REQUEST_FILENAME} !-d"),r("br"),e._v("RewriteRule . /index.html [L] "),r("br")]),r("br")],1),e._v(" "),r("p",[e._v("然后把/etc/apache2/httpd.conf文件里面所有的AllowOverride none改成AllowOverride all"),r("br"),e._v("重启服务：sudo /usr/sbin/apachectl restart"),r("br"),e._v("大功告成！\n")])])}),[],!1,null,null,null);t.default=n.exports}}]);