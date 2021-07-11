(window.webpackJsonp=window.webpackJsonp||[]).push([[1e3],{1429:function(e,n,t){"use strict";t.r(n);var i=t(29),a=Object(i.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("在上一文中提到了开启WordPress支持Gzip的方法，但是WordPress的JS和CSS文件默认是没有开启Gzip Compression压缩的，网上有关开启Gzip压缩的方法层出不穷，不过并不是所有方法都适用，都有一个严重的BUG，该死的IE6对Gzip的支持不是很好，如果对CSS、JS进行Gzip压缩，会使部分JS失效或者CSS无法加载，上岸QQ的鱼试了下，只要一启用Gzip，Wordpress就处于裸奔状态，CSS完全失效，而且还一大堆JS错误。下面介绍的这个方法不存在上面所述的问题。")]),e._v(" "),t("p",[e._v("需要开启WordPress的Gzip compression压缩功能进：《"),t("a",{attrs:{title:"开启WordPress的Gzip compression压缩功能",href:"http://www.saqqdy.com/computer-skills/open-wordpress-gzip-compression-function",target:"_blank"}},[e._v("开启WordPress的Gzip compression压缩功能")]),e._v("》")]),e._v(" "),t("p",[e._v("在你网站的根目录下新建立一文件夹wp-cache，用来存放Gzip压缩文件，请确保该文件夹权限为可读写，即：权限值为777。")]),e._v(" "),t("p",[e._v("在你网站的** 根目录 **下新建一名字为gzip.php的文件，代码如下。")]),e._v(" "),t("blockquote",[e._v("\n<?php\n")]),e._v(" "),t("p",[e._v("define('ABSPATH', dirname("),t("strong",[e._v("FILE")]),e._v(").'/');\n$cache = true;//Gzip压缩开关\n$cachedir = 'wp-cache/';//存放gz文件的目录，确保可写\n$gzip = strstr($_SERVER['HTTP_ACCEPT_ENCODING'], 'gzip');\n$deflate = strstr($_SERVER['HTTP_ACCEPT_ENCODING'], 'deflate');\n$encoding = $gzip ? 'gzip' : ($deflate ? 'deflate' : 'none');\nif(!isset($_SERVER['QUERY_STRING']))\nexit();\n$key=array_shift(explode('?', $_SERVER['QUERY_STRING']));\n$key=str_replace('../','',$key);\n$filename=ABSPATH.$key;\n$symbol='^';\n$rel_path=str_replace(ABSPATH,'',dirname($filename));\n$namespace=str_replace('/',$symbol,$rel_path);\n$cache_filename = ABSPATH.$cachedir.$namespace.$symbol.basename($filename).'.gz';//生成gz文件路径\n$type=\"Content-type: text/html\"; //默认的类型信息\n$ext = array_pop(explode('.', $filename));//根据后缀判断文件类型信息\nswitch ($ext)\n{\ncase 'css':\n$type=\"Content-type: text/css\";\nbreak;\ncase 'js':\n$type=\"Content-type: text/javascript\";\nbreak;\ndefault:\nexit();\n}\nif($cache)\n{\nif(file_exists($cache_filename)){//假如存在gz文件\n$mtime = filemtime($cache_filename);\n$gmt_mtime = gmdate('D, d M Y H:i:s', $mtime) . ' GMT';\nif( (isset($_SERVER['HTTP_IF_MODIFIED_SINCE']) && array_shift(explode(';', $_SERVER['HTTP_IF_MODIFIED_SINCE'])) ==? $gmt_mtime))\n{\n// 浏览器cache中的文件修改日期是否一致，将返回304\nheader (\"HTTP/1.1 304 Not Modified\");\nheader(\"Expires: \");\nheader(\"Cache-Control: \");\nheader(\"Pragma: \");\nheader($type);\nheader(\"Tips: Cache Not Modified (Gzip)\");\nheader ('Content-Length: 0');\n}\nelse\n{\n//读取gz文件输出\n$content = file_get_contents($cache_filename);\nheader(\"Last-Modified:\" . $gmt_mtime);\nheader(\"Expires: \");\nheader(\"Cache-Control: \");\nheader(\"Pragma: \");\nheader($type);\nheader(\"Tips: Normal Respond (Gzip)\");\nheader(\"Content-Encoding: gzip\");\necho $content;\n}\n}\nelse if(file_exists($filename))\n{ //没有对应的gz文件\n$mtime = mktime();\n$gmt_mtime = gmdate('D, d M Y H:i:s', $mtime) . ' GMT';\n$content = file_get_contents($filename);//读取文件\n$content = gzencode($content, 9, $gzip ? FORCE_GZIP : FORCE_DEFLATE);//压缩文件内容\nheader(\"Last-Modified:\" . $gmt_mtime);\nheader(\"Expires: \");\nheader(\"Cache-Control: \");\nheader(\"Pragma: \");\nheader($type);\nheader(\"Tips: Build Gzip File (Gzip)\");\nheader (\"Content-Encoding: \" . $encoding);\nheader ('Content-Length: ' . strlen($content));\necho $content;\nif ($fp = fopen($cache_filename, 'w'))\n{//写入gz文件，供下次使用\nfwrite($fp, $content);\nfclose($fp);\n}\n}\nelse\n{\nheader(\"HTTP/1.0 404 Not Found\");\n}\n}\nelse\n{ //处理不使用Gzip模式下的输出。原理基本同上\nif(file_exists($filename))\n{\n$mtime = filemtime($filename);\n$gmt_mtime = gmdate('D, d M Y H:i:s', $mtime) . ' GMT';\nif( (isset($_SERVER['HTTP_IF_MODIFIED_SINCE']) && array_shift(explode(';', $_SERVER['HTTP_IF_MODIFIED_SINCE'])) ==? $gmt_mtime))\n{\nheader (\"HTTP/1.1 304 Not Modified\");\nheader(\"Expires: \");\nheader(\"Cache-Control: \");\nheader(\"Pragma: \");\nheader($type);\nheader(\"Tips: Cache Not Modified\");\nheader ('Content-Length: 0');\n}\nelse\n{\nheader(\"Last-Modified:\" . $gmt_mtime);\nheader(\"Expires: \");\nheader(\"Cache-Control: \");\nheader(\"Pragma: \");\nheader($type);\nheader(\"Tips: Normal Respond\");\n$content = readfile($filename);\necho $content;\n}\n}\nelse\n{\nheader(\"HTTP/1.0 404 Not Found\");\n}\n}\n?>\n在你网站的根目录下的.htaccess中添加以下代码，如果.htaccess不存在请新建一个。")]),e._v(" "),t("blockquote",[t("p",[e._v("RewriteCond %{HTTP:User-Agent} !MSIE\\ [5-6]\nRewriteRule (."),t("em",[e._v(".css$'.")]),e._v(".js$) gzip.php?$1 [L]\n这段代码的意思是判断当前浏览器是否为IE5-6（虽然现在很少人用IE5，不过为保险起见还是加上吧），如果不是则对CSS/JS启用Gzip压缩。\n至此，任务已完成。不出意外的话，经过这么一番折腾，你的Wordpress性能应该能提升2个档次。可用Firefox插件YSlow来测试。\n或者你也可以使用百度统计，需要百度统计邀请码的进：《"),t("a",{attrs:{title:"上岸QQ的鱼发放百度统计邀请码",href:"http://www.saqqdy.com/news/saqqdy-baidu-tongji-invite-code",target:"_blank"}},[e._v("上岸QQ的鱼发放百度统计邀请码")]),e._v("》\n如果你的主机不支持Gzip，欢迎加入bluehost合租：《"),t("a",{attrs:{title:"上岸QQ的鱼寻找合租bluehost主机伙伴",href:"http://www.saqqdy.com/news/saqqdy-find-host-partners-sharing-bluehost",target:"_blank"}},[e._v("上岸QQ的鱼寻找合租bluehost主机伙伴")]),e._v("》")])])])}),[],!1,null,null,null);n.default=a.exports}}]);