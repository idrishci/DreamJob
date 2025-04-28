import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import OutlinedInput from '@mui/material/OutlinedInput';
import { app,auth,GoogleAuthProvider, signInWithPopup,sendPasswordResetEmail, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "../../firebase";
import {useRouter}from"next/navigation";
import { useState } from 'react';
function ForgotPassword({ open, handleClose }) {
const[email,setEmail]=useState(null); 
  const handleForgotPassword = async () => {
    try {
      // const email = document.getElementById('email').value;
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent! Check your inbox.");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      slotProps={{
        paper: {
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            handleClose();
          },
          sx: { backgroundImage: 'none' },
        },
      }}
    >
      <DialogTitle>Reset password</DialogTitle>
      <DialogContent
        sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}
      >
        <DialogContentText>
        Entrez l&apos;adresse e-mail de votre compte et nous vous enverrons 
        un lien pour réinitialiser votre mot de passe.
        </DialogContentText>
        <OutlinedInput
          autoFocus
          required
          margin="dense"
          id="email"
          name="email"
          onChange={(e)=>setEmail(e.target.value)}
          label="Email address"
          placeholder="Email address"
          type="email"
          fullWidth
        />
      </DialogContent>
      <DialogActions sx={{ pb: 3, px: 3 }}>
        <Button onClick={handleClose}>Cancel</Button>
        <Button variant="contained" type="submit" onClick={handleForgotPassword}>
          Continue
        </Button>
      </DialogActions>
    </Dialog>
  );
}

ForgotPassword.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default ForgotPassword;