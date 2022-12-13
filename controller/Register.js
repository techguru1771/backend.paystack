import Register from '../model/register';
import bcrypt from 'bcrypt';


export const register = async (req, res) => {

    try{
        console.log(req.body);
        const { firstName, lastName, email, password, department } = req.body;

        let userExist = await Register.findOne({ email:req.body.email }).exec();

        if (userExist) return res.status(400).send("Email is taken");

        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(req.body.password, salt);
        console.log(hashpassword);
        // register
        const user = new Register({
            email:request.body.email,
            firstName:request.body.firstName,
            lastName:request.body.lastName,
            department:request.body.department,
            password: hashpassword
        });
        console.log(user);
        await user.save();
        console.log("USER CREATED", user);
        return res.json({ ok: true });
    } 
    catch (err) {
        console.log("CREATE USER FAILED", err);
        return res.status(400).send("Error. Try again.");
    }
};



