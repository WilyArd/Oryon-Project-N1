import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ArticleCard from "@/components/ArticleCard";
import { Search, Filter, SortAsc } from "lucide-react";

// Mock data - will be replaced with real data from Supabase
const allArticles = [
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
];

const categories = ["All", "Technology", "Design", "React", "Backend", "CSS", "Database"];

const Articles = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredArticles, setFilteredArticles] = useState(allArticles);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterArticles(query, selectedCategory);
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    filterArticles(searchQuery, category);
  };

  const filterArticles = (query: string, category: string) => {
    let filtered = allArticles;

    if (category !== "All") {
      filtered = filtered.filter(article => article.category === category);
    }

    if (query) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      );
    }

    setFilteredArticles(filtered);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-muted/30 py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">All Articles</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our complete collection of articles, tutorials, and insights 
              from our community of writers and experts.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Content */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer px-4 py-2"
                onClick={() => handleCategoryFilter(category)}
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <p className="text-muted-foreground">
                {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
              </p>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button variant="ghost" size="sm">
                  <SortAsc className="h-4 w-4 mr-2" />
                  Sort
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.id} {...article} />
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground mb-4">
                  No articles found matching your criteria.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                    setFilteredArticles(allArticles);
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Articles;