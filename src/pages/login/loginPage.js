const LoginPage = () => {
    // const container = document.querySelector(".container-form"),
    //     pwShowHide = document.querySelectorAll(".showHidePw"),
    //     pwFields = document.querySelectorAll(".password"),
    //     signUp = document.querySelector(".signup-link"),
    //     login = document.querySelector(".login-link");

    // //   js code to show/hide password and change icon
    // pwShowHide.forEach(eyeIcon => {
    //     eyeIcon.addEventListener("click", () => {
    //         pwFields.forEach(pwField => {
    //             if (pwField.type === "password") {
    //                 pwField.type = "text";

    //                 pwShowHide.forEach(icon => {
    //                     icon.classList.replace("uil-eye-slash", "uil-eye");
    //                 })
    //             } else {
    //                 pwField.type = "password";

    //                 pwShowHide.forEach(icon => {
    //                     icon.classList.replace("uil-eye", "uil-eye-slash");
    //                 })
    //             }
    //         })
    //     })
    // })

    // // js code to appear signup and login form
    // if (signUp) {
    //     signUp.addEventListener("click", () => {
    //         container.classList.add("active");
    //     });
    // }
    // if (login) {
    //     login.addEventListener("click", () => {
    //         container.classList.remove("active");
    //     });
    // }
    return (
        <section className="section">
            <div className="container elements">
                <h2 className="section__title">Inversiones & Creditos</h2>
                    <form className="form">
                        <div className="form__container">
                            <h1 className="card__title">Iniciar Sesión</h1>
                            <p>Por favor ingresa tus credenciales</p>
                            <hr />
                            <label for="email"><b>Usario</b></label>
                            <input type="text" placeholder="Enter Email" name="email" id="email" required />

                            <label for="psw"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" id="psw" required />
                            <hr />

                            <p>¿No tienes un cuenta? <a href="/register" className="menu__link">Registrate Aquí!</a>.</p>
                            <p>¿Olvidaste tu contraseña? <a href="/forgotpass" className="menu__link">Haz Click Aquí</a>.</p>
                            
                            <button type="submit" class="button button--primary">Register</button>
                        </div>
                    </form>
                </div>
        </section >
    );
}

export default LoginPage;