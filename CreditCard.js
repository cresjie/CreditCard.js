/**
 * Author: Cres Jie
 * Description: javascript library for checking credit card
 */
function CreditCard() {
	
	var brands  = {
		'visa'       : /^4\d{12}(\d{3})?$/,
		'mastercard' : /^(5[1-5]\d{4}|677189)\d{10}$/,
		'diners'     : /^3(0[0-5]|[68]\d)\d{11}$/,
		'discover'   : /^6(?:011|5[0-9]{2})[0-9]{12}$/,
		'elo'        : /^((((636368)|(438935)|(504175)|(451416)|(636297))\d{0,10})|((5067)|(4576)|(4011))\d{0,12})$/,
		'amex'       : /^3[47]\d{13}$/,
		'jcb'        : /^(?:2131|1800|35\d{3})\d{11}$/,
		'aura'       : /^(5078\d{2})(\d{2})(\d{11})$/,
		'hipercard'  : /^(606282\d{10}(\d{3})?)|(3841\d{15})$/,
		'maestro'    : /^(?:5[0678]\d\d|6304|6390|67\d\d)\d{8,15}$/,
		'laser'		 : /^(6304|6706|6709|6771)[0-9]{12,15}$/,
		'carte'		 : /^389[0-9]{11}$/,
		'visa_master': /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/,
		'insta_payment': /^63[7-9][0-9]{13}$/,
		'solo'		 : /^(6334|6767)[0-9]{12}|(6334|6767)[0-9]{14}|(6334|6767)[0-9]{15}$/,
		'union'		 : /^(62[0-9]{14,17})$/,
		'koreanlocal' : /^(62[0-9]{14,17})$/,
		'bcglobal'	 : /^(6541|6556)[0-9]{12}$/,
		'rupay'		 : /^6[0-9]{15}$/,	
		'switch'	 : /^(4903|4905|4911|4936|6333|6759)[0-9]{12}|(4903|4905|4911|4936|6333|6759)[0-9]{14}|(4903|4905|4911|4936|6333|6759)[0-9]{15}|564182[0-9]{10}|564182[0-9]{12}|564182[0-9]{13}|633110[0-9]{10}|633110[0-9]{12}|633110[0-9]{13}$/,

	};

	var brandNames  = {
		'visa'       : 'Visa',
		'mastercard' : 'Master Card',
		'diners'     : 'Diners Club',
		'discover'   : 'Discover',
		'elo'        : 'Elo',
		'amex'       : 'American Express',
		'jcb'        : 'JCB',
		'aura'       : 'Aura',
		'hipercard'  : 'Hiper Card',
		'maestro'    : 'Maestro',
		'laser'		 : 'Laser Card',
		'carte'		 : 'Carte Blanche',
		'visa_master': 'Visa Master Card',
		'insta_payment' : 'Insta Payment Card',
		'solo'		 : 'Solo Card',
		'union'		 : 'Union Pay Card',
		'koreanlocal' : 'KoreanLocalCard',
		'bcglobal'	 : 'BCGloba',
		'rupay'		 : 'Rupay Debit Card',
		'switch'	 : 'Switch Card'
	}


	this.getBrandCode = function(number){
		
		for(var code in brands){
			if( brands[code].test(number) ){
				return code;
			}
		}

		return null;
	}

	this.getBrandName = function(number) {
		var code = this.getBrandCode(number);
		if( code ) { 
			return this.getBrandNameByCode(code);
		}
	}
	
	this.checkByBrand = function(code, number) {
		if( brands[code] ){
			return brands[code].test(number);
		}
	}

	this.getBrandNameByCode = function(code) {
		return brandNames[code];
	}

	if( !(this instanceof CreditCard) ) {
			return new CreditCard();
	}

	return this;
}