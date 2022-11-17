import React, {useState} from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const Login = async(e) =>{
        e.preventDefault();
        try {
            await axios.post("http://localhost:8005/api/v1/login", {
            email : email,
            password : password
            }).then(res => {
                console.log(res.data.data.token)
                localStorage.setItem("token",res.data.data.token)
            });
            navigate("/");
        } catch (error) {
            if(error.response){
                console.log(error.response.data);
            }
        }
    } 


    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form onSubmit={Login} className="box">
                                <div className="field mt-5">
                                    <label className="label">Email</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="******" value={password} onChange={(e)=> setPassword(e.target.value)} />

                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-success is-fullwidth">Login</button>
                                </div>
                            </form>
                            <script src="script.js"></script>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Login