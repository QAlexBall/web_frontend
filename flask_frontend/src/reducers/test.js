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
      return {count: state.count + 1}
    case TEST_ASYNC:
      return {count: 0}
    default:
      return state
  }
}

export const click_button = () => {
  return { type: TEST }
}
