import {createRoot} from 'react-dom/client';
import {transform} from 'framer-motion';
import {css, cx} from '@emotion/css';
import {useEffect, useMemo, createRef} from 'react';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import Splitting from 'splitting';
import anime from 'animejs';
import '@fontsource/kaushan-script';
import './styles/index.scss';
import {Button} from '@mui/material';
import * as d3 from 'd3';

const pList = [
  {
    title: `Cowboy Bebop`,
    imageURLList: [
      `https://media.giphy.com/media/BrFTdYQmMXduw/giphy.gif`,
      `https://media.giphy.com/media/BrFTdYQmMXduw/giphy.gif`,
      `https://media.giphy.com/media/BrFTdYQmMXduw/giphy.gif`,
    ],
  },
  {
    title: `Spike Spiegel`,
    imageURLList: [
      `https://media.giphy.com/media/4ilFRqgbzbx4c/giphy.gif`,
      `https://media.giphy.com/media/b21HcSrrBu8pi/giphy.gif`,
      `https://media.giphy.com/media/I3rRuRiiAuXJu/giphy.gif`,
    ],
  },
  {
    title: `Faye Valentine`,
    imageURLList: [
      `https://media.giphy.com/media/3TACspcXhhQPK/giphy.gif`,
      `https://media.giphy.com/media/10VjiVoa9rWC4M/giphy.gif`,
      `https://media.giphy.com/media/mQrlOWKOApfFu/giphy.gif`,
    ],
  },
  {
    title: `Edward Wong Hau Pepelu Tivrusky IV`,
    imageURLList: [
      `https://media.giphy.com/media/rX0VO4YJcrjqw/giphy.gif`,
      `https://media.giphy.com/media/8hXlcywWOFiJW/giphy.gif`,
      `https://media.giphy.com/media/udhngZK2IFTc4/giphy.gif`,
    ],
  },
  {
    title: `Jet Black`,
    imageURLList: [
      `https://media.giphy.com/media/vRKJTZ1w731kc/giphy.gif`,
      `https://media.giphy.com/media/JnwzVoKpIvZEQ/giphy.gif`,
      `https://media.giphy.com/media/zy89dUFZCagFy/giphy.gif`,
    ],
  },
];

// const pList = [
//   `神よ`,
//   `変えることのできるものについて`,
//   `それを変えるだけの勇気をわれらに与えたまえ`,
//   `変えることのできないものについては`,
//   `それを受けいれるだけの冷静さを与えたまえ`,
//   `そして`,
//   `変えることのできるものと、変えることのできないものとを`,
//   `識別する知恵を与えたまえ`,
// ];

