import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root';
import styles from './index.module.less';
import Layout from '@/component/layout';
import Header from '@/component/header';
import { SSR } from '@/framework/app';
import Footer from '@/component/footer';

const Main: React.FC<any> = (props) => {
  return (
    <Layout {...props}>
      <Header url={props.url} fixed={false} />
      <section className={styles['blog-container']}>
        <aside>
          aside
        </aside>
        <main >
          main
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
