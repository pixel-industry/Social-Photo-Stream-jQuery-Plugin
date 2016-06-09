/* 
 * Widgets for Social Network photo stream.
 * 
 * Author: Pixel Industry
 * Website: http://pixel-industry.com
 * Version: 1.4
 *
 */


(function ($) {
    $.fn.socialstream = function (options) {
        var defaults = {
            socialnetwork: 'flickr',
            username: 'pixel-industry',
            limit: 6,
            overlay: true,
            apikey: false,
            accessToken: '',
            picasaAlbumId: ''
        };
        var options = $.extend(defaults, options);

        return this.each(function () {
            var object = $(this);
            switch (options.socialnetwork) {

                case 'flickr':
                    object.append("<ul class=\"flickr-list\"></ul>")
                    $.getJSON("https://api.flickr.com/services/rest/?method=flickr.people.findByUsername&username=" + options.username + "&format=json&api_key=32ff8e5ef78ef2f44e6a1be3dbcf0617&jsoncallback=?", function (data) {
                        var user_id = data.user.nsid;
                        $.getJSON("https://api.flickr.com/services/rest/?method=flickr.photos.search&user_id=" + user_id + "&format=json&api_key=85145f20ba1864d8ff559a3971a0a033&per_page=" + options.limit + "&page=1&extras=url_sq&jsoncallback=?", function (data) {
                            $.each(data.photos.photo, function (num, photo) {
                                var photo_author = photo.owner;
                                var photo_title = photo.title;
                                var photo_src = photo.url_sq;
                                var photo_id = photo.id;
                                var photo_url = "https://www.flickr.com/photos/" + photo_author + "/" + photo_id;
                                var photo_container = $('<img/>').attr({
                                    src: photo_src,
                                    alt: photo_title
                                });
                                var url_container = $('<a/>').attr({
                                    href: photo_url,
                                    target: '_blank',
                                    title: photo_title
                                });

                                var tmp = $(url_container).append(photo_container);
                                if (options.overlay) {
                                    var overlay_div = $('<div/>').addClass('img-overlay');
                                    $(url_container).append(overlay_div);
                                }
                                var li = $('<li/>').append(tmp);
                                $("ul", object).append(li);
                            })
                        });
                    });
                    break;
                case 'pinterest':
                    var url = 'http://pinterest.com/' + options.username + '/feed.rss'
                    var api = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q=" + encodeURIComponent(url) + "&num=" + options.limit + "&output=json_xml";

                    // Send request
                    $.getJSON(api, function (data) {
                        if (data.responseStatus == 200) {
                            var photofeed = data.responseData.feed;
                            var overlay_div = "";
                            if (!photofeed) {
                                return false;
                            }
                            var html_code = '<ul class=\"pinterest-list\">';

                            for (var i = 0; i < photofeed.entries.length; i++) {
                                var entry = photofeed.entries[i];
                                var $container = $("<div></div>");
                                $container.append(entry.content);
                                var url = "http://www.pinterest.com" + $container.find('a').attr('href');
                                var photo_url = $container.find('img').attr('src');
                                var photo_title = $container.find('p:nth-child(2)').html();
                                if (options.overlay) {
                                    var overlay_div = '<div class="img-overlay"></div>';
                                }

                                html_code += '<li><a target="_blank" href="' + url + '" title="' + photo_title + '"><img src="' + photo_url + '"/>' + overlay_div + '</a></li>'
                            }
                            html_code += '</ul>';

                            $(object).append(html_code);

                        }
                    });
                    break;
                case 'instagram':
                    object.append("<ul class=\"instagram-list\"></ul>")

                    // check if access token is set
                    if ((typeof (options.accessToken) != "undefined") && options.accessToken != "") {
                        var access_token = options.accessToken;
                    } else {
                        console.warn("Instagram Access Token is not set. Please enter it in plugin init call.");
                        return;
                    }

                    url = "https://api.instagram.com/v1/users/search?q=" + options.username + "&access_token=" + access_token + "&count=1&callback=?";
                    $.getJSON(url, function (data) {

                        $.each(data.data, function (i, shot) {
                            var instagram_username = shot.username;
                            if (instagram_username == options.username) {
                                var user_id = shot.id;

                                if (user_id != "") {
                                    url = "https://api.instagram.com/v1/users/" + user_id + "/media/recent/?access_token=" + access_token + "&count=" + options.limit + "&callback=?";
                                    $.getJSON(url, function (data) {
                                        $.each(data.data, function (i, shot) {
                                            var photo_src = shot.images.thumbnail.url;
                                            var photo_url = shot.link;

                                            var photo_title = "";
                                            if (shot.caption != null) {
                                                photo_title = shot.caption.text;
                                            }

                                            var photo_container = $('<img/>').attr({
                                                src: photo_src,
                                                alt: photo_title
                                            });
                                            var url_container = $('<a/>').attr({
                                                href: photo_url,
                                                target: '_blank',
                                                title: photo_title
                                            });
                                            var tmp = $(url_container).append(photo_container);
                                            if (options.overlay) {
                                                var overlay_div = $('<div/>').addClass('img-overlay');
                                                $(url_container).append(overlay_div);
                                            }
                                            var li = $('<li/>').append(tmp);
                                            $("ul", object).append(li);

                                        });
                                    });
                                }
                            }
                        });
                    });
                    break;
                case 'dribbble':
                    object.append("<ul class=\"dribbble-list\"></ul>")

                    // check if access token is set
                    if ((typeof (options.accessToken) != "undefined") && options.accessToken != "") {
                        var access_token = options.accessToken;
                    } else {
                        console.warn("Dribbble Access Token is not set. Please enter it in plugin init call.");
                        return;
                    }

                    $.getJSON("https://api.dribbble.com/v1/users/" + options.username + "/shots?access_token=" + access_token + "&callback=?", function (data) {
                        $.each(data.data, function (num, shot) {
                            if (num < options.limit) {
                                var photo_title = shot.title;
                                var photo_container = $('<img/>').attr({
                                    src: shot.images.teaser,
                                    alt: photo_title
                                });
                                var url_container = $('<a/>').attr({
                                    href: shot.html_url,
                                    target: '_blank',
                                    title: photo_title
                                });
                                var tmp = $(url_container).append(photo_container);
                                if (options.overlay) {
                                    var overlay_div = $('<div/>').addClass('img-overlay');
                                    $(url_container).append(overlay_div);
                                }
                                var li = $('<li/>').append(tmp);
                                $("ul", object).append(li);
                            }
                        });

                    });
                    break;
                case 'deviantart':
                    var url = 'http://backend.deviantart.com/rss.xml?type=deviation&q=by%3A' + options.username + '+sort%3Atime+meta%3Aall';
                    var api = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q=" + encodeURIComponent(url) + "&num=" + options.limit + "&output=json_xml";

                    $.getJSON(api, function (data) {
                        if (data.responseStatus == 200) {
                            var photofeed = data.responseData.feed;
                            var overlay_div = "";
                            if (!photofeed) {
                                return false;

                            }
                            var html_code = '<ul class=\"deviantart-list\">';

                            for (var i = 0; i < photofeed.entries.length; i++) {
                                var entry = photofeed.entries[i];
                                var $container = $("<div></div>");
                                $container.append(entry.content);
                                var url = entry.link;
                                var photo_url = $container.find('img').attr('src');

                                // ignore smiley images
                                if (photo_url.indexOf("smile.gif") >= 0) {
                                    continue;
                                }

                                var photo_title = entry.title.replace(/.jpg/g, "").replace(/-/g, " ").replace(/_/g, " ");
                                if (options.overlay) {
                                    var overlay_div = '<div class="img-overlay"></div>';
                                }

                                html_code += '<li><a target="_blank" href="' + url + '" title="' + photo_title + '"><img src="' + photo_url + '"/>' + overlay_div + '</a></li>'
                            }
                            html_code += '</ul>';

                            $(object).append(html_code);

                        }
                    });

                    break;
                case 'picasa':
                    var url = 'https://picasaweb.google.com/data/feed/base/user/' + options.username + '/album/' + options.picasaAlbumId + '?kind=photo&access=public&alt=json-in-script&imgmax=' + options.limit + '&callback=?';

                    $.getJSON(url, function (data) {
                        if (data.feed.entry.length > 0) {

                            var photofeed = data.feed.entry;
                            var overlay_div = "";

                            var html_code = '<ul class=\"picasa-list\">';

                            $.each(photofeed, function (i, pic) {
                                var thumb = pic.media$group.media$thumbnail[2].url;
                                var desc = pic.media$group.media$description.$t;
                                var title = pic.media$group.media$title.$t;

                                var url = pic.link[1].href;
                                var photo_title = title.replace(/.jpg/g, "").replace(/.JPG/g, "").replace(/-/g, " ").replace(/_/g, " ");
                                if (options.overlay) {
                                    var overlay_div = '<div class="img-overlay"></div>';
                                }

                                html_code += '<li><a target="_blank" href="' + url + '" title="' + photo_title + '"><img src="' + thumb + '"/>' + overlay_div + '</a></li>'
                            });

                            for (var i = 0; i < photofeed; i++) {
                                var entry = photofeed[i];
                                var $container = $("<div></div>");
                                $container.append(entry.content);
                                var url = entry.link;
                                var photo_url = $container.find('img').attr('src');
                                var photo_title = entry.title.replace(/.jpg/g, "").replace(/-/g, " ").replace(/_/g, " ");
                                if (options.overlay) {
                                    var overlay_div = '<div class="img-overlay"></div>';
                                }

                                html_code += '<li><a target="_blank" href="' + url + '" title="' + photo_title + '"><img src="' + photo_url + '"/>' + overlay_div + '</a></li>'
                            }
                            html_code += '</ul>';

                            $(object).append(html_code);
                        }
                    });
                    break;
                case 'youtube':
                    var pid;
                    if (options.apikey) {

                        // Get Uploads Playlist
                        $.get(
                                "https://www.googleapis.com/youtube/v3/channels", {
                                    part: 'contentDetails',
                                    id: options.username,
                                    key: options.apikey
                                },
                        function (data) {

                            $.each(data.items, function (i, item) {
                                //playlist id
                                pid = item.contentDetails.relatedPlaylists.uploads;
                                youtubeGetVids(pid);
                            });

                        }
                        );

                    }

                    //Get Videos
                    function youtubeGetVids(pid) {
                        $.get(
                                "https://www.googleapis.com/youtube/v3/playlistItems", {
                                    part: 'snippet',
                                    maxResults: options.limit,
                                    playlistId: pid,
                                    key: options.apikey
                                },
                        function (data) {
                            var results;

                            var html_code = '<ul class=\"youtube-list\">';

                            // loop through videos
                            $.each(data.items, function (i, item) {

                                var photofeed = item.snippet.thumbnails.default.url;
                                var overlay_div = "";
                                if (!photofeed) {
                                    return false;
                                }

                                // create container
                                var $container = $("<div></div>");

                                // get image url
                                var url = 'https://www.youtube.com/watch?v=' + item.snippet.resourceId.videoId;

                                // video title
                                var photo_title = item.snippet.title;
                                if (options.overlay) {
                                    var overlay_div = '<div class="img-overlay"></div>';
                                }

                                // create html
                                html_code += '<li><a target="_blank" href="' + url + '" title="' + photo_title + '"><img src="' + photofeed + '"/>' + overlay_div + '</a></li>'

                            });

                            html_code += '</ul>';

                            // append html
                            $(object).append(html_code);
                        }
                        );
                    }




                    break;

                case 'newsfeed':
                    var api = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q=" + encodeURIComponent(options.username) + "&num=" + options.limit + "&output=json_xml";

                    $.getJSON(api, function (data) {
                        if (data.responseStatus == 200) {
                            var photofeed = data.responseData.feed;
                            var overlay_div = "";
                            if (!photofeed) {
                                return false;
                            }
                            var html_code = '<ul class=\"social-feed\">';

                            for (var i = 0; i < photofeed.entries.length; i++) {
                                var entry = photofeed.entries[i];
                                var $container = $("<div></div>");
                                $container.append(entry.content);
                                var url = entry.link;
                                var photo_url = $container.find('img').attr('src');
                                var photo_title = entry.title.replace(/.jpg/g, "").replace(/-/g, " ").replace(/_/g, " ");
                                if (options.overlay) {
                                    var overlay_div = '<div class="img-overlay"></div>';
                                }

                                html_code += '<li><a target="_blank" href="' + url + '" title="' + photo_title + '"><img src="' + photo_url + '"/>' + overlay_div + '</a></li>'
                            }
                            html_code += '</ul>';

                            $(object).append(html_code);
                        }
                    });
                    break;
            }
        });
    };
})(jQuery);