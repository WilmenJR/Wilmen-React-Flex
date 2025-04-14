const productos = [
    {
        id:'01',
        name:'Iphone 16',
        price:900,
        description: 'Iphone 16 normal de 128gb',
        stock:10,
        category:'nuevos',
        img: '../Iphone16.png'
    },
    {
        id:'02',
        name:'Iphone 13 Pro Max',
        price:400,
        description: 'Iphone 13 Pro Max de 256gb',
        stock:12,
        category:'mas vendidos',
        img: '../Iphone13promax.png'
    },{
        id:'03',
        name:'Iphone 14 Pro Max',
        price:700,
        description: 'Iphone 14 Pro Max de 256gb',
        stock:15,
        category:'ofertas',
        img: '../Iphone14max.png'
    },
    {
        id:'04',
        name:'Iphone 15 Pro Max',
        price:800,
        description: 'Iphone 15 Pro Max de 128gb',
        stock:8,
        category:'nuevos',
        img: '../Iphone15pro.png'
    }
]

// creo y exporto mi promesa

export const getProducts = () =>{
    return new Promise((resolve, reject)=>{
        let error = false
        setTimeout(()=>{
            if (error){
                reject('No hay data')
            }else{
                resolve(productos)
            }
        },3000)
    })
}