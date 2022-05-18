import styles from './ProgressBar.module.scss'

export function ProgressBar() {
  return (
    <div className={styles.progressBarContainer}>
      <div className={styles.progressBar} />
    </div>
  )
}
