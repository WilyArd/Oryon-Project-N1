import Hero from "@/components/Hero";
import FeaturedArticles from "@/components/FeaturedArticles";
import RecentArticles from "@/components/RecentArticles";

const Index = () => {
  return (
    <div className="w-full">
      <Hero />
      <FeaturedArticles />
      <RecentArticles />
    </div>
  );
};

export default Index;
