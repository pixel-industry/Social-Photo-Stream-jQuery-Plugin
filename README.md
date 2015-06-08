Social Photo Stream jQuery Plugin
=================================

jQuery plugin that displays latest images from 8 
social networks like dribbble, deviantart, piacsa, pinterest and more

<p>Author: Pixel Industry<br />
Website - pixel-industry.com<br />
Licence - GPL</p>

<h3>Description</h3>
<p>
This simple jQuery plugin allows you to make photo stream
                        feed from 8 networks, including: picasa, pinterest, dribbble,
                        instagram, deviantart, youtube, flickr and regular news page.
                        You can use it on multiple places across your website. Only thing you
                        need is the username of the account from which you want images
                        to be shown.
</p>

<h4> Social Photo Streams included withing this plugin</h4>
<ul>
   <li>Picasa</li>
   <li>Pinterest</li>
   <li>Instagram</li>
   <li>Youtube</li>
   <li>Deviantart</li>
   <li>Flickr</li>
   <li>Dribbble</li>
   <li>News photo stream</li>
</ul>

<h3>Instalation</h3>
<p>This plugin needs only two js files to work. You must include them at the bottom of the body in your HTML document. These are:</p>
<ul>
<li>jQuery library</li>
<li>socialstream.jquery.js file which is included in the download package.</li>
</ul>

<h5>HTML Structure & jQuery code for Deviantart Feed</h5>

<pre>
<code>
&#60;article class="social-feed deviant-feed"&#62;
&#60;/article&#62;
</code>
</pre>

<p>Now enter this js code inside "script" tags at the bottom of the body in your HTML document and enter your username:</p>
<pre>
<code>
/* ================ DEVIANT ART FEED ================ */
$('.deviant-feed').socialstream({
    socialnetwork: 'deviantart',
    limit: 15,
    username: 'your_username_here'
})
</code>
</pre>

<h5>HTML Structure & jQuery code for Instagram Feed</h5>

<pre>
<code>
&#60;article class="social-feed deviant-feed"&#62;
&#60;/article&#62;
</code>
</pre>

<p>Now enter this js code inside "script" tags at the bottom of the body in your HTML document and enter your username:</p>
<pre>
<code>
/* ================ Instagram FEED ================ */
$('.instagram-feed').socialstream({
    socialnetwork: 'instagram',
    limit: 15,
    username: 'your_username_here'
})
</code>
</pre>

<h5>HTML Structure & jQuery code for Picasa Feed</h5>

<pre>
<code>
&#60;article class="social-feed picasa-feed"&#62;
&#60;/article&#62;
</code>
</pre>

<p>Now enter this js code inside "script" tags at the bottom of the body in your HTML document and enter your username:</p>
<pre>
<code>
/* ================ PICASA FEED ================ */
$('.picasa-feed').socialstream({
    socialnetwork: 'picasa',
    limit: 15,
    username: 'your_username_here'
})
</code>
</pre>

<h5>HTML Structure & jQuery code for Pinterest Feed</h5>

<pre>
<code>
&#60;article class="social-feed pinterest-feed"&#62;
&#60;/article&#62;
</code>
</pre>

<p>Now enter this js code inside "script" tags at the bottom of the body in your HTML document and enter your username:</p>
<pre>
<code>
/* ================ PINTEREST FEED ================ */
$('.pinterest-feed').socialstream({
    socialnetwork: 'pinterest',
    limit: 15,
    username: 'your_username_here'
})
</code>
</pre>

<h5>HTML Structure & jQuery code for Flickr Feed</h5>

<pre>
<code>
&#60;article class="social-feed flickr-feed"&#62;
&#60;/article&#62;
</code>
</pre>

<p>Now enter this js code inside "script" tags at the bottom of the body in your HTML document and enter your username:</p>
<pre>
<code>
/* ================ FLICKRFEED ================ */
$('.flickr-feed').socialstream({
    socialnetwork: 'flickr',
    limit: 15,
    username: 'your_username_here'
})
</code>
</pre>

<h5>HTML Structure & jQuery code for Dribbble Feed</h5>

<pre>
<code>
&#60;article class="social-feed dribbble-feed"&#62;
&#60;/article&#62;
</code>
</pre>

<p>Now enter this js code inside "script" tags at the bottom of the body in your HTML document and enter your username:</p>
<pre>
<code>
/* ================ Dribbble Feed ================ */
$('.dibbble-feed').socialstream({
    socialnetwork: 'dribbble',
    limit: 15,
    username: 'your_username_here'
})
</code>
</pre>

<h5>HTML Structure & jQuery code for Youtube Feed</h5>

<pre>
<code>
&#60;article class="social-feed youtube-feed"&#62;
&#60;/article&#62;
</code>
</pre>

<p>Now enter this js code inside "script" tags at the bottom of the body in your HTML document and enter your username and API key. API key can be generated on YouTube <a href="https://console.developers.google.com/">developers console</a>.
To protect your API key, create Browser key and use your domain as HTTP referrer.</p>
<pre>
<code>
/* ================ Youtube Feed ================ */
$('.youtube-feed').socialstream({
    socialnetwork: 'youtube',
    limit: 15,
    username: 'your_username_here',
    apikey: 'you_v3_api_key'
})
</code>
</pre>

<h5>HTML Structure & jQuery code for News Feed</h5>

<pre>
<code>
&#60;article class="social-feed newsfeed"&#62;
&#60;/article&#62;
</code>
</pre>

<p>Now enter this js code inside "script" tags at the bottom of the body in your HTML document and enter desired website link, for example:</p>
</p>
<pre>
<code>
/* ================ News Feed ================ */
$('.newsfeed').socialstream({
    socialnetwork: 'newsfeed',
    limit: 15,
    username: 'http://feeds.feedburner.com/webdesignerdepot?format=xml'
})
</code>
</pre>

<h3>CSS Styling</h3>
<p> When plugin loads, it makes one unordered list. Inside of it,
                                every image is one list item. To style it, simply refer to for example ".social-feed.flickr-feed li" in your css file and edit it the way 
                                you like. We also included demo with simple html and css styling for easier plugin understanding.</p>

<h3>Change Log</h3>
<p>v1.3</p>
<pre>
- Fixed Youtube stream - switched to API v3.
</pre>