const App = () => {
  const stageDomRefs = useMemo(() => {
    return pList.map((n, index) => {
      return createRef();
    });
  }, []);
  const pDomRefs = useMemo(() => {
    return pList.map((n, index) => {
      return createRef();
    });
  }, []);

  const imageDomRefs = useMemo(() => {
    let a = [];
    pList.forEach((p, i) => {
      a[i] = [...Array(p.imageURLList.length)];
      p.imageURLList.forEach((f, j) => {
        a[i][j] = createRef();
      });
    });
    return a;
  }, []);

  const timeLine = useMemo(() => {
    return anime.timeline({
      autoplay: false, // 停止状態でアニメなどを構築しておく
    });
  }, []);

  useEffect(() => {
    const stageDomList = stageDomRefs.map((stageDomRef, index) => {
      return stageDomRef.current;
    });
    const pDomList = pDomRefs.map((pDomRef, index) => {
      return pDomRef.current;
    });

    pDomList.forEach((pDom, index) => {
      const images = imageDomRefs[index].map((imageDomRef, index) => {
        return imageDomRef.current;
      });
      console.log(images);
      const [{words, chars}] = Splitting({
        target: pDom,
        by: 'chars',
        whitespace: true,
      });
      timeLine
        .add({
          //ステージのフェードイン
          targets: stageDomList[index],
          opacity: {
            value: 1,
            easing: 'linear',
          },
          duration: 400,
          // begin: function (anim) {
          //   console.log(`stage fadein`, `[begin]`, anim.completed);
          // },
          // update: function (anim) {
          //   console.log(`stage fadein`, `[update]`, anim.progress);
          // },
          // complate: function (anim) {
          //   console.log(`stage fadein`, `[complate]`, anim.completed);
          // },
        })
        .add({
          //文字のアニメーション
          targets: words,
          //1個おきに大きかったり小さかったり角度を付けたり
          scale: function (el, index) {
            return index % 2 ? [0, 1] : [0, 1.5];
          },
          rotate: function (el, index) {
            return index % 2 ? [15, 15] : [-15, -15];
          },
          easing: 'easeOutCubic',
          duration: 400,
          //1文字ずつ200ミリ秒遅延させる
          delay: anime.stagger(150),
          // begin: function (anim) {
          //   console.log(`text fadein`, `[begin]`, anim.completed);
          // },
          // update: function (anim) {
          //   console.log(`text fadein`, `[update]`, anim.progress);
          // },
          // complate: function (anim) {
          //   console.log(`text fadein`, `[complate]`, anim.completed);
          // },
        })
        .add({
          targets: images,
          scale: function (el, index) {
            return index % 2 ? [0, 0.7] : [0, 0.8];
          },
          rotate: function (el, index) {
            return index % 2 ? [15, 15] : [-15, -15];
          },
          easing: 'linear',
          duration: 100,
          delay: anime.stagger(150),
        })
        .add(
          {
            //文字が全部表示されたら文字を消す
            targets: words,
            opacity: 0,
            //1文字ずつ交互に上下に動く
            top: function (el, index) {
              return index % 2 ? '1rem' : '-1rem';
            },
            scale: '+=1.2',
            easing: 'easeOutCubic',
            duration: 600,
            // begin: function (anim) {
            //   console.log(`text fadeout`, `[begin]`, anim.completed);
            // },
            // update: function (anim) {
            //   console.log(`text fadeout`, `[update]`, anim.progress);
            // },
            // complate: function (anim) {
            //   console.log(`text fadeout`, `[complate]`, anim.completed);
            // },
          },
          '-=100'
        )
        .add({
          //ステージのフェードアウト
          targets: stageDomList[index],
          opacity: {
            value: 0,
            easing: 'linear',
          },
          duration: 400,
          // begin: function (anim) {
          //   console.log(`stage fadeout`, `[begin]`, anim.completed);
          // },
          // update: function (anim) {
          //   console.log(`stage fadeout`, `[update]`, anim.progress);
          // },
          // complate: function (anim) {
          //   console.log(`stage fadeout`, `[complate]`, anim.completed);
          // },
        });
    });
  }, []);

  const handlePlay = (e) => {
    timeLine.play();
  };
  const handlePause = (e) => {
    timeLine.pause();
  };

  return (
    <>
      <Button variant={'outlined'} onClick={handlePlay}>
        Do
      </Button>
      <Button variant={'outlined'} onClick={handlePause}>
        Pause
      </Button>
      <div
        className={css`
          position: relative;
        `}
      >
        {pList.map((p, i) => {
          return (
            <div
              key={i}
              ref={stageDomRefs[i]}
              className={cx(
                css`
                  position: absolute;
                  top: 0;
                  left: 0;
                  padding: 10rem;
                  min-height: 100vh;
                  min-width: 100vw;
                  opacity: 0;
                  background: ${d3.interpolateOranges(
                    transform([0, pList.length - 1], [0, 0.3])(i)
                  )};
                `
              )}
            >
              <p
                className={cx(
                  css`
                    font-size: 5rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  `
                )}
                ref={pDomRefs[i]}
              >
                {p.title}
              </p>
              <div
                className={cx(
                  css`
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  `
                )}
              >
                {p.imageURLList.map((imageURL, j) => {
                  return (
                    <img
                      ref={imageDomRefs[i][j]}
                      key={j}
                      className={cx(
                        css`
                          max-width: 100%;
                          width: 100%;
                          display: block;
                        `
                      )}
                      src={imageURL}
                      alt={''}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
