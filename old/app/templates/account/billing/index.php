<?php $bg = '-bg-light-gray'; ?>
<?php require_once('../../_inc/header.php'); ?>

<section class="app__body">

    <div class="bar bar--tabs">
        <div class="container">
            <ul class="tabs__list">
                <li class="tab">
                    <a href="/templates/account">
                        Account
                    </a>
                </li>
                <li class="tab">
                    <a href="/templates/account/transactions">
                        Transactions
                    </a>
                </li>
                <li class="tab is--active">
                    <a href="/templates/account/billing">
                        Billing
                    </a>
                </li>
                <li class="tab">
                    <a href="/templates/account/email-prefs">
                        Email Preferences
                    </a>
                </li>
                <li class="tab">
                    <a href="/templates/account/privacy">
                        Privacy
                    </a>
                </li>
            </ul>
        </div>
    </div>

    <!-- PAGE CONTENT -->
    <div class="content__section">
        <div class="section__head bar bar--l bar--panel -border-none">
            <div class="container wrapper">
                <div class="wrapper__inner">
                    <h1 class="-fontSize-l">Payment Methods</h1>
                </div>
                <div class="wrapper__inner -align-right">
                    <button class="btn btn--primary">Add New Card</button>
                </div>
            </div>
        </div>
        <div class="page-tab__content">
            <div class="container container--s">
                <div class="card-table card-table--list card-table--list-tight">

                    <!-- Card -->
                    <div class="card wrapper">
                        <div class="wrapper__inner">
                            <div class="item item--cc">
                                <span class="icon-cc is--visa"></span>
                                Visa ending in 7890
                            </div>
                        </div>
                        <div class="wrapper__inner -align-right">
                            02/23
                        </div>
                    </div>

                    <!-- Card -->
                    <div class="card wrapper">
                        <div class="wrapper__inner">
                            <div class="item item--cc">
                                <span class="icon-cc is--mastercard"></span>
                                Mastercard ending in 7890
                            </div>
                        </div>
                        <div class="wrapper__inner -align-right">
                            02/23
                        </div>
                    </div>

                    <!-- Card -->
                    <div class="card wrapper">
                        <div class="wrapper__inner">
                            <div class="item item--cc">
                                <span class="icon-cc is--amex"></span>
                                Amex ending in 7890
                            </div>
                        </div>
                        <div class="wrapper__inner -align-right">
                            02/23
                        </div>
                    </div>

                    <!-- Card -->
                    <div class="card wrapper">
                        <div class="wrapper__inner">
                            <div class="item item--cc">
                                <span class="icon-cc is--discover"></span>
                                Discover ending in 7890
                            </div>
                        </div>
                        <div class="wrapper__inner -align-right -color-warning">
                            02/23
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <!-- /PAGE CONTENT -->

    <?php require_once('../../_inc/footer.php'); ?>
