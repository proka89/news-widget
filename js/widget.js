// moment.js

moment().format();
    moment.locale('sr', {
    	months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
    monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
    monthsParseExact: true,
    weekdays: 'nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota'.split('_'),
    weekdaysShort: 'ned._pon._uto._sre._čet._pet._sub.'.split('_'),
    weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),

    longDateFormat: {
        LT: 'H:mm',
        LTS : 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY H:mm',
        LLLL: 'dddd, D. MMMM YYYY H:mm'
    },
    calendar: {
        sameDay: '[danas u] LT',
        nextDay: '[sutra u] LT',
        nextWeek: function () {
            switch (this.day()) {
                case 0:
                    return '[u] [nedelju] [u] LT';
                case 3:
                    return '[u] [sredu] [u] LT';
                case 6:
                    return '[u] [subotu] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[u] dddd [u] LT';
            }
        },
        lastDay  : '[juče u] LT',
        lastWeek : function () {
            var lastWeekDays = [
                '[prošle] [nedelje] [u] LT',
                '[prošlog] [ponedeljka] [u] LT',
                '[prošlog] [utorka] [u] LT',
                '[prošle] [srede] [u] LT',
                '[prošlog] [četvrtka] [u] LT',
                '[prošlog] [petka] [u] LT',
                '[prošle] [subote] [u] LT'
            ];
            return lastWeekDays[this.day()];
        },
        sameElse : 'L'
    },
    relativeTime : {
        future : 'za %s',
        past   : 'pre %s',
        s      : 'nekoliko s',
        m      : "1 m",
        mm     : "%d m",
        h      : "sat",
        hh     : "%d h",
        d      : 'd',
        dd     : "%d d",
        M      : 'mes',
        MM     : "%d mes",
        y      : 'god',
        yy     : "%d god"
    },
    ordinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
	});

//WIDGET MAIN JS

$(document).ready(function(){
            
            var verticalTicker = $('.vertical-ticker');
            var verticalTickerNaj = $('.vertical-ticker-najnovije');
            var verticalTickerSport = $('.vertical-ticker-sport');
            var verticalTickerJetset = $('.vertical-ticker-jetset');
            var vtFirst = '.vertical-ticker li:first';
            var vtFirstSport = '.vertical-ticker-sport li:first';
            var vtFirstJetset = '.vertical-ticker-jetset li:first';
            var vtFirstNaj = '.vertical-ticker-najnovije li:first';
            
            // Changing active class in main menu
            $(".tw-nav ul li").click(function () {
                $(this).addClass('active').siblings().removeClass('active');
            });

            $(".tw-nav ul li:first-child").click(function () {
                $("section.naslovna").addClass('acitve-section').siblings().removeClass('acitve-section');
            });

            $(".tw-nav ul li:nth-child(2n)").click(function () {
                $("section.najnovije").addClass('acitve-section').siblings().removeClass('acitve-section');
            });

            $(".tw-nav ul li:nth-child(3n)").click(function () {
                $("section.sport").addClass('acitve-section').siblings().removeClass('acitve-section');
            });

            $(".tw-nav ul li:last-child").click(function () {
                $("section.jetset").addClass('acitve-section').siblings().removeClass('acitve-section');
            });

            //Default slider movement
            function tick(){
                $(vtFirst).slideUp( function () { $(this).appendTo($(verticalTicker)).slideDown(); });
            }

            function ticksport(){
                $(vtFirstSport).slideUp( function () { $(this).appendTo($(verticalTickerSport)).slideDown(); });
            }

            function tickjetset(){
                $(vtFirstJetset).slideUp( function () { $(this).appendTo($(verticalTickerJetset)).slideDown(); });
            }

            function ticknajnovije(){
                $(vtFirstNaj).slideUp( function () { $(this).appendTo($(verticalTickerNaj)).slideDown(); });
            }

            
            //  Stops slider on hover 
                $('.telegraf-widget-section').hover(function(){
                    $(this).css('cursor','progress');
                    clearInterval(tickInterval);
                    },function() {
                        $(this).css('cursor','pointer');
                        startTimer();
                });

            //  Slider speed    
                function startTimer(){
                    tickInterval = setInterval(function(){tick(), ticksport(), tickjetset(), ticknajnovije()}, 4000);
                }

                startTimer();

            // Slider up and down arrow controls
                $('.down').on('click', function() {
                    $(vtFirst).slideUp( function () { $(this).appendTo($(verticalTicker)).slideDown(); });
                });

                $('.up').on('click', function() {

                    $('.vertical-ticker li:last').slideUp( function () { 
                        $(this).remove();
                        $(verticalTicker).prepend($(this));
                        $(this).slideDown();
                    });
                });

                $('.dnaj').on('click', function() {
                    $(vtFirstNaj).slideUp( function () { $(this).appendTo($(verticalTickerNaj)).slideDown(); });
                });

                $('.unaj').on('click', function() {

                    $('.vertical-ticker-najnovije li:last').slideUp( function () { 
                        $(this).remove();
                        $(verticalTickerNaj).prepend($(this));
                        $(this).slideDown();
                    });
                });

                $('.dsport').on('click', function() {
                    $(vtFirstSport).slideUp( function () { $(this).appendTo($(verticalTickerSport)).slideDown(); });
                });

                $('.usport').on('click', function() {

                    $('.vertical-ticker-sport li:last').slideUp( function () { 
                        $(this).remove();
                        $(verticalTickerSport).prepend($(this));
                        $(this).slideDown();
                    });
                });

                $('.djetset').on('click', function() {
                    $(vtFirstJetset).slideUp( function () { $(this).appendTo($(verticalTickerJetset)).slideDown(); });
                });

                $('.ujetset').on('click', function() {

                    $('.vertical-ticker-jetset li:last').slideUp( function () { 
                        $(this).remove();
                        $(verticalTickerJetset).prepend($(this));
                        $(this).slideDown();
                    });
                });

                $("div.najnovije-wrapper ul.vertical-ticker-najnovije li h2.news-time").each(function(){
                var newsTime = $(this).attr('data-timestamp');
                var time = moment.unix(newsTime).startOf('hour').fromNow();
                console.log(time);
                $(this).html(time);
            });
            
        });