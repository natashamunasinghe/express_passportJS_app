//model needs to be imported

function loginForm (req, res) {
    res.render("authentication/login");
}

async function loginVerify (req, res) {
    // const { email } = req.body
    // const user = await UserModel.findOne({email});

    // if (!user) {
    //     return res.redirect("/login");
    // }

    // //we can use .verifyPassword because we are using Bcrypt
    // const valid = await user.verifyPassword(password)


    // if(!valid) {
    //     return res.redirect("/login");
    // }

    // req.session.user = user;
    // res.redirect("/dashboard");
}

function make (req, res) {
    // res.render("authentication/make");

}

async function create (req, res) {
    //  const user = await UserModel.create(req.body);
    //  req.session.user = user;
    //  res.redirect("/dashboard");

}

function logout (req, res) {
    // req.session.destroy(() => {
    //     res.redirect("/");
    // });
}

module.exports = {
    loginForm,
    loginVerify,
    make,
    create,
    logout

}