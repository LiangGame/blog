import React, { useRef, useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.less';

interface TagsChartsProps {
  data: Record<string, any>
  className: string
}

const ColorList = ['#21bfd7', '#461ba9', '#d838ab', '#2c84f0', '#21d78f', '#cf6172'];

let timer: any = null;
const n = 0;

const TagsCharts: React.FC<TagsChartsProps> = ({ data, className }) => {
  const Chart = useRef<HTMLDivElement>(null);

  const initialize = (item: any) => {
    const iLeft = parseInt(String(Math.random() * ((Chart.current && Chart.current.offsetWidth) || 0)));
    const keyWeight = item.getAttribute('data-value');
    const iTimer = parseInt(String(keyWeight * 1500));
    item.pause = 0;
    let left = 0;
    if ((iLeft - item.offsetWidth) > 0) {
      left = iLeft - item.offsetWidth;
    } else {
      left = iLeft;
    }
    item.style.left = `${left}px`;
    clearTimeout(item.time);
    item.time = setTimeout(() => {
      item.pause = 1;
    }, iTimer);
  };

  const renderKeyWord = () => {
    const len = ColorList.length;
    if (Object.keys(data).length) {
      const arr: Array<Record<string, any>> = [];
      let index = 0;
      for (const key in data) {
        arr.push({
          name: key,
          value: Math.sqrt(data[key]),
          color: ColorList[index],
        });
        index = (index + 1) % len === 0 ? 0 : index + 1;
      }
      return arr.map((item) => {
        const fontSize = `${Math.sqrt(16) * Math.sqrt(item.value)}px`;

        return (
          <span
            key={item.name}
            data-value={item.value}
            data-isspeed={((1 / item.value * 40) + 1).toFixed(2)}
            style={{ fontSize, color: item.color }}
          >
            {item.name}
          </span>
        );
      });
    } else {
      return [];
    }
  };

  const delayLoop = useCallback((children) => {
    const starmove = () => {
      for (let i = 0; i < children.length; i++) {
        if (children[i].offsetTop <= -(children[i].offsetHeight)) {
          if (Chart.current) {
            children[i].style.top = `${Chart.current.offsetHeight}px`;
          }
          initialize(children[i]);
        } else if (!children[i].style.top) {
          children[i].style.top = `${children[i].offsetTop + (((children[i - 1] && children[i - 1].offsetHeight) || 0) * i)}px`;
        } else {
          children[i].style.top = `${children[i].offsetTop - children[i].getAttribute('data-isspeed')}px`;
        }
      }
    };

    timer = setTimeout(() => {
      clearTimeout(timer);
      starmove();
      delayLoop(children);
    }, 50);
  }, []);

  useEffect(() => {
    if (Chart.current) {
      const children = Chart.current.childNodes;
      for (let i = 0; i < children.length; i++) {
        const child: any = children[i];
        child.pause = 1;
        child.time = null;
        initialize(children[i]);
      }
      delayLoop(children);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [delayLoop]);

  return (
    <div className={`${styles.keywords} ${className}`} ref={Chart}>
      {renderKeyWord()}
    </div>
  );
};

TagsCharts.propTypes = {
  data: PropTypes.object.isRequired, // 词云的数据
  className: PropTypes.string.isRequired,
};

export default TagsCharts;
