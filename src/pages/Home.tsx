import { css } from '@emotion/css';

import SearchSection from "../features/home/components/SearchSection";
import RandomSection from '../features/home/components/RandomSection';
import FirstLetterSection from '../features/home/components/FirstletterSection';
import MainLayouts from '../features/shared/layouts/MainLayouts';

function Home () {
  return (
    <MainLayouts>
      <div className={styles.container}>
        <SearchSection />
        <RandomSection />
        <FirstLetterSection />
      </div>
    </MainLayouts>
  )
}

const styles = {
  container: css({
    padding: 24,
    height: '100%'
  })
}

export default Home;