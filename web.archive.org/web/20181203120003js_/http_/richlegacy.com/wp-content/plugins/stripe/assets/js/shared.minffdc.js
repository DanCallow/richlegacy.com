var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/*! WP Simple Pay Lite for Stripe - 2.0.9
 * https://wpsimplepay.com/
 * Copyright (c) Moonstone Media Group 2018
 * Licensed GPLv2+ */

var spShared={};!function(n){"use strict";var r;spShared={init:function(){(r=n(document.body)).find(".simpay-currency-format").on("blur.simpayCurrencyFormat",function(r){spShared.formatCurrencyField(n(this))}),r.find(".simpay-amount-input").on("blur.simpayValidateAmount",function(r){spShared.validateAmount(n(this))}),r.find(".simpay-currency-format").trigger("blur.simpayCurrencyFormat"),r.find(".simpay-amount-input").trigger("blur.simpayValidateAmount")},debugLog:function(n,r){"undefined"!=typeof spGeneral&&!0===spGeneral.booleans.scriptDebug&&console.log(n,r)},formatCurrencyField:function(n){n.val(function(r,a){return n.hasClass("simpay-allow-empty")&&!n.val()?"":accounting.formatMoney(accounting.unformat(a,spGeneral.strings.decimalSeparator),"",2,spGeneral.strings.thousandSeparator,spGeneral.strings.decimalSeparator)})},validateAmount:function(n){var r=spShared.unformatCurrency(n.val());if(!r||spGeneral.integers.minAmount>parseFloat(r))return n.val(""),!1;-1!==(r=r.replace(".",spGeneral.strings.decimalSeparator)).indexOf("-")&&(r=r.replace("-","")),n.val(r)},unformatCurrency:function(n){return n=accounting.unformat(n,spGeneral.strings.decimalSeparator).toString(),spGeneral.booleans.isZeroDecimal||(n=parseFloat(n).toFixed(2)),n}},n(document).ready(function(n){spShared.init()})}(jQuery);

}
/*
     FILE ARCHIVED ON 12:00:03 Dec 03, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:46:20 Mar 27, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  CDXLines.iter: 24.449 (3)
  load_resource: 1208.81 (2)
  PetaboxLoader3.resolve: 103.578 (2)
  LoadShardBlock: 77.337 (3)
  RedisCDXSource: 7.522
  esindex: 0.026
  PetaboxLoader3.datanode: 1098.495 (5)
  captures_list: 113.269
  exclusion.robots: 0.248
  exclusion.robots.policy: 0.236
*/