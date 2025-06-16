import styles from "./ExampleComponent.module.css";

const ExampleComponent = () => {
  return (
    <section className={styles.bg}>
      <div className={styles.form_container}>
        <div className={`liquid-glass ${styles.form}`}>
          <h1>Iniciar Sesión</h1>
          <div className={styles.input_container}>
            <label htmlFor='email'>Correo Electrónico:</label>
            <div className='liquid-glass input-container'>
              <input
                className='liquid-glass input'
                type='email'
                id='email'
                placeholder='Ingrese su correo electrónico'
              />
            </div>
          </div>
          <div className={styles.input_container}>
            <label htmlFor='password'>Contraseña:</label>
            <div className='liquid-glass input-container'>
              <input
                className='input'
                type='password'
                id='password'
                placeholder='Ingrese su contraseña'
              />
            </div>
          </div>
          <button style={{ marginTop: "1rem" }} className='liquid-glass button'>
            Continuar
          </button>
        </div>
      </div>
    </section>
  );
};
export default ExampleComponent;
