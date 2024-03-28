// Write your JS code here
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blogData} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = blogData

  return (
    <li>
      <Link to={`/blogs/${id}`}>
        <div>
          <img src={imageUrl} alt={`item${id}`} />
          <div>
            <p>{topic}</p>
            <p>{title}</p>
            <div>
              <img src={avatarUrl} alt={`avatar${id}`} />
              <p>{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}
export default BlogItem
