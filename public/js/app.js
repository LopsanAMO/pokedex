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
            abilities: [ 'Overgrow', 'Chlorophyl' ],
            stats: {
                hp: 45,
                attack: 49,
                defense: 49,
                "sp.atk": 65,
                "sp.def": 65,
                speed: 45,
                total: 318,
            },
            evolution: [ 'Bulbasaur', 'Ivysaur', 'Venusaur']
        };
    });

    app.controller('TabsController', function(){
        this.tab = 1;

        this.selectTab = function(tab){
            this.tab = tab;
        };
    });

    app.controller('CommentsController', function(){
        this.comments = [];
        this.show = false;

        this.toggle = function(){
            this.show = !this.show;
        };
    });

    app.filter('imageify', function () {
    return function (input, ext) {
      var url = "img/pokemones/" + input.toLowerCase() + "." +  ext || "jpg";
      return url;
    };
  });

})();
