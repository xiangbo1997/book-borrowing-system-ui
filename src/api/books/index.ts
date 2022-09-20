import request from '@/service'
import type { BooksListParams } from './types'
export const getBookList = (data: BooksListParams) => {
  return request<BooksListParams>({
    url: '/bookInfo',
    method: 'GET',
    data,
  })
}

