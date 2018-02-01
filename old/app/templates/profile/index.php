<?php $bg = '-bg-light-gray'; ?>
<?php require_once('../_inc/header.php'); ?>

<section class="app__body">

    <!-- BANNER -->
    <div class="banner banner--empty">
        <div class="cover container" style="background-image:url('/assets/img/placeholder/cover-hernandezes.png')">
            <div class="cover__info cover__info--t">
                <div class="wrapper">
                    <div class="wrapper__inner">
                        <ul class="tags__list">
                            <li class="tag tag--l">
                                Experienced Sitter
                            </li>
                        </ul>
                    </div>
                    <div class="wrapper__inner -align-right">
                        <ul class="tags__list list list--inline">
                            <li class="tag tag--icon">
                                <svg class="icon-social-facebook"><use xlink:href="#icon-social-facebook"></use></svg>
                            </li>
                            <li class="tag">
                                34 Sits
                            </li>
                            <li class="tag">
                                16 Connections
                            </li>
                            <li class="item margin--s no--margin-r no--margin-tb">
                                <button class="btn btn--icon btn--toggle btn--fav">
                                    <svg class="icon-heart -off"><use xlink:href="#icon-heart"></use></svg>
                                    <svg class="icon-heart-filled -on"><use xlink:href="#icon-heart-filled"></use></svg>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="cover__info cover__info--b -reversed">
                <div class="row">
                    <div class="col col--7-of-12">
                        <ul class="list list--inline">
                            <li class="item margin--s no--margin-tb no--margin-l">
                                <div class="avatar avatar--xl avatar--square avatar--outlined">
                                    <div class="marker"></div>
                                    <div id="profileMap" class="map"></div>
                                </div>
                            </li>
                            <li class="item">
                                <h1 class="heading margin--xs no--margin-lr">Luis & Elba's Family</h1>
                                <h2 class="-fontSize-l">
                                    Mar Vista, Los Angeles, CA
                                    <span class="margin--xs no--margin-tb">•</span>
                                    Joined Sep 6, 2017
                                </h2>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /BANNER -->

    <section class="content__section">
        <div class="section__head bar">
            <div class="container">
                <ul class="tabs__list">
                    <li class="tab is--active">
                        Activity Feed
                    </li>
                    <li class="tab">
                        Family Members
                    </li>
                </ul>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col col--7-of-12">

                    <!-- ACTIVITY TAB -->
                    <div id="activityTab" class="tab__content">
                        <!-- ACTIVITY CARD (OWNED, EXPANDED)-->
                        <div class="activity card is--expanded">
                            <div class="activity__main wrapper">
                                <div class="wrapper__inner">
                                    <div class="avatar avatar--square" style="background-image:url('/assets/img/placeholder/family-hammonds.png');"></div>
                                    <div class="tg tg--s -disp-ib">
                                        <span class="tg__title">
                                            <strong>Luis & Elba</strong> sat for <strong>My Family</strong>
                                        </span>
                                        <span class="tg__sub">Yesterday</span>
                                    </div>
                                </div>
                                <div class="wrapper__inner -align-right">
                                    <a class="comment__count tag tag--secondary tag--outline" href="javascript:;">
                                        <svg class="icon-comments"><use xlink:href="#icon-comments"></use></svg>
                                        2
                                    </a>
                                </div>
                            </div>
                            <div class="activity__comments">
                                <ul class="comments__group">
                                    <li class="comment">
                                        <div class="avatar avatar--s"></div>
                                        <div class="comment__text">
                                            <span class="name">Michelle H</span>
                                            The kids always love going to stay with the hernandezes! 😊 Except they never want to come home after!!
                                            <span class="timestamp">Yesterday</span>
                                        </div>
                                    </li>
                                    <li class="comment">
                                        <div class="avatar avatar--s"></div>
                                        <div class="comment__text">
                                            <span class="name">Luis H</span>
                                            We always love having them!
                                            <span class="timestamp">3 hours ago</span>
                                        </div>
                                    </li>
                                </ul>
                                <div class="comment__new">
                                    <div class="avatar avatar--s"></div>
                                    <div class="input input--text input--s">
                                        <input type="text" class="input__field" placeholder="Write a comment...">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /ACTIVITY CARD (OWNED)-->

                        <!-- ACTIVITY CARD (NOT OWNED)-->
                        <div class="activity card">
                            <div class="activity__main wrapper">
                                <div class="wrapper__inner">
                                    <div class="avatar avatar--square" style="background-image:url('/assets/img/placeholder/family-todds.png');"></div>
                                    <div class="tg tg--s -disp-ib">
                                        <span class="tg__title">
                                            <strong>Luis & Elba</strong> sat for <strong>Elisha's Family</strong>
                                        </span>
                                        <span class="tg__sub">5 days ago</span>
                                    </div>
                                </div>
                                <div class="wrapper__inner -align-right">
                                    <a class="comment__count tag tag--secondary tag--outline" href="javascript:;">
                                        <svg class="icon-comments"><use xlink:href="#icon-comments"></use></svg>
                                        1
                                    </a>
                                </div>
                            </div>
                            <div class="activity__comments">
                                <ul class="comments__group">
                                    <li class="comment">
                                        <div class="avatar avatar--s"></div>
                                        <div class="comment__text">
                                            <span class="name">Elisha T</span>
                                            Luis and Elba are the best!!😊
                                            <span class="timestamp">3 days ago</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- /ACTIVITY CARD (OWNED)-->

                        <!-- ACTIVITY CARD (NO COMMENTS)-->
                        <div class="activity card">
                            <div class="activity__main wrapper">
                                <div class="wrapper__inner">
                                    <div class="avatar avatar--square" style="background-image:url('/assets/img/placeholder/family-sullivans.png');"></div>
                                    <div class="tg tg--s -disp-ib">
                                        <span class="tg__title">
                                            <strong>Tim & Mark</strong> sat for <strong>Luis & Elba's Family</strong>
                                        </span>
                                        <span class="tg__sub">2 months ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /ACTIVITY CARD (NO COMMENTS)-->
                    </div>
                    <!-- /ACTIVITY TAB -->

                    <!-- FAMILY MEMBERS TAB -->
                    <div id="familyMembersTab" class="tab__content">

                        <div class="row row--tight-gutter">

                            <!-- PERSON -->
                            <div class="entity-card col col--1-of-2">
                                <div class="card">
                                    <div class="entity__image avatar"></div>
                                    <div class="group__info tg tg--s">
                                        <span class="tg__title truncate">Luis</span>
                                        <span class="tg__sub">Father</span>
                                    </div>
                                </div>
                            </div>
                            <!-- /PERSON -->

                            <!-- PERSON -->
                            <div class="entity-card col col--1-of-2">
                                <div class="card">
                                    <div class="entity__image avatar"></div>
                                    <div class="group__info tg tg--s">
                                        <span class="tg__title truncate">Elba</span>
                                        <span class="tg__sub">Mother</span>
                                    </div>
                                </div>
                            </div>
                            <!-- /PERSON -->

                        </div>

                        <hr class="hairline">

                        <div class="info-box info-box--tertiary wrapper">
                            <div class="info-box__icon wrapper__inner -valign-t">
                                <div class="box-icon box-icon--tertiary">
                                    <svg class="icon-kids icon--l"><use xlink:href="#icon-kids"></use></svg>
                                </div>
                            </div>
                            <div class="info-box__content">
                                <h3>Why is children’s information hidden?</h3>
                                <p>The privacy and safety of our community is Wana’s #1 priority. To learn more about our Trust & Safety policy and to find out how we’re keeping My Family safe, <a href="#">click here</a>.</p>
                            </div>
                        </div>

                    </div>
                    <!-- /FAMILY MEMBERS TAB -->

                </div>
                <div class="col col--5-of-12">

                    <div class="sidebar">
                        <!-- EXCHANGE PANEL -->
                        <div class="exchange__panel card card--shadow">
                            <div class="card__head wrapper -reversed -bg-primary -border-none">
                                <div class="wrapper__inner">
                                    <h6 class="ts--label no--margin">Exchange Babysitting</h5>
                                </div>
                                <div class="wrapper__inner -align-right">
                                    <ul class="tabs__list">
                                        <li class="tab is--active">
                                            Request
                                        </li>
                                        <li class="tab">
                                            Offer
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="card__body">
                                <ul class="date-range">
                                    <li class="date date__start input input--text input--datepicker is--filled">
                                        <input type="text" class="input__field" placeholder="Select Date" value="Sep 27, 2017">
                                        <label class="input__icon"><svg class="icon-date"><use xlink:href="#icon-date"></use></svg></label>
                                    </li>
                                    <li class="date date__add">
                                        <button class="btn btn--tertiary btn--outline btn--s">+ Add Day</button>
                                    </li>
                                    <li class="date date__end input input--text input--datepicker">
                                        <input type="text" class="input__field" placeholder="Select End Date">
                                        <label class="input__icon"><svg class="icon-date"><use xlink:href="#icon-date"></use></svg></label>
                                    </li>
                                </ul>
                            </div>
                            <div class="card__foot">
                                <button class="btn btn--secondary btn--block">Request Babysitting</button>
                                <button class="btn btn--primary btn--block btn--outline btn--m">Send Message</button>
                            </div>
                        </div>
                        <!-- /EXCHANGE PANEL -->

                        <!-- ABOUT PANEL -->
                        <div class="about__panel card card--no-hover">
                            <div class="card__head wrapper">
                                <div class="wrapper__inner">
                                    <h6 class="ts--label no--margin">Luis & Elba's Household</h5>
                                </div>
                            </div>
                            <div class="card__body card__body--inset">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a ante accumsan, mollis purus quis, porttitor nisl. Nulla ac ullamcorper risus.</p>
                            </div>
                            <div class="card__body no--pad-b">
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
                        <!--/ ABOUT PANEL -->
                    </div>

                </div>
            </div>
        </div>
    </section>

    <script>
    function initMap() {
        // var searchLoc = {lat: 34.015326, lng: -118.43424};
        var map = new google.maps.Map(document.getElementById('profileMap'), {
            draggable: false,
            scrollwheel: false,
            panControl: false,
            maxZoom: 13,
            minZoom: 13,
            zoom: 13,
            center: {lat: 34.015326, lng: -118.43424},
            disableDefaultUI: true,
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

    <?php require_once('../_inc/footer.php'); ?>
