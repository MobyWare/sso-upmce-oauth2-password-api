app.controller("GreetingApp", function($scope, $http){
        $scope.getGreeting = function(){
            $scope.greeting = "Click to get the greeting ...";
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