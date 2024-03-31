const mongoose=require(`mongoose`)

const UserSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,

        },
        skills:[{
            type:String,

        }],
        languages:[{
            type:String,
        }],
        experiences: [{
            name: {
                type: String,
            },
        date: {
                type: String,
            },
            title: {
                type: String,
            },
            description: {
                type: String,
            }
        }],
        phone:{
            type:String
        },
        address:{
            type:String
        },
        educations:[{
            name:{
                type:String,
            },
            degree:{
                type:String
            },
            year:{
                type:String
            },
            cpi:{
                type:String
            }
        }],
        about:{
            type:String
        },
        references:[{
            name:{
                type:String
            },
            phone:{
                type:String
            },
            email:{
                type:String
            },
            job_position:{
                type:String
            },
            comp_name:{
                type:String
            }
        }],
        role:{
            type:String
        },

        jee_rank:{
            type:String
        },
        dob:{
            type:String,
        },
        internships:[{
            title:{
                type:String,
            },
            year:{
                type:String,
            },
            description:[{
                type:String
            }]
        }],

        projects:[{
            title:{
                type:String,
            },
            year:{
                type:String,
            },
            description:[{
                type:String
            }]
        }],

        positions:[{
            title:{
                type:String,
            },
            year:{
                type:String,
            },
            description:[{
                type:String
            }]
        }],

        hobbies:[{
            type:String
        }],

        achievements:[{
            type:String
        }]




    }
)

mongoose.model("User",UserSchema)