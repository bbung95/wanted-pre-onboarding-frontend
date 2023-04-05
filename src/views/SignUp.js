import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchSignUp } from "../modules/api";

const SignUp = () => {
    const navigation = useNavigate();

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

    const handleOnClickSignUp = async () => {
        if (!validataion()) {
            return;
        }

        // 회원가입 api
        const res = await fetchSignUp(formData);

        if (res.status !== 201) {
            alert(res.message);
            return;
        }

        navigation("/signin");
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
                                value={formData.email}
                                onChange={handleOnChangeInput}
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
                                value={formData.password}
                                onChange={handleOnChangeInput}
                            />
                        </div>
                        <div className="form-control mt-6 flex flex-row justify-center gap-5">
                            <button data-testid="signup-button" className="btn btn-primary flex-1" onClick={handleOnClickSignUp} disabled={!isValidation}>
                                가입
                            </button>
                            <button data-testid="signup-button" className="btn flex-1" onClick={() => navigation("/signin")}>
                                취소
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
