/*
 GOOGLE APPS SCRIPT — RECEBER CADASTROS NA PLANILHA
1) Crie uma planilha Google Sheets.
2) Extensões > Apps Script.
3) Apague o conteúdo e cole este código.
4) Implante > Nova implantação > Aplicativo da Web.
5) Executar como: você. Quem tem acesso: qualquer pessoa.
6) Copie a URL /exec e coloque no arquivo index.html, substituindo:
   window.LUA_SCRIPT_URL = "";
7) Crie uma aba chamada "Cadastros" (o script também cria se necessário).

As respostas enviadas pelo formulário serão adicionadas à planilha.
*/

function doPost(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName("Cadastros");
  if (!sheet) sheet = ss.insertSheet("Cadastros");

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Data","Nome","Contato","E-mail","Cidade/Bairro","Instagram","Canal","Modalidade","Observações"]);
  }

  const d = JSON.parse(e.postData.contents);
  sheet.appendRow([
    d.data || new Date(),
    d.nome || "",
    d.contato || "",
    d.email || "",
    d.cidade || "",
    d.instagram || "",
    d.canal || "",
    d.modalidade || "",
    d.observacoes || ""
  ]);

  return ContentService.createTextOutput(JSON.stringify({ok:true}))
    .setMimeType(ContentService.MimeType.JSON);
}
