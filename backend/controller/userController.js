/*import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next)=>{
     const {firstName, lastName, email, phone, date, time} = req.body;
     if(!firstName || !lastName || !email || !phone || !date || !time){
          return next(new ErrorHandler("Please fill full reservation form!", 400));
     }
     try {
          await Reservation.create(firstName, lastName, email, phone, date, time);
          res.status(200).
          json({
               success: true,
               message: "Reservation Sent Successfully!",
          });


     } catch (error) {
          if(error.name === "ValidationError"){
               const validationErrors = Object.values(error.errors).map(
                    (err) => err.message
               );
               return next(new ErrorHandler(validationErrors.join(" , "),400));
          }
          return next(error);
     }
};*/

/*import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
  const { firstName, lastName, email, phone, date, time } = req.body;

  if (!firstName || !lastName || !email || !phone || !date || !time) {
    return next(new ErrorHandler("Please fill the full reservation form!", 400));
  }

  try {
    const reservation = await Reservation.create({
      firstName,
      lastName,
      email,
      phone,
      date,
      time,
    });
    res.status(200).json({
      success: true,
      message: "Reservation Sent Successfully!",
      reservation,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new ErrorHandler(validationErrors.join(", "), 400));
    }
    return next(error);
  }
};

*/
// controller/userController.js
import ErrorHandler from "../error/error.js";
import { User } from "../models/userSchema.js";

export const loginUser = async (req, res, next) => {
  const { firstName, lastName, email, phone, date, time } = req.body;

  if (!firstName || !lastName || !email || !phone || !date || !time) {
    return next(new ErrorHandler("Please fill the full login form!", 400));
  }

  try {
    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        firstName,
        lastName,
        email,
        phone,
        date,
        time,
      });
      res.status(201).json({
        success: true,
        message: "User registered successfully!",
        user,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Login Successful!",
        user,
      });
    }
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new ErrorHandler(validationErrors.join(", "), 400));
    }
    return next(error);
  }
};
