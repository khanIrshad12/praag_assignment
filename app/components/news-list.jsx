import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

export function NewsList({ articles, selectedId }) {
  return (
    <div className="space-y-4">
      {articles.map((article) => (
        <Link
          key={article.id}
          href={`/article/${article.id}`}
          className={cn(
            "block p-4 rounded-lg border transition-colors",
            selectedId === article.id
              ? "bg-muted border-primary"
              : "hover:bg-muted/50"
          )}
        >
          <div className="flex gap-4">
            <div className="relative h-24 w-32 flex-shrink-0">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="rounded-md object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold line-clamp-2">{article.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                {article.excerpt}
              </p>
              <div className="mt-2 flex items-center text-sm text-muted-foreground">
                <span>{article.source}</span>
                <span className="mx-2">•</span>
                <span>{article.date}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

