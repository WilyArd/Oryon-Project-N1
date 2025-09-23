import ArticleCard from "./ArticleCard";

// Mock data - will be replaced with real data from Supabase
const featuredArticles = [
  {
    id: "1",
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the cutting-edge technologies and methodologies that are shaping the future of web development. From AI integration to new frameworks, discover what's next.",
    author: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&fit=crop&crop=face",
    },
    publishedAt: "Mar 15, 2024",
    readTime: 8,
    category: "Technology",
    tags: ["Web Development", "AI", "Trends", "Future Tech"],
    likes: 234,
    comments: 42,
    imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
    featured: true,
  },
  {
    id: "2", 
    title: "Building Sustainable Design Systems",
    excerpt: "Learn how to create design systems that scale with your organization and stand the test of time.",
    author: {
      name: "Alex Rivera",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    },
    publishedAt: "Mar 12, 2024",
    readTime: 6,
    category: "Design",
    tags: ["Design Systems", "UI/UX", "Scalability"],
    likes: 189,
    comments: 28,
    imageUrl: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop",
  },
  {
    id: "3",
    title: "The Psychology of User Experience",
    excerpt: "Understanding how users think and behave is crucial for creating intuitive and engaging digital experiences.",
    author: {
      name: "Dr. Emily Watson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    },
    publishedAt: "Mar 10, 2024",
    readTime: 12,
    category: "Psychology",
    tags: ["UX", "Psychology", "User Behavior"],
    likes: 156,
    comments: 31,
    imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
  },
];

const FeaturedArticles = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Articles</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular and impactful stories, carefully curated by our editorial team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;