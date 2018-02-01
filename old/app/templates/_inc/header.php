<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title></title>
<meta name="description" content="">

<script src="https://use.typekit.net/uls6scn.js"></script>
<script>try{Typekit.load({ async: false });}catch(e){}</script>

<script src="https://file.myfontastic.com/u2RSH6xQUE5X4Vx2TZdWS/icons.js"></script>

<?php define('ROOT_PATH', '/'); ?>

<!-- build:css css/main.min.css -->
<!-- NOTE: This points to the main CSS output-->
<link href="/assets/css/main.css" rel="stylesheet" type="text/css">
<!-- endbuild -->

</head>

<?php if ($bg){
    echo '<body class="' . $bg . '">';
} else {
    echo '<body>';
} ?>

    <header id="headerMain" class="wrapper -reversed">
        <div class="wrapper__inner">

            <!-- SITE NAV -->
            <ul id="leftNav" class="list list--inline list--divided">
                <li class="item">
                    <a href="/">
                        <img id="logoMain" src="/assets/img/logo-wana-reverse.svg" alt="Wana Family Network">
                    </a>
                </li>
                <li class="item hide--l -border-none">
                    <div class="input input--text input--search input--has-icon no--margin-b">
                        <input type="search" id="mainSearch" class="input__field" placeholder="Find families in Los Angeles...">
                        <label for="mainSearch" class="input__icon">
                            <svg class="icon-search icon--xs"><use xlink:href="#icon-search"></use></svg>
                        </label>
                    </div>
                </li>
                <li id="mobileSearchBtn" class="item show--l hide--m">
                    <svg class="icon-search"><use xlink:href="#icon-search"></use></svg>
                </li>
                <!-- <li id="mobileMenuBtn" class="item show--m">
                    <svg class="icon-more"><use xlink:href="#icon-more"></use></svg>
                </li> -->
            </ul>
        </div>
        <!-- /SITE NAV -->

        <!-- LOGIN OR SIGNUP (PRE-LOGIN) -->
        <div class="wrapper__inner -align-right">
            <ul class="list list--inline">
                <li class="item margin--s no--margin-tb no--margin-l">
                    <a class="link link--primary" href="#">Log In</a>
                </li>
                <li class="item">
                    <a class="btn btn--reversed btn--block" href="/templates/sign-up">Sign Up</a>
                </li>
            </ul>
        </div>
        <!-- /LOGIN OR SIGNUP (PRE-LOGIN) -->

        <!-- ACCOUNT NAV (POST-LOGIN) -->
        <div class="wrapper__inner -align-right hide">
            <ul id="rightNav" class="list list--inline list--divided -tight">
                <li class="item hide--m">
                    <ul class="list list--inline">
                        <li class="item">
                            <a class="link link--primary <?php if ($page=='sits'){ echo 'is--active';} ?>" href="/templates/sitting">Sits</a>
                        </li>
                        <li class="item">
                            <a class="link link--primary <?php if ($page=='meetups'){ echo 'is--active';} ?>" href="#">Meetups</a>
                        </li>
                    </ul>
                </li>
                <li class="item">
                    <ul class="list list--inline">
                        <li class="item hide--m">
                            <a class="dropdown dropdown--no-caret" href="javascript:;">
                                <div class="link link--primary link--icon" data-badge="1">
                                    <svg class="icon-inbox-line icon--s"><use xlink:href="#icon-inbox-line"></use></svg>
                                </div>
                                <div class="dropdown__box" data-position="right">
                                    <div class="dropdown__box-inner">
                                        Exchange Center
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="item hide--m">
                            <a class="dropdown dropdown--no-caret" href="javascript:;">
                                <div class="link link--primary link--icon" data-badge="12">
                                    <svg class="icon-notification icon--s"><use xlink:href="#icon-notification"></use></svg>
                                </div>
                                <div class="dropdown__box" data-position="right">
                                    <div class="dropdown__box-inner">
                                        Notifications Dropdown
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="item hide--m">
                            <a class="dropdown dropdown--no-caret" href="javascript:;">
                                <div class="link link--primary link--icon" data-counter="100">
                                    <svg class="icon-points icon--s"><use xlink:href="#icon-points"></use></svg>
                                </div>
                                <div class="dropdown__box" data-position="right">
                                    <div class="dropdown__box-inner">
                                        Points Info
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="item -border-none no--margin">
                    <a class="dropdown" href="/templates/account">
                        <div class="avatar avatar--s" style="background-image:url('/assets/img/placeholder/avatar-michelle.png');"></div>
                        <div class="dropdown__box" data-position="right">
                            <div class="dropdown__box-inner">
                                Account Nav
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <!-- /ACCOUNT NAV (POST-LOGIN) -->

    </header>

    <nav id="mobileNav" class="wrapper show--m">
        <div class="wrapper__inner">
            <div class="flex -align-center">
                <div class="flex__cell">
                    <a class="link link--block" href="/templates/search">
                        <svg class="link__icon icon-search"><use xlink:href="#icon-search"></use></svg>
                    </a>
                    <small class="ts--label">Search</small>
                </div>
                <div class="flex__cell">
                    <a class="link link--block">
                        <svg class="link__icon icon-date"><use xlink:href="#icon-date"></use></svg>
                    </a>
                    <small class="ts--label">Meetups</small>
                </div>
                <div class="flex__cell">
                    <a class="link link--block">
                        <svg class="link__icon icon-sits"><use xlink:href="#icon-sits"></use></svg>
                    </a>
                    <small class="ts--label">Sits</small>
                </div>
                <!-- <div class="flex__cell">
                    <a class="link link--block" data-badge="12">
                        <svg class="link__icon icon-notification"><use xlink:href="#icon-notification"></use></svg>
                    </a>
                    <small class="ts--label">Alerts</small>
                </div> -->
                <div class="flex__cell">
                    <a class="link link--block" data-badge="1">
                        <svg class="link__icon icon-inbox-line"><use xlink:href="#icon-inbox-line"></use></svg>
                    </a>
                    <small class="ts--label">Inbox</small>
                </div>
                <div class="flex__cell">
                    <a class="link link--block">
                        <svg class="link__icon icon-family"><use xlink:href="#icon-family"></use></svg>
                    </a>
                    <small class="ts--label">Family</small>
                </div>
                <!-- <div class="flex__cell">
                    <a class="link link--block" href="/templates/account">
                        <div class="avatar avatar--xs" style="background-image:url('/assets/img/placeholder/avatar-michelle.png');"></div>
                    </a>
                    <small class="ts--label">Account</small>
                </div> -->
            </div>
        </div>
    </nav>
