class DisciplinaRepositorio {
    constructor() {
        this._disciplinas = [];
    }

    inserir(disciplina) {
        this._disciplinas.push(disciplina);
        return disciplina;
    }

    remover(codigo) {
        const Removert = this._disciplinas.indexOf(disciplina => disciplina.codigo === codigo);
        console.log(Removert);

        this._disciplinas.splice(Removert, 1);

    }

    listar() {
        return this._disciplinas;
    }

    buscarPorCodigo(codigo) {
        return this._disciplinas.filter(disciplina => disciplina.codigo === codigo);
    }

}