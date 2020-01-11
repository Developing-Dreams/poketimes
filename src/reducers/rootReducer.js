import React from 'react'

const initState = {
  posts: [
    {
      id: 1,
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body:
        'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    },
    {
      id: 2,
      title:
        '22djdsjh sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body:
        ' sdffsdgdfquia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    },
    {
      id: 3,
      title:
        '33djdsjh sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body:
        '333sdffsdgdfquia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    }
  ]
}
export const rootReducer = (state = initState, actions) => {
  return state;
}
