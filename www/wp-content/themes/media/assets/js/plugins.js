(function($){
    jQuery.fn.searchApartments = function(options)
    {
        options = $.extend({
            data: {},
            notFound__message: 'Ничего не найдено. Попробуйте изменить условия поиска.'
        },options);

        var frame = $(this);
        var result__container = frame.find('.resulting');
        var hash__calculate__name = 'hash__calculate';

        var dataArray = {};
        $.each(options.data, function(i, e)
        {
            if(e.tc != 0){
                dataArray[i] = e;
            }
        });

        //

        frame.find('div#calc div.slider-range').each(function(i, v)
        {
            //Формируем переменные.
            var el = $(this);
            var min = parseFloat(el.attr('minimal'));
            var max = parseFloat(el.attr('max'));
            var defaultValues = el.attr('default-values');
            var dataType = el.attr('data-type');
            var step = (el.attr('float') == 'false') ? 1 : 0.1;

            if(dataType == 'storey') frame.data('hash__storey', {  start: min, end: max  } );
            if(dataType == 'rooms') frame.data('hash__rooms', {  start: min, end: max  } );
            if(dataType == 'area') frame.data('hash__area', {  start: min, end: max  } );
            //if(dataType == 'price') frame.data('hash__price', {  start: min, end: max  } );
            //if(dataType == 'area') $('#selection-apartment-area').val(ui.values[0]+'##'+ui.values[1]);
            //if(dataType == 'price') $('#selection-apartment-price').val(ui.values[0]+'##'+ui.values[1]);

            el.slider(
                {
                    range: true,
                    min: min,
                    max: max,
                    step: step,
                    animate: "slow",
                    distance: 0,
                    values: [min, max],
                    slide: function(event, ui)
                    {
                        //
                        waiting(true);

                        //
                        $(".ui-slider-handle", el).eq(0).text(ui.values[0]);
                        $(".ui-slider-handle", el).eq(1).text(ui.values[1]);
                        if(ui.values[0] == 0) $(".ui-slider-handle", el).eq(0).text('Ст');

                        if(dataType == 'rooms') $(".ui-slider-handle", el).eq(0).text(parseInt(ui.values[0], 10));
                        if(dataType == 'rooms') $(".ui-slider-handle", el).eq(1).text(parseInt(ui.values[1], 10));

                        /*if(dataType == 'storey' && (ui.values[0] >= ui.values[1] - 2)){
                            frame.data('hash__storey', {  start: ui.values[0], end: ui.values[1]  } );
                            return false;
                        }
                        if(dataType == 'rooms' && (ui.values[0] >= ui.values[1])){
                            frame.data('hash__rooms', {  start: ui.values[0], end: ui.values[1]  } );
                            return false;
                        }
                        if(dataType == 'area' && (ui.values[0] >= ui.values[1] - 9)){
                            frame.data('hash__area', {  start: ui.values[0], end: ui.values[1]  } );
                            return false;
                        }
                        if(dataType == 'price' && (ui.values[0] >= ui.values[1] - 0.5)){
                            frame.data('hash__price', {  start: ui.values[0], end: ui.values[1]  } );
                            return false;
                        }*/

                        if(dataType == 'storey') frame.data('hash__storey', {  start: ui.values[0], end: ui.values[1]  } );
                        if(dataType == 'rooms') frame.data('hash__rooms', {  start: ui.values[0], end: ui.values[1]  } );
                        if(dataType == 'area') frame.data('hash__area', {  start: ui.values[0], end: ui.values[1]  } );

                        //
                        waiting(false);
                        dragSorting();
                    },
                    stop: function (event, ui)
                    {


                    }
                });

            //Помещаем в бегунки слайдера изначальные данные. (Данные по умолчанию).
            $(".ui-slider-handle", el).eq(0).text(min);
            $(".ui-slider-handle", el).eq(1).text(max);

            //Если квартира является студией, то в бегунки слайдера помещаем соответствующую аббривиатуру.
            if(min == 0) $(".ui-slider-handle", el).eq(0).text('Ст');
        });

        $('#apartments__selection__page .section__selected a').click(function()
        {
            //alert('fg');
            $('#apartments__selection__page .section__selected a').removeClass('active');
            var section = $(this).attr('attr-section');
            $(this).addClass('active');
            $('.find-the-apartment').hide();

            $('.find-the-apartment[attr-section="'+section+'"]').show();
        });


        function waiting()
        {

        }

        /**
         *
         * @param objects
         */
        function dragSorting(objects)
        {
            var storey__start = parseInt(frame.data('hash__storey').start, 10);
            var storey__end = parseInt(frame.data('hash__storey').end, 10);
            var rooms__start = parseInt(frame.data('hash__rooms').start, 10);
            var rooms__end = parseInt(frame.data('hash__rooms').end, 10);
            var area__start = frame.data('hash__area').start;
            var area__end = frame.data('hash__area').end;
            //var price__start = (frame.data('hash__price').start * 1000000);
            //var price__end = (frame.data('hash__price').end * 1000000);
            var newArray = {};

            $.each(dataArray, function(i, e) {
                if((e.f >= storey__start && e.f <= storey__end) && (e.rc >= rooms__start && e.rc <= rooms__end)
                    && (e.sq >= area__start && e.sq <= area__end) /*&& (e.tc >= price__start && e.tc <= price__end)*/) {
                    newArray[i] = e;
                }
            });

            result(newArray);
        }

        function apartmentNumber(string)
        {
            if(string == 0) string = 'Ст';
            return string;
        }

        function getPrice(string)
        {
            if(string == 0){
                return 'по запросу';
            }

            var price = string.toFixed(0).replace(/./g, function(c, i, a) {
                return i && c !== "." && ((a.length - i) % 3 === 0) ? ' ' + c : c;
            });

            return price + ' р.';
        }

        function countObjects(object)
        {
            var foo = object;
            var count = 0;
            for (var k in foo) {
                if (foo.hasOwnProperty(k)) {
                    ++count;
                }
            }

            return count;
        }

        function result(array)
        {
            result__container.empty();
            if(countObjects(array) == 0)
            {
                result__container.html('<div style="color:#fff; text-align: center; padding-top: 20px;">'+options.notFound__message+'</div>');
            }
            else
            {
                $.each(array, function(i, e){
                    //console.log(e);
                    result__container.append('<div class="r clearfix find-the-apartment" attr-storey="'+ e.f+'" attr-apartment-number="'+ e.n +'" attr-section="'+ e.s +'">'+
                    '<div class="col" style="width: 16.6666666%;">' +
                    ''+ e.s+'' +
                        '<div class="hidden__plan__view">' +
                    '<div class="apart-frame__centrer">' +
                    '<img src="http://glumilino.ru/assets/images/apts/'+ e.s+'-'+ e.n +'.png" height="100%">' +
                        /*getPrice(e.tc)*/
                    '</div>' +
                    '</div>'+
                    '</div>'+
                    '<div class="col" style="width: 16.6666666%;">'+ e.f+'</div>'+
                    '<div class="col" style="width: 16.6666666%;">'+ e.n+'</div>'+
                    '<div class="col" style="width: 16.6666666%;">'+ apartmentNumber(e.rc)+'</div>'+
                    '<div class="col" style="width: 16.6666666%;">'+ e.sq+'</div>'+
                    '<div class="col" style="width: 16.6666666%;">По запросу</div>'+
                    '</div>');
                });
            }
        }

        result(dataArray);
    };
})(jQuery);

