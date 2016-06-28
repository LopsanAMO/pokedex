(function (){
    var app = angular.module('pokedex', []);

    app.controller('PokemonController', function(){
        this.pokemon = {
            id: 001,
            name: 'Bulbasaur',
            species: 'Seed Pokemon',
            type: [ 'Grass', 'Poison' ],
            height: '1.4',
            weight: '15.2 lbs',
            abilities: [ 'Overgrow', 'Chlorophyl' ]
        };
    });

})();
