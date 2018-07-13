
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"265",
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return{ecommerce:{checkout:{actionField:{step:2}}}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return{ecommerce:{checkout:{actionField:{step:3}}}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return{ecommerce:{checkout:{actionField:{step:2}}}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return{ecommerce:{checkout:{actionField:{step:3}}}}})();"]
    },{
      "function":"__d",
      "vtp_elementSelector":"html",
      "vtp_attributeName":"lang",
      "vtp_selectorType":"CSS"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"X-DR-LOCALE"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"Locale"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=[\"fr\",\"de\"],b=",["escape",["macro",4],8,16],"||",["escape",["macro",5],8,16],"||",["escape",["macro",6],8,16],",c=b\u0026\u0026b.split(\"_\")[0];return(a=a.some(function(a){return a===c}))?\",\":\".\"})();"]
    },{
      "function":"__u",
      "vtp_component":"PATH"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",8],8,16],".split(\"\/\")[1];switch(a){case \"de\":case \"fr\":case \"eu\":a=\",\";break;case \"us\":case \"uk\":case \"cn\":case \"tw\":case \"ca\":case \"anz\":case \"jp\":case \"hk\":a=\".\";break;default:a=\".\"}return a})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"SiteID"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"htcus\"===",["escape",["macro",10],8,16],"?\"en_US\":\"fr_FR\";a=",["escape",["macro",6],8,16],"||a;a=a.split(\"_\")[0];return\"en\"===a?\".\":\",\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",8],8,16],".split(\"\/\")[1];switch(a){case \"de\":case \"fr\":case \"eu\":a=\"EUR\";break;case \"uk\":a=\"GBP\";break;case \"us\":case \"anz\":case \"au\":case \"nz\":case \"hk\":a=\"USD\";break;case \"ca-fr\":case \"ca\":a=\"CAD\";break;case \"jp\":a=\"JPY\";break;case \"cn\":a=\"RMB\";break;case \"tw\":a=\"TWD\";break;default:a=\"USD\"}return a})();"]
    },{
      "function":"__u",
      "vtp_component":"URL"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={event:\"detail\",ecommerce:{detail:{actionField:{list:",["escape",["macro",13],8,16],"},products:[{id:\"VIVE\",name:\"VIVE\"}]}}};return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=!0,a=",["escape",["macro",6],8,16],"||",["escape",["macro",5],8,16],";if(\"en_GB\"===a||\"de_CH\"===a||\"no_NO\"===a)b=!1;return b?\",\":\".\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",13],8,16],";return a=(a=a.match(\/store\\.(\\w+)\\.(htcvive|vive)+\\.com\/))?a[1]:\"us\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=\".\",d=new RegExp(\"[^0-9\"+c+\"]\",[\"g\"]),a=$(\"#order_total\")\u0026\u0026$(\"#order_total\").text()||0,b=$(\"[data-hook\\x3dorder_details] tbody\");a=parseFloat((\"\"+a).replace(\/\\((.*)\\)\/,\"-$1\").replace(d,\"\").replace(c,\".\"));var g=[];a=\"JPY\";a={event:\"checkout\",ecommerce:{currencyCode:a,checkout:{actionField:{step:2},products:[]}}};b=$(b).find(\"tr[data-hook\\x3dorder_details_line_item_row]\");$.each(b,function(a,b){var e=$(b).find(\"[data-hook\\x3dorder_item_price]\").text();e=parseFloat((\"\"+e).replace(\/\\((.*)\\)\/,\n\"-$1\").replace(d,\"\").replace(c,\".\"));var h=$(b).find(\"[data-hook\\x3dorder_item_name]\").text(),f=$(b).find(\"[data-hook\\x3dorder_item_qty]\").text();f=parseFloat((\"\"+f).replace(\/\\((.*)\\)\/,\"-$1\").replace(d,\"\").replace(c,\".\"));g.push({name:h,id:h,price:e,brand:\"hTC VIVE\",quantity:parseInt(f,10)})});a.ecommerce.checkout.products=g;return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(d,e,f,b,c){if(d\u0026\u0026e){b=b?\"; path\\x3d\"+b:\"\";c=c?\"; domain\\x3d\"+c:\"\";var a=\"\";f\u0026\u0026(a=new Date,a.setTime(a.getTime()+f),a=\"; expires\\x3d\"+a.toUTCString());document.cookie=d+\"\\x3d\"+e+a+b+c}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b,a){var c=new RegExp(\"[^0-9\"+a+\"]\",[\"g\"]);return parseFloat((\"\"+b).replace(\/\\((.*)\\)\/,\"-$1\").replace(c,\"\").replace(a,\".\"))}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){return a?a.trim():\"\"}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=0;-1\u003Clocation.pathname.indexOf(\"\/eu\/\")?a=2116:-1\u003Clocation.pathname.indexOf(\"\/fr\/\")?a=2116:-1\u003Clocation.pathname.indexOf(\"\/de\/\")?a=2116:-1\u003Clocation.pathname.indexOf(\"\/uk\/\")\u0026\u0026(a=2116);return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=0;-1\u003Clocation.pathname.indexOf(\"\/eu\/\")?a=7320:-1\u003Clocation.pathname.indexOf(\"\/fr\/\")?a=7318:-1\u003Clocation.pathname.indexOf(\"\/de\/\")?a=7318:-1\u003Clocation.pathname.indexOf(\"\/uk\/\")\u0026\u0026(a=7319);return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"\";try{var b=",["escape",["macro",8],8,16],",d=\/\\w+\\\/accessory\\\/([\\w\\-]+)\/,c=b.match(d);a=0\u003Cc.length?c[1]:b}catch(e){}return a})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",24],8,16],";return a=$(a).siblings(\".product-name\").text()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",24],8,16],";return a=$(a).parent().attr(\"data-pid\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){var b=window.location.pathname.split(\"\/\");return b[a]?\"\/\"+b[a]+\"\/\":\"\"}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=\".\",d=new RegExp(\"[^0-9\"+c+\"]\",[\"g\"]),a=$(\".order-total\")\u0026\u0026$(\".order-total\").text()||0,b=$(\"#cart-detail #line_items\");a=parseFloat((\"\"+a).replace(\/\\((.*)\\)\/,\"-$1\").replace(d,\"\").replace(c,\".\"));var g=[];a=\"JPY\";a={event:\"checkout\",ecommerce:{currencyCode:a,checkout:{actionField:{step:1},products:[]}}};b=$(b).find(\".line-item\");$.each(b,function(a,b){var h=$(b).attr(\"data-sku\"),e=$(b).find(\"[data-hook\\x3dcart_item_price]\").text();e=parseFloat((\"\"+e).replace(\/\\((.*)\\)\/,\"-$1\").replace(d,\n\"\").replace(c,\".\"));var f=$(b).find(\"[data-hook\\x3dcart_item_quantity] select\").val();f=parseFloat((\"\"+f).replace(\/\\((.*)\\)\/,\"-$1\").replace(d,\"\").replace(c,\".\"));g.push({name:h,id:h,price:e,brand:\"hTC VIVE\",quantity:parseInt(f,10)})});a.ecommerce.checkout.products=g;return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=\"\",c=\"\";try{var a=jQuery(",["escape",["macro",24],8,16],");b=a.attr(\"data-gtm-label\")||a.attr(\"data-event-label\");c=a.attr(\"data-gtm-medium\")||\"\";if(\"Carousel\"===b){var d=a.closest(\"section\").find(\".owl-controls .owl-page\")?a.closest(\"section\").find(\".owl-controls .owl-page\"):a.closest(\"section\").find(\".owl-controls .owl-dot\"),e=a.closest(\"section\").find(\".owl-controls .owl-page.active\")?a.closest(\"section\").find(\".owl-controls .owl-page.active\"):a.closest(\"section\").find(\".owl-controls .owl-dot.active\"),\nf=NaN!==parseInt(d.index(e))?d.index(e)+1:\"\";b=b+\"_\"+f}c\u0026\u0026(b=b+\"__\"+c)}catch(g){}return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"\";try{var b=jQuery(",["escape",["macro",24],8,16],");a=b.attr(\"data-gtm-campaign\")}catch(c){}return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"\";try{var b=jQuery(",["escape",["macro",24],8,16],");a=b.attr(\"data-gtm-label\")||b.attr(\"data-event-label\");var c=b.parents(\".slick-slide\"),d=c[0]?c[0].getAttribute(\"data-slick-index\"):\"-1\";a=a+\"_\"+d}catch(e){}return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.getElementById(\"js-stay-updated-input\");return a.value||\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",24],8,16],";return a=a\u0026\u0026a.dataset\u0026\u0026a.dataset.title})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=!1;-1!=location.pathname.indexOf(\"\/de\/\")\u0026\u0026(a=!0);return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(",["escape",["macro",24],8,16],");return a=a.parent(\"form\").attr(\"action\")})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"dr-htc-locale-info"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$.parseJSON(\"",["escape",["macro",36],7],"\");return a.fiterCountry})();"]
    },{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_component":"HOST"
    },{
      "function":"__c",
      "vtp_value":"htc.com,degica.com, htcvr.com, htcsense.com, htctouch.com, vivestore.co.kr, viveport.com"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",27],8,16],"(1)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",27],8,16],"(2)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",27],8,16],"(3)})();"]
    },{
      "function":"__c",
      "vtp_value":"UA-78366313-4"
    },{
      "function":"__c",
      "vtp_value":"UA-78366313-9"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",39],
      "vtp_defaultValue":["macro",44],
      "vtp_map":["list",["map","key","stage-www.vive.com","value",["macro",45]],["map","key","www.vive.com","value",["macro",44]],["map","key","qa-www.vive.com","value",["macro",45]],["map","key","dev-www.vive.com","value",["macro",45]]]
    },{
      "function":"__c",
      "vtp_value":"UA-78366313-5"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",39],
      "vtp_defaultValue":["macro",47],
      "vtp_map":["list",["map","key","stage-www.vive.com","value",["macro",45]],["map","key","www.vive.com","value",["macro",47]],["map","key","qa-www.vive.com","value",["macro",45]],["map","key","dev-www.vive.com","value",["macro",45]]]
    },{
      "function":"__c",
      "vtp_value":"UA-78366313-1"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",39],
      "vtp_defaultValue":["macro",49],
      "vtp_map":["list",["map","key","stage-www.vive.com","value",["macro",45]],["map","key","www.vive.com","value",["macro",49]],["map","key","qa-www.vive.com","value",["macro",45]],["map","key","dev-www.vive.com","value",["macro",45]],["map","key","stage-discover.vive.com","value",["macro",45]],["map","key","dev-us.vive.com","value",["macro",45]],["map","key","blog.vive.com","value",["macro",49]],["map","key","community.viveport.com","value",["macro",49]],["map","key","cms.vive.com","value",["macro",45]],["map","key","stage-web.vive.com","value",["macro",45]],["map","key","developer.viveport.com","value",["macro",49]],["map","key","estore.htc.com","value",["macro",49]],["map","key","eshop.htc.com","value",["macro",49]]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){return a=\"cn\"==a?",["escape",["macro",46],8,16],":\"vive.com-2\"==a?",["escape",["macro",48],8,16],":",["escape",["macro",50],8,16],"}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",51],8,16],"()})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"X-DR-CURRENCY"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_defaultValue":"EUR",
      "vtp_map":["list",["map","key","en_GB","value","GBP"],["map","key","de_CH","value","CHF"],["map","key","no_NO","value","NOK"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_defaultValue":"USD",
      "vtp_map":["list",["map","key","en_CA","value","CAD"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",10],
      "vtp_defaultValue":"USD",
      "vtp_map":["list",["map","key","htcemea","value",["macro",55]],["map","key","htcus","value",["macro",56]]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=",["escape",["macro",13],8,16],",b=",["escape",["macro",8],8,16],".split(\"\/\"),c=b[2],d=a.match(\/store\\.(\\w+)\\.(htcvive|vive)+\\.com\/),e=a.match(\/gc\\.digitalriver\\.com\/);return\"accessory\"===c?",["escape",["macro",12],8,16],":d||e?",["escape",["macro",54],8,16],"||",["escape",["macro",57],8,16],":\"USD\"}catch(f){console.log(f)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",58],8,16],";return a={event:\"add\",ecommerce:{currencyCode:a,add:{products:[{id:\"HTC Vive\",name:\"HTC Vive\",quantity:1,price:0}]}}}})();"]
    },{
      "function":"__c",
      "vtp_value":["macro",52]
    },{
      "function":"__c",
      "vtp_value":"htcvive.com, vive.com"
    },{
      "function":"__c",
      "vtp_value":"UA-78366313-2"
    },{
      "function":"__c",
      "vtp_value":"UA-78366313-3"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=",["escape",["macro",13],8,16],",b=",["escape",["macro",8],8,16],".split(\"\/\"),c=b[2],d=a.match(\/store\\.(\\w+)\\.(htcvive|vive)+\\.com\/),e=a.match(\/gc\\.digitalriver\\.com\/),f=a.match(\/htcemea\/);a=",["escape",["macro",16],8,16],";return\"accessory\"===c?",["escape",["macro",9],8,16],":d||e?\"eu\"===a||f?",["escape",["macro",15],8,16],":\".\":\".\"}catch(g){console.log(g)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",64],8,16],",c=new RegExp(\"[^0-9\"+a+\"]\",[\"g\"]),b=$(\".price-block\")\u0026\u0026$(\".price-block\").text()||0,d=",["escape",["macro",58],8,16],";b=parseFloat((\"\"+b).replace(\/\\((.*)\\)\/,\"-$1\").replace(c,\"\").replace(a,\".\"));return a={event:\"add\",ecommerce:{currencyCode:d,add:{products:[{id:\"\"+$(\".accessory-default-skuid\")[0].value||\"000000\",name:\"\"+$(\".detail-container \\x3e section.accessory-info-container .desc-block \\x3e h2\").text(),quantity:$(\"#quantity\").val(),price:b}]}}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",51],8,16],"(\"cn\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",64],8,16],",a=$(\"#dr_orderNumber p\")\u0026\u0026$(\"#dr_orderNumber p\").text()\u0026\u0026$(\"#dr_orderNumber p\").text()||\"00000000\";a=",["escape",["macro",19],8,16],"(a,c);a=$(\".cart-total\")\u0026\u0026$(\".cart-total\").text()\u0026\u0026$(\".cart-total\").text()||0;a=",["escape",["macro",19],8,16],"(a,c);var f=[];a=",["escape",["macro",58],8,16],";a={event:\"checkout\",ecommerce:{currencyCode:a,checkout:{actionField:{step:1},products:[]}}};var h=$(\"#dr_cartTbl \\x3e tbody \\x3e tr\");$.each(h,function(a,b){var d=$(b).find(\".dr_price\")\u0026\u0026$(b).find(\".dr_price\").text()||\n0;d=",["escape",["macro",19],8,16],"(d,c);var g=$(b).find(\".cart-product-name h4\")\u0026\u0026$(b).find(\".cart-product-name h4\").text()||\"ERROR - Can't find Product Name\",e=$(b).find(\".dr_qtyInput\")\u0026\u0026$(b).find(\".dr_qtyInput\").val()||$(b).find(\"#nonUpdateableQty\")\u0026\u0026$(b).find(\"#nonUpdateableQty\").text()||0;e=",["escape",["macro",19],8,16],"(e,c);f.push({name:g,id:g,price:d,brand:\"hTC VIVE\",quantity:e})});a.ecommerce.checkout.products=f;return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",64],8,16],",c=new RegExp(\"[^0-9\"+b+\"]\",[\"g\"]),a=$(\"#dr_thankYouElementContainer .dr_orderTotal\");a=a\u0026\u0026a.length\u0026\u0026a[0]\u0026\u0026$(a[0]).text()\u0026\u0026$(a[0]).text()||0;a=parseFloat((\"\"+a).replace(\/\\((.*)\\)\/,\"-$1\").replace(c,\"\").replace(b,\".\"));b=$(\"#dr_orderNumber\")\u0026\u0026$(\"#dr_orderNumber\").text()\u0026\u0026$(\"#dr_orderNumber\").text()||\"00000000\";c=",["escape",["macro",58],8,16],";return a={ecommerce:{event:\"checout\",currencyCode:c,checkout:{actionField:{id:b,revenue:a,step:4}}}}})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b={};try{var c=",["escape",["macro",64],8,16],",a=$(\".price-block\")\u0026\u0026$(\".price-block\").text()||0,d=",["escape",["macro",58],8,16],";a=",["escape",["macro",19],8,16],"(a,c);b={event:\"detail\",ecommerce:{currencyCode:d,detail:{products:[{id:\"\"+$(\".accessory-default-skuid\")[0].value||window.location.pathname,name:\"\"+$(\".detail-container \\x3e section.accessory-info-container .desc-block \\x3e h2\").text()||window.location.pathname,quantity:$(\"#quantity\").val(),price:a}]}}}}catch(e){}return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var e=",["escape",["macro",64],8,16],",a=$(\"#dr_thankYouElementContainer .dr_orderTotal\");a=a\u0026\u0026a.length\u0026\u0026a[0]\u0026\u0026$(a[0]).text()\u0026\u0026$(a[0]).text()||0;a=",["escape",["macro",19],8,16],"(a,e);var b=$(\"#dr_orderNumber\")\u0026\u0026$(\"#dr_orderNumber\").text()\u0026\u0026$(\"#dr_orderNumber\").text()||\"00000000\";b=",["escape",["macro",19],8,16],"(b,e);var f=",["escape",["macro",58],8,16],",h=[],g=",["escape",["macro",16],8,16],",k=$(\"#dr_productTbl tbody tr\");$.each(k,function(a,c){var d=$(c).find(\".dr_productName\")\u0026\u0026$(c).find(\".dr_productName\").clone()||\"ERROR - Can't find Product Name\";\nd=$(d).find(\"ul\").empty().parent().text();var b=$(c).find(\".dr_qty\")\u0026\u0026$(c).find(\".dr_qty\").text()||0;b=",["escape",["macro",19],8,16],"(b,e);h.push({name:d.trim(),id:d.trim(),brand:\"hTC VIVE\",quantity:b})});\"ap\"==g\u0026\u0026165E3\u003C=a\u0026\u0026100\u003EitemQuantity\u0026\u0026(f=\"JPY\",g=\"jp BE\");return a={ecommerce:{event:\"purchase\",currencyCode:f,purchase:{actionField:{id:g+\" - \"+f+\" \"+b,revenue:a},products:h}}}})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",39],
      "vtp_defaultValue":"NTD",
      "vtp_map":["list",["map","key","eshop.htc.com","value","CNY"],["map","key","estore.htc.com","value","NTD"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=\".\",a=$(\"#returnOrderPay\").text()||0;a=",["escape",["macro",19],8,16],"(a,b);b=$(\"#returnOrderId\").text()||\"00000000\";var c=",["escape",["macro",74],8,16],";return a={ecommerce:{event:\"checout\",currencyCode:c,checkout:{actionField:{id:\"CN - \"+c+\" \"+b,revenue:a,step:4}}}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var f=\".\",c=$(\"#line-items[data-hook\\x3dorder_details]\"),e=$(c[0]).attr(\"data-total\"),a=$(\"#line-items[data-hook\\x3dorder_details] tbody\");c=$(c[0]).attr(\"data-number\");e=",["escape",["macro",19],8,16],"(e,f);var g=[],b=\"JPY\";b={event:\"purchase\",ecommerce:{currencyCode:b,purchase:{actionField:{id:\"\",tax:0,shipping:0,revenue:0},products:[]}}};a=$(a).find(\"tr[data-hook\\x3dorder_details_line_item_row]\");$.each(a,function(b,a){var c=$(a).find(\"[data-hook\\x3dorder_item_price]\").text();c=",["escape",["macro",19],8,16],"(c,\nf);var e=$(a).find(\"[data-hook\\x3dorder_item_description]\").text(),d=$(a).find(\"[data-hook\\x3dorder_item_qty]\").text();d=",["escape",["macro",19],8,16],"(d,f);g.push({name:",["escape",["macro",20],8,16],"(e),id:",["escape",["macro",20],8,16],"(e),price:c,brand:\"hTC VIVE\",quantity:parseInt(d,10)})});a=$(\"#order-charges \\x3e tr:nth-child(1)\").text();a=",["escape",["macro",19],8,16],"(a,f);var d=$(\"#order-charges \\x3e tr:nth-child(2)\").text();d=",["escape",["macro",19],8,16],"(d,f);b.ecommerce.purchase.actionField.tax=a;b.ecommerce.purchase.actionField.shipping=\nd;b.ecommerce.purchase.actionField.id=\"jp - JPY \"+c;b.ecommerce.purchase.actionField.revenue=e;b.ecommerce.purchase.products=g;return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",24],8,16],";a=$(a).siblings(\".sales-price-block\").text();return ",["escape",["macro",19],8,16],"(a,",["escape",["macro",9],8,16],")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",24],8,16],";a=$(a).siblings(\".quantity\").text();return ",["escape",["macro",19],8,16],"(a,",["escape",["macro",9],8,16],")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",25],8,16],",b=",["escape",["macro",26],8,16],",c=",["escape",["macro",77],8,16],",d=",["escape",["macro",78],8,16],";return{ecommerce:{remove:{products:[{name:a,id:b,price:c,quantity:d}]}}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",74],8,16],";b={event:\"checkout\",ecommerce:{currencyCode:b,checkout:{actionField:{step:1},products:[]}}};var e=\".\",f=[],h=new RegExp(\"[^0-9\"+e+\"]\",[\"g\"]),c=$(\"table \\x3e tbody \\x3e tr.cart_item\");$.each(c,function(b,a){var d=$(a).find(\"td\")[2]\u0026\u0026$(a).find(\"td\")[2].innerText||0;d=parseFloat((\"\"+d).replace(\/\\((.*)\\)\/,\"-$1\").replace(h,\"\").replace(e,\".\"));var g=$(a).find(\"td.col-sm-5.col-xs-8 \\x3e span\")\u0026\u0026$(a).find(\"td.col-sm-5.col-xs-8 \\x3e span\").text()||\"ERROR - Can't find Product Name\",\nc=$(a).find(\"[id^\\x3dcatalogEntry_name_]\")\u0026\u0026$(a).find(\"[id^\\x3dcatalogEntry_name_]\").attr(\"id\").split(\"catalogEntry_name_\")[1]||g,k=$(a).find(\"td:nth-child(5) \\x3e div \\x3e input\")\u0026\u0026$(a).find(\"td:nth-child(5) \\x3e div \\x3e input\").val()\u0026\u0026$(a).find(\"td:nth-child(5) \\x3e div \\x3e input\").val().replace(\/[^\\.\\d]+\/g,\"\")||-1;f.push({name:g.replace(\/[\\n\\s\\r\\t]+\/g,\"\"),id:c,price:d,brand:\"hTC VIVE\",quantity:parseInt(k,10)})});b.ecommerce.checkout.products=f;return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=\".\",a=$(\"#returnOrderPay\").text()||0;a=",["escape",["macro",19],8,16],"(a,b);b=$(\"#returnOrderId\").text()||\"00000000\";var c=",["escape",["macro",74],8,16],";return a={ecommerce:{event:\"purchase\",currencyCode:c,purchase:{actionField:{id:\"CN - \"+c+\" \"+b,revenue:a}}}}})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",51],8,16],"(\"vive.com-2\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=\".\",a=$(\"#order_total\")\u0026\u0026$(\"#order_total\").text()||0,b=$(\"#checkout-summary [data-hook\\x3dorder_details] tbody\");a=",["escape",["macro",19],8,16],"(a,c);var g=[];a=\"JPY\";a={event:\"checkout\",ecommerce:{currencyCode:a,checkout:{actionField:{step:3},products:[]}}};b=$(b).find(\"tr[data-hook\\x3dorder_details_line_item_row]\");$.each(b,function(a,b){var e=$(b).find(\"[data-hook\\x3dorder_item_price]\").text();e=",["escape",["macro",19],8,16],"(e,c);var d=$(\"#order-charges \\x3e tr:nth-child(1)\").text();",["escape",["macro",19],8,16],"(d,\nc);d=$(b).find(\"[data-hook\\x3dorder_item_name]\").text();var f=$(b).find(\"[data-hook\\x3dorder_item_qty]\").text();f=",["escape",["macro",19],8,16],"(f,c);g.push({name:",["escape",["macro",20],8,16],"(d),id:",["escape",["macro",20],8,16],"(d),price:e,brand:\"hTC VIVE\",quantity:parseInt(f,10)})});a.ecommerce.checkout.products=g;return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var d=\".\",a=$(\"#line-items[data-hook\\x3dorder_details]\"),b=$(a[0]).attr(\"data-total\"),c=$(\"#line-items[data-hook\\x3dorder_details] tbody\");a=$(a[0]).attr(\"data-number\");b=",["escape",["macro",19],8,16],"(b,d);var f=[],h=\"JPY\";b={event:\"checkout\",ecommerce:{currencyCode:h,checkout:{actionField:{step:4,id:a,revenue:b},products:[]}}};c=$(c).find(\"tr[data-hook\\x3dorder_details_line_item_row]\");$.each(c,function(b,a){var c=$(a).find(\"[data-hook\\x3dorder_item_price]\").text();c=",["escape",["macro",19],8,16],"(c,\nd);var g=$(a).find(\"[data-hook\\x3dorder_item_description]\").text(),e=$(a).find(\"[data-hook\\x3dorder_item_qty]\").text();e=",["escape",["macro",19],8,16],"(e,d);f.push({name:",["escape",["macro",20],8,16],"(g),id:",["escape",["macro",20],8,16],"(g),price:c,brand:\"hTC VIVE\",quantity:parseInt(e,10)})});b.ecommerce.checkout.products=f;return b})();"]
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_stripWww":true,
      "vtp_varType":"URL",
      "vtp_component":"HOST"
    },{
      "function":"__dbg"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"attributes.distance"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"attributes.label"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":true,
      "vtp_varType":"ATTRIBUTE",
      "vtp_defaultValue":["macro",13],
      "vtp_attribute":"data-event-category"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":true,
      "vtp_varType":"ATTRIBUTE",
      "vtp_defaultValue":["macro",90],
      "vtp_attribute":"data-gtm-category"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-event-action"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":true,
      "vtp_varType":"ATTRIBUTE",
      "vtp_defaultValue":["macro",92],
      "vtp_attribute":"data-gtm-action"
    },{
      "function":"__u"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCategory"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","anonymizeIp","value",["macro",34]]],
      "vtp_useHashAutoLink":false,
      "vtp_autoLinkDomains":["macro",40],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",13]],["map","index","2","dimension",["macro",41]],["map","index","3","dimension",["macro",42]],["map","index","4","dimension",["macro",43]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",52],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLabel"
    },{
      "function":"__r"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",64],8,16],",a=$(\"#dr_thankYouElementContainer .dr_orderTotal\");a=a\u0026\u0026a.length\u0026\u0026a[0]\u0026\u0026$(a[0]).text()\u0026\u0026$(a[0]).text()||0;return a=",["escape",["macro",19],8,16],"(a,b)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",64],8,16],",a=$(\"#dr_orderNumber\")\u0026\u0026$(\"#dr_orderNumber\").text()\u0026\u0026$(\"#dr_orderNumber\").text()||\"00000000\";return a=",["escape",["macro",19],8,16],"(a,b)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"ecommerce.purchase.actionField.revenue"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",37],
      "vtp_defaultValue":"822680001",
      "vtp_map":["list",["map","key","en_gb","value","822680001"],["map","key","fr_fr","value","822705980"],["map","key","de_de","value","822705670"],["map","key","en_es","value","822705502"],["map","key","en_se","value","822705494"],["map","key","no_no","value","822679575"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",64],8,16],",a=$(\"#dr_thankYouElementContainer .dr_orderTotal\");a=a\u0026\u0026a.length\u0026\u0026a[0]\u0026\u0026$(a[0]).text()\u0026\u0026$(a[0]).text()||0;return a=",["escape",["macro",19],8,16],"(a,b)})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"_gid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={currency:",["escape",["macro",58],8,16],",value:",["escape",["macro",105],8,16],"};return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLabel"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=\".\",c=new RegExp(\"[^0-9\"+b+\"]\",[\"g\"]),a=$(\"#htc-main \\x3e div.cart_page.container \\x3e div.panel.panel-success \\x3e div.panel-body \\x3e div \\x3e div \\x3e div \\x3e div:nth-child(4) \\x3e h4 \\x3e span\");a=a\u0026\u0026a.length\u0026\u0026a[0]\u0026\u0026$(a[0]).text()\u0026\u0026$(a[0]).text()||0;a=parseFloat((\"\"+a).replace(\/\\((.*)\\)\/,\"-$1\").replace(c,\"\").replace(b,\".\"));b=$(\"#htc-main \\x3e div.cart_page.container \\x3e div.panel.panel-success \\x3e div.panel-body \\x3e div \\x3e div \\x3e div \\x3e div:nth-child(2) \\x3e h4 \\x3e span\").text()||\n\"00000000\";c=",["escape",["macro",74],8,16],";return a={ecommerce:{event:\"checout\",currencyCode:c,checkout:{actionField:{id:\"TW - \"+c+\" \"+b,revenue:a,step:4}}}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=\".\",c=new RegExp(\"[^0-9\"+b+\"]\",[\"g\"]),a=$(\"#htc-main \\x3e div.cart_page.container \\x3e div.panel.panel-success \\x3e div.panel-body \\x3e div \\x3e div \\x3e div \\x3e div:nth-child(3) \\x3e h4 \\x3e span\");a=a\u0026\u0026a.length\u0026\u0026a[0]\u0026\u0026$(a[0]).text()\u0026\u0026$(a[0]).text()||0;a=parseFloat((\"\"+a).replace(\/\\((.*)\\)\/,\"-$1\").replace(c,\"\").replace(b,\".\"));b=$(\"#htc-main \\x3e div.cart_page.container \\x3e div.panel.panel-success \\x3e div.panel-body \\x3e div \\x3e div \\x3e div \\x3e div:nth-child(2) \\x3e h4 \\x3e span\").text()||\n\"00000000\";c=\"",["escape",["macro",74],7],"\";return a={ecommerce:{event:\"purchase\",currencyCode:c,purchase:{actionField:{id:\"TW - \"+c+\" \"+b,revenue:a}}}}})();"]
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-gtm"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b={currency:\"USD\",value:0,content_type:\"VIVE Product\"};try{var c=",["escape",["macro",64],8,16],",a=$(\"#dr_thankYouElementContainer .dr_orderTotal\"),d=a\u0026\u0026a.length\u0026\u0026a[0]\u0026\u0026$(a[0]).text()\u0026\u0026$(a[0]).text()||0;d=",["escape",["macro",19],8,16],"(d,c);c=",["escape",["macro",58],8,16],";b.currency=c;b.value=d}catch(e){}return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c={currency:\"JPY\",value:0};try{var a=\".\",d=$(\"#line-items[data-hook\\x3dorder_details]\"),b=$(d[0]).attr(\"data-total\");b=",["escape",["macro",19],8,16],"(b,a);a=\"JPY\";c={currency:a,value:b}}catch(e){}return c})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",39],
      "vtp_map":["list",["map","key","www.vive.com","value",["macro",60]],["map","key","blog.vive.com","value",["macro",60]],["map","key","stage-web.vive.com","value",["macro",45]],["map","key","cms.vive.com","value",["macro",45]],["map","key","preview.vive.com","value",["macro",45]],["map","key","estore.htc.com","value",["macro",60]],["map","key","eshop.htc.com","value",["macro",60]]]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"utmCampaign"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":true,
      "vtp_varType":"ATTRIBUTE",
      "vtp_defaultValue":["macro",13],
      "vtp_attribute":"data-event-label"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__e"
    },{
      "function":"__r"
    },{
      "function":"__cid"
    },{
      "function":"__hid"
    }],
  "tags":[{
      "function":"__ua",
      "setup_tags":["list",["tag",196,0]],
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":["macro",40],
      "vtp_decorateFormsAutoLink":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"],["map","fieldName","allowLinker","value","true"],["map","fieldName","anonymizeIp","value",["macro",34]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","2","dimension",["macro",41]],["map","index","3","dimension",["macro",42]],["map","index","4","dimension",["macro",43]],["map","index","1","dimension",["macro",13]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",52],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":1
    },{
      "function":"__ua",
      "unlimited":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Added to Cart",
      "vtp_eventLabel":"Vive",
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",59],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",60],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":3
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":["macro",61],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",62],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":4
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":["macro",61],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",63],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":5
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Added to Cart",
      "vtp_eventLabel":"Accessory",
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",65],
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",60],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":12
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":["macro",40],
      "vtp_decorateFormsAutoLink":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"],["map","fieldName","allowLinker","value","true"]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",13]],["map","index","2","dimension",["macro",41]],["map","index","3","dimension",["macro",42]],["map","index","4","dimension",["macro",43]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",66],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":13
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Checkout - Step 1",
      "vtp_eventLabel":"Viewed Cart",
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",67],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",60],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":19
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Checkout - Step 2",
      "vtp_eventLabel":"Input Billing",
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",2],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",60],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":20
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Checkout - Step 3",
      "vtp_eventLabel":"Verified Order",
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",3],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",60],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":21
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Checkout - Step 4",
      "vtp_eventLabel":"Displayed Invoice",
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",68],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",60],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":22
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Checkout",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Paid",
      "vtp_eventLabel":"Paypal",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",60],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":26
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Checkout",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Applied",
      "vtp_eventLabel":"Coupon",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",60],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":27
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Checkout",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Viewed",
      "vtp_eventLabel":"Invoice",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",60],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":28
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Checkout",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Applied",
      "vtp_eventLabel":"Coupon",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",60],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":29
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Viewed Product",
      "vtp_eventLabel":"VIVE",
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",14],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",60],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":30
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Viewed Accessory",
      "vtp_eventLabel":["macro",23],
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",72],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",60],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":31
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Purchased",
      "vtp_eventLabel":"Success",
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",73],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",60],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":32
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Checkout - Step 2",
      "vtp_eventLabel":"Input shipping \u0026 verify order",
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",0],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",60],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":34
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Checkout - Step 3",
      "vtp_eventLabel":"Verified payment",
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",1],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",60],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":35
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Checkout - Step 4",
      "vtp_eventLabel":"Displayed Invoice",
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",75],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",44],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":36
    },{
      "function":"__ua",
      "live_only":true,
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Purchased",
      "vtp_eventLabel":"Success",
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",76],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",60],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":38
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Site Tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Signed In",
      "vtp_eventLabel":"Navigation",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",60],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":42
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Removed item from Cart",
      "vtp_eventLabel":["macro",25],
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",79],
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",60],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":43
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Checkout identity",
      "vtp_eventLabel":"As a Guest",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",60],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":44
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Checkout identity",
      "vtp_eventLabel":"Create account",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",60],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":45
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Checkout identity",
      "vtp_eventLabel":"Login as a customer",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",60],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":46
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Checkout entry",
      "vtp_eventLabel":"Mini-cart",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",60],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":47
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Checkout Step 1",
      "vtp_eventLabel":"Viewed Cart",
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",80],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",44],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":48
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Checkout - Step 2",
      "vtp_eventLabel":"Input shipping \u0026 verify order",
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",0],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",44],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":49
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Checkout - Step 3",
      "vtp_eventLabel":"Verified payment",
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",1],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",44],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":50
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Purchased",
      "vtp_eventLabel":"Success",
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",81],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",44],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":51
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Checkout - Step 4",
      "vtp_eventLabel":"Displayed Invoice",
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",75],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",60],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":53
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Purchased",
      "vtp_eventLabel":"Success",
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",81],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",60],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":54
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Checkout Step 1",
      "vtp_eventLabel":"Viewed Cart",
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",80],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",60],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":55
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Checkout Step 1.5",
      "vtp_eventLabel":"Viewed Cart [Confirm]",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",44],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":57
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Checkout Step 1.5",
      "vtp_eventLabel":"Viewed Cart [Confirm]",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",60],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":58
    },{
      "function":"__ua",
      "unlimited":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Added to Cart",
      "vtp_eventLabel":"Accessory",
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",65],
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",44],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":59
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Viewed Accessory",
      "vtp_eventLabel":["macro",23],
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",72],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",44],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":60
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Viewed Product",
      "vtp_eventLabel":"VIVE",
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",14],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",44],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":61
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":["macro",40],
      "vtp_decorateFormsAutoLink":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","cookieDomain","value","auto"]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",13]],["map","index","2","dimension",["macro",41]],["map","index","3","dimension",["macro",42]],["map","index","4","dimension",["macro",43]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",83],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":62
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Checkout - Step 1",
      "vtp_eventLabel":"Viewed Cart",
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",67],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",47],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":64
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Purchased",
      "vtp_eventLabel":"Success",
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",73],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",47],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":65
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Checkout - Step 2",
      "vtp_eventLabel":"Input Billing",
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",2],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",47],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":66
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Checkout - Step 3",
      "vtp_eventLabel":"Verified Order",
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",3],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",47],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":67
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Checkout - Step 4",
      "vtp_eventLabel":"Displayed Invoice",
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",68],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",47],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":68
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Viewed Accessory",
      "vtp_eventLabel":["macro",23],
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",72],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",47],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":69
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Viewed Product",
      "vtp_eventLabel":"VIVE",
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",14],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",47],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":70
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Header Bar",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Signed In",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",47],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":71
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Removed item from Cart",
      "vtp_eventLabel":["macro",25],
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",79],
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",47],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":72
    },{
      "function":"__ua",
      "unlimited":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Added to Cart",
      "vtp_eventLabel":"Vive",
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",59],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",47],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":73
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Checkout",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Paid",
      "vtp_eventLabel":"Paypal",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",47],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":74
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Checkout - Step 3",
      "vtp_eventLabel":"Verified payment",
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",1],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",47],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":78
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Checkout - Step 2",
      "vtp_eventLabel":"Input shipping \u0026 verify order",
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",0],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",47],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":79
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Checkout - Step 4",
      "vtp_eventLabel":"Displayed Invoice",
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",75],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",47],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":80
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Checkout Step 1.5",
      "vtp_eventLabel":"Viewed Cart [Confirm]",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",47],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":81
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Checkout Step 1",
      "vtp_eventLabel":"Viewed Cart",
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",80],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",47],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":82
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Purchased",
      "vtp_eventLabel":"Success",
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",81],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",47],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":83
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Checkout",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Viewed invoce",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",47],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":84
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Checkout entry",
      "vtp_eventLabel":"Mini-cart",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",47],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":85
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Checkout identity",
      "vtp_eventLabel":"As a Guest",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",47],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":86
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Checkout identity",
      "vtp_eventLabel":"Login as a customer",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",47],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":87
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Checkout identity",
      "vtp_eventLabel":"Create account",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",47],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":88
    },{
      "function":"__ua",
      "unlimited":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Added to Cart",
      "vtp_eventLabel":"Accessory",
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",65],
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",47],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":89
    },{
      "function":"__ua",
      "unlimited":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Added to Cart",
      "vtp_eventLabel":"Vive",
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",59],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",44],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":90
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Checkout - Step 3",
      "vtp_eventLabel":"Verified Order",
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",84],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",60],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":91
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Checkout - Step 2",
      "vtp_eventLabel":"Input Billing",
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",17],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",60],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":92
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Checkout - Step 1",
      "vtp_eventLabel":"Viewed Cart",
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",28],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",60],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":93
    },{
      "function":"__ua",
      "live_only":true,
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Checkout - Step 4",
      "vtp_eventLabel":"Displayed Invoice",
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",85],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",60],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":101
    },{
      "function":"__ua",
      "unlimited":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Added to Cart",
      "vtp_eventLabel":"Vive - from Header",
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",59],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",60],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":102
    },{
      "function":"__ua",
      "unlimited":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Added to Cart",
      "vtp_eventLabel":"Vive - from Header",
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",59],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",47],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":103
    },{
      "function":"__ua",
      "unlimited":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Enhance Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Added to Cart",
      "vtp_eventLabel":"Vive - from Header",
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",59],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",44],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":104
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"change-location",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"mini-cart",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",47],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":106
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"change-location",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"mini-cart",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",44],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":107
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"change-location",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"mini-cart",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",60],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":108
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Link Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Outbound",
      "vtp_eventLabel":["macro",53],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",60],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":113
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Link Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Outbound",
      "vtp_eventLabel":["macro",53],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",44],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":114
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Link Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Outbound",
      "vtp_eventLabel":["macro",53],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",47],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":115
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Marketing",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"stay-update",
      "vtp_eventLabel":["macro",13],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",60],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":117
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Marketing",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"register-stay-update",
      "vtp_eventLabel":["macro",13],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",60],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":119
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Marketing",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Reserved booking",
      "vtp_eventLabel":"VIVELAND",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",60],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":120
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Content Area",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Test PC",
      "vtp_eventLabel":["macro",13],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",60],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":121
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_useDebugVersion":["macro",87],
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_eventCategory":"Scroll Tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",88],
      "vtp_eventLabel":["macro",89],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",60],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":127
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",91],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",93],
      "vtp_eventLabel":["macro",31],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",60],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":129
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Site Tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Setup and Download",
      "vtp_eventLabel":"Navigator",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",52],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":140
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"marketing",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"get-details",
      "vtp_eventLabel":"carousel-spring",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",52],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":141
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"855932945",
      "vtp_customParamsFormat":"NONE",
      "vtp_url":["macro",94],
      "tag_id":144
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"viveport-showcase",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"click",
      "vtp_eventLabel":["macro",33],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",49],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":147
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"GoogleIO",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Sign up",
      "vtp_eventLabel":"Standalone",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",60],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":148
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"GoogleIO",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Register",
      "vtp_eventLabel":"Standalone",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",60],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":150
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_eventCategory":["macro",95],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",96],
      "vtp_eventAction":["macro",97],
      "vtp_eventLabel":["macro",98],
      "vtp_enableEcommerce":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":153
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"vivec0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"vivec0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"6698523",
      "vtp_ordinalStandard":["macro",99],
      "vtp_url":["macro",94],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":159
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"vivec0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"vivec00",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"6698523",
      "vtp_ordinalStandard":["macro",99],
      "vtp_url":["macro",94],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":160
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"vivec0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"vivec000",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"6698523",
      "vtp_ordinalStandard":["macro",99],
      "vtp_url":["macro",94],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":161
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"vivec0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"vivec002",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"6698523",
      "vtp_ordinalStandard":["macro",99],
      "vtp_url":["macro",94],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":162
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":163
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":170
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":173
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Site Tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Download VIVE Software",
      "vtp_eventLabel":["macro",35],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",52],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":174
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":175
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":181
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":182
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":194
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"dev",
      "vtp_useImageTag":false,
      "vtp_activityTag":"vdafa0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"6698523",
      "vtp_ordinalStandard":["macro",99],
      "vtp_url":["macro",94],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":195
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"dev",
      "vtp_useImageTag":false,
      "vtp_activityTag":"devel0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"6698523",
      "vtp_ordinalStandard":["macro",99],
      "vtp_url":["macro",94],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":196
    },{
      "function":"__awct",
      "live_only":true,
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",101],
      "vtp_orderId":["macro",102],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"822680001",
      "vtp_currencyCode":["macro",58],
      "vtp_conversionLabel":"jjvpCMiMwX0QwbOkiAM",
      "vtp_url":["macro",94],
      "vtp_enableReadGaCookie":false,
      "tag_id":198
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"805889405",
      "vtp_customParamsFormat":"NONE",
      "vtp_url":["macro",94],
      "tag_id":203
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"805853832",
      "vtp_customParamsFormat":"NONE",
      "vtp_url":["macro",94],
      "tag_id":204
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",103],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"822705670",
      "vtp_currencyCode":["macro",58],
      "vtp_conversionLabel":"5ul9CKbt7YIBEIb8pYgD",
      "vtp_url":["macro",94],
      "vtp_enableReadGaCookie":false,
      "tag_id":205
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",103],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"822705980",
      "vtp_currencyCode":["macro",58],
      "vtp_conversionLabel":"f3WKCJLr24IBELz-pYgD",
      "vtp_url":["macro",94],
      "vtp_enableReadGaCookie":false,
      "tag_id":206
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",103],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"822705502",
      "vtp_currencyCode":["macro",58],
      "vtp_conversionLabel":"zqyYCKHx7YIBEN76pYgD",
      "vtp_url":["macro",94],
      "vtp_enableReadGaCookie":false,
      "tag_id":208
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",103],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"822679575",
      "vtp_currencyCode":["macro",58],
      "vtp_conversionLabel":"qyZeCJPDhYMBEJewpIgD",
      "vtp_url":["macro",94],
      "vtp_enableReadGaCookie":false,
      "tag_id":209
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":["macro",104],
      "vtp_customParamsFormat":"NONE",
      "vtp_url":["macro",94],
      "tag_id":213
    },{
      "function":"__cl",
      "tag_id":216
    },{
      "function":"__cl",
      "tag_id":217
    },{
      "function":"__cl",
      "tag_id":218
    },{
      "function":"__cl",
      "tag_id":219
    },{
      "function":"__cl",
      "tag_id":220
    },{
      "function":"__cl",
      "tag_id":221
    },{
      "function":"__cl",
      "tag_id":222
    },{
      "function":"__cl",
      "tag_id":223
    },{
      "function":"__cl",
      "tag_id":224
    },{
      "function":"__cl",
      "tag_id":225
    },{
      "function":"__cl",
      "tag_id":226
    },{
      "function":"__cl",
      "tag_id":227
    },{
      "function":"__cl",
      "tag_id":228
    },{
      "function":"__cl",
      "tag_id":229
    },{
      "function":"__cl",
      "tag_id":230
    },{
      "function":"__cl",
      "tag_id":231
    },{
      "function":"__lcl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2264251_87",
      "tag_id":232
    },{
      "function":"__lcl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2264251_89",
      "tag_id":233
    },{
      "function":"__lcl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2264251_90",
      "tag_id":234
    },{
      "function":"__cl",
      "tag_id":235
    },{
      "function":"__cl",
      "tag_id":236
    },{
      "function":"__cl",
      "tag_id":237
    },{
      "function":"__cl",
      "tag_id":238
    },{
      "function":"__cl",
      "tag_id":239
    },{
      "function":"__cl",
      "tag_id":240
    },{
      "function":"__cl",
      "tag_id":241
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2264251_144",
      "tag_id":242
    },{
      "function":"__cl",
      "tag_id":243
    },{
      "function":"__lcl",
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2264251_150",
      "tag_id":244
    },{
      "function":"__cl",
      "tag_id":245
    },{
      "function":"__cl",
      "tag_id":246
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2264251_157",
      "tag_id":247
    },{
      "function":"__cl",
      "tag_id":248
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2264251_227",
      "tag_id":249
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2264251_229",
      "tag_id":250
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2264251_242",
      "tag_id":251
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2264251_243",
      "tag_id":252
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2264251_246",
      "tag_id":253
    },{
      "function":"__cl",
      "tag_id":254
    },{
      "function":"__cl",
      "tag_id":255
    },{
      "function":"__cl",
      "tag_id":256
    },{
      "function":"__cl",
      "tag_id":257
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:\"5035392\"};a.q=b[d];b[d]=new UET(a);b[d].push(\"pageLoad\")};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\");\u003C\/script\u003E\u003Cnoscript\u003E\u003Cimg src=\"\/\/bat.bing.com\/action\/0?ti=5035392\u0026amp;Ver=2\" height=\"0\" width=\"0\" style=\"display:none; visibility: hidden;\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":8
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,c,d,a){b.twq||(a=b.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1\",a.queue=[],t=c.createElement(d),t.async=!0,t.src=\"\/\/static.ads-twitter.com\/uwt.js\",s=c.getElementsByTagName(d)[0],s.parentNode.insertBefore(t,s))}(window,document,\"script\");twq(\"init\",\"nuu5t\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":24
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1541933606105743\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1541933606105743\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":25
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar mouseflowDisableKeyLogging=!0,_mfq=_mfq||[];(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/cdn.mouseflow.com\/projects\/c0c73125-4bf4-4571-af32-5687837e509a.js\";document.getElementsByTagName(\"head\")[0].appendChild(a)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":122
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a,b=window;var c=document;var d=arguments,e=\"script\",f=\"config track identify visit push call trackForm trackClick\".split(\" \"),g=function(){var a,b=this;b._e=[];for(a=0;f.length\u003Ea;a++)(function(a){b[a]=function(){return b._e.push([a].concat(Array.prototype.slice.call(arguments,0))),b}})(f[a])};b._w=b._w||{};for(a=0;d.length\u003Ea;a++)b._w[d[a]]=b[d[a]]=b[d[a]]||new g;a=c.createElement(e);a.async=1;a.src=\"\/\/static.woopra.com\/js\/w.js\";c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,\nc)})(\"woopra\");woopra.config({domain:\"vive.com\",cross_domain:\"viveport.com\",download_tracking:!0,outgoing_tracking:!0,third_party:!0});woopra.track();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":124
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" id=\"gtm-scroll-tracking\"\u003E(function(h,l,a){function q(){if(!h.querySelector||!h.body.getBoundingClientRect)return!1;a.dataLayerName=a.dataLayerName||\"dataLayer\";a.distances=a.distances||{};u();r(l,\"scroll\",y(u,500))}function v(k,a,f,b,d){var e;for(e=0;e\u003Ca.length;e++){var c=parseInt(a[e],10),g=\"%\"!==f?c+d:c\/100*b+d;c+=f;g\u003C=b+d\u0026\u0026(k[c]=g)}return k}function w(a,g){var k=parseInt(a,10),b=g\/k,d=[],e;for(e=1;e\u003Cb+1;e++)d.push(e*k);return d}function u(){var k=x(a.bottom),g=x(a.top);var f=h.body;var b=h.documentElement;f=Math.max(f.scrollHeight,\nf.offsetHeight,b.clientHeight,b.scrollHeight,b.offsetHeight);g\u0026\u0026(f-=g);k\u0026\u0026(f=k-(g||0));f-=5;b=g||0;var d=z()||{},e=[],c=[],m;if(a.distances.percentages\u0026\u0026(a.distances.percentages.each\u0026\u0026(e=e.concat(a.distances.percentages.each)),a.distances.percentages.every))for(m=0;m\u003Ca.distances.percentages.every.length;m++)e=w(a.distances.percentages.every[m],100),e=c.concat(e);if(a.distances.pixels\u0026\u0026(a.distances.pixels.each\u0026\u0026(c=c.concat(a.distances.pixels.each)),a.distances.pixels.every))for(m=0;m\u003Ca.distances.pixels.every.length;m++){var A=\nw(a.distances.pixels.every[m],f);c=c.concat(A)}d=v(d,e,\"%\",f,b);f=d=v(d,c,\"px\",f,b);b=void 0!==l.pageXOffset;d=\"CSS1Compat\"===(h.compatMode||\"\");b=b?l.pageYOffset:d?h.documentElement.scrollTop:h.body.scrollTop;b=parseInt(b,10);d=parseInt;c=\"CSS1Compat\"===h.compatMode?h.documentElement:h.body;c=c.clientHeight;b+=d(c,10);for(var p in f)if(d=f[p],b\u003Ed\u0026\u0026!n[p]\u0026\u0026d\u003C(k||Infinity)\u0026\u0026d\u003E(g||0))if(n[p]=!0,d=p,c=l.GoogleAnalyticsObject,\"undefined\"===typeof l[a.dataLayerName]||a.forceSyntax)if(\"function\"===typeof l[c]\u0026\u0026\n\"function\"===typeof l[c].getAll\u0026\u00262!==a.forceSyntax)l[c](\"send\",\"event\",a.category,d,a.label,{nonInteraction:1});else\"undefined\"!==typeof l._gaq\u0026\u00261!==a.forceSyntax\u0026\u0026l._gaq.push([\"_trackEvent\",a.category,d,a.label,0,!0]);else l[a.dataLayerName].push({event:\"scrollTracking\",attributes:{distance:d,label:a.label}})}function x(a){if(\"number\"===typeof a||parseInt(a,10))return parseInt(a,10);try{var k=1===a.nodeType?a:h.querySelector(a);return t(k)}catch(f){}}function y(a,g){var k,b,d,e=null,c=0,h=function(){c=\nnew Date;e=null;d=a.apply(k,b)};return function(){var f=new Date;c||(c=f);var m=g-(f-c);k=this;b=arguments;0\u003E=m?(clearTimeout(e),e=null,c=f,d=a.apply(k,b)):e||(e=setTimeout(h,m));return d}}function r(a,g,f){if(a.addEventListener)a.addEventListener(g,f);else if(a.attachEvent)a.attachEvent(\"on\"+g,function(b){f.call(a,b)});else if(\"undefined\"===typeof a[\"on\"+g]||null===a[\"on\"+g])a[\"on\"+g]=function(b){f.call(a,b)}}function t(a){a=a.getBoundingClientRect().top;var k=void 0!==l.pageYOffset?l.pageYOffset:\n(h.documentElement||h.body.parentNode||h.body).scrollTop;return a+k}var n={};!a.distances.percentages||!a.distances.percentages.every||a.distances.percentages.every instanceof Array||(a.distances.percentages.every=[a.distances.percentages.every]);!a.distances.pixels||!a.distances.pixels.every||a.distances.pixels.every instanceof Array||(a.distances.pixels.every=[a.distances.pixels.every]);var z=function(a){function g(){var d,e,c;f={};if(a.each)for(c=0;c\u003Ca.each.length;c++){var b=a.each[c];n[b]||(d=\nh.querySelector(b))\u0026\u0026(f[b]=t(d))}if(a.every)for(c=0;c\u003Ca.every.length;c++){b=a.every[c];var g=h.querySelectorAll(b);if(g.length\u0026\u0026!n[b+\":\"+(g.length-1)])for(e=0;e\u003Cg.length;e++){var k=b+\":\"+e;n[k]||(d=g[e],f[k]=t(d))}}}if(a){var f={},b=0;g();return function(){var a={},e;b++;10\u003Cb\u0026\u0026(g(),b=0);for(e in f)a[e]=f[e];return a}}}(a.distances.elements);\"loading\"!==h.readyState?q():h.addEventListener?r(h,\"DOMContentLoaded\",q):r(l,\"load\",q)})(document,window,{forceSyntax:!1,dataLayerName:!1,distances:{percentages:{each:[10,\n90],every:[25]},pixels:{each:[],every:[]},elements:{each:[],every:[]}},top:null,bottom:null,category:\"Scroll Tracking\",label:document.location.pathname});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":126
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1467648096811009\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1467648096811009\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":128
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efor(var cnLink=\"https:\/\/eshop.htc.com\/webapp\/wcs\/stores\/servlet\/addvrtocart?full\\x3dtrue\\x26storeId\\x3d10001\",originalLinks1=document.querySelectorAll(\"a[href$\\x3d'\/order\/']\"),originalLinks2=document.querySelectorAll(\"a[href$\\x3d'\/order']\"),n=0;n\u003CoriginalLinks1.length;n++)originalLinks1[n].href=cnLink;for(var i=0;n\u003CoriginalLinks2.length;n++)originalLinks2[i].href=cnLink;\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":130
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar getMore='\\x3ca style\\x3d\"margin-right: 10px;\" class\\x3d\"vive-button mobile-hide\" href\\x3d\"\/\/www.vive.com\/tw\/enterprise_form\/\" target\\x3d\"_blank\"\\x3e\\u8aee\\u8a62\\x3c\/a\\x3e';$(\".vive-button.mobile-hide\").before(getMore);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":131
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){a._sv={trackingCode:\"JQGepQbLbPvPVPjFqrRzEkxQYZNMVweA\"};a=document.createElement(\"script\");a.src=\"\/\/api.survicate.com\/assets\/survicate.js\";a.async=!0;var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})(window);\u003C\/script\u003E\u003Cnoscript\u003E\u003Ca href=\"http:\/\/survicate.com\"\u003EWebsite Survey\u003C\/a\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":132
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewoopra.identify(\"email\",",["escape",["macro",32],8,16],").push();woopra.track(\"Newsletter\",{source:\"vive.com\"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":133
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _pix=document.getElementById(\"_pix_id_58b841a3-1ad2-68db-108a-493354c3b499\");\nif(!_pix){var protocol=\"\/\/\",a=1E18*Math.random();_pix=document.createElement(\"img\");_pix.style.display=\"none\";_pix.setAttribute(\"src\",protocol+\"s.amazon-adsystem.com\/iu3?d\\x3dforester-did\\x26ex-fargs\\x3d%3Fid%3D58b841a3-1ad2-68db-108a-493354c3b499%26type%3D55%26m%3D1\\x26ex-fch\\x3d416613\\x26ex-src\\x3dhttps:\/\/www.vive.com\/us\/\\x26ex-hargs\\x3dv%3D1.0%3Bc%3D5689333320301%3Bp%3D58B841A3-1AD2-68DB-108A-493354C3B499\\x26cb\\x3d\"+a);_pix.setAttribute(\"id\",\"_pix_id_58b841a3-1ad2-68db-108a-493354c3b499\");document.body.appendChild(_pix)};\u003C\/script\u003E\u003Cnoscript\u003E \u003Cimg height=\"1\" width=\"1\" border=\"0\" alt=\"\" src=\"https:\/\/s.amazon-adsystem.com\/iui3?d=forester-did\u0026amp;ex-fargs=%3Fid%3D58b841a3-1ad2-68db-108a-493354c3b499%26type%3D55%26m%3D1\u0026amp;ex-fch=416613\u0026amp;ex-src=https:\/\/www.vive.com\/us\/\u0026amp;ex-hargs=v%3D1.0%3Bc%3D5689333320301%3Bp%3D58B841A3-1AD2-68DB-108A-493354C3B499\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":134
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _pix=document.getElementById(\"_pix_id_7775fe44-03ac-2ba5-33a6-151c98063fde\");\nif(!_pix){var protocol=\"\/\/\",a=1E18*Math.random();_pix=document.createElement(\"img\");_pix.style.display=\"none\";_pix.setAttribute(\"src\",protocol+\"s.amazon-adsystem.com\/iu3?d\\x3dforester-did\\x26ex-fargs\\x3d%3Fid%3D7775fe44-03ac-2ba5-33a6-151c98063fde%26type%3D43%26m%3D1\\x26ex-fch\\x3d416613\\x26ex-src\\x3dhttps:\/\/www.vive.com\/us\/product\/\\x26ex-hargs\\x3dv%3D1.0%3Bc%3D5689333320301%3Bp%3D7775FE44-03AC-2BA5-33A6-151C98063FDE\\x26cb\\x3d\"+a);_pix.setAttribute(\"id\",\"_pix_id_7775fe44-03ac-2ba5-33a6-151c98063fde\");\ndocument.body.appendChild(_pix)};\u003C\/script\u003E\u003Cnoscript\u003E \u003Cimg height=\"1\" width=\"1\" border=\"0\" alt=\"\" src=\"https:\/\/s.amazon-adsystem.com\/iui3?d=forester-did\u0026amp;ex-fargs=%3Fid%3D7775fe44-03ac-2ba5-33a6-151c98063fde%26type%3D43%26m%3D1\u0026amp;ex-fch=416613\u0026amp;ex-src=https:\/\/www.vive.com\/us\/product\/\u0026amp;ex-hargs=v%3D1.0%3Bc%3D5689333320301%3Bp%3D7775FE44-03AC-2BA5-33A6-151C98063FDE\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":135
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewoopra.track(\"pv\",{uri:document.URL,url:window.location.pathname,campaign_name:",["escape",["macro",93],8,16],",campaign_source:",["escape",["macro",91],8,16],",campaign_content:",["escape",["macro",29],8,16],",campaign_medium:\"carousel\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":137
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Edocument.addEventListener(\"DOMContentLoaded\",function(){for(var b=document.querySelectorAll(\"[href*\\x3d'eshop.htc.com']\"),a=0;a\u003Cb.length;a++)0\u003Eb[a].href.indexOf(\"FAQ\")\u0026\u0026(b[a].id=\"order--\"+a)});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":142
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"106395149893161\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=106395149893161\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":143
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){a._sv={trackingCode:\"JQGepQbLbPvPVPjFqrRzEkxQYZNMVweA\"};a=document.createElement(\"script\");a.src=\"\/\/api.survicate.com\/assets\/survicate.js\";a.async=!0;var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})(window);\u003C\/script\u003E\u003Cnoscript\u003E\u003Ca href=\"http:\/\/survicate.com\"\u003EWebsite Survey\u003C\/a\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":145
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cstyle\u003E\n  section.footer-social .social-links .label {\n    font-size: 24px!important;\n  }\n  \n  #product-submenu \u003E div.desktop-menu \u003E div \u003E div \u003E div:nth-child(1) \u003E a.menu-item-link {\n\tborder-bottom: none!important;\n  }\n  \n  #product-submenu \u003E div.desktop-menu \u003E div \u003E div \u003E div:nth-child(7) \u003E a[href*='\/standalone'] {\n    color: #00b5e2!important;\n  }\n  \n  .selected-wording-block {\n  \tcolor: #00b5e2!important;\n  }\n  \n  .m-stayupdate.col-lg-12 \u003E ul \u003E li:nth-child(1) \u003E div \u003E div.clearfix.m-spacing \u003E .pull-left {\n    float: none!important;\n  }\n  \n  .m-stayupdate.col-lg-12 \u003E ul \u003E li:nth-child(1) \u003E div \u003E div.clearfix.m-spacing \u003E .m-field {\n    margin-left: 0;\n    display: inline-block;\n  }\n  \n  .m-section p {\n    font-size: inherit;\n  }\n  \n\u003C\/style\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":149
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Evar google_conversion_id=854706151,google_conversion_language=\"en\",google_conversion_format=\"3\",google_conversion_color=\"ffffff\",google_conversion_label=\"vUcECKKtynEQ54_HlwM\",google_conversion_value=799,google_conversion_currency=\"USD\",google_remarketing_only=!1;\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cdiv style=\"display:inline;\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"\/\/www.googleadservices.com\/pagead\/conversion\/854706151\/?value=799.00\u0026amp;currency_code=USD\u0026amp;label=vUcECKKtynEQ54_HlwM\u0026amp;guid=ON\u0026amp;script=0\"\u003E\n\u003C\/div\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":151
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar gaProperty=",["escape",["macro",52],8,16],",disableStr=\"ga-disable-\"+gaProperty;-1\u003Cdocument.cookie.indexOf(disableStr+\"\\x3dtrue\")\u0026\u0026(window[disableStr]=!0);function gaOptout(){document.cookie=disableStr+\"\\x3dtrue; expires\\x3dThu, 31 Dec 2099 23:59:59 UTC; path\\x3d\/\";window[disableStr]=!0}var gaOptionButton=document.querySelectorAll(\"[href*\\x3d'gaoptout']\")[0];gaOptionButton\u0026\u0026gaOptionButton.addEventListener(\"click\",function(a){a.preventDefault();gaOptout()});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":152
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\n\u003Cscript type=\"text\/gtmscript\"\u003Evar google_tag_params={ecomm_prodid:\"REPLACE_WITH_VALUE\",ecomm_pagetype:\"REPLACE_WITH_VALUE\",ecomm_totalvalue:",["escape",["macro",105],8,16],"};\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar google_conversion_id=854599318,google_custom_params=window.google_tag_params,google_remarketing_only=!0;\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cdiv style=\"display:inline;\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"\/\/googleads.g.doubleclick.net\/pagead\/viewthroughconversion\/854599318\/?guid=ON\u0026amp;script=0\"\u003E\n\u003C\/div\u003E\n\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":155
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar userLang=navigator.language||navigator.userLanguage,languageCode=userLang?userLang.split(\"-\")[0]:\"\",detectLink=document.querySelectorAll(\"a[data-detect-language\\x3d'standalone']\");if(\"zh\"!=languageCode.toLowerCase())for(var i=0;i\u003CdetectLink.length;i++)detectLink[i].href=\"\/cn\/product\/standalone-en\/\";\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":164
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar versaTag={id:\"7564\",sync:0,dispType:\"js\",ptcl:\"HTTPS\",bsUrl:\"bs.serving-sys.com\/BurstingPipe\",activityParams:{Session:\"\"},retargetParams:{},dynamicRetargetParams:{},conditionalParams:{}};\u003C\/script\u003E\n\u003Cscript id=\"ebOneTagUrlId\" data-gtmsrc=\"https:\/\/secure-ds.serving-sys.com\/SemiCachedScripts\/ebOneTag.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Ciframe src=\"https:\/\/bs.serving-sys.com\/BurstingPipe?cn=ot\u0026amp;onetagid=7564\u0026amp;ns=1\u0026amp;activityValues=$$Session=",["escape",["macro",106],12],"$$\u0026amp;retargetingValues=$$$$\u0026amp;dynamicRetargetingValues=$$$$\u0026amp;acp=$$$$\u0026amp;\" style=\"display:none;width:0px;height:0px\"\u003E\u003C\/iframe\u003E\n\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":166
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eusi_installed=0;USI_installCode=function(){if(0==usi_installed){usi_installed=1;var b=document.getElementsByTagName(\"head\")[0],a=document.createElement(\"script\");a.type=\"text\/javascript\";a.src=\"\/\/www.upsellit.com\/active\/htcemea.jsp\";b.appendChild(a)}};window.addEventListener?window.addEventListener(\"load\",USI_installCode,!0):window.attachEvent?window.attachEvent(\"onload\",USI_installCode):USI_installCode();setTimeout(\"USI_installCode()\",1E4);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":167
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1845517392370042\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1845517392370042\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":169
    },{
      "function":"__html",
      "live_only":true,
      "setup_tags":["list",["tag",177,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EUSI_orderID=\"",["escape",["macro",102],7],"\";USI_orderAmt=\"",["escape",["macro",105],7]," ",["escape",["macro",58],7],"\";var USI_headID=document.getElementsByTagName(\"head\")[0],USI_dynScript=document.createElement(\"script\");USI_dynScript.setAttribute(\"type\",\"text\/javascript\");USI_dynScript.src=\"\/\/www.upsellit.com\/active\/htcemea_pixel.jsp\";USI_headID.appendChild(USI_dynScript);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":171
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cstyle\u003E\n  \n.main {\n\n  margin-top: 70px!important;\n  \n} \n  \n  @media (max-width: 768px) {\n  \t.main {\n\t  \tmargin-top: 60px!important;\n    }\n    header .main-menu-block .mobile-menu .dropdown-menu-wrapper .dropdown-menu {\n    \n      padding-top: 50px!important;\n    \n    }\n  }\n    \n  header .sub-menu-block .desktop-menu a.menu-item-link {\n  \n    margin-right: 40px;\n    \n  }\n  \n  header .main-menu-block .desktop-menu .nav-link,\n  header .main-menu-block .desktop-menu .vive-logo {\n  \tmargin-top: 0!important;\n  }\n  \n  body.revamp-product .main .section-wrapper section#top-banner,\n  body.developer-portal .main .section-wrapper,\n  .outside-sub-menu-block + .main, \n  .main \u003E .section-wrapper \u003E .section-wrapper.hd:first-child,\n  .m-section--hero,\n  #product-submenu.submenu-block {\n  \n  \tmargin-top: 0px!important;\n  \n  }  \n  \n  body \u003E header {\n  \n    height: 70px!important;\n  \n  }\n  \n  @media (max-width: 1024px) {\n  \n    body \u003E header {\n    \t\n      height: 60px!important;\n      \n    }\n  \n    header .user-wrapper .display-info.sign-in {\n    \n      display: none;\n    \n    }\n    \n\tbody \u003E header \u003E div.main-menu-block \u003E div.desktop-menu \u003E div \u003E div.logo-htc {\n     \n      right: 20px;\n      \n    }\n    \n  }\n  \n  \n  .outside-sub-menu-block {\n  \tvisibility: hidden;\n  }\n  \n  \n  .htc-chrome {\n  \tpadding-top: 60px!important;\n  }\n  \n\u003C\/style\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Evar c=document.querySelectorAll(\"header \\x3e .main-menu-block .desktop-menu .center-column\");c.length\u0026\u0026(c[0].className+=\" clearfix\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":172
    },{
      "function":"__html",
      "setup_tags":["list",["tag",98,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Egtag(\"event\",\"conversion\",{send_to:\"AW-833984690\/YGwgCMmSwHYQsrHWjQM\",value:",["escape",["macro",105],8,16],",currency:",["escape",["macro",58],8,16],",transaction_id:",["escape",["macro",102],8,16],"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":176
    },{
      "function":"__html",
      "live_only":true,
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/nexus.ensighten.com\/choozle\/4617\/Bootstrap.js\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":178
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=AW-833976537\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",\"AW-833976537\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":184
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Evar google_conversion_id=833984690,google_conversion_label=\"YGwgCMmSwHYQsrHWjQM\",google_conversion_value=",["escape",["macro",105],8,16],",google_conversion_currency=\"GBP\",google_remarketing_only=!1;\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cdiv style=\"display:inline;\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"\/\/www.googleadservices.com\/pagead\/conversion\/833984690\/?value=",["escape",["macro",105],12],"\u0026amp;currency_code=GBP\u0026amp;label=YGwgCMmSwHYQsrHWjQM\u0026amp;guid=ON\u0026amp;script=0\"\u003E\n\u003C\/div\u003E\n\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":185
    },{
      "function":"__html",
      "setup_tags":["list",["tag",183,0]],
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Egtag(\"event\",\"conversion\",{send_to:\"AW-833976537\/USjICP3RxnkQ2fHVjQM\",value:",["escape",["macro",105],8,16],",currency:\"EUR\",transaction_id:",["escape",["macro",102],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":186
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Evar google_conversion_id=833976612,google_conversion_label=\"SNJqCKu9iHkQpPLVjQM\",google_conversion_value=",["escape",["macro",105],8,16],",google_conversion_currency=\"EUR\",google_remarketing_only=!1;\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cdiv style=\"display:inline;\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"\/\/www.googleadservices.com\/pagead\/conversion\/833976612\/?value=",["escape",["macro",105],12],"\u0026amp;currency_code=EUR\u0026amp;label=SNJqCKu9iHkQpPLVjQM\u0026amp;guid=ON\u0026amp;script=0\"\u003E\n\u003C\/div\u003E\n\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":187
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Evar google_conversion_id=833978536,google_conversion_label=\"bR2ZCMPi4HYQqIHWjQM\",google_conversion_value=",["escape",["macro",105],8,16],",google_conversion_currency=\"EUR\",google_remarketing_only=!1;\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cdiv style=\"display:inline;\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"\/\/www.googleadservices.com\/pagead\/conversion\/833978536\/?value=",["escape",["macro",105],12],"\u0026amp;currency_code=EUR\u0026amp;label=bR2ZCMPi4HYQqIHWjQM\u0026amp;guid=ON\u0026amp;script=0\"\u003E\n\u003C\/div\u003E\n\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":188
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"227721611092974\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=227721611092974\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":189
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar btnWrapper=document.createElement(\"div\");\nif(null!==btnWrapper){var btnGroup='\\x3ca class\\x3d\"vive-button pre-order-button\" style\\x3d\"background:#00b5e2;color:white;\" target\\x3d\"_blank\" href\\x3d\"http:\/\/eshop.htc.com\/webapp\/wcs\/stores\/servlet\/LogonOrRegisterView?catalogId\\x3d10551\\x26langId\\x3d-7\\x26storeId\\x3d10051\\x26isVive\\x3d0\\x26skuId\\x3d272402\\x26balance\\x3d\\x26full\\x3dtrue\\x26service\\x3d\\x26prevUrl\\x3dhttps%3A%2F%2Feshop.htc.com%2Fwebapp%2Fwcs%2Fstores%2Fservlet%2Faddvrtocart%3Ffull%3Dtrue%26storeId%3D10051%26skuId%3D272402\" id\\x3d\"header_button_blue\"\\x3e\\u7535\\u773c\\u84dd\\x3c\/a\\x3e\\x3ca class\\x3d\"vive-button pre-order-button\" target\\x3d\"_blank\" href\\x3d\"http:\/\/eshop.htc.com\/webapp\/wcs\/stores\/servlet\/LogonOrRegisterView?catalogId\\x3d10551\\x26langId\\x3d-7\\x26storeId\\x3d10051\\x26isVive\\x3d0\\x26skuId\\x3d272401\\x26balance\\x3d\\x26full\\x3dtrue\\x26service\\x3d\\x26prevUrl\\x3dhttps%3A%2F%2Feshop.htc.com%2Fwebapp%2Fwcs%2Fstores%2Fservlet%2Faddvrtocart%3Ffull%3Dtrue%26storeId%3D10051%26skuId%3D272401\" style\\x3d\"background:#00b5e2;color:white;margin-left: 0;\" id\\x3d\"header_button_white\"\\x3e\\u9b45\\u529b\\u767d\\x3c\/a\\x3e';btnWrapper.className=\n\"vive-button--wrapper\";btnWrapper.innerHTML=btnGroup}var buyBtn=document.querySelector(\"body.cn .d-list .pre-order-button.vive-button\");null!==buyBtn\u0026\u0026(buyBtn.innerHTML=\"\\u8ba2\\u8d2d VIVE FOCUS\",buyBtn.href=\"\/cn\/product\/vive-focus\/\",buyBtn.parentNode.insertBefore(btnWrapper,buyBtn.nextSibling));\u003C\/script\u003E\n\n\u003Cstyle\u003E\n  header .sub-menu-block .mobile-menu .mobile-menu-dropdown {\n    -webkit-transform: translate(0, -100%);\n    -moz-transform: translate(0, -100%);\n    -ms-transform: translate(0, -100%);\n    -o-transform: translate(0, -100%);\n    transform: translate(0, -100%);\n  \n  }\n  \n  .vive-button--wrapper {\n  \tposition: absolute; \n    display: none;\n  }\n  \n  .vive-button--wrapper:hover {\n    display: block;\n  }\n  \n  .vive-button--wrapper a {\n  \twidth: 129px;\n    display: block;\n  }\n  \n  body.cn .d-list .pre-order-button.vive-button:hover ~ *{\n  \tdisplay: block;\n  }\n  \n\u003C\/style\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":190
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":" \n\u003Cscript data-gtmsrc=\"\/\/service.maxymiser.net\/api\/us\/vive.com\/e0cf64\/mmapi.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":191
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cstyle\u003E\n  \n\n  .sub-menu-block \u003E .desktop-menu .submenu-list .menu-item-link.sub-nav-link.selected {\n    height: 46px;\n    border-bottom: 4px solid #00b5e2;\n  }\n  \n  .desktop-menu .vive-button.sticky-buy-button {\n  \tdisplay: none;\n  }\n  \n  .vive-pro .stay-updated-nav li {\n  \tfont-size: 16px;\n  }\n  \n  header .sub-menu-block .mobile-menu .selected-wording-block .current-func-name {\n  \tfont-size: 16px;\n  }\n\u003C\/style\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":193
    },{
      "function":"__html",
      "live_only":true,
      "setup_tags":["list",["tag",156,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Purchase\",",["escape",["macro",107],8,16],");\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":199
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){a=document.createElement(\"script\");a.src=\"\/\/survey.survicate.com\/workspaces\/JQGepQbLbPvPVPjFqrRzEkxQYZNMVweA\/web_surveys.js\";a.async=!0;var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})(window);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":211
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.__lc=window.__lc||{};window.__lc.license=9888745;(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"cdn.livechatinc.com\/tracking.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":214
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cstyle\u003E\n  .www .container.container--full{ width:100% !important; }\n\u003C\/style\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":215
    },{
      "function":"__opt",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"],["map","fieldName","allowLinker","value","true"],["map","fieldName","anonymizeIp","value",["macro",34]]],
      "vtp_optimizeContainerId":"GTM-5JR7HG6",
      "vtp_trackingId":["macro",52],
      "tag_id":158
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",38],
      "arg1":"gtm.js"
    },{
      "function":"_sw",
      "arg0":["macro",8],
      "arg1":"\/cn"
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"(htcvive|vive)\\.com"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"eshop.htc.com"
    },{
      "function":"_re",
      "arg0":["macro",53],
      "arg1":"(preorder|order)",
      "ignore_case":true
    },{
      "function":"_css",
      "arg0":["macro",24],
      "arg1":".main .vive-button"
    },{
      "function":"_eq",
      "arg0":["macro",38],
      "arg1":"gtm.click"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"degica.com"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"htc.com"
    },{
      "function":"_css",
      "arg0":["macro",24],
      "arg1":"[data-gtm=add-to-cart-button]"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"vive.com"
    },{
      "function":"_css",
      "arg0":["macro",24],
      "arg1":"[data-gtm=add-to-cart-button] \u003E span"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"ThreePgCheckoutShoppingCartPage"
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"store.(us|eu|ap).(vive|htc|htcvive).com",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"currentPage=ThreePgCheckoutAddressPaymentInfoPage"
    },{
      "function":"_sw",
      "arg0":["macro",8],
      "arg1":"\/DRHM\/store"
    },{
      "function":"_re",
      "arg0":["macro",8],
      "arg1":"DisplayThreePgCheckoutAddressPaymentInfoPage\\\/ThemeID",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"ThreePgCheckoutConfirmOrderPage"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"ThankYouPage"
    },{
      "function":"_cn",
      "arg0":["macro",69],
      "arg1":"lnkPayPalExpressCheckout"
    },{
      "function":"_cn",
      "arg0":["macro",70],
      "arg1":"coupon-apply-btn"
    },{
      "function":"_css",
      "arg0":["macro",71],
      "arg1":"#dr_siteButtons \u003E .dr_button"
    },{
      "function":"_css",
      "arg0":["macro",24],
      "arg1":"#spree-content div[data-hook=inside_cart_form] .links [name=commit]"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"vive.degica.com\/c\/cart"
    },{
      "function":"_re",
      "arg0":["macro",8],
      "arg1":"\/\\w+\/product",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",8],
      "arg1":"\/\\w+\/accessory\/\\w+",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",39],
      "arg1":"eshop.htc.com"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"wcs\/stores\/servlet\/OrderShippingBillingView"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"OrderShippingBillingConfirmationView"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"SuccessView"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"vive.degica.com\/c\/orders"
    },{
      "function":"_css",
      "arg0":["macro",24],
      "arg1":"[href=\"#sign-in\"]"
    },{
      "function":"_css",
      "arg0":["macro",24],
      "arg1":"[href=\"#sign-in\"] span"
    },{
      "function":"_css",
      "arg0":["macro",24],
      "arg1":"[data-gtm=mini-cart-delete-shopping-item]"
    },{
      "function":"_cn",
      "arg0":["macro",69],
      "arg1":"btnCheckoutAsGuest"
    },{
      "function":"_cn",
      "arg0":["macro",39],
      "arg1":"vive.com"
    },{
      "function":"_css",
      "arg0":["macro",24],
      "arg1":"#btnCreateAccount"
    },{
      "function":"_css",
      "arg0":["macro",24],
      "arg1":"#login a.btn"
    },{
      "function":"_cn",
      "arg0":["macro",53],
      "arg1":"AuthenticateHTCAccount"
    },{
      "function":"_css",
      "arg0":["macro",24],
      "arg1":"a[data-gtm=mini-cart-check-out]"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"mall\/api_vive_shopping_cart"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"eshop.htc.com\/VR\/cart1.html"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"AjaxOrderItemDisplayView"
    },{
      "function":"_cn",
      "arg0":["macro",69],
      "arg1":"gocheckout"
    },{
      "function":"_eq",
      "arg0":["macro",38],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",82],
      "arg1":"(^$|((^|,)2264251_87($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",82],
      "arg1":"(^$|((^|,)2264251_89($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"VR\/cart1.html"
    },{
      "function":"_re",
      "arg0":["macro",82],
      "arg1":"(^$|((^|,)2264251_90($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"vive.com\/cn"
    },{
      "function":"_re",
      "arg0":["macro",8],
      "arg1":"\/cn\/accessory\/\\w+",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",8],
      "arg1":"\/cn\/product",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"\/cn"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"vive.degica.com\/c\/checkout\/payment"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"vive.degica.com\/c\/checkout\/address"
    },{
      "function":"_css",
      "arg0":["macro",24],
      "arg1":"a[data-gtm=nav-button-order-vive]"
    },{
      "function":"_css",
      "arg0":["macro",24],
      "arg1":"[data-gtm=mini-cart-change-location]"
    },{
      "function":"_cn",
      "arg0":["macro",86],
      "arg1":"vive.com"
    },{
      "function":"_re",
      "arg0":["macro",82],
      "arg1":"(^$|((^|,)2264251_144($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",24],
      "arg1":".us-stay-update-button"
    },{
      "function":"_css",
      "arg0":["macro",24],
      "arg1":"#stay-updated-button"
    },{
      "function":"_re",
      "arg0":["macro",82],
      "arg1":"(^$|((^|,)2264251_150($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",53],
      "arg1":"booking.vive.com"
    },{
      "function":"_css",
      "arg0":["macro",24],
      "arg1":".vive-button"
    },{
      "function":"_css",
      "arg0":["macro",24],
      "arg1":"#pdp-header \u003E div.center-column \u003E div \u003E a"
    },{
      "function":"_cn",
      "arg0":["macro",53],
      "arg1":"http:\/\/dl4.htc.com\/vive\/ViveCheck\/ViveCheck.exe?_ga=2.54012257.850878663.1513723488-673332615.1512576024"
    },{
      "function":"_eq",
      "arg0":["macro",38],
      "arg1":"scrollTracking"
    },{
      "function":"_css",
      "arg0":["macro",24],
      "arg1":"[data-gtm=event-tracking-carousel]"
    },{
      "function":"_css",
      "arg0":["macro",24],
      "arg1":"[data-gtm-action]"
    },{
      "function":"_css",
      "arg0":["macro",24],
      "arg1":"[data-gtm-label]"
    },{
      "function":"_css",
      "arg0":["macro",24],
      "arg1":"[data-gtm-category]"
    },{
      "function":"_css",
      "arg0":["macro",24],
      "arg1":"[data-event-action]"
    },{
      "function":"_css",
      "arg0":["macro",24],
      "arg1":"[data-event-label]"
    },{
      "function":"_css",
      "arg0":["macro",24],
      "arg1":"[data-event-category]"
    },{
      "function":"_css",
      "arg0":["macro",24],
      "arg1":"a[data-gtm=nav-button-install-vive]"
    },{
      "function":"_re",
      "arg0":["macro",82],
      "arg1":"(^$|((^|,)2264251_227($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",53],
      "arg1":"\/jp\/spring"
    },{
      "function":"_re",
      "arg0":["macro",82],
      "arg1":"(^$|((^|,)2264251_229($|,)))"
    },{
      "function":"_sw",
      "arg0":["macro",8],
      "arg1":"\/tw"
    },{
      "function":"_css",
      "arg0":["macro",24],
      "arg1":"#viveport-showcase .wrap-thumb .box-thumb"
    },{
      "function":"_re",
      "arg0":["macro",82],
      "arg1":"(^$|((^|,)2264251_242($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",69],
      "arg1":"js-standalone-stayupdate"
    },{
      "function":"_re",
      "arg0":["macro",82],
      "arg1":"(^$|((^|,)2264251_243($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",24],
      "arg1":".vive-button.vive-button--white[href*='\/\/developer.viveport.com\/standalonevr']"
    },{
      "function":"_re",
      "arg0":["macro",82],
      "arg1":"(^$|((^|,)2264251_246($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",38],
      "arg1":"click-event"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"\/product\/"
    },{
      "function":"_cn",
      "arg0":["macro",100],
      "arg1":"Test Your PC"
    },{
      "function":"_eq",
      "arg0":["macro",93],
      "arg1":"click-buy"
    },{
      "function":"_eq",
      "arg0":["macro",39],
      "arg1":"www.vive.com"
    },{
      "function":"_re",
      "arg0":["macro",8],
      "arg1":"(ready|vivex|uk|de)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"\/kr\/"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"\/th\/"
    },{
      "function":"_css",
      "arg0":["macro",24],
      "arg1":"#download-vive-setup .left .setup-link"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"vive\\.com\\\/(eu|fr|uk|de)\\\/",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"\/cn\/product\/vive-focus"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"\/us\/accessory\/"
    },{
      "function":"_cn",
      "arg0":["macro",39],
      "arg1":"blog.vive.com"
    },{
      "function":"_cn",
      "arg0":["macro",39],
      "arg1":"stage-blog.vive.com"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"http:\/\/community.viveport.com\/t5\/Developer-Discussion\/FAQ-Viveport-Developer-Awards-Global\/m-p\/13225"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"https:\/\/developer.vive.com\/us\/"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"https:\/\/developer.vive.com\/us\/vive-studios\/"
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"store\\.eu\\.(vive|htc|htcvive)\\.com",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"vive.com\/mea-ar"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"\/mea-en\/|\/mea-ar\/",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",39],
      "arg1":"www.vive.com"
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"store\\.eu\\.(vive|htc|htcvive)\\.com|gc\\.digitalriver\\.com",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"de_DE"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"fr_FR"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"es_ES"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"no_NO"
    },{
      "function":"_re",
      "arg0":["macro",37],
      "arg1":"(en_gb|fr_fr|de_de|en_es|en_se|no_no)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":".*",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"vive.com\/us"
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"store\\.(eu|ap|us)\\.vive\\.com"
    },{
      "function":"_sw",
      "arg0":["macro",8],
      "arg1":"\/eu"
    },{
      "function":"_eq",
      "arg0":["macro",39],
      "arg1":"store.eu.vive.com"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"\/tw\/business_edition"
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"cms\\.vive\\.com",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",69],
      "arg1":"js-stay-updated-submit"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"www.vive.com\/us"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"www.vive.com\/us\/product"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"\\.vive\\.com\\\/cn\\\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"\\.vive\\.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",8],
      "arg1":"(\\\/au\\\/\\w*?)|(\\\/us\\\/\\w*)|(\\\/ca\\\/\\w*)|(\\\/eu\\\/\\w*)|(\\\/uk\\\/\\w*)|(\\\/tw\\\/\\w*)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",8],
      "arg1":"\/(tw|us)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"developer.vive.com",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"standalone"
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"store.us.(vive|htc|htcvive).com",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"\/cn\/"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"vive.com\/au\/"
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"store.eu.vive.com",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",39],
      "arg1":"store.us.vive.com"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"en_GB"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"\/us\/fallout4-vr\/"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"stage-developer.vive.com",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"www.vive.com"
    }],
  "rules":[
    [["if",0],["add",0,39,157,158,159,173,180,191,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153]],
    [["if",4,5,6],["add",1,49]],
    [["if",0,7],["add",2,155,156],["block",157]],
    [["if",0,8],["add",3]],
    [["if",6,9,10],["add",4,62]],
    [["if",6,10,11],["add",4,62]],
    [["if",0,1,2],["add",5,161,168,189],["block",0,4,7,23,24,25,26,39,45,46,47,48,49,50,58,61,62,69,71,73,78,80,90,92,155,156,164]],
    [["if",0,3],["add",5],["block",0,19,28,29,39,51,52,53,54,55,56,61]],
    [["if",0,12,13],["add",6,40]],
    [["if",0,13,14],["add",7,42]],
    [["if",0,15],["add",7,42]],
    [["if",0,16],["add",7,42]],
    [["if",0,13,17],["add",8,43]],
    [["if",0,13,18],["add",9,16,41,44,93]],
    [["if",6,19],["add",10,50]],
    [["if",6,20],["add",11]],
    [["if",6,21],["add",12,57]],
    [["if",6,22,23],["add",13]],
    [["if",0,24],["add",14,46]],
    [["if",0,25],["add",15,45]],
    [["if",0,26,27],["add",17,28,52]],
    [["if",0,26,28],["add",18,29,51]],
    [["if",0,26,29],["add",19,30,31,32,53,56]],
    [["if",0,30],["add",20,67]],
    [["if",6,31],["add",21,47]],
    [["if",6,32],["add",21,47]],
    [["if",6,33],["add",22,48]],
    [["if",6,34,35],["add",23,59]],
    [["if",6,36],["add",24,61]],
    [["if",6,37,38],["add",25,60]],
    [["if",6,39],["add",26,58]],
    [["if",0,26,40],["add",27,33,55]],
    [["if",0,41],["add",27,33,55]],
    [["if",0,26,42],["add",27,33,55]],
    [["if",26,40,43,44,45],["add",34,35,54]],
    [["if",26,42,43,44,46],["add",34,35,54]],
    [["if",26,43,44,47,48],["add",34,35,54]],
    [["if",6,9,49],["add",36]],
    [["if",6,11,49],["add",36]],
    [["if",0,50],["add",37]],
    [["if",0,51],["add",38]],
    [["if",4,5,6,52],["add",63]],
    [["if",0,53],["add",64]],
    [["if",0,54],["add",65]],
    [["if",0,23],["add",66]],
    [["if",6,55],["add",68,69]],
    [["if",1,6,55],["add",70]],
    [["if",6,56],["add",71,73]],
    [["if",1,6,56],["add",72]],
    [["if",44,58],["unless",57],["add",74,75,76]],
    [["if",6,59],["add",77]],
    [["if",44,60,61],["add",78]],
    [["if",6,62,63],["add",79]],
    [["if",6,64,65],["add",80]],
    [["if",66],["add",81]],
    [["if",6,67,68,69,70],["add",82,167]],
    [["if",6,67,71,72,73],["add",82,167]],
    [["if",44,74,75],["add",83]],
    [["if",44,76,77],["add",84]],
    [["if",0,78],["add",85,169,178]],
    [["if",44,79,80],["add",86]],
    [["if",44,81,82],["add",87]],
    [["if",44,83,84],["add",88]],
    [["if",85],["add",89]],
    [["if",0,86],["add",90]],
    [["if",6,87],["add",91]],
    [["if",6,86,88],["add",92]],
    [["if",0,89,90],["add",94]],
    [["if",0,91],["add",95]],
    [["if",0,92],["add",96]],
    [["if",6,93],["add",97]],
    [["if",0,94],["add",98,177]],
    [["if",0,95],["add",99]],
    [["if",0,96],["add",100]],
    [["if",0,97],["add",101]],
    [["if",0,99],["add",102]],
    [["if",0,100],["add",103]],
    [["if",0,101],["add",103]],
    [["if",0,18,102],["add",104,179,181,185,192]],
    [["if",0,103],["add",105]],
    [["if",0,104,105],["add",106]],
    [["if",0,18,106,107],["add",107,187]],
    [["if",0,18,106,108],["add",108,186]],
    [["if",0,18,106,109],["add",109]],
    [["if",0,18,106,110],["add",110]],
    [["if",0,111],["add",111],["block",183]],
    [["if",0,112],["add",138]],
    [["if",0,113],["add",154]],
    [["if",0,2],["add",155,156]],
    [["if",0,115],["add",160,183]],
    [["if",0,116],["add",160,190]],
    [["if",0,105,117],["add",162]],
    [["if",0,118],["add",163]],
    [["if",6,119],["add",164]],
    [["if",0,120],["add",165,182]],
    [["if",0,121],["add",166]],
    [["if",0,123,124],["add",170]],
    [["if",0,118,125],["add",170]],
    [["if",0,127],["add",171]],
    [["if",0,18,128],["add",172,174]],
    [["if",0,129],["add",175]],
    [["if",0,130],["add",176]],
    [["if",0,131],["add",177]],
    [["if",0,132],["add",182]],
    [["if",0,18,106,133],["add",184]],
    [["if",0,134],["add",188]],
    [["if",0,126],["add",193],["block",170]],
    [["if",0,135],["add",194]],
    [["if",0,136],["add",195]],
    [["if",0,98],["block",101]],
    [["if",0,114],["block",157]],
    [["if",0,122],["block",167]],
    [["if",0,107],["block",185]],
    [["if",0,108],["block",185]],
    [["if",0,133],["block",185]]]
},
"runtime":[
[],[]
]};

var ba=this,ea=function(){if(null===ca){var a;a:{var b=ba.document,c=b.querySelector&&b.querySelector("script[nonce]");if(c){var d=c.nonce||c.getAttribute("nonce");if(d&&da.test(d)){a=d;break a}}a=null}ca=a||""}return ca},da=/^[\w+/_-]+[=]{0,2}$/,ca=null,fa=function(a,b){function c(){}c.prototype=b.prototype;a.Se=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Fe=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,
d)}};var g=function(a,b){this.w=a;this.kd=b};g.prototype.xd=function(){return this.w};g.prototype.getType=g.prototype.xd;g.prototype.getData=function(){return this.kd};g.prototype.getData=g.prototype.getData;var ha=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},ia=function(){this.ja={};this.ya=!1};ia.prototype.get=function(a){return this.ja["dust."+a]};ia.prototype.set=function(a,b){!this.ya&&(this.ja["dust."+a]=b)};ia.prototype.has=function(a){return this.ja.hasOwnProperty("dust."+a)};var ja=function(a){var b=[],c;for(c in a.ja)a.ja.hasOwnProperty(c)&&b.push(c.substr(5));return b};
ia.prototype.remove=function(a){!this.ya&&delete this.ja["dust."+a]};ia.prototype.F=function(){this.ya=!0};var u=function(a){this.la=new ia;this.h=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(ha(b)?this.h[Number(b)]=a[Number(b)]:this.la.set(b,a[b]))};u.prototype.toString=function(){for(var a=[],b=0;b<this.h.length;b++){var c=this.h[b];null===c||void 0===c?a.push(""):a.push(c.toString())}return a.join(",")};u.prototype.set=function(a,b){if("length"==a){if(!ha(b))throw"RangeError: Length property must be a valid integer.";this.h.length=Number(b)}else ha(a)?this.h[Number(a)]=b:this.la.set(a,b)};
u.prototype.set=u.prototype.set;u.prototype.get=function(a){return"length"==a?this.length():ha(a)?this.h[Number(a)]:this.la.get(a)};u.prototype.get=u.prototype.get;u.prototype.length=function(){return this.h.length};u.prototype.O=function(){for(var a=ja(this.la),b=0;b<this.h.length;b++)a.push(b+"");return new u(a)};u.prototype.getKeys=u.prototype.O;u.prototype.remove=function(a){ha(a)?delete this.h[Number(a)]:this.la.remove(a)};u.prototype.remove=u.prototype.remove;u.prototype.pop=function(){return this.h.pop()};
u.prototype.pop=u.prototype.pop;u.prototype.push=function(a){return this.h.push.apply(this.h,Array.prototype.slice.call(arguments))};u.prototype.push=u.prototype.push;u.prototype.shift=function(){return this.h.shift()};u.prototype.shift=u.prototype.shift;u.prototype.splice=function(a,b,c){return new u(this.h.splice.apply(this.h,arguments))};u.prototype.splice=u.prototype.splice;u.prototype.unshift=function(a){return this.h.unshift.apply(this.h,Array.prototype.slice.call(arguments))};
u.prototype.unshift=u.prototype.unshift;u.prototype.has=function(a){return ha(a)&&this.h.hasOwnProperty(a)||this.la.has(a)};var ka=function(){function a(a,b){c[a]=b}function b(){c={}}var c={},d={add:a,reset:b,create:function(d){var e={add:a,request:function(a,b){return c[a]?c[a].apply(d,Array.prototype.slice.call(arguments,1)):!1},reset:b};e.add=e.add;e.request=e.request;e.reset=e.reset;return e}};d.add=d.add;d.reset=d.reset;return d};var la=function(){function a(a,c){if(b[a]){if(b[a].Ka+c>b[a].max)throw Error("Quota exceeded");b[a].Ka+=c}}var b={},c=void 0,d=void 0,e={Vd:function(a){c=a},Qb:function(){c&&a(c,1)},Wd:function(a){d=a},R:function(b){d&&a(d,b)},pe:function(a,c){b[a]=b[a]||{Ka:0};b[a].max=c},wd:function(a){return b[a]&&b[a].Ka||0},reset:function(){b={}},dd:a};e.onFnConsume=e.Vd;e.consumeFn=e.Qb;e.onStorageConsume=e.Wd;e.consumeStorage=e.R;e.setMax=e.pe;e.getConsumed=e.wd;e.reset=e.reset;e.consume=e.dd;return e};var ma=function(a,b,c){this.G=a;this.W=b;this.V=c;this.h=new ia};ma.prototype.add=function(a,b){this.h.ya||(this.G.R(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.h.set(a,b))};ma.prototype.add=ma.prototype.add;ma.prototype.set=function(a,b){this.h.ya||(this.V&&this.V.has(a)?this.V.set(a,b):(this.G.R(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.h.set(a,b)))};ma.prototype.set=ma.prototype.set;
ma.prototype.get=function(a){return this.h.has(a)?this.h.get(a):this.V?this.V.get(a):void 0};ma.prototype.get=ma.prototype.get;ma.prototype.has=function(a){return!!this.h.has(a)||!(!this.V||!this.V.has(a))};ma.prototype.has=ma.prototype.has;ma.prototype.D=function(){return this.G};ma.prototype.F=function(){this.h.F()};var na=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},oa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1};var v=function(a,b){ia.call(this);this.ec=a;this.ud=b};fa(v,ia);var qa=function(a,b){for(var c,d=0;d<b.length&&!(c=pa(a,b[d]),c instanceof g);d++);return c},pa=function(a,b){var c=a.get(String(b[0]));if(!(c&&c instanceof v))throw"Attempting to execute non-function "+b[0]+".";return c.m.apply(c,[a].concat(b.slice(1)))};v.prototype.toString=function(){return this.ec};v.prototype.getName=function(){return this.ec};v.prototype.getName=v.prototype.getName;v.prototype.O=function(){return new u(ja(this))};
v.prototype.getKeys=v.prototype.O;v.prototype.m=function(a,b){var c,d={B:function(){return a},evaluate:function(b){var c=a;return na(b)?pa(c,b):b},va:function(b){return qa(a,b)},D:function(){return a.D()},Je:function(){c||(c=a.W.create(d));return c}};a.D().Qb();return this.ud.apply(d,Array.prototype.slice.call(arguments,1))};v.prototype.invoke=v.prototype.m;var x=function(){ia.call(this)};fa(x,ia);x.prototype.O=function(){return new u(ja(this))};x.prototype.getKeys=x.prototype.O;/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var ra=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,sa=function(a){if(null==a)return String(a);var b=ra.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},ta=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},ua=function(a){if(!a||"object"!=sa(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!ta(a,"constructor")&&!ta(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||ta(a,b)},y=function(a,b){var c=b||("array"==sa(a)?[]:{}),d;for(d in a)if(ta(a,d)){var e=a[d];"array"==sa(e)?("array"!=sa(c[d])&&(c[d]=[]),c[d]=y(e,c[d])):ua(e)?(ua(c[d])||(c[d]={}),c[d]=y(e,c[d])):c[d]=e}return c};var va=function(a){if(a instanceof u){for(var b=[],c=a.length(),d=0;d<c;d++)a.has(d)&&(b[d]=va(a.get(d)));return b}if(a instanceof x){for(var e={},f=a.O(),h=f.length(),k=0;k<h;k++)e[f.get(k)]=va(a.get(f.get(k)));return e}return a instanceof v?function(){for(var b=Array.prototype.slice.call(arguments,0),c=0;c<b.length;c++)b[c]=wa(b[c]);var d=new ma(la(),ka());return va(a.m.apply(a,[d].concat(b)))}:a},wa=function(a){if(na(a)){for(var b=[],c=0;c<a.length;c++)a.hasOwnProperty(c)&&(b[c]=wa(a[c]));return new u(b)}if(ua(a)){var d=
new x,e;for(e in a)a.hasOwnProperty(e)&&d.set(e,wa(a[e]));return d}if("function"===typeof a)return new v("",function(b){for(var c=Array.prototype.slice.call(arguments,0),d=0;d<c.length;d++)c[d]=va(this.evaluate(c[d]));return wa(a.apply(a,c))});var f=typeof a;if(null===a||"string"===f||"number"===f||"boolean"===f)return a};var xa={control:function(a,b){return new g(a,this.evaluate(b))},fn:function(a,b,c){var d=this.B(),e=this.evaluate(b);if(!(e instanceof u))throw"Error: non-List value given for Fn argument names.";var f=Array.prototype.slice.call(arguments,2);this.D().R(a.length+f.length);return new v(a,function(){return function(a){for(var b=new ma(d.G,d.W,d),c=Array.prototype.slice.call(arguments,0),h=0;h<c.length;h++)if(c[h]=this.evaluate(c[h]),c[h]instanceof g)return c[h];for(var n=e.get("length"),p=0;p<n;p++)p<
c.length?b.set(e.get(p),c[p]):b.set(e.get(p),void 0);b.set("arguments",new u(c));var q=qa(b,f);if(q instanceof g)return"return"===q.w?q.getData():q}}())},list:function(a){var b=this.D();b.R(arguments.length);for(var c=new u,d=0;d<arguments.length;d++){var e=this.evaluate(arguments[d]);"string"===typeof e&&b.R(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.D(),c=new x,d=0;d<arguments.length-1;d+=2){var e=this.evaluate(arguments[d])+"",f=this.evaluate(arguments[d+1]),h=e.length;
h+="string"===typeof f?f.length:1;b.R(h);c.set(e,f)}return c},undefined:function(){}};var A=function(){this.G=la();this.W=ka();this.wa=new ma(this.G,this.W)};A.prototype.P=function(a,b){var c=new v(a,b);c.F();this.wa.set(a,c)};A.prototype.addInstruction=A.prototype.P;A.prototype.Pb=function(a,b){xa.hasOwnProperty(a)&&this.P(b||a,xa[a])};A.prototype.addNativeInstruction=A.prototype.Pb;A.prototype.D=function(){return this.G};A.prototype.getQuota=A.prototype.D;A.prototype.Sa=function(){this.G=la();this.wa.G=this.G};A.prototype.resetQuota=A.prototype.Sa;
A.prototype.ke=function(){this.W=ka();this.wa.W=this.W};A.prototype.resetPermissions=A.prototype.ke;A.prototype.M=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.tb(c)};A.prototype.execute=A.prototype.M;A.prototype.tb=function(a){for(var b,c=0;c<arguments.length;c++){var d=pa(this.wa,arguments[c]);b=d instanceof g||d instanceof v||d instanceof u||d instanceof x||null===d||void 0===d||"string"===typeof d||"number"===typeof d||"boolean"===typeof d?d:void 0}return b};
A.prototype.run=A.prototype.tb;A.prototype.F=function(){this.wa.F()};A.prototype.makeImmutable=A.prototype.F;var ya=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var Ca={te:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(d=1;d<arguments.length;d++)if(arguments[d]instanceof u)for(var e=arguments[d],f=0;f<e.length();f++)c.push(e.get(f));else c.push(arguments[d]);return new u(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&
!b.m(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.m(a,this.get(e),e,this)&&d.push(this.get(e));return new u(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.m(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&this.get(f)===
b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.m(a,this.get(e),e,this));return new u(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,Array.prototype.slice.call(arguments,
1))},reduce:function(a,b,c){var d=this.length(),e,f;if(void 0!==c)e=c,f=0;else{if(0==d)throw"TypeError: Reduce on List with no elements.";for(var h=0;h<d;h++)if(this.has(h)){e=this.get(h);f=h+1;break}if(h==d)throw"TypeError: Reduce on List with no elements.";}for(h=f;h<d;h++)this.has(h)&&(e=b.m(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f;if(void 0!==c)e=c,f=d-1;else{if(0==d)throw"TypeError: ReduceRight on List with no elements.";for(var h=1;h<=d;h++)if(this.has(d-
h)){e=this.get(d-h);f=d-(h+1);break}if(h>d)throw"TypeError: ReduceRight on List with no elements.";}for(h=f;0<=h;h--)this.has(h)&&(e=b.m(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=ya(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):this.remove(c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?Math.max(d+c,0):Math.min(c,d);c=Math.max(b,
c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new u(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.m(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=ya(this);void 0===b?c.sort():c.sort(function(c,d){return Number(b.m(a,c,d))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):this.remove(d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,1,arguments.length-1))},toString:function(){return this.toString()},
unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var B={ac:{ADD:0,AND:1,APPLY:2,ASSIGN:3,BREAK:4,CASE:5,CONTINUE:6,CONTROL:49,CREATE_ARRAY:7,CREATE_OBJECT:8,DEFAULT:9,DEFN:50,DIVIDE:10,DO:11,EQUALS:12,EXPRESSION_LIST:13,FN:51,FOR:14,FOR_IN:47,GET:15,GET_CONTAINER_VARIABLE:48,GET_INDEX:16,GET_PROPERTY:17,GREATER_THAN:18,GREATER_THAN_EQUALS:19,IDENTITY_EQUALS:20,IDENTITY_NOT_EQUALS:21,IF:22,LESS_THAN:23,LESS_THAN_EQUALS:24,MODULUS:25,MULTIPLY:26,NEGATE:27,NOT:28,NOT_EQUALS:29,NULL:45,OR:30,PLUS_EQUALS:31,POST_DECREMENT:32,POST_INCREMENT:33,PRE_DECREMENT:34,
PRE_INCREMENT:35,QUOTE:46,RETURN:36,SET_PROPERTY:43,SUBTRACT:37,SWITCH:38,TERNARY:39,TYPEOF:40,UNDEFINED:44,VAR:41,WHILE:42}},Da="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),Ea=new g("break"),Fa=new g("continue");B.add=function(a,b){return this.evaluate(a)+this.evaluate(b)};B.and=function(a,b){return this.evaluate(a)&&this.evaluate(b)};
B.apply=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!(c instanceof u))throw"Error: Non-List argument given to Apply instruction.";if(null===a||void 0===a)throw"TypeError: Can't read property "+b+" of "+a+".";if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw"TypeError: "+a+"."+b+" is not a function.";}if("string"==typeof a){if(0<=oa(Da,b))return wa(a[b].apply(a,ya(c)));throw"TypeError: "+b+" is not a function";}if(a instanceof u){if(a.has(b)){var d=
a.get(b);if(d instanceof v){var e=ya(c);e.unshift(this.B());return d.m.apply(d,e)}throw"TypeError: "+b+" is not a function";}if(0<=oa(Ca.te,b))return e=ya(c),e.unshift(this.B()),Ca[b].apply(a,e)}if(a instanceof v||a instanceof x){if(a.has(b)){d=a.get(b);if(d instanceof v)return e=ya(c),e.unshift(this.B()),d.m.apply(d,e);throw"TypeError: "+b+" is not a function";}if("toString"==b)return a instanceof v?a.getName():a.toString();if("hasOwnProperty"==b)return a.has.apply(a,ya(c))}throw"TypeError: Object has no '"+
b+"' property.";};B.assign=function(a,b){a=this.evaluate(a);if("string"!=typeof a)throw"Invalid key name given for assignment.";var c=this.B();if(!c.has(a))throw"Attempting to assign to undefined value "+b;var d=this.evaluate(b);c.set(a,d);return d};B["break"]=function(){return Ea};B["case"]=function(a){for(var b=this.evaluate(a),c=0;c<b.length;c++){var d=this.evaluate(b[c]);if(d instanceof g)return d}};B["continue"]=function(){return Fa};
B.ld=function(a,b,c){var d=new u;b=this.evaluate(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[B.ac.FN,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.B().set(a,this.evaluate(f))};B.od=function(a,b){return this.evaluate(a)/this.evaluate(b)};B.rd=function(a,b){return this.evaluate(a)==this.evaluate(b)};B.sd=function(a){for(var b,c=0;c<arguments.length;c++)b=this.evaluate(arguments[c]);return b};
B.vd=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);var d=this.B();if("string"==typeof b)for(var e=0;e<b.length;e++){d.set(a,e);var f=this.va(c);if(f instanceof g){if("break"==f.w)break;if("return"==f.w)return f}}else if(b instanceof x||b instanceof u||b instanceof v){var h=b.O(),k=h.length();for(e=0;e<k;e++)if(d.set(a,h.get(e)),f=this.va(c),f instanceof g){if("break"==f.w)break;if("return"==f.w)return f}}};B.get=function(a){return this.B().get(this.evaluate(a))};
B.Zb=function(a,b){var c;a=this.evaluate(a);b=this.evaluate(b);if(void 0===a||null===a)throw"TypeError: cannot access property of "+a+".";a instanceof x||a instanceof u||a instanceof v?c=a.get(b):"string"==typeof a&&("length"==b?c=a.length:ha(b)&&(c=a[b]));return c};B.yd=function(a,b){return this.evaluate(a)>this.evaluate(b)};B.zd=function(a,b){return this.evaluate(a)>=this.evaluate(b)};B.Dd=function(a,b){return this.evaluate(a)===this.evaluate(b)};B.Ed=function(a,b){return this.evaluate(a)!==this.evaluate(b)};
B["if"]=function(a,b,c){var d=[];this.evaluate(a)?d=this.evaluate(b):c&&(d=this.evaluate(c));var e=this.va(d);if(e instanceof g)return e};B.Md=function(a,b){return this.evaluate(a)<this.evaluate(b)};B.Nd=function(a,b){return this.evaluate(a)<=this.evaluate(b)};B.Qd=function(a,b){return this.evaluate(a)%this.evaluate(b)};B.multiply=function(a,b){return this.evaluate(a)*this.evaluate(b)};B.Rd=function(a){return-this.evaluate(a)};B.Sd=function(a){return!this.evaluate(a)};
B.Td=function(a,b){return this.evaluate(a)!=this.evaluate(b)};B["null"]=function(){return null};B.or=function(a,b){return this.evaluate(a)||this.evaluate(b)};B.kc=function(a,b){var c=this.evaluate(a);this.evaluate(b);return c};B.mc=function(a){return this.evaluate(a)};B.quote=function(a){return Array.prototype.slice.apply(arguments)};B["return"]=function(a){return new g("return",this.evaluate(a))};
B.setProperty=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(null===a||void 0===a)throw"TypeError: Can't set property "+b+" of "+a+".";(a instanceof v||a instanceof u||a instanceof x)&&a.set(b,c);return c};B.se=function(a,b){return this.evaluate(a)-this.evaluate(b)};
B["switch"]=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!na(b)||!na(c))throw"Error: Malformed switch instruction.";for(var d,e=!1,f=0;f<b.length;f++)if(e||a===this.evaluate(b[f]))if(d=this.evaluate(c[f]),d instanceof g){var h=d.w;if("break"==h)return;if("return"==h||"continue"==h)return d}else e=!0;if(c.length==b.length+1&&(d=this.evaluate(c[c.length-1]),d instanceof g&&("return"==d.w||"continue"==d.w)))return d};
B.ue=function(a,b,c){return this.evaluate(a)?this.evaluate(b):this.evaluate(c)};B["typeof"]=function(a){a=this.evaluate(a);return a instanceof v?"function":typeof a};B.undefined=function(){};B["var"]=function(a){for(var b=this.B(),c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}};
B["while"]=function(a,b,c,d){var e,f=this.evaluate(d);if(this.evaluate(c)&&(e=this.va(f),e instanceof g)){if("break"==e.w)return;if("return"==e.w)return e}for(;this.evaluate(a);){e=this.va(f);if(e instanceof g){if("break"==e.w)break;if("return"==e.w)return e}this.evaluate(b)}};var Ha=function(){this.$b=!1;this.S=new A;Ga(this);this.$b=!0};Ha.prototype.Jd=function(){return this.$b};Ha.prototype.isInitialized=Ha.prototype.Jd;Ha.prototype.M=function(a){return this.S.tb(a)};Ha.prototype.execute=Ha.prototype.M;Ha.prototype.F=function(){this.S.F()};Ha.prototype.makeImmutable=Ha.prototype.F;
var Ga=function(a){function b(a,b){e.S.Pb(a,String(b))}function c(a,b){e.S.P(String(d[a]),b)}var d=B.ac,e=a;b("control",d.CONTROL);b("fn",d.FN);b("list",d.CREATE_ARRAY);b("map",d.CREATE_OBJECT);b("undefined",d.UNDEFINED);c("ADD",B.add);c("AND",B.and);c("APPLY",B.apply);c("ASSIGN",B.assign);c("BREAK",B["break"]);c("CASE",B["case"]);c("CONTINUE",B["continue"]);c("DEFAULT",B["case"]);c("DEFN",B.ld);c("DIVIDE",B.od);c("EQUALS",B.rd);c("EXPRESSION_LIST",B.sd);c("FOR_IN",B.vd);c("GET",B.get);c("GET_INDEX",
B.Zb);c("GET_PROPERTY",B.Zb);c("GREATER_THAN",B.yd);c("GREATER_THAN_EQUALS",B.zd);c("IDENTITY_EQUALS",B.Dd);c("IDENTITY_NOT_EQUALS",B.Ed);c("IF",B["if"]);c("LESS_THAN",B.Md);c("LESS_THAN_EQUALS",B.Nd);c("MODULUS",B.Qd);c("MULTIPLY",B.multiply);c("NEGATE",B.Rd);c("NOT",B.Sd);c("NOT_EQUALS",B.Td);c("NULL",B["null"]);c("OR",B.or);c("POST_DECREMENT",B.kc);c("POST_INCREMENT",B.kc);c("PRE_DECREMENT",B.mc);c("PRE_INCREMENT",B.mc);c("QUOTE",B.quote);c("RETURN",B["return"]);c("SET_PROPERTY",B.setProperty);
c("SUBTRACT",B.se);c("SWITCH",B["switch"]);c("TERNARY",B.ue);c("TYPEOF",B["typeof"]);c("VAR",B["var"]);c("WHILE",B["while"])};Ha.prototype.P=function(a,b){this.S.P(a,b)};Ha.prototype.addInstruction=Ha.prototype.P;Ha.prototype.D=function(){return this.S.D()};Ha.prototype.getQuota=Ha.prototype.D;Ha.prototype.Sa=function(){this.S.Sa()};Ha.prototype.resetQuota=Ha.prototype.Sa;var Ia=function(){this.Na={}};Ia.prototype.get=function(a){return this.Na.hasOwnProperty(a)?this.Na[a]:void 0};Ia.prototype.add=function(a,b){if(this.Na.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";var c=new v(a,function(){for(var a=Array.prototype.slice.call(arguments,0),c=0;c<a.length;c++)a[c]=this.evaluate(a[c]);return b.apply(this,a)});c.F();this.Na[a]=c};Ia.prototype.addAll=function(a){for(var b in a)a.hasOwnProperty(b)&&this.add(b,a[b])};var C=window,G=document,Ja=navigator,Ka=function(a,b){var c=C[a];C[a]=void 0===c?b:c;return C[a]},La=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},K=function(a,b,c){var d=G.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;La(d,b);c&&(d.onerror=c);ea()&&d.setAttribute("nonce",ea());var e=G.getElementsByTagName("script")[0]||G.body||G.head;e.parentNode.insertBefore(d,e);return d},
Ma=function(a,b){var c=G.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=G.body&&G.body.lastChild||G.body||G.head;d.parentNode.insertBefore(c,d);La(c,b);void 0!==a&&(c.src=a);return c},O=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a},Na=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Oa=function(a,b,
c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},Q=function(a){C.setTimeout(a,0)},Ra=function(a){var b=G.getElementById(a);if(b&&Pa(b,"id")!=a)for(var c=1;c<document.all[a].length;c++)if(Pa(document.all[a][c],"id")==a)return document.all[a][c];return b},Pa=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Sa=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g,
" "));return b},Ta=function(a){var b=G.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c};var Ua=function(a,b){for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].split("=");if(decodeURIComponent(e[0]).replace(/\+/g," ")==b)return decodeURIComponent(e.slice(1).join("=")).replace(/\+/g," ")}},R=function(a,b,c,d,e){var f,h=function(a){return a?a.replace(":","").toLowerCase():""},k=h(a.protocol)||h(C.location.protocol);b&&(b=String(b).toLowerCase());switch(b){case "protocol":f=k;break;case "host":f=(a.hostname||C.location.hostname).split(":")[0].toLowerCase();if(c){var l=/^www\d*\./.exec(f);
l&&l[0]&&(f=f.substr(l[0].length))}break;case "port":f=String(1*(a.hostname?a.port:C.location.port)||("http"==k?80:"https"==k?443:""));break;case "path":f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var m=f.split("/");0<=oa(d||[],m[m.length-1])&&(m[m.length-1]="");f=m.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Ua(f,e));break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Va=function(a){var b="";a&&a.href&&(b=a.hash?a.href.replace(a.hash,""):
a.href);return b},S=function(a){var b=G.createElement("a");a&&(b.href=a);return b};var Ya=function(){this.jc=new Ha;var a=new Ia;a.addAll(Wa());Xa(this,function(b){return a.get(b)})},Wa=function(){return{callInWindow:Za,getCurrentUrl:$a,getInWindow:ab,getReferrer:bb,getUrlComponent:db,getUrlFragment:eb,isPlainObject:fb,loadIframe:gb,loadJavaScript:hb,removeUrlFragment:ib,replaceAll:lb,sendTrackingBeacon:mb,setInWindow:nb}};Ya.prototype.M=function(a){return this.jc.M(a)};Ya.prototype.execute=Ya.prototype.M;var Xa=function(a,b){a.jc.P("require",b)};
function Za(a,b){for(var c=a.split("."),d=C,e=d[c[0]],f=1;e&&f<c.length;f++)d=e,e=e[c[f]];if("function"==sa(e)){var h=[];for(f=1;f<arguments.length;f++)h.push(va(arguments[f]));e.apply(d,h)}}function $a(){return C.location.href}function ab(a,b,c){for(var d=a.split("."),e=C,f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e||null===e)return;b&&(void 0===e[d[f]]||c&&!e[d[f]])&&(e[d[f]]=va(b));return wa(e[d[f]])}function bb(){return G.referrer}
function db(a,b,c,d,e){var f;if(d&&d instanceof u){f=[];for(var h=0;h<d.length();h++){var k=d.get(h);"string"==typeof k&&f.push(k)}}return R(S(a),b,c,f,e)}function eb(a){return R(S(a),"fragment")}function fb(a){return a instanceof x}function gb(a,b){var c=this.B();Ma(a,function(){b instanceof v&&b.m(c)})}var ob={};
function hb(a,b,c,d){var e=this.B(),f=function(){b instanceof v&&b.m(e)},h=function(){c instanceof v&&c.m(e)};d?ob[d]?(ob[d].onSuccess.push(f),ob[d].onFailure.push(h)):(ob[d]={onSuccess:[f],onFailure:[h]},f=function(){for(var a=ob[d].onSuccess,b=0;b<a.length;b++)Q(a[b]);a.push=function(a){Q(a);return 0}},h=function(){for(var a=ob[d].onFailure,b=0;b<a.length;b++)Q(a[b]);ob[d]=null},K(a,f,h)):K(a,f,h)}function ib(a){return Va(S(a))}function lb(a,b,c){return a.replace(new RegExp(b,"g"),c)}
function mb(a,b,c){var d=this.B();O(a,function(){b instanceof v&&b.m(d)},function(){c instanceof v&&c.m(d)})}function nb(a,b,c){for(var d=a.split("."),e=C,f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e)return!1;return void 0===e[d[f]]||c?(e[d[f]]=va(b),!0):!1};
var pb=[],qb={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},rb=function(a){return qb[a]},sb=/[\x00\x22\x26\x27\x3c\x3e]/g;var wb=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,xb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},yb=function(a){return xb[a]};pb[7]=function(a){return String(a).replace(wb,yb)};
pb[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(wb,yb)+"'"}};var Fb=/['()]/g,Gb=function(a){return"%"+a.charCodeAt(0).toString(16)};pb[12]=function(a){var b=
encodeURIComponent(String(a));Fb.lastIndex=0;return Fb.test(b)?b.replace(Fb,Gb):b};var Hb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Ib={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Jb=function(a){return Ib[a]};pb[16]=function(a){return a};var Lb,Mb=[],Nb=[],Ob=[],Pb=[],Qb=[],Rb={},Sb,Tb,Xb,Yb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=!!Rb[b],d={},e;for(e in a)a.hasOwnProperty(e)&&0===e.indexOf("vtp_")&&(d[c?e:e.substr(4)]=a[e]);return c?Rb[b](d):Lb(b,d)},$b=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Zb(a[e],b,c));return d},Zb=function(a,b,c){if(na(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Zb(a[e],
b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=Mb[f];if(!h||b(h))return;c[f]=!0;try{var k=$b(h,b,c);d=Yb(k);Xb&&(d=Xb.fd(d,k))}catch(w){d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Zb(a[l],b,c)]=Zb(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var p=Zb(a[n],b,c);Tb&&(m=m||p===Tb.Ea);d.push(p)}return Tb&&m?Tb.gd(d):d.join("");case "escape":d=Zb(a[1],b,c);if(Tb&&na(a[1])&&"macro"===a[1][0]&&Tb.Kd(a))return Tb.$d(d);d=String(d);for(var q=
2;q<a.length;q++)pb[a[q]]&&(d=pb[a[q]](d));return d;case "tag":var t=a[1];if(!Pb[t])throw Error("Unable to resolve tag reference "+t+".");return d={Wb:a[2],index:t};case "zb":var r=ac({"function":a[1],arg0:a[2],arg1:a[3],ignore_case:a[5]},b,c);a[4]&&(r=!r);return r;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},ac=function(a,b,c){try{return Sb($b(a,b,c))}catch(d){JSON.stringify(a)}return null};var bc=null,ec=function(a){function b(a){for(var b=0;b<a.length;b++)d[a[b]]=!0}var c=[],d=[];bc=cc(a);for(var e=0;e<Nb.length;e++){var f=Nb[e],h=dc(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}var m=[];for(e=0;e<Pb.length;e++)c[e]&&!d[e]&&(m[e]=!0);return m},dc=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=bc(b[c]);if(!d)return null===d?null:!1}var e=a.unless||[];for(c=0;c<e.length;c++){d=bc(e[c]);if(null===d)return null;if(d)return!1}return!0};
var cc=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=ac(Ob[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var fc,gc=function(){};(function(){function a(a,h){a=a||"";h=h||{};for(var k in b)b.hasOwnProperty(k)&&(h.Nc&&(h["fix_"+k]=!0),h.Xb=h.Xb||h["fix_"+k]);var l={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},p={comment:function(){var b=a.indexOf("--\x3e");if(0<=b)return{content:a.substr(4,b),length:b+3}},endTag:function(){var b=a.match(d);if(b)return{tagName:b[1],length:b[0].length}},atomicTag:function(){var b=p.startTag();
if(b){var c=a.slice(b.length);if(c.match(new RegExp("</\\s*"+b.tagName+"\\s*>","i"))){var d=c.match(new RegExp("([\\s\\S]*?)</\\s*"+b.tagName+"\\s*>","i"));if(d)return{tagName:b.tagName,A:b.A,content:d[1],length:d[0].length+b.length}}}},startTag:function(){var b=a.match(c);if(b){var d={};b[2].replace(e,function(a,b,c,e,h){var k=c||e||h||f.test(b)&&b||null,l=document.createElement("div");l.innerHTML=k;d[b]=l.textContent||l.innerText||k});return{tagName:b[1],A:d,Ca:!!b[3],length:b[0].length}}},chars:function(){var b=
a.indexOf("<");return{length:0<=b?b:a.length}}},q=function(){for(var b in l)if(l[b].test(a)){var c=p[b]();return c?(c.type=c.type||b,c.text=a.substr(0,c.length),a=a.slice(c.length),c):null}};h.Xb&&function(){var b=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,c=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,d=[];d.cc=function(){return this[this.length-1]};d.kb=function(a){var b=this.cc();return b&&b.tagName&&b.tagName.toUpperCase()===a.toUpperCase()};d.ed=
function(a){for(var b=0,c;c=this[b];b++)if(c.tagName===a)return!0;return!1};var e=function(a){a&&"startTag"===a.type&&(a.Ca=b.test(a.tagName)||a.Ca);return a},f=q,k=function(){a="</"+d.pop().tagName+">"+a},l={startTag:function(b){var e=b.tagName;"TR"===e.toUpperCase()&&d.kb("TABLE")?(a="<TBODY>"+a,m()):h.Ie&&c.test(e)&&d.ed(e)?d.kb(e)?k():(a="</"+b.tagName+">"+a,m()):b.Ca||d.push(b)},endTag:function(a){d.cc()?h.td&&!d.kb(a.tagName)?k():d.pop():h.td&&(f(),m())}},m=function(){var b=a,c=e(f());a=b;if(c&&
l[c.type])l[c.type](c)};q=function(){m();return e(f())}}();return{append:function(b){a+=b},ee:q,Oe:function(a){for(var b;(b=q())&&(!a[b.type]||!1!==a[b.type](b)););},clear:function(){var b=a;a="";return b},Pe:function(){return a},stack:[]}}var b=function(){var a={},b=this.document.createElement("div");b.innerHTML="<P><I></P></I>";a.Te="<P><I></P></I>"!==b.innerHTML;b.innerHTML="<P><i><P></P></i></P>";a.Re=2===b.childNodes.length;return a}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;a.Ue=function(a){var b={comment:function(a){return"<--"+a.content+"--\x3e"},endTag:function(a){return"</"+a.tagName+">"},atomicTag:function(a){return b.startTag(a)+a.content+b.endTag(a)},startTag:function(a){var b="<"+a.tagName,c;for(c in a.A){var d=a.A[c];
b+=" "+c+'="'+(d?d.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return b+(a.Ca?"/>":">")},chars:function(a){return a.text}};return b[a.type](a)};a.He=function(a){var b={},c;for(c in a){var d=a[c];b[c]=d&&d.replace(/(^|[^\\])"/g,'$1\\"')}return b};for(var h in b)a.Sc=a.Sc||!b[h]&&h;fc=a})();(function(){function a(){}function b(a){return void 0!==a&&null!==a}function c(a,b,c){var d,e=a&&a.length||0;for(d=0;d<e;d++)b.call(c,a[d],d)}function d(a,b,c){for(var d in a)a.hasOwnProperty(d)&&b.call(c,d,a[d])}function e(a,
b){d(b,function(b,c){a[b]=c});return a}function f(a,c){a=a||{};d(c,function(c,d){b(a[c])||(a[c]=d)});return a}function h(a){try{return m.call(a)}catch(t){var b=[];c(a,function(a){b.push(a)});return b}}var k={Gc:a,Hc:a,Ic:a,Jc:a,Oc:a,Pc:function(a){return a},done:a,error:function(a){throw a;},je:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function a(a,c,d){var e="data-ps-"+c;if(2===arguments.length){var f=a.getAttribute(e);return b(f)?String(f):f}b(d)&&""!==d?a.setAttribute(e,
d):a.removeAttribute(e)}function f(b,c){var d=b.ownerDocument;e(this,{root:b,options:c,Da:d.defaultView||d.parentWindow,ea:d,Ra:fc("",{Nc:!0}),$a:[b],qb:"",rb:d.createElement(b.nodeName),Aa:[],aa:[]});a(this.rb,"proxyof",0)}f.prototype.write=function(){[].push.apply(this.aa,arguments);for(var a;!this.La&&this.aa.length;)a=this.aa.shift(),"function"===typeof a?this.Xc(a):this.Bb(a)};f.prototype.Xc=function(a){var b={type:"function",value:a.name||a.toString()};this.nb(b);a.call(this.Da,this.ea);this.gc(b)};
f.prototype.Bb=function(a){this.Ra.append(a);for(var b,c=[],d,e;(b=this.Ra.ee())&&!(d=b&&"tagName"in b?!!~b.tagName.toLowerCase().indexOf("script"):!1)&&!(e=b&&"tagName"in b?!!~b.tagName.toLowerCase().indexOf("style"):!1);)c.push(b);this.ze(c);d&&this.Ad(b);e&&this.Bd(b)};f.prototype.ze=function(a){var b=this.Tc(a);b.Ob&&(b.ib=this.qb+b.Ob,this.qb+=b.de,this.rb.innerHTML=b.ib,this.xe())};f.prototype.Tc=function(a){var b=this.$a.length,d=[],e=[],f=[];c(a,function(a){d.push(a.text);if(a.A){if(!/^noscript$/i.test(a.tagName)){var c=
b++;e.push(a.text.replace(/(\/?>)/," data-ps-id="+c+" $1"));"ps-script"!==a.A.id&&"ps-style"!==a.A.id&&f.push("atomicTag"===a.type?"":"<"+a.tagName+" data-ps-proxyof="+c+(a.Ca?" />":">"))}}else e.push(a.text),f.push("endTag"===a.type?a.text:"")});return{Ve:a,raw:d.join(""),Ob:e.join(""),de:f.join("")}};f.prototype.xe=function(){for(var c,d=[this.rb];b(c=d.shift());){var e=1===c.nodeType;if(!e||!a(c,"proxyof")){e&&(this.$a[a(c,"id")]=c,a(c,"id",null));var f=c.parentNode&&a(c.parentNode,"proxyof");
f&&this.$a[f].appendChild(c)}d.unshift.apply(d,h(c.childNodes))}};f.prototype.Ad=function(a){var b=this.Ra.clear();b&&this.aa.unshift(b);a.src=a.A.src||a.A.Ce;a.src&&this.Aa.length?this.La=a:this.nb(a);var c=this;this.ye(a,function(){c.gc(a)})};f.prototype.Bd=function(a){var b=this.Ra.clear();b&&this.aa.unshift(b);a.type=a.A.type||a.A.De||"text/css";this.Ae(a);b&&this.write()};f.prototype.Ae=function(a){var b=this.Wc(a);this.Id(b);a.content&&(b.styleSheet&&!b.sheet?b.styleSheet.cssText=a.content:
b.appendChild(this.ea.createTextNode(a.content)))};f.prototype.Wc=function(a){var b=this.ea.createElement(a.tagName);b.setAttribute("type",a.type);d(a.A,function(a,c){b.setAttribute(a,c)});return b};f.prototype.Id=function(a){this.Bb('<span id="ps-style"/>');var b=this.ea.getElementById("ps-style");b.parentNode.replaceChild(a,b)};f.prototype.nb=function(a){a.Xd=this.aa;this.aa=[];this.Aa.unshift(a)};f.prototype.gc=function(a){a!==this.Aa[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.Aa.shift(),this.write.apply(this,a.Xd),!this.Aa.length&&this.La&&(this.nb(this.La),this.La=null))};f.prototype.ye=function(a,b){var c=this.Vc(a),d=this.qe(c),e=this.options.Gc;a.src&&(c.src=a.src,this.oe(c,d?e:function(){b();e()}));try{this.Hd(c),a.src&&!d||b()}catch(z){this.options.error(z),b()}};f.prototype.Vc=function(a){var b=this.ea.createElement(a.tagName);d(a.A,function(a,c){b.setAttribute(a,c)});a.content&&(b.text=a.content);return b};f.prototype.Hd=function(a){this.Bb('<span id="ps-script"/>');
var b=this.ea.getElementById("ps-script");b.parentNode.replaceChild(a,b)};f.prototype.oe=function(a,b){function c(){a=a.onload=a.onreadystatechange=a.onerror=null}var d=this.options.error;e(a,{onload:function(){c();b()},onreadystatechange:function(){/^(loaded|complete)$/.test(a.readyState)&&(c(),b())},onerror:function(){var e={message:"remote script failed "+a.src};c();d(e);b()}})};f.prototype.qe=function(a){return!/^script$/i.test(a.nodeName)||!!(this.options.je&&a.src&&a.hasAttribute("async"))};
return f}();l.postscribe=function(){function b(){var a=m.shift(),b;a&&(b=a[a.length-1],b.Hc(),a.stream=c.apply(null,a),b.Ic())}function c(c,f,k){function l(a){a=k.Pc(a);w.write(a);k.Jc(a)}w=new n(c,k);w.id=d++;w.name=k.name||w.id;var m=c.ownerDocument,p={close:m.close,open:m.open,write:m.write,writeln:m.writeln};e(m,{close:a,open:a,write:function(){return l(h(arguments).join(""))},writeln:function(){return l(h(arguments).join("")+"\n")}});var t=w.Da.onerror||a;w.Da.onerror=function(a,b,c){k.error({Le:a+
" - "+b+":"+c});t.apply(w.Da,arguments)};w.write(f,function(){e(m,p);w.Da.onerror=t;k.done();w=null;b()});return w}var d=0,m=[],w=null;return e(function(c,d,e){"function"===typeof e&&(e={done:e});e=f(e,k);c=/^#/.test(c)?l.document.getElementById(c.substr(1)):c.Ke?c[0]:c;var h=[c,d,e];c.Zd={cancel:function(){h.stream?h.stream.abort():h[1]=a}};e.Oc(h);m.push(h);w||b();return c.Zd},{streams:{},Ne:m,Ee:n})}();gc=l.postscribe}})();var hc={},ic=null;hc.o="GTM-TPVW3M";var jc=null,kc="//www.googletagmanager.com/a?id="+hc.o+"&cv=265",lc={},mc={},nc=G.currentScript?G.currentScript.src:void 0;var oc=function(){},pc=function(a){return"function"==typeof a},qc=function(a){return"string"==sa(a)},rc=function(a){return"number"==sa(a)&&!isNaN(a)},sc=function(a){return Math.round(Number(a))||0},tc=function(a){return"false"==String(a).toLowerCase()?!1:!!a},uc=function(a){var b=[];if(na(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},vc=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},wc=function(a,b){if(!rc(a)||!rc(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+
a)},xc=function(){this.prefix="gtm.";this.values={}};xc.prototype.set=function(a,b){this.values[this.prefix+a]=b};xc.prototype.get=function(a){return this.values[this.prefix+a]};xc.prototype.contains=function(a){return void 0!==this.get(a)};var yc=function(){var a=ic.sequence||0;ic.sequence=a+1;return a},zc=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ac=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}};var T=function(){var a=function(a){return{toString:function(){return a}}};return{Eb:a("convert_case_to"),Fb:a("convert_false_to"),Gb:a("convert_null_to"),Hb:a("convert_true_to"),Ib:a("convert_undefined_to"),K:a("function"),xc:a("instance_name"),yc:a("live_only"),zc:a("malware_disabled"),Ac:a("once_per_event"),Kb:a("once_per_load"),Lb:a("setup_tags"),Bc:a("tag_id"),Mb:a("teardown_tags")}}();var Bc=new xc,Cc={},Fc={set:function(a,b){y(Dc(a,b),Cc)},get:function(a){return Ec(a,2)},reset:function(){Bc=new xc;Cc={}}},Ec=function(a,b){return 2!=b?Bc.get(a):Gc(a)},Gc=function(a,b,c){var d=a.split(".");return Ic(d)},Ic=function(a){for(var b=Cc,c=0;c<a.length;c++){if(null===
b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Kc=function(a,b){Bc.set(a,b);y(Dc(a,b),Cc)},Dc=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c};var Nc=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Oc={customPixels:["nonGooglePixels"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Pc={customPixels:["customScripts","html"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels",
"customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Qc=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};
var Rc=function(a){var b=Ec("gtm.whitelist");var c=b&&Qc(uc(b),Oc),d=Ec("gtm.blacklist")||Ec("tagTypeBlacklist")||[];
Nc.test(C.location&&C.location.hostname)&&(d=uc(d),d.push("nonGooglePixels","nonGoogleScripts"));var e=d&&Qc(uc(d),Pc),f={};return function(h){var k=h&&h[T.K];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=mc[k]||[],m=a(k);if(b){var n;if(n=m)a:{if(0>oa(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>oa(c,l[p])){n=!1;break a}}else{n=!1;break a}n=!0}m=n}var q=!1;if(d){var t;if(!(t=0<=
oa(e,k)))a:{for(var r=l||[],w=new xc,D=0;D<e.length;D++)w.set(e[D],!0);for(D=0;D<r.length;D++)if(w.get(r[D])){t=!0;break a}t=!1}q=t}return f[k]=!m||q}};var Sc={fd:function(a,b){b[T.Eb]&&"string"===typeof a&&(a=1==b[T.Eb]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(T.Gb)&&null===a&&(a=b[T.Gb]);b.hasOwnProperty(T.Ib)&&void 0===a&&(a=b[T.Ib]);b.hasOwnProperty(T.Hb)&&!0===a&&(a=b[T.Hb]);b.hasOwnProperty(T.Fb)&&!1===a&&(a=b[T.Fb]);return a}};var Tc=function(a){var b=ic.zones;!b&&a&&(b=ic.zones=a());return b},Uc={active:!0,isWhitelisted:function(){return!0}};var Vc=!1,Wc=0,Xc=[];function Yc(a){if(!Vc){var b=G.createEventObject,c="complete"==G.readyState,d="interactive"==G.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Vc=!0;for(var e=0;e<Xc.length;e++)Q(Xc[e])}Xc.push=function(){for(var a=0;a<arguments.length;a++)Q(arguments[a]);return 0}}}function Zc(){if(!Vc&&140>Wc){Wc++;try{G.documentElement.doScroll("left"),Yc()}catch(a){C.setTimeout(Zc,50)}}}var $c=function(a){Vc?a():Xc.push(a)};var ad=!1,bd=function(){return C.GoogleAnalyticsObject&&C[C.GoogleAnalyticsObject]};var cd=function(a){C.GoogleAnalyticsObject||(C.GoogleAnalyticsObject=a||"ga");var b=C.GoogleAnalyticsObject;if(!C[b]){var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);C[b]=c}return C[b]},dd=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=bd();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var hd=function(){return"&tc="+Pb.filter(function(a){return a}).length},id="0.005000">Math.random(),jd=function(){var a=0,b=0;return{Ld:function(){if(2>a)return!1;1E3<=(new Date).getTime()-b&&(a=0);return 2<=a},he:function(){1E3<=(new Date).getTime()-b&&(a=0);a++;b=(new Date).getTime()}}},kd="",ld=function(){kd=[kc,"&v=3&t=t","&pid="+wc(),"&rv=6t"].join("")},md={},nd="",od=void 0,pd={},qd={},rd=void 0,sd=null,td=1E3,ud=function(){var a=od;return void 0===a?"":[kd,
md[a]?"":"&es=1",pd[a],hd(),nd,"&z=0"].join("")},vd=function(){rd&&(C.clearTimeout(rd),rd=void 0);void 0===od||md[od]&&!nd||(qd[od]||sd.Ld()||0>=td--?qd[od]=!0:(sd.he(),O(ud()),md[od]=!0,nd=""))},wd=function(a,b,c){if(id&&!qd[a]&&b){a!==od&&(vd(),od=a);var d=c+String(b[T.K]||"").replace(/_/g,"");nd=nd?nd+"."+d:"&tr="+d;rd||(rd=C.setTimeout(vd,500));2022<=ud().length&&vd()}};function xd(a,b,c,d,e,f){var h=Pb[a],k=yd(a,b,c,d,e,f);if(!k)return null;var l=Zb(h[T.Lb],f.T,[]);if(l&&l.length){var m=l[0];k=xd(m.index,b,k,1===m.Wb?e:k,e,f)}return k}
function yd(a,b,c,d,e,f){function h(){var b=$b(k,f.T);b.vtp_gtmOnSuccess=function(){wd(f.id,Pb[a],"5");c()};b.vtp_gtmOnFailure=function(){wd(f.id,Pb[a],"6");d()};b.vtp_gtmTagId=k.tag_id;if(k[T.zc])d();else{wd(f.id,k,"1");try{Yb(b)}catch(D){wd(f.id,
k,"7");e()}}}var k=Pb[a];if(f.T(k))return null;var l=Zb(k[T.Mb],f.T,[]);if(l&&l.length){var m=l[0],n=xd(m.index,b,c,d,e,f);if(!n)return null;c=n;d=2===m.Wb?e:n}if(k[T.Kb]||k[T.Ac]){var p=k[T.Kb]?Qb:b,q=c,t=d;if(!p[a]){h=Ac(h);var r=zd(a,p,h);c=r.J;d=r.U}return function(){p[a](q,t)}}return h}function zd(a,b,c){var d=[],e=[];b[a]=Ad(d,e,c);return{J:function(){b[a]=Bd;for(var c=0;c<d.length;c++)d[c]()},U:function(){b[a]=Cd;for(var c=0;c<e.length;c++)e[c]()}}}
function Ad(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Bd(a){a()}function Cd(a,b){b()};function Dd(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ac(function(){b++;d&&b>=c&&a()})},Lc:function(){d=!0;b>=c&&a()}}}function Ed(a,b){if(!id)return;var c=function(a){var d=b.T(Pb[a])?"3":"4",f=Zb(Pb[a][T.Lb],b.T,[]);f&&f.length&&c(f[0].index);wd(b.id,Pb[a],d);var h=Zb(Pb[a][T.Mb],b.T,[]);h&&h.length&&c(h[0].index)};c(a);}var Fd=!1;var Gd=function(a,b){var c={};c[T.K]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);for(d in void 0)(void 0).hasOwnProperty(d)&&(c[d]=(void 0)[d]);Pb.push(c);return Pb.length-1};var Hd=/[A-Z]+/,Id=/\s/,Jd=function(a){if(qc(a)&&(a=a.trim(),!Id.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Hd.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],ia:d}}}}};var Kd=null,Ld={},Md={},Nd;function Od(){Kd=Kd||!ic.gtagRegistered;ic.gtagRegistered=!0;return Kd}var Pd=function(a,b){var c={event:a};b&&(c.eventModel=y(b,void 0),b.event_callback&&(c.eventCallback=b.event_callback),b.event_timeout&&(c.eventTimeout=b.event_timeout));return c};
function Qd(a){if(void 0===Md[a.id]){var b;if("UA"==a.prefix)b=Gd("gtagua",{trackingId:a.id});else if("AW"==a.prefix)b=Gd("gtagaw",{conversionId:a});else if("DC"==a.prefix)b=Gd("gtagfl",{targetId:a.id});else if("GF"==a.prefix)b=Gd("gtaggf",{conversionId:a});else if("G"==a.prefix)b=Gd("get",{trackingId:a.id,isAutoTag:!0});else return;if(!Nd){var c={name:"send_to",dataLayerVersion:2},d={};d[T.K]="__v";for(var e in c)c.hasOwnProperty(e)&&(d["vtp_"+e]=c[e]);Mb.push(d);Nd=["macro",Mb.length-1]}var f={arg0:Nd,
arg1:a.id,ignore_case:!1};f[T.K]="_lc";Ob.push(f);var h={"if":[Ob.length-1],add:[b]};h["if"]&&(h.add||h.block)&&Nb.push(h);Md[a.id]=b}}
var Sd={event:function(a){var b=a[1];if(qc(b)&&!(3<a.length)){var c;if(2<a.length){if(!ua(a[2]))return;c=a[2]}var d=Pd(b,c);return d}},set:function(a){var b;2==a.length&&ua(a[1])?
b=y(a[1],void 0):3==a.length&&qc(a[1])&&(b={},b[a[1]]=a[2]);if(b)return b.eventModel=y(b,void 0),b.event="gtag.set",b._clear=!0,b},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},config:function(a){}},Rd=Ac(function(){});var Td=!1,Ud=[];function Vd(){if(!Td){Td=!0;for(var a=0;a<Ud.length;a++)Q(Ud[a])}};var Wd=[],Xd=!1,Yd=function(a){var b=a.eventCallback,c=Ac(function(){pc(b)&&Q(function(){b(hc.o)})}),d=a.eventTimeout;d&&C.setTimeout(c,Number(d));return c},ee=function(){for(var a=!1;!Xd&&0<Wd.length;){Xd=!0;delete Cc.eventModel;var b=Wd.shift();if(pc(b))try{b.call(Fc)}catch(Zd){}else if(na(b)){var c=b;if(qc(c[0])){var d=c[0].split("."),e=d.pop(),f=c.slice(1),h=Ec(d.join("."),2);if(void 0!==h&&null!==h)try{h[e].apply(h,f)}catch(Zd){}}}else{var k=b;if(k&&("[object Arguments]"==Object.prototype.toString.call(k)||
Object.prototype.hasOwnProperty.call(k,"callee"))){a:{var l=b;if(l.length&&qc(l[0])){var m=Sd[l[0]];if(m){b=m(l);break a}}b=void 0}if(!b){Xd=!1;continue}}var n;var p=void 0,q=b,t=q._clear;for(p in q)q.hasOwnProperty(p)&&"_clear"!==p&&(t&&Kc(p,void 0),Kc(p,q[p]));var r=q.event;if(r){var w=q["gtm.uniqueEventId"];w||(w=yc(),q["gtm.uniqueEventId"]=w,Kc("gtm.uniqueEventId",w));jc=r;var D;var L,z,J=q,E=J.event,M=J["gtm.uniqueEventId"],H=ic.zones;z=H?H.checkState(hc.o,M):Uc;if(z.active){var I=Yd(J);c:{var N=
z.isWhitelisted;if("gtm.js"==E){if(Fd){L=!1;break c}Fd=!0}var W=M,F=E;if(id&&!qd[W]&&od!==W){vd();od=W;nd="";var P=pd,aa=W,za,Aa=F;za=0===Aa.indexOf("gtm.")?encodeURIComponent(Aa):"*";P[aa]="&e="+za+"&eid="+W;rd||(rd=C.setTimeout(vd,500))}var Ba=Rc(N),Qa={id:M,name:E,Yc:I||oc,T:Ba,Ta:ec(Ba)};for(var Lc,Ub=Qa,ae=Dd(Ub.Yc),Rf=[],Vb=[],kb=0;kb<Pb.length;kb++)if(Ub.Ta[kb]){var Sf=Pb[kb];var zb=ae.add();try{var be=xd(kb,Rf,zb,zb,zb,Ub);be?Vb.push(be):(Ed(kb,Ub),zb())}catch(Zd){zb()}}ae.Lc();for(var Mc=0;Mc<Vb.length;Mc++)Vb[Mc]();Lc=0<Vb.length;if("gtm.js"===E||"gtm.sync"===E)d:{}if(Lc){for(var Tf={__cl:!0,__evl:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Wb=0;Wb<Qa.Ta.length;Wb++)if(Qa.Ta[Wb]){var de=Pb[Wb];if(de&&!Tf[de[T.K]]){L=!0;break c}}L=!1}else L=Lc}D=L?!0:!1}else D=!1;jc=null;n=D}else n=!1;a=n||a}Xd=!1}return!a},fe=function(){var a=ee();try{var b=C["dataLayer"].hide;if(b&&void 0!==b[hc.o]&&b.end){b[hc.o]=!1;var c=!0,d;for(d in b)if(b.hasOwnProperty(d)&&
!0===b[d]){c=!1;break}c&&(b.end(),b.end=null)}}catch(e){}return a},ge=function(){var a=Ka("dataLayer",[]),b=Ka("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Xc.push(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Ud.push(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var c=a.push;a.push=function(){var b=[].slice.call(arguments,0);c.apply(a,b);for(Wd.push.apply(Wd,b);300<this.length;)this.shift();return ee()};Wd.push.apply(Wd,a.slice(0));
Q(fe)};var he={};he.Ea=new String("undefined");he.Ya={};var ie=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===he.Ea?b:a[d]);return c.join("")}};ie.prototype.toString=function(){return this.resolve("undefined")};ie.prototype.valueOf=ie.prototype.toString;he.gd=function(a){return new ie(a)};var je={};he.ie=function(a,b){var c=yc();je[c]=[a,b];return c};he.Rb=function(a){var b=a?0:1;return function(a){var c=je[a];if(c&&"function"===typeof c[b])c[b]();je[a]=void 0}};
he.Kd=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};he.$d=function(a){if(a===he.Ea)return a;var b=yc();he.Ya[b]=a;return'google_tag_manager["'+hc.o+'"].macro('+b+")"};he.Cc=ie;var ke=new xc,le=function(a,b){function c(a){var b=S(a),c=R(b,"protocol"),d=R(b,"host",!0),e=R(b,"port"),f=R(b,"path").toLowerCase().replace(/\/$/,"");if(void 0===c||"http"==c&&"80"==e||"https"==c&&"443"==e)c="web",e="default";return[c,d,e,f]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0};
function me(a){var b=a.arg0,c=a.arg1;switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var d;a:{if(b){var e=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var f=0;f<e.length;f++)if(b[e[f]]){d=b[e[f]](c);break a}}catch(r){}}d=!1}return d;case "_ew":var h,k;h=String(b);k=String(c);var l=h.length-k.length;return 0<=l&&h.indexOf(k,l)==l;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);
case "_gt":return Number(b)>Number(c);case "_lc":var m;m=String(b).split(",");return 0<=oa(m,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var n;var p=a.ignore_case?"i":void 0;try{var q=String(c)+p,t=ke.get(q);t||(t=new RegExp(c,p),ke.set(q,t));n=t.test(b)}catch(r){n=!1}return n;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return le(b,c)}return!1};function ne(a,b,c,d){return(d||"https:"==C.location.protocol?a:b)+c}function oe(a,b){for(var c=b||(a instanceof u?new u:new x),d=a.O(),e=0;e<d.length();e++){var f=d.get(e);if(a.has(f)){var h=a.get(f);h instanceof u?(c.get(f)instanceof u||c.set(f,new u),oe(h,c.get(f))):h instanceof x?(c.get(f)instanceof x||c.set(f,new x),oe(h,c.get(f))):c.set(f,h)}}return c}function pe(){return hc.o}function qe(){return(new Date).getTime()}function re(a,b){return wa(Ec(a,b||2))}function se(){return jc}
function te(a){return Ta('<a href="'+a+'"></a>')[0].href}function ue(a){return sc(va(a))}function ve(a){return null===a?"null":void 0===a?"undefined":a.toString()}function we(a,b){return wc(a,b)}function xe(a,b,c){if(!(a instanceof u))return null;for(var d=new x,e=!1,f=0;f<a.length();f++){var h=a.get(f);h instanceof x&&h.has(b)&&h.has(c)&&(d.set(h.get(b),h.get(c)),e=!0)}return e?d:null}
var ye=function(){var a=new Ia;a.addAll(Wa());a.addAll({buildSafeUrl:ne,decodeHtmlUrl:te,copy:oe,generateUniqueNumber:yc,getContainerId:pe,getCurrentTime:qe,getDataLayerValue:re,getEventName:se,makeInteger:ue,makeString:ve,randomInteger:we,tableToMap:xe});return function(b){return a.get(b)}};var ze=new Ya,Ae=function(){var a=data.runtime||[];Lb=function(a,b){var c=new x,d;for(d in b)b.hasOwnProperty(d)&&c.set(d,wa(b[d]));var e=ze.M([a,c]);e instanceof g&&"return"===e.w&&(e=e.getData());return va(e)};Sb=me;Xa(ze,ye());for(var b=0;b<a.length;b++){var c=a[b];if(!na(c)||3>c.length){if(0==c.length)continue;break}ze.M(c)}};var Be=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Ce=function(a){return encodeURIComponent(a)},De=function(a){var b=["veinteractive.com","ve-interactive.cn"];if(!a)return!1;var c=R(S(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var U=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null},Ee=function(a,b){y(a,b)},Fe=function(a){return sc(a)},Ge=function(a,b){return oa(a,b)};var He=function(a){var b={"gtm.element":a,"gtm.elementClasses":a.className,"gtm.elementId":a["for"]||Pa(a,"id")||"","gtm.elementTarget":a.formTarget||a.target||""};b["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||a.href||a.src||a.code||a.codebase||"";return b},Ie=function(a){ic.hasOwnProperty("autoEventsSettings")||(ic.autoEventsSettings={});var b=ic.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Je=function(a,b,c,d){var e=Ie(a),f=zc(e,b,d);e[b]=
c(f)},Ke=function(a,b,c){var d=Ie(a);return zc(d,b,c)};var Le=/(^|\.)doubleclick\.net$/i,Me=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Ne=function(a,b,c){for(var d=String(b||G.cookie).split(";"),e=[],f=0;f<d.length;f++){var h=d[f].split("="),k=vc(h[0]);if(k&&k==a){var l=vc(h.slice(1).join("="));l&&!1!==c&&(l=decodeURIComponent(l));e.push(l)}}return e},Oe=function(a,b,c,d,e,f){f&&(b=encodeURIComponent(b));var h=a+"="+b+"; ";c&&(h+="path="+c+"; ");e&&(h+="expires="+e.toGMTString()+"; ");var k,l;if("auto"==d){var m=R(C.location,"host",!0).split(".");if(4==
m.length&&/^[0-9]*$/.exec(m[3]))l=["none"];else{for(var n=[],p=m.length-2;0<=p;p--)n.push(m.slice(p).join("."));n.push("none");l=n}}else l=[d||"none"];k=l;for(var q=G.cookie,t=0;t<k.length;t++){var r=h,w=k[t],D=c;if(Le.test(C.location.hostname)||"/"==D&&Me.test(w))break;"none"!=k[t]&&(r+="domain="+k[t]+";");G.cookie=r;if(q!=G.cookie||0<=oa(Ne(a),b))break}};var Pe=!1;if(G.querySelectorAll)try{var Qe=G.querySelectorAll(":root");Qe&&1==Qe.length&&Qe[0]==G.documentElement&&(Pe=!0)}catch(a){}var Re=Pe;var Se=function(a){for(var b=[],c=document.cookie.split(";"),d=new RegExp("^\\s*"+a+"=\\s*(.*?)\\s*$"),e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push(f[1])}return b},Ve=function(a,b,c,d){var e=Te(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=Ue(e,function(a){return a.pd},b);if(1===e.length)return e[0].id;e=Ue(e,function(a){return a.Yd},c);return e[0]?e[0].id:void 0}},Ye=function(a,b,c,d,e){c=void 0===c?"/":c;var f=d=void 0===d?"auto":d,h=c;if(We.test(document.location.hostname)||"/"===
h&&Xe.test(f))return!1;var k=b;k&&1200<k.length&&(k=k.substring(0,1200));b=k;var l=a+"="+b+"; path="+c+"; ";void 0!==e&&(l+="expires="+(new Date((new Date).getTime()+e)).toGMTString()+"; ");if("auto"===d){var m=!1,n;a:{var p=[],q=document.location.hostname.split(".");if(4===q.length){var t=q[q.length-1];if(parseInt(t,10).toString()===t){n=["none"];break a}}for(var r=q.length-2;0<=r;r--)p.push(q.slice(r).join("."));p.push("none");n=p}for(var w=n,D=0;D<w.length&&!m;D++)m=Ye(a,b,c,w[D],e);return m}d&&
"none"!==d&&(l+="domain="+d+";");var L=document.cookie;document.cookie=l;return L!=document.cookie||0<=Se(a).indexOf(b)};function Ue(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function Te(a,b){for(var c=[],d=Se(a),e=0;e<d.length;e++){var f=d[e].split("."),h=f.shift();if(!b||-1!==b.indexOf(h)){var k=f.shift();k&&(k=k.split("-"),c.push({id:f.join("."),pd:1*k[0]||1,Yd:1*k[1]||1}))}}return c}
var Xe=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,We=/(^|\.)doubleclick\.net$/i;var Ze=window,$e=document;var cf=function(a){for(var b=Ze.navigator.userAgent+($e.cookie||"")+($e.referrer||""),c=b.length,d=Ze.history.length;0<d;)b+=d--^c++;var e=1,f,h,k;if(b)for(e=0,h=b.length-1;0<=h;h--)k=b.charCodeAt(h),e=(e<<6&268435455)+k+(k<<14),f=e&266338304,e=0!=f?e^f>>21:e;var l=[Math.round(2147483647*Math.random())^e&2147483647,Math.round(Date.now()/1E3)].join("."),m=""+af(void 0),n=bf(void 0);1<n&&(m+="-"+n);return[a,m,l].join(".")},df=function(a,b,c,d){var e=af(b);return Ve(a,e,bf(c),d)};
function af(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length}function bf(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var ef=["1"],ff={},jf=function(a,b,c){b=void 0===b?"auto":b;c=void 0===c?"/":c;var d=gf(void 0===a?"_gcl":a);if(!ff[d]&&!hf(d,b,c)){var e=cf("1");Ye(d,e,c,b,7776E6);hf(d,b,c)}};function hf(a,b,c){var d=df(a,b,c,ef);d&&(ff[a]=d);return d}function gf(a){return(void 0===a?"_gcl":a)+"_au"};var kf=function(a){for(var b=[],c=G.cookie.split(";"),d=new RegExp("^\\s*"+a+"=\\s*(.*?)\\s*$"),e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push(f[1])}var h=[];if(!b||0==b.length)return h;for(var k=0;k<b.length;k++){var l=b[k].split(".");3==l.length&&"GCL"==l[0]&&l[1]&&h.push(l[2])}return h};var lf=/^\w+$/,mf=/^[\w-]+$/,nf=/^\d+\.fls\.doubleclick\.net$/;function of(a){return a&&"string"==typeof a&&a.match(lf)?a:"_gcl"}function pf(a){if(a){if("string"==typeof a){var b=of(a);return{sa:b,ra:b}}if(a&&"object"==typeof a)return{sa:of(a.dc),ra:of(a.aw)}}return{sa:"_gcl",ra:"_gcl"}}function qf(a){var b=S(C.location.href),c=R(b,"host",!1);if(c&&c.match(nf)){var d=R(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function rf(a){return a.filter(function(a){return mf.test(a)})}var tf=function(a){var b=qf("gclaw");if(b)return b.split(".");var c=pf(a);if("_gcl"==c.ra){var d=sf();if(d&&(null==d.H||"aw.ds"==d.H))return[d.ha]}return rf(kf(c.ra+"_aw"))},uf=function(a){var b=qf("gcldc");if(b)return b.split(".");var c=pf(a);if("_gcl"==c.sa){var d=sf();if(d&&("ds"==d.H||"aw.ds"==d.H))return[d.ha]}return rf(kf(c.sa+"_dc"))};
function sf(){var a=S(C.location.href),b=R(a,"query",!1,void 0,"gclid"),c=R(a,"query",!1,void 0,"gclsrc");if(!b||!c){var d=R(a,"fragment");b=b||Ua(d,"gclid");c=c||Ua(d,"gclsrc")}return void 0!==b&&b.match(mf)?{ha:b,H:c}:null}
var vf=function(a,b,c){var d=pf(a);c=c||"auto";b=b||"/";var e=sf();if(null!=e){var f=(new Date).getTime(),h=new Date(f+7776E6),k=["GCL",Math.round(f/1E3),e.ha].join(".");e.H&&"aw.ds"!=e.H||Oe(d.ra+"_aw",k,b,c,h,!0);"aw.ds"!=e.H&&"ds"!=e.H||Oe(d.sa+"_dc",k,b,c,h,!0)}},wf=function(){var a=qf("gac");if(a)return decodeURIComponent(a);for(var b=[],c=G.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({xb:f[1],value:f[2]})}var h={};if(b&&b.length)for(var k=
0;k<b.length;k++){var l=b[k].value.split(".");"1"==l[0]&&3==l.length&&l[1]&&(h[b[k].xb]||(h[b[k].xb]=[]),h[b[k].xb].push({timestamp:l[1],ha:l[2]}))}var m=[],n;for(n in h)if(h.hasOwnProperty(n)){for(var p=[],q=h[n],t=0;t<q.length;t++)p.push(q[t].ha);p=rf(p);p.length&&m.push(n+":"+p.join(","))}return m.join(";")},xf=function(a,b,c){};var yf;a:{yf="G"}var zf={"":"n",UA:"u",AW:"a",DC:"d",GTM:yf},Af=function(a){var b=hc.o.split("-"),c=b[0].toUpperCase();return(zf[c]||"i")+"6t"+(a&&"GTM"===c?b[1]:"")};
var Bf=function(a){return!(void 0===a||null===a||0===(a+"").length)},Cf=function(a,b){var c;if(2===b.C)return a("ord",wc(1E11,1E13)),!0;if(3===b.C)return a("ord","1"),a("num",wc(1E11,1E13)),!0;if(4===b.C)return Bf(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.C)c="1";else if(6===b.C)c=b.nc;else return!1;Bf(c)&&a("qty",c);Bf(b.cb)&&a("cost",b.cb);Bf(b.yb)&&a("ord",b.yb);return!0},Df=encodeURIComponent,Ef=function(a,b){function c(a,b,c){f.hasOwnProperty(a)||(b+="",e+=";"+a+"="+(c?b:Df(b)))}var d=a.gb,
e=a.protocol;e+=a.Ua?"//"+d+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";e+=";src="+Df(d)+(";type="+Df(a.hb))+(";cat="+Df(a.qa));var f=a.jd||{},h;for(h in f)f.hasOwnProperty(h)&&(e+=";"+Df(h)+"="+Df(f[h]+""));if(Cf(c,a)){Bf(a.Ab)&&c("u",a.Ab);Bf(a.tran)&&c("tran",a.tran);c("gtm",Af());if(a.ab){var k=uf(a.da);k&&k.length&&c("gcldc",k.join("."));var l=tf(a.da);l&&l.length&&c("gclaw",l.join("."));var m=wf();m&&c("gac",m);}Bf(a.ob)&&c("prd",a.ob,!0);for(var p in a.Ba)a.Ba.hasOwnProperty(p)&&c(p,a.Ba[p]);e+=b||"";Bf(a.Qa)&&c("~oref",a.Qa);a.Ua?Ma(e+"?",a.J):O(e+"?",a.J,a.U)}else Q(a.U)};var Gf=!!C.MutationObserver,Hf=void 0,If=function(a){if(!Hf){var b=function(){var a=G.body;if(a)if(Gf)(new MutationObserver(function(){for(var a=0;a<Hf.length;a++)Q(Hf[a])})).observe(a,{childList:!0,subtree:!0});else{var b=!1;Na(a,"DOMNodeInserted",function(){b||(b=!0,Q(function(){b=!1;for(var a=0;a<Hf.length;a++)Q(Hf[a])}))})}};Hf=[];G.body?b():Q(b)}Hf.push(a)};var Wf="www.googletagmanager.com/gtm.js";
var Xf=Wf,Yf=function(a,b,c,d){Na(a,b,c,d)},Zf=function(a,b){return C.setTimeout(a,b)},$f=function(a,b,c){K(a,b,c)},ag={},bg=function(a,b,c){var d=ag[a];if(void 0===d){var e=function(a,b){return function(){a.status=b;for(var c=2==b?a.uc:a.Vb,d=0;d<c.length;d++)C.setTimeout(c[d],0)}};d={status:1,uc:[],Vb:[],ne:void 0};d.Qe=K(a,e(d,2),e(d,3));ag[a]=d}0===d.status&&(d.ne(),d.status=2);2===d.status?b&&b():3===d.status?c&&c():1===d.status&&(b&&d.uc.push(b),c&&d.Vb.push(c))},cg=function(){return C.location.href},
dg=function(a){return R(S(a),"fragment")},V=function(a,b){return Ec(a,b||2)},eg=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return C["dataLayer"].push(a)},fg=function(a,b){C[a]=b},X=function(a,b,c){b&&(void 0===C[a]||c&&!C[a])&&(C[a]=b);return C[a]},gg=function(a,b){var c;a:{var d;d=100;for(var e={},f=0;f<b.length;f++)e[b[f]]=!0;for(var h=a,k=0;h&&k<=d;k++){if(e[String(h.tagName).toLowerCase()]){c=h;break a}h=h.parentElement}c=null}return c},Y=function(a,b,c,d){var e=!d&&"http:"==
C.location.protocol;e&&(e=2!==hg());return(e?b:a)+c};
var ig=function(a){var b=0;return b},jg=function(a){},kg=function(a){var b=!1;return b},lg=function(a,b){var c;a:{if(a&&
na(a))for(var d=0;d<a.length;d++)if(a[d]&&b(a[d])){c=a[d];break a}c=void 0}return c},mg=function(a,b,c,d){Je(a,b,c,d)},ng=function(a,b,c){return Ke(a,b,c)},og=function(a){return!!Ke(a,"init",!1)},pg=function(a){Ie(a).init=!0};
var hg=function(){var a=Xf;if(nc){if(0===nc.toLowerCase().indexOf("https://"))return 2;if(0===nc.toLowerCase().indexOf("http://"))return 3}a=a.toLowerCase();for(var b="https://"+a,c="http://"+a,d=1,e=G.getElementsByTagName("script"),f=0;f<e.length&&100>f;f++){var h=e[f].src;if(h){h=h.toLowerCase();if(0===h.indexOf(c))return 3;1===d&&0===h.indexOf(b)&&(d=2)}}return d};
var sg=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":Xf;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";if(b)for(var e in b)b[e]&&b.hasOwnProperty(e)&&(d+="&"+e+"="+encodeURIComponent(b[e]));var f=Y("https://","http://",d);K(f,void 0,void 0)};var ug=function(a,b,c){a instanceof he.Cc&&(a=a.resolve(he.ie(b,c)),b=oc);return{ib:a,J:b}};var vg=function(a,b,c){this.n=a;this.t=b;this.p=c},wg=function(){this.c=1;this.e=[];this.p=null};function xg(a){var b=ic,c=b.gss=b.gss||{};return c[a]=c[a]||new wg}var yg=function(a,b){xg(a).p=b},zg=function(a,b,c){var d=Math.floor((new Date).getTime()/1E3);xg(a).e.push(new vg(b,d,c))},Ag=function(a){};var Kg=window,Lg=document,Mg=function(a){var b=Kg._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Kg["ga-disable-"+a])return!0;try{var c=Kg.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(m){}for(var d=[],e=Lg.cookie.split(";"),f=/^\s*AMP_TOKEN=\s*(.*?)\s*$/,h=0;h<e.length;h++){var k=e[h].match(f);k&&d.push(k[1])}for(var l=0;l<d.length;l++)if("$OPT_OUT"==decodeURIComponent(d[l]))return!0;return!1};var Rg=function(a){if(1===xg(a).c){xg(a).c=2;var b=encodeURIComponent(a);K(("http:"!=C.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+b+"&l=dataLayer&cx=c"))}},Sg=function(a,b){};var Z={a:{}};
Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=X("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.a.flc=[],function(){function a(a,c){c=c?c.slice(0,-1):void 0;Ef(a,c)}(function(a){Z.__flc=a;Z.__flc.b="flc";Z.__flc.g=!0})(function(b){var c=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,d=U(b.vtp_customVariable||[],"key","value")||{},e={qa:b.vtp_activityTag,ab:c,da:b.vtp_conversionCookiePrefix||void 0,C:{UNIQUE:3,SESSION:4}[b.vtp_ordinalType]||2,gb:b.vtp_advertiserId,hb:b.vtp_groupTag,U:b.vtp_gtmOnFailure,J:b.vtp_gtmOnSuccess,Qa:b.vtp_useImageTag?void 0:b.vtp_url,
protocol:"",Ua:!b.vtp_useImageTag,sessionId:b.vtp_sessionId,tran:b.vtp_transactionVariable,Ab:b.vtp_userVariable,Ba:d};if(b.vtp_enableAttribution){var f=b.vtp_attributionFields||[];if(f.length){$f("//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(e,X("google_attr").build([U(f,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(e)})}();
Z.a.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.b="sp";Z.__sp.g=!0})(function(a){var b=a.vtp_gtmOnFailure;$f("//www.googleadservices.com/pagead/conversion_async.js",function(){var c=X("google_trackConversion");if(pc(c)){var d={};"DATA_LAYER"==a.vtp_customParamsFormat?d=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(d=U(a.vtp_customParams,"key","value"));c({google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:d,google_remarketing_only:!0,
onload_callback:a.vtp_gtmOnSuccess,google_gtm:Af(void 0)})||b()}else b()},b)})}();Z.a.c=["google"],function(){(function(a){Z.__c=a;Z.__c.b="c";Z.__c.g=!0})(function(a){return a.vtp_value})}();
Z.a.d=["google"],function(){(function(a){Z.__d=a;Z.__d.b="d";Z.__d.g=!0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType){var e=Re?G.querySelectorAll(a.vtp_elementSelector):null;e&&0<e.length&&(b=e[0])}else b=Ra(a.vtp_elementId);b&&(c=d?Pa(b,d):Sa(b));return vc(String(b&&c))})}();
Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0})(function(){return jc})}();Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0})(function(a){var b=V("gtm.referrer",1)||G.referrer,c;if(b){var d;if(a.vtp_component&&"URL"!=a.vtp_component){var e=S(String(b));d=R(e,a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey)}else d=Va(S(String(b)));c=d}else c=String(b);return c})}();
Z.a.cl=["google"],function(){function a(a){var b=a.target;if(b){var d=He(b);d.event="gtm.click";eg(d)}}(function(a){Z.__cl=a;Z.__cl.b="cl";Z.__cl.g=!0})(function(b){if(!og("cl")){var c=X("document");Na(c,"click",a,!0);pg("cl");var d=Ke("cl","legacyTeardown",void 0);d&&d()}Q(b.vtp_gtmOnSuccess)})}();Z.a.k=["google"],function(){(function(a){Z.__k=a;Z.__k.b="k";Z.__k.g=!0})(function(a){var b=V("gtm.cookie",1);return Ne(a.vtp_name,b,!!a.vtp_decodeCookie)[0]})}();
Z.a.r=["google"],function(){(function(a){Z.__r=a;Z.__r.b="r";Z.__r.g=!0})(function(a){return wc(a.vtp_min,a.vtp_max)})}();

Z.a.u=["google"],function(){var a=function(a){return{toString:function(){return a}}};(function(a){Z.__u=a;Z.__u.b="u";Z.__u.g=!0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:V("gtm.url",1))||cg();var d=b[a("vtp_component")],e;if(d&&"URL"!=d){var f=S(String(c));e=R(f,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,"QUERY"==d?b[a("vtp_queryKey")]:void 0)}else e=Va(S(String(c)));return e})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=V(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();

Z.a.ua=["google"],function(){var a;(function(a){Z.__ua=a;Z.__ua.b="ua";Z.__ua.g=!0})(function(b){var c={},d={},e={},f={},h={};if(b.vtp_gaSettings){var k=b.vtp_gaSettings;Ee(U(k.vtp_fieldsToSet,"fieldName","value"),d);Ee(U(k.vtp_contentGroup,"index","group"),e);Ee(U(k.vtp_dimension,"index","dimension"),f);Ee(U(k.vtp_metric,"index","metric"),h);b.vtp_gaSettings=null;k.vtp_fieldsToSet=void 0;k.vtp_contentGroup=void 0;k.vtp_dimension=void 0;k.vtp_metric=void 0;var l=y(k,void 0);b=y(b,l)}Ee(U(b.vtp_fieldsToSet,
"fieldName","value"),d);Ee(U(b.vtp_contentGroup,"index","group"),e);Ee(U(b.vtp_dimension,"index","dimension"),f);Ee(U(b.vtp_metric,"index","metric"),h);var m=cd(b.vtp_functionName),n="",p="";b.vtp_setTrackerName&&"string"==typeof b.vtp_trackerName?""!==b.vtp_trackerName&&(p=b.vtp_trackerName,n=p+"."):(p="gtm"+yc(),n=p+".");var q={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,
cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},t={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},r=function(a){var b=[].slice.call(arguments,0);b[0]=n+b[0];m.apply(window,b)},w=function(a,b){return void 0===b?b:a(b)},D=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&
r("set",a+c,b[c])},L=function(){var a=function(a,b,c){if(!ua(b))return!1;var d;d=zc(Object(b),c,[]);for(var e=0;d&&e<d.length;e++)r(a,d[e]);return!!d&&0<d.length},c;b.vtp_useEcommerceDataLayer?c=V("ecommerce",1):b.vtp_ecommerceMacroData&&(c=b.vtp_ecommerceMacroData.ecommerce);if(!ua(c))return;c=Object(c);var e=zc(d,"currencyCode",c.currencyCode);void 0!==e&&r("set","&cu",e);a("ec:addImpression",c,"impressions");if(a("ec:addPromo",
c[c.promoClick?"promoClick":"promoView"],"promotions")&&c.promoClick){r("ec:setAction","promo_click",c.promoClick.actionField);return}for(var f="detail checkout checkout_option click add remove purchase refund".split(" "),h=0;h<f.length;h++){var k=c[f[h]];if(k){a("ec:addProduct",k,"products");r("ec:setAction",f[h],k.actionField);break}}},z=function(a,b,c){var d=0;if(a)for(var e in a)if(a.hasOwnProperty(e)&&(c&&q[e]||!c&&void 0===
q[e])){var f=t[e]?tc(a[e]):a[e];"anonymizeIp"!=e||f||(f=void 0);b[e]=f;d++}return d},J={name:p};z(d,J,!0);m("create",b.vtp_trackingId||c.trackingId,J);r("set","&gtm",Af(!0));(function(a,c){void 0!==b[c]&&r("set",a,b[c])})("nonInteraction","vtp_nonInteraction");D("contentGroup",e);D("dimension",f);D("metric",h);var E={};z(d,E,!1)&&r("set",E);var M;
b.vtp_enableLinkId&&r("require","linkid","linkid.js");r("set","hitCallback",function(){var a=d&&d.hitCallback;pc(a)&&a();b.vtp_gtmOnSuccess()});if("TRACK_EVENT"==b.vtp_trackType){b.vtp_enableEcommerce&&(r("require","ec","ec.js"),L());var H={hitType:"event",eventCategory:String(b.vtp_eventCategory||c.category),eventAction:String(b.vtp_eventAction||c.action),eventLabel:w(String,b.vtp_eventLabel||c.label),eventValue:w(Fe,b.vtp_eventValue||
c.value)};z(M,H,!1);r("send",H);}else if("TRACK_SOCIAL"==b.vtp_trackType){}else if("TRACK_TRANSACTION"==b.vtp_trackType){}else if("TRACK_TIMING"==
b.vtp_trackType){}else if("DECORATE_LINK"==b.vtp_trackType){}else if("DECORATE_FORM"==b.vtp_trackType){}else if("TRACK_DATA"==b.vtp_trackType){}else{b.vtp_enableEcommerce&&(r("require","ec","ec.js"),L());if(b.vtp_doubleClick||"DISPLAY_FEATURES"==b.vtp_advertisingFeaturesType){var za="_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,
"");r("require","displayfeatures",void 0,{cookieName:za})}"DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==b.vtp_advertisingFeaturesType&&(za="_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,""),r("require","adfeatures",{cookieName:za}));M?r("send","pageview",M):r("send","pageview");b.vtp_autoLinkDomains&&dd(n,b.vtp_autoLinkDomains,!!b.vtp_useHashAutoLink,!!b.vtp_decorateFormsAutoLink);}if(!a){var Aa=
b.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";b.vtp_useInternalVersion&&!b.vtp_useDebugVersion&&(Aa="internal/"+Aa);a=!0;bg(Y("https:","http:","//www.google-analytics.com/"+Aa,d&&d.forceSSL),function(){var a=bd();a&&a.loaded||b.vtp_gtmOnFailure();},b.vtp_gtmOnFailure)}})}();
Z.a.opt=["google"],function(){var a;(function(a){Z.__opt=a;Z.__opt.b="opt";Z.__opt.g=!0})(function(b){var c={};if(b.vtp_gaSettings){var d=b.vtp_gaSettings;Ee(U(d.vtp_fieldsToSet,"fieldName","value"),c);b.vtp_gaSettings=null;d.vtp_fieldsToSet=void 0;var e=y(d,void 0);b=y(b,e)||{}}Ee(U(b.vtp_fieldsToSet,"fieldName","value"),c);var f=cd(b.vtp_functionName);f.r=!0;var h="",k="";b.vtp_setTrackerName&&"string"===typeof b.vtp_trackerName?""!==b.vtp_trackerName&&(k=b.vtp_trackerName,h=k+"."):(k="gtm"+yc(),
h=k+".");var l={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},m={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0},n=function(a,
b,c){var d=0,e;for(e in a)if(a.hasOwnProperty(e)&&(c&&l[e]||!c&&void 0===l[e])){var f=m[e]?tc(a[e]):a[e];"anonymizeIp"!==e||f||(f=void 0);b[e]=f;d++}return d},p={name:k};n(c,p,!0);var q={"&gtm":Af(!0)};n(c,q,!1);var t=encodeURI(Y("https:","http:","//www.google-analytics.com/"+(b.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js"),!!c.forceSSL));f("create",b.vtp_trackingId,p);f(h+"set",q);f(h+"require",b.vtp_optimizeContainerId,{dataLayer:"dataLayer"});f(b.vtp_gtmOnSuccess);f(h+"require",
"render");a||(a=!0,bg(t,function(){return bd().loaded||b.vtp_gtmOnFailure()},b.vtp_gtmOnFailure));var r=X("dataLayer"),w=r&&r.hide;w&&w.end&&(w[b.vtp_optimizeContainerId]=!0)})}();Z.a.cid=["google"],function(){(function(a){Z.__cid=a;Z.__cid.b="cid";Z.__cid.g=!0})(function(){return hc.o})}();
Z.a.aev=["google"],function(){var a=void 0,b="",c=0,d=void 0,e={ATTRIBUTE:"gtm.elementAttribute",CLASSES:"gtm.elementClasses",ELEMENT:"gtm.element",ID:"gtm.elementId",HISTORY_CHANGE_SOURCE:"gtm.historyChangeSource",HISTORY_NEW_STATE:"gtm.newHistoryState",HISTORY_NEW_URL_FRAGMENT:"gtm.newUrlFragment",HISTORY_OLD_STATE:"gtm.oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"gtm.oldUrlFragment",TARGET:"gtm.elementTarget"},f=function(a){var b=V(e[a.vtp_varType],1);return void 0!==b?b:a.vtp_defaultValue};(function(a){Z.__aev=
a;Z.__aev.b="aev";Z.__aev.g=!0})(function(e){switch(e.vtp_varType){case "TEXT":var h,l=V("gtm.element",1),m=V("event",1),n=Number(new Date);a===l&&b===m&&c>n-250?h=d:(d=h=l?Sa(l):"",a=l,b=m);c=n;return h||e.vtp_defaultValue;case "URL":var p=String(V("gtm.elementUrl",1)||e.vtp_defaultValue||""),q=S(p);return e.vtp_component&&"URL"!=e.vtp_component?R(q,e.vtp_component,e.vtp_stripWww,e.vtp_defaultPages,e.vtp_queryKey):p;case "ATTRIBUTE":var t;if(void 0===e.vtp_attribute)t=f(e);else{var r=V("gtm.element",
1);t=Pa(r,e.vtp_attribute)||e.vtp_defaultValue||""}return t;default:return f(e)}})}();
Z.a.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.b="gas";Z.__gas.g=!0})(function(a){var b=y(a,void 0),c=b;c[T.K]=null;c[T.xc]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();
Z.a.awct=["google"],function(){var a=!1,b=[],c=function(a){var b=X("google_trackConversion"),c=a.gtm_onFailure;"function"==typeof b?b(a)||c():c()},d=function(){for(;0<b.length;)c(b.shift())},e=function(b){return function(){d();a=!1;var c=ag[b];c&&3==c.status&&(ag[b]=void 0)}},f=function(){return function(){d();b={push:c};}};(function(a){Z.__awct=a;Z.__awct.b="awct";Z.__awct.g=!0})(function(c){var d={google_conversion_domain:"",
google_conversion_id:c.vtp_conversionId,google_conversion_label:c.vtp_conversionLabel,google_conversion_value:c.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:c.vtp_gtmOnSuccess,gtm_onFailure:c.vtp_gtmOnFailure,google_gtm:Af(void 0)};c.vtp_currencyCode&&(d.google_conversion_currency=c.vtp_currencyCode);c.vtp_orderId&&(d.google_conversion_order_id=c.vtp_orderId);c.vtp_allowReadGaCookie&&(d.google_read_ga_cookie_opt_in=!0);!c.hasOwnProperty("vtp_enableConversionLinker")||c.vtp_enableConversionLinker?
(c.vtp_conversionCookiePrefix&&(d.google_gcl_cookie_prefix=c.vtp_conversionCookiePrefix),d.google_read_gcl_cookie_opt_out=!1):d.google_read_gcl_cookie_opt_out=!0;b.push(d);a||(a=!0,bg("//www.googleadservices.com/pagead/conversion_async.js",f(),e("//www.googleadservices.com/pagead/conversion_async.js")))})}();
Z.a.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.b="smm";Z.__smm.g=!0})(function(a){var b=a.vtp_input,c=U(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();



Z.a.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.b="paused";Z.__paused.g=!0})(function(a){Q(a.vtp_gtmOnFailure)})}();Z.a.hid=["google"],function(){(function(a){Z.__hid=a;Z.__hid.b="hid";Z.__hid.g=!0})(function(){return he.Ea})}();
Z.a.html=["customScripts"],function(){var a=function(b,c,f,h){return function(){try{if(0<c.length){var d=c.shift(),e=a(b,c,f,h);if("SCRIPT"==String(d.nodeName).toUpperCase()&&"text/gtmscript"==d.type){var m=G.createElement("script");m.async=!1;m.type="text/javascript";m.id=d.id;m.text=d.text||d.textContent||d.innerHTML||"";d.charset&&(m.charset=d.charset);var n=d.getAttribute("data-gtmsrc");n&&(m.src=n,La(m,e));b.insertBefore(m,null);n||e()}else if(d.innerHTML&&0<=d.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];d.firstChild;)p.push(d.removeChild(d.firstChild));b.insertBefore(d,null);a(d,p,e,h)()}else b.insertBefore(d,null),e()}else f()}catch(q){Q(h)}}};var b=function(a,b,c){$c(function(){var d,e=ic;e.postscribe||(e.postscribe=gc);d=e.postscribe;var f={done:b},m=G.createElement("div");m.style.display="none";m.style.visibility="hidden";G.body.appendChild(m);try{d(m,a,f)}catch(n){Q(c)}})};var c=function(d){if(G.body){var e=
d.vtp_gtmOnFailure,f=ug(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.ib,k=f.J;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(G.body,Ta(h),k,e)()}else Zf(function(){c(d)},200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0}();

Z.a.dbg=["google"],function(){(function(a){Z.__dbg=a;Z.__dbg.b="dbg";Z.__dbg.g=!0})(function(){return!1})}();


Z.a.lcl=[],function(){function a(){var a=X("document"),d=0,e=function(c){var e=c.target;if(e&&3!==c.which&&(!c.timeStamp||c.timeStamp!==d)){d=c.timeStamp;e=gg(e,["a","area"]);if(!e)return c.returnValue;var f=c.defaultPrevented||!1===c.returnValue,l=Ke("lcl",f?"nv.mwt":"mwt",0),m=He(e);m.event="gtm.linkClick";if(f){var n=ng("lcl","nv.ids",[]).join(",");if(n)m["gtm.triggers"]=n;else return}else{var p=ng("lcl","ids",[]).join(",");m["gtm.triggers"]=p}if(b(c,e,a)&&!f&&l&&e.href){var q=X((e.target||"_self").substring(1)),
t=!0;if(eg(m,function(){t&&q&&(q.location.href=e.href)},l))t=!1;else return c.preventDefault&&c.preventDefault(),c.returnValue=!1}else eg(m,function(){},l||2E3);return!0}};Na(a,"click",e,!1);Na(a,"auxclick",e,!1)}function b(a,b,e){if(2===a.which||a.ctrlKey||a.shiftKey||a.altKey||a.metaKey)return!1;var c=b.href.indexOf("#"),d=b.target;if(d&&"_self"!==d&&"_parent"!==d&&"_top"!==d||0===c)return!1;if(0<c){var k=Va(S(b.href)),l=Va(S(e.location));return k!==l}return!0}(function(a){Z.__lcl=a;Z.__lcl.b="lcl";
Z.__lcl.g=!0})(function(b){var c=void 0===b.vtp_waitForTags?!0:b.vtp_waitForTags,e=void 0===b.vtp_checkValidation?!0:b.vtp_checkValidation,f=Number(b.vtp_waitForTagsTimeout);if(!f||0>=f)f=2E3;var h=b.vtp_uniqueTriggerId||"0";if(c){var k=function(a){return Math.max(f,a)};Je("lcl","mwt",k,0);e||Je("lcl","nv.mwt",k,0)}var l=function(a){a.push(h);return a};mg("lcl","ids",l,[]);e||mg("lcl","nv.ids",l,[]);if(!og("lcl")){a();pg("lcl");var m=Ke("lcl","legacyTeardown",void 0);m&&m()}Q(b.vtp_gtmOnSuccess)})}();


var Tg={macro:function(a){if(he.Ya.hasOwnProperty(a))return he.Ya[a]}};Tg.dataLayer=Fc;Tg.onHtmlSuccess=he.Rb(!0);Tg.onHtmlFailure=he.Rb(!1);Tg.callback=function(a){lc.hasOwnProperty(a)&&pc(lc[a])&&lc[a]();delete lc[a]};Tg.Qc=function(){ic[hc.o]=Tg;mc=Z.a;Tb=Tb||he;Xb=Sc};
Tg.Gd=function(){ic=C.google_tag_manager=C.google_tag_manager||{};if(ic[hc.o]){var a=ic.zones;a&&a.unregisterChild(hc.o)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Mb.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)Pb.push(e[f]);for(var h=b.predicates||[],k=0;k<h.length;k++)Ob.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},q=0;q<n.length;q++)p[n[q][0]]=Array.prototype.slice.call(n[q],1);Nb.push(p)}Rb=Z;Ae();Tg.Qc();ge();Vc=!1;Wc=0;if("interactive"==
G.readyState&&!G.createEventObject||"complete"==G.readyState)Yc();else{Na(G,"DOMContentLoaded",Yc);Na(G,"readystatechange",Yc);if(G.createEventObject&&G.documentElement.doScroll){var t=!0;try{t=!C.frameElement}catch(w){}t&&Zc()}Na(C,"load",Yc)}Td=!1;"complete"===G.readyState?Vd():Na(C,"load",Vd);a:{
if(!id)break a;ld();od=void 0;pd={};md={};rd=void 0;qd={};nd="";sd=jd();C.setInterval(ld,864E5);}}};Tg.Gd();

})()
