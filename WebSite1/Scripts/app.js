var app = angular.module("MyApp", []);
app.controller("HomeController", function ($scope) {
    $scope.ClanMembers = [
        { name: 'Ace', rank: 'Co-Leader' },
        { name: 'ima hood boi', rank: 'Co-Leader' },
        { name: 'OptikTank', rank: 'Co-Leader' },
        { name: 'tazer-face', rank: 'Clan noob' },
        { name: 'Voidptr', rank: 'elder' },
        { name: 'maryam', rank: 'Co-Leader' }];
});