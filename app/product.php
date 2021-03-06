<?php include "partials/head.php" ?>
<!DOCTYPE html>
<html lang="swe">
<head>
    <title>Tastaturen - Produkter</title>
    <meta name="description" content="Tastaturens produkt sida. Här kan du läsa om alla våra olika produkter"/>
    <meta name="keywords" content="orgel,instrument,musik,orgel återförsäljare,johannus,rogerinstrument"/>
</head>

<body class="wrapper col-xs-12 col-md-10" id="page-top" class="index">
<?php include "partials/nav.php" ?>
<?php
include "functions/functions.php";
$con = connect();

$product_id = $_GET['id'];

$product = get_product_by_id($con, $product_id);
$slider_images = get_product_images_by_id($con, $product_id);
$brochure = get_product_brochure_by_id($con, $product_id);

$short = translate($product, 'short_description');
$long = translate($product, 'long_description');
$price = translate($product, 'price');

$name = $product['name'];
$main_image = $product['main_image'];
$about_image = $product['about_image'];
?>

<!-- Header. Kort info om produkt och en bakgrunds bildspel -->
<header class="container-fluid p_prod_head" role="banner">
    <div class="row-fluid p_prod_head">
        <div class="col-xs-12 p_prod_head_container">

            <!-- Slider  off products-->
            <div class="slideshow hidden-xs hidden-sm">
                <?php
                foreach ($slider_images as $image) {
                    ?>
                    <div class="slideshow-image"
                         style="background-image: url(data:image/jpeg;base64,<?php echo base64_encode($image['data']) ?> )"></div>
                <?php } ?>
            </div>

            <!-- Bg for mobile instead of slider-->
            <div class="hidden-lg hidden-md p_prod_slider_container"
                 style="background-image:url(data:image/jpeg;base64,<?php echo base64_encode($slider_images[0]['data']) ?>)">
            </div>


            <div class="p_prod_head_bg">

                <div class="p_prod_head_text col-xs-10 col-xs-offset-1">
                    <h1><?php echo $name; ?></h1>
                    <h2><?php echo $short; ?></h2>
                </div>

                <?php if (!empty($brochure)) { ?>
                    <button onclick="location.href='view_brochure?product_id=<?php echo $product_id; ?>'"
                            class="p_prod_head_btn_broschyr"><?php print_field("download_brochure_btn"); ?>
                    </button>
                <?php } ?>

                <button product_id="<?php echo $product_id; ?>"
                        class="send_offert p_prod_head_btn_order"><?php print_field("offert_btn"); ?>
                </button>
                <div class="p_prod_head_img">
                    <img src="data:image/jpeg;base64,<?php echo base64_encode($main_image) ?>"
                         alt="orgel produkt bild"/>
                </div>
            </div>
        </div>
    </div>
</header>

<!-- Lång information om produkten -->
<section class="container-fluid p_info" role="main">
    <div class="row-fluid p_info">
        <div class="col-xs-12 p_info_container">
            <div class="p_info_text col-md-4 col-md-offset-1 col-xs-12">
                <h1><?php echo $name; ?></h1>
                <h3><?php echo $price; ?> </h3>
                <p> <?php echo $long; ?></p>
            </div>
            <div class="p_info_img col-md-4 col-md-offset-0 col-xs-10 col-xs-offset-1">
                <img class="" src="data:image/jpeg;base64,<?php echo base64_encode($about_image) ?>"
                     alt="Orgel produkt bild"/>
            </div>
        </div>
    </div>
</section>

<!-- om man är inloggad som admin visas knappen för att redigera produkten -->
<?php include "views/admin_edit_prod.php" ?>

<!-- Slider  -->
<?php
if (!empty($slider_images)) {
    include "views/product_slider.php";
}
?>

<!-- Info och ladda ner brochyr -->
<section class="container-fluid p_info2" role="complementary">
    <div class="row-fluid p_info2_container">
        <div class="col-md-8 col-md-offset-2 col-xs-10 col-xs-offset-1 p_info2_text">
            <h1><?php echo $name; ?></h1>
            <p> <?php echo $short; ?></p>
        </div>
        <div class="p_info2_btn">
            <?php if (!empty($brochure)) { ?>
                <button onclick="location.href='view_brochure?product_id=<?php echo $product_id; ?>'"
                        class="p_prod_head_btn_broschyr"><?php print_field("download_brochure_btn2"); ?>
                </button>
            <?php } ?>
        </div>
    </div>
</section>

<!-- Lägga till fottern -->
<?php include "partials/footer.php" ?>
</body>
</html>
