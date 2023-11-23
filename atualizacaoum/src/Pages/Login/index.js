import { Link } from 'react-router-dom'
import Logo from '../../imagens/logo.svg'
import './login.css'
import { Formik,Form,Field,ErrorMessage} from 'formik';
import * as yup from 'yup';
import Axios from 'axios';




function LoginPage(){

    const handleClickLogin = (values) => {
        Axios.post("http://localhost:3001/login", {
            email: values.email,
            password: values.password,
        }).then((response) => {alert(response.data.msg)});
    };
    
    const handleClickRegister = (values) => {
        Axios.post("http://localhost:3001/register",{
            email: values.email,
            password: values.password,
        }).then((response) => {alert(response.data.msg)});
    };

    const validationLogin = yup.object().shape({
        email: yup.string().email("Não é um email!").required("Este campo é obrigatório"),
        password: yup.string().min(7, "A senha deve ter 7 caracteres").required("Este campo é obrigatório"),
    });

    const validationRegister = yup.object().shape({
        email: yup.string().email("Não é um email!").required("Este campo é obrigatório"),
        password: yup.string().min(7, "A senha deve ter 7 caracteres").required("Este campo é obrigatório"),
        confirmPassword: yup.string().oneOf([yup.ref("password")], "As senhas não são iguais").required("Este campo é obrigatório"),
    });



    return(
        <div className='Login'>
        <div id="voltar">
            <Link to="/">Voltar</Link> 
        </div>
        <div id="logoLogin">
            <img src={Logo} alt="Logo do site"/>
        </div>

      <Formik initialValues={{}} onSubmit={handleClickLogin} validationSchema={validationLogin}>
        <Form className="loginForm">
        <h1>Login</h1>
          <div className="loginFormGroup">
            <Field name="email" className="formField" placeholder="E-mail"/>
            <ErrorMessage 
            component="span"
            name="email"
            className="form-error"/>
          </div>

          <div className="loginFormGroup">
            <Field name="password" className="formField" placeholder="Senha" type="password"/>
            
            <ErrorMessage 
            component="span"
            name="password"
            className="form-error"/>
          </div>
          <button className="buttonLogin" type="submit">Login</button>
        </Form>
      </Formik>
      {/* CAMPO DO CADASTRO */}
      <Formik initialValues={{}} onSubmit={handleClickRegister} validationSchema={validationRegister}>
        <Form className="loginForm">
        <h1>Cadastro</h1>
          <div className="loginFormGroup">
            <Field name="email" className="formField" placeholder="E-mail"/>
            <ErrorMessage 
            component="span"
            name="email"
            className="form-error"/>
          </div>

          <div className="loginFormGroup">
            <Field name="password" className="formField" placeholder="Senha" type="password"/>
            
            <ErrorMessage 
            component="span"
            name="password"
            className="form-error"/>
          </div>

          <div className="loginFormGroup">
            <Field name="confirmPassword" className="formField" placeholder="Confirme sua senha" type="password"/>
            
            <ErrorMessage 
            component="span"
            name="confirmPassword"
            className="form-error"/>
          </div>
          <button className="buttonLogin" type="submit">Cadastrar</button>
        </Form>
      </Formik>
    </div>
    )
}

export default LoginPage