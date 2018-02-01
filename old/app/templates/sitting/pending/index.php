<?php $bg = '-bg-light-gray'; ?>
<?php $page = 'sits'; ?>
<?php require_once('../../_inc/header.php'); ?>

<section class="app__body">

    <div class="bar bar--tabs">
        <div class="container">
            <ul class="tabs__list">
                <li class="tab" data-badge="2">
                    <a href="/templates/sitting">
                        Upcoming
                    </a>
                </li>
                <li class="tab is--active" data-badge="3">
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
                    <h1 class="-fontSize-l">Completed Sits</h1>
                </div>
                <div class="wrapper__inner -align-right">
                    <ul class="list list--inline list--padded">
                        <li class="item">
                            Pending: <strong>3</strong>
                        </li>
                        <li class="item">|</li>
                        <li class="item">
                            Complete: <strong>1</strong>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="container">

            <div class="card-table card-table--list">

                <div class="card-table__head wrapper">
                    <div class="wrapper__inner">
                        <span class="ts--label">Pending</span>
                    </div>
                    <div class="wrapper__inner -align-right">
                        <span class="ts--label">Time Until Auto-Complete</span>
                    </div>
                </div>

                <!-- PENDING (Awaiting Approval) -->
                <a class="sit card wrapper" href="#">
                    <div class="wrapper__inner">
                        <div class="tg tg--s">
                            <div class="user__group user__group--exchange">
                                <div class="avatar has--badge is--approved"></div>
                                <div class="divider divider--caret-r"></div>
                                <div class="avatar" style="background-image:url('/assets/img/placeholder/avatar-michelle.png');"></div>
                            </div>
                            <div class="tg__cell">
                                <span class="tg__title">
                                    <strong>Melissa & Zach</strong> sat for your family
                                </span>
                                <span class="tg__sub -emphasized">Melissa approved 3 hours ago. Waiting for your approval.</span>
                            </div>
                        </div>
                    </div>
                    <div class="wrapper__inner -align-right -fontWeight-3 -fontSize-xs">
                        15 Minutes
                    </div>
                </a>
                <!-- /PENDING (Awaiting Approval) -->

                <!-- PENDING (Awaiting Approval) -->
                <a class="sit card wrapper" href="#">
                    <div class="wrapper__inner">
                        <div class="tg tg--s">
                            <div class="user__group user__group--exchange">
                                <div class="avatar"></div>
                                <div class="divider divider--caret-r"></div>
                                <div class="avatar has--badge is--approved" style="background-image:url('/assets/img/placeholder/avatar-michelle.png');"></div>
                            </div>
                            <div class="tg__cell">
                                <span class="tg__title">
                                    <strong>Melissa & Zach</strong> sat for your family
                                </span>
                                <span class="tg__sub -emphasized">You approved 3 hours ago. Waiting for Melissa's approval.</span>
                            </div>
                        </div>
                    </div>
                    <div class="wrapper__inner -align-right -fontWeight-3 -fontSize-xs">
                        4 Hours
                    </div>
                </a>
                <!-- /PENDING (Awaiting Approval) -->

                <!-- PENDING (Awaiting Approval) -->
                <a class="sit card wrapper is--alert" href="#">
                    <div class="wrapper__inner">
                        <div class="tg tg--s">
                            <div class="user__group user__group--exchange">
                                <div class="avatar has--badge is--alert"></div>
                                <div class="divider divider--caret-r"></div>
                                <div class="avatar" style="background-image:url('/assets/img/placeholder/avatar-michelle.png');"></div>
                            </div>
                            <div class="tg__cell">
                                <span class="tg__title">
                                    <strong>Luis & Elba</strong> sat for your family
                                </span>
                                <span class="tg__sub -emphasized">Luis made changes to this sit. Waiting for your approval.</span>
                            </div>
                        </div>
                    </div>
                    <div class="wrapper__inner -align-right -fontWeight-3 -fontSize-xs -color-warning">
                        Paused for approval
                    </div>
                </a>
                <!-- /PENDING (Awaiting Approval) -->
            </div>

        </div>
    </div>
    <!-- /PAGE CONTENT -->

    <!-- PAGE CONTENT -->
    <div class="content__section">
        <div class="container">

            <div class="card-table">

                <div class="card-table__head wrapper">
                    <div class="wrapper__inner">
                        <span class="ts--label">Complete</span>
                    </div>
                </div>

                <!-- COMPLETE -->
                <a class="sit card card--table-row wrapper" href="#">
                    <div class="wrapper__inner">
                        <div class="tg tg--s">
                            <div class="avatar avatar--square is--complete tg__cell"></div>
                            <div class="tg__cell">
                                <span class="tg__title">
                                    <strong>Melissa & Zach</strong> sat for your family
                                </span>
                                <span class="tg__sub">Completed September 14, 2017</span>
                            </div>
                        </div>
                    </div>
                    <div class="wrapper__inner -align-right -fontSize-xs">
                        <span class="tag tag--secondary">7 Pts</span>
                        <small>Received from Melissa</small>
                    </div>
                </a>
                <!-- /COMPLETE -->

            </div>

        </div>
    </div>
    <!-- /PAGE CONTENT -->

    <?php require_once('../../_inc/footer.php'); ?>
