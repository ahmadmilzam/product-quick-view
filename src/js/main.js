;(function($) {
  'use strict';

  $(function() {

    // constant

    // IMG_WIDTH --> this is the quick view image
    // MAX_QUICK_WIDTH --> this is the max-width of the quick-view panel
    var IMG_WIDTH = 400,
        MAX_QUICK_WIDTH = 900;

    var $body = $('body'),
        $modal = $('#js-modal'),
        $quickViewBtn = $('.js-quickView');

    //open the quick view panel
    $quickViewBtn.on('click', function(event){
      var $this = $(this),
          productId = parseInt($this.data('id')),
          defaultText = $this.html(),
          loadText = 'Please wait...',
          selectedItem = $this.closest('.item');

      $this.html(loadText);

      $.ajax({
        url: 'ajax.php',
        type: 'GET',
        dataType: 'json',
        data: {id: productId},
      })
      .done(function(response, textStatus, jqXHR) {
        $modal.find('.modal__body').html(populateTemplate(response));

        $body.addClass('is-visible');
        animateQuickView(selectedItem, 'open');
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus, errorThrown);
        return;
      })
      .always(function() {
        $this.html(defaultText);
      });

      return false;

    });

    //close the quick view panel
    $body.on('click', function(event){
      if( $(event.target).is('.modal__close') || $(event.target).is('body.overlay')) {
        closeQuickView();
      }
    });
    $(document).keyup(function(event){
      //check if user has pressed 'Esc'
        if(event.which=='27'){
        closeQuickView();
      }
    });

    //center quick-view on window resize
    $(window).on('resize', function(){
      if($modal.hasClass('is-visible')){
        window.requestAnimationFrame(resizeQuickView);
      }
    });

    /**
     * increment decrement stock item
     **/
    var $quantityInput = $('.js-quantityInput'),
        $quantityBtn = $('.js-quantityBtn');

    $quantityBtn.on("click",function(){

      var $this = $(this),
          type = $this.data('type'),
          oldVal = $quantityInput.val(),
          limitVal = parseInt($quantityInput.data('limit'));

      if( type == "add" ){
        var newVal = parseFloat(oldVal)+1;

        if( newVal > limitVal ){
          newVal = limitVal;
        }
      } else{
        if(oldVal>0) {
          var newVal = parseInt(oldVal)-1;
        } else {
          newVal = 0;
        }
      }

      $quantityInput.val(newVal);

      $( document ).trigger( "quantityChange", [ $quantityInput ] );

    });

    function resizeQuickView() {
      var quickViewLeft = ($(window).width() - $modal.width())/2,
          quickViewTop = ($(window).height() - $modal.height())/2;
      $modal.css({
          "top": quickViewTop,
          "left": quickViewLeft,
      });
    }

    function animateQuickView(item, animationType) {
      //store some box model data (width, top position, ...)
      //store window data to calculate quick view modal position
      var topSelected = item.offset().top - $(window).scrollTop(),
          leftSelected = item.offset().left,
          widthSelected = item.width(),
          heightSelected = item.height(),
          windowWidth = $(window).width(),
          windowHeight = $(window).height(),
          finalLeft = (windowWidth - IMG_WIDTH)/2,
          finalHeight = IMG_WIDTH * heightSelected/widthSelected,
          finalTop = (windowHeight - finalHeight)/2,
          quickViewWidth = ( windowWidth * .8 < MAX_QUICK_WIDTH ) ? windowWidth * .8 : MAX_QUICK_WIDTH ,
          quickViewLeft = (windowWidth - quickViewWidth)/2;

      if( animationType == 'open') {
        //hide the image in the gallery
        item.addClass('is-empty');
        //place the quick view over the image gallery and give it the dimension of the gallery image
        $modal.css({
            'top': topSelected,
            'left': leftSelected,
            'width': widthSelected
        }).velocity({
          //animate the quick view: animate its width and center it in the viewport
          //during this animation, only the slider image is visible
            'top': finalTop+ 'px',
            'left': finalLeft+'px',
            'width': IMG_WIDTH+'px',
        }, 1000, [ 400, 20 ], function(){
          //animate the quick view: animate its width to the final value
          $modal.addClass('animate-zoom').velocity({
            'left': quickViewLeft+'px',
            'width': quickViewWidth+'px',
          }, 300, 'ease' ,function(){
            //show quick view content
            $modal.addClass('content-added');
          });
        }).addClass('is-visible');
      } else {
        //close the quick view reverting the animation
        $modal.removeClass('content-added').velocity({
            'top': finalTop+ 'px',
            'left': finalLeft+'px',
            'width': IMG_WIDTH+'px',
        }, 300, 'ease', function(){
          $body.removeClass('is-visible');
          $modal.removeClass('animate-zoom').velocity({
            "top": topSelected,
            "left": leftSelected,
            "width": widthSelected,
            "width": heightSelected
          }, 500, 'ease', function(){
            $modal.removeClass('is-visible');
            item.removeClass('is-empty');
          });
        });
      }
    }

    function populateTemplate(data){
      var template = '';

      template += '<div class="slide-in">';
        template += '<h2 class="modal__heading">'+data.product.title+'</h2>';
        template += '<div class="h3"><strong>'+data.product.price+'</strong></div>';
        template += '<div>Availability '+data.product.stock+' stock</div>';
      template += '</div>';

      template += '<div class="slide-in">';
        template += '<p>'+data.product.description+'</p>';
        template += '<p>';
          template += 'Seller: <a href="'+data.seller.url+'">'+data.seller.name+'</a>';
          template += '<br>';
          template += '<small>Join: '+data.seller.joinDate+'</small>';
          template += '<br>';
          template += '<small>Last login: '+data.seller.lastLogin+'</small>';
        template += '</p>';
      template += '</div>';

      template += '<div class="slide-in">';
        template += '<ul class="list-inline list-inline--middle">';
          template += '<li class="list-inline__item">';
            template += '<button class="btn btn--small">';
              template += '<span class="ib-middle">Buy</span>';
              template += '<svg class="icon icon--cart ib-middle"><use xlink:href="#icon--cart"></use></svg>';
            template += '</button>';
          template += '</li>';
          template += '<li class="list-inline__item ml">';
            template += '<a href="'+data.product.url+'">Learn more</a>';
          template += '</li>';
        template += '</ul>';
      template += '</div>';


      return template;
    }

    function closeQuickView() {
      var close = $('.cd-close'),
          item = $('.is-empty');

      if( !$modal.hasClass('velocity-animating') && $modal.hasClass('content-added')) {
        animateQuickView(item, 'close');
      } else {
        closeNoAnimation(item);
      }
    }

    function closeNoAnimation(item) {
      var topSelected = item.offset().top - $(window).scrollTop(),
          leftSelected = item.offset().left,
          widthSelected = item.width();

      //close the quick view reverting the animation
      $body.removeClass('is-visible');
      item.removeClass('is-empty');

      $modal.velocity("stop").removeClass('content-added animate-zoom is-visible').css({
        "top": topSelected,
        "left": leftSelected,
        "width": widthSelected
      });
    }
  });

}(jQuery));