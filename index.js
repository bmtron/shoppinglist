function test() {
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        //alert('HI');

        let itemA = $('#shopping-list-entry').val();
        $('.shopping-list').append(`<li>
        <span class="shopping-item">${itemA}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
      $('#shopping-list-entry').val('');  
    });
}
function checkList() {
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        //$('.shopping-item').toggleClass('shopping-item__checked');
        
        $(event.currentTarget).closest("li").toggleClass('shopping-item__checked');

    });
}
$(test);
$(checkList);