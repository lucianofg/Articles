import imagem from '../resources/temp_image_reading.png'
const article = {
    id: 12,
    img: imagem,
    author: {
        name: "Autor",
        work: "Trabalho",
        img: imagem,

    },
    title: "What was the trend in 2020 and you didn’t use it",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\nLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\nLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.".split("\n"),
    tags: ["tag1", "tag2"],
    temps: 4,
    price: "10.99",
}

export function getArticle(id) {
    return article
}

export function getListOfTopArticles() {
    return [article, article, article, article]
}

export function getArticlesThatYouWrote() {
    const headers = ["Article", "Publisher", "Publication Date", "Value"];
    const articles = [
        {
            article: "What was the trend in 2020 and you didn’t use it",
            publisher: "Article",
            publication_date: "12/12/2022",
            value: "9.99",
        },
        {
            article: "What was the trend in 2020 and you didn’t use it",
            publisher: "Article",
            publication_date: "12/12/2022",
            value: "9.99",
        },
        {
            article: "What was the trend in 2020 and you didn’t use it",
            publisher: "Article",
            publication_date: "12/12/2022",
            value: "9.99",
        }
    ]
    return [ headers, articles ]
}

export function getYourTopArticles() {
    const headers = ["Article", "Publisher", "Sales", "Value"];
    const articles = [{
        article: "Nome",
        publisher: "Article",
        sales: 100,
        value: "10.90",
    }, {
        article: "Nome",
        publisher: "Article",
        sales: 100,
        value: "10.90",
    }]
    return [headers, articles]
}