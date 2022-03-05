import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  loginAsync,
  selectCount,
} from './loginSlice';
import styles from './Login.css';

export function Login() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  return (
    <div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
         <input
          className={styles.textbox}
          aria-label="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(loginAsync({username, password}))}
        >
          Login
        </button>
      </div>
    </div>
  );
}
