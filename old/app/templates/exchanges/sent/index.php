<?php $bg = '-bg-light-gray'; ?>
<?php require_once('../../_inc/header.php'); ?>

<section class="app__body">

    <div class="bar bar--tabs">
        <div class="container">
            <ul class="tabs__list">
                <li class="tab" data-badge="3">
                    <a href="/templates/exchanges/received">
                        Received
                    </a>
                </li>
                <li class="tab is--active" data-badge="6">
                    <a href="/templates/exchanges/sent">
                        Sent
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
                    <h1 class="-fontSize-l">Sent Offers & Requests</h1>
                </div>
                <div class="wrapper__inner -align-right">
                    <!-- Content -->
                </div>
            </div>
        </div>
        <div class="section__content">
            <div class="container">
                <!-- Content -->
            </div>
        </div>
    </div>
    <!-- /PAGE CONTENT -->

    <?php require_once('../../_inc/footer.php'); ?>
