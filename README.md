# Portal da Revendedora Lua — versão final

## O que já funciona
- Site responsivo para celular e computador.
- Cadastro de revendedoras.
- Respostas armazenadas no navegador (localStorage).
- Exportação das respostas para CSV.
- Registro local de vendas.
- Calculadora de comissão:
  - até R$ 299: 20%
  - R$ 300 a R$ 499: 25%
  - R$ 500 a R$ 799: 30%
  - acima de R$ 800: 35%
- Área de edição de marca, frase e WhatsApp.
- Painel administrativo demonstrativo.

## Receber cadastros por e-mail — já configurado
O formulário do site foi configurado para encaminhar os cadastros para:

**lembrancasdaluapersonalizados@gmail.com**

O envio utiliza o FormSubmit, um serviço de formulário que encaminha submissões para o e-mail informado e não exige PHP ou outro backend no site. No primeiro envio, o FormSubmit solicita a confirmação do endereço por e-mail; depois da confirmação, os próximos cadastros serão encaminhados normalmente. urlDocumentação do FormSubmithttps://formsubmit.co/

### Se quiser também uma planilha
1. Crie uma planilha no Google Sheets.
2. Vá em **Extensões > Apps Script**.
3. Cole o conteúdo de `google-apps-script.gs`.
4. Salve.
5. Clique em **Implantar > Nova implantação > Aplicativo da Web**.
6. Execute como sua conta e permita acesso de qualquer pessoa.
7. Copie a URL terminada em `/exec`.
8. Abra `index.html` e procure `window.LUA_SCRIPT_URL`.
9. Logo antes do restante do JavaScript, adicione:
   `window.LUA_SCRIPT_URL = "COLE_AQUI_A_URL_DO_APLICATIVO";`
10. Publique o `index.html` em uma hospedagem de site.

Depois disso, cada cadastro enviado pelo formulário poderá ser gravado na aba **Cadastros** da sua planilha.

## Importante
A área de login ainda é demonstrativa. Para proteger contas, senhas, estoque, comissões e dados de revendedoras de verdade, é necessário um sistema com autenticação e banco de dados. Não coloque senhas reais nesta versão estática.

## Onde editar
Abra `index.html` em um editor de texto/código. Os textos, cores, regras, percentuais, kits e campos podem ser alterados diretamente no HTML.

O painel "Admin" permite alterações simples no próprio navegador, mas essas alterações são locais. Para uma equipe inteira editar os mesmos dados, será necessário um banco de dados/CMS.


## Edição
No arquivo `index.html` você pode alterar textos, kits, valores, percentuais, benefícios, regras e campos do formulário.
O painel "Admin" também permite alterar alguns dados básicos localmente.

## Observação sobre hospedagem
O envio por FormSubmit deve ser usado em um site publicado/servido na web; abrir o HTML diretamente como arquivo local pode não funcionar para o envio. 
