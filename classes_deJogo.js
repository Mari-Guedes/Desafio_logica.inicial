class Heroi { // para representar um herói no jogo
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacarInimigo() { // função para atacar inimigos
    if (this.tipo === "mago") {
      console.log(`O ${this.tipo} atacou usando magia`);
    } else if (this.tipo === "guerreiro") {
      console.log(`O ${this.tipo} atacou usando espada`);
    } else if (this.tipo === "monge") {
      console.log(`O ${this.tipo} atacou usando artes marciais`);
    } else if (this.tipo === "ninja") {
      console.log(`O ${this.tipo} atacou usando shuriken`);
    } else {
      console.log(`O ${this.tipo} atacou de forma desconhecida`);
    }
  }
}

const heroi1 = new Heroi("Amanda", 25, "guerreiro"); // Criando herói
const heroi2 = new Heroi("Pedro", 38, "mago");
const heroi3 = new Heroi("Lucas", 100, "monge");
const heroi4 = new Heroi("Sofia", 29, "cultista");

heroi1.atacarInimigo(); // Chamando função de ataque
heroi2.atacarInimigo();
heroi3.atacarInimigo();
heroi4.atacarInimigo();