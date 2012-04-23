(function() {
  $.fn.outer = function() {
    return $( $('<div></div>').html(this.clone()) ).html();
  }
  $.create_overlay = function() {
    // add overlay
    $('body').append('<div class="overlay"></div>');
    $('.overlay').css({ 
      'width':$(document).width() +'px', 
      'height': $(document).height() +'px',
      'z-index':'1000',
      'position':'fixed',
      'top':'0',
      'left':'0',
      'background-color':'#000',
      'filter':'alpha(opacity=80)',
      'opacity':'0.8'
    });
  }

  function close_lightbox () {
    $('#light_box').remove();
    $('.overlay').remove();
  }

  $.light_box = function (content, options) {
    if(options == null) {
      options = {};
    }
    // setup styles based on width
    var width = 450;

    var styles = {
      'z-index':'9000',
      'width':'450px',
      'position':'absolute',
      'background-color':'#fff',
      'padding':'20px 25px',
      'border':'1px solid black'
    };
    
    if(options.styles) {
      for(var style in options.styles) {
        if(options.styles.hasOwnProperty(style) && styles[style] !== null) {
          if(style == 'width') {
            width = parseInt(options.styles[style]); 
          }
          styles[style] = options.styles[style];
        }
      }
    }

    var d_width = $(document).width();
    var l = (d_width / 2)  - (width / 2);
    var t = (150 + $(document).scrollTop());
    
    if(options.cursor && options.e) {
      var e = options.e;
      styles['left'] = e.clientX;
      styles['top'] = e.clientY;
    } else {
      styles['left'] = l + 'px';
      styles['top'] = t + 'px';
    }
    
    // create box element
    var box = $('<div id="light_box"><a class="close">X</a>'+ content +'</div>');
    box.css(styles);
    
    if(options.fadein) {
      box.css({
        'display':'none'
      });
    }
    
    $('body').append(box.outer());
    
    $('#light_box').fadeIn();
    
    $('.close').css({
      'position':'absolute',
      'top':'15px',
      'left': (width+20) + 'px'
    }).click(function() {
      close_lightbox();
    });
  }
})();