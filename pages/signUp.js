import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import {
  fade,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { green } from '@material-ui/core/colors';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import Button from '@material-ui/core/Button';
import actions from '../actionTypes';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const ValidationTextField = withStyles({
  root: {
    '& input:valid + fieldset': {
      borderColor: '#BFDEED',
      borderRadius: "200px",
      borderWidth: 2,
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderRadius: "200px",
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      borderColor: '#BFDEED',
      borderWidth: 2,
      padding: '4px !important', // override inline-style
    },
  },
})(TextField);

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

var d = new Date().getFullYear();


export default function signUp() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    email: '',
    username: '',
    weightRange: '',
    showPassword: false,
  });

  const handleSubmit = event => {
    event.preventDefault();
    dispatch({
      type: actions.SIGNUP_USER,
      payload: {
        user: {
          password: password,
          username: username,
          email: email
        }
      }
    });
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  return (
    <>
      <div className="container">
        <Head>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" />
          <title>My Realms-Painting the world in the rhythm of word/signUp</title>
          <link rel="icon" href="/favicon.ico" />
        // <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        </Head>


        <main className="main">

          <h1 style={{ marginTop: "50px", padding: "0" }} className="title">
            <img style={{ marginTop: "50px", padding: "0" }} className="heading" src="/myrd.png" alt="My realms" />
          </h1>
          <div className="pc">
            <h2 style={{ color: " rgba(237, 18, 91, 0.6)", textAlign: "center", marginBottom: "0" }} className="b-margin subt">
              Painting the world in the rhythm of words
       </h2>
          </div>
          <form style={{ margin: "5vw auto 0", flexDirection: "column", fontFamily: "Century Gothic", }} className={classes.root} onSubmit={handleSubmit} noValidate>
            <div>
              <ValidationTextField
                autoFocus
                style={{ maxWidth: "70vw", minWidth: "20vw", fontFamily: "Century Gothic", color: " #Ed165a", borderRadius: "200px" }}
                className={classes.margin}
                label="My Name "
                required
                variant="outlined"
                id="validation-outlined-input"
                size="small"
              />
            </div>
            <div>
              <ValidationTextField
                autoFocus
                style={{ maxWidth: "70vw", minWidth: "20vw", fontFamily: "Century Gothic", color: " #Ed165a", borderRadius: "200px" }}
                className={classes.margin}
                label="My Email "
                type="Email"
                required
                variant="outlined"
                id="validation-outlined-input"
                size="small"
              />
            </div>
            <div>
              <ValidationTextField
                style={{ maxWidth: "70vw", minWidth: "20vw", fontFamily: "Century Gothic", color: " #Ed165a" }}
                className={classes.margin}
                id="outlined-password-input"
                required
                label="My Password"
                autoComplete="current-password"
                variant="outlined"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                size="small"
              />
            </div>

          </form>
          <Button className={classes.margin}
            style={{ textTransform: "uppercase", fontFamily: "Century Gothic", fontSize: "16px", borderRadius: "200px", backgroundColor: "#Ed165a", color: "#FDE7EB", maxWidth: "70vw", minWidth: "20vw", boxShadow: " 0 4px 10px #BEBEBE", padding: "7px 75px", }} size="large" variant="contained" >Sign Up</Button>
          <p className="text description" style={{ marginTop: "20px", color: "#Ed165a", paddingBottom: "5px" }}>I have an account, <a href="/signIn" style={{ textDecoration: "none", textShadow: "0 4px 10px  #Ed165a" }}>Sign me in</a></p>

        </main>

        <footer className="footer">
          <p>&copy; My Realms {d} All rights reserved</p>
        </footer>
      </div>
    </>
  )
}
