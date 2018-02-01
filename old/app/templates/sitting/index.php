<?php $bg = '-bg-light-gray'; ?>
<?php $page = 'sits'; ?>
<?php require_once('../_inc/header.php'); ?>

<section class="app__body">

    <div class="bar bar--tabs">
        <div class="container">
            <ul class="tabs__list">
                <li class="tab is--active" data-badge="2">
                    <a href="/templates/sitting">
                        Upcoming
                    </a>
                </li>
                <li class="tab" data-badge="3">
                    <a href="/templates/sitting/pending">
                        Completed
                    </a>
                </li>
            </ul>
        </div>
    </div>

    <!-- PAGE CONTENT -->
    <div class="content__section">
        <div class="section__head bar bar--l">
            <div class="container wrapper">
                <div class="wrapper__inner">
                    <h1 class="-fontSize-l">Upcoming Sits</h1>
                </div>
                <div class="wrapper__inner -align-right">
                    <ul class="list list--inline list--padded">
                        <li class="item">
                            You're sitting: <strong>2</strong>
                        </li>
                        <li class="item">|</li>
                        <li class="item">
                            They're Sitting: <strong>1</strong>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="section__content">
            <div class="container">

                <div class="card-table card-table--list">

                    <div class="card-table__head wrapper">
                        <div class="wrapper__inner">
                            <span class="ts--label">You're Sitting</span>
                        </div>
                    </div>

                    <!-- UPCOMING SIT (I'm Sitting) -->
                    <a class="sit card wrapper is--upcoming" href="/templates/sitting/sit-details">
                        <div class="wrapper__inner">
                            <div class="tg tg--s">
                                <div class="avatar avatar--square tg__cell" style="background-image:url('/assets/img/placeholder/family-hammonds.png');"></div>
                                <div class="tg__cell">
                                    <span class="tg__title">
                                        You're sitting for <strong>Luis & Elba's Family</strong>
                                    </span>
                                    <span class="tg__sub -emphasized">October 20, 2017</span>
                                </div>
                            </div>
                        </div>
                        <div class="wrapper__inner -align-right">
                            <ul class="list list--inline list--padded">
                                <li class="item">
                                    <svg class="icon-kids"><use xlink:href="#icon-kids"></use></svg>
                                    2 Kids
                                </li>
                                <li class="item">
                                    <svg class="icon-time"><use xlink:href="#icon-time"></use></svg>
                                    4 Hrs
                                </li>
                                <li class="item tag tag--secondary">
                                    Earn 4 Pts
                                </li>
                            </ul>
                        </div>
                    </a>
                    <!-- /UPCOMING SIT (I'm Sitting) -->

                    <!-- UPCOMING SIT (I'm Sitting) -->
                    <a class="sit card wrapper is--upcoming" href="/templates/sitting/sit-details">
                        <div class="wrapper__inner">
                            <div class="tg tg--s">
                                <div class="avatar avatar--square tg__cell" style="background-image:url('/assets/img/placeholder/family-hammonds.png');"></div>
                                <div class="tg__cell">
                                    <span class="tg__title">
                                        You're sitting for <strong>Luis & Elba's Family</strong>
                                    </span>
                                    <span class="tg__sub -emphasized">October 20, 2017</span>
                                </div>
                            </div>
                        </div>
                        <div class="wrapper__inner -align-right">
                            <ul class="list list--inline list--padded">
                                <li class="item">
                                    <svg class="icon-kids"><use xlink:href="#icon-kids"></use></svg>
                                    2 Kids
                                </li>
                                <li class="item">
                                    <svg class="icon-time"><use xlink:href="#icon-time"></use></svg>
                                    4 Hrs
                                </li>
                                <li class="item tag tag--secondary">
                                    Earn 4 Pts
                                </li>
                            </ul>
                        </div>
                    </a>
                    <!-- /UPCOMING SIT (I'm Sitting) -->
                </div>

                <div class="card-table card-table--list">

                    <div class="card-table__head wrapper">
                        <div class="wrapper__inner">
                            <span class="ts--label">They're Sitting</span>
                        </div>
                    </div>

                    <!-- UPCOMING SIT (They're Sitting) -->
                    <a class="sit card wrapper is--upcoming" href="/templates/sitting/sit-details">
                        <div class="wrapper__inner">
                            <div class="tg tg--s">
                                <div class="avatar avatar--square tg__cell" style="background-image:url('/assets/img/placeholder/family-blocks.png');"></div>
                                <div class="tg__cell">
                                    <span class="tg__title">
                                        <strong>Melissa & Zach</strong> are sitting for your family
                                    </span>
                                    <span class="tg__sub -emphasized">October 28 – 30, 2017</span>
                                </div>
                            </div>
                        </div>
                        <div class="wrapper__inner -align-right">
                            <ul class="list list--inline list--padded">
                                <li class="item">
                                    <svg class="icon-kids"><use xlink:href="#icon-kids"></use></svg>
                                    2 Kids
                                </li>
                                <li class="item">
                                    <svg class="icon-time"><use xlink:href="#icon-time"></use></svg>
                                    48 Hrs
                                </li>
                                <li class="item tag tag--outline">
                                    Spend 48 Pts
                                </li>
                            </ul>
                        </div>
                    </a>
                    <!-- /UPCOMING SIT (They're Sitting)-->
                </div>

                <hr class="hairline">

                <div class="info-box info-box--cta info-box--primary wrapper -reversed">
                    <div class="info-box__icon info-box__icon--l wrapper__inner">
                        <div class="box-icon box-icon--primary">
                            <svg class="icon-points icon--l"><use xlink:href="#icon-points"></use></svg>
                        </div>
                    </div>
                    <div class="wrapper__inner">
                        <div class="info-box__content">
                            <span class="-fontSize-xl -fontWeight-3">Earn points that can be used for FREE babysitting!</span>
                            <p>Offer your time to other families in exchange for points! <a href="#">Learn how it works.</a></p>
                        </div>
                    </div>
                    <div class="wrapper__inner -align-right">
                        <a class="btn btn--reversed" href="/templates/search">Find Families</a>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <!-- /PAGE CONTENT -->

    <?php require_once('../_inc/footer.php'); ?>
