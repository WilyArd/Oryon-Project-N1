import { Button } from "@/components/ui/button";
import ArticleCard from "./ArticleCard";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data - will be replaced with real data from Supabase
const recentArticles = [
  {
    id: "4",
    title: "Mastering React Hooks: Advanced Patterns",
    excerpt: "Deep dive into advanced React Hooks patterns that will make your components more reusable and maintainable.",
    author: {
      name: "Marcus Johnson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
    publishedAt: "Mar 8, 2024",
    readTime: 10,
    category: "React",
    tags: ["React", "Hooks", "JavaScript", "Frontend"],
    likes: 167,
    comments: 23,
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
  },
  {
    id: "5",
    title: "The Art of API Design",
    excerpt: "Learn the principles of designing APIs that developers love to use. From REST to GraphQL and beyond.",
    author: {
      name: "Priya Patel",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    },
    publishedAt: "Mar 6, 2024",
    readTime: 7,
    category: "Backend",
    tags: ["API", "REST", "GraphQL", "Architecture"],
    likes: 142,
    comments: 19,
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
  },
  {
    id: "6",
    title: "CSS Grid vs Flexbox: When to Use Which",
    excerpt: "A comprehensive guide to understanding the differences between CSS Grid and Flexbox, and when to use each.",
    author: {
      name: "Tom Bradley",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    },
    publishedAt: "Mar 4, 2024",
    readTime: 5,
    category: "CSS",
    tags: ["CSS", "Grid", "Flexbox", "Layout"],
    likes: 198,
    comments: 34,
    imageUrl: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=600&fit=crop",
  },
  {
    id: "7",
    title: "Database Optimization Techniques",
    excerpt: "Improve your database performance with these proven optimization techniques and best practices.",
    author: {
      name: "Lisa Zhang",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
    },
    publishedAt: "Mar 2, 2024",
    readTime: 9,
    category: "Database",
    tags: ["Database", "Performance", "SQL", "Optimization"],
    likes: 123,
    comments: 17,
    imageUrl: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=600&fit=crop",
  },
  {
    id: "8",
    title: "Mobile-First Design Principles",
    excerpt: "Essential principles for designing mobile-first experiences that work across all devices.",
    author: {
      name: "Jordan Kim",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=face",
    },
    publishedAt: "Feb 28, 2024",
    readTime: 6,
    category: "Mobile",
    tags: ["Mobile", "Design", "Responsive", "UX"],
    likes: 187,
    comments: 25,
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
  },
  {
    id: "9",
    title: "Security Best Practices for Web Applications",
    excerpt: "Protect your web applications with these essential security measures and industry best practices.",
    author: {
      name: "David Rodriguez",
      avatar: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=400&h=400&fit=crop&crop=face",
    },
    publishedAt: "Feb 26, 2024",
    readTime: 11,
    category: "Security",
    tags: ["Security", "Web Development", "Best Practices", "HTTPS"],
    likes: 203,
    comments: 38,
    imageUrl: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=600&fit=crop",
  },
];

const RecentArticles = () => {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Articles</h2>
            <p className="text-lg text-muted-foreground">
              Stay up to date with the latest insights and tutorials from our community.
            </p>
          </div>
          <Button variant="outline" asChild className="hidden md:flex">
            <Link to="/articles">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentArticles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" asChild className="md:hidden">
            <Link to="/articles">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecentArticles;