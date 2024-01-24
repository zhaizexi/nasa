import { MDXRemote } from 'next-mdx-remote/rsc'
import prisma from '@/lib/prisma'
import ErrorPage from './empty'
export default async function MissionPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const mission =await prisma.mission.findUnique({
    where: {
      name: slug
    }
  })
  if (mission === null) {
    return <ErrorPage />
  }

  return (
    <div className=''>
      <div className='max-w-screen-3xl relative mx-auto bg-black h-screen'></div>
      <article className='prose'>
        <MDXRemote source={mission?.content || ''} />
      </article>
    </div>
    
  )
}