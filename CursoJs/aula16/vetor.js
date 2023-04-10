let valores = [1, 3, 5, 6, 7, 8, 9, 98];

// for (let pos = 0; pos < valores.length; pos++) {
//   console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
// }

//utilizando o in dentro, var compostas e objtos
for (let pos in valores) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}