$(document).on('ready async-page-loading', function()
{
    var parent = $('#publication__page');
    var slides = parent.find('div.slide');
    var slides__size = slides.size();
    var slide__dotted = parent.find('div.slide__dotted');
    var arrow__left = parent.find('div.arrows a.left');
    var arrow__right = parent.find('div.arrows a.right');
    var time = 500;

    slides.each(function(i, e)
    {
        slide__dotted.append('<a href="javascript:;" data-eq="'+i+'"></a>&nbsp;&nbsp;');
    });

    var findSlide = function(eq)
    {
        slides.removeClass('active').removeAttr('data-eq').stop(true).transition({ opacity: 0, scale: 0.7 }, 0);
        slides.eq(eq).addClass('active').attr('data-eq', slides.eq(eq).index()).stop(true).transition({ opacity: 1, scale: 1 }, time);

        slide__dotted.find('a').removeClass('active');
        slide__dotted.find('a').eq(eq).addClass('active');

        var index = (slides.eq(eq).index() + 1);
        var next__slide = (index >= slides__size) ? 0 : index;
        arrow__right.removeAttr('data-eq').attr('data-eq', next__slide);

        var prev__slide = (index <= 1) ? (slides__size - 1) : (index - 2);
        arrow__left.removeAttr('data-eq').attr('data-eq', prev__slide);
    };

    slide__dotted.find('a').click(function() {
        var eq = $(this).attr('data-eq');
        findSlide(eq);
    });

    arrow__right.click(function() {
        var eq = $(this).attr('data-eq');
        findSlide(eq);
    });

    arrow__left.click(function() {
        var eq = $(this).attr('data-eq');
        findSlide(eq);
    });

    //
    findSlide(0);
});



