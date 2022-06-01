import { useState } from 'react';

import SearchFormButton from './SearchFormButton';
import SearchFormInput from './SearchFormInput';
import styles from './searchForm.module.scss';

function SearchForm() {
  const [focusState, setFocusState] = useState(false);

  return (
    <section className={styles.searchSection}>
      <header className={styles.title}>
        <h3 className={styles.titleText}>회원 검색</h3>
      </header>
      <form className={styles.searchSectionForm}>
        <SearchFormInput focusState={focusState} />
        <SearchFormButton setFocusState={setFocusState} />
      </form>
    </section>
  );
}

export default SearchForm;
