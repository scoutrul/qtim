// Базовый интерфейс для поста
export interface Post {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  image?: string;
  preview: string;
}

// Интерфейс для UI с дополнительным полем link
export interface PostUI extends Post {
  link: string;
}

// Интерфейс для отображения в списке статей
export interface DisplayArticle extends Post {
  imageUrl: string;
  link: string;
}