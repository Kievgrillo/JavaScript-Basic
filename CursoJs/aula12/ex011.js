var agora = new Date();
var hora = agora.getHours();

console.log(`Agora é exatamente ${hora} hora.`);
if (hora >= 6 && hora <= 11) {
  console.log('Bom Dia');
} else if (hora >= 12 && hora < 18) {
  console.log('Boa tarde');
} else if (hora >= 19 && hora <= 23) {
  console.log('Boa noite');
}
if (hora >= 00 && hora <= 5) {
  console.log('Boa madrugada');
}
