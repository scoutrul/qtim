// Базовый интерфейс для поста
export interface Post {
  id: number
  title: string
  content: string
  description: string
  image: string
  createdAt: string
  updatedAt: string
}

// Интерфейс для UI с дополнительными полями для отображения
export interface PostUI extends Post {
  imageUrl: string
  link: string
  preview?: string
}

// Интерфейс для отображения статьи
export interface DisplayArticle extends Post {
  imageUrl: string
  link: string
  preview?: string
}
