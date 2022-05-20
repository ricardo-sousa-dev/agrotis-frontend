const dateMask = (value) => {
  if (typeof value === 'string') {
    return value
      .replace(/\D+/g, '') // não deixa ser digitado nenhuma letra
      .replace(/(\d{2})(\d)/, '$1/$2') // captura 2 grupos de número o primeiro com 2 digitos e o segundo de com 2 digitos, apos capturar o primeiro grupo ele adiciona uma barra antes do segundo grupo de número
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{4})\d+?$/, '$1'); // captura os dois últimos 4 números.
  }
};
export default dateMask;

// Referencies:
// https://valchan.com.br/mask-input/
// https://hkotsubo.github.io/blog/2019-04-05/posso-usar-regex-para-validar-datas#:~:text=A%20primeira%20regex%20verifica%20datas,1%2F1%2F2019%20).
