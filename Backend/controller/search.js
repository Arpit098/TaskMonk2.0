// import express from 'express';
// import mongoose from 'mongoose';
// import User from '../model/model.users';
// const router = express.Router();

// router.post('/search-user', async (req, res) => {
//   const { userEmail } = req.body;

//   try {
//     const user = await User.findOne({ email: userEmail });
//     if (user) {
//       res.json({ userId: user._id, message: 'User found!' });
//     } else {
//       res.status(404).json({ message: 'User not found' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// export default searchRouter;
