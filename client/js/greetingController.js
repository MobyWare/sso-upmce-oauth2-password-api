app.controller("GreetingController", function($scope, $http){
    $scope.greeting = {content:"Click to get the greeting ..."};
    $scope.getGreeting = function(){            
        $http.get("http://localhost:8080/greeting")
        .then(
            function(response) {
                $scope.greeting = response.data;
            },
            function(){
                $scope.Greeting = 'Oops, something went wrong!!!';
            }
        );
    }
}
);

app.controller("LoginController", function($scope) {
 
    $scope.login = function() {
        window.location.href = 
        "https://localhost:9443/oauth2/authorize?" 
        + "response_type=id_token"
        + '&scope=openid'
        + '&nonce=abc'
        + '&client_id=' + client_id 
        + '&redirect_uri=' + redirect_uri;
    }
 
});

app.controller("SecureController", function($scope) {
 
    $scope.accessToken = JSON.parse(window.localStorage.getItem("auth_token")).oauth.access_token;
 
});