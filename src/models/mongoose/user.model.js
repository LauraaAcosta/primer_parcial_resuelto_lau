import { model, Schema } from "mongoose";

// TODO: completar relacion embebida y configurar el virtuals para el populate inverso con assets

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 20,
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["secretary", "administrator"],
      default: "secretary",
    },
    profile:{
      employee_number:{
        type: String,
        unique: true, 
        required: true
      },
      first_name:{
        type: String,
        required: true,
      },
      last_name:{
        type: String,
        unique: true, 
      },
      phone:{
        type: String,
        required: false
      },
    },
    deletedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

// ! FALTA COMPLETAR ACÁ



UserSchema.pre(/^find/, function(next){
  this.where({deleteAt:null})
});

export const UserModel = model("User", UserSchema);