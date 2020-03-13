$(document).ready(function () {
    var list = $('.articleList');
    var list_items = list.find('.items');
    list_items.wrap('<div class="listWrapper" style="position: relative;"></div>');
    var list_item = list_items.find('.item');
    var control = list.find('.control');
    var up = control.find('.up');
    var down = control.find('.down');
    var list_wrapper = list.find('.listWrapper');

    var show_item = 5;
    var quantity = list_item.length;

    var s_h = 0;
    var count = 0;

    if (quantity > show_item){
        list_wrapper.addClass('scrollOn');
    } else {
        up.addClass('disable');
        down.addClass('disable');
    }
    list_item.last().addClass('last');
    list_item.first().addClass('first');

    $(window).load(function() {
        list_item.each(function () {
            count++;
            if (count <= show_item) {
                s_h += $(this).outerHeight(true);
            } else if ((show_item + 1) == count) {
                list_wrapper.height(s_h);
                list_wrapper.css({overflow: 'hidden'});
                list_items.css({position: 'relative'});
                $(this).addClass('next');
                $(this).prev().addClass('prev');
            }
        });
    });

    down.on('click', function(){
        if (list_wrapper.hasClass('scrollOn') && !$(this).hasClass('disable')){
            var current_pos = list_items.position().top;
            var next_item = list_items.find('.next');
            var prev_item = list_items.find('.prev');
            var item_height = next_item.outerHeight(true);
            var next_item_index = prev_item.index();

            if (! next_item.hasClass('last') && next_item_index > 0){
                list_wrapper.removeClass('scrollOn');
                list_items.animate({top: current_pos - item_height}, function(){list_wrapper.addClass('scrollOn')});
                next_item.removeClass('next');
                prev_item.removeClass('prev');
                next_item.next().addClass('next');
                prev_item.next().addClass('prev');
                up.removeClass('disable');
            } else {
                list_wrapper.removeClass('scrollOn');
                list_items.animate({top: current_pos - item_height}, function(){list_wrapper.addClass('scrollOn')});
                next_item.prev().removeClass('prev');
                next_item.addClass('prev');
                next_item.removeClass('next');
                down.addClass('disable');
            }
        }
    });

    up.on('click', function(){
        if (list_wrapper.hasClass('scrollOn')){
            var current_pos = list_items.position().top;
            var next_item = list_items.find('.next');
            var prev_item = list_items.find('.prev');
            var item_height = prev_item.outerHeight(true);
            var prev_item_index = prev_item.index();

            if (prev_item_index >= show_item){
                if (list_item.last().hasClass('prev')){
                    list_item.last().addClass('next');
                }
                list_wrapper.removeClass('scrollOn');
                list_items.animate({top: current_pos + item_height}, function(){list_wrapper.addClass('scrollOn')});
                next_item.removeClass('next');
                prev_item.removeClass('prev');
                next_item.prev().addClass('next');
                prev_item.prev().addClass('prev');
                down.removeClass('disable');
            }
        }

    });

});
