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