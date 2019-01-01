import React from 'react'
import {  Button,Jumbotron,Panel} from 'react-bootstrap';

class LoginModule extends React.Component {

  render() {
    return(<div class="Card SignContainer-content">
    <div class="SignFlowHeader" style="padding-bottom:5px">
        <div class="SignFlowHeader-slogen">使用
            Answer_me，发现更大的世界</div>
    </div>

    <div class="SignContainer-inner">
        <form>
            <div class="Register-content">

                <div class="SignFlow-account">

                    <div class="SignFlow-supportedCountriesSelectContainer"></div>

                    <div class="SignFlowInput SignFlow-accountInputContainer">

                        <div class="SignFlow-accountInput Input-wrapper">
                            <input type="tel" value="" name="phoneNo" class="Input" placeholder="请输入钱包地址" />
                        </div>

                    </div>

                </div>

                <div class="Captcha SignFlow-captchaContainer Register-captcha" style="width:0;height:0;opacity:0;overflow:hidden;margin:0;padding:0;border:0"></div>
            </div>



            <div class="Register-SMSInput">
                <div class="SignFlow SignFlow-smsInputContainer">
                    <div class="SignFlowInput SignFlow-smsInput">
                        <div class="Input-wrapper"><input type="number" value="" name="digits" class="Input"
                                placeholder="请输入账户密码" /></div>
                        <div class="SignFlowInput-errorMask SignFlowInput-requiredErrorMask SignFlowInput-errorMask--hidden"></div>
                    </div>

                </div>
            </div>
            <button type="submit" class="Button Register-submitButton Button--primary Button--blue">登陆</button>
        </form>
    </div>
</div>)
  }
}


export default LoginModule