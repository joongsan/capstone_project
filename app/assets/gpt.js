(function(){var window=this;var a=this;var b=function(c,e){var d=parseFloat(c);return isNaN(d)||1<d||0>d?e:d},f=function(c,e){var d=parseInt(c,10);return isNaN(d)?e:d},g=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,h=function(c,e){if(!c)return e;var d=c.match(g);return d?d[0]:e};var k=b("0.02",0),l=b("0",0);var m=b("0",0),n=b("0.001",0),p=f("1500",1500),q=b("0.01",0),r=b("1",0),t=b("0.5",0),u=b("",.001),v=f("",200),w=b("0.01",0),x=/^true$/.test("")?
!0:!1,y=b("0",0),z=b("0.01",0),B=b("0.1",0),C=b("0.01",0),D=b("1",0),E=b("",.001),F=b("0",0),aa=b("0.1",0),ba=b("0.0001",0),G=f("95",0),ca=f("95",0),H=b("0",
0),da=b("0",0),ea=b("0.1",0),fa=b("0.001",0),ga=b("0.05",0),ha=b("1",0),ia=b("0.05",0),ja=b("0.001",0),ka=b("0.05",0),la=b("0",0),ma=b("0.001",0),na=b("0",
0),oa=b("0",0),pa=b("0.00001",0),qa=b("0.5",0),ra=b("0.05",0),sa=b("0.95",0),ta=b("0",0),ua=b("0",0),va=b("0",0),wa=b("0",0),xa=b("0",0),I=b("0",
0);var ya=/^true$/.test("false")?!0:!1;var J=function(c,e){if(!(1E-4>Math.random())){var d=Math.random();if(d<e){var za=window;try{var A=new Uint32Array(1);za.crypto.getRandomValues(A);d=A[0]/65536/65536}catch(Ba){d=Math.random()}return c[Math.floor(d*c.length)]}}return null};var K=function(){return a.googletag||(a.googletag={})},L=function(c,e){var d=K();d.hasOwnProperty(c)||(d[c]=e)};var M={};M["#1#"]=h("","pagead2.googlesyndication.com");M["#2#"]=h("","pubads.g.doubleclick.net");M["#3#"]=h("","securepubads.g.doubleclick.net");M["#6#"]=function(c){try{for(var e=null;e!=c;e=c,c=c.parent)switch(c.location.protocol){case "https:":return!0;case "http:":case "file:":return!1}}catch(d){}return!0}(window);M["#7#"]=k;M["#10#"]=m;M["#11#"]=n;M["#13#"]=p;M["#16#"]=q;M["#17#"]=r;M["#18#"]=t;M["#20#"]=l;M["#23#"]=u;
M["#24#"]=v;M["#27#"]=w;M["#28#"]=y;M["#29#"]=z;M["#31#"]=B;M["#33#"]=h("","pagead2.googlesyndication.com");M["#34#"]=D;M["#36#"]=x;M["#37#"]=C;M["#38#"]=E;M["#39#"]="";M["#40#"]=F;M["#45#"]=aa;M["#46#"]=ya;M["#47#"]=ba;M["#49#"]=(new Date).getTime();M["#53#"]="";M["#54#"]=da;M["#55#"]=ea;M["#56#"]=fa;M["#57#"]=ga;M["#58#"]=ha;M["#59#"]=ia;M["#60#"]=ja;M["#61#"]=ka;M["#62#"]=la;M["#63#"]=ma;M["#64#"]=na;M["#65#"]=oa;M["#66#"]=pa;
M["#67#"]=qa;M["#68#"]=ra;M["#69#"]=sa;M["#70#"]=ta;M["#71#"]=ua;M["#72#"]=va;M["#73#"]=wa;M["#74#"]=xa;M["#75#"]="";M["#76#"]="";L("_vars_",M);L("getVersion",function(){return"94"});var Aa={};var N=K(),O=(N.fifWin||window).document;L("cmd",[]);
if("function"==function(c){var e=typeof c;if("object"==e)if(c){if(c instanceof Array)return"array";if(c instanceof Object)return e;var d=Object.prototype.toString.call(c);if("[object Window]"==d)return"object";if("[object Array]"==d||"number"==typeof c.length&&"undefined"!=typeof c.splice&&"undefined"!=typeof c.propertyIsEnumerable&&!c.propertyIsEnumerable("splice"))return"array";if("[object Function]"==d||"undefined"!=typeof c.call&&"undefined"!=typeof c.propertyIsEnumerable&&!c.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==e&&"undefined"==typeof c.call)return"object";return e}(N.evalScripts))N.evalScripts();else{var P=ca||"94",Q="",R,S="partner.googleadservices.com",T=Aa["#6#"]||K()._vars_["#6#"]?"https:":"http:";G&&H&&(R=J([G,P],2*H),R==G?M["#53#"]="108809094":R==P&&(M["#53#"]="108809093",Q="?v="+G));if(!R&&I){var U=J(["108809156","108809157","108809158"],3*I);if(U)if(M["#75#"]=U,"108809156"==U)Q="?v="+P;else if("108809157"==U)S="www.googletagservices.com";else if("108809158"==U)var V=M["#46#"]&&
!M["#6#"],S=V?M["#2#"]:M["#3#"],T=V?"http:":"https:"}var W=T+"//"+S+"/gpt/pubads_impl_"+(R||P)+".js"+Q;M["#76#"]=W;var X=O.currentScript;if(!("complete"==O.readyState||"loaded"==O.readyState||X&&X.async)){var Y="gpt-impl-"+Math.random();try{O.write('<script id="'+Y+'" src="'+W+'">\x3c/script>'),N._syncTagged_=!0}catch(c){}O.getElementById(Y)&&(N._loadStarted_=!0)}if(!N._loadStarted_){var Z=O.createElement("script");Z.src=W;Z.async=!0;(O.head||O.body||O.documentElement).appendChild(Z);N._loadStarted_=
!0}};}).call(this.googletag&&googletag.fifWin?googletag.fifWin.parent:this)

