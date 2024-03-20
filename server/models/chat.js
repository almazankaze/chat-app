import mongoose from "mongoose";
import Message from "./message.js";
const Schema = mongoose.Schema;

const GroupSchema = new Schema(
  {
    name: { type: String, required: true },
    participants: [{ type: Schema.Types.ObjectId, ref: "User" }],
    messages: [{ type: Schema.Types.ObjectId, ref: "Message", default: [] }],
  },
  { timestamps: true }
);

GroupSchema.post("findOneAndDelete", async function (doc) {
  if (doc) {
    await Message.deleteMany({
      _id: {
        $in: doc.messages,
      },
    });
  }
});

const Group = mongoose.model("Group", GroupSchema);

export default Group;
