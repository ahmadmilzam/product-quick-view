<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <title>Product Quick View</title>

  <!-- SEO: If your mobile URL is different from the desktop URL, add a canonical link to the desktop page https://developers.google.com/webmasters/smartphone-sites/feature-phones -->
  <!--
  <link rel="canonical" href="http://www.example.com/">
  -->

  <!-- Page styles -->
  <link rel="stylesheet" href="assets/css/app<?php echo ENVIRONMENT == 'development' ? '.css' : '.min.css' ?>">
  <link href='http://fonts.googleapis.com/css?family=PT+Sans:400,700' rel='stylesheet' type='text/css'>
</head>
<body class="overlay">
  <!-- Warn user for their outdated browser -->
  <!--[if lt IE 10]>
    <div class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</div>
  <![endif]-->

  <svg style="position: absolute; width: 0; height: 0;" width="0" height="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
  <symbol id="icon--minus" viewBox="0 0 20 20">
  <title>minus</title>
  <path class="path1" d="M16 10c0 0.553-0.048 1-0.601 1h-10.798c-0.552 0-0.601-0.447-0.601-1s0.049-1 0.601-1h10.799c0.552 0 0.6 0.447 0.6 1z"></path>
  </symbol>
  <symbol id="icon--plus" viewBox="0 0 20 20">
  <title>plus</title>
  <path class="path1" d="M16 10c0 0.553-0.048 1-0.601 1h-4.399v4.399c0 0.552-0.447 0.601-1 0.601s-1-0.049-1-0.601v-4.399h-4.399c-0.552 0-0.601-0.447-0.601-1s0.049-1 0.601-1h4.399v-4.399c0-0.553 0.447-0.601 1-0.601s1 0.048 1 0.601v4.399h4.399c0.553 0 0.601 0.447 0.601 1z"></path>
  </symbol>
  <symbol id="icon--cart" viewBox="0 0 20 20">
  <title>cart</title>
  <path class="path1" d="M13 17c0 1.104 0.894 2 2 2 1.104 0 2-0.896 2-2 0-1.106-0.896-2-2-2-1.106 0-2 0.894-2 2zM3 17c0 1.104 0.895 2 2 2 1.103 0 2-0.896 2-2 0-1.106-0.897-2-2-2-1.105 0-2 0.894-2 2zM6.547 12.172l11.068-3.162c0.211-0.061 0.385-0.289 0.385-0.51v-5.5h-14v-1.6c0-0.22-0.181-0.4-0.399-0.4h-3.202c-0.219 0-0.399 0.18-0.399 0.4v1.6h2l1.91 8.957 0.090 0.943v1.649c0 0.219 0.18 0.4 0.4 0.4h13.2c0.22 0 0.4-0.182 0.4-0.4v-1.549h-11.248c-1.15 0-1.174-0.551-0.205-0.828z"></path>
  </symbol>
  </defs>
  </svg>