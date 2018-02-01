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
<body class="split split--40-60 wrapper -bg-light-gray">

    <div id="fb-root"></div>
    <script>(function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10&appId=1422151367906048";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));</script>

    <aside class="sidebar sidebar--banner -reversed -align-center" style="background-image:url('/assets/img/banner-signup-2.jpg');">
        <div class="wrapper">
            <div class="sidebar__content wrapper__inner">
                <a class="logo logo--l" href="/">
                    <img src="/assets/img/logo-wana-reverse.svg" alt="Wana Family Network">
                </a>
                <hr>
                <h1 class="margin--s no--margin-t no--margin-lr">Join Us Today!</h1>
                <h2 class="-fontSize-l">Find babysitters you know and trust, for FREE!</h2>
            </div>
        </div>
    </aside>

    <section class="content wrapper">
        <div class="wrapper__inner">
            <div class="container container--s">

                <button class="btn btn--l btn--facebook btn--block icon--left">
                    <svg class="icon-social-facebook"><use xlink:href="#icon-social-facebook"></use></svg>
                    Continue with Facebook
                </button>

                <hr class="hairline">

                <div class="card card--accordion">
                    <div class="card__head wrapper">
                        <div class="wrapper__inner">
                            <span class="ts--label">Sign Up With Email</span>
                        </div>
                    </div>
                    <div class="card__body card__body--row">
                        <label class="input input--text">
                            <span class="label">First Name</span>
                            <input type="text" class="input__field" placeholder="First Name" required>
                        </label>
                        <label class="input input--text">
                            <span class="label">Email Address</span>
                            <input type="email" class="input__field" placeholder="you@company.com" required>
                        </label>
                        <label class="input input--text">
                            <span class="label">Create Password</span>
                            <input type="password" class="input__field" placeholder="Type password" required>
                        </label>
                        <label class="input input--text">
                            <input type="password" class="input__field" placeholder="Type password again" required>
                            <small>Passwords must be at least 8 characters and are case sensitive.</small>
                        </label>
                    </div>
                    <div class="card__body card__body--row">
                        <button class="btn btn--secondary btn--block">Continue</button>
                    </div>
                </div>

                <div class="wrapper -align-right">
                    <div class="wrapper__inner">
                        Already have an account? <a class="link link--primary" href="#">Log In</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="/assets/js/main.js"></script>

</body>
</html>
