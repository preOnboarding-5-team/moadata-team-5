import { ChangeEvent, KeyboardEvent, RefObject } from 'react';
import { useSetRecoilState } from 'recoil';
import { userFilterOptions } from 'states/userFilterOptions';

interface Props {
  inputName: string;
  inputValue: string;
  focusRef: RefObject<HTMLInputElement>;
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
  type?: string;
}

function SearchInput({
  inputName,
  inputValue,
  focusRef,
  onKeyDown,
  onKeyPress,
  type,
}: Props) {
  const setFilterOptions = useSetRecoilState(userFilterOptions);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFilterOptions((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <input
      name={inputName}
      type={type}
      placeholder="전체"
      onChange={onChangeInput}
      value={inputValue}
      ref={focusRef}
      onKeyDown={onKeyDown}
      onKeyPress={onKeyPress}
    />
  );
}

export default SearchInput;
