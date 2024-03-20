const express=require(`express`)
const mongoose=require(`mongoose`)
const User=mongoose.model("User")

const app=express()
app.use(express.json());

const router=express.Router()

router.get('/get',(req,res)=>{
    res.send("IN Router")
})


router.get('/userDetails',(req,res)=>{
   User.findOne({email:req.body.email})
   .then(user=>{
    res.json({user})
   })
   .catch(err=>
    res.status(422).json({error:err}))
})

router.post('/postUser',(req,res)=>{
    const {name,email,skills,languages,experiences,
    phone,address,educations,about,references,role
    }=req.body

    const user=new User({
        name,
        email,
        skills,
        languages,
        experiences,
        phone,
        address,
        educations,
        about,
        references,
        role,


    })

    user.save()
    .then(
        user=>{
            res.json("Saved Successfully")
        }
    )
    .catch(err=>{
        res.status(422).json({error:err})
    })
})

router.get('/getUser',(req,res)=>{
    const email=req.query.email
    console.log(email)
    User.findOne({email:email})
    .then(user=>
        res.json({user}))
        .catch(err=>res.status(422).json(err))
})

router.put('/updateUser', async (req, res) => {
    const { name, email, languages, skills, references, educations, experiences } = req.body;
    try {
        // First, push the new values into arrays
        await User.updateOne(
            { email: email },
            {
                $push: {
                    languages: { $each: languages },
                    skills: { $each: skills },
                    educations: { $each: educations },
                    experiences: { $each: experiences },
                    references: { $each: references }
                } }
        );
        // Then, update the name field
        await User.updateOne(
            { email: email },
            { $set: { 
                name: name ,
                email:email,
                phone:phone,
                address:address,
                about:about,
                role:role,
            } }
        );

        // Retrieve the updated document
        const updatedUser = await User.findOne({ email: email }).select('languages');

        res.json({ updatedUser: updatedUser }); // Assuming you want to send the result of the update operation
    } catch (err) {
        res.status(422).json({ error: err.message });
    }
});


    

module.exports=router