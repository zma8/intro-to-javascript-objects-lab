const pokemon = require('./data.js');

const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
  
}
console.dir(pokemon, { maxArrayLength: null });
console.log(pokemon[59]);
console.log(game);

//ex3
game.difficulty='hard';
console.log(game);

//ex4
let starterPokemon;
for(let i=0;i<pokemon.length;i++){
    if(pokemon[i].starter){
        starterPokemon=pokemon[i];
        break;
    }
}

game.party.push(starterPokemon);

console.log(game);

//ex5
let count=0;

for(let y=0;y<pokemon.length;y++){
    if (count===3){
        break;
    }
    if (pokemon[y].type==='dragon'){
        game.party.push(pokemon[y]);
        count++;
    }
    else if(pokemon[y].hp===80){
        game.party.push(pokemon[y]);
        count++;
    }
    else if(pokemon[y].hp===35){
        game.party.push(pokemon[y]);
        count++;
    }

}
console.log(game.party);

//ex6

for (let c=0;c<game.gyms.length;c++){
    if(game.gyms[c].difficulty<3){
        game.gyms[c].completed=true;
    }
}
console.log(game.gyms);

//ex7
const evoulutions={
    1 :2,
    25:26
};

for(let e=0;e<game.party.at.length;e++){

    const currentPokemon=game.party[e];
    if (currentPokemon.starter){
        const evolvedNumber=evoulutions[currentPokemon.number];

        let evolvedPokemon=null;
        for (let j=0;j<pokemon.length;j++){
            if(pokemon[j].number===evolvedNumber){
                evolvedPokemon=pokemon[j];
                break;
            }
        }
        if (evolvedPokemon){
            game.party.splice(e,1,evolvedPokemon);
            console.log(`${currentPokemon.name} evolved into ${evolvedPokemon.name}`);
        }
    }
}
//ex8
for (let i=0;i<game.party.length;i++){
    console.log(game.party[i].name);
}

//ex9 

for(let i=0;i<pokemon.length;i++){
    if(pokemon[i].starter){
        console.log(pokemon[i]);
    }

}
 
//ex10
game.catchPokemon=function(pokemonObj){
    game.party.push(pokemonObj);
}

let pokemonC=pokemon[77];
game.catchPokemon(pokemonC);

console.log(game.party);

//ex11
game.catchPokemons=function(pokemonObj){
    game.party.push(pokemonObj);

for(let u=0;u<game.items.length;u++){
    if(this.items[u].name==='pokeball'){
        this.items[u].quantity--;
        break;
    }
}
}
let pokemoom;
for(let i=0;i<pokemon.length;i++){
    if(pokemon[i].number===3){
        pokemoom=pokemon[i];
        break;
    }
}
game.catchPokemons(pokemoom);

console.log(game.items);
let pokemooms;
for(let i=0;i<pokemon.length;i++){
    if(pokemon[i].number===7){
        pokemooms=pokemon[i];
        break;
    }
}
game.catchPokemons(pokemooms);
console.log(game.items);

//ex12
for (let c=0;c<game.gyms.length;c++){
    if(game.gyms[c].difficulty<6){
        game.gyms[c].completed=true;
    }
}
console.log(game.gyms);

//ex13
game.gymStatus=function(){
const gymTally={
    completed:0,
    incomplete:0
};

for(let i=0;i<this.gyms.length;i++){
    if(this.gyms[i].completed){
        gymTally.completed++;
    }
    else {
        gymTally.incomplete++;
    }
}
console.log(gymTally);
}

game.gymStatus();

//ex14

game.partyCount=function(){
    return this.party.length;
}
console.log('number of pokemons in the party ' ,game.partyCount());

//ex15 
for (let c=0;c<game.gyms.length;c++){
    if(game.gyms[c].difficulty<8){
        game.gyms[c].completed=true;
    }
}
console.log(game.gyms);
game.gymStatus();

//ex16
console.log(game);