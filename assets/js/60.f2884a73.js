(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{488:function(e,p,t){"use strict";t.r(p);var n=t(29),s=Object(n.a)({},(function(){var e=this,p=e.$createElement,t=e._self._c||p;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("Wordpress内置了分页Nextpage功能，Nextpage功能使得篇幅较长的文章可以分页进行展示，非常方便，实用！在编辑较长的文章时，可以在想分页的地方加入<!- -nextpage- ->，就可以实现文章的分页显示了！在wordpress默认编辑器中，Nextpage功能标签是不显示的，也就是说，要实现文章分页显示，就必须自行在文章中添加<!- -nextpage- ->这句代码，相信很多懒人都不愿意这么做吧！")]),e._v(" "),t("p",[e._v("如果你不想每次输入nextpage代码的话，就按照我说的去做吧！要解开可视化编辑器或富文本编辑器的nextpage标签，进入wp安装目录下的\\wp-includes\\js\\tinymce，用文本编辑器打开tiny_mce_config.php。\n找到：** 'wp_more' "),t("strong",[e._v("，在")]),e._v(" 'wp_more' "),t("strong",[e._v("后面加上：")]),e._v(" 'wp_page' **，好了，大功告成！")]),e._v(" "),t("p",[e._v("当然，并不是所有主题都支持Nextpage功能，如果你的主题不支持Nextpage功能，您可以在single.php（文章模板页）的loop之间加入<?php wp_link_pages(); ?>这段代码！注：wordpress 2.1及以前版本请加入<?php link_pages(); ?>。")]),e._v(" "),t("p",[e._v("PS：以上修改方法或许不支持最新版本的wordpress 3.0.1，但是大致的修改思想是一样的！")])])}),[],!1,null,null,null);p.default=s.exports}}]);