import db from '../db/database.js'

export const getAll = (req, res) => {
    const todos = db.prepare('SELECT * FROM todos').all()
    res.json(todos)
}
export const getOne = (req, res) => {
    const um = db.prepare('SELECT * FROM todos WHERE id = ?').get(req.params.id)
    if (!um) return res.status(404).json({error: "Todo não encontrado."})
    res.json(um)
}
export const create = (req, res) => {
    const {title} = req.body
    if (!title) return res.status(400).json({error: "Título é OBRIGATÓRIO."})
    const result = db.prepare('INSERT INTO todos (title) VALUES (?) ').run(title)
    const todo = db.prepare('SELECT * FROM todos WHERE id = ?').get(result.lastInsertRowid)
    res.status(201).json(todo)
}
export const update = (req, res) => {
     const {title, done} = req.body
     const todo = db.prepare('SELECT * FROM todos WHERE id = (?)').get(req.params.id)
     if (!todo) return res.status(404).json({ error: 'Todo não encontrado.' })
    db.prepare('UPDATE todos SET title = ?, done = ? WHERE id = ?')
    .run(title ?? todo.title, done ?? todo.done, req.params.id)
    const updated = db.prepare('SELECT * FROM todos WHERE id = ?').get(req.params.id)
    res.json(updated)
}
export const remove = (req,res) => {
    const todo = db.prepare('SELECT * FROM todos WHERE id = (?)').get(req.params.id)
    if (!todo) return res.status(404).json({error: "Todo não encontrado."})
    
    db.prepare('DELETE FROM todos WHERE id = ?').run(req.params.id)
    res.status(204).send()
}