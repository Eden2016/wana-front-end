<?php $bg = '-bg-light-gray'; ?>
<?php require_once('../_inc/header.php'); ?>

<section class="app__body">

    <div class="bar bar--tabs">
        <div class="container">
            <ul class="tabs__list">
                <li class="tab is--active">
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
                    <h1 class="-fontSize-l">Account Settings</h1>
                </div>
                <div class="wrapper__inner -align-right">
                    <a class="btn btn--primary btn--outline" href="#">My Family</a>
                </div>
            </div>
        </div>
        <div class="section__content">
            <div class="container container--s">
                <div class="-align-center" style="position:relative; z-index:1;">
                    <label class="avatar avatar--xl avatar--edit" style="background-image:url('/assets/img/placeholder/avatar-michelle.png');">
                        <input type="file">
                    </label>
                </div>
                <div class="card card--shadow" style="margin-top:-60px; padding-top:60px;">
                    <div class="card__body card__body--row">
                        <label class="input input--text">
                            <span class="label">Email Address</span>
                            <input type="email" class="input__field" value="michelle.hammond@gmail.com" placeholder="you@youremail.com" required>
                        </label>
                    </div>
                    <div class="card__body card__body--row">
                        <label class="input input--text">
                            <span class="label">Change Password</span>
                            <input type="password" class="input__field" placeholder="Current Password">
                        </label>
                        <label class="input input--text">
                            <input type="password" class="input__field" placeholder="New Password">
                            <small>Passwords must be at least 8 characters and are case sensitive.</small>
                        </label>
                    </div>
                    <div class="card__body card__body--row">
                        <label class="input input--button">
                            <span class="label">Connect with Facebook</span>
                            <button class="btn btn--facebook btn--block">Continue with Facebook</button>
                            <small>Connect your Facebook account to easily find your friends on Wana!</small>
                        </label>
                    </div>
                </div>
                <div class="well -border-none no--pad wrapper margin--m no--margin-b no--margin-lr">
                    <div class="wrapper__inner -align-right">
                        <ul class="list list--inline">
                            <li class="item">
                                <button class="btn btn--link btn--s">Discard</button>
                            </li>
                            <li class="item">
                                <button class="btn btn--primary btn--s">Save Changes</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /PAGE CONTENT -->

    <?php require_once('../_inc/footer.php'); ?>
