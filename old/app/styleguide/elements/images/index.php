<?php require_once('../../_inc/header.php'); ?>
<?php require_once('../../_inc/sidebar.php'); ?>

<section class="lsg__content" id="contentArea">

    <h1>Images</h1>
    <h2>Avatars</h2>
    <h3>Basic Avatars</h3>
    <p>Avatars are used for references to people and they are made up of a <code class="il">&lt;div&gt;</code> or <code class="il">&lt;a&gt;</code>. To include a custom image, add <code class="il">style="background-image:url('path/to/image')"</code> to the element.</p>
    <div class="well no--pad cf">
        <div class="well__row">
            <div class="well__section is-halved -align-center">
                <div class="avatar"></div>
            </div>
            <div class="well__section is-halved -align-center">
                <a class="avatar avatar--btn" href="#" style="background-image:url('<?php echo ROOT_PATH . 'assets/img/placeholder/avatar-michelle.png'; ?>')"></a>
            </div>
        </div>
        <div class="well__row">
            <div class="well__section well--code no--pad">
<pre><code class="lang-html">&lt;div class="avatar"&lt;/div&gt;
&lt;div class="avatar avatar--btn" style="background-image:url('path/to/image');"&lt;/div&gt;</code></pre>
            </div>
        </div>
    </div>

    <h3>Avatar Sizes</h3>
    <p>There are 4 sizes of avatar: Small (32x32), Medium (48x48), Large (64x64) and Extra Large (120x120). By default, they're set to the Medium size. To resize an avatar, just include the desired size modifier class.</p>
    <div class="well no--pad cf">
        <div class="well__row">
            <div class="well__section is-quartered -align-center">
                <div class="avatar avatar--s"></div>
            </div>
            <div class="well__section is-quartered -align-center">
                <div class="avatar avatar--m"></div>
            </div>
            <div class="well__section is-quartered -align-center">
                <div class="avatar avatar--l"></div>
            </div>
            <div class="well__section is-quartered -align-center">
                <div class="avatar avatar--xl"></div>
            </div>
        </div>
        <div class="well__row">
            <div class="well__section well--code no--pad">
<pre><code class="lang-html">&lt;div class="avatar avatar--s"&lt;/div&gt;
&lt;div class="avatar avatar--m"&lt;/div&gt;
&lt;div class="avatar avatar--l"&lt;/div&gt;
&lt;div class="avatar avatar--xl"&lt;/div&gt;</code></pre>
            </div>
        </div>
    </div>

</section>

<?php require_once('../../_inc/footer.php'); ?>
