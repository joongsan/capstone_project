//tealium universal tag - utag.512 ut4.0.201609062118, Copyright 2016 Tealium.com Inc. All Rights Reserved.
window.taq=window.taq||function(){}
window.taq.queue=window.taq.queue=[];try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1,'link':1};u.initialized=false;u.map={"checkInDate":"travel_start_date","checkOutDate":"travel_end_date","utagPageName":"page_type","cp.AB_Test_TripAdvisor":"visitor_segment","tripAdvisorClickId":"refid","ta_event":"track_action","checkout.cartTotal.amount":"gbv","guid":"guid","currencyCode":"currency","checkout.trl":"Order_ID"};u.extend=[function(a,b){try{if(b['utagPageName'].toString().toLowerCase().indexOf('checkout.confirmation'.toLowerCase())>-1){b['ta_event']='BOOKING_CONFIRMATION'}}catch(e){utag.DB(e)}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={"travel_start_date":"","travel_end_date":"","track_action":"","is_member":"","pixel_id":"","page_type":"","base_url":"//www.tripadvisor.com/js3/taevents-c.js","gbv":"","currency":"","partner":""
};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
if(/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)){return}
u.data.pixel_id=u.data.pixel_id||"139170472";u.data.track_action=u.data.track_action||"PAGEVIEW";u.data.travel_start_date=u.data.travel_start_date||"";u.data.travel_end_date=u.data.travel_end_date||"";u.data.is_member=u.data.is_member||"";u.data.page_type=u.data.page_type||"";u.data.visitor_segment=u.data.visitor_segment||"";u.data.refid=u.data.refid||"";u.data.gbv=u.data.gbv?u.data.gbv*100:0;u.data.Order_ID=u.data.Order_ID||"";u.data.currency=u.data.currency||"";u.data.partner=u.data.partner||"Expedia";u.loader_cb=function(){u.initialized=true;taq('init',u.data.pixel_id);taq('track',u.data.track_action,{'travel_start_date':u.data.travel_start_date,'travel_end_date':u.data.travel_end_date,'is_member':u.data.is_member,'page_type':u.data.page_type,'visitor_segment':u.data.visitor_segment,'refid':u.data.refid,'gbv':u.data.gbv,'partner':'Expedia','Order_ID':u.data.Order_ID});};if(!u.initialized){u.loader({"type":"script","src":u.data.base_url,"cb":u.loader_cb,"loc":"script","id":'utag_512'});}else{u.loader_cb();}
}};utag.o[loader].loader.LOAD(id);})("512","expedia.main");}catch(error){utag.DB(error);}