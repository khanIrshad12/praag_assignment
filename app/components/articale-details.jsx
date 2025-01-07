import Image from 'next/image'
import { Share } from 'lucide-react'


export function ArticleDetail({ article }) {
  return (
    <article className="max-w-3xl mx-auto">
      <div className="relative h-[400px] w-full mb-8">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="rounded-lg object-cover"
        />
      </div>
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <div>
            <p className="font-medium">{article.author}</p>
            <p className="text-sm text-muted-foreground">{article.date}</p>
          </div>
        </div>
        <button className="p-2 hover:bg-muted rounded-full">
          <Share className="h-5 w-5" />
        </button>
      </div>
      <div className="prose prose-lg max-w-none">
        {article.content}
      </div>
    </article>
  )
}

