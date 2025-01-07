import { Sidebar } from '../components/sidebar'
import { NewsList } from '../components/news-list'
import { ArticleDetail } from '../components/articale-details'
import { newsArticles } from '../data/data'
import { useSidebar } from '../provider/context-provider'

export default function Home() {
  
  return (
    <div className={`min-h-screen w-full bg-background`}>
      <header className="fixed top-0 left-0 right-0 h-16 bg-background border-b z-50">
        <div className="container h-full flex items-center">
          <h1 className="text-2xl font-bold">STREAMLINE NEWS</h1>
        </div>
      </header>
      <Sidebar />
      <main className="lg:pl-[10%] pt-16">
        <div className="container py-8">
          <div className="grid lg:grid-cols-[1fr,400px] gap-8">
            <ArticleDetail article={newsArticles[0]} />
            <aside className="space-y-6">
              <h2 className="text-xl font-semibold">Latest News</h2>
              <NewsList 
                articles={newsArticles.slice(1, 6)}
                selectedId={newsArticles[0].id}
              />
            </aside>
          </div>
        </div>
      </main>
    </div>
  )
}

