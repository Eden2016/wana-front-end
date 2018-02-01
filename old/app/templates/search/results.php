<?php require_once('../_inc/header.php'); ?>
<section class="app__body panel__wrapper">

    <div class="panel panel__sidebar">
        <div class="panel__head wrapper">
            <div class="wrapper__inner">
                <svg class="icon-filters"><use xlink:href="#icon-filters"></use></svg>
                <span class="ts--label -fontSize-xs">
                    Filters
                </span>
            </div>
            <div class="wrapper__inner -align-right">
                <ul class="list list--inline">
                    <li class="item">
                        <button class="btn btn--link btn--s">Reset</button>
                    </li>
                    <li class="item">
                        <button class="btn btn--tertiary btn--outline btn--s">Apply</button>
                    </li>
                </ul>
            </div>
        </div>
        <div id="resultsMap" class="panel__map"></div>
        <div class="panel__filters padding--m">
            <div class="well no--pad">
                <div class="well__row">
                    <div class="well__section">
                        <label class="input input--text">
                            <span class="label">Keywords</span>
                            <input type="text" class="input__field" value="">
                        </label>
                    </div>
                </div>
                <div class="well__row">
                    <div class="well__section">
                        <label class="input">
                            <span class="label">Children's Ages</span>
                            <input type="range" class="input__field" value="">
                        </label>
                    </div>
                </div>
                <div class="well__row">
                    <div class="well__section">
                        <label class="input input--text">
                            <span class="label">Spoken Languages</span>
                            <input type="text" class="input__field" value="">
                        </label>
                    </div>
                </div>
                <div class="well__row">
                    <div class="well__section">
                        <div class="input">
                            <span class="label">Household Traits</span>
                            <div class="checkbox-group checkbox-group--pills row row--tight-gutter">
                                <label class="checkbox col col--1-of-2">
                                    <input type="checkbox">
                                    <span class="checkbox__label">
                                        <svg class="icon-no-smoking"><use xlink:href="#icon-no-smoking"></use></svg>
                                        Non-Smoking
                                    </span>
                                </label>
                                <label class="checkbox col col--1-of-2">
                                    <input type="checkbox">
                                    <span class="checkbox__label">
                                        <svg class="icon-yes-vaccines"><use xlink:href="#icon-yes-vaccines"></use></svg>
                                        Kids are Vaccinated
                                    </span>
                                </label>
                                <label class="checkbox col col--1-of-2">
                                    <input type="checkbox">
                                    <span class="checkbox__label">
                                        <svg class="icon-yes-cpr"><use xlink:href="#icon-yes-cpr"></use></svg>
                                        Knows Child CPR
                                    </span>
                                </label>
                                <label class="checkbox col col--1-of-2">
                                    <input type="checkbox">
                                    <span class="checkbox__label">
                                        <svg class="icon-yes-first-aid"><use xlink:href="#icon-yes-first-aid"></use></svg>
                                        Knowsh Child First-Aid
                                    </span>
                                </label>
                                <label class="checkbox col col--1-of-2">
                                    <input type="checkbox">
                                    <span class="checkbox__label">
                                        <svg class="icon-no-guns"><use xlink:href="#icon-no-guns"></use></svg>
                                        No Firearms
                                    </span>
                                </label>
                                <label class="checkbox col col--1-of-2">
                                    <input type="checkbox">
                                    <span class="checkbox__label">
                                        <svg class="icon-yes-outdoor-area"><use xlink:href="#icon-yes-outdoor-area"></use></svg>
                                        Has Outdoor Area
                                    </span>
                                </label>
                                <label class="checkbox col col--1-of-2">
                                    <input type="checkbox">
                                    <span class="checkbox__label">
                                        <svg class="icon-no-pool"><use xlink:href="#icon-no-pool"></use></svg>
                                        No Pool
                                    </span>
                                </label>
                                <label class="checkbox col col--1-of-2">
                                    <input type="checkbox">
                                    <span class="checkbox__label">
                                        <svg class="icon-no-pets"><use xlink:href="#icon-no-pets"></use></svg>
                                        No Pets
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="well__row">
                    <div class="well__section">
                        <label class="checkbox">
                            <input type="checkbox">
                            <span class="checkbox__label">
                                Only show me profiles with photos
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="panel panel__body">
        <div class="panel__head wrapper margin--m no--margin-t no--margin-lr">
            <div class="wrapper__inner -fontSize-xs">
                Search Results
                <span class="margin--xs no--margin-tb">•</span>
                <strong class="-fontWeight-3 -color-black">89 Families</strong>
            </div>
        </div>
        <div class="container container--fluid">
            <div class="card__list card__list--grid">

                <!-- Single Family Card -->
                <a class="fam card is--connected" href="/templates/profile">
                    <div class="card__controls wrapper -reversed">
                        <div class="wrapper__inner">
                            <ul class="tags__list">
                                <li class="tag">
                                    Experienced Sitter
                                </li>
                            </ul>
                        </div>
                        <div class="wrapper__inner -align-right">
                            <button class="btn btn--icon btn--toggle btn--fav">
                                <svg class="icon-heart -off"><use xlink:href="#icon-heart"></use></svg>
                                <svg class="icon-heart-filled -on"><use xlink:href="#icon-heart-filled"></use></svg>
                            </button>
                        </div>
                    </div>
                    <div class="fam__card-image card__image go ar ar--16-9" style="background-image:url('/assets/img/placeholder/family-hernandezes.png');">
                        <div class="card__image-b wrapper">
                            <div class="wrapper__inner">
                                <div class="fam__adults list list--inline">
                                    <li class="item">
                                        <div class="avatar avatar--s"></div>
                                    </li>
                                </div>
                            </div>
                            <div class="wrapper__inner -align-right">
                                <div class="fam__kids list list--inline">
                                    <li class="item">
                                        <div class="avatar avatar--xs"></div>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card__body">
                        <div class="fam__meta tg tg--m">
                            <span class="fam__name tg__title">Luis & Elba's Family</span>
                            <span class="fam__desc tg__sub">2 Kids  •  Mar Vista</span>
                            <span class="fam__connection tg__tertiary">You and Luis are friends on Facebook.</span>
                        </div>
                    </div>
                </a>
                <!-- /Single Family Card -->

                <!-- Placeholder Families List -->
                <?php require_once('../_inc/placeholder/families.php'); ?>
                <!-- /Placeholder Families List -->

            </div>
        </div>
    </div>

