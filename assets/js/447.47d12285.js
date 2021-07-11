(window.webpackJsonp=window.webpackJsonp||[]).push([[447],{895:function(r,e,a){"use strict";a.r(e);var n=a(29),l=Object(n.a)({},(function(){var r=this,e=r.$createElement,a=r._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[a("ul",[a("li",[r._v("forEach() 没有返回值，当数组中元素是值类型，forEach绝对不会改变数组；当是引用类型，则可以改变数组 *\n")])]),r._v(" "),a("pre",{staticClass:"wp-block-code"},[a("code",[r._v('var arr1 = [{ name: "saqqdy", age: 200 }, { name: "nhkyxx", age: 300 }]\nvar arr2 = [1, 2, 3, 4]\narr1.forEach(el => {\n  el.age = el.age * 2\n}) // 值变了\narr2.forEach(el => {\n  el = el * 2\n}) // 值没变\nconsole.log(arr1, arr2, "forEach")')])]),r._v(" "),a("ul",[a("li",[r._v("map() 有返回值，创建新数组不代表不能用它改变原有数组，你用原有数组去承载就可以，另外记得return *\n")])]),r._v(" "),a("pre",{staticClass:"wp-block-code"},[a("code",[r._v('var arr3 = [1, 2, 3, 4, 5]\nvar arr4 = arr3.map(el => el * 2)\n// arr3 = arr3.map(el => el * 2)\nconsole.log(arr3, arr4, "map")')])]),r._v(" "),a("ul",[a("li",[r._v("filter() 有返回值，创建新数组不代表不能用它改变原有数组，你用原有数组去承载就可以，记得return *\n")])]),r._v(" "),a("pre",{staticClass:"wp-block-code"},[a("code",[r._v('var arr5 = [1, 2, 3, 4, 5, 6]\nvar arr6 = arr5.filter(el => el > 3)\nconsole.log(arr5, arr6, "filter")')])]),r._v(" "),a("ul",[a("li",[r._v("sort() 会改变原数组，返回排序后的数组，默认排序按字母升序（更准确一些是根据字符串Unicode码点） *\n")])]),r._v(" "),a("pre",{staticClass:"wp-block-code"},[a("code",[r._v('var arr7 = [32, 55, 12, 2, 1, 5]\nvar arr8 = ["saqq", "nhkk", "12ddd", "333"]\nvar arr9 = arr7.sort()\nvar arr10 = arr8.sort()\nconsole.log(arr7, arr8, arr9, arr10, "sort")\n\nlet arr11 = [{ name: "鸣人", age: 16 }, { name: "卡卡西", age: 28 }, { name: "自来也", age: 50 }, { name: "佐助", age: 17 }]\narr11.sort((a, b) => {\n  return a.age - b.age\n})\nconsole.log(arr11)')])]),r._v(" "),a("ul",[a("li",[r._v("new Set()去重有点类似forEach方法，对于应用对象的值没办法去重 *\n")])]),r._v(" "),a("pre",{staticClass:"wp-block-code"},[a("code",[r._v('let arr12 = new Set([1, 2, 3, 4, 4, 4, 5])\nlet arr13 = new Set([1, 2, 3, "saqqdy", { a: 1 }, { b: 2 }])\nconsole.log(arr12)\narr12.add(4)\narr12.add(6)\nconsole.log(arr12)\nconsole.log(arr13)\narr13.add("saqqdy")\narr13.add({ a: 1 })\narr13.add({ a: 1 })\nconsole.log(arr13)')])]),r._v(" "),a("ul",[a("li",[r._v("总结： *\n")])]),r._v(" "),a("pre",{staticClass:"wp-block-code"},[a("code",[r._v('/**\n * every(function(el){}, thisVal)和some(function(el){}, thisVal)都是返回布尔值，some只要一个符合就立刻中断并返回true，every需要每个值都符合\n * find(function(el){}, thisVal)返回找到的第一个对象，findIndex(function(el){}, thisVal)返回找到的第一个对象的索引\n * slice(start, end)不会改变原数组，splice(index, howmany, newarr)会改变原数组\n * shift()pop()返回取到的值，push()unshift()返回新的数组长度\n * copyWithin(index, start, end)在现有数组内部进行拷贝\n * Object.entries(Object).forEach(([key, value]) => {})返回数组的可迭代对象\n * fill(xxx, start, end)\n * Array.from("saqqdy", (el, index) => {return el + \'_1\'}, thisVal)从字符串或者对象或数组创建数组\n * includes(xxx, fromIndex)返回布尔值\n * indexOf("fee", fromIndex) lastIndexOf("fee", fromIndex)返回索引\n * reduce(function(total, el, index, arr) {return total + el}, startVal) reduceRight()\n * Object.keys(obj/arr)\n */')])])])}),[],!1,null,null,null);e.default=l.exports}}]);