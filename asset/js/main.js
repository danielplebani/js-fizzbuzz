/*
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
-per i multipli di 3 stampi “Fizz” al posto del numero;
-per i multipli di 5 stampi “Buzz”;
-per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*/

//creo un for che mi stamperà i numeri da 0 a 100 e lo stampo in pagina
const list = document.getElementsByTagName('ul');

for (let i = 0; i <= 100; i++) {
    const listItem = document.createElement('li');
    listItem.append(i);
    list.append(listItem);
  }
