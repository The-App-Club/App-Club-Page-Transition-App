import {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import {motion, useAnimation} from 'framer-motion';

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: #000;
  h2 {
    color: white;
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 0.5rem;
    li {
      overflow: hidden;
      font-size: 1.25rem;
      width: 100%;
      /* https://stackoverflow.com/a/28623513/15972569 */
      &::after {
        display: block;
        content: '';
        border-bottom: solid 3px #2f8f9d;
        transform: scaleX(0);
        transition: transform 250ms ease-in-out;
        transform-origin: 0% 0%;
      }
      &:hover::after {
        transform: scaleX(1);
        transform-origin: 0% 100%;
      }
      a {
        text-decoration: none;
        height: 100%;
        display: inline-block;

        span {
          font-size: 2rem;
          display: inline-block;
          background: linear-gradient(
            135deg,
            rgba(223, 172, 40, 1) 32%,
            rgba(219, 217, 53, 1) 92%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
      &:hover {
        cursor: pointer;
        span {
          font-size: 2rem;
          display: inline-block;
        }
      }
    }
  }
`;

const Nav = () => {
  const [isHover, setIsHover] = useState(false);
  const [activeMenuIndex, setActiveMenuIndex] = useState(-1);

  const controls = useAnimation();

  useEffect(() => {
    if (isHover) {
      controls.start(function (i) {
        if (i === activeMenuIndex) {
          return {
            x: 10,
            y: 0,
            transition: {duration: 0.4},
          };
        } else {
          return {
            x: 0,
            y: 0,
            transition: {duration: 0.4},
          };
        }
      });
    } else {
      controls.start(function (i) {
        if (i === activeMenuIndex) {
          return {
            x: 0,
            y: 0,
            transition: {duration: 0.4},
          };
        } else {
          return {
            x: 0,
            y: 0,
            transition: {duration: 0.4},
          };
        }
      });
    }
    return () => {
      controls.stop();
    };
  }, [isHover]);
  return (
    <StyledNav>
      <h2>Menu</h2>
      <ul>
        {[
          'Philosophy',
          'Service',
          'Lastest projects',
          'Company',
          'Contact',
        ].map((item, index) => {
          return (
            <motion.li
              key={index}
              custom={index}
              animate={controls}
              onHoverStart={(e) => {
                setIsHover(true);
                setActiveMenuIndex(index);
              }}
              onHoverEnd={(e) => {
                setIsHover(false);
                setActiveMenuIndex(index);
              }}
            >
              <a href={`#`}>
                <span>{item}</span>
              </a>
            </motion.li>
          );
        })}
      </ul>
    </StyledNav>
  );
};

export {Nav};
