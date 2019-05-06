import {Router} from 'express'
import app from '../server';

//database
import {connect} from '../config/configdb'; //importa el metodo llamado connect 
import {ObjectID} from 'mongodb';

 const router  = Router()

router.get('/', async (req, res) => {
    const conn = await connect()
    const result = await conn.collection('tasks').find({}).toArray()
    res.json(result)
});

router.post('/',async (req, res) => {
    const conn = await connect()
    const {title, description} = req.body 
    const task = { title, description }
    console.log(req.body);
    const result = await conn.collection('tasks').insert(task)
    res.json(result);
});

router.get('/:id',async (req, res) => {
    const conn = await connect()
    const {id} = req.params
    const result = await conn.collection('tasks').findOne({_id : ObjectID(id)})
    res.json(result)
});

router.delete('/:id',async (req, res) => {
    const conn = await connect()
    const {id} = req.params
    const result = await conn.collection('tasks').deleteOne({_id : ObjectID(id)})
    res.json(`Task with id: ${id} has deleted `)
});

router.put('/:id',  async (req, res) => {
    const {title, description} = req.body      
    const task = {title, description}
    const {id} = req.params
    const conn = await connect()
    const result = await conn.collection('tasks').updateOne({_id : ObjectID(id)}, {$set: task})
    res.json(`Task with id: ${id} has updated `)

});

  export default router