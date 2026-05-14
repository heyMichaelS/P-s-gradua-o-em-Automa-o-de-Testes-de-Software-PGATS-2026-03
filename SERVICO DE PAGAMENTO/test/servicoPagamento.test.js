import assert from 'node:assert/strict';
import ServicoPagamentoPage from './pageObjects/servicoPagamento.page.js';

describe('ServicoDePagamento', () => {
  it('deve realizar pagamento com categoria cara quando valor for maior que 100.00', () => {
    // arrange
    const servicoPagamentoPage = new ServicoPagamentoPage();

    // act
    const pagamento = servicoPagamentoPage.pagar(
      '34191.79001 01043.510047 91020.150008 6 97640000015000',
      'Mercado Sol Nascente',
      150.0
    );

    // assert
    assert.deepEqual(
      pagamento,
      servicoPagamentoPage.pagamentoEsperado(
        '34191.79001 01043.510047 91020.150008 6 97640000015000',
        'Mercado Sol Nascente',
        150.0,
        'cara'
      )
    );
  });

  it('deve realizar pagamento com categoria padrão quando valor for menor ou igual a 100.00', () => {
    // arrange
    const servicoPagamentoPage = new ServicoPagamentoPage();

    // act
    const pagamento = servicoPagamentoPage.pagar(
      '23793.38128 60007.827136 95000.063305 9 97640000010000',
      'Padaria Bela Massa',
      100.0
    );

    // assert
    assert.deepEqual(
      pagamento,
      servicoPagamentoPage.pagamentoEsperado(
        '23793.38128 60007.827136 95000.063305 9 97640000010000',
        'Padaria Bela Massa',
        100.0,
        'padrão'
      )
    );
  });

  it('deve consultar apenas o último pagamento realizado', () => {
    // arrange
    const servicoPagamentoPage = new ServicoPagamentoPage();

    servicoPagamentoPage.pagar(
      '00190.00009 01234.567890 12345.678901 1 97640000005000',
      'Farmacia Vida Leve',
      50.0
    );

    const ultimoPagamento = servicoPagamentoPage.pagar(
      '10499.99999 99999.999999 99999.999999 9 97640000025000',
      'Clínica Sorriso',
      250.0
    );

    // act
    const pagamentoConsultado = servicoPagamentoPage.consultarUltimoPagamento();

    // assert
    assert.deepEqual(pagamentoConsultado, ultimoPagamento);
  });

  it('deve lançar erro quando nenhum pagamento foi realizado', () => {
    // arrange
    const servicoPagamentoPage = new ServicoPagamentoPage();

    // act / assert
    assert.throws(
      () => servicoPagamentoPage.consultarUltimoPagamento(),
      {
        name: 'Error',
        message: 'Nenhum pagamento realizado.'
      }
    );
  });
});
