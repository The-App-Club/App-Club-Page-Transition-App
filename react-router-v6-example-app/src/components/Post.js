import {useParams} from 'react-router-dom'
import { BlogPosts } from '../data/post';
const Post = () => {
  const { slug } = useParams();
  const post = BlogPosts[slug];

  const { title, description } = post;

  return (
    <div style={{ padding: 20 }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}


export {Post}