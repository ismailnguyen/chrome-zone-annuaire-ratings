var addRatings = function () {
	$('.cover_infos_title>a').each(function() {
		var title = $(this).text().split('<br>')[0];

		$.get('https://808x74wl7j.execute-api.us-east-1.amazonaws.com/dev/'+title).then(data =>
	{
			var rating = Math.round(data[0].statistics.userRating*10)/10;
			var stars = rating + "/5";
			var titleWithRating = title + '<br>' + stars;

			$(this).html(titleWithRating);
		})
	})
}

$(document).ready(function() {
	addRatings();
})