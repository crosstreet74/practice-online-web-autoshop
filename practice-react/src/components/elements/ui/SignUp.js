import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router'

// TODO: input.onChange → input dedicated validity check
export default function SignUp() {
    const history = useHistory()
    const [inputData, setInputData] = useState({
        userID: '',
        password: '',
        confirmPassword: '',
        phone: '',
        name: '',
        email: ''
    })

    const [guideTxts, setGuideTxts] = useState({
        userGuide: '최대 20자 까지 가능합니다.',
        emailGuide: '이메일 형식에 맞게 작성해 주세요.',
        pwdGuide: '숫자와 문자를 조합하여 8자 이상으로 입력해 주세요.',
        confirmPwdGuide: '비밀번호를 한번 더 입력해 주세요.',
        nameGuide: '',
        phoneGuide: '. 을 입력하지 말아 주세요.'
    });

    const [error, setError] = useState({
        userIdError: '',
        emailError: '',
        pwdError: '',
        confirmPwd: '',
        nameError: '',
        phoneError: ''
    })

    let process = require('../../../assets/data/jsondb.json')

    const handleBlur = (e) => {
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value
        });
        console.log(inputData)
    }

    const isUserId = userID => {
        const userIdRegex = /^[a-z0-9_!@$%^&*-+=?"]{1,20}$/
        return userIdRegex.test(userID);
    }

    const isEmail = email => {
        const emailRegex = /^(([^<>()\].,;:\s@"]+(\.[^<>()\].,;:\s@"]+)*)|(".+"))@(([^<>()¥[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

        return emailRegex.test(email);
    };

    const isPwd = pass => {
        const pwdRegex = /^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[@$!%*#?&]).*$/;

        return pwdRegex.test(pass);
    }

    const isPhone = phone => {
        const phoneRegex = /^[0-9\b -]{0,13}$/;
        return phoneRegex.test(phone)
    }

    const confirmPassword = (pass, confirmPass) => {
        return pass === confirmPass
    }

    const isValidInput = () => {
        history.push('/')
    }

    // const isValidInput = () => {
    //     let userIdError = "";
    //     let emailError = "";
    //     let pwdError = "";
    //     let confirmPwd = "";
    //     let nameError = "";
    //     let phoneError = "";


    //     if (!isUserId(inputData.userID)) userIdError = "아이디 형식을 확인 해 주세요.( 한글 불가 )";
    //     if (!isEmail(inputData.email)) emailError = "email 형식이 아닙니다.";
    //     if (!isPwd(inputData.password)) pwdError = "비밀번호 조건을 만족 할 수 없습니다.";
    //     if (!confirmPassword(inputData.password, inputData.confirmPassword)) confirmPwd = "비밀번호가 일치하지 않습니다.";
    //     if (inputData.userID === inputData.password) pwdError = "아이디를 비밀번호로 사용 할 수 없습니다.";
    //     if (!isPhone(inputData.phone)) phoneError = "휴대폰 형식이 아닙니다.";

    //     if (inputData.name.length === 0) nameError = "이름을 입력해주세요.";

    //     //console.log(userIdError, emailError, pwdError, confirmPwd, nameError, phoneError, userTypesError, useConfirmError)
    //     setError({
    //         userIdError, emailError, pwdError, confirmPwd, nameError, phoneError
    //     })

    //     if (userIdError || emailError || pwdError || confirmPwd || nameError || phoneError) return false;
    //     return true;

    // }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (isValidInput()) {
            fetch(`http://${process.IP}:${process.PORT}/users`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        userID: inputData.userID,
                        password: inputData.password,
                        phone: inputData.phone,
                        name: inputData.name,
                        email: inputData.email
                    })
                })
        }

    }

    return (
        <div className="card-body">
            <div className="myaccount-info-wrapper">
                <div className="account-info-wrapper">
                    <h4>회원가입</h4>
                    <h5>SignUp</h5>
                </div>
                <div className="row">
                    <form onSubmit={handleSubmit}>
                        <div className="col-lg-12 col-md-12">
                            <div className="billing-info">
                                <label>ID</label>
                                <input
                                    type="text"
                                    name="userID"
                                    onBlur={handleBlur}
                                />
                            </div>
                        </div>
                        {
                            error.userIdError
                                ?
                                <div style={{ color: "red", fontSize: "10px", margin: '-5px 0 10px 15px' }}>{error.userIdError}</div>
                                :
                                <div style={{ color: "gray", fontSize: "10px", margin: '-5px 0 10px 15px' }}>{guideTxts.userGuide}</div>
                        }
                        <div className="col-lg-12 col-md-12">
                            <div className="billing-info">
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    onBlur={handleBlur}
                                />
                            </div>
                        </div>
                        {
                            error.pwdError
                                ?
                                <div style={{ color: "red", fontSize: "10px", margin: '-5px 0 10px 15px' }}>{error.pwdError}</div>
                                :
                                <div style={{ color: "gray", fontSize: "10px", margin: '-5px 0 10px 15px' }}>{guideTxts.pwdGuide}</div>
                        }
                        <div className="col-lg-12 col-md-12">
                            <div className="billing-info">
                                <label>Confirm Pass</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    onBlur={handleBlur}
                                />
                            </div>
                        </div>
                        {
                            error.confirmPwd
                                ?
                                <div style={{ color: "red", fontSize: "10px", margin: '-5px 0 10px 15px' }}>{error.confirmPwd}</div>
                                :
                                <div style={{ color: "gray", fontSize: "10px", margin: '-5px 0 10px 15px' }}>{guideTxts.confirmPwdGuide}</div>
                        }
                        <div className="col-lg-12 col-md-12">
                            <div className="billing-info">
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    onBlur={handleBlur}
                                />
                            </div>
                        </div>
                        {
                            error.nameError
                                ?
                                <div style={{ color: "red", fontSize: "10px", margin: '-5px 0 10px 15px' }}>{error.nameError}</div>
                                :
                                <div style={{ color: "gray", fontSize: "10px", margin: '-5px 0 10px 15px' }}>{guideTxts.nameGuide}</div>
                        }
                        <div className="col-lg-6 col-md-6">
                            <div className="billing-info">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    onBlur={handleBlur}
                                />
                            </div>
                        </div>
                        {
                            error.emailError
                                ?
                                <div style={{ color: "red", fontSize: "10px", margin: '-5px 0 10px 15px' }}>{error.emailError}</div>
                                :
                                <div style={{ color: "gray", fontSize: "10px", margin: '-5px 0 10px 15px' }}>{guideTxts.emailGuide}</div>
                        }
                        <div className="col-lg-6 col-md-6">
                            <div className="billing-info">
                                <label>Phone</label>
                                <input
                                    type="phone"
                                    name="phone"
                                    onBlur={handleBlur}
                                />
                            </div>
                        </div>
                        <div className="billing-back-btn">
                            <div className="billing-btn">
                                <button type="submit">회원가입!</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}