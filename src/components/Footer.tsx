import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border/50 py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-1.5 font-display text-lg font-bold">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-primary text-primary-foreground text-xs font-bold">HD</span>
            HitDiff <span className="text-gradient">Digital</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Digital innovation that hits different. Streamline, automate, and scale your business.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-sm mb-3">Navigation</h4>
          <div className="flex flex-col gap-2">
            {["/", "/services", "/about", "/contact"].map((path) => (
              <Link key={path} to={path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-sm mb-3">Connect</h4>
          <p className="text-sm text-muted-foreground">hello@hitdiffdigital.com</p>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-border/50 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} HitDiff Digital. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
