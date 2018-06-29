module.exports = function (pessoaservice) {

    this.novo = {};
    
    this.salvapessoa = () => {
        pessoaservice.salvapessoa(this.novo).then((ret) => {
            alert("Pessoa salvo com id " + ret.data);
            window.location.href="#!/"
        });
    };
}