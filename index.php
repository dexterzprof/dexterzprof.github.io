<!DOCTYPE html>

<!--[if lt IE 8]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->

<!--[if IE 8]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->

<!--[if IE 9]>         <html class="no-js lt-ie9"> <![endif]-->

<!--[if gt IE 9]><!--> <html class="no-js" lang="en-US"> <!--<![endif]-->

	<head>

		<meta charset="utf-8">

		<meta name="viewport" content="width=device-width, initial-scale=1">

    <!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><![endif]-->

    <title></title>

    <link rel="stylesheet" href="css/style.min.css">
    <link rel="stylesheet" href="css/media.min.css">
  </head>
  <body>
<!-- Header -->
<div class="header_cont" id="header">
  <div class="wrapper">
    <nav>
        <ul>
            <li>Home nako</li>
            <li>Profile</li>
            <li>Contact Info</li>
          </ul>
    </nav>
  </div>
</div>
<!-- Banner -->
<div class="banner_cont" id="banner">
  <div class="wrapper">
  <div class="bnr_con">
    <div class="banner_txt">
      <h2>Dexter </h2><h2>Ragasajo</h2>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        <span>Aenean commodo ligula eget dolor.</span></p>
      </div>
    </div>
  </div>
</div>
<!-- Middle -->
<!-- Main -->
<!-- Bottom 1 -->
<div class="bottom_cont" id="bottom1">
  <div class="wrapper">
    <div class="skills">
      <h2>Technical Skills</h2>
      <ul>
        <li>HTML 5 <span></span></li>
        <li>CSS 5<span></span></li>
        <li>WORDPRESS<span></span></li>
        <li>Bootstrap<span></span></li>
        <li>Javascript<span></span></li>
        <li>AJAX<span></span></li>
        <li>JQuery<span></span></li>
        <li>PHP<span></span></li>
        <li>C#<span></span></li>
      </ul>
    </div>
  </div>
</div>
<!-- Bottom 2  -->
<!-- Footer -->
    <div class="footer_cont" id="footer">
      <div class="wrapper">
      <div class="copyright">
            &copy; Copyright 2019
              <?php
              $start_year = '2019';
              $current_year = date('Y');
              $copyright = ($current_year == $start_year) ? $start_year : $start_year.' - '.$current_year;
              echo $copyright;
              ?>
            <a href="javascript:;" target="_blank" rel="nofollow">Web Design</a>: <a href="javascript:;" target="_blank" rel="nofollow">Dexter Ragasajo</a>

        </div>
      </div>
    </div>

    <script src="js/jquery-2.1.1.min.js"></script>
    <script src="js/plugins.min.js"></script>
  </body>
</html>
