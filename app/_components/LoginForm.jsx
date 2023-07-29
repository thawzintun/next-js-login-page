import React from "react";

const LoginForm = () => {
    return (
        <>
            <form className="flex flex-col gap-8">
                <input
                    type="email"
                    placeholder="Email Address or Mobile Number"
                    className="px-2 py-2 outline outline-slate-200 focus:outline-none bg-slate-50 rounded-sm"
                />
                <button className="px-2 py-3 bg-blue-500 text-white rounded-md">
                    Next
                </button>
            </form>
            <p className="my-6 text-blue-400">Forgot Password?</p>
            <hr className="mb-6" />
            <p className="mb-1">Sign in using</p>
            <div className="flex gap-3 justify-center">
                <div className="border rounded-md p-3 w-fit">
                    <img src="/Google.svg" width={20} alt="Google" />
                </div>
                <div className="bg-[#039BE5] border rounded-md p-3 w-fit">
                    <img src="/facebook.svg" width={20} alt="Facebook" />
                </div>
            </div>
        </>
    );
};

export default LoginForm;
