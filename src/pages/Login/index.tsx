import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import cx from 'classnames';
import { useNavigate } from 'react-router-dom';
import store from 'store';

import {
  LogoImage,
  VisibilityOnIcon,
  VisibilityOffIcon,
} from 'assets/svgs/index';

import Button from 'components/common/Button';
import { loginData } from './loginData.js';

import styles from './login.module.scss';

interface FormInput {
  id: string;
  pw: string;
}

function Login() {
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);
  const [alert, setAlert] = useState('');
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    setFocus,
  } = useForm<FormInput>();

  const onSubmit = () => {
    // getValues()로 data 가져오기
    const { id, pw } = getValues();
    if (loginData.id !== id) setAlert('존재하지 않는 아이디입니다.');
    else if (loginData.pw !== pw) setAlert('일치하지 않는 패스워드입니다.');
    else {
      const obj = { isLogin: true, expire: Date.now() + 3000 * 60 * 60 };

      store.set('loginData', obj);
      navigate('/', { replace: true });
    }

    setIsAlertVisible(true);
    setTimeout(() => setIsAlertVisible(false), 3000);
  };

  const handleVisible = () => {
    setIsVisible((prev) => !prev);
  };

  useEffect(() => {
    setFocus('id');
  }, [setFocus]);

  return (
    <div className={styles.wrap}>
      <div className={styles.loginWrap}>
        <LogoImage className={styles.logo} />
        <p className={cx(styles.alert, { [styles.active]: isAlertVisible })}>
          {alert}
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            id="id"
            placeholder="ID"
            {...register('id', {
              required: true,
            })}
          />

          {errors.id?.type === 'required' && <span>필수 입력 항목입니다.</span>}

          <div className={styles.inputWrap}>
            <input
              id="pw"
              type={isVisible ? 'text' : 'password'}
              placeholder="PASSWORD"
              {...register('pw', {
                required: true,
                minLength: { value: 5, message: '최소 5글자 입력해주세요' },
              })}
            />
            {isVisible ? (
              <VisibilityOnIcon
                className={styles.icon}
                onClick={handleVisible}
              />
            ) : (
              <VisibilityOffIcon
                className={styles.icon}
                onClick={handleVisible}
              />
            )}
          </div>

          {errors.pw?.type === 'required' && <span>필수 입력 항목입니다.</span>}
          {errors.pw?.message && <span>{errors.pw?.message}</span>}
          <Button size="long" type="submit" className={styles.loginButton}>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
export default Login;
