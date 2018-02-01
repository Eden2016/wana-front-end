//=== This JS is strictly for prototyping purposes and should not be used for the real application.

//=== Showing/Hiding Dropdowns
$(function(){
    $('.dropdown').click(function(e){
        var isActive = ($(this).hasClass('is--active')) ? true : false;
        $('.dropdown.is--active').removeClass('is--active');
        if(!isActive) $(this).addClass('is--active');
        e.stopPropagation();
    });
    $('.dropdown__box').click(function(e){
        e.stopPropagation();
    })
    $(document).click(function(e){
        $('.dropdown').removeClass('is--active');
    })
})

//=== Favorite Toggle
$('.btn--fav').click(function(){
    $(this).toggleClass('is--active');
    $(this).closest('.fam.card').toggleClass('is--fav');
});

//=== Tabs
$('.tab').click(function(){
    var par = $(this).closest('.tabs__list');
    $(par).find('.tab').removeClass('is--active');
    $(this).addClass('is--active');
});

//=== Activity Comments
$('.activity.card .comment__count').click(function(){
    $(this).closest('.activity.card').toggleClass('is--expanded');
});

//=== Date Range
$('.date__add .btn').click(function(){
    var par = $(this).closest('.date-range');
    $(par).toggleClass('is--multi');
})

//=== Card Accordions
$('.card--accordion .card__head').click(function(){
    var par = $(this).closest('.card--accordion');
    if ($(par).hasClass('is--expanded')){
        $(par).removeClass('is--expanded');
        $(par).find('.tab').removeClass('is--active');
    } else{
        $(par).addClass('is--expanded');
        $(par).find('.tab:first-of-type').addClass('is--active');
    }
});
$('.card__tabs .tab').click(function(){
    var par = $(this).closest('.card--accordion');
    $(par).addClass('is--expanded');
});

//=== Table Sorting
$('.table th.sort').click(function(){
    var table = $(this).closest('.table');
    if ( $(this).hasClass('sort--asc') || $(this).hasClass('sort--desc') ){
        $(this).toggleClass('sort--asc sort--desc');
    } else {
        $(table).find('.sort').removeClass('sort--asc sort--desc');
        $(this).addClass('sort--desc');
    }
});

//=== Toggle All Toggle Switches
$('.input--toggle-all input').change(function(){
    var target = $(this).data('target');
    if ( $(this).prop('checked') == true ){
        $(target).find('.input--toggle input').prop('checked', true);
    } else {
        $(target).find('.input--toggle input').prop('checked', false);
    }
})
$('.toggle__group .input--toggle input').change(function(){
    var target = $(this).closest('.toggle__group').data('target');
    if ( $(this).prop('checked') == false ){
        $(target).prop('checked', false);
    }
})
