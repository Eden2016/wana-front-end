// Styleguide Menu
$('.lsg__menu-item').click(function(){
    $('.lsg__menu-item').removeClass('--open');
    $(this).addClass('--open');
});

// Add active class to nav
$(function(){
    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
    $('.lsg__submenu-item a').each(function() {
        if (this.href === path) {
            $(this).addClass('active');
            $(this).closest('.lsg__menu-item').addClass('--open');
        }
    });
});

var color = '';
$('.lsg__color').click(function() {
    var x = $(this).css('backgroundColor');
    hexc(x);
    alert('Copied!');
})

//Convert RGB color to HEX and copy to clipboard
function hexc(colorval) {
    var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete(parts[0]);
    for (var i = 1; i <= 3; ++i) {
        parts[i] = parseInt(parts[i]).toString(16);
        if (parts[i].length == 1) parts[i] = '0' + parts[i];
    }
    color = '#' + parts.join('');

    //Copy hex to clipboard
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(color).select();
    document.execCommand("copy");
    $temp.remove();
}

$('.lsg__color').each(function(){
    var bg = $(this).css('backgroundColor');
    hexc(bg);
    $(this).append('<span class="lsg__-color-hex">' + color + '</span>');
});
