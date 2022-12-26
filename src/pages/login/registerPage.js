const RegisterPage = () => {
    return (
        <section className="section">
            <div className="container elements">
                <h2 className="section__title">Inversiones & Creditos</h2>
                    <form className="form">
                        <div className="form__container">
                            <h1 className="card__title">Registrate</h1>
                            <p>Por favor ingresa tus credenciales</p>
                            <hr />
                            <label htmlFor="email"><b>Usario</b></label>
                            <input type="text" placeholder="Enter Email" name="email" id="email" required />

                            <label htmlFor="email"><b>Correo</b></label>
                            <input type="email" placeholder="Enter Email" name="email" id="email" required />

                            <label htmlFor="email"><b>Contraseña</b></label>
                            <input type="password" placeholder="Enter Email" name="email" id="email" required />

                            <label htmlFor="psw"><b>Repita Contraseña</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" id="psw" required />
                            <hr />

                            

                            <p>Al crear tu cuenta estas de acuerdo con: <a href="/register" className="menu__link">Terminos & Condiciones</a>.</p>
                            
                            <button type="submit" className="button button--primary">Register</button>
                        </div>
                    </form>
                </div>
        </section >
    );
}

export default RegisterPage;