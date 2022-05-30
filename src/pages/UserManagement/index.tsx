import styles from './userManagement.module.scss';

function UserManagement() {
  return (
    <div className={styles.managementWrapper}>
      <header className={styles.managementTitle}>
        <h2 className={styles.managementText}>회원 관리</h2>
      </header>
      <section className={styles.searchSection}>
        <header className={styles.title}>
          <h3 className={styles.titleText}>회원 검색</h3>
        </header>
        <form className={styles.searchSectionForm}>
          <dl className={styles.inputBox}>
            <div className={styles.inputList}>
              <dt className={styles.loginIdLabel}>로그인ID :</dt>
              <dd className={styles.loginIdDesc}>
                <input
                  type="text"
                  id="loginId"
                  className={styles.loginIdInput}
                  placeholder="전체"
                />
              </dd>
            </div>
            <div className={styles.inputList}>
              <dt className={styles.loginNumberLabel}>회원번호 :</dt>
              <dd className={styles.loginNumberDesc}>
                <input
                  type="text"
                  id="loginNumber"
                  className={styles.loginNumberInput}
                  placeholder="전체"
                />
              </dd>
            </div>
            <div className={styles.inputList}>
              <dt className={styles.searchDateLabel}>조회기간 :</dt>
              <dd className={styles.searchDateDesc}>
                <input
                  type="text"
                  className={styles.searchDateInput}
                  placeholder="전체"
                />
                ~
                <input
                  type="text"
                  className={styles.searchDateInput}
                  placeholder="전체"
                />
              </dd>
              <dd className={styles.datePicker}>
                <button
                  className={styles.selectToday}
                  type="button"
                  aria-label="select-today-button"
                >
                  오늘
                </button>
                <button
                  className={styles.selectWeek}
                  type="button"
                  aria-label="select-week-button"
                >
                  1주일
                </button>
                <button
                  className={styles.selectAll}
                  type="button"
                  aria-label="select-all-date-button"
                >
                  전체
                </button>
              </dd>
            </div>
          </dl>
          <div className={styles.buttonBox}>
            <button
              className={styles.searchButton}
              type="button"
              aria-label="search-button"
            >
              검색
            </button>
            <button
              className={styles.resetFilterButton}
              type="button"
              aria-label="reset-filter-button"
            >
              필터 초기화
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default UserManagement;
