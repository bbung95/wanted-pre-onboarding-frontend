import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { fetchSignIn } from "../modules/api";
import { Context } from "../store/AuthProvider";

const SignIn = () => {
    const navigation = useNavigate();
    const { isLogin, setIsLogin } = useContext(Context);

    const [isValidation, setIsValidation] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleOnChangeInput = (e) => {
        const target = e.target;
        setFormData({ ...formData, [target.name]: target.value });
    };

    const validataion = () => {
        if (formData.email.indexOf("@") !== -1 && formData.password.length >= 8) {
            return true;
        }

        return false;
    };

    const handleOnClickSignIn = async () => {
        if (!validataion()) {
            return;
        }

        // 로그인 api
        const res = await fetchSignIn(formData);

        if (res.status !== 200) {
            alert(res.message);
            return;
        }

        // LocalStorage token 저장
        localStorage.setItem("access_token", res.data.access_token);
        await setIsLogin();
        navigation("/todo");
    };

    useEffect(() => {
        setIsValidation(validataion());
    }, [formData]);

    return (
        <div className="relative min-h-screen w-full bg-gray-100">
            <div className="hero min-h-screen bg-base-200">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">이메일</span>
                            </label>
                            <input
                                data-testid="email-input"
                                name="email"
                                type="text"
                                placeholder="이메일을 입력해주세요."
                                className="input input-bordered"
                                onChange={handleOnChangeInput}
                                value={formData.email}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">비밀번호</span>
                            </label>
                            <input
                                data-testid="password-input"
                                name="password"
                                type="password"
                                placeholder="비밀번호를 입력해주세요."
                                className="input input-bordered"
                                onChange={handleOnChangeInput}
                                value={formData.password}
                            />
                        </div>
                        <div className="form-control mt-6 flex flex-row justify-center gap-5">
                            <button data-testid="signin-button" className="btn btn-primary flex-1" onClick={handleOnClickSignIn} disabled={!isValidation}>
                                로그인
                            </button>
                            <button data-testid="signup-button" className="btn flex-1" onClick={() => navigation("/signup")}>
                                회원가입
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
