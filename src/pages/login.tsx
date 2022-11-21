import Typography from "antd/lib/typography";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import LoginPass from "../components/auth/LoginPass";
import LoginSMS from "../components/auth/LoginSMS";
import SocialLogin from "../components/auth/SocialLogin";
import "../styles/auth.css";
import { RootStore } from "../utils/TypeScript";

const Login = () => {
    const [sms, setSms] = useState(false);
    const history = useHistory();
    const { auth } = useSelector((state: RootStore) => state);
    useEffect(() => {
        if (auth.access_token) history.push("/");
    }, [auth.access_token, history]);

    return (
        <div className="auth_page">
            <div className="auth_box">
                <Typography.Title
                    level={3}
                    className="text-uppercase text-center mb-4 fw-bold"
                >
                    Login
                </Typography.Title>
                <SocialLogin />

                {sms ? <LoginSMS /> : <LoginPass />}
                <small
                    className="row my-2 text-primary"
                    style={{ cursor: "pointer" }}
                >
                    <span className="col-6" style={{ fontSize: 13 }}>
                        <Link to="/forgot_password">Forgot password?</Link>
                    </span>
                    <span
                        style={{ fontSize: 13 }}
                        className="col-6 text-end "
                        onClick={() => setSms(!sms)}
                    >
                        {sms ? "Sign in with password" : "Sign in with SMS"}
                    </span>
                </small>
                <p>
                    You don't have an account?
                    <Link to={`/register`} style={{ color: "crimson" }}>
                        {` Register Now`}
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
