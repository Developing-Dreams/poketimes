import React, { Component } from 'react'
import { connect } from "react-redux";
//import axios from 'axios'

class Post extends Component {
  //   state = {
  //     post: null
  //   }
  //   componentDidMount () {
  //     let id = this.props.match.params.post_id
  //     axios.get('https://jsonplaceholder.typicode.com/posts/' + id).then(res => {
  //         console.log(res);
  //       this.setState({
  //         post: res.data
  //       })
  //     })
  //   }

  render () {
    
    // const { post } = this.props;
    // alert(post);
   const currentPost = this.props.post ? (
      <div className='post'>
        <h4 className='center'>{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
      </div>
    ) : (
      <div className='center'>Loading posts</div>
    )
    return <div>{currentPost}</div>
  }
}
// const mapStateToProp = (state, ownProps) => {
//   let id = ownProps.match.params.post_id
  
//    //const post = {state.posts]};
//   //console.log(post);
//   //alert(post);
//   return {
     
//     post: state.posts.find(post => {
//       return post.id === id
//     })
//   }

// }
const mapStateToProp=(state,ownProps)=>{
     let id = ownProps.match.params.post_id
  return{
    post: state.posts.find(post => post.id === id)
  }
}

export default connect(mapStateToProp)(Post);
