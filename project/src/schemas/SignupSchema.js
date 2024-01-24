import { insert } from "formik";
import * as YUP from 'yup'

const SignupSchema = YUP.object({
    name : YUP.string().required("Insert Your Full Name"),
    email : YUP.string().email("Incorrect email Id").required("Insert Your Email Id"),
    password : YUP.string().required("Insert Your password"),
    repassword : YUP.string().required("Insert Your repassword"),
    contact : YUP.number().typeError("Insert number only").min(10000000,"minimun 8 number").max(100000000000,"maximun 12 number").required("Insert Your Contact number"),
    address : YUP.string().required("Insert Your Address"),
})

export default SignupSchema