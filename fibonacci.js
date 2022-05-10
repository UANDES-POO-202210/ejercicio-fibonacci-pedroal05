//a = prompt("Indique un numero: ");
//const n = parseInt(a);


function fibonacci(n) {
    let n1=0, n2=1;
    for (let i=1; i<= n; i++) {
        console.log(n1);
        next = n1 + n2;
        n1 = n2;
        n2 = next;
    }
return n1;
}
 console.log(fibonacci(5));