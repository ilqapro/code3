
    function courses_loadmore_items_init() {

      let min_items_to_show = 8;
      let item_width = $('.programCourses-item').outerWidth();
      let active_items_in_row = Math.round($('.container').width() / item_width);
      let absent_items = active_items_in_row - (min_items_to_show % active_items_in_row);

      let items_to_show = (absent_items == active_items_in_row) ? min_items_to_show : (min_items_to_show + absent_items);
  
      for( let i = 0; i < items_to_show; i++ ) {
        $('.programCourses-wrapper .programCourses-item').eq(i).addClass('active')
      }

    }
    courses_loadmore_items_init()
