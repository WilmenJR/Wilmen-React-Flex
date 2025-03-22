const productos = [
    {
        id:'01',
        name:'Random 1',
        price:1000,
        description: 'lorem lorem lorem',
        stock:10,
        category:'nuevos',
        img: '../Logo.png'
    },
    {
        id:'02',
        name:'Random 2',
        price:5000,
        description: 'lorem lorem lorem',
        stock:20,
        category:'mas vendidos',
        img: 'https://picsum.photos/200'
    },{
        id:'03',
        name:'Random 3',
        price:3000,
        description: 'lorem lorem lorem',
        stock:60,
        category:'ofertas',
        img: 'https://picsum.photos/201'
    },
    {
        id:'04',
        name:'Random 4',
        price:2500,
        description: 'lorem lorem lorem',
        stock:45,
        category:'nuevos',
        img: 'https://picsum.photos/202'
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