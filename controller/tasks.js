const Tasks=require('../model/Task')
exports.getTasks=async(req,res,next)=>{
    const tasks=await Tasks.find()
    res.status(200).json({
        success:true,
        data:tasks
    })
}


exports.getTask=async(req,res,next)=>{
    const task=await Tasks.findById(req.params.id)
    res.status(200).json({
        success:true,
        data:task
    })
}




exports.createTask=async(req,res,next)=>{
    const tasks=await Tasks.create(req.body)
    res.status(200).json({
        success:true,
        data:tasks
    })
}

exports.deleteTask=async(req,res,next)=>{
    const tasks=await Tasks.findByIdAndDelete(req.params.id)
    res.status(200).json({
        success:true,
        data:tasks
    })
}


exports.updateTask=async(req,res,next)=>{
    const tasks=await Tasks.findByIdAndUpdate(req.params.id,req.body,{
        new:true
    })
    res.status(200).json(tasks)
}