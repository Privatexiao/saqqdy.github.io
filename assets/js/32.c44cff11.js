(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{465:function(e,t,a){"use strict";a.r(t);var n=a(29),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("ASP利用Jmail组件发送邮件其实很简单，估计有不少网友发不了邮件都是同一个原因：没有安装Jmail组件。Jmail组件并不是Windows系统自带的组件，这点要注意！")]),e._v(" "),a("p",[e._v("ASP利用Jmail组件发送邮件代码：")]),e._v(" "),a("blockquote",[a("p",[e._v('<%\nSet jmail = Server.CreateObject("JMAIL.Message")??? \'建立发送邮件的对象\njmail.silent = true??? \'屏蔽例外错误，返回FALSE跟TRUE两值\njmail.logging = true??? \'启用邮件日志\njmail.Charset = "GB2312"??? \'邮件的文字编码为国标\njmail.ContentType = "text/html"??? \'邮件的格式为HTML格式\njmail.AddRecipient "saqqdy@vip.qq.com"??? \'邮件收件人的地址\njmail.From = "saqqdy@qq.com"??? \'发件人的E-MAIL地址\njmail.MailServerUserName = "saqqdy"??? \'登录邮件服务器所需的用户名\njmail.MailServerPassword = "*******"??? \'登录邮件服务器所需的密码\njmail.Subject = "asp发送邮件！"??? \'邮件的标题\njmail.Body = "这封邮件是想告诉你：我的ASP通过SMTP发邮件功能已经搞定！！"??? \'邮件的内容\njmail.Priority = 3??? \'邮件的紧急程序，1为最快，5为最慢，3为默认值\njmail.Send("smtp.qq.com")??? \'执行邮件发送（通过邮件服务器地址）\njmail.Close()??? \'关闭对象\n%>\n当然，也可以将该代码写成程序来调用！详见《'),a("a",{attrs:{title:"ASP利用Jmail组件发送邮件函数形式",href:"http://www.saqqdy.com/computer-skills/asp-components-using-jmail-send-mail-function-in-the-form"}},[e._v("ASP利用Jmail组件发送邮件函数形式")]),e._v("》")])])])}),[],!1,null,null,null);t.default=i.exports}}]);