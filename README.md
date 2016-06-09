Social Photo Stream jQuery Plugin
=================================

jQuery plugin that displays latest images from 8 
social networks like Dribbble, DeviantArt, Picasa, Pinterest and more.

<p>Author: Pixel Industry<br />
Website - pixel-industry.com<br />
Licence - GPL</p>

<h3>Description</h3>
<p>
This simple jQuery plugin allows you to make photo stream
                        feed from 8 networks, including: Picasa, Pinterest, Dribbble,
                        Instagram, Deviantart, Youtube, Flickr and RSS feed.
                        You can use it on multiple places across your website. Only thing you
                        need is the username of the account from which you want images
                        to be shown and for social networks API key or Access Token.
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
   <li>News photo stream (RSS)</li>
</ul>

<h3>Installation</h3>
<p>This plugin needs only two JS files to work. You must include them at the bottom of the body in your HTML document. Those are:</p>
<ul>
<li>jQuery library</li>
<li>socialstream.jquery.js file which is included in the download package.</li>
</ul>

<h5>Deviantart Feed</h5>

<pre>
<code>
&#60;article class="social-feed deviant-feed"&#62;
&#60;/article&#62;
</code>
</pre>

<p>Now enter this js code inside "script" tags at the bottom of the body in your HTML document and enter your username:</p>
<pre>
<code>
/* ================ DEVIANTART FEED ================ */
$('.deviant-feed').socialstream({
    socialnetwork: 'deviantart',
    limit: 15,
    username: 'your_username_here'
})
</code>
</pre>
<br/><br/>
<h5>Instagram Feed</h5>

<pre>
<code>
&#60;article class="social-feed deviant-feed"&#62;
&#60;/article&#62;
</code>
</pre>

<p>Now enter this js code inside "script" tags at the bottom of the body in your HTML document and enter your username and Access Token:</p>
<pre>
<code>
/* ================ INSTAGRAM FEED ================ */
$('.instagram-feed').socialstream({
    socialnetwork: 'instagram',
    limit: 15,
    username: 'your_username_here',
    accessToken: ''
})
</code>
</pre>

<p>Due to recent API and Terms changes, Access Token is required to fetch images from Instagram.</p>
<p>More about process of generating Access Token can be found <a href="http://jelled.com/instagram/access-token">here</a>.</p>

<p><strong>Note</strong>
<br/>
In case you can't fetch images after generating Access Token, try generating Access Token with <strong>scope</strong> parameter set at the end of URL. Example:</p>
<pre>https://instagram.com/oauth/authorize/?client_id=[CLIENT_ID]&amp;redirect_uri=[REDIRECT_URI]&amp;response_type=token&scope=basic+public_content+follower_list+comments+relationships+likes</pre>
<br/><br/>
<h5>Picasa Feed</h5>

<pre>
<code>
&#60;article class="social-feed picasa-feed"&#62;
&#60;/article&#62;
</code>
</pre>

<p>Now enter this js code inside "script" tags at the bottom of the body in your HTML document and enter your username and Picasa Album ID:</p>
<pre>
<code>
/* ================ PICASA FEED ================ */
$('.picasa-feed').socialstream({
    socialnetwork: 'picasa',
    limit: 15,
    username: 'your_username_here',
    picasaAlbumId: ''
})
</code>
</pre>

<p>Parameter <strong>picasaAlbumId</strong> is new required parameter. To obtain Album ID please follow the guide:</p>
<ul>
<li>Click on your album</li>
<li>Click on RSS icon on the right size of the screen</li>
<li>Find section with lot of number that proceed after "albumid" in browser URL. 
Example (bold part):
<p>https://picasaweb.google.com/data/feed/base/user/12345678890/albumid/<strong>123456789031</strong>?alt=rss&kind=photo&hl=en_US</p>
</li>
</ul>
<br/><br/>
<h5>Pinterest Feed</h5>

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
<br/><br/>
<h5>Flickr Feed</h5>

<pre>
<code>
&#60;article class="social-feed flickr-feed"&#62;
&#60;/article&#62;
</code>
</pre>

<p>Now enter this js code inside "script" tags at the bottom of the body in your HTML document and enter your username:</p>
<pre>
<code>
/* ================ FLICKR FEED ================ */
$('.flickr-feed').socialstream({
    socialnetwork: 'flickr',
    limit: 15,
    username: 'your_username_here'
})
</code>
</pre>
<br/><br/>
<h5>Dribbble Feed</h5>

<pre>
<code>
&#60;article class="social-feed dribbble-feed"&#62;
&#60;/article&#62;
</code>
</pre>

<p>Now enter this js code inside "script" tags at the bottom of the body in your HTML document enter your username and Access Token:</p>
<pre>
<code>
/* ================ DRIBBBLE Feed ================ */
$('.dibbble-feed').socialstream({
    socialnetwork: 'dribbble',
    limit: 15,
    username: 'your_username_here',
    accessToken: ''
})
</code>
</pre>

<p>From version 1.4 Access Token is required to fetch images from Dribbble due to API changes.</p>
<p><strong>Generating Access Token</strong></p>
<ul>
<li>Navigate to <a href="https://dribbble.com/account/applications/new">Application Registration page</a>.</li>
<li>Fill-in all required fields, accept Dribble terms and submit the form.</li>
<li>At the bottom of new screen you will find <strong>Client Access Token</strong>. This is your Access Token.</li>
</ul>
<br/><br/>
<h5>Youtube Feed</h5>

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
/* ================ YOUTUBE FEED ================ */
$('.youtube-feed').socialstream({
    socialnetwork: 'youtube',
    limit: 15,
    username: 'your_username_here',
    apikey: 'you_v3_api_key'
})
</code>
</pre>
<br/><br/>
<h5>News (RSS) Feed</h5>

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
/* ================ NEWS FEED ================ */
$('.newsfeed').socialstream({
    socialnetwork: 'newsfeed',
    limit: 15,
    username: 'http://feeds.feedburner.com/webdesignerdepot?format=xml'
})
</code>
</pre>
<br/><br/>
<h3>CSS Styling</h3>
<p> When plugin loads, it makes one unordered list. Inside of it,
                                every image is one list item. To style it, simply refer to for example ".social-feed.flickr-feed li" in your css file and edit it the way 
                                you like. We also included demo with simple html and css styling for easier plugin understanding.</p>

<h3>Change Log</h3>
<p>v1.4</p>
<pre>
- Fixed Instagram feed that break because of Instagram API and terms changes
- Fixed Picasa feed. Album ID now must be set to fetch photos.
- Fixed Dribble feed. Access token is now necessary to fetch images. 
</pre>


<p>v1.3.1</p>
<pre>
- Image title sanitized for SEO purposes
</pre>

<p>v1.3</p>
<pre>
- Fixed Youtube stream - switched to API v3.
- Fixed issue with Smiley icons on DeviantArt stream.
</pre>



