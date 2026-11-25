const {model,connect} = require('./User');

const b = require('bcryptjs');


const h = async()=>{
    
    await connect();
    const pass = 'mypass123';
    const hash = await b.hash(pass,10);
     const user = await model.create({
        name:'hamoda',
        email:'darelemary@gmail.com',
        password:hash
    })
    const compare = await b.compare(pass,hash);
    console.log(user,compare);

}

h();
