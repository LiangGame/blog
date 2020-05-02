import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import { scrollScreen, Link } from 'rc-scroll-anim';
import styles from './index.module.less';
import 'rc-banner-anim/assets/index.css';
// import { Button } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';

const { BgElement } = Element;

interface BannerProps {
  dataSource: any[]
}

const animation = [
  {
    y: -24,
    repeat: -1,
    duration: 1500,
    yoyo: true,
  },
  {
    y: 8,
    repeat: -1,
    duration: 1500,
    yoyo: true,
  },
];

const Banner: React.FC<BannerProps> = ({ dataSource }) => {
  useEffect(() => {
    // scrollScreen.init({ loop: true });

    return () => {
      scrollScreen.unMount();
    };
  }, []);

  return (
    <div className={styles['banner-content']}>
      <TweenOneGroup
        key="tweenOneGroup"
        enter={{ opacity: 0, type: 'from' }}
        leave={{ opacity: 0 }}
      >
        <BannerAnim
          prefixCls={styles['banner-user']}
          autoPlay
        >
          {
            dataSource.map((el, idx) => {
              return (
                <Element
                  prefixCls={styles['banner-user-elem']}
                  key={el.id}
                >
                  <BgElement
                    key={`bg${el.id}`}
                    className={styles.bg}
                    style={{
                      background: `${el.bg} url(${el.pic}) no-repeat center`,
                    }}
                  />
                  <TweenOne
                    className={styles['banner-user-title']}
                    animation={{ y: 30, opacity: 0, type: 'from' }}
                  >
                    秃笔翁的博客
                  </TweenOne>
                  <TweenOne
                    className={styles['banner-user-text']}
                    animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                  >
                    分享的不只是代码，还有生活。share code and life.
                  </TweenOne>
                </Element>
              );
            })
          }
          <TweenOne
            className={styles['banner-handle-content']}
            animation={{ y: 30, scale: 0, type: 'from', delay: 200 }}
          >
            <Link className={styles['get-more-btn']} to="main">
              下滑 More
            </Link>
          </TweenOne>
        </BannerAnim>
      </TweenOneGroup>
      <div className={styles['more-icon']}>
        <Link to="main">
          <TweenOne animation={animation}>
            <CaretDownOutlined />
          </TweenOne>
        </Link>
      </div>
    </div>
  );
};

Banner.propTypes = {
  dataSource: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Banner;
