let amigo = {
    nome: 'José',
    sexo:'M',
    peso: 85.4,
    engordar(p){
        p = this.peso * (0.2) + this.peso;
        return p;
    }
}
console.log(`Meu amigo ${amigo.nome} é do sexo ${amigo.sexo} e pesa ${amigo.peso}. Ele precisa engordar mais 20% de seu peso atual.`);
console.log(`Engordando 20% de ${amigo.peso} ==> ${amigo.engordar()}`);