function test() {
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();

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
        let test = $(this).closest('li');

        test.find('span.shopping-item').toggleClass('shopping-item__checked');
    });
}
function deleteItems() {
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
    });
}
$(test);
$(checkList);
$(deleteItems);
