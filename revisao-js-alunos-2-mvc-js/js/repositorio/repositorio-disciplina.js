class DisciplinaRepositorio {
    constructor() {
        this._disciplinas = [];
    }

    inserir(disciplina) {
        this._disciplinas.push(disciplina);
        return disciplina;
    }

    remover(codigo) {
        const indxRemocao = this._disciplinas.indexOf(disciplina => disciplina.codigo === codigo);
        console.log(indxRemocao);
        
        this._disciplinas.splice(indxRemocao, 1);

    }

    listar() {
        return this._disciplinas;
    }

    buscarPorCodigo(codigo) {
        return this._disciplinas.filter(disciplina => disciplina.codigo === codigo);
    }

}