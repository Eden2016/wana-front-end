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
<body>

    <header id="headerMain" class="wrapper -reversed">
        <div class="wrapper__inner">

            <!-- SITE NAV -->
            <ul id="leftNav" class="list list--inline">
                <li class="item">
                    <img id="logoMain" src="/assets/img/logo-wana-reverse.svg" alt="Wana Family Network">
                </li>
            </ul>
        </div>
        <!-- /SITE NAV -->

        <!-- ACCOUNT NAV (POST-LOGIN) -->
        <div class="wrapper__inner -align-right">
            <a href="/" class="btn btn--outline btn--reversed btn--s">Cancel</a>
        </div>
        <!-- /ACCOUNT NAV (POST-LOGIN) -->
    </header>

    <section class="content__section -bg-light-gray">
        <div class="section__head banner banner--empty -align-center padding--xl -reversed">
            <h1 class="heading -fontSize-xx margin--s no--margin-t no--margin-lr">Complete Your Registration</h1>
            <h2 class="-fontSize-l ">Tell us a little about you and your family to complete account creation.</h2>
        </div>
        <div class="container container--m">

            <div class="accordion accordion--stepped">

                <!--
                    NOTE: Each accordion 'item' has 3 states: 'Default' which has not been filled out yet, 'is--active' which is currently expanded, and 'is--complete' which is an item that has already been filled out. Items can have both the active and complete classes. Only one item should have the active class at a time.
                -->

                <!-- STEP 1 -->
                <div class="item">
                    <div class="item__number">
                        <span>1</span>
                    </div>
                    <div class="item__content">
                        <!--
                            NOTE: The 'Make Changes' link should only be displayed if the accordion item is not active and has previously been filled out.
                        -->
                        <h3 class="item__title">Your Information <a class="item__title-link" href="#">Make Changes</a></h3>

                        <div class="item__content--inner">
                            <div class="card card--shadow padding--m">
                                <label class="avatar avatar--l avatar--edit margin--m no--margin-t no--margin-lr">
                                    <input type="file">
                                </label>
                                <div class="well no--pad">
                                    <div class="well__row">
                                        <div class="well__section is-halved">
                                            <label class="input input--text">
                                                <span class="label">First Name</span>
                                                <input type="text" class="input__field" value="Luis" placeholder="Your First Name" required>
                                            </label>
                                        </div>
                                        <div class="well__section is-halved">
                                            <label class="input input--text">
                                                <span class="label">Last Name</span>
                                                <input type="text" class="input__field" placeholder="Your Last Name" required>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="well__row">
                                        <div class="well__section is-halved">
                                            <label class="input input--text">
                                                <span class="label">Birth Date</span>
                                                <input type="text" class="input__field" placeholder="MM/DD/YYYY" required>
                                            </label>
                                        </div>
                                        <div class="well__section is-halved">
                                            <label class="input input--text">
                                                <span class="label">Your Role</span>
                                                <input type="text" class="input__field" placeholder="eg. 'Mother'" required>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="well__row">
                                        <div class="well__section is-halved">
                                            <label class="input input--text">
                                                <span class="label">Primary Phone Number</span>
                                                <input type="text" class="input__field" placeholder="(123) 555-1234" required>
                                            </label>
                                        </div>
                                        <div class="well__section is-halved">
                                            <label class="input input--text">
                                                <span class="label">Secondary Phone Number</span>
                                                <input type="text" class="input__field" placeholder="(123) 555-1234" required>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="well__row">
                                        <div class="well__section">
                                            <label class="input input--text">
                                                <span class="label">Favorite Babysitting Activities</span>
                                                <input type="text" class="input__field" placeholder="Type an activity and press 'Enter'" required>
                                                <small class="input__helper">e.g. Hide & Go Seek, Board Games, Reading, etc...</small>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="well__row">
                                        <div class="well__section">
                                            <label class="input input--text">
                                                <span class="label">Parenting Style(s)</span>
                                                <input type="text" class="input__field" placeholder="Add as many as you like! Type a style and press 'Enter'" required>
                                                <small class="input__helper">e.g. Caring, Nurturing, Firm, etc...</small>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="well no--pad -border-none">
                                <div class="wrapper">
                                    <div class="wrapper__inner -align-right">
                                        <button class="btn btn--primary">Continue</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--
                            NOTE: The summary is displayed when the accordion item is collapsed.
                        -->
                        <div class="item__summary well no--pad">
                            <div class="well__row">
                                <div class="well__section is-halved">
                                    <div class="tg tg--s">
                                        <span class="tg__sub">First Name</span>
                                        <span class="tg__title">Luis</span>
                                    </div>
                                </div>
                                <div class="well__section is-halved">
                                    <div class="tg tg--s">
                                        <span class="tg__sub">Last Name</span>
                                        <span class="tg__title">Hernandez</span>
                                    </div>
                                </div>
                            </div>
                            <div class="well__row">
                                <div class="well__section is-halved">
                                    <div class="tg tg--s">
                                        <span class="tg__sub">DOB</span>
                                        <span class="tg__title">June 10, 1981</span>
                                    </div>
                                </div>
                                <div class="well__section is-halved">
                                    <div class="tg tg--s">
                                        <span class="tg__sub">Role</span>
                                        <span class="tg__title">Father</span>
                                    </div>
                                </div>
                            </div>
                            <div class="well__row">
                                <div class="well__section is-halved">
                                    <div class="tg tg--s">
                                        <span class="tg__sub">Primary Phone</span>
                                        <span class="tg__title">(123) 555-7895</span>
                                    </div>
                                </div>
                                <div class="well__section is-halved">
                                    <div class="tg tg--s">
                                        <span class="tg__sub">Secondary Phone</span>
                                        <span class="tg__title">(123) 555-1235</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <!-- /STEP 1 -->

                <!-- STEP 2 -->
                <div class="item is--active">
                    <div class="item__number">
                        <span>2</span>
                    </div>
                    <div class="item__content">
                        <h3 class="item__title">Your Family <a class="item__title-link" href="#">Make Changes</a></h3>
                        <div class="item__content--inner">
                            <p>Add members of your family! You must add at least 1 child to join.</p>
                            <div class="row row--tight-gutter">

                                <!-- PERSON -->
                                <div class="entity-card col col--1-of-2">
                                    <div class="card">
                                        <div class="entity__image avatar"></div>
                                        <div class="group__info tg tg--s">
                                            <span class="tg__title truncate">Elba</span>
                                            <span class="tg__sub">Mother</span>
                                        </div>
                                        <div class="entity__ops dropdown dropdown--no-caret dropdown--over">
                                            <svg class="icon-more icon--xs"><use xlink:href="#icon-more"></use></svg>
                                            <div class="dropdown__box">
                                                Edit<br>
                                                Delete
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- /PERSON -->

                                <!-- PERSON -->
                                <div class="entity-card col col--1-of-2">
                                    <div class="card">
                                        <div class="entity__image avatar"></div>
                                        <div class="group__info tg tg--s">
                                            <span class="tg__title truncate">Isabella</span>
                                            <span class="tg__sub">6 Year-Old Girl</span>
                                        </div>
                                        <div class="entity__ops dropdown dropdown--no-caret dropdown--over">
                                            <svg class="icon-more icon--xs"><use xlink:href="#icon-more"></use></svg>
                                            <div class="dropdown__box">
                                                Edit<br>
                                                Delete
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- /PERSON -->
                            </div>

                            <!-- ADD NEW MEMBER -->
                            <!--
                                NOTE: Drag & drop elements should get a class of 'is--hovered' when dragging a file over the area.
                            -->
                            <div class="dragdrop well well--dashed -align-center">
                                <img src="/assets/img/cloud-upload.png" alt="" width="52">
                                <div class="tg tg--m margin--s no--margin-lr -width-100">
                                    <span class="tg__title">Add a New Family Member</span>
                                    <span class="tg__sub">Drag & drop their photo to this box, or click below to get started.</span>
                                </div>
                                <button class="btn btn--primary">Add Family Member</button>
                            </div>
                            <!-- /ADD NEW MEMBER -->

                            <div class="well no--pad -border-none">
                                <div class="wrapper">
                                    <div class="wrapper__inner -align-right">
                                        <button class="btn btn--primary">Continue</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /STEP 2 -->

                <!-- STEP 3 -->
                <div class="item">
                    <div class="item__number">
                        <span>3</span>
                    </div>
                    <div class="item__content">
                        <h3 class="item__title">Find Friends <a class="item__title-link" href="#">Make Changes</a></h3>
                        <div class="item__content--inner">
                            <p>You can find friends already on Wana by connecting your Facebook account!</p>
                            <button class="btn btn--l btn--facebook btn--block icon--left">
                                <svg class="icon-social-facebook"><use xlink:href="#icon-social-facebook"></use></svg>
                                Connect with Facebook
                            </button>
                            <button class="btn btn--outline btn--tertiary btn--s btn--block">No thanks, I'll do this later.</button>
                        </div>
                    </div>
                </div>
                <!-- /STEP 3 -->

                <!-- STEP 4 -->
                <div class="item">
                    <div class="item__number">
                        <span>4</span>
                    </div>
                    <div class="item__content">
                        <h3 class="item__title -color-primary -fontWeight-4">Start Wana-ing!</h3>
                        <div class="item__content--inner">

                        </div>
                    </div>
                </div>
                <!-- /STEP 4 -->

            </div>

        </div>
    </section>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="/assets/js/main.js"></script>

</body>
</html>
