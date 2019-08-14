import { put, delay, all, call, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

export function* helloSaga () {
  yield console.log('Hello saga!')
  yield console.log('hello again')
}

export function* click_button () {
  yield console.log('Hello saga!')
  yield console.log('hello again')
}

export function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'TEST' })
}

export function* watchIncrementAsync() {
  yield takeEvery('IINCREMENT_ASYNC', incrementAsync)
}

function fetchTest () {
  return axios.get(
    'http://127.0.0.1:8000/jianshu/test'
  )
}


export default function* rootSaga() {
  yield all([
    helloSaga(),
    click_button(),
    watchIncrementAsync()
  ])
}
