/*
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
-per i multipli di 3 stampi “Fizz” al posto del numero;
-per i multipli di 5 stampi “Buzz”;
-per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*/

//creo un for che mi stamperà i numeri da 0 a 100 e lo stampo in pagina
const list = document.getElementById('listaNumeri');

for (let i = 0; i <= 100; i++) {
    const listItem = document.createElement('li');

    //i multipli di 3 e 5 li trasformo in fizzbuzz,i multipli di 3 li trasformo in fizz,i multipli di 5 li trasformo in buzz e li stampo tutti in pagina
    if (i % 3 === 0 && i % 5 === 0 && i !== 0) {
        listItem.append('fizzbuzz');
        listItem.style.backgroundColor = 'green';
        listItem.style.boxShadow = '5px 5px 10px green';
    } else if (i % 3 === 0 && i !== 0) {
        listItem.append('fizz');
        listItem.style.backgroundColor = 'pink';
        listItem.style.boxShadow = '5px 5px 10px pink';
    } else if (i % 5 === 0 && i !== 0) {
        listItem.append('buzz');
        listItem.style.backgroundColor = 'red';
        listItem.style.boxShadow = '5px 5px 10px red';
    } else {
        listItem.append(i);
    }
    
    list.append(listItem);
}