(function($){
    jQuery.fn.parametricSearch=function(options){
        options=$.extend({
            data:{},
            scroll_height:30,
            notfound_text:'Ничего не найдено. Попробуйте изменить условия поиска.',
            pagination:0,
            zero_rooms:'Ст',
            loadAnimate:function(el){},
            unloadAnimate:function(el){},
            resultClick:function(el){}
        },options);
        var data=options.data;
        var scroll_height=options.scroll_height;
        var notfound_text=options.notfound_text;
        var pagination=options.pagination;
        var zero_rooms=options.zero_rooms;
        var loadAnimate=options.loadAnimate;
        var unloadAnimate=options.unloadAnimate;
        var resultClick=options.resultClick;
        var frame, scale;
        var search_params={};
        var search_result=[];
        var result_cols=[];
        var sections_array = ['','1','2','3','4', '5'];
        var pan_start_pos = 0;

        //
        $.each(data, function(index, value) {
            //[index].rc = '1';
            data[index].type__plan = '';
            if($.trim(value.rc) == 'Студии')
            {
                data[index].rc = 0;
            }
            else if($.trim(value.rc) == '1-комнатные')
            {
                data[index].rc = 1;
                data[index].type__plan = '1';
            }
            else if($.trim(value.rc) == '2-комнатные')
            {
                data[index].rc = 2;
                data[index].type__plan = '2';
            }
            else if($.trim(value.rc) == '3-комнатные')
            {
                data[index].rc = 3;
                data[index].type__plan = '3';
            }
            else if($.trim(value.rc) == '2-смарт')
            {
                data[index].rc = 2;
                data[index].type__plan = '2-смарт';
            }
            else if($.trim(value.rc) == '3-смарт')
            {
                data[index].rc = 3;
                data[index].type__plan = '3-смарт';
            }
            else if($.trim(value.rc) == '4-смарт')
            {
                data[index].rc = 4;
                data[index].type__plan = '4-смарт';
            }
            else
            {
                data[index].rc = $.trim(value.rc);
                data[index].type__plan = $.trim(value.rc);
            }
            //console.log(value.rc);
        });
        //

        function unload() {
            unloadAnimate(frame);
        }
        function removeEvents() {
            frame.find('.param_search_close, .search_header_tab, .search_result_tab, .search_pagination_frame, .search_buttons_frame').off('click');
        }
        function sort_table() {
            if(frame.find('.search_header_tab .active2').length) {
                var asc=-1;
                var sort_type=frame.find('.search_header_tab .active2').data('targ');
            } else {
                var asc=1;
                var sort_type=frame.find('.search_header_tab .active').data('targ');
            }
            function sort_array(a,b) {
                var param1=data[a][sort_type];
                var param2=data[b][sort_type];
                if (param1 > param2) return 1*asc
                else if (param1 < param2) return -1*asc
                else return 0;
            }
            search_result.sort(sort_array);
            var l=search_result.length;
            frame.find('.search_pagination_frame').hide();
            if (l==0 || search_result[0]=='') {
                frame.find('.search_result_num').hide();
                show_results('<tr class="r_notfound"><td colspan="'+result_cols.length+'">'+notfound_text+'</td></tr>');
            } else {
                if(pagination!=0) {
                    var pages_num=Math.ceil(l/pagination);
                    if(pages_num>1) {
                        var pages_txt='';
                        for(var i=0; i<pages_num; i++) {
                            pages_txt+='<div class="search_pagination" data-targ="'+i+'">'+(i+1)+'</div>';
                        }
                        frame.find('.search_pagination_frame').show().html(pages_txt);
                    }
                }
                frame.find('.search_result_num').show().find('span').text(l);
                filter_results(0);
            }
        }
        function filter_results(num) {
            var result_text='';
            var min_num=pagination*num;
            if(pagination!=0) {
                var max_num=Math.min((pagination*(num+1)),search_result.length);
            } else {
                var max_num=search_result.length;
            }
            frame.find('.search_pagination[data-targ="'+num+'"]').addClass('active').siblings().removeClass('active');
            for(var i=min_num; i<max_num; i++) {
                var d=data[search_result[i]];
                result_text+='<tr data-targ="'+search_result[i]+'" class="'+(i%2==0?'odd':'even')+'">';
                $.each(result_cols, function(index, value) {
                    if(value=='tc') {
                        var add=addspace(d[value]);
                         if(add == 0) {
                         add = 'по запросу';
                         }
                        //var add = addspace('По запросу');
                    } else
                    if(value=='rc' && d[value]==0) {
                        var add=zero_rooms;
                    } else
                    if(value=='rc' && d[value] != 0) {
                        var add = d.type__plan;
                    } else {
                        var add=d[value];
                    }
                    if(value == 'sq' && add <= 27.3) add = Math.round(add);

                    if(value == 's') var add = sections_array[d[value]];
                    result_text+='<td class="r_'+value+'">'+add+'</td>';
                })
                result_text+='</tr>';
            };
            show_results(result_text);
        }

        function show_results(result_text) {
            frame.find('.search_result_tab').html(result_text);
            //frame.find('.search_result_div').data('jsp').scrollTo(0,0);
            //frame.find('.search_result_div').data('jsp').reinitialise();
        }

        function search_rooms() {
            //console.time('time');
            search_result=[];
            var active_buttons={};
            frame.find('.search_buttons_frame').each(function(){
                var b_type=$(this).data('targ');
                active_buttons[b_type]=[];
                $(this).find('.active').each(function(){
                    active_buttons[b_type].push($(this).data('targ'));
                })
            })
            $.each(data, function(index, value) {
                if(value.st==1) {
                    var add=true;
                    $.each(search_params, function(index2, value2) {
                        var val=value[index2];
                        if(index2 == 'rc' && val > 10) {
                            val = (val + '')[0];
                        }
                        if((val<value2['val_left'] || val>value2['val_right'] && !(index2 == 'sq' && val <= 27.3))) add=false;
                    })
                    $.each(active_buttons, function(index2, value2) {
                        if($.inArray(value[index2],value2)==-1) add=false;
                    })
                    if(add) search_result.push(index);
                }
            });
            sort_table();
            frame.find('.search_preloader').hide();
            //console.timeEnd('time');
        }

        function search_init()
        {
            function start_drag(targ)
            {
                c_s_drag=targ;
                c_s=c_s_drag.parent();
                c_s_values=search_params[c_s.data('targ')];
                c_s_drag.css({'cursor':'url(/assets/images/cur2.cur), move'});
                frame.find('.search_preloader').show();

                slider_w2=first_slider.find('.search_slider_polz.left').width();
                slider_w=first_slider.width()-slider_w2;

                if(c_s_drag.hasClass('left')) {
                    c_s_type='left';
                } else {
                    c_s_type='right';
                }
                scale = $.getMobileScale();
                pan_start_pos = targ.position().left;
            }

            function move_drag(dd)
            {
                var pos_x= pan_start_pos + dd.gesture.deltaX;
                var delta=(c_s_values['delta']*c_s_values['step'])/(c_s_values['max']-c_s_values['min']);
                if(c_s_type=='left')
                {
                    pos_x -= slider_w2*(1-scale);
                    var pos=Math.max(0,Math.min((pos_x/scale),(c_s.find('.search_slider_polz.right').position().left/scale)-slider_w2));
                    c_s.find('.search_slider_mask').css({'left':pos + 1/*+slider_w2*0.5*/});

                    //var pos=Math.max(0,Math.min((pos_x/((slider_w-slider_w2)*scale)),c_s.find('.search_slider_polz.right').position().left-delta));
                    //c_s.find('.search_slider_mask').css({'left':pos*100+'%'});
                }
                else
                {
                    var pos=Math.max((c_s.find('.search_slider_polz.left').position().left/scale)+slider_w2,Math.min((pos_x/scale),slider_w));
                    c_s.find('.search_slider_mask').css({'right':slider_w-pos + 1/*+0.5*slider_w2*/});

                    //var pos=Math.max(c_s.find('.search_slider_polz.left').position().left+delta,Math.min((pos_x/((slider_w-slider_w2)*scale)),1));
                    //c_s.find('.search_slider_mask').css({'right':(1-pos)*100+'%'});
                }

                var r=(c_s_values['max']-c_s_values['min'])*((pos-(c_s_type=='left'?0:slider_w2))/(slider_w-slider_w2));
                var rr=Math.round((c_s_values['min']+r)/c_s_values['step'])*c_s_values['step'];
                c_s_values['val_'+c_s_type]=rr.toFixed(c_s_values['fixed']);
                c_s.find('.search_slider_txt.'+c_s_type).html(get_cur_value_text(rr,c_s_values, c_s.data('targ')));
                c_s_drag.css({'left':pos});
            }
            function end_drag() {
                c_s_drag.css({'cursor':'url(/assets/images/cur1.cur), move'});
                search_rooms();
            }
            function get_cur_value_text(rr,values, cur_param) {
                if(rr==0) {
                    return '<div class="is_studio">' + (cur_param == 'tc' ? 'З' : zero_rooms)  + '</div>';
                } else {
                    return (rr/values['round']).toFixed(values['fixed']);
                }
            }
            var first_slider=frame.find('.search_slider:first');
            var slider_w2=first_slider.find('.search_slider_polz.left').width();
            var slider_w=first_slider.width()-slider_w2;
            var c_s, c_s_values, c_s_drag, c_s_type;
            frame.find('.search_slider').each(function(){
                var val_step=Number($(this).data('step'));
                var val_round=Number($(this).data('round'));
                var val_fixed=0;
                if(val_step/val_round<0.1) {
                    val_fixed=2;
                } else
                if(val_step/val_round<1) {
                    val_fixed=1;
                }
                search_params[$(this).data('targ')]={'min':10000000,'max':0,'val_left':0,'val_right':0,'step':val_step,'round':val_round,'fixed':val_fixed};
            })
            $.each(data, function(index, value) {
                if(value.st==1) {
                    $.each(search_params, function(index2, value2) {
                        if(index2 == 'rc' && value[index2] > 10) {
                            var valRc = (value[index2] + '')[0];
                            if(valRc<value2['min']) value2['min'] = valRc; else
                            if(valRc>value2['max']) value2['max'] = valRc;
                        } else {
                            if(value[index2]<value2['min']) value2['min']=value[index2]; else
                            if(value[index2]>value2['max']) value2['max']=value[index2];
                        }

                    })
                }
            });
            $.each(search_params, function(index, value) {
                value['min']=Math.floor(value['min']/value['step'])*value['step'];
                value['max']=Math.ceil(value['max']/value['step'])*value['step'];
                value['val_left']=value['min'];
                value['val_right']=value['max'];
            })
            frame.find('.search_slider').each(function(){
                var values=search_params[$(this).data('targ')];
                var initDrag = $(this)
                    .find('.search_slider_mask').css({'left':1,'right':1}).end()
                    .find('.search_slider_polz.right').css({'left':slider_w}).end()
                    .find('.search_slider_txt.left').html(get_cur_value_text(values['min'],values, $(this).data('targ'))).end()
                    .find('.search_slider_txt.right').html(get_cur_value_text(values['max'],values, $(this).data('targ'))).end()
                    .find('.search_slider_polz')
                    .css({'cursor':'url(/assets/images/cur1.cur), move'});

                var drag_elements=$(this).find('.search_slider_polz');
                drag_elements.each(function(){
                    $(this).hammer().data('hammer').get('pan').set({direction:Hammer.DIRECTION_ALL, threshold:0});
                })
                drag_elements
                    .on('panstart',function(){
                        start_drag($(this));
                    })
                    .on('panmove',function (e) {
                        //console.log(e);
                        move_drag(e);
                    })
                    .on('panend',function(){
                        end_drag();
                    });

                /*initDrag.drag('start',function(){
                        start_drag($(this));
                    })
                    .drag(function (ev,dd) {
                        move_drag(dd);
                    },{relative:true})
                    .drag('end',function(){
                        end_drag();
                    });*/
            })
            //frame.find('.search_result_div').jScrollPane({showArrows:false,autoReinitialise:true,verticalDragMinHeight:scroll_height,verticalDragMaxHeight:scroll_height});
            frame.find('.search_header_tab td').each(function(){
                result_cols.push($(this).data('targ'))
            })
            search_rooms();
        }

        this.empty();
        this.append('<div class="param_search_frame"></div>')
            .find('.param_search_frame').load('/assets/pages/search.html',function(){
                frame=$(this);
                loadAnimate(frame);
                frame.find('.param_search_close').on('click',function(){
                    unload();
                })
                frame.find('.search_header_tab').on('click','td',function(){
                    if($(this).hasClass('active')) {
                        $(this).addClass('active2').removeClass('active');
                    } else {
                        $(this).addClass('active').removeClass('active2').siblings().removeClass('active active2');
                    }
                    sort_table();
                })
                frame.find('.search_result_tab').on('click','tr',function(){
                    if($(this).attr('class')!='r_notfound') {
                        //console.log($(this).data());
                        resultClick($(this).data('targ'));
                    }
                })
                frame.find('.search_pagination_frame').on('click','div:not(.active)',function(){
                    filter_results($(this).data('targ'));
                })
                frame.find('.search_buttons_frame').on('click','div',function(){
                    $(this).toggleClass('active');
                    search_rooms();
                })
                search_init();
            })

        this.unload=function() {
            unload();
        }
        this.removeEvents=function() {
            removeEvents();
        }
        this.destroy=function() {
            removeEvents();
            frame.remove();
        }
        return this;
    };
})(jQuery);