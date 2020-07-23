import express from 'express';
import User from '../models/userModel';
import { getToken } from '../util';

const router = express.Router();

//route for signin. we will "post()" here. it is more secure
router.post('/signin', async (req, res) => {
    //send query to database
    const siginUser = await User.findOne({
        email: req.body.email,
        password: req.body.password
    });
    if (signinUser) {
        res.send({
            _id: signinUser.id,
            name: signinUser.name,
            email: signinUser.email,
            isAdmin: signinUser.isAdmin,
            token: getToken(signinUser)         //identifies that if the next request is authenticated or not
        });

    } else {
        res.status(401).send({ msg: 'Invalid Email or Password.' });
    }
});

router.post('/register', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    const newUser = await user.save();
    if (newUser) {
        res.send({
            _id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            isAdmin: newUser.isAdmin,
            token: getToken(newUser)
        })
    } else {
        res.status(401).send({ msg: 'Invalid User Data.' });
    }
});



router.get("/createadmin", async (req, res) => {
    try {
        const user = new User({
            name: 'Ujjwal',
            email: 'ujjwalsanjay06@gmail.com',
            password: 'ujjwal@05',
            isAdmin: true
        });

        const newUser = await user.save();
        res.send(newUser);
    } catch (error) {
        res.send({ msg: error.message });
    }
});

export default router;