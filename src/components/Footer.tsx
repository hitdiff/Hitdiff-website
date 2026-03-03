import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border/50 py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <span className="font-display text-lg font-bold">
            Hit<span className="text-gradient">Diff</span> Digital
          </span>
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
