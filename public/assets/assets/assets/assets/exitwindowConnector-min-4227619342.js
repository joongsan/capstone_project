(function(c){var n=function(r){var p="";var q=r.getMonth();p=r.getFullYear()+((q<9)?("-0"+(q+1)):("-"+(q+1)));var s=r.getDate();p+=(s<10)?("-0"+s):("-"+s);return p;},h=function(){var p="";if(corewizard.core.model.get("tab")==="flight"){p="flightOnly";if(corewizard.core.model.get("packages.hotel")){p=(corewizard.core.model.get("packages.car"))?"flightHotelAndCar":"flightAndHotel";}else{if(corewizard.core.model.get("packages.car")){p="flightAndCar";}}}else{if(corewizard.core.model.get("tab")==="hotel"){p="hotelOnly";if(corewizard.core.model.get("packages.flight")){p=(corewizard.core.model.get("packages.car"))?"flightHotelAndCar":"flightAndHotel";}else{if(corewizard.core.model.get("packages.car")){p="hotelAndCar";}}}else{if(corewizard.core.model.get("tab")==="package"){if(corewizard.core.model.get("packages.hotel")&&corewizard.core.model.get("packages.flight")&&corewizard.core.model.get("packages.car")){p="flightHotelAndCar";}else{if(corewizard.core.model.get("packages.hotel")&&corewizard.core.model.get("packages.flight")){p="flightAndHotel";}else{if(corewizard.core.model.get("packages.hotel")&&corewizard.core.model.get("packages.car")){p="hotelAndCar";}else{if(corewizard.core.model.get("packages.flight")&&corewizard.core.model.get("packages.car")){p="flightAndCar";}}}}}}}return p;},m=function(){var p=corewizard.core.validator;p.validate();return p.get("isValid");},j=function(p){if(!p.enabled){return false;}if(!m()){return false;}if(l()){return false;}return true;},l=function(){var p=window.expads||{};p.updatedTargeting=p.updatedTargeting||{};p.targeting=p.targeting||{};if(p.updatedTargeting.STAB!==c||p.targeting.STAB!==c){return true;}return false;},k=function(H,w,u,F,s){try{if(!j(H)){return;}var C=H[w]||H["default"],t=u.daysUntilDeparture,v=u.departureDate,z=u.returnDate,x=u.regionId,r=u.destionation,D=this.site_id,I=u.origin,G=u.rooms,y=G?G.length:0,p=u.noOfAdults,B=0;if(window.adExitWindow&&window.adExitWindow.config){if(t<=window.adExitWindow.config["shortTermHotelMaxDaysFromNow"]){if(F!==null&&F!==c){C=F.getExitWindowType(w,t);}}}var A=function(){F.initialize(w,D,x,I,r,v,z,y,p,0,0);};var q=window.ExpIntentMedia&&window.ExpIntentMedia.isIntentMediaLoaded();if(C){if((C.indexOf("intentmedia")>-1)&&q){e(v,z);if(window.adExitWindow&&window.adExitWindow.config&&window.adExitWindow.config["intentMediaExitWindowEventType"]==="openExitUnit"){window.ExpIntentMedia.openExitUnit();}else{window.ExpIntentMedia.fillExitUnit();}}else{A();}}}catch(E){console.error("Error loading exit window "+E.name+" : "+E.message);}},i=function(){try{var r=a(),q=(window.adExitWindow&&window.adExitWindow.config)||{},u=h(),p=window.PopUnder||{},s=window.IntentMedia||{};return k(q,u,r,p,s);}catch(t){console.error("Error initializing exit window "+t.name+" : "+t.message);}},g=function(p){return p.get("startDate");},b=function(p){return p.get("endDate");},a=function(){var x={};var r=exp.core.date.CalendarControl.Config;var t=new exp.core.date.Calendar(r);var u=t.getDateFromString(g(corewizard.core.model));var q=t.getDateFromString(b(corewizard.core.model));var s="";var y="";if(u&&q){s=n(u);y=n(q);}if(u){x.daysUntilDeparture=Math.round(Math.abs(((new Date()).setHours(0,0,0,0)-u.getTime())/86400000));}x.departureDate=s;x.returnDate=y;x.regionId=corewizard.core.model.get("regionId");x.destionation=corewizard.core.model.get("destination");x.origin=corewizard.core.model.get("origin");x.rooms=corewizard.core.model.get("rooms");var v=x.rooms?x.rooms.length:0;var z=0;for(var w=0;w<v;w++){var p=(x.rooms[w]&&x.rooms[w].adults)?parseInt(x.rooms[w].adults,10):2;if(!isNaN(p)){z+=p>0?p:2;}}x.noOfAdults=z;return x;},o=function(r){var q="",p=[];if(!corewizard.core.model.get("destination")){return"";}else{p=corewizard.core.model.get("destination").split(",");switch(r){case 1:q=(typeof p[0]==="undefined")?"":p[0].replace(/\(([^)]+)\)/,"");break;case 2:q=(typeof p[1]==="undefined"||p.length<=2)?"":p[1].replace(/\(([^)]+)\)/,"");break;case 3:if(typeof p[2]==="undefined"){q=(typeof p[1]!=="undefined")?p[1].replace(/\(([^)]+)\)/,""):"";}else{q=p[2].replace(/\(([^)]+)\)/,"");}break;default:break;}}return(typeof q==="string")?q.replace(/^\s+|\s+$/g,""):q;},d=function(){var p,q=h();if(q==="flightOnly"){p="homepage.flights";}else{if(q==="hotelOnly"){p="homepage.hotels";}else{if(q==="flightAndHotel"||q==="flightAndCar"||q==="flightHotelAndCar"||q==="hotelAndCar"){p="homepage.packages";}else{p="homepage";}}}if(window.ExpIntentMedia){window.ExpIntentMedia.mergeIMProps({"page_id":p});window.ExpIntentMedia.pageIdUpdated();}},f=function(q,p){if(q){if(q.indexOf("and vicinity")>0||q.indexOf("(")<0){p.input_destination=q;p.flight_destination="";}else{p.flight_destination=q.substr(q.indexOf("(")+1,3);p.input_destination="";}}},e=function(u,z){var s={};var D;var w=h();if(w==="hotelOnly"){s.show_exit_units="Y";if(window.adExitWindow&&window.adExitWindow.config&&window.adExitWindow.config["showExitUnitsForHotelOnly"]){s.show_exit_units=window.adExitWindow.config["showExitUnitsForHotelOnly"];}}if(window.adExitWindow&&window.adExitWindow.config&&window.adExitWindow.config["dateSeparator"]){D=window.adExitWindow.config["dateSeparator"];}s.travel_date_start="";if(D&&u&&u.length>0){var q=u.split(D);if(q&&q.length>2){s.travel_date_start=q[0]+q[1]+q[2];}}s.travel_date_end="";if(D&&z&&z.length>0){var A=z.split(D);if(A&&A.length>2){s.travel_date_end=A[0]+A[1]+A[2];}}setDefaultForRoomOneAdults();var H=corewizard.core.model.get("rooms");var x=(w==="flightOnly")?1:(H?H.length:0);var p=0;var F=0;for(var E=0;E<x;E++){p+=parseInt(H[E].adults);F+=H[E].children.length;}s.adults=p;s.children=F;s.travelers=p+F;if(w==="flightOnly"){s.page_id="homepage.flights";s.trip_type=corewizard.core.model.get("flighttype");var I=corewizard.core.model.get("origin");var v=corewizard.core.model.get("destination");s.flight_origin=I.substr(I.indexOf("(")+1,3);f(v,s);}else{if(w==="hotelOnly"){s.page_id="homepage.hotels";s.hotel_rooms=x;s.hotel_city=o(1);s.hotel_state=o(2);s.hotel_country=o(3);if(corewizard.core.model.get("regionId")!==null&&corewizard.core.model.get("regionId")!==c){s.hotel_market_id=corewizard.core.model.get("regionId");}}else{if(w==="flightAndHotel"||w==="flightHotelAndCar"||w==="flightAndCar"||w==="hotelAndCar"){s.page_id="homepage.packages";if((expads!==null&&expads!==c)&&(expads.experiments!==null&&expads.experiments!==c)){var t=expads.experiments.getExperimentByName("showIntentMediaExitWindow");if(t!==null&&t!==c){var G=t.id+"_"+t.bucket;s.site_reporting_value_01=G;}}if(w.toLowerCase().indexOf("flight")>-1){if(corewizard.core.model.get("flighttype")!==null&&corewizard.core.model.get("flighttype")!==c){s.trip_type=corewizard.core.model.get("flighttype");}if(corewizard.core.model.get("origin")!==null&&corewizard.core.model.get("origin")!==c){var I=corewizard.core.model.get("origin");s.flight_origin=I.substr(I.indexOf("(")+1,3);}if(corewizard.core.model.get("destination")!==null&&corewizard.core.model.get("destination")!==c){var v=corewizard.core.model.get("destination");if(v.toLowerCase().indexOf("vicinity")<0){if(v.toLowerCase().indexOf("(")>-1){var y=v.substr(v.indexOf("(")+1,3);s.flight_destination=y;if(w==="flightAndCar"){s.hotel_airport_code=y;}}}}}if(w.toLowerCase().indexOf("hotel")>-1){if(x!==null&&x!==c){s.hotel_rooms=x;}var C=o(1);if(C!==null&&C!==c){s.hotel_city=C;}var r=o(2);if(r!==null&&r!==c){s.hotel_state=r;}var B=o(3);if(B!==null&&B!==c){s.hotel_country=B;}if(corewizard.core.model.get("regionId")!==null&&corewizard.core.model.get("regionId")!==c){s.hotel_market_id=corewizard.core.model.get("regionId");}}}else{s.page_id="homepage";}}}if(window.ExpIntentMedia){window.ExpIntentMedia.mergeIMProps(s);}};$(document).ready(d);corewizard.core.onStateChange("tab",d);corewizard.core.onStateChange("packages",d);corewizard.core.onSubmit(i);})();
/*!  generated on 2016-09-02 11:17:58.902 PDT(-0700) in 2 ms  */

/*!  served in 0 ms  */
