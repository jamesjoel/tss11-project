import * as YUP from 'yup'

let LoginSchema = YUP.object({
    email : YUP.string().email("Incorrect email id").required("Inser your username/email id "),
    password : YUP.string().required("Insert your password ")
})

export default LoginSchema