export interface IProduct {
    name: string,
    stock: number,
    description: string
    price: number,
    img: string
}

const MockProduct: IProduct[] = [
    {
        name: "Água",
        stock: 1,
        description: "Garrafa 500ml",
        price: 3.50,
        img: "https://m.media-amazon.com/images/I/51BXP0n3dfL.jpg"
    },
    {
        name: "Coca",
        stock: 10,
        description: "Lata 350ml",
        price: 5,
        img: "https://www.contabilista.com.br/media/catalog/product/cache/e7bd975ee72b2e17c1d729a77564a9f3/0/7/076946A.jpg"
    },
    {
        name: "Chopp Bella Roma",
        stock: 7,
        description: "Lata 473ml",
        price: 5.98,
        img: "https://boa.vtexassets.com/arquivos/ids/574684-568-auto/Coquetel-Composto-Draft-Bella-Roma-473ml-Lata.webp?v=638549341377700000&quality=8"
    },
    {
        name: "Monster",
        stock: 5,
        description: "Lata 473ml",
        price: 7.98,
        img: "https://assets.instabuy.app.br/ib.item.image.large/l-6453874bb9474b478ac59d6ed8bffc67.jpeg"
    },
    {
        name: "Doritos",
        stock: 25,
        description: "Pacote 90g",
        price: 4.98,
        img: "https://lojanovamix.fbitsstatic.net/img/p/salgadinho-doritos-mini-22g-nacho-154418/350532.jpg?w=600&h=600&v=no-value"
    },
    {
        name: "Pringles",
        stock: 12,
        description: "Lata 103g",
        price: 10.99,
        img: "https://bistek.vtexassets.com/arquivos/ids/204072-800-800?v=638678930338070000&width=800&height=800&aspect=true"
    },
    {
        name: "Pão Forma",
        stock: 10,
        description: "Embalagem 303g",
        price: 10.99,
        img: "https://mambodelivery.vtexassets.com/arquivos/ids/216899/233586-Pao-de-Forma-Do-Forno-Original-Wickbold-500g.jpg?v=638580299250500000"
    },
]

export default MockProduct;