import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { getCookie } from '../home/modules/actions'
import {Form, Icon, Input, Button, Checkbox} from 'antd'
import {FormComponentProps} from 'antd/lib/form'
import { Login as LoginFun } from '../../server/index'
import Cookies from 'js-cookie'
import '../../style/login.less'
const FormItem = Form.Item

interface IUserFormProps extends FormComponentProps {
    userName: string
    password: string
    history?: any
    getCookie?: any
}

class Login extends React.Component<IUserFormProps> {
    componentDidMount() {
        this.loadData()
    }

    loadData () {
        console.log(this)
    }
    change = (val:string) => {
        this.props.getCookie(val)
    }

    handleSubmit = (e: any) => {
        e.preventDefault();
        
        this.props.form.validateFields((err, values) => {
            LoginFun({
                name: values.userName,
                passwd: values.password
            }).then((res:any) => {
<<<<<<< HEAD
                this.change(res.data.token)
                Cookies.set('token', res.data.token)
                this.props.history.push('/home')
=======
                return
                console.log(res.data)
                Cookies.set('token', res.data.token);
>>>>>>> 1b95c3bbd5c2835188725eaf3d86d43b17590823
            })
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form

        return (
            <div className='my-login'>
                <div className='my-login-center'>
                    <div className='my-login-method'>
                        <p>账户登录</p>
                    </div>
                    <div>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <FormItem>
                                {getFieldDecorator('userName', {
                                    rules: [{required: true, message: '请输入用户名!'}],
                                })(
                                    <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                           placeholder="用户名"/>
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{required: true, message: '请输入密码!'}],
                                })(
                                    <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                           type="password" placeholder="密码"/>
                                )}
                            </FormItem>
                            <FormItem>
                                <div className="login-form-forgot">
                                    {getFieldDecorator('remember', {
                                        initialValue: true,
                                        valuePropName: 'checked'
                                    })(
                                        <Checkbox>记住我</Checkbox>
                                    )}
                                    <a href="">忘记密码?</a>
                                </div>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    进入
                                </Button>
                                或者 <a href="">注册账户</a>
                            </FormItem>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({
    todos: state,
    token: state
  });
  
  const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        getCookie: (payload: string) => dispatch(getCookie(payload)),
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Login));
// export default Form.create()(Login);