</section>

<script>
var citymap = {
    neighborhood: {
        center: {lat: 34.015326, lng: -118.43424},
        searchRadius: 3
    }
}
function initMap() {
    // var searchLoc = {lat: 34.015326, lng: -118.43424};
    var map = new google.maps.Map(document.getElementById('resultsMap'), {
        zoom: 13,
        center: {lat: 34.015326, lng: -118.43424},
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        gestureHandling: 'cooperative',
        styles:
        [
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#363b4f"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#5c6ed7"
                    }
                ]
            },
            {
                "featureType": "poi",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#42c9d6"
                    }
                ]
            }
        ]
    });
    for (var neighborhood in citymap) {
      // Add the circle for this city to the map.
      var cityCircle = new google.maps.Circle({
        strokeColor: '#5F70D0',
        strokeOpacity: 1,
        strokeWeight: 2,
        fillColor: '#5F70D0',
        fillOpacity: 0.2,
        map: map,
        center: citymap[neighborhood].center,
        radius: Math.sqrt(citymap[neighborhood].searchRadius) * 1609.34
      });
    }
}
</script>
<script async defer
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBlV0bL2xLB0NzXnNZJ26IX0Hkg0O_1z1A&callback=initMap">
</script>


<?php require_once('../_inc/footer.php'); ?>
