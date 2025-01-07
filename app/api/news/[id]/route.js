import { newsArticles } from '../../../data/data.js'
import { NextResponse } from 'next/server'

export async function GET(request,{ params }) {
  const article = newsArticles.find(article => article.id === params.id)
  
  if (!article) {
    return NextResponse.json(
      { error: 'Article not found' },
      { status: 404 }
    )
  }
  
  return NextResponse.json(article)
}

