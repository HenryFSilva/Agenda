class Agenda {
    constructor() {
        this.contatos = new Array();
    }
    #verificarContato(nome) {
        this.count = 0;
        if (this.contatos.forEach(c => {
            if (c.nome === nome) {
                this.count++;
            }
        }));
        return this.count === 0 ? false : true;
    }
    #verificaIndicePorNome(nome) {
        this.index = -1;
        if (this.contatos.forEach(c => {
            if (c.nome === nome) {
                this.index = this.contatos.findIndex(i => i.nome === nome);
            }
        }));
    }
    #verificaIndicePorTelefone(telefone) {
        this.index = -1;
        if (this.contatos.forEach(c => {
            if (c.telefone === telefone) {
                this.index = this.contatos.findIndex(i => i.telefone === telefone);
            }
        }));
    }
    adicionar(nome, telefone) {
        if (this.contatos.lenght === 0) {
            this.contatos.push({ nome, telefone });
            return `Contato adicionado com sucesso!`;
        }
        else {
            if (!this.#verificarContato(nome)) {
                this.contatos.push({ nome, telefone });
                return `Contato adicionado com sucesso!`;
            } else {
                return `Contato já existente!`;
            }
        }
    }
    editar(nomeAtual, novoNome, novoTel) {
        this.#verificaIndicePorNome(nomeAtual);
        if (this.index !== -1) {
            this.contatos[this.index] = { nome: novoNome, telefone: novoTel };
            return `Contato alterado com sucesso!`;
        }
        else {
            return `Contato não encontrado!`;
        }
    }
    remover(nome) {
        this.#verificaIndicePorNome(nome);
        if (this.index !== -1) {
            this.contatos.splice(this.index, 1);
            return `Contato excluido com sucesso!`;
        }
        else {
            return 'Contato não encontrado!';
        }
    }
    pesquisaPorNome(nome) {
        this.#verificaIndicePorNome(nome);
        if (this.index !== -1) {
            return `${this.contatos[this.index].nome} ${this.contatos[this.index].telefone}`
        }
        else {
            return 'Contato não encontrado!';
        }
    }
    pesquisarPorTelefone(telefone) {
        this.#verificaIndicePorTelefone(telefone);
        if (this.index !== -1) {
            return `${this.contatos[this.index].nome} ${this.contatos[this.index].telefone}`
        }
        else {
            return 'Contato não encontrado!';
        }
    }
    listarContatos() {
        this.res = '=====Resultado da Lista=====\n'
        this.contatos.forEach(c => {
            this.res += `${c.nome} ${c.telefone}\n`;
        });
        return this.res;
    }
}
let contato = new Agenda();

console.log(contato.adicionar('Joaquim', '123456789'));
console.log(contato.adicionar('Henry', '987654321'));
console.log(contato.adicionar('Marcio', '123498765'));
console.log(contato.adicionar('Joaquim', '123456789'));
console.log(contato);

console.log(contato.editar('Marcio', 'Caio', '222222222'));
console.log(contato);

console.log(contato.remover('Henry'));
console.log(contato);

console.log(contato.pesquisaPorNome('Caio'));
console.log(contato.pesquisarPorTelefone('123456789'));

console.log(contato.listarContatos());