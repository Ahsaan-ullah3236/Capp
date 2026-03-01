// Standardized response function
import { 
    createUserServices,
    deleteUserServices,
    getAllUsersServices,
    getUserByIdServices,
    updateUserServices
 } from "../userModel.js";
const handleResponse = (res, statusCode, message, data = null) => {
    res.status(statusCode).json({
        status: statusCode,
        message,
        data,
    });
};
// Create new user
export const createUser = async (req, res, next ) => {
    const {name , email} = req.body;
  try {
    const newUser = await createUserServices (name, email)
    handleResponse(res,201, "USer Create Successfully ", newUser)
  } catch (err) {
   next (err);
  }
};
// Get all users
export const getAllUsers = async (req, res, next ) => {
  try {
    const users = await getAllUsersServices ()
    handleResponse(res,200, "USer fetched Successfully ", users)
  } catch (err) {
    next (err);
  }
};
// Get single user
export const getUserById = async (req, res, next ) => {
    const {name, email} = req.body;
  try {
    const updatedUser = await getUserByIdServices (req.params.id, name ,email)
    if (!user) return handleResponse(res,404 , "USEr not Found ")
    handleResponse(res,201, "USer updated Successfully", updatedUser)
  } catch (err) {
      next (err);
  }
};
// Update user
export const updateUser = async (req, res, next ) => {
    const {name , email} = req.body;
  try {
    
    const updateUser = await updateUserServices (res, params, id, name, email)
    if(!updateUser) return handleResponse(res, 404, "User not found")
    handleResponse(res,200, "USer Create Successfully ", updateUser)
  } catch (err) {
  next (err);
  }
};

// Delete user
export const deleteUser = async (req, res, next ) => {
  try {
    const deletedUser= await deleteUserServices (req, res,next);
    if(!deletedUser ) return handleResponse (res, 404, "User Not Found ")
    handleResponse(res,201, "USer delte Successfully ", deletedUser )
  } catch (err) {
    next (err);
  }
};

