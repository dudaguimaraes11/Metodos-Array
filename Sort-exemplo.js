// Ordena os elementos do array

let playlist = ["Funk", "Hip-Hop", "Pop", "Indie"];
let playlistOrdenada = playlist.sort(); 
console.log (`Playlist ordenada: ${playlistOrdenada}.`);

// Ordenar números 

let numeros = [10, 5, 100, 50, 1]; 

console.log (`Antes do sort: ${numeros}`); 

// Ordenando números de forma crescente

let numerosOrdenadosCrescentes = numeros.sort ((a,b) => a - b);
console.log (`Números em ordem crescente: ${numerosOrdenadosCrescentes}.`); 

// Ordenando os números de forma decrescente 
let numerosOrdenadosDecrescentes = numeros.sort ((a, b) => b - a); 
console.log (`Números em ordem decrescente: ${numerosOrdenadosDecrescentes}.`); 
