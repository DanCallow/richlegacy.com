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

var simpayApp={};!function(i){"use strict";var s;simpayApp={spFormElList:{},spFormData:{},spStripeData:{},init:function(){s=i(document.body),this.spFormElList=s.find(".simpay-checkout-form"),this.spFormElList.each(function(){var n=i(this);simpayApp.processForm(n),s.trigger("simpayProcessFormElements",[n])}),s.trigger("simpayLoaded")},processForm:function(n){var e,a=n.data("simpay-form-id"),t=simplePayForms[a],r=this.spFormData[a];(r=i.extend({},t.form.integers,t.form.bools,t.form.strings)).formId=a,r.finalAmount=r.amount,r.quantity=1,r.stripeParams=i.extend({},t.stripe.strings,t.stripe.bools),r.oldPanelLabel=void 0!==r.stripeParams.panelLabel?r.stripeParams.panelLabel:"",s.trigger("simpayFormVarsInitialized",[n,r]),e=StripeCheckout.configure({key:r.stripeParams.key,token:function(i,s){n.find(".simpay-stripe-token").val(i.id),n.find(".simpay-stripe-email").val(i.email),simpayApp.handleStripeArgs(n,s),n.find(".simpay-payment-btn").prop("disabled",!0).find("span").text(r.loadingText),n.unbind("submit",[n,r]),n.submit()},opened:function(){},closed:function(){}}),n.find(".simpay-payment-btn").on("click.simpayPaymentBtn",function(i){i.preventDefault(),n.trigger("simpayBeforeStripePayment",[n,r]),simpayApp.submitPayment(n,r,e)}),this.spFormData[a]=r,s.trigger("simpayBindEventsAndTriggers",[n,r])},handleStripeArgs:function(i,s){s.shipping_name&&i.find(".simpay-shipping-name").val(s.shipping_name),s.shipping_address_country&&i.find(".simpay-shipping-country").val(s.shipping_address_country),s.shipping_address_zip&&i.find(".simpay-shipping-zip").val(s.shipping_address_zip),s.shipping_address_state&&i.find(".simpay-shipping-state").val(s.shipping_address_state),s.shipping_address_line1&&i.find(".simpay-shipping-address-line1").val(s.shipping_address_line1),s.shipping_address_city&&i.find(".simpay-shipping-city").val(s.shipping_address_city)},submitPayment:function(i,n,e){simpayApp.setFinalAmount(i,n),n.stripeParams.amount=parseInt(n.finalAmount),i.valid()&&(s.trigger("simpaySubmitPayment",[i,n]),spShared.debugLog("stripeParams",n.stripeParams),e.open(n.stripeParams))},setFinalAmount:function(i,n){var e=n.amount;n.finalAmount=e.toFixed(0),s.trigger("simpayFinalizeAmount",[i,n]),i.find(".simpay-amount").val(n.finalAmount)},formatMoney:function(i){var s,n="%s%v";return i=simpayApp.convertFromCents(i),"left_space"===spGeneral.strings.currencyPosition?n="%s %v":"right"===spGeneral.strings.currencyPosition?n="%v%s":"right_space"===spGeneral.strings.currencyPosition&&(n="%v %s"),s={symbol:spGeneral.strings.currencySymbol,decimal:spGeneral.strings.decimalSeparator,thousand:spGeneral.strings.thousandSeparator,precision:spGeneral.integers.decimalPlaces,format:n},accounting.formatMoney(i,s)},convertFromCents:function(i){return spGeneral.booleans.isZeroDecimal?i:(i/100).toFixed(2)},convertToCents:function(i){return spGeneral.booleans.isZeroDecimal?i:100*i}},i(document).ready(function(i){simpayApp.init()})}(jQuery);

}
/*
     FILE ARCHIVED ON 14:24:47 Dec 04, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:46:21 Mar 27, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  load_resource: 255.231 (2)
  PetaboxLoader3.resolve: 135.405 (2)
  CDXLines.iter: 21.528 (3)
  LoadShardBlock: 209.378 (3)
  exclusion.robots.policy: 0.268
  esindex: 0.013
  exclusion.robots: 0.285
  RedisCDXSource: 0.948
  captures_list: 236.456
  PetaboxLoader3.datanode: 282.618 (5)
*/