const getAllTasks = (req, res) => {
    // Your logic to fetch tasks or send a response
    res.send('Sending all tasks');
};
const createTask = (req,res) =>{
    res.json(req.body)
    //res.send('creaated a new task')
}
const getTask = (req, res) =>{
    res.json({id: req.params.id})
}

const updateTask = (req, res)=>{
    res.json(req.body)
    // res.send('updating task')
}

const deleteTask = (req, res)=>{
    res.json({deleted: req.params.id})
    // res.send('delete a task')
}

module.exports = {
    getAllTasks, createTask, getTask, updateTask, deleteTask
};