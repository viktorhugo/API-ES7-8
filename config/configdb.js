import mogoClient from 'mongodb'

export async function connect() {
    try {
        const client = await mogoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true}) 
        const db = client.db('node-rest2019')    
        db ?  console.log('Connected Whit MongoDB') : console.log('Error Connected Whit MongoDB')
        return db    
    } catch (e) {
        console.log('Error Connected Whit MongoDB'+ e)
    }
    
}

