"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import ForgotPassword from './components/ForgotPassword';
import AppTheme from '../AppTheme';
import ColorModeSelect from '../ColorModeSelect';
import { GoogleIcon, FacebookIcon, SitemarkIcon } from './components/CustomIcons';
import { onAuthStateChanged } from 'firebase/auth';
import { app,auth,db,GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "../firebase";
import {useRouter}from"next/navigation";
import {doc,getDoc}from "firebase/firestore";
const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '450px',
  },
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
  height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
  minHeight: '100%',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage:
      'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
      backgroundImage:
        'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
  },
}));

export default function SignIn(props) {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [email,setEmail]= React.useState("");
  const [password,setPassword]=React.useState("");
  const [lerole,setRole]=React.useState("");
 

const router =useRouter();
  const handleSignin = async () => {
    console.log("email",email);
    console.log("password",password);
    try{
      const res=await signInWithEmailAndPassword(auth,email,password);
      const unsubscribe = onAuthStateChanged(auth, async(user) => {
                  if (user) {
                      const userDocRef = doc(db, "users", user.uid);
                      const documentt = await getDoc(userDocRef);
                      const role = documentt.data().role;
                      console.log("document",documentt.data().role);
                      if(role === "client") {
                        router.push("/client/");
                      }else if(role === "enterprise") {
                        router.push("/Enterprise");
                      }else if(role === "admin") {
                          router.push("/admin");}
               
                  }
              })

      

    }catch(error){
      console.log("Error code:", error.code); 
      if (error.code === "auth/invalid-credential") {
        setPasswordError(true);
        setPasswordErrorMessage("Invalid email or password.");
       
      } else {
        setPasswordError(false);
        setPasswordErrorMessage(''); 
      }
    }

  }
const  handleSignupgoogle=async()=>{
    try{
      const provider = new GoogleAuthProvider();
      const res= await signInWithPopup(auth,provider);
      router.push("/");
    }  catch (error) {
      if (error.code === "auth/invalid-credential") {
        setPasswordError(true);
        setPasswordErrorMessage("Invalid email or password.");
     
    } else {
      setUsedEmailError(false);
      setUsedEmailErrorMessage(''); 
    }
    }
  }
  const handleGoogleLogin = async () => {
        try {
          await signInWithPopup(auth, googleProvider);
          window.location.href = "/dashboard"; // Redirect after login
        } catch (err) {
          setError(err.message);
        }
      };
    
     

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

   

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <SignInContainer direction="column" justifyContent="space-between">
        <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
        <Card variant="outlined">
          {/* <SitemarkIcon /> */}
          <h2 style={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}>Dream Job</h2>
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
          >
          Connexion
          </Typography>
          <Box
            component="form"
            // onSubmit={handleSubmit}
            noValidate
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 2,
            }}
          >
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                error={emailError}
                helperText={emailErrorMessage}
                id="email"
                type="email"
                name="email"
                placeholder="@email.com"
                autoComplete="email"
                autoFocus
                required
                fullWidth
                // value={email}
                variant="outlined"
                onChange={(e) => setEmail(e.target.value)}
                color={emailError ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Mot de passe</FormLabel>
              <TextField
                error={passwordError}
                helperText={passwordErrorMessage}
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="current-password"
                autoFocus
                required
                fullWidth
                variant="outlined"
                // value={password}
                onChange={(e) => setPassword(e.target.value)}
                color={passwordError ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Se souvenir de moi"
            />
            <ForgotPassword open={open} handleClose={handleClose} />
            <Button
              // type="submit"
              fullWidth
              variant="contained"

              onClick={()=>{handleSignin()}}
            >
              Connexion
            </Button>
            <Link
              component="button"
              type="button"
              onClick={handleClickOpen}
              variant="body2"
              sx={{ alignSelf: 'center' }}
            >
              Mot de passe oublié ?
            </Link>
          </Box>
          <Divider>ou</Divider>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => handleSignupgoogle()}
              startIcon={<GoogleIcon />}
            >
              	Connexion avec Google
            </Button>
            {/* <Button
              fullWidth
              variant="outlined"
              onClick={() => alert('Sign in with Facebook')}
              startIcon={<FacebookIcon />}
            >
              Sign in with Facebook
            </Button> */}
            <Typography sx={{ textAlign: 'center' }}>
              Vous n&apos;êtes pas inscrit(e) ?{' '}
              
              <Link
                href="../auth/signup/"
                variant="body2"
                sx={{ alignSelf: 'center' }}
              >
               Inscription
              </Link>
            </Typography>
          </Box>
        </Card>
      </SignInContainer>
    </AppTheme>
  );
}