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

// Stick Placeholders jQuery Plugin
(function($) {
  var alterParent = function(options, event) {
    var label = $(this).data('label');

    if (event && event.type === 'focusin') {
      label.css('opacity', options.placeholderFocusOpacity);
    } else if (event && event.type === 'focusout') {
      label.css('opacity', options.placeholderOpacity);
    }
    
    if (event && event.type !== 'keydown') {
      toggleLabel(this, label);
    } else {
      // Use timeout to catch val() just after the key is pressed
      // Using keyup is too slow.   
      (function(input) {
        setTimeout(function() {
          toggleLabel(input, label);
        }, 0);
      })(this);
    }
  };
  
  var toggleLabel = function(input, label) {
    if ($(input).val()) {
      label.hide();
    } else {
      label.show();
    }
  };

  $.fn.stickyPlaceholders = function(options) {
    var defaults = {
      wrapperClass: 'sticky-placeholder-wrapper',
      wrapperDisplay: 'block',
      labelClass: 'sticky-placeholder-label',
      placeholderAttr: 'placeholder',
      dataAttr: 'data-sticky-placeholder',
      placeholderColor: '#000',
      placeholderOpacity: 0.5,
      placeholderFocusOpacity: 0.25
    };
    options = $.extend(defaults, options);

    return this.each(function() {
      var input       = $(this),
          placeholder = input.attr(options.placeholderAttr),
          wrapper     = $(this).wrap('<span class="' + options.wrapperClass + '" />').parent().css({'position':'relative', 'display':options.wrapperDisplay}),
          label       = $('<label class="' + options.labelClass + '" for="' + input.attr('id') + '">' + placeholder + '</label>').appendTo(wrapper),
          labelStyle;

      // store a reference to each input's label
      input.data('label', label);

      // remove the placeholder attribute to avoid conflcits
      input.removeAttr('placeholder');
      
      // If the dataAttr is set and it's not equal to the placeholderAttr
      if ( options.dataAttr && options.placeholderAttr !== options.dataAttr ) {
        input.attr('data-sticky-placeholder', placeholder);
      }

      labelStyle = {
        'color': options.placeholderColor,
        'cursor': 'text',
        'font-family': input.css('font-family'),
        'font-weight': input.css('font-weight'),
        'font-size': input.css('font-size'),
        'left': parseInt(input.css('border-left-width'), 10) + parseInt(input.css('margin-left'), 10),
        'line-height': this.currentStyle ? this.currentStyle.lineHeight : input.css('line-height'),
        // fix for an IE/jQuery bug returning 1px when the line-height doesn't have a unit: http://bugs.jquery.com/ticket/2671
        'opacity': options.placeholderOpacity,
        'padding-left': input.css('padding-left'),
        'padding-top': input.css('padding-top'),
        'position': 'absolute',
        'text-transform': input.css('text-transform'),
        'top': parseInt(input.css('border-top-width'), 10) + parseInt(input.css('margin-top'), 10)
      };
      label.css(labelStyle);
      
      // hide the placeholder if the input already has a value
      if (input.val()) {
        label.hide();
      }

      $(this).bind('keydown input focusin focusout', function(event) {
        alterParent.call(this, options, event);
      });
        
      // prevent click/dblclick from selecting the label text
      label.bind('mousedown', function(e) {
        e.preventDefault();
      });
      
      // call alterParent initially without an event to set up the wrapper elements
      alterParent.call(this, options);
    });
  };
})(jQuery);

// call the plugin
jQuery("[placeholder]").stickyPlaceholders();

jQuery(document).ready(function($){

  $(document).on( 'keyup, change', 'input[name="OF_NAME"]', function(){

    var fullName = '',
    firstName = '',
    lastName = '';

    fullName = $('input[name="OF_NAME"]').val();
    fullName = fullName.split(' ');
    console.log( fullName );
    $.each( fullName, function( key, value ) {
      if ( key == 0 ) {
        firstName += value;
      } else if ( key == 1 ) {
        lastName += value;
      } else {
        lastName += ' ' + value;
      }
    });
    $('input[name="FNAME"].optinforms-mailchimp-field').val( firstName );
    $('input[name="LNAME"].optinforms-mailchimp-field').val( lastName );
  });

});

}
/*
     FILE ARCHIVED ON 14:41:24 Dec 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:46:17 Mar 27, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 174.31
  exclusion.robots: 0.13
  exclusion.robots.policy: 0.119
  RedisCDXSource: 39.237
  esindex: 0.01
  LoadShardBlock: 105.925 (3)
  PetaboxLoader3.resolve: 78.941 (3)
  PetaboxLoader3.datanode: 134.484 (5)
  CDXLines.iter: 25.561 (3)
  load_resource: 150.048 (2)
*/