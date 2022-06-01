import {
  ChangeEvent,
  KeyboardEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
} from 'react';

import { Button } from 'components/common/Button';
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import { userFilterOptions } from 'states/userFilterOptions';
import { userDataList } from 'states/userDataList';
import { userSearchResult } from 'states/userSearchResult';
import styles from './searchForm.module.scss';

interface Props {
  setFocusState: Dispatch<SetStateAction<boolean>>;
  focusState: boolean;
  // searchDataState: UserFilterOptions;
  // setSearchDataState: Dispatch<SetStateAction<UserFilterOptions>>;
}

function SearchFormInput({
  // searchDataState,
  // setSearchDataState,
  setFocusState,
  focusState,
}: Props) {
  const userData = useRecoilValue(userDataList);
  const setSearchResult = useSetRecoilState(userSearchResult);
  const [filterOptions, setFilterOptions] = useRecoilState(userFilterOptions);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [focusState]);

  // useEffect(() => {
  //   const onFocusInput = () => {
  //     setFocusState(true);
  //   }
  //   const onBlurInput = () => {
  //     setFocusState(true);
  //   }
  //   inputRef.current?.addEventListener('focus', onFocusInput);
  //   inputRef.current?.addEventListener('blur', onBlurInput);
  // })

  const onSubmitByEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;

    const { loginId, id, prevDate, nextDate } = filterOptions;

    if (!loginId && !id && !prevDate && !nextDate) {
      setSearchResult(userData);
    } else if (loginId || id) {
      setSearchResult(
        userData.filter(
          (data) =>
            (!loginId || data.loginId.includes(loginId)) &&
            (!id || String(data.id).includes(id))
        )
      );
    }
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilterOptions((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <dl className={styles.inputBox}>
      <div className={styles.inputList}>
        <dt className={styles.loginIdLabel}>로그인ID :</dt>
        <dd className={styles.loginIdDesc}>
          <input
            name="loginId"
            type="text"
            placeholder="전체"
            onChange={onChangeInput}
            value={filterOptions.loginId}
            ref={inputRef}
            onKeyDown={onSubmitByEnter}
          />
        </dd>
      </div>
      <div className={styles.inputList}>
        <dt className={styles.loginNumberLabel}>회원번호 :</dt>
        <dd className={styles.loginNumberDesc}>
          <input
            name="id"
            type="number"
            placeholder="전체"
            onChange={onChangeInput}
            value={filterOptions.id}
            onKeyDown={onSubmitByEnter}
          />
        </dd>
      </div>
      <div className={styles.inputList}>
        <dt className={styles.searchDateLabel}>조회기간 :</dt>
        <dd className={styles.searchDateDesc}>
          <input
            name="prevDate"
            type="number"
            placeholder="전체"
            onChange={onChangeInput}
            value={filterOptions.prevDate}
            onKeyDown={onSubmitByEnter}
          />
          ~
          <input
            name="nextDate"
            type="number"
            placeholder="전체"
            onChange={onChangeInput}
            value={filterOptions.nextDate}
            onKeyDown={onSubmitByEnter}
          />
        </dd>
        <dd className={styles.datePicker}>
          <Button className={styles.today} size="short">
            오늘
          </Button>
          <Button className={styles.week} size="short">
            1주일
          </Button>
          <Button className={styles.allday} size="short">
            전체
          </Button>
        </dd>
      </div>
    </dl>
  );
}

export default SearchFormInput;
