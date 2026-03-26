export interface IFood {
    name: string,
    description: string
    price: number,
    img: string
}

const MockFood: IFood[] = [
    {
        name: "Strogonoff de frango",
        description: "Garrafa 500ml",
        price: 33.50,
        img: "https://www.unileverfoodsolutions.com.br/dam/global-ufs/mcos/SLA/calcmenu/recipes/BR-recipes/chicken-&-other-poultry-dishes/strogonoff-de-frango/main-header.jpg"
    },
    {
    name: "Hambúrguer",
    description: "Artesanal com queijo e bacon",
    price: 28.90,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS21uSUb90JlFQkc4XS_bTDDZDj7-Bc2QeLmg&s"
},
{
    name: "Pizza",
    description: "Fatia de calabresa com queijo",
    price: 12.50,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDJKJPlaalwOKPpT-IChF_JIU4S8ZMGOiyGQ&s"
}
]

export default MockFood;