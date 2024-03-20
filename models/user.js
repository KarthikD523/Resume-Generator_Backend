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
        }

    }
)

mongoose.model("User",UserSchema)