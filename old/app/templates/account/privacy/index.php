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
                <li class="tab">
                    <a href="/templates/account/billing">
                        Billing
                    </a>
                </li>
                <li class="tab">
                    <a href="/templates/account/email-prefs">
                        Email Preferences
                    </a>
                </li>
                <li class="tab is--active">
                    <a href="/templates/account/privacy">
                        Privacy
                    </a>
                </li>
            </ul>
        </div>
    </div>

    <!-- PAGE CONTENT -->
    <div class="content__section">
        <div class="section__head bar bar--l bar--panel">
            <div class="container wrapper">
                <div class="wrapper__inner">
                    <h1 class="-fontSize-l">Privacy Settings</h1>
                </div>
                <div class="wrapper__inner -align-right">
                    <!-- Right Content -->
                </div>
            </div>
        </div>
        <div class="page-tab__content">
            <div class="container">
                <!-- Content goes here -->
            </div>
        </div>
    </div>
    <!-- /PAGE CONTENT -->

    <?php require_once('../../_inc/footer.php'); ?>
