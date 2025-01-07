import { Sidebar } from '../../components/sidebar'
import { NewsList } from '../../components/news-list'
import { newsArticles } from '../../data/data'
import { categories } from '../../data/data'
import { notFound } from 'next/navigation'

export default function CategoryPage({params}) {
  const category = categories.find(c => c.slug === params?.slug)
  console.log("caterh",category);
  
  if (!category) {
    notFound()
  }
  
  const articles = newsArticles.filter(
    article => article.category === params?.slug
  )

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 h-16 bg-background border-b z-50">
        <div className="container h-full flex items-center">
          <h1 className="text-2xl font-bold">STREAMLINE NEWS</h1>
        </div>
      </header>
      <Sidebar />
      <main className="lg:pl-64 pt-16">
        <div className="container py-8">
          <h1 className="text-3xl font-bold mb-8">{category.name}</h1>
          <NewsList articles={articles} />
        </div>
      </main>
    </div>
  )
}

