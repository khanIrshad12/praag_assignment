import { Sidebar } from '../../components/sidebar'
import { ArticleDetail } from '../../components/articale-details'
import { NewsList } from '../../components/news-list'
import { newsArticles } from '../../data/data'
import { notFound } from 'next/navigation'
import Link from 'next/link'


export default async function ArticlePage({ params }) {
  const article = await newsArticles.find(article => article.id === params.id)
  
  if (!article) {
    notFound()
  }

  // Get related articles from the same category
  const relatedArticles = await newsArticles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 5)

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 h-16 bg-background border-b z-50">
        <div className="container h-full flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            STREAMLINE NEWS
          </Link>
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <Link href={`/category/${article.category}`} className="hover:text-primary">
              {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
            </Link>
          </nav>
        </div>
      </header>
      <Sidebar />
      <main className="lg:pl-[10%] pt-16">
        <div className="container py-8">
          <div className="grid lg:grid-cols-[1fr,400px] gap-8">
            <ArticleDetail article={article} />
            <aside className="space-y-6">
              <h2 className="text-xl font-semibold">Related Articles</h2>
              <NewsList 
                articles={relatedArticles}
                selectedId={article.id}
              />
            </aside>
          </div>
        </div>
      </main>
    </div>
  )
}

export function generateStaticParams() {
  return newsArticles.map((article) => ({
    id: article.id,
  }))
}

