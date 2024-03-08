const Router = require('express').Router();
const Data = require('../models/Schema')

Router.post('/upload', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    const obj={
      name: firstName,
      rollno: 32
    }
    setTimeout(async ()=>{
      const data=await new Data(obj)
      data.save()
      console.log(data)
    },10000)

    return res.status(200).json({ message: 'User data received successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

module.exports = Router;
