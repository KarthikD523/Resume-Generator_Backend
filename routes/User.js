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
    phone,address,educations,about,references,role,
    rank,dob,achievements,internships,projects,positions,hobbies
    }=req.body

    const user=new User({
        name:name,
        email:email,
        skills:skills,
        languages:languages,
        experiences:experiences,
        phone:phone,
        address:address,
        educations:educations,
        about:about,
        references:references,
        role:role,

        jee_rank:rank,
        dob:dob,
        achievements:achievements,
        internships:internships,
        projects:projects,
        positions:positions,
        hobbies:hobbies


    })

    user.save()
    .then(
        user=>{
            console.log("Saved")
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
    const {name,email,skills,languages,experiences,
        phone,address,educations,about,references,role,
        rank,dob,achievements,internships,projects,positions,hobbies
        }=req.body
     
        const updateFields = {};

        // Construct update operation for arrays that are passed into the route
        if (skills) updateFields.skills = { $each: skills };
        if (languages) updateFields.languages = { $each: languages };
        if (experiences) updateFields.experiences = { $each: experiences };
        if (educations) updateFields.educations = { $each: educations };
        if (references) updateFields.references = { $each: references };
        if (internships) updateFields.internships = { $each: internships };
        if (projects) updateFields.projects = { $each: projects };
        if (positions) updateFields.positions = { $each: positions };
        if (hobbies) updateFields.hobbies = { $each: hobbies };
        if (achievements) updateFields.achievements = { $each: achievements };


    try {
        // First, push the new values into arrays
        await User.updateOne(
            { email: email },
            {
                $push: updateFields }
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
                jee_rank:rank,
                dob: dob,
            } }
        );

        // Retrieve the updated document
        const updatedUser = await User.findOne({ email: email }).select('jee_rank');

        res.json({ updatedUser: updatedUser }); // Assuming you want to send the result of the update operation
    } catch (err) {
        res.status(422).json({ error: err.message });
    }
});


    

module.exports=router