import { useState } from "react";
import { Head, useForm } from "@inertiajs/react";
import Loading from "@/src/components/Loading";


export default function Login() {
    const [isOpenEye, setOpenEye] = useState(false);
    const {setData, data, post, processing, errors} = useForm({
        email: '',
        password: ''
    });

    const handleEyeisOpen = () => {
        setOpenEye((init) => !init)
    }
    const handleSubmit = (e) => {
        e.preventDefault(); 
        post(route('login')); 
    }

    const hanldeOnchange = (e) => {
        setData(e.target.name, e.target.value);
    }


    return (<>
        <Head>
            <title>Verify Login</title>
            <link rel="stylesheet" href="/assets/css/login.css" />
            <link href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" rel="stylesheet"/>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"/>
        </Head>
        <div className="loginContainer">
            <div className="d-lg-flex position-relative">
                <div className="d-flex logoContainer">
                    <div className="polygon1 position-relative">
                        <img className="logo" src="/assets/images/newLogin/logo.png" alt="bcp-logo" />
                    </div>
                    <div className="polygon2"></div>
                </div>
                <div className="form-container d-flex justify-content-center w-100 p-3 p-lg-5">
                    <div className="m-auto">
                        <div className="form-header1 ps-2 mb-5">
                            <h1 className="header1 fw-bold fs-1 m-0">BCP</h1>
                            <h1 className="header2 fw-bold fs-1 m-0">PREFECT DISCIPLINE SYSTEM</h1>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <span className="loginLineBreak my-4"></span>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1"  className="form-label fw-semibold fs-6">Email</label>
                                <input 
                                    type="email" 
                                    className="inputField input-form form-control px-3 fs-6 fw-normal" 
                                    id="exampleInputEmail1"
                                    name="email" value={data.email}
                                    aria-describedby="emailHelp"
                                    onChange={hanldeOnchange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <p className="errorInput">{errors.email}</p> 
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputPassword" className="form-label fw-semibold fs-6">Password</label>
                                <div id="login">
                                    <div className="passwordContainer">
                                        <input 
                                            type={isOpenEye ? "text" : "password"} 
                                            className="inputField input-form form-control px-3 fs-6 fw-normal" 
                                            id="inputPassword" 
                                            value={data.password} 
                                            name="password"
                                            onChange={hanldeOnchange}
                                            required
                                        />
                                        <i className={`fa-solid ${isOpenEye ?'fa-eye':'fa-eye-slash'}`} onClick={handleEyeisOpen} id="passwordIconId"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <p className="errorInput">{errors.password}</p> 
                            </div>
                            <button disabled={processing} type="submit" className="buttonTemplate sumbit-button btn rounded-2 w-100 mt-3">Log in</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <Loading display={processing}/> 
    </>);
}