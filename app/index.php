<?php
  // Define Environment
  $root = dirname(__FILE__);

  switch ($root) {
    //change your project path here
    // laptop
    case 'D:\xampp\htdocs\website\product-quick-view\app':
      $enviroment = 'development';
    break;
    default:
      $enviroment = 'production';
    break;
  }
  define('ENVIRONMENT', $enviroment);
?>

<?php require('partials/html_head.php'); ?>

  <!-- Add your site or app content here -->
  <div class="grid pv+">
    <div class="grid__item small-1">
      <h1 class="text-center text-normal">Product Quick View</h1>
    </div>
  </div>

  <div class="grid">
    <div class="grid__item small-1">

      <!-- product list -->
      <ul class="block-list block-list--small-1 block-list--medium-3 block-list--large-4">
        <li class="block-list__item">
          <div class="item">
            <img src="assets/img/item.jpg" alt="item image" class="item__img">
            <a href="detail.php" class="item__action">Learn More</a>
            <a href="#" class="item__action item__action--view js-quickView" data-id="1">
              Quick View
            </a>
          </div>
        </li>
        <li class="block-list__item">
          <div class="item">
            <img src="assets/img/item.jpg" alt="item image" class="item__img">
            <a href="detail.php" class="item__action">Learn More</a>
            <a href="#" class="item__action item__action--view js-quickView" data-id="2">
              Quick View
            </a>
          </div>
        </li>
        <li class="block-list__item">
          <div class="item">
            <img src="assets/img/item.jpg" alt="item image" class="item__img">
            <a href="detail.php" class="item__action">Learn More</a>
            <a href="#" class="item__action item__action--view js-quickView" data-id="3">
              Quick View
            </a>
          </div>
        </li>
        <li class="block-list__item">
          <div class="item">
            <img src="assets/img/item.jpg" alt="item image" class="item__img">
            <a href="detail.php" class="item__action">Learn More</a>
            <a href="#" class="item__action item__action--view js-quickView" data-id="4">
              Quick View
            </a>
          </div>
        </li>
        <li class="block-list__item">
          <div class="item">
            <img src="assets/img/item.jpg" alt="item image" class="item__img">
            <a href="detail.php" class="item__action">Learn More</a>
            <a href="#" class="item__action item__action--view js-quickView" data-id="5">
              Quick View
            </a>
          </div>
        </li>
        <li class="block-list__item">
          <div class="item">
            <img src="assets/img/item.jpg" alt="item image" class="item__img">
            <a href="detail.php" class="item__action">Learn More</a>
            <a href="#" class="item__action item__action--view js-quickView" data-id="6">
              Quick View
            </a>
          </div>
        </li>
        <li class="block-list__item">
          <div class="item">
            <img src="assets/img/item.jpg" alt="item image" class="item__img">
            <a href="detail.php" class="item__action">Learn More</a>
            <a href="#" class="item__action item__action--view js-quickView" data-id="7">
              Quick View
            </a>
          </div>
        </li>
        <li class="block-list__item">
          <div class="item">
            <img src="assets/img/item.jpg" alt="item image" class="item__img">
            <a href="detail.php" class="item__action">Learn More</a>
            <a href="#" class="item__action item__action--view js-quickView" data-id="8">
              Quick View
            </a>
          </div>
        </li>
        <li class="block-list__item">
          <div class="item">
            <img src="assets/img/item.jpg" alt="item image" class="item__img">
            <a href="detail.php" class="item__action">Learn More</a>
            <a href="#" class="item__action item__action--view js-quickView" data-id="9">
              Quick View
            </a>
          </div>
        </li>
        <li class="block-list__item">
          <div class="item">
            <img src="assets/img/item.jpg" alt="item image" class="item__img">
            <a href="detail.php" class="item__action">Learn More</a>
            <a href="#" class="item__action item__action--view js-quickView" data-id="10">
              Quick View
            </a>
          </div>
        </li>
        <li class="block-list__item">
          <div class="item">
            <img src="assets/img/item.jpg" alt="item image" class="item__img">
            <a href="detail.php" class="item__action">Learn More</a>
            <a href="#" class="item__action item__action--view js-quickView" data-id="11">
              Quick View
            </a>
          </div>
        </li>
        <li class="block-list__item">
          <div class="item">
            <img src="assets/img/item.jpg" alt="item image" class="item__img">
            <a href="detail.php" class="item__action">Learn More</a>
            <a href="#" class="item__action item__action--view js-quickView" data-id="12">
              Quick View
            </a>
          </div>
        </li>
      </ul><!-- /product list -->

    </div>
  </div>

  <div class="modal" id="js-modal">
    <div class="modal__img">
      <img src="assets/img/item.jpg" alt="Product 1">
    </div>
    <div class="modal__body">
      <!-- dynamic content -->
    </div> <!-- modal body -->
    <span class="modal__close">close modal</span>
  </div>

<?php require('partials/html_foot.php'); ?>