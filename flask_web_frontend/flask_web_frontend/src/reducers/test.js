const TEST = 'TEST'

export default function (state, action) {
  if (!state) {
    state = { 
      test: ['test1', 'test2'] 
    }
  }

  switch (action.type) {
    case TEST:
      console.log('case test')
      return { 
        test: action.article
      }
    default:
      return state
  }
}

export const click_button = (test_info) => {
  console.log('get_test_info')
  return { type: TEST, test_info }
}
