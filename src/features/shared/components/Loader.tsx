import { css } from "@emotion/css";

function Loader() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.loader}/>
        <span>Loading...</span>
      </div>
    </div>
  )
}

const styles = ({
  container: css({
    width: '100%',
    height: '100%',
    background: '#b1b1b1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }),
  content: css({
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center'
  }),
  loader: css({
    border: '8px solid #f3f3f3',
    borderRadius: '50%',
    borderTop: '8px solid #69767f',
    width: 60,
    height: 60,
    '-webkit-animation': 'spin 2s linear infinite',
    animation: 'spin 2s linear infinite',
  })
})

export default Loader;