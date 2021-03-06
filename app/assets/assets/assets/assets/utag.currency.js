var tealiumiq_currency = {
    ts:"201609070100",
    rates:{"BZD":1.995728,"YER":250.128999,"SLL":5624.5,"ERN":15.4,"NGN":312.2318,"CRC":550.102804,"VEF":9.976471,"LAK":8104.3425,"CLP":666.167398,"DZD":109.27706,"CUC":1,"BYN":1.9646,"SZL":14.13237,"MOP":7.977894,"BYR":20026.25,"MUR":35.263713,"WST":2.5335,"LRD":91.75,"MMK":1215.365,"KGS":69.062999,"PYG":5539.193333,"IDR":13132.583333,"GTQ":7.534016,"CAD":1.286956,"AWG":1.79,"TTD":6.683636,"PKR":104.3889,"UZS":2991.825,"XCD":2.69902,"VUV":106.256668,"XOF":587.226282,"KMF":437.549996,"AZN":1.65,"XPD":0.001488,"MNT":2215,"ANG":1.776175,"LBP":1509.905,"KES":101.25837,"GBP":0.745135,"BTN":66.486916,"CDF":978.1595,"CLF":0.025027,"SEK":8.493916,"AFN":66.654149,"KZT":340.1814,"ZMK":5252.024745,"DKK":6.626154,"AMD":474.725001,"SCR":13.21672,"FJD":2.04765,"SHP":0.745135,"ALL":122.680801,"TOP":2.24545,"ZMW":9.973168,"UGX":3379.88,"OMR":0.384977,"DJF":177.420127,"BND":1.352138,"TND":2.203301,"SBD":7.833717,"GHS":3.948926,"GNF":9070.79,"BOB":6.900713,"CVE":98.505916,"IMP":0.745135,"ARS":15.00133,"GMD":42.70396,"MWK":718.205298,"BDT":78.27838,"KWD":0.301751,"EUR":0.8889,"CHF":0.972106,"XAG":0.05004938,"SRD":7.3575,"DOP":46.04709,"PEN":3.375752,"KPW":900.09,"SVC":8.72984,"SGD":1.348756,"TWD":31.2598,"USD":1,"BGN":1.742993,"MAD":9.728496,"GGP":0.745135,"SAR":3.750192,"AUD":1.3017,"KYD":0.824813,"KRW":1103.075008,"TRY":2.928049,"GIP":0.745135,"XAU":0.00074577,"NAD":14.13841,"CZK":24.05846,"JMD":127.047901,"BSD":1,"UYU":28.64038,"MXN":18.33303,"BTC":0.001636473726,"BWP":10.6907,"GYD":204.938999,"LYD":1.382605,"THB":34.61224,"EGP":8.875322,"SDG":6.068934,"MKD":54.94081,"AED":3.672911,"JOD":0.708206,"JPY":102.0929,"ZAR":14.08016,"HRK":6.672781,"AOA":165.554165,"RWF":798.341254,"CUP":24.728383,"BBD":2,"PGK":3.15645,"LKR":145.338899,"RON":3.961947,"JEP":0.745135,"PLN":3.861496,"TJS":7.8691,"IQD":1166.1166,"MDL":19.71212,"MYR":4.063625,"CNY":6.674496,"LVL":0.625079,"INR":66.37367,"FKP":0.745135,"NIO":28.82226,"PHP":46.52897,"HNL":22.85104,"HKD":7.755344,"NZD":1.349138,"BRL":3.210371,"MTL":0.683602,"RSD":109.94284,"SOS":583.327833,"EEK":13.9666,"MZN":74.505001,"NOK":8.203911,"GEL":2.2965,"ISK":115.4935,"ILS":3.757129,"LSL":14.09337,"HUF":275.608098,"UAH":26.75068,"RUB":64.65439,"BMD":1,"IRR":30084.5,"MGA":3033.91,"MVR":15.276667,"QAR":3.641113,"VND":22316.15,"MRO":355.031667,"NPR":106.3903,"ZWL":322.322775,"COP":2899.201667,"TZS":2183.85,"BIF":1662.700012,"XPT":0.000882,"SYP":214.673333,"KHR":4097.9925,"HTG":64.671475,"BHD":0.376972,"XDR":0.715583,"XAF":585.66298,"STD":21920.85,"PAB":1,"BAM":1.742935,"LTL":3.038827,"TMT":3.467967,"ETB":22.06909,"XPF":106.350251},
    convert:function(a,f,t){
		// Convert that value to an array
		var isString = typeof a == "string",
			converted = isString ? [a] : a;

		// Iterate over the values to convert each one
		for (var i=0; i<converted.length; i++) {
			converted[i] = parseFloat(converted[i]);
			f = f.toUpperCase();
			t = t.toUpperCase();
			if (converted[i] > 0 && this.rates[f] > 0 && this.rates[t] > 0){
				var v = converted[i] / this.rates[f] * this.rates[t];
				converted[i] = v.toFixed(2);
			}
		}

		// Return the value we accepted
		if (isString) return converted[0];
		else return converted;
    }
}