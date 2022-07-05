import {Link} from 'react-router-dom';
import {Layout} from '../../layouts/default';
import {css} from '@emotion/css';
import {TransitionImage} from '../../components/TransitionImage';
import {Message} from '../../components/Message';
import {useCallback, useState} from 'react';
import {Spacer} from '../../components/Spacer';

const AboutPage = ({loading, setLoading}) => {
  const [animated, setAnimated] = useState(new Map());

  const notifier = useCallback((e) => {
    const {name, status} = e;
    setAnimated((animated) => {
      return {[name]: status};
    });
  }, []);
  return (
    <Layout loading={loading} setLoading={setLoading}>
      <div>
        <section
          className={css`
            position: relative;
            min-height: 100vh;
          `}
        >
          <a href="/">vanilla home</a>
          <Link to={'/'}>react router Home</Link>
          <TransitionImage
            src={`https://picsum.photos/seed/${100}/1200/800`}
            alt={``}
            notifier={notifier}
            name={`mainImage`}
          />
          <Message
            name={`mainImage`}
            animated={animated}
            text={`Welcome`}
            className={css`
              color: white;
              font-size: 4rem;
              top: 10%;
              left: 10%;
              @media (max-width: 768px) {
                font-size: 2rem;
                top: 10%;
                left: 10%;
              }
            `}
          />
          <Message
            name={`mainImage`}
            animated={animated}
            text={`This is Sample Text...`}
            className={css`
              color: white;
              font-size: 4rem;
              top: 30%;
              right: 10%;
              @media (max-width: 768px) {
                font-size: 2rem;
                top: 30%;
                right: 10%;
              }
            `}
            delay={0.5}
          />
          <Message
            name={`mainImage`}
            animated={animated}
            text={`Wonderful StoryTelling...`}
            className={css`
              color: white;
              font-size: 4rem;
              top: 60%;
              left: 10%;
              @media (max-width: 768px) {
                font-size: 2rem;
                top: 60%;
                left: 10%;
              }
            `}
            delay={0.7}
          />
        </section>
        {[...Array(0)].map((n, index) => {
          return <Spacer key={index} />;
        })}
        <section
          className={css`
            position: relative;
            min-height: 100vh;
            background: wheat;
          `}
        >
          <p>Cool</p>
        </section>
        {[...Array(3)].map((n, index) => {
          return <Spacer key={index} />;
        })}
        <section
          className={css`
            position: relative;
            min-height: 100vh;
            background: whitesmoke;
          `}
        >
          <p>Coming Soon</p>
        </section>
      </div>
    </Layout>
  );
};

export {AboutPage};
