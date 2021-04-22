const express= require('express')
const router=express.Router()
const {getTasks ,getTask, createTask, deleteTask , updateTask}=require('../controller/tasks')
router.route('/').get(getTasks).post(createTask)
router.route('/:id').delete(deleteTask).get(getTask).put(updateTask)
module.exports=router