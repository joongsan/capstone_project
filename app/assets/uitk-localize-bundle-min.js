define("uitk_localized_priceApi",["uitk_domReady","jquery","uitk"],function(e,t,r){"use strict";function a(e,t,r,a){var n=this;n.price=e,n.currencyCode=r,n.locale=t,!a&&"object"==typeof uitkformatter&&uitkformatter.currencySettings&&uitkformatter.currencySettings[n.locale]&&(a=uitkformatter.currencySettings[n.locale][n.currencyCode]),n.settings=a;try{n._validate()}catch(i){console.log(i.name+": "+i.message)}}return a.prototype={constructor:a,_validate:function(){var e=this,t="LocalizedPrice() requires ",r=function(e){throw new ReferenceError(t+e)};if(e.price){if(e.price&&"string"!=typeof e.price)throw new TypeError(t+"a price as a string");if(isNaN(e.price))throw new TypeError(t+"a price as a string which can be converted in to a number")}else r("a price");e.currencyCode||r("a currencyCode"),e.locale||r("a locale"),e.settings||r("a currency settings to be loaded")},format:function(){var e,t,r=this.settings,a=r.currencyFormat,n=this.price.indexOf("-")!==-1,i=n?this.price.replace("-"," "):this.price,o=a.indexOf(".00")===-1?0:r.scale;return e=n?r.negativeCurrencyFormat.replace("¤","%u").replace("#","%n"):a.replace("¤","%u").replace("#,##0.00","%n").replace("#,##0","%n"),t=I18n.toCurrency(i,{precision:o,separator:r.decimalSeparator,delimiter:r.groupingSeparator,format:e,unit:r.currencySymbol})},_createRoundedPrice:function(e){var a=this,n=t.extend({},a.settings,{scale:0});return r.utils.createLocalizedPrice(e,a.locale,a.currencyCode,n)},roundUp:function(){var e=this,t=Math.ceil(e.price).toString();return e._createRoundedPrice(t)},roundDown:function(){var e=this,t=Math.floor(e.price).toString();return e._createRoundedPrice(t)},roundHalfUp:function(){var e=this,t=Math.round(e.price).toString();return e._createRoundedPrice(t)},roundHalfDown:function(){var e=this,t=Math.round(e.price-1e-5).toString();return e._createRoundedPrice(t)}},r.utils.createLocalizedPrice=function(e,t,r,n){return new a(e,t,r,n)},a}),define("uitk_localized_dateApi",["uitk_domReady","jquery","uitk","exp_datetimeformats"],function(e,t,r,a){"use strict";function n(e,t,r,n,i){var o=this;o.date=e,o.time=t,o.locale=r,o.isDateTime=i,!n&&"object"==typeof a&&a.dateTimeSettings&&a.dateTimeSettings[o.locale]&&(n=a.dateTimeSettings[o.locale]),o.settings=n;try{o._validate()}catch(c){console.log(c.name+": "+c.message)}}var i={javaDateFormats:["yyyy","yy","y","MMMMM","MMMM","MMM","MM","M","dd","d","EEEEE","EEEE","EEE","EE","E"],javaTimeFormats:["HH","H","hh","h","mm","m","ss","s","a","zzzz","zzz","zz","z"],month:["january","february","march","april","may","june","july","august","september","october","november","december"],day:["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]};return n.prototype={constructor:n,_validate:function(){var e=this,t="LocalizedDate() requires ",r=function(e){throw new ReferenceError(t+e)};if(e.isDateTime&&(e.date||r("a date"),e.time||r("a time"),e.locale||r("a locale")),e.date||e.time){if(e.date&&"string"==typeof e.date)e.parseDate(e.date);else if(e.date&&"object"!=typeof e.date)throw new TypeError(t+"a date as an object or a string")}else r("a date or time");if(e.time&&"string"==typeof e.time)e.parseTime(e.time);else if(e.time&&"string"!=typeof e.time)throw new TypeError(t+"a time as a string");e.locale||r("a locale"),e.settings||r("a date settings to be loaded")},parseDate:function(e){for(var t,r,a,n,i,o=this,c=o.settings.calendarPlaceholder,s="",d=[],m=1,l=c.length;m<l&&(s=c.charAt(m),s===c.charAt(m-1)||s===c.charAt(m+1));m++);r=function(e){var t=o.settings.date.format["short"];t.indexOf(s)===-1&&(s=o.checkFormatBreak(t));for(var r=0,a=t.split(s);r<a.length;r++)a[r].indexOf("D")>-1||a[r].indexOf("d")>-1?d.push("day"):a[r].indexOf("M")>-1||a[r].indexOf("m")>-1?d.push("month"):d.push("year");return d},o.formatOrder=r(e),e.indexOf(s)===-1&&(t=o.checkFormatBreak(e)),t="undefined"==typeof t?s:t;var u=e.split(t);a=u[o.formatOrder.indexOf("year")]||(new Date).getFullYear().toString(),n=u[o.formatOrder.indexOf("month")],i=u[o.formatOrder.indexOf("day")],n=1===n.length?"0"+n:n,i=1===i.length?"0"+i:i,o.date=new Date(a+"/"+n+"/"+i)},parseTime:function(e){var t,r,a,n=this,i="",o="",c="GMT";e!==n.time&&(n.time=e),e.indexOf(" ")>-1&&(c=e.split(" ")[e.split(" ").length-1],e=e.split(" ")[0]);try{i=n.checkFormatBreak(e)}catch(s){console.log(s.name+": "+s.message)}(e.indexOf("AM")>-1||e.indexOf("PM")>-1)&&(o=e.indexOf("AM")>-1?"AM":"PM",e=e.replace(o,"")),t=e.split(" ")[0].split(i)[0],r=e.split(" ")[0].split(i)[1],a=e.split(" ")[0].split(i)[2]||"0";try{if(isNaN(t)||isNaN(t))throw new TypeError("The given time does not contain an hour or minute value as a number")}catch(s){console.log(s.name+": "+s.message)}n.formattedTime=[t,r,a,o,c]},setTimeString:function(e){var t=this;t.parseTime(e)},checkFormatBreak:function(e){for(var t,r=this,a=["/",".","-"," ",":"],n=0,i=a.length;n<i&&(t=a[n],!(e.indexOf(t)>-1));n++);if(r.time)if(r.time.indexOf(t)===-1&&e!==r.settings.time.format["short"])r.checkFormatBreak(r.settings.time.format["short"]);else if(r.time.indexOf(t)===-1)throw new TypeError("The formatting separator of the time is not found");if(r.date&&!r.time&&(e.indexOf(t)===-1||e.match(new RegExp(t,"g")).length<2&&e.length>5))throw new TypeError("The formatting separator of the date is not found");return t},convertToLocaleDate:function(e){var r=this;if(!r.date)throw new ReferenceError("LocalizedDate() needs to have a date as an object");var a=r.settings.date.format[e],n=i.month[r.date.getMonth()],o=i.day[r.date.getDay()],c={},s=0;t.each(i.javaDateFormats,function(e,t){if(a.indexOf(t)>-1){var i="{"+s+"}",d=r.jsonDateParser(t,n,o);c[i]=d,a=a.replace(t,i),s++}});for(var d=0;d<s;d++)a=a.replace("{"+d+"}",c["{"+d+"}"]);return a.replace(/'+/g,"")},convertToLocaleTime:function(e){var r=this,a=r.time,n=r.settings.time.format[e],o={h:!(!n.match(/h/g)||!n.match(/H/g)),m:!!(n.match(/m/g)&&n.match(/m/g).length>1&&n.match(/m/g).length%2===1),s:!!(n.match(/s/g)&&n.match(/s/g).length>1&&n.match(/s/g).length%2===1),a:!1,z:!1};if(!a)throw new ReferenceError("LocalizedDate() needs to have a time as a string");if(!r.formattedTime&&a)throw new ReferenceError("LocalizedDate() needs time to be parsed first to execute this method");return t.each(i.javaTimeFormats,function(e,t){if(n.indexOf(t)>-1&&!o[t]){var a=r.jsonTimeParser(t);n=n.replace(t,a)}}),n.replace(/'+/g,"")},jsonDateParser:function(e,t,r){var a,n=this;switch(e){case"yyyy":a=n.date.getFullYear().toString();break;case"yy":a=n.date.getFullYear().toString().slice(-2);break;case"y":a=n.date.getFullYear().toString();break;case"MMMMM":a=n.settings.date.month.narrow[t].toString();break;case"MMMM":a=n.settings.date.month.wide[t].toString();break;case"MMM":a=n.settings.date.month.abbreviated[t].toString();break;case"MM":var i=n.date.getMonth()+1;i=i<10?"0"+i.toString():i.toString(),a=i;break;case"M":a=(n.date.getMonth()+1).toString();break;case"dd":var o=n.date.getDate();o=o<10?"0"+o.toString():o.toString(),a=o;break;case"d":a=n.date.getDate().toString();break;case"EEEEE":a=n.settings.date.weekday.narrow[r].toString();break;case"EEEE":a=n.settings.date.weekday.wide[r].toString();break;case"EEE":a=n.settings.date.weekday.abbreviated[r].toString();break;case"EE":a=n.settings.date.weekday.abbreviated[r].toString();break;case"E":a=n.settings.date.weekday.abbreviated[r].toString()}return a},jsonTimeParser:function(e){var t,r,a,n=this,i=parseInt(n.formattedTime[0]),o=parseInt(n.formattedTime[1]),c=parseInt(n.formattedTime[2]);switch((e.indexOf("s")>-1||e.indexOf("m")>-1||e.indexOf("H")>-1)&&2===e.length,r=function(t){return 2===e.length?t=t<10?"0"+t.toString():t.toString():("0"===t[0]&&(t=t.substr(1)),t.toString())},a=function(e,t){var r="string"==typeof e&&0===e.indexOf("0"),a=n.time.indexOf("AM")>-1,i=n.time.indexOf("PM")>-1;return e=parseInt(e),12===e?a?"H"!==t||i||(e=0):(e=12,n.formattedTime[3]="PM"):24===e||0===e?(e="h"===t?12:0,n.formattedTime[3]="AM"):e>12?("h"===t&&(e%=12),n.formattedTime[3]="PM"):!i&&e<12?n.formattedTime[3]="AM":i?"H"===t&&e<12&&(e+=12):e+=12,e=r&&e<10?"0"+e:String(e)},e){case"HH":i=r(i),i=a(i,"H"),t=i;break;case"H":i=r(i),i=a(i,"H"),t=i;break;case"hh":i=a(i,"h"),i=i<10?"0"+i.toString():i.toString(),t=i;break;case"h":i=a(i,"h"),t=i.toString();break;case"mm":o=r(o),t=o;break;case"m":o=r(o),t=o;break;case"ss":c=r(c),t=c;break;case"s":c=r(c),t=c;break;case"a":t=n.formattedTime[3];break;case"zzzz":t=n.formattedTime[4];break;case"zzz":t=n.formattedTime[4];break;case"zz":t=n.formattedTime[4];break;case"z":t=n.formattedTime[4]}return t},shortDate:function(){var e,t=this;try{e=t.convertToLocaleDate("short")}catch(r){console.log(r.name+": "+r.message)}return e},mediumDate:function(){var e,t=this;try{e=t.convertToLocaleDate("medium")}catch(r){console.log(r.name+": "+r.message)}return e},longDate:function(){var e=this,t="";try{t=e.convertToLocaleDate("long")}catch(r){console.log(r.name+": "+r.message)}return t},fullDate:function(){var e=this,t="";try{t=e.convertToLocaleDate("full")}catch(r){console.log(r.name+": "+r.message)}return t},shortTime:function(){var e,t=this;try{e=t.convertToLocaleTime("short")}catch(r){console.log(r.name+": "+r.message)}return e},mediumTime:function(){var e,t=this;try{e=t.convertToLocaleTime("medium")}catch(r){console.log(r.name+": "+r.message)}return e},longTime:function(){var e=this,t="";try{t=e.convertToLocaleTime("long")}catch(r){console.log(r.name+": "+r.message)}return t},fullTime:function(){var e=this,t="";try{t=e.convertToLocaleTime("full")}catch(r){console.log(r.name+": "+r.message)}return t}},r.utils.createLocalizedDate=function(e,t,r){return new n(e,null,t,r)},r.utils.createLocalizedTime=function(e,t,r){return new n(null,e,t,r)},r.utils.createLocalizedDateTime=function(e,t,r,a){return new n(e,t,r,a,(!0))},n});