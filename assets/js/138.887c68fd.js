(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{568:function(t,e,s){"use strict";s.r(e);var p=s(29),o=Object(p.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("query_posts()函数结合适当的参数用来控制哪些文章会在页面上显示。")]),t._v(" "),s("p",[t._v('形如query_posts("cat=3,6&cat=-5,-10″)表示取分类ID为3和6的文章显示，不取分类ID为5和10的文章显示；\n形如query_posts("order=ASC&showposts=10&offset=1&orderby=date&posts_per_page=5″)意义如下：')]),t._v(" "),s("p",[t._v("order=ASC表示按照升序排列，取为DESC则表示按降序；\nshowposts=10则表示获取10篇文章；\noffset=1表示取最新的文章；\norderby=date表示将文章按照日期排序；\nposts_per_page=5表示每页显示5篇文章。")]),t._v(" "),s("p",[t._v("需要注意的是该函数只是将文章内容从MySQL数据库中查询出来，要将其显示，还需要与其他语句配合，比如一个经常在侧边栏中使用的形式如下：")]),t._v(" "),s("li",[s("h2",[t._v("最近文章")]),t._v("\n<?php query_posts('showposts=5&offset=1′); ?>\n"),s("ul",[t._v("\n<?php while (have_posts()) : the_post(); ?>\n"),s("li",[s("a",{attrs:{href:"<?php the_permalink(); ?>",title:"<?php the_title(); ?>"}},[t._v("<?php the_title(); ?>")])]),t._v("\n<?php endwhile;?>\n")])]),t._v(" "),s("p",[t._v("如上的这段代码用以在侧边栏的指定位置上显示最新的5篇文章。")]),t._v(" "),s("p",[t._v("query_posts()函数后面可以跟众多种类的参数，功能十分强大。")])])}),[],!1,null,null,null);e.default=o.exports}}]);