import { Article, articles } from "@/data/articles";

export function getRelatedArticles(currentArticle: Article, limit = 3) {
  return articles
    .filter((article) => article.slug !== currentArticle.slug)
    .filter((article) => {
      const sameCategory = article.category === currentArticle.category;

      const sharedTags = article.tags?.some((tag) =>
        currentArticle.tags?.includes(tag)
      );

      return sameCategory || sharedTags;
    })
    .slice(0, limit);
}