function parimpar(n) {
  if (n % 2 == 0) {
    return 'par';
  } else {
    return 'impar';
  }
}

console.log(parimpar(4));

//recursividade
function fatorial() {
  if (n == 1) {
    return 1;
  } else {
    return n * fatorial(n - 1);
  }
}

console.log(fatorial(5));
