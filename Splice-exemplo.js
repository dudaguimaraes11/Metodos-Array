let playlist = ["Funk", "Hip-Hop", "Pop", "Rock", "Jazz", "Hino"]; 

console.log (`Antes do splice: ${playlist}.`); 

// Removendo 2 elementos a partir do índice 2 
//let elementosRemovidos = playlist.splice(2,2); 

//console.log (`Depois do splice: ${playlist}.`); 
//console.log (`Elementos removidos: ${elementosRemovidos}.`);

// Remover 2 elementos após o índice 3 
let desafio =  playlist.splice (3, 2); 

console.log (`Elementos removidos após o índice 3: ${desafio}.`); 
console.log (`Playlist após remover os dois elementos após o índice 3: ${playlist}`);

