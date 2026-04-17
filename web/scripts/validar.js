function validar() {
    let nome = frmProduto.nome.value
    let fab = frmProduto.fab.value
    let categoria = frmProduto.categoria.value
    let faixa = frmProduto.faixa.value
    let preco = frmProduto.preco.value
    let precoCampo = form.preco;
    let faixaCampo = form.faixa;

    let precoLimpo = precoCampo.value.replace(/[R$\s.]/g, '').replace(',', '.');
    precoCampo.value = precoLimpo;

    let faixaLimpa = faixaCampo.value.replace(/\D/g, '');
    faixaCampo.value = faixaLimpa;

    if (nome === "") {
        alert("Preencha o campo 'Nome'")
        frmContato.nome.focus
    } 
    
    else if (fab === "") {
        alert("Preencha o campo 'Data de Fabricação'")
        frmProduto.fab.value
    } 
    
    else if (categoria === "") {
        alert("Preencha o campo 'Categoria'")
        frmProduto.cadastro.value
    } 
    
    else if (faixa === "") {
        alert("Preencha o campo 'Faixa Etária'")
        frmProduto.faixa.value
    } 
    
    else if (preco === "") {
        alert("Preencha o campo 'Preço'")
        frmProduto.preco.value
    } 
    
    else {
        document.forms["frmProduto"].submit()
    }
}