import { User } from "../models/Users.model.js";
import app from "../app.js";

export const getUsers = async  (req,res) => {
    try {
        const users = await User.findAll();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
};

export const postUser = async  (req,res) => {
    try {
        const {userName, userLastName, userEmail, userPassword, userAddress, userPhoneNumber} = req.body
        const newUser = await User.create({
            userName,
            userLastName,
            userEmail,
            userPassword,
            userAddress,
            userPhoneNumber
        });
        return res.status(200).json(newUser);
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
};

export const updateUser = async (req,res) => {
    const {idUser} = req.params;
    try {
        const {userName, userLastName, userEmail, userPassword, userAddress, userPhoneNumber} = req.body

        const user = await User.findByPk(idUser)
        user.userName = userName;
        user.userLastName = userLastName;
        user.userEmail = userEmail;
        user.userPassword = userPassword;
        user.userAddress = userAddress;
        user.userPhoneNumber = userPhoneNumber;
        await user.save();
        res.json(user);

    } catch (error) {
        return res.status(500).json({message : error.message});
    }
};

export const deleteUser = async (req,res) => {
    const {idUser} = req.params;
    try {
        await User.destroy({
            where :{idUser}       
        });
        return res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
};

export const getUser = async (req,res) => {
    const {idUser} = req.params;
    try {
         await User.findByPk(idUser);
        res.json(User)
    } catch (error) {
        return res.status(500).json({message : error.message});

    }
};