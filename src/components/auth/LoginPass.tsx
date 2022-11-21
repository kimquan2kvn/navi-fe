import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/authAction";
import { FormSubmit, InputChange } from "../../utils/TypeScript";
const LoginPass = () => {
    const inittialState = { account: "", password: "" };
    const [userLogin, setUserLogin] = useState(inittialState);

    const { account, password } = userLogin;

    const [typePass, setTypePass] = useState(false);

    const dispatch = useDispatch();
    const handleChangeInput = (e: InputChange) => {
        const { value, name } = e.target;
        setUserLogin({ ...userLogin, [name]: value });
    };
    const handleSubmit = (e:FormSubmit) => {
        e.preventDefault()
        dispatch(login(userLogin))
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3 form-group">
                <label htmlFor="account" className="form-label">
                    Email / Phone number
                </label>
                <input
                    type="email"
                    className="form-control"
                    id="account"
                    value={account}
                    name="account"
                    onChange={handleChangeInput}
                />
            </div>

            <div className="mb-3 form-group">
                <label htmlFor="password" className="form-label">
                    Password
                </label>
                <div className="pass">
                    <input
                        type={typePass ? "text" : "password"}
                        className="form-control"
                        id="password"
                        value={password}
                        name="password"
                        onChange={handleChangeInput}
                    />
                    <small onClick={() => setTypePass(!typePass)}>
                        {typePass ? "Hide" : "Show"}
                    </small>
                </div>
            </div>

            <button
                type="submit"
                className="btn btn-dark w-100 mt-1"
                disabled={account && password ? false : true}
            >
                Login
            </button>
        </form>
    );
};

export default LoginPass;
