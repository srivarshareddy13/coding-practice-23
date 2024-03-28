// Write your JS code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {
    isLoading: true,
    blogData: [],
  }
  ComponentDidMount() {
    this.getBlogData()
  }
  getBlogData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const formatedData = data.map(each => ({
      id: each.id,
      title: each.title,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      author: each.author,
      topic: each.topic,
    }))
    this.setState({blogData: formatedData, isLoading: false})
  }
  render() {
    const {blogData, isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" height={50} width={50} />
          </div>
        ) : (
          <ul>
            {blogData.map(each => (
              <BlogItem key={each.id} blogData={each} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default BlogList
