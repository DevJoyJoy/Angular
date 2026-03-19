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
},
{
    name: "Sushi",
    description: "Combo 12 peças",
    price: 42.00,
    img: "https://djapa.com.br/wp-content/uploads/2025/07/sushi-sao-paulo-principal.jpg"
},
{
    name: "Bolo de chocolate",
    description: "Fatia generosa com cobertura",
    price: 10.00,
    img: "https://recipesblob.oetker.com.br/assets/a81bc035eb7f407faaa2c93e04edaf78/750x910/bolo-de-aniversrio-de-chocolate.jpg"
},
{
    name: "Lámen",
    description: "Macarrão oriental com caldo e carne",
    price: 35.00,
    img: "https://sabores-new.s3.amazonaws.com/public/2024/11/lamen.jpg"
},
{
    name: "Tacos",
    description: "Porção com 3 unidades",
    price: 27.00,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtONx2ElloVWBm_f17c9ukRiuoTvlEowioZA&s"
}
]

export default MockFood;