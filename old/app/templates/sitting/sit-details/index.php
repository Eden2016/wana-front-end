<?php $bg = '-bg-light-gray'; ?>
<?php require_once('../../_inc/header.php'); ?>

<section class="app__body">

    <div class="content__section">
        <!-- MAP -->
        <div class="section__head bar bar--l bar--panel no--margin -border-none">
            <div class="container wrapper">
                <a class="back__link link link--back" href="/templates/sitting">
                    <svg class="icon-caret-thin"><use xlink:href="#icon-caret-thin"></use></svg>
                    My Upcoming Sits
                </a>
                <div class="wrapper__inner -align-center">
                    <h1 class="-fontSize-l">You're sitting for <strong>Luis & Elba's Family</strong>!</h1>
                </div>
            </div>
        </div>
        <!-- /MAP -->

        <!-- BANNER -->
        <div class="banner banner--m">
            <div id="mainMap" class="map"></div>
        </div>
        <!-- /BANNER -->
    </div>

    <div class="content__section content__section--no-head no--pad">
        <div class="container">
            <div class="bar bar--l bar--overlap card card--shadow">
                <div class="card__body wrapper">
                    <div class="wrapper__inner">
                        <ul class="list list--inline list--padded">
                            <li class="item">
                                <ul class="date-group">
                                    <li>
                                        <div class="date">
                                            <span class="day">17</span>
                                            <span class="month">Sep</span>
                                        </div>
                                        <div class="time">
                                            7:30 AM
                                        </div>
                                    </li>
                                    <li class="divider">&ndash;</li>
                                    <li>
                                        <div class="date">
                                            <span class="day">19</span>
                                            <span class="month">Sep</span>
                                        </div>
                                        <div class="time">
                                            4:00 PM
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li class="item">
                                <ul class="list list--inline list--padded">
                                    <li class="item">
                                        <svg class="icon-home"><use xlink:href="#icon-home"></use></svg>
                                        Their Home
                                    </li>
                                    <!-- <li class="item">
                                        <svg class="icon-time"><use xlink:href="#icon-time"></use></svg>
                                        48 Hrs
                                    </li> -->
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="wrapper__inner -align-right">
                        <ul class="list list--inline list--padded">
                            <li class="item">
                                <span class="tag tag--secondary tag--s">Earn 48 Points</span>
                            </li>
                            <li class="item">
                                <a class="dropdown dropdown--no-caret dropdown--over link link--icon" href="javascript:;">
                                    <svg class="icon-more"><use xlink:href="#icon-more"></use></svg>
                                    <div class="dropdown__box">
                                        Edit/Cancel
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col col--7-of-12">

                    <!-- ADULTS -->
                    <div class="card card--accordion is--expanded">
                        <div class="card__head wrapper">
                            <div class="wrapper__inner">
                                <span class="ts--label">Adults</span>
                            </div>
                        </div>
                        <div class="card__tabs">
                            <ul class="tabs__list tabs__list--avatars">
                                <li class="tab is--active">
                                    <div class="avatar"></div>
                                </li>
                                <li class="tab">
                                    <div class="avatar"></div>
                                </li>
                            </ul>
                        </div>
                        <div class="card__body">
                            <div class="tg tg--l margin--s no--margin-lr no--margin-t">
                                <span class="tg__title">Luis Hernandez</span>
                                <span class="tg__sub">Father</span>
                            </div>
                            <div class="well no--pad">
                                <div class="well__row">
                                    <div class="well__section is-halved">
                                        <div class="tg tg--m">
                                            <small class="ts--label">Primary Phone</small>
                                            <span class="tg__main">(310) 555-1234</span>
                                        </div>
                                    </div>
                                    <div class="well__section is-halved">
                                        <div class="tg tg--m">
                                            <small class="ts--label">Secondary Phone</small>
                                            <span class="tg__main">(310) 555-7890</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="well__row">
                                    <div class="well__section is-halved">
                                        <small class="ts--label margin--xs no--margin-t no--margin-lr">Favorite Babysitting Activities</small>
                                        <ul class="list list--inline">
                                            <li class="tag tag--primary">
                                                Hide & Go Seek
                                            </li>
                                            <li class="tag tag--primary">
                                                Board Games
                                            </li>
                                            <li class="tag tag--primary">
                                                Outdoor Activities
                                            </li>
                                            <li class="tag tag--primary">
                                                Reading
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="well__row">
                                    <div class="well__section is-halved">
                                        <small class="ts--label margin--xs no--margin-t no--margin-lr">Parenting Styles</small>
                                        <ul class="list list--inline">
                                            <li class="tag tag--primary">
                                                Nurturing
                                            </li>
                                            <li class="tag tag--primary">
                                                Active
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /ADULTS -->

                    <!-- KIDS -->
                    <div class="card card--accordion is--expanded">
                        <div class="card__head wrapper">
                            <div class="wrapper__inner">
                                <span class="ts--label">Kids</span>
                            </div>
                        </div>
                        <div class="card__tabs">
                            <ul class="tabs__list tabs__list--avatars">
                                <li class="tab is--active">
                                    <div class="avatar"></div>
                                </li>
                                <li class="tab">
                                    <div class="avatar"></div>
                                </li>
                            </ul>
                        </div>
                        <div class="card__body">
                            <div class="tg tg--l margin--s no--margin-lr no--margin-t">
                                <span class="tg__title">Isabella Hernandez</span>
                            </div>
                            <div class="well no--pad">
                                <div class="well__row">
                                    <div class="well__section is-halved">
                                        <div class="tg tg--m">
                                            <small class="ts--label">Gender</small>
                                            <span class="tg__main">Female</span>
                                        </div>
                                    </div>
                                    <div class="well__section is-halved">
                                        <div class="tg tg--m">
                                            <small class="ts--label">DOB</small>
                                            <span class="tg__main">June 10, 2010 (7 Years Old)</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="well__row">
                                    <div class="well__section is-halved">
                                        <small class="ts--label margin--xs no--margin-t no--margin-lr">Favorite Babysitting Activities</small>
                                        <ul class="list list--inline">
                                            <li class="tag tag--primary">
                                                Hide & Go Seek
                                            </li>
                                            <li class="tag tag--primary">
                                                Board Games
                                            </li>
                                            <li class="tag tag--primary">
                                                Outdoor Activities
                                            </li>
                                            <li class="tag tag--primary">
                                                Reading
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="well__row">
                                    <div class="well__section">
                                        <small class="ts--label margin--xs no--margin-t no--margin-lr">Personality</small>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque viverra feugiat laoreet. Sed nec vestibulum ex, sed.</p>
                                    </div>
                                </div>
                                <div class="well__row">
                                    <div class="well__section is-halved">
                                        <small class="ts--label margin--xs no--margin-t no--margin-lr">Instructions for Eating</small>
                                        <p>None</p>
                                    </div>
                                </div>
                                <div class="well__row">
                                    <div class="well__section">
                                        <small class="ts--label margin--xs no--margin-t no--margin-lr">Instructions for Sleeping</small>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque viverra feugiat laoreet. Sed nec vestibulum ex, sed malesuada lectus. Vestibulum blandit dolor dolor, sed pellentesque ex fringilla ac.</p>
                                    </div>
                                </div>
                                <div class="well__row">
                                    <div class="well__section">
                                        <small class="ts--label margin--xs no--margin-t no--margin-lr">Allergies</small>
                                        <p>None</p>
                                    </div>
                                </div>
                                <div class="well__row">
                                    <div class="well__section">
                                        <small class="ts--label margin--xs no--margin-t no--margin-lr">Medication</small>
                                        <p>None</p>
                                    </div>
                                </div>
                                <div class="well__row">
                                    <div class="well__section">
                                        <small class="ts--label margin--xs no--margin-t no--margin-lr">Vaccinations</small>
                                        <p>Prefer not to answer.</p>
                                    </div>
                                </div>
                                <div class="well__row">
                                    <div class="well__section is-halved">
                                        <small class="ts--label margin--xs no--margin-t no--margin-lr">Pediatrician</small>
                                        <div class="tg tg--s tg--contact">
                                            <span class="tg__title">Dr. Sandeep Barsar</span>
                                            <span class="tg__sub margin--xs no--margin-lr">
                                                1234 S. Flower Street<br>
                                                Los Angeles, CA 90017
                                            </span>
                                            <span class="tg__title">
                                                (310) 555-6645
                                            </span>
                                        </div>
                                    </div>
                                    <div class="well__section is-halved">
                                        <small class="ts--label margin--xs no--margin-t no--margin-lr">Preferred Hospital</small>
                                        <div class="tg tg--s tg--contact">
                                            <span class="tg__title">Cedars-Sinai Medical Center</span>
                                            <span class="tg__sub margin--xs no--margin-lr">
                                                1234 Olympic Blvd<br>
                                                Los Angeles, CA 90017
                                            </span>
                                            <span class="tg__title">
                                                (310) 555-1256
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /KIDS -->

                </div>
                <div class="col col--5-of-12">
                    <div class="card">
                        <div class="card__head wrapper">
                            <div class="wrapper__inner">
                                <span class="ts--label">Special Instructions</span>
                            </div>
                        </div>
                        <div class="card__body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque viverra feugiat laoreet. Sed nec vestibulum ex, sed malesuada lectus.</p>
                            <p>Vestibulum blandit dolor dolor, sed pellentesque ex fringilla ac. Sit amet, consectetur adipiscing elit. Pellentesque viverra feugiat laoreet. Sed nec vestibulum ex, sed malesuada lectus. Vestibulum blandit dolor dolor, sed pellentesque ex fringilla ac.</p>
                        </div>
                    </div>
                    <div class="fam card">
                        <div class="fam__card-image card__image go ar ar--16-9 -reversed" style="background-image:url('/assets/img/placeholder/family-hernandezes.png');">
                            <div class="card__image-b wrapper padding--s">
                                <div class="wrapper__inner">
                                    <div class="tg tg--l">
                                        <a class="tg__title" href="/templates/profile">Luis & Elba's Family</a>
                                        <span class="tg__sub">Palms, Los Angeles, CA</span>
                                    </div>
                                </div>
                                <div class="wrapper__inner -align-right">
                                    <button class="btn btn--reversed btn--outline btn--s">Send Message</button>
                                </div>
                            </div>
                        </div>
                        <div class="card__body">
                            <ul class="list list--traits">
                                <li class="item">
                                    <svg class="icon-no-smoking"><use xlink:href="#icon-no-smoking"></use></svg>
                                    Non-Smoking Home
                                </li>
                                <li class="item">
                                    <svg class="icon-yes-vaccines"><use xlink:href="#icon-yes-vaccines"></use></svg>
                                    Kids Are Vaccinated
                                </li>
                                <li class="item">
                                    <svg class="icon-yes-cpr"><use xlink:href="#icon-yes-cpr"></use></svg>
                                    Knows Child CPR
                                </li>
                                <li class="item">
                                    <svg class="icon-yes-first-aid"><use xlink:href="#icon-yes-first-aid"></use></svg>
                                    Knows Child First-Aid
                                </li>
                                <li class="item">
                                    <svg class="icon-no-guns"><use xlink:href="#icon-no-guns"></use></svg>
                                    No Firearms in Home
                                </li>
                                <li class="item">
                                    <svg class="icon-yes-outdoor-area"><use xlink:href="#icon-yes-outdoor-area"></use></svg>
                                    Has Outdoor Area
                                </li>
                                <li class="item">
                                    <svg class="icon-yes-pool"><use xlink:href="#icon-yes-pool"></use></svg>
                                    Has Pool
                                </li>
                                <li class="item">
                                    <svg class="icon-no-pets"><use xlink:href="#icon-no-pets"></use></svg>
                                    No Pets in Home
                                </li>
                            </ul>
                        </div>
                        <div class="card__foot">
                            <ul class="list list--thumbs">
                                <li class="thumb">
                                    <img src="/assets/img/placeholder/house-1.png" alt="">
                                </li>
                                <li class="thumb">
                                    <img src="/assets/img/placeholder/house-2.png" alt="">
                                </li>
                                <li class="thumb">
                                    <img src="/assets/img/placeholder/house-3.png" alt="">
                                </li>
                                <li class="thumb">
                                    <img src="/assets/img/placeholder/house-4.png" alt="">
                                </li>
                                <li class="thumb">
                                    <img src="/assets/img/placeholder/house-5.png" alt="">
                                </li>
                                <li class="thumb" data-more="+3">
                                    <img src="/assets/img/placeholder/house-5.png" alt="">
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
    function initMap() {
        // var searchLoc = {lat: 34.015326, lng: -118.43424};
        var map = new google.maps.Map(document.getElementById('mainMap'), {
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
    }
    </script>
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBlV0bL2xLB0NzXnNZJ26IX0Hkg0O_1z1A&callback=initMap">
    </script>

<?php require_once('../../_inc/footer.php'); ?>
