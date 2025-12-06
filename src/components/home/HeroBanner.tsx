import { Button } from "@/components/ui/button";
import { Sparkles, Wand2, Search } from "lucide-react";

const HeroBanner = () => {
  return (
    <section className="relative bg-light from-slate-900 via-primary/90 to-slate-900 overflow-hidden min-h-[600px] flex items-center justify-center">
      
      {/* Background Grid Pattern (Optional for tech feel) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 mix-blend-overlay"></div>
      
      <div className="container-custom px-4 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Badge AI */}
          <div className="animate-fade-in flex justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary border border-primary-foreground/20 backdrop-blur-md rounded-full text-sm font-medium text-primary-foreground/90">
              <Sparkles className="w-4 h-4 text-light" />
              Generative AI Powered by Gemini AI
            </span>
          </div>

          {/* Headlines */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-grey-600/50 dark:text-sky-400/50 tracking-tight">
              Ubah Kata Menjadi <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-primary animate-shine-infinite bg-[length:200%_100%]" style={{ animationDelay: "0.4s" }}>
                Visual Nyata
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Deskripsikan imajinasimu secara detail, dan biarkan AI canggih kami memvisualisasikannya dalam hitungan detik.
            </p>
          </div>

          {/* Large AI Search/Prompt Bar */}
          <div className="animate-fade-in w-full max-w-3xl mx-auto pt-4" style={{ animationDelay: "0.2s" }}>
            <div className="relative group">
              {/* Glow Effect behind input */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-warning to-primary rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              
              {/* Container Utama */}
              <div className="relative w-full max-w-3xl mx-auto">
                
                {/* 1. ELEMENT SHADOW ANIMASI (Background Glow) */}
                <div 
                  className="absolute -inset-1 rounded-full blur-xl opacity-70 animate-shine bg-[length:200%_100%]
                  bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500"
                ></div>

                {/* 2. ELEMENT SEARCH BAR (Foreground) */}
                <div className="relative flex items-center bg-background/90 backdrop-blur-xl border border-white/10 rounded-full p-2 shadow-2xl">
                  
                  
                  <input
                    type="text"
                    className="flex-1 bg-transparent border-none outline-none px-4 py-4 text-lg text-foreground placeholder:text-muted-foreground/50 w-full"
                    placeholder="Make a template with modern style..."
                  />
                  
                  <Button 
                    size="lg" 
                    className="rounded-full px-8 h-12 text-base font-semibold shadow-lg transition-all 
                    bg-gradient-to-r from-indigo-500 via-pink-500 to-indigo-500 
                    bg-[length:200%_100%] animate-shine hover:shadow-pink-500/25 text-white border-0"
                  >
                    Generate
                    <Wand2 className="ml-2 w-[20px] h-[20px]" size={100} />
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Suggestion Tags */}
            <div className="mt-6 flex flex-wrap justify-center items-center gap-3 text-sm text-slate-400">
              <span>Coba:</span>
              {["Cyberpunk City", "Lukisan Minyak", "Logo Minimalis", "Interior Modern"].map((tag, i) => (
                <button 
                  key={i}
                  className="px-3 py-1 hover:text-white hover:bg-white/10 rounded-full transition-colors border border-transparent hover:border-white/10"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Orbs / Shapes */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-warning/10 rounded-full blur-[120px] -z-10" />
      
    </section>
  );
};

export default HeroBanner;