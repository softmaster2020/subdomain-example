import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/pulso-symbol.png.asset.json";

const sections = [
  { label: "Home", hash: "home" },
  { label: "About", hash: "about" },
  { label: "Services", hash: "services" },
  { label: "Process", hash: "process" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const navigation = (mobile = false) => <>
    {sections.map(({ label, hash }) => <Link key={hash} to="/" hash={hash} hashScrollIntoView={false} onClick={() => setOpen(false)} className={mobile ? "px-3 py-3 text-sm font-bold hover:text-primary" : "transition hover:text-primary"}>{label.toUpperCase()}</Link>)}
    <Link to="/faq" onClick={() => setOpen(false)} activeProps={{ className: "text-primary" }} className={mobile ? "px-3 py-3 text-sm font-bold hover:text-primary" : "transition hover:text-primary"}>FAQ</Link>
    <Link to="/" hash="contact" hashScrollIntoView={false} onClick={() => setOpen(false)} className={mobile ? "px-3 py-3 text-sm font-bold hover:text-primary" : "transition hover:text-primary"}>CONTACT</Link>
  </>;

  return <header className="sticky top-0 z-50 border-b border-transparent bg-background/80 font-sans backdrop-blur">
    <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
      <Link to="/" hash="home" hashScrollIntoView={false} className="flex min-w-0 shrink-0 items-center gap-2.5" onClick={() => setOpen(false)}>
        <img src={logo.url} alt="PULSO logo" width={36} height={36} className="size-9 object-contain" />
        <span className="text-base font-extrabold sm:text-lg">PULSO</span>
      </Link>
      <nav aria-label="Main navigation" className="hidden items-center gap-5 text-[11px] font-bold lg:flex">{navigation()}</nav>
      <div className="flex items-center gap-2">
        <Button asChild className="btn-primary hidden !px-5 !py-2.5 !text-[11px] sm:inline-flex"><Link to="/" hash="contact" hashScrollIntoView={false}>Book a demo</Link></Button>
        <Button variant="ghost" size="icon" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)} className="lg:hidden">{open ? <X /> : <Menu />}</Button>
      </div>
    </div>
    {open && <nav aria-label="Mobile navigation" className="grid border-t bg-background px-4 py-4 lg:hidden">{navigation(true)}<Button asChild className="btn-primary mt-2"><Link to="/" hash="contact" hashScrollIntoView={false} onClick={() => setOpen(false)}>Book a demo</Link></Button></nav>}
  </header>;
}