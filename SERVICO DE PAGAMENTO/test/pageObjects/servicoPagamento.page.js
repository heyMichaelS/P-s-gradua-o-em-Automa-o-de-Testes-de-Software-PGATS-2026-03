import ServicoDePagamento from '../../src/servicoPagamento.js';

export default class ServicoPagamentoPage {
  constructor() {
    this.servicoDePagamento = new ServicoDePagamento();
  }

  pagar(codigoBarras, empresa, valor) {
    return this.servicoDePagamento.pagar(codigoBarras, empresa, valor);
  }

  consultarUltimoPagamento() {
    return this.servicoDePagamento.consultarUltimoPagamento();
  }

  pagamentoEsperado(codigoBarras, empresa, valor, categoria) {
    return {
      codigoBarras,
      empresa,
      valor,
      categoria
    };
  }
}
