<?php $bg = '-bg-light-gray'; ?>

<?php require_once('../_inc/header.php'); ?>

<!-- BANNER -->
<section class="banner banner--l -align-center -reversed curve curve--b" style="background-image:url('/assets/img/placeholder/banner-search.jpg');">
    <div class="container wrapper">
        <div class="wrapper__inner">
            <h1 class="heading heading--display">Find Families in Your Neighborhood</h1>
            <h2 class="-fontSize-l">Use points to book a sitter for your kids, or a be a sitter and earn points for FREE!</h2>
            <div class="margin--xl no--margin-lr no--margin-b">
                <form action="/templates/search/results.php" method="get">
                    <div class="row row--no-gutter -align-left">
                        <div class="col col--5-of-12 col--push-1-of-12 col--m-2-of-2">
                            <div class="input input--text input--has-icon">
                                <input type="text" class="input__field" placeholder="Search by name, neighborhood, group, etc...">
                                <label class="input__icon">
                                    <svg class="icon-search"><use xlink:href="#icon-search"></use></svg>
                                </label>
                            </div>
                        </div>
                        <div class="col col--3-of-12 col--m-2-of-2">
                            <div class="input input--text input--has-icon">
                                <input type="text" class="input__field" placeholder="City or Zip Code" value="Los Angeles, CA">
                                <label class="input__icon">
                                    <svg class="icon-location"><use xlink:href="#icon-location"></use></svg>
                                </label>
                            </div>
                        </div>
                        <div class="col col--2-of-12 col--m-2-of-2">
                            <div class="input">
                                <button type="submit" class="btn btn--primary btn--block">Search</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
<!-- /BANNER -->

<!-- HOW IT WORKS -->
<section class="section how-it-works -bg-white">
    <div class="container center center--h">
        <h2 class="margin--xxxl no--margin-t no--margin-lr -fontWeight-3">How it works</h2>
        <div class="row">
            <div class="col col--3-of-12 col--m-2-of-4">
                <img src="/assets/img/graphic-1.svg" alt="">
                <h4>Sign up for free</h4>
                <p class="p-small">Quickly sign up with your email or Facebook account and get connected with your real-world network automatically.</p>
            </div>
            <div class="col col--3-of-12 col--m-2-of-4">
                <img src="/assets/img/graphic-2.svg" alt="">
                <h4>Exchange free babysitting</h4>
                <p class="p-small">Post your request on Wana when you need a sitter, and receive offers from your neighbors.</p>
            </div>
            <div class="col col--3-of-12 col--m-2-of-4">
                <img src="/assets/img/graphic-3.svg" alt="">
                <h4>Gain points for each babysit</h4>
                <p class="p-small">Earn Wana points by babysitting for others, and use your points for your own babysitting needs.</p>
            </div>
            <div class="col col--3-of-12 col--m-2-of-4">
                <img src="/assets/img/graphic-4.svg" alt="">
                <h4>Build your network</h4>
                <p class="p-small">Grow the community and share free babysitting with your trusted circle of friends, attend events to meet more friends.</p>
            </div>
        </div>
    </div>
</section>
<!-- /HOW IT WORKS -->

<!-- DIVIDER -->
<div class="-bg-white">
    <div class="divider-slash center center--h"></div>
</div>
<!-- /DIVIDER -->

<!-- CTA -->
<section class="section -bg-white">
    <div class="row">
        <div class="col col--6-of-12 col--am">
            <div class="padding--xxl no--pad-tb no--pad-l">
                 <img src="/assets/img/banner.png" alt="" class="img-fluid img-flush--l">
            </div>
        </div>
        <div class="col col--6-of-12 col--am">
            <div class="title-group no--margin-b" style="max-width: 625px;">
                <h2 class="-fontWeight-3">Your trusted network of family babysitters in your neighborhood.</h2>
                <p>Network with other families to exchange free babysitting services.</p>
                <a href="#" class="btn btn--primary">Get started for free</a>
            </div>
        </div>
    </div>
</section>
<!-- /CTA -->

<!-- TESTIMONIAL -->
<section class="section curve curve--t curve--b -bg-lightest-gray"> 
    <div class="container">
        <div class="title-group title-group--center">
            <h2 class="-fontWeight-3">What some of our babysitters are saying</h2>
            <p>Join our rapidly growing community of sitters.</p>
        </div>
        <div class="row">
            <div class="testimonial col col--3-of-9">
                <div class="testimonial__card">
                    <div class="testimonial__bubble">
                        <p>“As a mother, I wanted to make sure Wana had a network of families I trusted. The experience has been amazing, I love developing a reliable network of sitters I could trust. I can now go on movie dates again with my hubby!"</p>
                    </div>
                    <div class="testimonial__user wrapper">
                        <div class="user-profile wrapper__inner">
                            <img src="/assets/img/user-avatar-1.png" alt="Michelle">
                        </div>
                        <div class="user-info wrapper__inner">
                            <p>Michelle Hammond <br>
                            <span class="user-title">Mother</span> • <span class="date-joined">Joined 20 days ago</span>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <div class="testimonial col col--3-of-9">
                <div class="testimonial__card margin--xxxl no--margin-t no--margin-lr">
                    <div class="testimonial__bubble">
                        <p>“I wanted to make sure Wana had a network of families I trusted. The experience has been amazing, I love developing a reliable network of sitters I could trust. I can now go on movie dates again with my wifey!"</p>
                    </div>
                    <div class="testimonial__user wrapper">
                        <div class="user-profile wrapper__inner">
                            <img src="/assets/img/user-avatar-2.png" alt="Michelle">
                        </div>
                        <div class="user-info wrapper__inner">
                            <p>Luis Hernandez <br>
                            <span class="user-title">Father • </span><span class="date-joined">Joined 6 months ago</span>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <div class="testimonial col col--3-of-9">
                <div class="testimonial__card">
                    <div class="testimonial__bubble">
                        <p>“As a mother, I wanted to make sure Wana had a network of families I trusted. The experience has been amazing, I love developing a reliable network of sitters I could trust. I can now go on movie dates again with my hubby!</p>
                    </div>
                    <div class="testimonial__user wrapper">
                        <div class="user-profile wrapper__inner">
                            <img src="/assets/img/user-avatar-1.png" alt="Michelle">
                        </div>
                        <div class="user-info wrapper__inner">
                            <p>Michelle Hammond <br>
                            <span class="user-title">Mother</span> • <span class="date-joined">Joined 20 days ago</span>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- /TESTIMONIAL -->

