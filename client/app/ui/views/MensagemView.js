class MensagemView extends View {

    template(modal) {
        return modal.texto ? `<p class="alert alert-info animated bounceInLeft">${modal.texto}</p>` : `<p></p>`;
    }

}