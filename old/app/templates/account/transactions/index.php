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
                <li class="tab is--active">
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
        <div class="section__head bar bar--l bar--panel">
            <div class="container wrapper">
                <div class="wrapper__inner">
                    <ul class="list list--inline list--padded">
                        <li class="item">
                            <h1 class="-fontSize-l">Transaction History</h1>
                        </li>
                        <li class="item">
                            <div class="toggle toggle--tabs">
                                <label class="toggle__tab">
                                    <input type="radio" name="transactions" checked>
                                    <span>Pending</span>
                                </label>
                                <label class="toggle__tab">
                                    <input type="radio" name="transactions">
                                    <span>Complete</span>
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="wrapper__inner -align-right">
                    <ul class="list list--inline list--padded list--tight">
                        <li class="item">
                            <ul class="list list--inline list--divided">
                                <li class="item">
                                    <svg class="icon-points -color-tertiary"><use xlink:href="#icon-points"></use></svg>
                                    100 Available
                                </li>
                                <li class="item">
                                    24 On Hold
                                </li>
                            </ul>
                        </li>
                        <li class="item">
                            <button class="btn btn--primary">Buy Points</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="page-tab__content">
            <div class="container">
                <table class="table table--cards">
                    <thead>

                        <!--  PENDING  -->
                        <!-- ========= -->

                        <tr>
                            <th class="sort sort--desc">
                                Date
                            </th>
                            <th class="sort">
                                Activity
                            </th>
                            <th class="sort">
                                Charged
                            </th>
                            <th class="sort">
                                Card
                            </th>
                            <th class="sort -align-center" width="104">
                                Points
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        <!-- Single Transaction (Earn - Pending) -->
                        <tr>
                            <td>
                                Oct 24, 2017
                            </td>
                            <td>
                                You're sitting for <strong>Luis & Elba's Family</strong>
                            </td>
                            <td>
                                <span class="-color-black-40">&mdash;</span>
                            </td>
                            <td>
                                <span class="-color-black-40">&mdash;</span>
                            </td>
                            <td class="-align-center">
                                <span class="tag tag--secondary">+ 11</span>
                            </td>
                        </tr>

                        <!--  COMPLETE  -->
                        <!-- ========== -->

                        <!-- Single Transaction (Spend - Pending) -->
                        <tr>
                            <td>
                                Oct 22, 2017
                            </td>
                            <td>
                                <strong>Luis & Elba </strong> are sitting for you
                            </td>
                            <td>
                                <strong class="-color-secondary">Free!</strong>
                            </td>
                            <td>
                                <span class="-color-black-40">&mdash;</span>
                            </td>
                            <td class="-align-center">
                                <span class="tag tag--outline">- 11</span>
                            </td>
                        </tr>

                        <!-- Single Transaction (Earn - Complete) -->
                        <tr>
                            <td>
                                Oct 24, 2017
                            </td>
                            <td>
                                You're sat for <strong>Luis & Elba's Family</strong>
                            </td>
                            <td>
                                <span class="-color-black-40">&mdash;</span>
                            </td>
                            <td>
                                <span class="-color-black-40">&mdash;</span>
                            </td>
                            <td class="-align-center">
                                <span class="tag tag--secondary tag--filled">+ 11</span>
                            </td>
                        </tr>

                        <!-- Single Transaction (Spend - Complete) -->
                        <tr>
                            <td>
                                Oct 22, 2017
                            </td>
                            <td>
                                <strong>Luis & Elba </strong> sat for you
                            </td>
                            <td>
                                <strong class="-color-secondary">Free!</strong>
                            </td>
                            <td>
                                <span class="-color-black-40">&mdash;</span>
                            </td>
                            <td class="-align-center">
                                <span class="tag tag--outline tag--filled">- 11</span>
                            </td>
                        </tr>

                        <!-- Single Transaction (Purchase) -->
                        <tr>
                            <td>
                                Oct 20, 2017
                            </td>
                            <td>
                                You purchased <strong>100 Points</strong>
                            </td>
                            <td>
                                $24.99
                            </td>
                            <td>
                                <span class="item item--cc">
                                    <span class="icon-cc is--visa"></span>
                                    •••• 7890
                                </span>
                            </td>
                            <td class="-align-center">
                                <span class="tag tag--secondary tag--filled">+ 100</span>
                            </td>
                        </tr>

                    </tbody>
                </table>

                <div class="wrapper">
                    <div class="wrapper__inner">
                        <ul class="pagination">
                            <li class="page page--nav page--prev"><svg class="icon-caret-thick icon--xs"><use xlink:href="#icon-caret-thick"></use></svg></li>
                            <li class="page is--active">1</li>
                            <li class="page">2</li>
                            <li class="page">3</li>
                            <li class="page dropdown dropdown--up dropdown--no-caret" data-position="center">
                                ...
                                <div class="dropdown__box">
                                    <ul class="list list--nav">
                                        <li class="item">9</li>
                                        <li class="item">8</li>
                                        <li class="item">7</li>
                                        <li class="item">6</li>
                                        <li class="item">5</li>
                                        <li class="item">4</li>
                                    </ul>
                                </div>
                            </li>
                            <li class="page">10</li>
                            <li class="page page--nav page--next"><svg class="icon-caret-thick icon--xs"><use xlink:href="#icon-caret-thick"></use></svg></li>
                        </ul>
                    </div>
                    <div class="wrapper__inner -align-right">
                        <ul class="list list--inline">
                            <li class="item">
                                Showing
                            </li>
                            <li class="item">
                                <a class="link link--dropdown dropdown dropdown--up" href="javascript:;">
                                    10
                                    <div class="dropdown__box">
                                        <ul class="list list--nav">
                                            <li class="item">100</li>
                                            <li class="item">50</li>
                                            <li class="item">25</li>
                                            <li class="item">10</li>
                                        </ul>
                                    </div>
                                </a>
                            </li>
                            <li class="item">
                                of 67
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /PAGE CONTENT -->

    <?php require_once('../../_inc/footer.php'); ?>
