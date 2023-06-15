import { PropsWithChildren } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';

import { FAVORITE_URL, HOME_URL } from '../constants';
import { css } from '@emotion/css';

function MainLayouts ({ children }: PropsWithChildren) {
  const navigate = useNavigate()
  function handleRedirect (url: string) {
    navigate(url)
  }
  return (
    <div className={styles.container}>
      <BottomNavigation
        showLabels
        style={{
          borderBottom: '1px solid #c0c0c0'
        }}
      >
        <BottomNavigationAction onClick={() => handleRedirect(HOME_URL)} label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction onClick={() => handleRedirect(FAVORITE_URL)} label="Favorites" icon={<FavoriteIcon />} />
      </BottomNavigation>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

const styles = {
  container: css({
    height: '100vh'
  }),
  content: css({
    height: 'calc(100vh - 89px)'
  })
}

export default MainLayouts;