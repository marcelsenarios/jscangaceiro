class NegociacaoController {

    constructor() {
        const $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputValor = $('#valor');
        this._inputQuantidade = $('#quantidade');
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacaoView("#negociacoes");
        this._negociacoesView.update(this._negociacoes);
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView("#mensagemView");
    }

    adiciona(event) {
        event.preventDefault();

        this._mensagem.texto = 'Negociacao adicionada com sucesso';
        this._negociacoes.adiciona(this._criaNegociacao());
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update(this._mensagem);
        //Em testes estou utilizando a chamada do metodo abaixo para preenchimento automatico, 
        //mas em produção deverá ser utilizado o metodo this._limpaFormulario();
        this.preencheDados();
    }

    _limpaFormulario () {
        this._inputData = '';
        this._inputValor = '';
        this._inputQuantidade = '';
        this._inputData.focus();
    }

    _criaNegociacao() {
        return new Negociacao(
            DateConverter.paraData(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );
    }

    preencheDados() {
        var dia = ('0' + Math.floor(Math.random() * 28+1)).slice(-2);
        var mes = ('0' + Math.floor(Math.random() * 12+1)).slice(-2);
    
        // Gera uma data simples, precisa de melhorias
        document.querySelector("#data").value = '2020-'+mes+'-'+dia;
        document.querySelector('#valor').value = Math.floor(Math.random() * 100 + 1);
        document.querySelector('#quantidade').value = Math.floor(Math.random() * 20 + 1);
    }
}