import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border/30 py-12 relative">
    <div className="absolute inset-0 bg-surface/30" />
    <div className="container relative mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-16 w-full">
        <div>
          <div className="font-display text-lg font-bold">
            HitDiff <span className="text-gradient">Digital</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Strategy, design, and engineering—fused into digital products that perform.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-sm mb-3">Navigation</h4>
          <div className="flex flex-col gap-2">
            {["/", "/services", "/about", "/contact"].map((path) => (
              <Link key={path} to={path} className="text-sm text-muted-foreground hover:text-accent transition-colors">
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
      <div className="mt-10 pt-6 border-t border-border/30 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} HitDiff Digital. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
