import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.less';

const Footer: React.FC<any> = props => {
  return (
    <footer className={styles['footer-content']}>
      <section>
        <div>
          {props.title}
        </div>
        <div className={styles['friend-link']}>
          <span className={styles['friend-link-title']}>友情链接：</span>
          <ul>
            <li><a href="/" target="_blank" title="秃笔翁">秃笔翁</a></li>
          </ul>
        </div>
        <div className={styles['author-info']}>
          <ul>
            <li>
              GitHub: <a href="https://github.com/LiangGame" target="_blank" rel="nofollow">https://github.com/LiangGame</a>
            </li>
            <li>
              Email: <a href="mailto:15517072173@163.com" target="_blank" rel="nofollow">15517072173@163.com</a>
            </li>
          </ul>
        </div>
        <div className={styles['site-info']}>
          <p><a href="http://www.beian.miit.gov.cn/" target="_blank" rel="nofollow">豫ICP备19041155号</a> | Copyright © 2020-{new Date().getFullYear()}</p>
        </div>
      </section>
    </footer>
  );
};

Footer.propTypes = {
  title: PropTypes.string,
};

export default Footer;
