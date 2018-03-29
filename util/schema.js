import mongoose, {Schema} from 'mongoose';
// var deepPopulate = require('mongoose-deep-populate')(mongoose);

const GoalSchema = new Schema({
	name: String, due_date: Date, why: String,
	task: [{ type: Schema.Types.ObjectId, ref: "task" }],
	tag: [String]
});
const TaskSchema = new Schema({
	name: String, done: Boolean, importance: Number
});

// CategorySchema.plugin(deepPopulate);
// PostSchema.plugin(deepPopulate);

const Goal = mongoose.model('goal', GoalSchema);
const Task = mongoose.model('task', TaskSchema);

// export module
export { Goal, Task };
