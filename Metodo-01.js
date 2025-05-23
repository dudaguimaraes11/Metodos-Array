let playlist = ["Pop", "MPB", "Funk"]; 

console.log (`Antes do Push: ${playlist}.`); 

// Adicionando uma nova música à playlist

playlist.push (`Trap`);
console.log (`Depois do push: ${playlist}.`); 

// Usando o POP para remover o último

console.log (`Antes do pop: ${playlist}.`)

// Removendo a última música 

playlist.pop (`Trap`); 
console.log (`Depois do pop: ${playlist}.`)

// Remover mais uma 

let segundaMusicaRemovida = playlist.pop();

console.log (`Após a segunda música removida: ${playlist}.`)
console.log (`A segunda música removida: ${segundaMusicaRemovida}.`)

// Removendo a primeira músic da playlist
let musicaRemovida = playlist.shift(); 

console.log (`Depois do shift: ${playlist}.`);
console.log (`Música Removida: ${musicaRemovida}.`);

// Adicionando uma nova música no ínicio da Playlist
console.log (`Antes do Unshift: ${playlist}.`); 

playlist.unshift (`Rock`); 

console.log (`Depois do Unshift: ${playlist}.`);
