if (window.jQuery){
	jQuery.noConflict();
	jQuery(document).ready(function($){

        WebFont.load({
            custom: {
				families: ['Mont'],
				urls: ['css/fonts.css']
			}
        });

        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
            
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                //alert('shrink');
                document.getElementsByTagName('header')[0].classList.add('shrink');
            } else {
                //alert('unshrink');
                document.getElementsByTagName('header')[0].classList.remove('shrink');
            }
        }
        
        $('[type=tel]').mask('+7 (999) 999-99-99');
		
		$('.navbar-toggler').on('click', function(e){
            $('header .menu').toggleClass("show-mobile");
            e.preventDefault();
        });

        $(document).click(function(event){
            if (!$(event.target).hasClass("navbar-toggler") && !$(event.target).closest(".navbar-toggler").length>0 && !$(event.target).closest(".show-mobile").length>0 && $('header .menu').hasClass('show-mobile')){
                $('header .menu').removeClass("show-mobile");
            }
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
			$(showIt).css('display', 'flex');
		});
		
		$('.faq__list-item__question').click(function(){
			$(this).closest('.faq__list-item').toggleClass('opened').find('.faq__list-item__answer').slideToggle('fast');
			return false;
        });

        $('.rollup__slider').owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            navText: [
                '<svg viewBox="0 0 6 10.5" class="icon arrow-left" width="5" height="8"><use xlink:href="img/sprite.svg#arrow-left"></use></svg>',
                '<svg viewBox="0 0 6 10.5" class="icon arrow-right" width="5" height="8"><use xlink:href="img/sprite.svg#arrow-right"></use></svg>'
            ],
        });
        
        $('.types__tabs-content__colors').owlCarousel({
            items: 8,
            loop: true,
            nav: true,
            navText: [
                '<svg viewBox="0 0 6 10.5" class="icon arrow-left" width="5" height="8"><use xlink:href="img/sprite.svg#arrow-left"></use></svg>',
                '<svg viewBox="0 0 6 10.5" class="icon arrow-right" width="5" height="8"><use xlink:href="img/sprite.svg#arrow-right"></use></svg>'
            ],
        });

        $('.why__content-slides').owlCarousel({
            items: 1,
            nav: true,
            navText: [
                '<svg viewBox="0 0 6 10.5" class="icon arrow-left" width="5" height="8"><use xlink:href="img/sprite.svg#arrow-left"></use></svg>',
                '<svg viewBox="0 0 6 10.5" class="icon arrow-right" width="5" height="8"><use xlink:href="img/sprite.svg#arrow-right"></use></svg>'
            ],
            onInitialized: counter,
            onTranslated: counter
        });

        function counter(event) {
            var element   = event.target;
            var items     = event.item.count;
            var item      = event.item.index + 1;
            
            // it loop is true then reset counter from 1
            if(item > items) {
                item = item - items
            }
            if(!$('.why__content-slides .owl-nav .nav-counter').length){
                $('.why__content-slides .owl-nav button:first').after('<div class="nav-counter"></div>');
            }
            var counter_html = item + "/" + items;
            $('.why__content-slides .owl-nav .nav-counter').html(counter_html);
        }
        
        $('.reviews__slider').owlCarousel({
            items: 7,
            loop: true,
            margin: 14,
            nav: true,
            navText: [
                '<svg viewBox="0 0 6 10.5" class="icon arrow-left" width="5" height="8"><use xlink:href="img/sprite.svg#arrow-left"></use></svg>',
                '<svg viewBox="0 0 6 10.5" class="icon arrow-right" width="5" height="8"><use xlink:href="img/sprite.svg#arrow-right"></use></svg>'
            ],
        });

        $('.types__tabs-content__colors-item').on('click', function(e){
            $('.types__tabs-content__colors-item').removeClass('selected');
            $(this).toggleClass('selected');
            e.preventDefault();
        });

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

