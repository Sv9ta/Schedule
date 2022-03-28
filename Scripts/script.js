 var ddate;

    $(window).load(function () {
        var d = new Date();
        ddate = d;
        // Calendar(d);
        CalendarNEW(d);
        WritePriv();
    });



    function Calendar(d) {
        //-- очистка
        $('#CalendarDiv').children().remove();

        var d0 = new Date();
        var year = d.getFullYear();
        //var month = d.getUTCMonth();
        var month = d.getMonth();
        var today = d.getDate();
        var first_day = new Date(year, month, 1);
        var first_wday = first_day.getDay();
        if (first_wday == 0)
            first_wday = 7;
        var oneHour = 1000 * 60 * 60; //милисекунды*минуты*часы
        var oneDay = oneHour * 24; //сутки
        var nextMonth = new Date(year, month + 1, 1);
        var last_day = Math.ceil((nextMonth.getTime() - first_day.getTime() - oneHour) / oneDay);
        var month_array = new Array("ЯНВАРЬ", "ФЕВРАЛЬ", "МАРТ", "АПРЕЛЬ", "МАЙ", "ИЮНЬ", "ИЮЛЬ", "АВГУСТ", "СЕНТЯБРЬ", "ОКТЯБРЬ", "НОЯБРЬ", "ДЕКАБРЬ");

        $('#CalendarDiv').append('<table id="Calendar" class="tbl-calendar"></table>');
        $('#Calendar').append('<tr><td colspan=7 id="month">" + month_array[month] + "</td></tr>');
        $('#Calendar').append('<tr id="weekday"><td>ПН</td><td>ВТ</td><td>СР</td><td>ЧТ</td><td>ПТ</td><td>СБ</td><td>ВС</td></tr>');

        for (var k = 0; k < 6; k++) {
            $('#Calendar').append('<tr id="trr' +k+ '"></tr>');
            for(var s = 0; s < 7; s++){
                $('#trr'+k).append('<td></td>');
            }
        }

        var td_d = $('#CalendarDiv td');
        n = 8;
        for (k = 1; k < 7; k++) {
            if (k == 1) {
                while (n < td_d.length) {
                    $('#CalendarDiv td:eq(' + n + ')').addClass("mon");
                    n += 7;
                }
                n = 9;
            }
            if (k == 2) {
                while (n < td_d.length) {
                    $('#CalendarDiv td:eq(' + n + ')').addClass("tur");
                    n += 7;
                }
                n = 10;
            }
            if (k == 3) {
                while (n < td_d.length) {
                    $('#CalendarDiv td:eq(' + n + ')').addClass("wen");
                    n += 7;
                }
                n = 11;
            }
            if (k == 4) {
                while (n < td_d.length) {
                    $('#CalendarDiv td:eq(' + n + ')').addClass("fir");
                    n += 7;
                }
                n = 12;
            }
            if (k == 5) {
                while (n < td_d.length) {
                    $('#CalendarDiv td:eq(' + n + ')').addClass("fry");
                    n += 7;
                }
                n = 13;
            }
            if (k == 6) {
                while (n < td_d.length) {
                    $('#CalendarDiv td:eq(' + n + ')').addClass("sat");
                    n += 7;
                }
                n = 14;
            }
            if (k == 7) {
                while (n < td_d.length) {
                    $('#CalendarDiv td:eq(' + n + ')').addClass("sun");
                    n += 7;
                }
                n = 15;
            }
        }

        for (i = 0; i < last_day; i++) {
            if (i == first_wday) {
                td_d[0].innerHTML = month_array[month];
                td_d[7 + i].innerHTML = 1;

                for (j = 0; j < last_day; j++)
                    td_d[7 + i + j].innerHTML = 1 + j;

                for (c = 8; c < 50; c++)
                    if (td_d[c].innerHTML == 0) {
                        td_d[c].visibility = "hidden";
                    } else td_d[c].bgColor = "#D1D2B3";

                    if (d0.getFullYear() == year && d0.getMonth() == month) {
                        for (z = 0; z < last_day; z++)
                            if (td_d[z].innerHTML == today) {
                                td_d[z].bgColor = "#FFCC99";
                                td_d[z].style.color = "#b30000";
                            }
                    }
            }
        }
    }


    function CalendarNEW(d) {
        //-- очистка
        $('#CalendarDivNEW').children().remove();

        var d0 = new Date();
        var year = d.getFullYear();
        //var month = d.getUTCMonth();
        var month = d.getMonth();
        var today = d.getDate();
        var first_day = new Date(year, month, 1);
        var first_wday = first_day.getDay();
        if (first_wday == 0)
            first_wday = 7;
        var oneHour = 1000 * 60 * 60; //милисекунды*минуты*часы
        var oneDay = oneHour * 24; //сутки
        var nextMonth = new Date(year, month + 1, 1);
        var last_day = Math.ceil((nextMonth.getTime() - first_day.getTime() - oneHour) / oneDay);
        var month_array = new Array("ЯНВАРЬ", "ФЕВРАЛЬ", "МАРТ", "АПРЕЛЬ", "МАЙ", "ИЮНЬ", "ИЮЛЬ", "АВГУСТ", "СЕНТЯБРЬ", "ОКТЯБРЬ", "НОЯБРЬ", "ДЕКАБРЬ");

        // $('#CalendarDiv').append('<table id="Calendar" class="tbl-calendar"></table>');
        // $('#Calendar').append('<tr><td colspan=7 id="month">" + month_array[month] + "</td></tr>');
        // $('#Calendar').append('<tr id="weekday"><td>ПН</td><td>ВТ</td><td>СР</td><td>ЧТ</td><td>ПТ</td><td>СБ</td><td>ВС</td></tr>');

        $('#CalendarDivNEW').append('<div class="row" style="background-color: beige;"><div class="col text-center">' + month_array[month] + '</div></div>');
        $('#CalendarDivNEW').append('<div class="row text-center" style="background-color:gainsboro"><div class="col">пн</div><div class="col">вт</div><div class="col">ср</div><div class="col">чт</div><div class="col">пт</div><div class="col">сб</div><div class="col">вс</div></div>');

        // for (var k = 0; k < 6; k++) {
        //     $('#Calendar').append('<tr id="trr' +k+ '"></tr>');
        //     for(var s = 0; s < 7; s++){
        //         $('#trr'+k).append('<td></td>');
        //     }
        // }

        
        for (var k = 0; k < 6; k++) {
            //   $('#CalendarDivNEW').append('<div id="trrNEW'+k+'" class="row no-gutters" style="background-color: beige; min-height:70px "></div>');
            //   $('#CalendarDivNEW').append('<div id="trrNEW'+k+'" class="row" style="background-color: beige; min-height:70px; width:1000px;"></div>');
              $('#CalendarDivNEW').append('<div id="trrNEW'+k+'" class="row no-gutters" style="background-color: beige; min-height:70px;"></div>');
            for(var s = 0; s < 7; s++){
                // $('#trrNEW'+k).append('<div class="col"></div>');
                // $('#trrNEW'+k).append('<div class="col col-md-2 col-sm-2 col-xs-2"></div>');
                $('#trrNEW'+k).append('<div class="col"></div>');
            }
        }

        
       
        var td_d = $('#CalendarDivNEW div.col');

        // var td_d = $('#CalendarDiv td');
        n = 8;
        for (k = 1; k < 7; k++) {
            if (k == 1) {
                while (n < td_d.length) {
                    $('#CalendarDivNEW div.col:eq(' + n + ')').addClass("mon");
                    n += 7;
                }
                n = 9;
            }
            if (k == 2) {
                while (n < td_d.length) {
                    $('#CalendarDivNEW div.col:eq(' + n + ')').addClass("tur");
                    n += 7;
                }
                n = 10;
            }
            if (k == 3) {
                while (n < td_d.length) {
                    $('#CalendarDivNEW div.col:eq(' + n + ')').addClass("wen");
                    n += 7;
                }
                n = 11;
            }
            if (k == 4) {
                while (n < td_d.length) {
                    $('#CalendarDivNEW div.col:eq(' + n + ')').addClass("fir");
                    n += 7;
                }
                n = 12;
            }
            if (k == 5) {
                while (n < td_d.length) {
                    $('#CalendarDivNEW div.col:eq(' + n + ')').addClass("fry");
                    n += 7;
                }
                n = 13;
            }
            if (k == 6) {
                while (n < td_d.length) {
                    $('#CalendarDivNEW div.col:eq(' + n + ')').addClass("sat");
                    n += 7;
                }
                n = 14;
            }
            if (k == 7) {
                while (n < td_d.length) {
                    $('#CalendarDivNEW div.col:eq(' + n + ')').addClass("sun");
                    n += 7;
                }
                n = 15;
            }
        }

        for (i = 0; i < last_day; i++) {
            if (i == first_wday) {
                td_d[0].innerHTML = month_array[month];
                td_d[7 + i].innerHTML = 1;

                for (j = 0; j < last_day; j++)
                    td_d[7 + i + j].innerHTML = 1 + j;

                for (c = 8; c < 50; c++)
                    if (td_d[c].innerHTML == 0) {
                        td_d[c].visibility = "hidden";
                    } else td_d[c].bgColor = "#D1D2B3";

                    if (d0.getFullYear() == year && d0.getMonth() == month) {
                        for (z = 0; z < last_day; z++)
                            if (td_d[z].innerHTML == today) {
                                td_d[z].bgColor = "#FFCC99";
                                td_d[z].style.color = "#b30000";
                            }
                    }
            }
        }

        //td_d.wi
    }
    



        function WritePriv() {
            var RM = $('#RM').attr("checked");
            var BCZ = $('#BCZ').attr("checked");
            var Oth = $('#Oth').attr("checked");

            //-- Очистка
            $('.mon div').remove();
            $('.tur div').remove();
            $('.wen div').remove();
            $('.fry div').remove();
            $('.fir div').remove();

            //--- записываем прививки

            var mon = $('.mon');
            for (z = 0; z < $('.mon').length; z++) {
                if (mon[z].visibility != "hidden" && RM)
                    $('.mon:eq(' + z + ')').append('<div class="div-mantu no-gutters">9:00-15:00 R-манту<div>');
            }

            var tur = $('.tur');
            for (z = 0; z < $('.tur').length; z++) {
                if (tur[z].visibility != "hidden" && Oth)
                    $('.tur:eq(' + z + ')').append('<div class="div-other no-gutters">9:00-15:00 другая вакцина<div>');
            }

            var wen = $('.wen');
            for (z = 0; z < $('.wen').length; z++) {
                if (wen[z].visibility != "hidden" && Oth)
                    $('.wen:eq(' + z + ')').append('<div class="div-other no-gutters">9:00-15:00 другая вакцина<div>');
            }

            var fry = $('.fry');
            for (z = 0; z < $('.fry').length; z++) {
                if (fry[z].visibility != "hidden" && Oth)
                    $('.fry:eq(' + z + ')').append('<div class="div-other no-gutters">9:00-15:00 другая вакцина<div>');
            }

            var fir = $('.fir');
            var num = 0;
            for (z = 0; z < $('.fir').length; z++) {
                if (fir[z].visibility != "hidden") {
                    num++;
                    if ((num == 1 || num == 3) && BCZ)
                        $('.fir:eq(' + z + ')').append('<div class="div-bcz no-gutters">10:00-11:00 БЦЖ<div>');
                    if ((num == 2 || num == 4 || num == 5) && Oth)
                        $('.fir:eq(' + z + ')').append('<div class="div-other no-gutters">9:00-14:00 другая вакцина<div>');
                }
            }
        }

      


        function chbChange() {
            WritePriv()
        }


        function btnBackclick() {
            var dtest = new Date();
            var dd1 = ddate;
            var year = ddate.getFullYear();
            var month = ddate.getMonth();
            var day = 1;
            var dd1 = new Date(year, month - 1, day);
            if (dtest.getFullYear() == dd1.getFullYear() && dtest.getMonth() == dd1.getMonth()) {
                dd1 = dtest;
            }
            ddate = dd1
            Calendar(ddate);
            WritePriv();
        }
    
        function btnNextclick() {
            var dtest = new Date();
            var dd1 = ddate;
            var year = ddate.getFullYear();
            var month = ddate.getMonth();
            var day = 1;
            var dd1 = new Date(year, month + 1, day);
            if (dtest.getFullYear() == dd1.getFullYear() && dtest.getMonth() == dd1.getMonth()) {
                dd1 = dtest;
            }
            ddate = dd1
            Calendar(ddate);
            WritePriv();
        }


        function btnNextclickNEW() {
            var dtest = new Date();
            var dd1 = ddate;
            var year = ddate.getFullYear();
            var month = ddate.getMonth();
            var day = 1;
            var dd1 = new Date(year, month + 1, day);
            if (dtest.getFullYear() == dd1.getFullYear() && dtest.getMonth() == dd1.getMonth()) {
                dd1 = dtest;
            }
            ddate = dd1
            CalendarNEW(ddate);
            WritePriv();
        }

        function btnBackclickNEW() {
            var dtest = new Date();
            var dd1 = ddate;
            var year = ddate.getFullYear();
            var month = ddate.getMonth();
            var day = 1;
            var dd1 = new Date(year, month - 1, day);
            if (dtest.getFullYear() == dd1.getFullYear() && dtest.getMonth() == dd1.getMonth()) {
                dd1 = dtest;
            }
            ddate = dd1
            CalendarNEW(ddate);
            WritePriv();
        }