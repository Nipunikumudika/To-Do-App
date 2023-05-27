const express = require("express");
const router = express.Router();
const Task = require("../models/task");

//check task login-authenticaton

//create new task
router.post("/tasks", async (req, res) => {
  console.log(req.body);
  const task = new Task(req.body);

  try {
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});


router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find({});
    //const tasks = await Task.find({ _id: "6422a81d79fa9487d3f25c07" });
    res.status(200).send(tasks);
  } catch (error) {
    res.status(400).send(error);
  }
  const tasks = await Task.find({});
});


router.get("/tasks/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const task = await Task.findById(_id);

    if (!task) {
      return res.status(404).send();
    }

    res.status(200).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});




router.delete("/tasks/:id",async (req,res)=>{
  try{
      const deletedTask = await Task.findByIdAndDelete(req.params.id)
      if (!deletedTask) {
          return res.status(404).send();
        }
    
        res.status(200).send(deletedTask);

  }catch (error) {
      res.status(400).send(error);
    }
})

router.patch("/tasks/:id", async(req,res)=>{
  try{
      const updatedTask = await Task.findByIdAndUpdate(req.params.id,req.body,{
          new:true
      });
      if (!updatedTask) {
          return res.status(404).send();
        }
    
        res.status(200).send(updatedTask);

  }catch (error) {
      res.status(400).send(error);
    }
});


module.exports = router;
