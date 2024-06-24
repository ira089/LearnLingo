import React, {useState} from 'react';
// import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as shema from '../../schemas/schema';
import { BiHide } from "react-icons/bi";
import Button from 'components/Button/Button';
import styles from './ModalLogIn.module.css'

 const ModalLoginIn = (onClose) => {

  const [visible, setVisible] = useState(false);
 
  // const dispatch = useDispatch();

  const submit = async (evt) => {
    const formData = {
          email: evt.email,
          password: evt.password,
        };
  
        const isValid = await shema.schemaLogin.isValid(formData);            

          if (!isValid) {
            return;
           }
           
        // dispatch(logIn({ ...formData }))
    reset();
  }

  const {register, handleSubmit, reset, formState:{errors, isValid}  } = useForm({
    initialValues: {
             name: '',
             email: '',
             password: '',
          },
    mode: "onBlur",
    resolver:yupResolver(shema.schemaLogin)
  })
  return (
    <div>
      <h2>Log In</h2>
      <p>Welcome back! Please enter your credentials to access your
         account and continue your search for an teacher.</p>
      <form className={styles.form} onSubmit={handleSubmit(submit)} autoComplete="off">
          
          <label className={styles.label}>
            <input className={styles.input}
            {...register('email') }
              name="email"
              placeholder= 'Email'
              type="email"
            />
             {errors?.email && (<span className={styles.span}>{errors?.email?.message || 'Errors!'}</span>)}
          </label>

          <label className={styles.label}>
             <div className={styles.passInputWrap}>
                <input className={styles.input}
                  {...register('password') }
                  name="password"
                  placeholder= 'Password'
                  type={visible ? 'text' : 'password'}
                />
                 {errors?.password && (<span className={styles.span}>{errors?.password?.message || 'Errors!'}</span> )}
                <button className={styles.btnHide} type="button" onClick={() => {setVisible(!visible);}}>
                    <BiHide size={20}/>
                </button>
              </div>     
           </label>

           <Button type='submit' disabled={!isValid}>Log In</Button>
          
      </form>
    </div>
    
    
  )
}

export default ModalLoginIn
