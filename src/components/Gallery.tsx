import { Button } from "@/components/ui/button";
import video1 from "@/assets/video-1.mp4";
import video2 from "@/assets/video-2.mp4";

const Gallery = () => {
  const galleryItems = [
    { id: 7, category: "weddings", image: video1, title: "Wedding Event Highlights", type: "video" },
    { id: 8, category: "corporate", image: video2, title: "Event Coverage", type: "video" },
  ];

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-brand-gold font-semibold tracking-wide uppercase text-sm mb-2 block">
            Our Portfolio
          </span>
          <div className="h-1 w-20 bg-brand-red mx-auto mb-4"></div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-brand-gold">Memorable</span> Moments We Created
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Browse through our collection of successful events and celebrations
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-lg-custom hover:shadow-glow transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[9/16] overflow-hidden">
                {item.type === "video" ? (
                  <video
                    src={item.image}
                    className="w-full h-full object-cover"
                    loop
                    muted
                    preload="metadata"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                  />
                ) : (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to see more of our work?
          </p>
          <Button
            size="lg"
            className="bg-brand-gold hover:bg-brand-gold/90 text-primary font-bold"
          >
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
