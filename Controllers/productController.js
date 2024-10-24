const addData= (req,res)=>{
    // const register = req.body.name;
    // res.send(register)


    const {f_name,l_name,email,password,age} = req.body;

    if(!f_name || !l_name || !email || !password || !age){
        res.status(400); // means bad request

        throw new Error("Please entered the relevant data")
    }
        res.json({
            f_name,l_name,email,password,age
        })

}

const getData = (req,res)=>{
    res.send("data get successfully")
}


const updateData= (req,res)=>{
    const update_data = req.params.id;
    res.send(`Data has been updated at ${update_data}`)
}

const deleteData = (req,res)=>{
    const del_data = req.params.id;
    res.send(`Data has been deleted at ${del_data}`)
}



module.exports = {
    addData,
    getData,
    updateData,
    deleteData
}
