<?php

function dump ($var, $label = 'Dump', $echo = TRUE){
  // Store dump in variable
  ob_start();
  var_dump($var);
  $output = ob_get_clean();

  // Add formatting
  $output = preg_replace("/\]\=\>\n(\s+)/m", "] => ", $output);
  $output = '<pre style="background: #FFFEEF; color: #000; border: 1px dotted #000; padding: 10px; margin: 10px 0; text-align: left;">' . $label . ' => ' . $output . '</pre>';

  // Output
  if ($echo == TRUE) {
      echo $output;
  }
  else {
      return $output;
  }
}

function findData( $productId, $array ){
  foreach ($array as $item) {
    if($item['product']['id'] == $productId){
      return $item;
    }
  }
}

// generate dummy daya
$total = 12;
$arrayProduct = array();

for ($i=1; $i <= $total; $i++) {
  $content = array(
    'product' => array(
      'id' => $i,
      'title' => 'Product '.$i,
      'price' => 'Rp 1.000.000',
      'description' => 'Lorem ipsum dolor sit amet. Duis voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'stock' => rand(1,20),
      'url' => '#product-page'
    ),
    'seller' => array(
      'name' => 'Seller '.$i,
      'joinDate' => rand(1,30). ' February 2016',
      'lastLogin' => '1 hour ago',
      'url' => '#seller-page'
    )
  );

  $arrayProduct[] = $content;
}

// AJAX check
if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {

  // grab product id
  if (isset($_GET['id'])) {
    # code...
    $productId = (int) $_GET['id'];
    $found = findData($productId, $arrayProduct);

    header('Content-type: application/json');
    echo json_encode($found);
    exit();
  }
} else{
  echo 'Forbidden Not AJAX request !';
  exit();
}

