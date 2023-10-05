import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import './Shipment.css';
import { UserContext } from '../../App';

const Shipment = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm ();

  const [loggedInUser,setLoggedInUser]=useContext(UserContext);
  const onSubmit = (data) => console.log('from submitted',data)

  console.log(watch("example")) 

  return (
    
    <form className='ship-from ' onSubmit={handleSubmit(onSubmit)}>
     
      <input defaultValue="test" {...register("example")} />

      
      <input name='name' defaultValue={loggedInUser.name} {...register("exampleRequired", { required: true })} placeholder='Your name' />
      {errors.name && <span className='error'>This name is required</span>}

      <input name='email' defaultValue={loggedInUser.email}{...register("exampleRequired", { required: true })} placeholder='Your email' />
      {errors.email && <span className='error'>This email is required</span>}

      <input name='address' {...register("exampleRequired", { required: true })} placeholder='Your address' />
      {errors.address && <span className='error'>This address is required</span>}

      <input name='phone' {...register("exampleRequired", { required: true })} placeholder='Your phone' />
      {errors.phone && <span className='error'>This address is required</span>}

      <input type="submit" />
    </form>
  )
};

export default Shipment;