const TEST = 'TEST'
const TEST_ASYNC = 'TEST_ASYNC'

export default function (state, action) {
  if (!state) {
    state = { 
      test: ['test1', 'test2'],
      count: 0
    }
  }

  switch (action.type) {
    case TEST:
      console.log('=> after 1s reducer action Test')
      return state.count + 1
    case TEST_ASYNC:
      console.log('=> effect')
      console.log(state)
      return state
    default:
      return state
  }
}

export const click_button = () => {
  console.log('click button in reducer')
  return { type: TEST }
}
