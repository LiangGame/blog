import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.less';
import { SearchOutlined } from '@ant-design/icons';

interface HeaderProps {
  url: string
  fixed: boolean
  onScroll?: () => void
}

const Header: React.FC<HeaderProps> = ({ url, fixed, onScroll }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // console.log('Header:::', url);
    if (onScroll) {
      window.addEventListener('scroll', onScroll);

      return () => {
        onScroll && window.removeEventListener('scroll', onScroll);
      };
    }
  }, [onScroll]);

  useEffect(() => {
    if (url === '/') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, [url]);

  return (
    <header className={`${styles.header} ${fixed ? styles['header-fixed'] : ''} ${theme === 'light' ? styles['header-light'] : styles['header-dark']}`}>
      <div className={styles.logo}>Logo</div>
      <div className={styles['site-head']}>
        <div className={styles['search-content']}>
          <input type="text" placeholder="搜索" />
          <div className={styles['search-icon']}>
            <SearchOutlined />
          </div>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li className={url === '/' ? styles['nav-selected'] : ''}>
              <a href="/" title="首页">首页</a>
            </li>
            <li className={url === '/blog' ? styles['nav-selected'] : ''}>
              <a href="/blog" title="博客">博客</a>
            </li>
            <li className={url === '/animation' ? styles['nav-selected'] : ''}>
              <a href="">动效</a>
            </li>
            <li className={url === '/javascript' ? styles['nav-selected'] : ''}>
              <a href="">组件</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  url: PropTypes.string.isRequired,
  fixed: PropTypes.bool.isRequired,
  onScroll: PropTypes.func,
};

export default Header;
