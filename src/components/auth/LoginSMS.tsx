import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import Typography from "antd/lib/typography";

const LoginSMS = () => {
    const [phone, setPhone] = useState("");

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            autoComplete="off"
        >
            <Typography.Paragraph
                style={{
                    fontWeight: "bold",
                    marginBottom: 3,
                    marginTop: 10,
                }}
            >
                Phone number
            </Typography.Paragraph>
            <Input value={phone} onChange={(e)=> setPhone(e.target.value)}/>
            <Button
                type="primary"
                className="w-100 mt-3 rounded"
                htmlType="submit"
            >
                Login
            </Button>
        </Form>

        // <form>
        //     <div className="form-group mb-3">
        //         <label htmlFor="phone" className="form-label">
        //             Phone number
        //         </label>

        //         <input
        //             type="text"
        //             className="form-control"
        //             id="phone"
        //             value={phone}
        //             onChange={(e) => setPhone(e.target.value)}
        //         />
        //     </div>

        //     <button
        //         type="submit"
        //         className="btn btn-dark w-100"
        //         disabled={phone ? false : true}
        //     >
        //         Login
        //     </button>
        // </form>
    );
};

export default LoginSMS;
