window.onscroll = function() {scrollFunction()};

function scrollFunction() {
            
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementsByTagName('header')[0].classList.add('shrink');
    } else {
        document.getElementsByTagName('header')[0].classList.remove('shrink');
    }
}

if (window.jQuery){
	jQuery.noConflict();
	jQuery(document).ready(function($){

        WebFont.load({
            custom: {
				families: ['Mont'],
				urls: ['css/fonts.css']
			}
        });
        
        $('[type=tel]').mask('+7 (999) 999-99-99');

        // navbar dropdown

		$(".navbar-toggler").on("click", function() {
			$(this).attr('aria-expanded', function(index, attr){
				return attr == 'false' ? 'true' : 'false';
			});
			$(".navbar-collapse").toggleClass('show');
			$(this).parent().toggleClass('menu-opened');
		});
		
		$(".back-top").click(function(b){
            return $("html, body").animate({ scrollTop: 0 }, 600);
		});
		
		$(".nav-tabs li a").click(function(e){
			e.preventDefault();
			$(".nav-tabs li a").removeClass('active');
			$(this).addClass('active');
			var showIt =  $(this).attr('href');
			$(".tab-pane").hide();
			$('#prev-' + showIt + '-group').css('display', 'flex');
            $('#next-' + showIt + '-group').css('display', 'flex');
            $(".tab-pane").removeClass('active');
			$(showIt).addClass('active').find('.slick-slider').slick('refresh');
		});
		
		$('.faq__list-item__question').click(function(){
			$(this).closest('.faq__list-item').toggleClass('opened').find('.faq__list-item__answer').slideToggle('fast');
			return false;
        });

        $('.rollup__slider').slick({
            rows: 0,
            variableWidth: true,
            prevArrow: '<button type="button" class="slick-prev"><svg viewBox="0 0 6 10.5" class="icon arrow-left" width="5" height="8"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg viewBox="0 0 6 10.5" class="icon arrow-right" width="5" height="8"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
        });
        
        $('.types__tabs-content__colors').slick({
            slidesToShow: 8,
            infinite: true,
            rows: 0,
            variableWidth: false,
            prevArrow: '<button type="button" class="slick-prev"><svg viewBox="0 0 6 10.5" class="icon arrow-left" width="5" height="8"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg viewBox="0 0 6 10.5" class="icon arrow-right" width="5" height="8"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
        });

        var $status = $('#counter .nav-counter');
        var $slickElement = $('.why__content-slides');
        
        $slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
            var i = (currentSlide ? currentSlide : 0) + 1;
            $status.text(i + '/' + slick.slideCount);
        });

        $slickElement.slick({
            adaptiveHeight: true,
            infinite: false,
            rows: 0,
            variableWidth: true,
            appendArrows: $('#counter'),
            prevArrow: '<button type="button" class="slick-prev"><svg viewBox="0 0 6 10.5" class="icon arrow-left" width="5" height="8"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg viewBox="0 0 6 10.5" class="icon arrow-right" width="5" height="8"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
        });
        
        $('.reviews__slider').slick({
            slidesToShow: 7,
            __margin: 14,
            prevArrow: '<button type="button" class="slick-prev"><svg viewBox="0 0 6 10.5" class="icon arrow-left" width="5" height="8"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg viewBox="0 0 6 10.5" class="icon arrow-right" width="5" height="8"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            }, {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }]
        });

        $('.types__tabs-content__colors-item').on('click', function(e){
            $('.types__tabs-content__colors-item').removeClass('selected');
            $(this).toggleClass('selected');
            e.preventDefault();
        });

        // yandex map constructor

        var t = $(window),
            n = t.height(),
            s = $(".js--load--map");
		setTimeout(function() {
			s.data("offset-top", s.offset().top)
		}, 5e3), t.on("scroll", function() {
			s.length && t.scrollTop() >= s.offset().top - 2 * n && (s.after('<script type="text/javascript" charset="utf-8" async=\'async\' src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Af8346ec4111354735d09cfb03299541612eccff10818e350adbb32ff3f0d67dd&amp;width=100%25&amp;height=500&amp;lang=ru_RU&amp;scroll=false"><\/script>'), s.remove())
		}), t.on("resize load", function() {
			n = t.height()
        });
        
        // timer

        getfrominputs(3);

        function get_timer(time_end, add_hour) {

			var date_new = time_end;
			var date_t = new Date(date_new);
			var date = new Date();
			date.setHours( date.getHours() + add_hour, date.getMinutes() + date.getTimezoneOffset() );
			var timer = date_t - date;
			if (date_t > date) {
				var day = parseInt(timer / (60 * 60 * 1000 * 24));
				if (day < 10) {
					day = "0" + day;
				}
				day = day.toString();
				var hour = parseInt(timer / (60 * 60 * 1000)) % 24;
				if (hour < 10) {
					hour = "0" + hour;
				}
				hour = hour.toString();
				var min = parseInt(timer / (1000 * 60)) % 60;
				if (min < 10) {
					min = "0" + min;
				}
				min = min.toString();
				var sec = parseInt(timer / 1000) % 60;
				if (sec < 10) {
					sec = "0" + sec;
				}
				sec = sec.toString();

				if (window.lang && window.lang == 'ru') {
					this_time = "<span class='digit'><span>" + day + "</span><span>дней</span></span>" + "<span class='digit'><span>" + hour + "</span><span>часов</span></span>" + "<span class='digit'><span>" + min + "</span><span>минут</span></span>" + "<span class='digit'><span>" + sec + "</span><span>cекунд</span></span>";
				} else {
					this_time = day + "d : " + hour + "h : " + min + "m : " + sec + "s";
				}
				$(".timer").html(this_time);
			} else {
				$(".timer").html("00 : 00 : 00 : 00");
			}

		}

		function getfrominputs(add_hour) {
            window.lang = 'ru';
            time_end = window.round_time_end;
            time_end = new Date().setMinutes(0 + 458);
			get_timer(time_end, add_hour);
			setInterval(function() {
				get_timer(time_end, add_hour);
			}, 1000);
		}

    });
};