import { newsArticles } from '../../data/data.js'
import { NextResponse } from 'next/server'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category')
  
  if (category) {
    const filtered = newsArticles.filter(article => article.category === category)
    return NextResponse.json(filtered)
  }
  
  return NextResponse.json(newsArticles)
}