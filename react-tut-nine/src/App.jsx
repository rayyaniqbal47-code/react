import { useForm } from "react-hook-form"
import './App.css'

function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors , isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    // api call ko simulate karte hain
    await new Promise((resolve) => setTimeout(resolve , 5000));
    console.log('submitting the form' , data);

  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <div>
        <label >first name</label>
        <input className={errors.message ? 'input-error' : ''}
        {...register("firstName" , { 
          required: true,
          minLength:{value:3 , message:'min len atleast 3'} ,
          maxLength:{value:8 , message:'max len atleast 8'}
          })} />
          {errors.firstName && <p className="error-message">{errors.firstName.message}</p>}
      </div>
      <br />
      <div>
        <label >last name</label>
        <input className={errors.message ? 'input-error' : ''}
        {...register("lastName", { 
          pattern: {
            value: /^[A-Za-z]+$/i,
            message:'last name is not as per the rules',
          } 
          })} />
          {errors.lastName && <p className="error-message">{errors.lastName.message}</p>}
      </div>
      <br />
      <div>
        <label >user name</label>
        <input className={errors.message ? 'input-error' : ''}
        {...register("userName")} />
      </div>

      <br />

      <input type="submit" disabled={isSubmitting} 
      value={isSubmitting ? "submitting" : "submit"}
      />

    </form>
  )
}

export default App
