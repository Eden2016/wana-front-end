<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title></title>
<meta name="description" content="">

<script src="https://use.typekit.net/uls6scn.js"></script>
<script>try{Typekit.load({ async: true });}catch(e){}</script>

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
            <ul class="list list--inline list--divided">
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
                <li id="mobileSearchBtn" class="item show--l">
                    <div>
                        <svg class="icon-search"><use xlink:href="#icon-search"></use></svg>
                    </div>
                </li>
            </ul>
        </div>
        <!-- /SITE NAV -->

        <!-- LOGIN OR SIGNUP -->
        <div class="wrapper__inner -align-right">
            <ul class="list list--inline">
                <li class="item margin--s no--margin-tb no--margin-l">
                    <a class="link link--primary" href="#">Log In</a>
                </li>
                <li class="item">
                    <button class="btn btn--reversed btn--block">Sign Up</button>
                </li>
            </ul>
        </div>
        <!-- /LOGIN OR SIGNUP -->

    </header>