<!-- LOCATIONS -->
<section class="section featured-in -bg-white">
    <div class="container">
        <p class="center center--h">We’re proud to be featured in</p>
        <ul class="list list--inline">
            <li class="item"><img src="/assets/img/company-logo-1.jpg" alt="CNBC"></li>
            <li class="item"><img src="/assets/img/company-logo-2.jpg" alt="FamilyFun"></li>
            <li class="item"><img src="/assets/img/company-logo-3.jpg" alt="Good Housekeeping"></li>
            <li class="item"><img src="/assets/img/company-logo-4.jpg" alt="Parents"></li>
            <li class="item"><img src="/assets/img/company-logo-5.jpg" alt="Woman's Day"></li>
        </ul>
    </div>
    <div class="-bg-white">
        <div class="divider-slash center center--h"></div>
    </div>
    <div class="section no--pad-b -bg-white">
        <div class="row">
            <div class="col col--6-of-12 col--am">
                <div class="title-group no--margin-b -float-right" style="max-width: 625px; padding-left: 24px;">
                    <h2 class="-fontWeight-3">Our Neighborhoods</h2>
                    <p style="line-height: 48px;">We’re currently serving in these Los Angeles areas: <br>
                       • South Bay <br>
                       • Westside
                    </p>
                </div>
            </div>
            <div class="col col--6-of-12 col--am">
                <img src="/assets/img/locations-map.png" alt="" class="img-fluid img-flush--r">
            </div>
        </div>
    </div>
</section>
<!-- /LOCATIONS -->

<!-- NEWS -->
<section class="section curve curve--t curve--b -bg-lightest-gray">
    <div class="container">
        <div class="title-group title-group--center no--margin-b">
            <h2 class="-fontWeight-3">Latest news</h2>
        </div>
        <div class="post-container">
            <div class="post-item">
                <a href="#" class="post card">
                    <div class="post__image">
                        <img src="/assets/img/post-image-1.png" alt="">
                    </div>
                    <div class="post__content">
                        <span class="post-cat -color-primary">Trends &amp; Lifestyle</span>
                        <h4>How Much Does it Cost to Pay a Babysitter in 2017?</h4>
                        <p>August 05, 2017</p>
                    </div>
                </a>
            </div>
            <div class="post-item">
                <a href="#" class="post card">
                    <div class="post__image">
                        <img src="/assets/img/post-image-2.png" alt="">
                    </div>
                    <div class="post__content">
                        <span class="post-cat -color-secondary">Success</span>
                        <h4>The 10 Best Apps for Busy Moms</h4>
                        <p>July 29, 2017</p>
                    </div>
                </a>
            </div>
           <div class="post-item">
                <a href="#" class="post card">
                    <div class="post__image">
                        <img src="/assets/img/post-image-3.png" alt="">
                    </div>
                    <div class="post__content">
                        <span class="post-cat -color-tertiary">The Strategist</span>
                        <h4>10 Ways to Find a Babysitter You trust</h4>
                        <p>July 27, 2017</p>
                    </div>
                </a>
            </div>
        </div>
        <div class="padding--xl no--pad-lr center center--h">
            <a href="#" class="btn btn--outline btn--primary">View all</a>
        </div>
        <!-- NEWSLETTER CTA -->
        <div class="cta -reversed">
            <div class="cta__container">
                <div class="row">
                    <div class="col col--4-of-9 col--am">
                        <h3 class="-fontWeight-3">Stay updated with Wana news</h3>
                        <p>A simple, monthly newsletter to keep up with Wana.</p>
                    </div>
                    <div class="col col--5-of-9 col--am">
                        <form action="" class="wrapper">
                            <div class="input input--text wrapper__inner padding--xs no--pad-tb no--pad-l">
                                <input type="email" class="input__field" placeholder="Enter your email address">
                            </div>
                            <div class="input wrapper__inner">
                                <button type="submit" class="btn btn--reversed btn--outline btn--block">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- /NEWSLETTER CTA -->
    </div>
</section>
<!-- /NEWS -->

<!-- SIGN UP CTA -->
<section class="section signup-cta -bg-white">
    <div class="container">
        <img src="/assets/img/family.png" alt="">
        <div class="-bg-white">
            <div class="divider-slash center center--h"></div>
        </div>
        <div class="title-group title-group--center no--margin-b no--pad-b">
            <h2 class="-fontWeight-3">Sign up for Wana today!</h2>
            <p>Join us today and start exchanging free babysitting with your trusted circle of friends.</p>
            <a href="#" class="btn btn--l btn--primary">Get Started for Free</a>
        </div>
    </div>
</section>
<!-- /SIGN UP CTA -->

<?php require_once('../_inc/footer.php'); ?>