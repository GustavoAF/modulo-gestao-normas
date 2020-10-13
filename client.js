function consultarNorma() {
  $.ajax({
    url: "http://localhost:8080/api/normas/v1/normas/",
    type: "get",

    success: function(response) {
      preencherTabelaNorma(response);
    }
  });
}

function preencherTabelaNorma(normas) {
  $("#tabela tbody tr").remove();

  $.each(normas, function(i, normas) {
    var linha = $("<tr>");

    linha.append(
      $("<td>").text(normas.codigo),
      $("<td>").text(normas.descricao),
      $("<td>").text(normas.data_public),
      $("<td>").text(normas.status)

    );

    linha.appendTo("#tabela");
  });
}

function consultarDesc() {
  $.ajax({
    url: "http://localhost:8080/api/descricaonormas/v1/descricao-normas",
    type: "get",

    success: function(response) {
      preencherTabelaDesc(response);
    }
  });
}

function preencherTabelaDesc(normas) {
  $("#tabela tbody tr").remove();

  $.each(normas, function(i, desc) {
    var linha = $("<tr>");

    linha.append(
      $("<td>").text(desc.codigo_norma),
      $("<td>").text(desc.codigo_secundario),
      $("<td>").text(desc.dt_ini_valid),
      $("<td>").text(desc.titulo),
      $("<td>").text(desc.titulo_idi_sec),
      $("<td>").text(desc.nota_titulo),
      $("<td>").text(desc.comite),
      $("<td>").text(desc.num_pag),
      $("<td>").text(desc.objetivo)
    );

    linha.appendTo("#tabeladesc");
  });
}

$("#btn-consultar-normas").click(consultarNorma);
$("#btn-consultar-desc-normas").click(consultarDesc);
