import { allPosts as allPost, allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

function getPostData(url) {
  const post = allPost.find((post) => post.url === url)

  return post
}

function getAllPosts(locale) {
  const filtered = allPost.filter((post) => post.locale === locale)

  const sorted = filtered.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })

  return sorted
}

function getPosts(locale, page = 0, itemsPerPage = 10) {
  const filtered = allPost.filter((post) => post.locale === locale)

  const sorted = filtered.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })

  const posts = sorted.slice(page * itemsPerPage, (page + 1) * itemsPerPage)

  return posts
}

function getPostsPageCount(locale, itemsPerPage = 10) {
  const filtered = allPost.filter((post) => post.locale === locale)

  return Math.ceil(filtered.length / itemsPerPage)
}

const postContentService = {
  getPostData,
  getAllPosts,
  getPosts,
  getPostsPageCount,
}

export default postContentService
