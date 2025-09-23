import { useParams, Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, Heart, MessageCircle, Share2, Bookmark, ArrowLeft } from "lucide-react";

// Mock article data - will be replaced with real data from Supabase
const mockArticle = {
  id: "1",
  title: "The Future of Web Development: Trends to Watch in 2024",
  content: `
    <h2>Introduction</h2>
    <p>The world of web development is constantly evolving, with new technologies, frameworks, and methodologies emerging at a rapid pace. As we navigate through 2024, several key trends are shaping the future of how we build and interact with web applications.</p>
    
    <h2>Artificial Intelligence Integration</h2>
    <p>AI is no longer just a buzzword—it's becoming an integral part of web development. From AI-powered code completion tools like GitHub Copilot to intelligent chatbots and personalization engines, developers are increasingly leveraging AI to enhance both the development process and user experience.</p>
    
    <p>Key areas where AI is making an impact include:</p>
    <ul>
      <li>Automated code generation and testing</li>
      <li>Smart content recommendations</li>
      <li>Advanced analytics and user behavior prediction</li>
      <li>Accessibility improvements through automated alt-text generation</li>
    </ul>
    
    <h2>Performance-First Development</h2>
    <p>With Core Web Vitals becoming increasingly important for SEO and user experience, performance optimization is no longer optional. Developers are adopting new strategies and tools to ensure their applications load quickly and provide smooth interactions.</p>
    
    <p>Modern performance optimization techniques include:</p>
    <ul>
      <li>Edge computing and CDN optimization</li>
      <li>Advanced bundling and code splitting strategies</li>
      <li>Progressive Web App (PWA) implementation</li>
      <li>Server-side rendering (SSR) and static site generation (SSG)</li>
    </ul>
    
    <h2>The Rise of Web Components</h2>
    <p>Web Components are gaining traction as a framework-agnostic solution for building reusable UI elements. This technology allows developers to create custom, encapsulated HTML elements that work across different frameworks and vanilla JavaScript.</p>
    
    <h2>Conclusion</h2>
    <p>The future of web development is exciting and full of possibilities. By staying informed about these trends and continuously learning new technologies, developers can build better, more efficient, and more user-friendly web applications.</p>
    
    <p>As we move forward, the key to success will be balancing innovation with practicality, ensuring that new technologies truly improve the user experience rather than adding unnecessary complexity.</p>
  `,
  author: {
    name: "Sarah Chen",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&fit=crop&crop=face",
    bio: "Senior Frontend Developer with 8+ years of experience building scalable web applications. Passionate about emerging technologies and developer experience.",
  },
  publishedAt: "March 15, 2024",
  readTime: 8,
  category: "Technology",
  tags: ["Web Development", "AI", "Trends", "Future Tech"],
  likes: 234,
  comments: 42,
  imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&h=600&fit=crop",
};

const Article = () => {
  const { id } = useParams();

  // In a real app, you would fetch the article data based on the ID
  const article = mockArticle;

  return (
    <div className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="border-b">
        <div className="container px-4 md:px-6 py-4">
          <Button variant="ghost" asChild>
            <Link to="/articles">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Articles
            </Link>
          </Button>
        </div>
      </div>

      {/* Article Header */}
      <section className="py-12 lg:py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Category & Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary">{article.category}</Badge>
              {article.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {article.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={article.author.avatar} alt={article.author.name} />
                  <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{article.author.name}</p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{article.publishedAt}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime} min read</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Actions */}
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm">
                  <Heart className="h-4 w-4 mr-2" />
                  {article.likes}
                </Button>
                <Button variant="ghost" size="sm">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  {article.comments}
                </Button>
                <Button variant="ghost" size="sm">
                  <Bookmark className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {article.imageUrl && (
        <section className="mb-12">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <section className="pb-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div 
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            <Separator className="my-12" />

            {/* Author Bio */}
            <div className="bg-muted/50 rounded-xl p-6 mb-12">
              <div className="flex items-start space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={article.author.avatar} alt={article.author.name} />
                  <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">About {article.author.name}</h3>
                  <p className="text-muted-foreground mb-4">{article.author.bio}</p>
                  <Button variant="outline" size="sm">
                    Follow Author
                  </Button>
                </div>
              </div>
            </div>

            {/* Comments Section Placeholder */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Comments ({article.comments})</h2>
              <div className="bg-muted/30 rounded-xl p-8 text-center">
                <MessageCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Join the Discussion</h3>
                <p className="text-muted-foreground mb-4">
                  Sign in to share your thoughts and engage with other readers.
                </p>
                <Button>Sign In to Comment</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Article;