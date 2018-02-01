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
                <li class="tab is--active">
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
                    <h1 class="-fontSize-l">Email Preferences</h1>
                </div>
                <div class="wrapper__inner -align-right">
                    <ul class="list list--inline">
                        <li class="item margin--xs no--margin-tb no--margin-l">
                            Notify me for all activity
                        </li>
                        <li class="item">
                            <div class="input input--toggle input--toggle-all">
                                <input id="optionAll" type="checkbox" data-target="#emailNotificationSettings">
                                <label for="optionAll"></label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="page-tab__content">
            <div class="container container--s">
                <table id="emailNotificationSettings" class="table table--cards toggle__group" data-target="#optionAll">
                    <thead>
                        <tr>
                            <th>
                                Email Me When:
                            </th>
                            <th class="-align-right">
                                Off/On
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>
                                Someone sends me a message
                            </td>
                            <td class="-align-right">
                                <div class="input input--toggle">
                                    <input id="notification1" type="checkbox">
                                    <label for="notification1"></label>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                Someone requests babysitting from me
                            </td>
                            <td class="-align-right">
                                <div class="input input--toggle">
                                    <input id="notification2" type="checkbox">
                                    <label for="notification2"></label>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                Someone offers babysitting to me
                            </td>
                            <td class="-align-right">
                                <div class="input input--toggle">
                                    <input id="notification3" type="checkbox">
                                    <label for="notification3"></label>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                Someone finishes babysitting for me
                            </td>
                            <td class="-align-right">
                                <div class="input input--toggle">
                                    <input id="notification4" type="checkbox">
                                    <label for="notification4"></label>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                Someone makes changes to a sit
                            </td>
                            <td class="-align-right">
                                <div class="input input--toggle">
                                    <input id="notification5" type="checkbox">
                                    <label for="notification5"></label>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                One of my sits is complete
                            </td>
                            <td class="-align-right">
                                <div class="input input--toggle">
                                    <input id="notification6" type="checkbox">
                                    <label for="notification6"></label>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                I have a new connection from Facebook
                            </td>
                            <td class="-align-right">
                                <div class="input input--toggle">
                                    <input id="notification7" type="checkbox">
                                    <label for="notification7"></label>
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <!-- /PAGE CONTENT -->

    <?php require_once('../../_inc/footer.php'); ?>
