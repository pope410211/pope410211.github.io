! function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    p = /^http:/.test(d.location) ? 'http' : 'https';
  if (!d.getElementById(id)) {
    js = d.createElement(s);
    js.id = id;
    js.src = p + "://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);
  }
}(document, "script", "twitter-wjs");



if ($(window).width() < 600 ) {

   $('.twitter').removeClass('twitter').addClass('twitter-mobile');
               $twitterMobile = $('.twitter-mobile')
               $twitterMobile.append('<a class="twitter-timeline" href="https://twitter.com/pope410211" data-widget-id="644569435425107973" data-tweet-limit="3"   data-chrome="nofooter noheader">Tweets by @pope410211</a>');

}
else {

   $twitter = $('.twitter')
   $twitter.append('<a class="twitter-timeline" href="https://twitter.com/pope410211" data-widget-id="644569435425107973"  data-tweet-limit="5">Tweets by @pope410211</a>');

}
