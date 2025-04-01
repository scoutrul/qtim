export interface Post {
  id: string
  title: string
  content: string
  description: string
  image: string
  createdAt: string
  updatedAt: string
}

export interface PostUI extends Post {
  imageUrl: string
  link: string
}

export interface DisplayArticle extends Post {
  imageUrl: string
  link: string
}
