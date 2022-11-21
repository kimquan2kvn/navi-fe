import Typography from "antd/lib/typography";
import React from "react";
import { Link } from "react-router-dom";
import RegisterForm from "../components/auth/RegisterForm";

const Register = () => {
    return (
        <div className="auth_page">
            <div className="auth_box">
                <Typography.Title
                    level={3}
                    className="text-uppercase text-center mb-4 fw-bold"
                >
                    Register
                </Typography.Title>
                <RegisterForm />
                <p>
                    Already have an account?
                    <Link to={`/login`} style={{ color: "crimson" }}>
                        {` Login Now`}
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
