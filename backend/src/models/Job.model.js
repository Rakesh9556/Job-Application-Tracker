import mongoose, {Schema} from "mongoose"

const JobSchema = new Schema({
    company: {
        type: String,
        required:[true, "Company name is required"],
    },
    position: {
        type: String,
        required: [true, "Company position is required"],
    },
    status: {
        type: String,
        required: true,
        enum:['applied', 'interviewing', 'offered', 'rejected']
    },
    appliedDate: {
        type: Date,
        required: true,
        default: Date.now,
    },
    source: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }

}, 
{
    timestamps: true
})

export const JobModel = mongoose.model("Job", JobSchema)