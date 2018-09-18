(function() {
	function getCookie(name) {
	    return unescape((document.cookie.match('(^|; )' + name + '=([^;]*)') || 0)[2] || "");
	}

	function reset(w, doc) {
		var n=null;
		w.turn_beacon_data=n;
		w.turn_beacon_price=n;
		w.turn_beacon_currency=n;
		w.turn_beacon_url=n;
		w.turn_client_track_id=n;
		w.turn_beacon_referrer_url=n;
		w.turn_beacon_redirect_url=n;
		w.fpcid=n;
	}

	function quote(x) {
		return x != null ? '"' + x + '"' : '""' ;
	}

	function encode(x) {
		if(typeof encodeURIComponent == "function") {
			return encodeURIComponent(x);
		} else { 
			return escape(x);
		}
	}
	
	function setDefaults(w, doc) {
		var fpcid = getCookie('fpcid');
		if (parseInt(fpcid) > 0) {
			w.fpcid = fpcid;
		}
	}
	
	function addBeaconUrlParam(w, paramName, paramValue) {
		if(paramValue != null) {
			w.turn_beacon_url += "&" + paramName + "=" + encode(paramValue);
		}
	}
	
		
	function setBeaconUrl(w, doc) {
					w.turn_beacon_url = "https://r.turn.com/r/beacon?";
							w.turn_beacon_data = "NVw2Ie1slHyQzaQ7YtSQKW4QVMVD9zfQlc0368Wwha-zMF9_j_4JiPpEkRwfQhIo6B_U4KgFk8-dfggksbDlsg";
			addBeaconUrlParam(w, "b2", w.turn_beacon_data);
				addBeaconUrlParam(w, "jsb", "1");
					addBeaconUrlParam(w, "bprice", w.turn_beacon_price);
							addBeaconUrlParam(w, "currency", w.turn_beacon_currency);
							addBeaconUrlParam(w, "cid", w.turn_client_track_id);	
				addBeaconUrlParam(w, "rnd", Math.random());
					addBeaconUrlParam(w, "ref", w.turn_beacon_referrer_url);	
							addBeaconUrlParam(w, "url", w.turn_beacon_redirect_url);	
				if (w.fpcid) {
			addBeaconUrlParam(w, "fpcid", w.fpcid);
		}

	}
	
	function beaconImg(w, doc) {
					doc.write('<img height="1" width="1" border="0"');
				doc.write(' src=' + quote(w.turn_beacon_url));
		doc.write('>');
		afterBeaconImg(doc);
	}

	function afterBeaconImg(doc) {
								
							doc.write('<script src="//action.dstillery.com/orbserv/nsjs?adv=cl1013867&ns=1876&nc=MolekuleProduct&ncv=48&dstOrderId=[OrderId]&dstOrderAmount=[OrderAmount]" type="text/javascript"></script>\n<iframe width="0" height="0" name="Trade Desk Tracking - Product Page" frameborder="0" scrolling="no" src="//insight.adsrvr.org/tags/kzfwkqx/hltuztq/iframe"></iframe>\n<!-- Activity name for this tag: Molekule Product Page -->\n<script type=\'text/javascript\'>\nvar axel = Math.random()+"";\nvar a = axel * 10000000000000;\ndocument.write(\'<img src="https://pubads.g.doubleclick.net/activity;xsp=4351937;ord=\'+ a +\'?" width=1 height=1 border=0/>\');\n</script>\n<noscript>\n<img src="https://pubads.g.doubleclick.net/activity;xsp=4351937;ord=1?" width=1 height=1 border=0/>\n</noscript>')
				
					}
	
	setDefaults(window, document);
	setBeaconUrl(window, document);

				beaconImg(window, document);
		reset(window, document);
		
			
}
)()