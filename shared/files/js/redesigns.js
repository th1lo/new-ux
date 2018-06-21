$.jribbble.setToken('aeebaf6335184fc31ad90ea0df87af78fde4d5d3bd1c6f0f47fa933ce0f4f8db');

$.jribbble.teams('uxking').shots({per_page: 28}).then(function(res) {
  var html = [];

  res.forEach(function(shot) {
    html.push('<div class="section cases">');
    html.push('<div class="container">');
    html.push('<div class="row">');
    html.push('<div class="one-half column">');
    html.push('<div class="info"><h4>' + shot.title + '</h4>');
    html.push('<p>' + shot.description + '<p></div>');
    html.push('</div>');
    html.push('<div class="one-half column">');
    html.push('<a href="' + shot.html_url + '" target="_blank">');
    html.push('<img src="' + shot.images.hidpi + '">');
    html.push('</a></div></div></div></div>');
  });

    $('.section.dribbble').html(html.join(''));
});
