<?php require_once('../../_inc/header.php'); ?>
<?php require_once('../../_inc/sidebar.php'); ?>

<section class="lsg__content" id="contentArea">

    <h1>Color</h1>
    <h3>Brand Colors</h3>
    <p>Primary brand colors are used for elements that must reflect the brand. Each color has 3 shades.</p>

    <!--
        NOTE:
        HEX value is added dynamically to the swatch client-side. The user can click a swatch to copy the HEX to their clipboard.
    -->

    <div class="well cf">
        <!-- Color Swatch -->
        <ul class="lsg__-color-group">
            <li class="lsg__color -bg-primary">
                Primary
            </li>
            <li class="lsg__color -bg-primary-80">
                Primary-80
            </li>
            <li class="lsg__color -bg-primary-60">
                Primary-60
            </li>
            <!-- <li class="lsg__color -bg-primary-40 -color-black-80">
                Primary-40
            </li>
            <li class="lsg__color -bg-primary-20 -color-black-80">
                Primary-20
            </li> -->
        </ul>
        <!-- /Color Swatch -->

        <!-- Color Swatch -->
        <ul class="lsg__-color-group">
            <li class="lsg__color -bg-secondary">
                Secondary
            </li>
            <li class="lsg__color -bg-secondary-80">
                Secondary-80
            </li>
            <li class="lsg__color -bg-secondary-60">
                Secondary-60
            </li>
            <!-- <li class="lsg__color -bg-secondary-40 -color-black-80">
                Secondary-40
            </li>
            <li class="lsg__color -bg-secondary-20 -color-black-80">
                Secondary-20
            </li> -->
        </ul>
        <!-- /Color Swatch -->

        <!-- Color Swatch -->
        <ul class="lsg__-color-group">
            <li class="lsg__color -bg-tertiary">
                Tertiary
            </li>
            <li class="lsg__color -bg-tertiary-80">
                Tertiary-80
            </li>
            <li class="lsg__color -bg-tertiary-60">
                Tertiary-60
            </li>
            <!-- <li class="lsg__color -bg-tertiary-40 -color-black-80">
                Tertiary-40
            </li>
            <li class="lsg__color -bg-tertiary-20 -color-black-80">
                Tertiary-20
            </li> -->
        </ul>

        <!-- Color Swatch -->
        <ul class="lsg__-color-group">
            <li class="lsg__color -bg-warning">
                Warning
            </li>
            <li class="lsg__color -bg-warning-80">
                Warning-80
            </li>
            <li class="lsg__color -bg-warning-60">
                Warning-60
            </li>
            <!-- <li class="lsg__color -bg-warning-40 -color-black-80">
                Warning-40
            </li>
            <li class="lsg__color -bg-warning-20 -color-black-80">
                Warning-20
            </li> -->
        </ul>
        <!-- /Color Swatch -->

    </div>

    <h3>Grays</h3>
    <p>Grey colors are used for text, backgrounds, lines and borders.</p>
    <div class="well cf">

        <!-- Color Swatch -->
        <ul class="lsg__-color-group">
            <li class="lsg__color -bg-light-gray -color-black-80">
                Light Gray
            </li>
        </ul>
        <!-- /Color Swatch -->

        <!-- Color Swatch -->
        <ul class="lsg__-color-group">
            <li class="lsg__color -bg-gray -color-black-80">
                Gray
            </li>
        </ul>
        <!-- /Color Swatch -->

        <!-- Color Swatch -->
        <ul class="lsg__-color-group">
            <li class="lsg__color -bg-dark-gray -color-black-80">
                Dark Gray
            </li>
        </ul>
        <!-- /Color Swatch -->

        <!-- Color Swatch -->
        <ul class="lsg__-color-group">
            <li class="lsg__color -bg-darkest-gray -color-black-80">
                Darkest Gray
            </li>
        </ul>
        <!-- /Color Swatch -->

    </div>

    <h3>Black &amp; White</h3>
    <p>Black is never pure black, white is pure white. Additionally, there are five variations for each that incrementally add alpha-transparency at <code class="il">80%</code>, <code class="il">60%</code>, <code class="il">40%</code>, <code class="il">20%</code>, <code class="il">15%</code> and <code class="il">10%</code></p>
    <div class="well no--pad">
        <div class="well__row">
            <div class="well__section cf">
                <!-- Color Swatch -->
                <ul class="lsg__-color-group lsg__-color-group--bordered">
                    <li class="lsg__color -bg-white -color-black-80">
                        White
                    </li>
                </ul>
                <!-- /Color Swatch -->

                <!-- Color Swatch -->
                <ul class="lsg__-color-group">
                    <li class="lsg__color -bg-black">
                        Black
                    </li>
                </ul>
                <!-- /Color Swatch -->
            </div>
        </div>
        <div class="well__row">
            <div class="well__section well--code no--pad">
                <pre><code class="html">&lt;!-- White --&gt;
&lt;div class=&quot;-bg-white&quot;&gt;&lt;/div&gt;
&lt;div class=&quot;-bg-white-80&quot;&gt;&lt;/div&gt;
&lt;div class=&quot;-bg-white-60&quot;&gt;&lt;/div&gt;
&lt;div class=&quot;-bg-white-40&quot;&gt;&lt;/div&gt;
&lt;div class=&quot;-bg-white-20&quot;&gt;&lt;/div&gt;
&lt;div class=&quot;-bg-white-15&quot;&gt;&lt;/div&gt;
&lt;div class=&quot;-bg-white-10&quot;&gt;&lt;/div&gt;

&lt;!-- Black --&gt;
&lt;div class=&quot;-bg-black&quot;&gt;&lt;/div&gt;
&lt;div class=&quot;-bg-black-80&quot;&gt;&lt;/div&gt;
&lt;div class=&quot;-bg-black-60&quot;&gt;&lt;/div&gt;
&lt;div class=&quot;-bg-black-40&quot;&gt;&lt;/div&gt;
&lt;div class=&quot;-bg-black-20&quot;&gt;&lt;/div&gt;
&lt;div class=&quot;-bg-black-15&quot;&gt;&lt;/div&gt;
&lt;div class=&quot;-bg-black-10&quot;&gt;&lt;/div&gt;</code></pre>
            </div>
        </div>
    </div>

    <h3>Applying Color</h3>
    <p>To apply a color to things like backgrounds and text (and icons), use the appropriate color classes: Either <code class="il">-bg-</code> or <code class="il">-color-</code> followed by the color name.</p>


</section>

<?php require_once('../../_inc/footer.php'); ?>
