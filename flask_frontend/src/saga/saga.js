import { put, delay, all, call, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

export function* helloSaga () {
  yield console.log('Hello saga!')
  yield console.log('hello again')
}

export function* click_button () {
  console.log('wait 1s click button')
  yield delay(1000)
  yield put({type: 'TEST'})
}

export function* watch_click_button() {
  console.log('watch click button')
  yield takeEvery('TEST_ASYNC', click_button)
}

export function* incrementAsync() {
  console.log('increment async')
  yield delay(1000)
  yield put({ type: 'TEST' })
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

function fetchTest () {
  return axios.get(
    'http://127.0.0.1:8000/jianshu/test'
  )
}


export default function* rootSaga() {
  yield all([
    helloSaga(),
    watch_click_button(),
    watchIncrementAsync()
  ])
}
