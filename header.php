<!doctype html>

<!--[if lt IE 7]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if (IE 7)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8"><![endif]-->
<!--[if (IE 8)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]><!--> <html <?php language_attributes(); ?> class="no-js"><!--<![endif]-->

<head>
	<meta charset="utf-8">

	<!-- Google Chrome Frame for IE -->
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

	<title><?php wp_title(''); ?></title>

	<!-- mobile meta (hooray!) -->
	<meta name="HandheldFriendly" content="True">
	<meta name="MobileOptimized" content="320">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"/>
	<meta name="format-detection" content="telephone=yes"/>

	<!-- Optimizely -->
	<script src="//cdn.optimizely.com/js/3043640279.js"></script>

	<!-- Hotjar Tracking Code for www.bauersit.com -->
	<script>
	(function(h,o,t,j,a,r){
		h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
		h._hjSettings={hjid:54847,hjsv:5};
		a=o.getElementsByTagName('head')[0];
		r=o.createElement('script');r.async=1;
		r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
		a.appendChild(r);
	})(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');
	</script>

	<!-- Google Site Verification
	<meta name="google-site-verification" content="m6tcjYmOS1_5royc-uazuKSNNugHrUy3Kub_BfL-nOs"/> -->

	<!-- Google Analytics -->
	<?php if ( is_404() ) { ?>
	<script>			
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-25072936-1', 'auto');
		ga('require', 'displayfeatures');
		ga('send', 'pageview', '/404.html?page=' + document.location.pathname + document.location.search + '&from=' + document.referrer]);
	</script>
	<?php } else { ?>
	<script>			
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-25072936-1', 'auto');
		ga('require', 'displayfeatures');
		ga('send', 'pageview');
	</script>
	<?php } ?>

	<!-- icons & favicons (for more: http://www.jonathantneal.com/blog/understand-the-favicon/) -->
	<link rel="apple-touch-icon" href="<?php echo get_template_directory_uri(); ?>/library/images/apple-icon-touch.png">
	<link rel="icon" href="<?php echo get_template_directory_uri(); ?>/favicon.png">
		<!--[if IE]>
			<link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/favicon.ico">
			<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/library/css/ie.css">
			<![endif]-->
			<!-- or, set /favicon.ico for IE10 win -->
			<meta name="msapplication-TileColor" content="#f01d4f">
			<meta name="msapplication-TileImage" content="<?php echo get_template_directory_uri(); ?>/library/images/win8-tile-icon.png">

			<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

			<!-- wordpress head functions -->
			<?php wp_head(); ?>
			<!-- end of wordpress head -->

			<link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/library/css/jquery-ui.min.css">

			<!-- CallRail -->
			<script type="text/javascript" src="//cdn.callrail.com/companies/229295903/d3fb626710a255df8c4d/12/swap.js"></script>
			<!-- end of CallRail -->

			<!-- Facebook Pixel Code -->
			<script>
			!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
			n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
			n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
			t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
			document,'script','//connect.facebook.net/en_US/fbevents.js');

			fbq('init', '561716243986759');
			fbq('track', "PageView");</script>
			<noscript><img height="1" width="1" style="display:none"
			src="https://www.facebook.com/tr?id=561716243986759&ev=PageView&noscript=1"
			/></noscript>
			<!-- End Facebook Pixel Code -->

		</head>

		<body <?php body_class(); ?>>

			<div class="wrapper">

				<header class="header" role="banner">

					<nav role="navigation">
						<div class="navbar navbar-default navbar-fixed-top">
							<div class="container">
								<!-- .navbar-toggle is used as the toggle for collapsed navbar content -->
								<div class="navbar-header">
									<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
										<span class="text">Menu</span>
										<span class="icon-bar"></span>
										<span class="icon-bar"></span>
										<span class="icon-bar"></span>
									</button>

									<a class="navbar-brand" href="<?php bloginfo( 'url' ) ?>/" title="<?php bloginfo( 'name' ) ?>" rel="homepage"><?php bloginfo( 'name' ) ?></a>

								</div>

								<nav class="telephone">
									<ul class="nav navbar-nav">
										<li class="hidden-xs">
											Receive a Free Quote: <em>(877) 486-6688</em>
										</li>
										<li class="visible-xs">
											Receive a Free Quote: <em><a href="tel:1-877-486-6688">(877) 486-6688</a></em>
										</li>
									</ul>
								</nav>

								<div class="navbar-collapse collapse navbar-responsive-collapse pull-right">
									<?php bones_main_nav(); ?>
								</div>
							</div>
						</div> 
						
					</nav>

				</header> <!-- end header -->
