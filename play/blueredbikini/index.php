<!DOCTYPE html>
<html>

<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#">

	<meta charset="utf-8">

	<meta property="og:title" content="KOKO - Find a Difference!">
	<meta property="og:type" content="website" />
	<meta property="og:description" content="Find a part of picture that changes gradually! Enjoy the best a-ha experience game!"
	/>
	<?php include($_SERVER['DOCUMENT_ROOT'] . '/php/ogp.php'); //Insert OGP URLs ?>
	<meta property="fb:app_id" content="268596930288915" />
	<meta name="twitter:card" content="summary_large_image" />

	<!-- No zoom on mobile -->
	<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">

	<!-- jQuery -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

	<!-- jQuery UI -->
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js" integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="
	    crossorigin="anonymous"></script>

	<!-- General JavaScript/jQuery -->
	<script src="/js/main02.js"></script>

	<!-- AlphaPicker -->
	<script src="/js/alphapicker.js"></script>

	<!-- main CSS -->
	<link rel="stylesheet" type="text/css" href="/css/main.css">

	<!-- Google Font -->
	<link href="https://fonts.googleapis.com/css?family=Geo" rel="stylesheet">

	<!-- Font Awesome -->
	<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">

	<title>Koko Web Vesion: Beta</title>

	<script>
		(function (i, s, o, g, r, a, m) {
			i['GoogleAnalyticsObject'] = r;
			i[r] = i[r] || function () {
				(i[r].q = i[r].q || []).push(arguments)
			}, i[r].l = 1 * new Date();
			a = s.createElement(o),
				m = s.getElementsByTagName(o)[0];
			a.async = 1;
			a.src = g;
			m.parentNode.insertBefore(a, m)
		})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

		ga('create', 'UA-103050142-1', 'auto');
		ga('send', 'pageview');
	</script>
</head>

<body>
	<p id="main_navigation"></p>
	<p id="instruction">Click a part of picture that gradually changes.</p>

	<!-- Loading -->
	<div id="loading">
		Loading....
	</div>

	<!-- Main frame -->
	<div id="main">

		<!-- #main load -->
		<div id="frame">

			<!-- Pointer -->
			<span id="locatedpoint">
				<img src="/images/arrow.png" alt="">
			</span>

			<!-- Start button -->
			<div id="start_button">
				<p id="start_button_text">Tap to Start</p>
			</div>

			<!-- load answer, before, after image -->
			<?php include($_SERVER['DOCUMENT_ROOT'] . '/php/image_loader.php'); //Image Loader ?>

			<div id="progress"></div>
		</div>
		<!-- /#frame -->
	</div>
	<!-- /#main loading-->

	<!-- Navigation -->
	<p id="navigation">
		<i class="fa fa-home" aria-hidden="true"></i>
		<a href="/">Home</a> | Share This Picture on
		<a href="#" target="_blank" title="Share on Twitter" class="socialTw">
			<i class="fa fa-twitter-square" aria-hidden="true"></i>
		</a>
		<a href="#" target="_blank" title="Share on Facebook" class="socialFb">
			<i class="fa fa-facebook-square" aria-hidden="true"></i>
		</a>
	</p>

	<div id="grid"></div>

	<div id="google_ad">
		<p class="ads_claim">AD
			<p/>
			<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
			<!-- Koko - large mobile banner -->
			<ins class="adsbygoogle" style="display:inline-block;width:320px;height:100px" data-ad-client="ca-pub-4042220637899031" data-ad-slot="9818199756"></ins>
			<script>
				(adsbygoogle = window.adsbygoogle || []).push({});
			</script>

	</div>

	<div id="credit">&copy; Takafumi Kojima</div>

</body>

</html>