import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border/30 py-12 relative">
    <div className="absolute inset-0 bg-surface/30" />
    <div className="container relative mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between gap-12">
        <div>
          <div className="font-display text-lg font-bold">
            HitDiff <span className="text-gradient">Digital</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Strategy, design, and engineering—fused into digital products that perform.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-16">
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
            <h4 className="font-display font-semibold text-sm mb-3">Social</h4>
            <div className="flex flex-col gap-2">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-accent transition-colors">LinkedIn</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-accent transition-colors">Instagram</a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-3">Contact</h4>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-muted-foreground">hello@hitdiffdigital.com</p>
              <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
              <p className="text-sm text-muted-foreground">Toronto, Ontario</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-border/30 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} HitDiff Digital. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
