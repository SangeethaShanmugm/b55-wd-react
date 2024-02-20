import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";


const formValidationSchema = yup.object({
    email: yup.string()
        .min(10, "Need a longer email")
        .required("Why not fill this email?")
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Pattern not matched"),
    password: yup.string()
        .min(8, "Need a longer Password😀")
        .max(12, "Too much password")
        .required("Why not fill this password?")
        .matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@_#/&*]){3}.{8,12}$/, "Password pattern does not match"),
});

function BasicForm() {

    const [showPassword, setShowPassword] = useState(false)


    const formik = useFormik({
        initialValues: { email: "", password: "" },
        validationSchema: formValidationSchema,
        onSubmit: (values) => {
            console.log("onSubmit", values);
        },
    });


    const togglePassword = () => {
        setShowPassword(!showPassword)
    }
    return (
        <form onSubmit={formik.handleSubmit}>
            <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
            <br />
            <br />

            <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            <button type="button" onClick={togglePassword}>{showPassword ? "Hide" : "show"}Password</button>
            {formik.touched.password && formik.errors.password ? formik.errors.password : ""}
            <br />
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default BasicForm;
