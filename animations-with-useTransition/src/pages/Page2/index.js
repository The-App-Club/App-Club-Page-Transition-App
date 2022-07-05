import {useState} from 'react';
import {Link} from 'react-router-dom';

import {Button} from '@mui/material';
import {useTransition, animated} from 'react-spring';

const Page2 = () => {
  const [items, setItems] = useState([]);
  const transition = useTransition(items, {
    from: {x: 0, y: 800, opacity: 0},
    enter: (item) => async (next) => {
      await next({y: item.y, opacity: 1, delay: item.delay});
      await next({x: 0});
    },
    leave: {x: 0, y: 800, opacity: 0},
  });
  return (
    <animated.div className="app">
      <h1>Page 2</h1>
      <Button
        variant="contained"
        onClick={() => {
          setItems((e) =>
            e.length
              ? []
              : [
                  {y: -100, delay: 200},
                  {y: -50, delay: 400},
                  {y: 0, delay: 600},
                ]
          );
        }}
      >
        animation
      </Button>
      <Link to="/Page3">
        <Button variant="contained">Page 3</Button>
      </Link>
      <div className="container">
        {transition(
          (style, item) =>
            item && <animated.div style={style} className="item" />
        )}
      </div>
    </animated.div>
  );
};

export default Page2;
