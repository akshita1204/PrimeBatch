import { useState } from "react";
export const SignupPage = () => {
    const [sendingOtp,setSendingOtp]=useState(false);
    const [isOtpSent,setisOtpSent]=useState(false);
    const [email,setemail]=useState("");
    const handleSendOtp = async (e) => {

        try {
            setSendingOtp(true)
            e.preventDefault();

            const email = e.target.email.value;
            setemail(email)

            const resp = await fetch("http://localhost:2200/api/v1/auth/otp", {
                method: "POST",
                body: JSON.stringify({ email }),
                headers: {
                    "Content-type": "application/json",
                },
            });

            const data = await resp.json();

            console.log(data);
            setisOtpSent(true);
        } catch (err) {
            console.log("Error sending otp", err.message);
        }
        finally{
            setSendingOtp(false);
        }
    };

    if(isOtpSent)
    {
        return(
            <div>
                <form>
                    <input value={email} disabled/>
                </form>
            </div>
        )
    }

    return (
        <div>
            <form onSubmit={handleSendOtp}>
                <div>
                    <input type="email" name="email" required />
                </div>
                <div>
                    <button disabled={sendingOtp} className=""> {sendingOtp ? "Sending..." : "Send OPT"}</button>
                </div>
            </form>
        </div>
    );
};


//Sign up Page is ready
