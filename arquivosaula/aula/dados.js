dados.forEach(function(atleta) {
    console.log("Título:" + atleta.titulo);
    console.log("Descrição:" + atleta.descricao);
    console.log("Link:" + atleta.link);
    console.log("------------------------");
});


let dados = [
    {
        titulo: "Rayssa Leal",
        descricao: "Rayssa Leal, a Fadinha, é uma skatista brasileira",
        link: "https://pt.wikipedia.org/wiki/Rayssa_Leal",
        tags: "skate fada sk8",
    },
    {
        titulo: "Beatriz Souza",
        descricao: "Beatriz Souza é uma judoca brasileira que se destacou nas Olimpíadas",
        link: "https://pt.wikipedia.org/wiki/Beatriz_Souza",
        tags: "judô judo judoca judoka",
    },
    {
        titulo: "Rebeca Andrade",
        descricao: "Rebeca Andrade é uma ginasta brasileira que conquistou ouro",
        link: "https://pt.wikipedia.org/wiki/Rebeca_Andrade",
        tags: "ginástica ginsatica ouro",
    }
];