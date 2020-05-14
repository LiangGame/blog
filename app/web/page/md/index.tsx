import React, { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.less';
import Editor, { MdEditor } from 'for-editor';
import { CSR } from '@/framework/app';
import { hot } from 'react-hot-loader/root';
import { Input, Button } from 'antd';
import axios from '@/framework/request';

type Scene = 'create' | 'update';
interface MdProps {
  phoneNumber: string;
  blogId: string;
  blogTitle: string;
  blogContent: string;
  scene: Scene;
}
const Md: React.FC<MdProps> = props => {
  const $vm = useRef<MdEditor>();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('![alt](http://q9o1c3w1a.bkt.clouddn.com/backgroung/bg-03.jpg)');
  const { phoneNumber, scene, blogId, blogTitle, blogContent } = props;

  const initEdit = useCallback(() => {
    if (scene === 'update') {
      setTitle(blogTitle);
      setContent(blogContent);
    }
  }, [blogContent, blogTitle, scene]);

  useEffect(() => {
    console.log('Md:::', props);
    initEdit();
  }, [initEdit, props]);

  const handleChange = (value) => {
    setContent(value);
  };

  const handleSave = async (value) => {
    console.log(phoneNumber);
    // setContent(value);
    const params: Record<string, any> = {
      content: value,
      title,
      phoneNumber,
    };

    if (scene === 'create') {
      await axios.post('/api/blog/create', params);
    } else if (scene === 'update') {
      params.id = blogId;
      await axios.post('/api/blog/update', params);
    }
  };

  const addImg = ($file) => {
    $vm.current && $vm.current.$img2Url($file.name, 'file_url');
    console.log($vm, $file);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
    setContent(`# ${e.currentTarget.value} \n`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Input size="large" placeholder="标题" value={title} onChange={handleTitleChange} />
        <Button className={styles.submit} size="large" type="primary">发布</Button>
      </div>
      <Editor
        ref={$vm}
        value={content}
        onChange={handleChange}
        onSave={handleSave}
        addImg={addImg}
        placeholder="每日一篇"
        height={'calc(100% - 72px)'}
        preview
        subfield
      />
    </div>
  );
};

Md.propTypes = {
  phoneNumber: PropTypes.string.isRequired,
  blogId: PropTypes.string.isRequired,
  blogTitle: PropTypes.string.isRequired,
  blogContent: PropTypes.string.isRequired,
  scene: PropTypes.oneOf<Scene>(['create', 'update']).isRequired,
};

export default EASY_ENV_IS_DEV ? CSR(hot(Md)) : CSR(Md);
