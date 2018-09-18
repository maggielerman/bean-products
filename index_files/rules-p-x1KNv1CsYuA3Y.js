/*
 Quantcast measurement tag
 Copyright (c) 2008-2018, Quantcast Corp.
*/
(function(a,g,f){try{__qc("defaults",a,{labels:"_fp.event.Default"})}catch(l){}var k=function(e,c,a){return e?"nc"===e?!c||!a||0>c.indexOf(a):"eq"===e?c===a:"sw"===e?0===c.indexOf(a):"ew"===e?(e=c.length-a.length,c=c.lastIndexOf(a,e),-1!==c&&c===e):"c"===e?0<=c.indexOf(a):!1:!1},d=function(a,c,d){var b;if(g.top===g.self)b=f.location.pathname;else{b=f.referrer;var h=f.createElement("a");h.href=b;b=h.pathname}k(c,b,d)?a(b):a(!1)},b=function(a){return"array"==={}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase()?
{labels:a.join(",")}:{labels:""+a}};__qc.apply(null,["rules",[a,null,[[b,"_fp.event.News"]],[[d,"eq","/news"]]],[a,null,[[b,"_fp.event.Price"]],[[d,"eq","/price"]]],[a,null,[[b,"_fp.event.About"]],[[d,"eq","/about"]]],[a,null,[[b,"_fp.event.Blog"]],[[d,"eq","/blog/"]]],[a,null,[[b,"_fp.event.Reviews"]],[[d,"eq","/reviews"]]],[a,null,[[b,"_fp.event.Breathe"]],[[d,"eq","/breathe"]]],[a,null,[[b,"_fp.event.Technology"]],[[d,"eq","/technology"]]],[a,null,[[b,"_fp.event.Product"]],[[d,"eq","/product"]]],
[a,null,[[b,"_fp.event.Homepage"]],[[d,"eq","/"]]]])})("p-x1KNv1CsYuA3Y",window,document);