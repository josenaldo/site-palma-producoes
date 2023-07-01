'use client'

import styles from './Loader.module.css'

export default function Loader({ color = 'secondary' }) {
  return (
    <div className={styles.loader}>
      <svg className={styles.circularLoader} viewBox="25 25 50 50">
        <circle
          className={styles.loaderPath}
          cx="50"
          cy="50"
          r="20"
          fill="none"
        ></circle>
      </svg>
    </div>
  )
}
