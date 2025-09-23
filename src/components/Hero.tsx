import { Button } from "@/components/ui/button";
import { Search, TrendingUp, Users, BookOpen } from "lucide-react";
import heroImage from "@/assets/blog-hero.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      <div className="container px-4 md:px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Discover Stories That{" "}
                <span className="gradient-text">Inspire</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Join our community of passionate writers and readers. Share your insights, 
                explore diverse perspectives, and connect with like-minded individuals.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base px-8">
                Start Reading
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8">
                Join as Writer
              </Button>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles, topics, authors..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-accent-warm/20 focus:border-accent-warm"
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <BookOpen className="h-5 w-5 text-accent-warm mr-2" />
                  <span className="text-2xl font-bold">1.2K+</span>
                </div>
                <p className="text-sm text-muted-foreground">Articles</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-5 w-5 text-accent-warm mr-2" />
                  <span className="text-2xl font-bold">850+</span>
                </div>
                <p className="text-sm text-muted-foreground">Writers</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-5 w-5 text-accent-warm mr-2" />
                  <span className="text-2xl font-bold">10K+</span>
                </div>
                <p className="text-sm text-muted-foreground">Readers</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:order-last">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Modern blog and reading experience"
                className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-card rounded-xl p-4 shadow-lg border backdrop-blur-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                <span className="text-sm font-medium">Live Updates</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-card rounded-xl p-4 shadow-lg border backdrop-blur-sm">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-accent-warm" />
                <span className="text-sm font-medium">Trending Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;