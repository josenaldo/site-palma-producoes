import { allPosts as allPost } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

export function getPostData(url) {
  const post = allPost.find((post) => post.url === url)

  return post
}

export function getAllPost(locale) {
  const filtered = allPost.filter((post) => post.locale === locale)

  const sorted = filtered.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })

  return sorted
}

export function getPosts(locale, page = 0, limit = 10) {
  const filtered = allPost.filter((post) => post.locale === locale)

  const sorted = filtered.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })

  const posts = sorted.slice(page * limit, (page + 1) * limit)

  return posts
}

const postContentService = {
  getPostData,
  getAllPost,
  getPosts,
}

export default postContentService
