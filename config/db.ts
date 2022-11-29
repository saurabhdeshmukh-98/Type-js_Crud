import { MongoClient} from "mongodb"

// Create a url for connection
const url='mongodb://localhost:27017'

//create a new MongoClient
const client = new MongoClient(url)

let db = client.db('demo');

export{
    db
}
