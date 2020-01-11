import React, { Component } from 'react'
//import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import Pokeball from "../pokeball.png";
class Home extends Component {
  // state = {
  //   posts: []
  // }
  // componentDidMount () {
  //   axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
  //     this.setState({
  //       posts: res.data.slice(0, 10)
  //     })
  //   })
  // }
  render () {
     // console.log(this.props);
    const { posts } = this.props;
  //
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className='post card' key={post.id}>
          <img src={Pokeball} alt="Poke ball"/>
            <div className='card-content'>
              <Link to={'/' + post.id}>
                <div className='card-title red-text'>{post.title}</div>
              </Link>
              <p>{post.body} </p>
            </div>
          </div>
        )
      })
    ) : (
      <div className='center'>No Posts available</div>
    )

    return (
      <div className='home'>
        <h4 className='center'>Home</h4>

        {postList}
      </div>
    )
  }
}
const mapStateToProp=(state)=>{
  return{
    posts:state.posts
  }
}
export default connect(mapStateToProp)(Home) 
