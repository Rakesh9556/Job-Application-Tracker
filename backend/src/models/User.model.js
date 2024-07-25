import mongoose, {Schema} from "mongoose"

const UserSchema = new Schema({
    fullName: {
        type: String,
        required: [true, "fullname is required"]
    },

    username: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
        index: true,
        lowercase: true,
        validate: [
            {
                validator: (value) => value.length > 3 && value.length < 12, 
                message: "Username must be between 3 to 12 characters"
            }
        ]
    },

    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please use a valid email"]
    },

    password: {
        type: String,
        required: [true, "Password is required"],
    },

    avatar: {
        type: String,  //cloudanry
        required: true, 
    },

    bio: {
        type: String,  
    },

    verifyCode: {
        type: String,
        required: [true, "Verify Code is required"]
    },

    verifyCodeExpiry: {
        type: Date,
        required: [true, "Expiry code is required"]
    },

    isVerified: {
        type: Boolean,
        required: true,
        default: false
    },

    jobApplications: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Job'
        }
    ],
},
{
    timestamps: true
}
)


// generating accessToken
UserSchema.methods.generateAccessToken = () => {
    return jwt.sign(
        {
            _id: this._id,
            username: this.username,
            email: this.email,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

// generating refresh token
UserSchema.methods.genrateRefreshToken = () => {
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", UserSchema);
