export interface Post {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  image?: string; 
  preview: string;
}

export interface PostPreview {
  id: string;
  title: string;
  preview: string;
  createdAt: string;
  image?: string;
}

export interface PostFull extends PostPreview {
  description: string;
}