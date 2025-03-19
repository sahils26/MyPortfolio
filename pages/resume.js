import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSEO } from '@/components/SEO'

export const POSTS_PER_PAGE = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPosts, posts, pagination } }
}

export default function Resume({ posts, initialDisplayPosts, pagination }) {
  return (
    <>
      <a
        href="https://drive.google.com/file/d/171R2ARejavXEkGXgarzObI2iKRJ25Ipu/view?usp=sharing"
        target="_blank"
        className="space-y-2 pt-6 pb-8 md:space-y-5"
        rel="noreferrer"
      >
        <h1 className="text-xxl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">
          Click me
        </h1>
        <div className="relative max-w-lg"></div>
      </a>
    </>
  )
}
