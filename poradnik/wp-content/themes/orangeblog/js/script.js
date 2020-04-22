var newsboxHeight = 0,
    newsboxHeight_wait;

$(document).ready(function() {


    $('.slider').slick({
        asNavFor: '.sliderNav',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: true,
        speed: 100,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 6000,
        responsive: [{
            breakpoint: 575,
            settings: {
                dots: true
            }
        }]
    });
    $('.sliderNav').slick({
        speed: 100,
        slidesToShow: 4,
        focusOnSelect: true,
        arrows: false,
        dots: true
    });

    $('.sliderNav .slick-slide').on('click', function(event) {
        $('.slider').slick('slickGoTo', $(this).data('slickIndex'));
    });

    $(".opl-mobile-menu").click(function() {
        $('.opl-mobile-menu_container').addClass('visible');
        $('#search-box').removeClass('opened');
        $('#search-suggestions').removeClass('visible');
    });

    $(".opl-mobile-menu_close-ico").click(function() {
        $('.opl-mobile-menu_container').removeClass('visible');
    });

    $(".opl-footer__expander-trigger").click(function() {
        //console.log($(this).parent('.js-expander__container'));
        if ($(this).parent('.js-expander__container').hasClass('is-expanded')) {
            $(this).parent('.js-expander__container').removeClass('is-expanded');
            $(this).next('.js-expander__content').slideUp();
            $(this).attr("aria-expanded", "false");
        } else {
            $(this).parent('.js-expander__container').addClass('is-expanded');
            $(this).next('.js-expander__content').slideDown();
            $(this).attr("aria-expanded", "true");
        }
    });


    $('.search-trigger').on('click', function(e) {
        e.preventDefault();

        $('#search-box').toggleClass('opened');
        $('#search-suggestions').removeClass('visible');

        if ($('#search-box').hasClass('opened')) {
            $('#search-box').find('input[type="search"]').focus();
            $('.opl-mobile-menu_container').removeClass('visible');
        }
    });

    var search_to;
    var search_block = false;
    $('#search-box').on('keyup blur', 'input[type="search"]', function() {
        var search_phrase = $(this).val();
        var last_search = $(this).attr('data-last-search');


        if (search_phrase.length >= 1) {
            $('#search-box-input').addClass('not-empty');
        } else {
            $('#search-box-input').removeClass('not-empty');
        }


        // !!!!!!! Wykomentowane z powodu błedu 403 dla odwołań AJAX
        // 	if (search_phrase != last_search) {
        // 		$('#search-suggestions').html('');
        // 		$('#search-suggestions').removeClass('visible');
        // 		$('#search-box input[type="search"]').attr('data-last-search', search_phrase);

        // 		if( search_phrase.length >= 3 && !search_block ) {
        // 			clearTimeout(search_to);

        // 			var sendData = {
        // 				action: 'search_suggestion',
        // 				search: search_phrase
        // 			};
        // 			search_to = setTimeout(function(){
        // 				console.log('searching...');
        // 				$('#search-suggestions').html('<li class="search-loading"><span>Wyszukiwanie podpowiedzi...</li></span>');
        // 				$('#search-suggestions').addClass('visible');
        // 				$.ajax({
        // 					url: ajax_options.admin_ajax_url,
        // 					data: sendData,
        // 					success: function(response){
        // 						if( response != 'empty' && response != '' ) {
        // 							$('#search-box input[type="search"]').attr('data-last-search', search_phrase);
        // 							var suggestions = JSON.parse(response);
        // 							$('#search-suggestions').html('<li class="search-heading"><span><strong>Podpowiedzi:</strong></li></span>');
        // 							for(var i = 0; i < suggestions.length; i++) {
        // 								$('#search-suggestions').append('<li class="search-link"><a href="' + suggestions[i].url + '" title="' + suggestions[i].title + '">' + (suggestions[i].title).replace(/(\s)([\S])[\s]+/g, "$1$2&nbsp;") + '</a></li>');
        // 							}
        // 						} else {
        // 							console.log('empty');
        // 							//$('#search-box input[type="search"]').attr('data-last-search', '');
        // 							$('#search-suggestions').html('<li class="search-empty"><span>Brak podpowiedzi</li></span>');
        // 						}
        // 					},
        // 					error: function(errorThrown) {
        // 						console.log( errorThrown );
        // 						//$('#search-box input[type="search"]').attr('data-last-search', '');
        // 						$('#search-suggestions').html('<li class="search-empty">Brak podpowiedzi</li>');
        // 					}
        // 				});
        // 			}, 500);
        // 		}
        // 	}
        return false;
    });
    $('#search-suggestions').on('click', 'a', function() {
        search_block = true;
    });
    $('#reset-input').on('click', function(e) {
        e.preventDefault();
        $('#search-box-input').find('input[type="search"]').val('');
        $('#search-box-input').removeClass('not-empty');
        $('#search-box-input').find('input[type="search"]').focus();
    });
    $('body').on('click', function(e) {
        var searchComp = (($(e.target).parents('.search-trigger').length > 0 || $(e.target).parents('.search-box').length > 0) ? true : false);
        if (!searchComp) {
            $('#search-box').removeClass('opened');
            $('#search-suggestions').removeClass('visible');
        }
    });




});

$(window).load(function() {

    function resize_newsBox() {
        newsboxHeight = 0;
        clearTimeout(newsboxHeight_wait);
        newsboxHeight_wait = setTimeout(function() {
            $(".newsbox").each(function() {
                $(this).height('auto');
            });

            if ($(window).width() > 575) {
                $(".newsbox").each(function() {
                    if ($(this).height() > newsboxHeight) {
                        newsboxHeight = $(this).innerHeight();
                    }
                });
                $(".newsbox").each(function() {
                    $(this).height(newsboxHeight + 'px');
                });
                //console.log('newsbox resize', newsboxHeight);
            }
        }, 100);
    }

    resize_newsBox();

    $(window).resize(function() {
        resize_newsBox();
    });

});