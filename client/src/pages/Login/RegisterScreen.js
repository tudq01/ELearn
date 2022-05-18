import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../actions/userAction';
import { Loader, Message,FormContainer} from "../../components/shared";
import { useNavigate } from 'react-router-dom';
import "./Login.css"
function RegisterScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState(null);

    const dispatch = useDispatch();

    const userRegister = useSelector(state => state.userRegister);
    const { loading, error, userInfo } = userRegister;
    
      const history = useNavigate();

    useEffect(() => {
        if (userInfo) {
        console.log(userInfo)
       
        setMessage("Register Successfully");
        }
    }, [userInfo]);
      

    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage('Password do not match');
        } else {
            dispatch(register(name, email, password));
        }
    };
  return (
    <section className='register'>
      <form onSubmit={submitHandler}>
        <h1>Sign Up</h1>
        {message && <Message variant="danger">{message}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}

        <input
          type="name"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></input>

        <Button type="submit" variant="primary">
          Register
        </Button>

        <Row className="py-3">
          <Col>
            Have an account? <Link to="/login">Login</Link>
          </Col>
        </Row>
      </form>
    </section>
  );
}

export default RegisterScreen