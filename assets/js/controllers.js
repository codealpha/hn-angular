
// Adds filters to app
angular.module('hn', ['filters']);


// Controller for displaying top 30 HN Posts

function TopListCtrl($scope, $http) {
  $http.jsonp('http://api.ihackernews.com/page?format=jsonp&callback=JSON_CALLBACK').success(function(data) {
    $scope.posts = data;
  });
}



// This filters module takes a URL and splits it up into its hostname

angular.module('filters', []).
    filter('shortURL', function () {
        return function (text, length, end) {

        	var getLocation = function(href) {
			    var l = document.createElement("a");
			    l.href = href;
			    return l;
			};

        	var url = getLocation(text);

            return url.hostname

        };
    });