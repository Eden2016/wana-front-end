<?php $bg = '-bg-light-gray'; ?>
<?php require_once('../_inc/header.php'); ?>

<section class="app__body">

    <!-- BANNER -->
    <div class="banner banner--l -align-center -reversed" style="background-image:url('/assets/img/placeholder/banner-search.jpg');">
        <div class="container wrapper">
            <div class="wrapper__inner">
                <h1 class="heading heading--display">Find Families in Your Neighborhood</h1>
                <h2 class="-fontSize-l">Use points to book a sitter for your kids, or a be a sitter and earn points for FREE!</h2>
                <div class="margin--xl no--margin-lr no--margin-b">
                    <form action="/templates/search/results.php" method="get">
                        <div class="row row--tight-gutter -align-left">
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
                                    <button type="submit" class="btn btn--primary btn--block btn--l">Search</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- /BANNER -->

    <div class="container">
        <h3 class="section-title">Families You May Know</h2>
            <div class="card__list">

                <!-- Single Family Card -->
                <a class="fam card is--connected" href="/templates/profile">
                    <div class="card__controls wrapper -reversed">
                        <div class="wrapper__inner">
                            <ul class="tags__list">
                                <li class="tag">
                                    Experienced Sitter
                                </li>
                            </ul>
                        </div>
                        <div class="wrapper__inner -align-right">
                            <button class="btn btn--icon btn--toggle btn--fav">
                                <svg class="icon-heart -off"><use xlink:href="#icon-heart"></use></svg>
                                <svg class="icon-heart-filled -on"><use xlink:href="#icon-heart-filled"></use></svg>
                            </button>
                        </div>
                    </div>
                    <div class="fam__card-image card__image go ar ar--16-9" style="background-image:url('/assets/img/placeholder/family-hernandezes.png');">
                        <div class="card__image-b wrapper">
                            <div class="wrapper__inner">
                                <div class="fam__adults list list--inline">
                                    <li class="item">
                                        <div class="avatar avatar--s"></div>
                                    </li>
                                </div>
                            </div>
                            <div class="wrapper__inner -align-right">
                                <div class="fam__kids list list--inline">
                                    <li class="item">
                                        <div class="avatar avatar--xs"></div>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card__body">
                        <div class="fam__meta tg tg--m">
                            <span class="fam__name tg__title">Luis & Elba's Family</span>
                            <span class="fam__desc tg__sub">2 Kids  •  Mar Vista</span>
                            <span class="fam__connection tg__tertiary">You and Luis are friends on Facebook.</span>
                        </div>
                    </div>
                </a>
                <!-- /Single Family Card -->

                <!-- Single Family Card -->
                <a class="fam card" href="#">
                    <div class="card__controls wrapper -reversed">
                        <div class="wrapper__inner">
                        </div>
                        <div class="wrapper__inner -align-right">
                            <button class="btn btn--icon btn--toggle btn--fav">
                                <svg class="icon-heart -off"><use xlink:href="#icon-heart"></use></svg>
                                <svg class="icon-heart-filled -on"><use xlink:href="#icon-heart-filled"></use></svg>
                            </button>
                        </div>
                    </div>
                    <div class="fam__card-image card__image go ar ar--16-9" style="background-image:url('/assets/img/placeholder/family-todds.png');">
                        <div class="card__image-b wrapper">
                            <div class="wrapper__inner">
                                <div class="fam__adults list list--inline">
                                    <li class="item">
                                        <div class="avatar avatar--s"></div>
                                    </li>
                                </div>
                            </div>
                            <div class="wrapper__inner -align-right">
                                <div class="fam__kids list list--inline">
                                    <li class="item">
                                        <div class="avatar avatar--xs"></div>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card__body">
                        <div class="fam__meta tg tg--m">
                            <span class="fam__name tg__title">Elisha's Family</span>
                            <span class="fam__desc tg__sub">1 Child  •  Palms</span>
                            <span class="fam__connection tg__tertiary">Not Connected</span>
                        </div>
                    </div>
                </a>
                <!-- /Single Family Card -->

                <!-- Single Family Card -->
                <a class="fam card" href="#">
                    <div class="card__controls wrapper -reversed">
                        <div class="wrapper__inner">
                        </div>
                        <div class="wrapper__inner -align-right">
                            <button class="btn btn--icon btn--toggle btn--fav">
                                <svg class="icon-heart -off"><use xlink:href="#icon-heart"></use></svg>
                                <svg class="icon-heart-filled -on"><use xlink:href="#icon-heart-filled"></use></svg>
                            </button>
                        </div>
                    </div>
                    <div class="fam__card-image card__image go ar ar--16-9">
                        <div class="card__image-b wrapper">
                            <div class="wrapper__inner">
                                <div class="fam__adults list list--inline">
                                    <li class="item">
                                        <div class="avatar avatar--s"></div>
                                    </li>
                                </div>
                            </div>
                            <div class="wrapper__inner -align-right">
                                <div class="fam__kids list list--inline">
                                    <li class="item">
                                        <div class="avatar avatar--xs"></div>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card__body">
                        <div class="fam__meta tg tg--m">
                            <span class="fam__name tg__title">Colleen & Tom's Family</span>
                            <span class="fam__desc tg__sub">3 Kids  •  Palms</span>
                            <span class="fam__connection tg__tertiary">Not Connected</span>
                        </div>
                    </div>
                </a>
                <!-- /Single Family Card -->

            </div>
        </div>

    </section>
    <?php require_once('../_inc/footer.php'); ?>
