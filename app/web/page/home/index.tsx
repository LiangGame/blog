import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { SyncOutlined, EyeFilled } from '@ant-design/icons';
import styles from './index.module.less';
import { SSR } from '@/framework/app';
import { hot } from 'react-hot-loader/root';
import Layout from '@/component/layout';
import Header from '@/component/header';
import Footer from '@/component/footer';
import Banner from '@/component/banner';
import { debounce, getQiNiuImgUrl } from '@/common';
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
import TagsCharts from '@/component/tagesCharts';

// key: 显示的字符，value: 速度，越大越快
const wordCloud = {
  CSS: 380,
  博客: 470,
  JavaScript: 300,
  React: 320,
  动画: 400,
  HTML: 260,
  H5: 430,
  组件: 290,
  web: 280,
  前端工程师: 477,
};

const Home: React.FC<any> = (props) => {
  const [fixed, setFixed] = useState(false);
  const [clientWidth, setClientWidth] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  const onScroll = useCallback(() => {
    const { scrollTop } = document.documentElement;
    if (scrollTop >= 100) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }, []);

  const onResize = useCallback(() => {
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;

    setClientWidth(width);
    setClientHeight(height);
  }, []);

  useEffect(() => {
    onResize();
    const onResizeDebounce = debounce(onResize, 500);
    window.addEventListener('resize', onResizeDebounce);

    return () => {
      window.removeEventListener('resize', onResizeDebounce);
    };
  }, [onResize]);

  const bannerList = useMemo(() => {
    return [
      {
        id: 1,
        bg: '#0F1D24',
        pic: getQiNiuImgUrl('/backgroung/bg-01.jpg', clientWidth, clientHeight, 90, false),
      },
      {
        id: 2,
        bg: '#808386',
        pic: getQiNiuImgUrl('/backgroung/bg-02.jpg', clientWidth, clientHeight, 90, false),
      },
      {
        id: 3,
        bg: '#141812',
        pic: getQiNiuImgUrl('/backgroung/bg-03.jpg', clientWidth, clientHeight, 90, false),
      },
      {
        id: 4,
        bg: '#7B9FCC',
        pic: getQiNiuImgUrl('/backgroung/bg-04.jpg', clientWidth, clientHeight, 90, false),
      },
    ];
  }, [clientHeight, clientWidth]);

  return (
    <Layout {...props}>
      <Header url={props.url} fixed={fixed} onScroll={onScroll} />
      <section className={styles.banner}>
        <Banner dataSource={bannerList} />
      </section>
      <div id="main" className={styles.main}>
        <aside>
          <div className={styles['share-article']}>
            <div className={styles['aside-head']}>
              <h3>推荐文章</h3>
              <span className={styles['update-btn']}><SyncOutlined />换一批</span>
            </div>
            <div className={styles['share-list']}>
              <div className={styles['share-item']}>
                <div className={styles['article-cover']}>
                  <img src={getQiNiuImgUrl('/backgroung/bg-01.jpg', 80, 56, 70, false)} alt="" />
                </div>
                <div className={styles['article-info']}>
                  <p className={styles['article-title']}>
                    <a href="" title="">
                      假如我是标题假如我是标题假如我是标题假如我是标题.......
                    </a>
                  </p>
                  <div className={styles['basic-info']}>
                    <time>2020-04-26</time>
                    <span><EyeFilled /> 213</span>
                  </div>
                </div>
              </div>
              <div className={styles['share-item']}>
                <div className={styles['article-cover']}>
                  <img src={getQiNiuImgUrl('/backgroung/bg-01.jpg', 80, 56, 70, false)} alt="" />
                </div>
                <div className={styles['article-info']}>
                  <p className={styles['article-title']}>
                    <a href="" title="">antd - ant design of react</a>
                  </p>
                  <div className={styles['basic-info']}>
                    <time>2020-04-26</time>
                    <span><EyeFilled /> 213</span>
                  </div>
                </div>
              </div>
              <div className={styles['share-item']}>
                <div className={styles['article-cover']}>
                  <img src={getQiNiuImgUrl('/backgroung/bg-01.jpg', 80, 56, 70, false)} alt="" />
                </div>
                <div className={styles['article-info']}>
                  <p className={styles['article-title']}>
                    <a href="" title="">不再死背单词，用公式巧学英文</a>
                  </p>
                  <div className={styles['basic-info']}>
                    <time>2020-04-26</time>
                    <span><EyeFilled /> 213</span>
                  </div>
                </div>
              </div>
              <div className={styles['share-item']}>
                <div className={styles['article-cover']}>
                  <img src={getQiNiuImgUrl('/backgroung/bg-02.jpg', 80, 56, 70, false)} alt="" />
                </div>
                <div className={styles['article-info']}>
                  <p className={styles['article-title']}>
                    <a href="" title="">李佳琦从直播间消失的3分钟：“不要脸”的成年人，活得有多心酸</a>
                  </p>
                  <div className={styles['basic-info']}>
                    <time>2020-04-26</time>
                    <span><EyeFilled /> 213</span>
                  </div>
                </div>
              </div>
              <div className={styles['share-item']}>
                <div className={styles['article-cover']}>
                  <img src={getQiNiuImgUrl('/backgroung/bg-03.jpg', 80, 56, 70, false)} alt="" />
                </div>
                <div className={styles['article-info']}>
                  <p className={styles['article-title']}>
                    <a href="" title="">人到中年才读懂《挪威的森林》，但我希望你永远读不懂它</a>
                  </p>
                  <div className={styles['basic-info']}>
                    <time>2020-04-26</time>
                    <span><EyeFilled /> 213</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['hot-label']}>
            <h3 className={styles['label-head']}>
              标签
            </h3>
            <TagsCharts data={wordCloud} className={styles['tags-cloud']} />
          </div>
        </aside>
        <main className={styles['main-content']}>
          <section className={`${styles['section-content']} ${styles['blog-content']}`}>
            <h2 className={styles['blog-head']}>
              博客
            </h2>
            <div className={styles['blog-wrap']}>
              <div className={styles['blog-list']}>
                <div className={styles['blog-item']}>
                  <div className={styles['blog-basic-info']}>
                    <a href="" title="" className={styles['blog-title']}>疫情，让我认识到了老婆原来是个农村人</a>
                    <div className={styles['blog-desc']}>
                      我和老婆结婚已经八年了，在这八年当中，我们几乎是天天吵架，也不知道是为啥吵架，反正总能有话题吵架。 几度我们到了离婚的边缘，就算没有离婚，日子也...
                    </div>
                    <div className={styles['blog-other']}>
                      <div className={styles['blog-label']}>
                        <span>
                          <a href="" title="">javascript</a>
                        </span>
                        <span>
                          <a href="" title="">component</a>
                        </span>
                      </div>
                      <time>
                        2020-05-02 18:22
                      </time>
                    </div>
                  </div>
                  <div className={styles['blog-cover']}>
                    <img src={getQiNiuImgUrl('/backgroung/bg-03.jpg', 160, 104, 80, false)} alt="" />
                  </div>
                </div>
                <div className={styles['blog-item']}>
                  <div className={styles['blog-basic-info']}>
                    <a href="" title="" className={styles['blog-title']}>疫情，让我认识到了老婆原来是个农村人</a>
                    <div className={styles['blog-desc']}>
                      我和老婆结婚已经八年了，在这八年当中，我们几乎是天天吵架，也不知道是为啥吵架，反正总能有话题吵架。 几度我们到了离婚的边缘，就算没有离婚，日子也...
                      我和老婆结婚已经八年了，在这八年当中，我们几乎是天天吵架，也不知道是为啥吵架，反正总能有话题吵架。 几度我们到了离婚的边缘，就算没有离婚，日子也...
                    </div>
                    <div className={styles['blog-other']}>
                      <div className={styles['blog-label']}>
                        <span>
                          <a href="" title="">javascript</a>
                        </span>
                        <span>
                          <a href="" title="">component</a>
                        </span>
                      </div>
                      <time>
                        2020-05-02 18:22
                      </time>
                    </div>
                  </div>
                  <div className={styles['blog-cover']}>
                    <img src={getQiNiuImgUrl('/backgroung/bg-03.jpg', 160, 104, 80, false)} alt="" />
                  </div>
                </div>
                <div className={styles['blog-item']}>
                  <div className={styles['blog-basic-info']}>
                    <a href="" title="" className={styles['blog-title']}>疫情，让我认识到了老婆原来是个农村人</a>
                    <div className={styles['blog-desc']}>
                      我和老婆结婚已经八年了，在这八年当中，我们几乎是天天吵架，也不知道是为啥吵架，反正总能有话题吵架。 几度我们到了离婚的边缘，就算没有离婚，日子也...
                    </div>
                    <div className={styles['blog-other']}>
                      <div className={styles['blog-label']}>
                        <span>
                          <a href="" title="">javascript</a>
                        </span>
                        <span>
                          <a href="" title="">component</a>
                        </span>
                      </div>
                      <time>
                        2020-05-02 18:22
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={`${styles['section-content']} ${styles['anim-content']}`}>
            <h2 className={styles['anim-head']}>
              <Texty>动效 Animation</Texty>
            </h2>
            <div className={styles['anim-component-content']} >
              <div className={styles['anim-component-item']}>
                <div className={styles['anim-component-cover']}>
                  <img src={getQiNiuImgUrl('/backgroung/bg-03.jpg', 432, 264, 80, false)} alt="" />
                </div>
                <div className={styles['anim-content']}>
                  <h3 className={styles['anim-name']}>联动效果</h3>
                  <p className={styles['anim-desc']}>鼠标经过一点的联动效果</p>
                </div>
              </div>
              <div className={styles['anim-component-item']}>
                <div className={styles['anim-component-cover']}>
                  <img src={getQiNiuImgUrl('/backgroung/bg-03.jpg', 432, 264, 80, false)} alt="" />
                </div>
                <div className={styles['anim-content']}>
                  <h3 className={styles['anim-name']}>联动效果</h3>
                  <p className={styles['anim-desc']}>鼠标经过一点的联动效果</p>
                </div>
              </div>
              <div className={styles['anim-component-item']}>
                <div className={styles['anim-component-cover']}>
                  <img src={getQiNiuImgUrl('/backgroung/bg-03.jpg', 432, 264, 80, false)} alt="" />
                </div>
                <div className={styles['anim-content']}>
                  <h3 className={styles['anim-name']}>联动效果</h3>
                  <p className={styles['anim-desc']}>鼠标经过一点的联动效果</p>
                </div>
              </div>
              <div className={styles['anim-component-item']}>
                <div className={styles['anim-component-cover']}>
                  <img src={getQiNiuImgUrl('/backgroung/bg-03.jpg', 432, 264, 80, false)} alt="" />
                </div>
                <div className={styles['anim-content']}>
                  <h3 className={styles['anim-name']}>联动效果</h3>
                  <p className={styles['anim-desc']}>鼠标经过一点的联动效果</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <section className={`${styles['section-content']} ${styles['javascript-container']}`}>
        <h2 className={styles['javascript-head']}>
          组件
        </h2>
        <div className={styles['javascript-component-content']}>
          <div className={styles['javascript-promote']}>
            <img src={getQiNiuImgUrl('/background/bg-06.jpg', 660, 504, 80, false)} alt="" />
            <div className={styles['javascript-basic-info']}>
              <h3 className={styles['javascript-name']}>Kitchen「设计资产」重磅更新！</h3>
              <div className={styles['javascript-desc']}>作为 Ant Design 的好伙伴，Kitchen 已第一时间上架 Ant Design 4.0 最新 Sketch 组件包。</div>
            </div>
          </div>
          <div className={styles['javascript-content']}>
            <div className={styles['javascript-item']}>
              <img src={getQiNiuImgUrl('/background/bg-06.jpg', 432, 236, 80, false)} alt="" />
              <div className={styles['javascript-basic-info']}>
                <h3 className={styles['javascript-name']}>Kitchen「设计资产」重磅更新！</h3>
                <div className={styles['javascript-desc']}>作为 Ant Design 的好伙伴，Kitchen 已第一时间上架 Ant Design 4.0 最新 Sketch 组件包。</div>
              </div>
            </div>
            <div className={styles['javascript-item']}>
              <img src={getQiNiuImgUrl('/background/bg-06.jpg', 432, 236, 80, false)} alt="" />
              <div className={styles['javascript-basic-info']}>
                <h3 className={styles['javascript-name']}>Kitchen「设计资产」重磅更新！</h3>
                <div className={styles['javascript-desc']}>作为 Ant Design 的好伙伴，Kitchen 已第一时间上架 Ant Design 4.0 最新 Sketch 组件包。</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
};

export default EASY_ENV_IS_DEV ? SSR(hot(Home)) : SSR(Home);
