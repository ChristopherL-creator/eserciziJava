//scrivere un ciclo for che scriva a console i numeri da 10 a 50 

// for (let i = 10; i < 51; i++) {
//     console.log(i);
// } 

//scrivere un ciclo for che scriva a console i numeri pari da 8 a 128 

// for (let i = 8; i < 129; i++) { 
//     if (i % 2 === 0) {
//         console.log(i);
//     }  
// } 

// Oppure 

// for (let i = 8; i < 129; i = i + 2 { 
//     console.log(i); 
// } 

//scrivere un ciclo for che scriva a console i numeri da 100 a 0 

// for (let i = 100; i > -1; i--) {
//     console.log(i);   
// } 

//scrivere un ciclo for che sommi i numeri da 0 a 100 

// let sum = 0; 

// for (let i = 0; i < 101; i++) { 
//     sum = sum + i;
// } 

// alert(sum); 

//ripetere gli stessi esercizi con il ciclo while e do...while  

// While 1

let i = 10;

while (i < 51) {
    console.log(i);
    i++;
} 

// While 2 

// let i = 8;

// while (i < 129) { 
//     if (i % 2 === 0) {
//         console.log(i);
//     }  
//     i++;
// } 

// While 3 

// let i = 101;

// while (i > 0) { 
//     i--;
//     console.log(i);
// } 

// While 4 

// let i = 0; 
// let sum = 0;

// while (i < 101) { 
//     sum = sum + i; 
//     i++  
// } 

// alert(sum); 

// Do While 1 

// let i = 10;

// do {
//     console.log(i);
//      i++;
// } while (i < 51);
   
// Do While 2 

// let i = 8;

// do {
//     if (i % 2 === 0) {
//         console.log(i);
//     }  
//     i = i + 1;
// } while (i < 129);

// Do While 3 

// let i = 101;

// do {
//       i = i - 1;
//     console.log(i);
// } while (i > 0); 

// Do While 4 

// let i = 0; 
// let sum = 0; 

// do {
//     sum = sum + i; 
//     i ++;  
// } while (i < 101); 

// alert(sum);

//scivere un ciclo while che si interrompa quando l'utente scrive 'esci'
//nella finestra di dialogo 

// const exit = 'esci';

// while (true) {
//     const userInput = prompt("Insert input");

//     const userInputExit = userInput === exit;

//     if (userInputExit) {
//         alert("Heading out...");
//         break;
//     } 
// }

