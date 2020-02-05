class NegociacaoView extends View {

    template(model) {
        return `
            <hr>
            <table class="table table-hover table-bordered">
                <thead class="bg-primary">
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                
                <tbody>
                    ${model.paraArray().map(negociacao => `
                        <tr class="animated fadeIn">
                            <td>${DateConverter.paraTexto(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                            <td>${negociacao.volume}</td>
                        </tr>
                    `).join('')}
                </tbody>
                
                <tfoot class="bg-info">
                    <tr>
                        <td colspan="3"><strong>Total</strong></td>
                        <td>${model.volumeTotal}</td>
                    </tr>
                </tfoot>
            </table>
        `;
    }
}