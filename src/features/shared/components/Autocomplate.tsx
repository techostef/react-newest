import { css } from '@emotion/css';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { IOption } from '../types';

interface IProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading?: boolean;
  options: IOption[];
  searchKey?: string;
  onClick?: (selected: IOption) => void;
  label?: string;
}

function Autocomplate ({ onChange, options, searchKey, onClick, label, isLoading }: IProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.container}>
      <TextField 
        id="input-autocomplate" 
        label={label} 
        onFocus={() => setIsOpen(true)}
        onBlur={() => {
          setTimeout(() => {
            setIsOpen(false)
          }, 300)
        }}
        variant="standard" 
        onChange={onChange} 
        style={{
          width: '100%'
        }}
      />
      {isOpen && !!options.length && (
        <div className={styles.items}>
          {options.map((item) => (
            <div className={styles.item} key={item.value} onClick={() => onClick?.(item)}>{item.label}</div>
          ))}
        </div>
      )}
      {isLoading && (
        <div className={styles.items}>
          <div className={styles.item}>Loading...</div>
        </div>
      )}
      {!isLoading && searchKey && options.length === 0 && (
        <div className={styles.items}>
          <div className={styles.item}>Not Found</div>
        </div>
      )}
    </div>
  )
}

const styles = {
  container: css({
    display: 'flex',
    position: 'relative',
    width: 300,
    background: 'white',
  }),
  items: css({
    left: 0,
    top: 'calc(100%)',
    position: 'absolute',
    textAlign: 'left',
    width: '100%',
    maxHeight: 300,
    overflowY: 'auto',
    '&': {
      '::-webkit-scrollbar': {
        width: 3
      },
      '::-webkit-scrollbar-track': {
        background: '#f1f1f1'
      },
      '::-webkit-scrollbar-thumb': {
        background: '#888'
      }
    },
    background: 'white',
  }),
  item: css({
    border: '1px solid #d2d2d2',
    width: 'calc(100% - 18px)',
    padding: 8,
    cursor: 'pointer'
  })
}

export default Autocomplate;