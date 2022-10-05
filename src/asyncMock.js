const products = [
    {
        id: "355",
        name: "Porta Sahumerio Hanuman",
        imgSrc: "https://raw.githubusercontent.com/MelGar35/EntregaTfinalJS/main/Img/portasahumeriohanuman.jpg",
        category: "ceramica",
        description: "De cerámica, pintado a mano",
        price: 1000,
        stock: 300
    },
    {
        id: "356",
        name: "El Tarot como Llave",
        imgSrc: "https://raw.githubusercontent.com/MelGar35/EntregaTfinalJS/main/Img/tarotcomollave.jpg",
        category: "libros",
        description: "Autor: Dalia Walker",
        price: 4800,
        stock: 250
    },
    {
        id: "357",
        name: "Mazo Tarot Viceversa",
        imgSrc: "https://raw.githubusercontent.com/MelGar35/EntregaTfinalJS/main/Img/tarotviceversa.jpg",
        category: "tarot",
        description: "Autora:Lunaea Weatherstone",
        price: 2500,
        stock: 100
    },
    {
        id: "358",
        name: "Oráculo del Gato",
        imgSrc: "https://raw.githubusercontent.com/MelGar35/EntregaTfinalJS/main/Img/oraculodelgato.jpg",
        category: "tarot",
        description: "Autora: La Watson",
        price: 1200,
        stock: 250
    },
    {
        id: "359",
        name: "Sahumo Akasha",
        imgSrc: "https://raw.githubusercontent.com/MelGar35/EntregaTfinalJS/main/Img/sahumos.jpg",
        category: "sahumos",
        description: "Romero, Lavanda, Canela y palo santo",
        price: 600,
        stock: 405
    }
]

export const getProducts = (categoryId) => {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(categoryId ? products.filter(prod => prod.category === categoryId): products)
        }, 1000)
    })
}

export const getProduct = (id) => {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(products.find(prod =>prod.id === id))
        }, 1000)
    })
}
