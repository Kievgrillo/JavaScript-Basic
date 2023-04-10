let amigo = {
  nome: 'jose',
  peso: 85,
  idade: '29',
  sexo: 'M',
  engordar(p) {
    console.log('engordou');
    this.peso += p;
  },
};
amigo.engordar(10);
console.log(`${amigo.nome} pesa ${amigo.peso}kg`);
