import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root';
import styles from './index.module.less';
import { EyeFilled, CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import Layout from '@/component/layout';
import Header from '@/component/header';
import { SSR } from '@/framework/app';
import Footer from '@/component/footer';
import { getQiNiuImgUrl } from '@/common';
import QueueAnim from 'rc-queue-anim';

const Main: React.FC<any> = (props) => {
  const [showTop, setShowTop] = useState(true);

  return (
    <Layout {...props}>
      <Header url={props.url} fixed={false} />
      <section className={styles['blog-container']}>
        <aside>
          <section className={styles['classify-content']}>
            <div className={styles['classify-head']}>
              分类
            </div>
            <ul className={styles['classify-list']}>
              <li className={styles['classify-active']}>
                <span>全部</span>
                <span>182</span>
              </li>
              <li>
                <span>CSS</span>
                <span>100</span>
              </li>
              <li>
                <span>JavaScript</span>
                <span>8</span>
              </li>
              <li>
                <span>Node.js</span>
                <span>9</span>
              </li>
              <li>
                <span>React</span>
                <span>28</span>
              </li>
            </ul>
          </section>
        </aside>
        <main>
          <section className={styles['article-top']}>
            <div className={`${styles['article-head']} ${styles['top-head']}`}>
              <span>置顶文章</span>
              <span
                className={styles['show-icon']}
                onClick={() => {
                  setShowTop(!showTop);
                }}
              >
                {
                  showTop ? (<CaretDownOutlined />) : (<CaretUpOutlined />)
                }
              </span>
            </div>
            <QueueAnim delay={300} className={styles['top-article-list']}>
              {
                showTop ? [
                  <div key="a" className={styles['article-item']}>
                    <div className={styles['article-cover']}>
                      <img src={getQiNiuImgUrl('/backgroung/bg-03.jpg', 784, 296, 80, false)} alt="" />
                    </div>
                    <div className={styles['article-title']}>
                      <a href="" title="">【矢量源文件】从常用图表到 DashBoard 页面模板，懒人套餐请享用吧！</a>
                    </div>
                    <div className={styles['article-desc-content']}>
                      <div className={styles['article-desc']}>
                        随着 AntDesign 4.0 发布 和 AntV 的重磅产品G2 4.0 发布之际，图表的样式也跟着 UP！UP ！大升级了哦。在文章末尾有最新版 Sketch
                        图表源文件下载。无门槛无需点赞无需套路，直接下载插一句：蚂蚁可视化 &amp; 大数据招体验设计师，简历发 …
                      </div>
                    </div>
                    <div className={styles['article-other']}>
                      <div className={styles['label-wrap']}>
                        <a href="" title="">javascript</a>
                      </div>
                      <div className={styles['article-actions']}>
                        <span className={styles['article-view']}><EyeFilled />2430</span>
                        <time>2020-05-03 17:22</time>
                      </div>
                    </div>
                  </div>,
                  <div key="b" className={styles['article-item']}>
                    <div className={styles['article-cover']}>
                      <img src={getQiNiuImgUrl('/backgroung/bg-03.jpg', 784, 296, 80, false)} alt="" />
                    </div>
                    <div className={styles['article-title']}>
                      <a href="" title="">【矢量源文件】从常用图表到 DashBoard 页面模板，懒人套餐请享用吧！</a>
                    </div>
                    <div className={styles['article-desc-content']}>
                      <div className={styles['article-desc']}>
                        随着 AntDesign 4.0 发布 和 AntV 的重磅产品G2 4.0 发布之际，图表的样式也跟着 UP！UP ！大升级了哦。在文章末尾有最新版 Sketch
                        图表源文件下载。无门槛无需点赞无需套路，直接下载插一句：蚂蚁可视化 &amp; 大数据招体验设计师，简历发 …
                      </div>
                    </div>
                    <div className={styles['article-other']}>
                      <div className={styles['label-wrap']}>
                        <a href="" title="">javascript</a>
                      </div>
                      <div className={styles['article-actions']}>
                        <span className={styles['article-view']}><EyeFilled />2430</span>
                        <time>2020-05-03 17:22</time>
                      </div>
                    </div>
                  </div>,
                ] : null
              }
            </QueueAnim>
          </section>
          <section className={styles['article-list']}>
            <div className={styles['article-head']}>最新文章</div>
            <div className={styles['article-item']}>
              <div className={styles['article-title']}>
                <a href="" title="">【矢量源文件】从常用图表到 DashBoard 页面模板，懒人套餐请享用吧！</a>
              </div>
              <div className={styles['article-desc-content']}>
                <div className={styles['article-cover']}>
                  <img src={getQiNiuImgUrl('/backgroung/bg-03.jpg', 192, 136, 80, false)} alt="" />
                </div>
                <div className={styles['article-desc']}>
                  随着 AntDesign 4.0 发布 和 AntV 的重磅产品G2 4.0 发布之际，图表的样式也跟着 UP！UP ！大升级了哦。在文章末尾有最新版 Sketch
                  图表源文件下载。无门槛无需点赞无需套路，直接下载插一句：蚂蚁可视化 &amp; 大数据招体验设计师，简历发 …
                </div>
              </div>
              <div className={styles['article-other']}>
                <div className={styles['label-wrap']}>
                  <a href="" title="">javascript</a>
                </div>
                <div className={styles['article-actions']}>
                  <span className={styles['article-view']}><EyeFilled />2430</span>
                  <time>2020-05-03 17:22</time>
                </div>
              </div>
            </div>
            <div className={styles['article-item']}>
              <div className={styles['article-title']}>
                <a href="" title="">【矢量源文件】从常用图表到 DashBoard 页面模板，懒人套餐请享用吧！</a>
              </div>
              <div className={styles['article-desc-content']}>
                <div className={styles['article-desc']}>
                  随着 AntDesign 4.0 发布 和 AntV 的重磅产品G2 4.0 发布之际，图表的样式也跟着 UP！UP ！大升级了哦。在文章末尾有最新版 Sketch
                  图表源文件下载。无门槛无需点赞无需套路，直接下载插一句：蚂蚁可视化 &amp; 大数据招体验设计师，简历发 …
                </div>
              </div>
              <div className={styles['article-other']}>
                <div className={styles['label-wrap']}>
                  <a href="" title="">javascript</a>
                </div>
                <div className={styles['article-actions']}>
                  <span className={styles['article-view']}><EyeFilled />2430</span>
                  <time>2020-05-03 17:22</time>
                </div>
              </div>
            </div>
            <div className={styles['article-item']}>
              <div className={styles['article-title']}>
                <a href="" title="">【矢量源文件】从常用图表到 DashBoard 页面模板，懒人套餐请享用吧！</a>
              </div>
              <div className={styles['article-desc-content']}>
                <div className={styles['article-desc']}>
                  随着 AntDesign 4.0 发布 和 AntV 的重磅产品G2 4.0 发布之际，图表的样式也跟着 UP！UP ！大升级了哦。在文章末尾有最新版 Sketch
                  图表源文件下载。无门槛无需点赞无需套路，直接下载插一句：蚂蚁可视化 &amp; 大数据招体验设计师，简历发 …
                </div>
                <div className={styles['article-cover']} style={{ margin: '0 0 0 16px' }}>
                  <img src={getQiNiuImgUrl('/backgroung/bg-03.jpg', 192, 136, 80, false)} alt="" />
                </div>
              </div>
              <div className={styles['article-other']}>
                <div className={styles['label-wrap']}>
                  <a href="" title="">javascript</a>
                </div>
                <div className={styles['article-actions']}>
                  <span className={styles['article-view']}><EyeFilled />2430</span>
                  <time>2020-05-03 17:22</time>
                </div>
              </div>
            </div>
          </section>
        </main>
      </section>
      <Footer />
    </Layout>
  );
};

Main.propTypes = {
  url: PropTypes.string.isRequired,
};

export default EASY_ENV_IS_DEV ? SSR(hot(Main)) : SSR(Main);
