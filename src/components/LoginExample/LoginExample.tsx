import styles from "./LoginExample.module.css";
import { LiquidGlass } from "../../providers/LiquidGlass";

const LoginExample = () => {
  return (
    <section className={styles.bg}>
      {/* agregar video como fondo https://cdn.pixabay.com/video/2022/02/10/107308-676158771_large.mp4 */}
      <video
        className={styles.video}
        autoPlay
        loop
        muted
        playsInline
        src='https://cdn.pixabay.com/video/2022/02/10/107308-676158771_large.mp4'
      ></video>

      <div className={styles.form_container}>
        <LiquidGlass className={styles.form__liquid_glass}>
          <div className={styles.form}>
            <h1>Iniciar Sesión</h1>
            <div className={styles.input_group}>
              <label htmlFor='email'>Correo Electrónico:</label>
              <LiquidGlass style={{ width: "100%" }}>
                <input
                  className='input'
                  type='email'
                  id='email'
                  placeholder='Ingrese su correo electrónico'
                />
              </LiquidGlass>
            </div>
            <div className={styles.input_group}>
              <label htmlFor='password'>Contraseña:</label>
              <LiquidGlass style={{ width: "100%" }}>
                <input
                  className='input'
                  type='password'
                  id='password'
                  placeholder='Ingrese su contraseña'
                />
              </LiquidGlass>
            </div>
            <LiquidGlass style={{ marginTop: "10px", width: "100%" }}>
              <button className='liquid-glass button'>Continuar</button>
            </LiquidGlass>
          </div>
        </LiquidGlass>
      </div>
    </section>
  );
};
export default LoginExample;
