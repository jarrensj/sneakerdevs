import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground p-6 md:p-12 max-w-2xl">
      <header className="mb-12">
        <h1 className="text-lg font-normal">sneakerdevs</h1>
        <p className="text-muted-foreground text-sm">our code kicks</p>
      </header>

      <section className="mb-10">
        <h2 className="text-sm text-muted-foreground mb-3">## about</h2>
        <p className="text-sm leading-relaxed">
          a collective of developers who share an obsession with sneakers. we build things, collect grails, and occasionally argue online that kobe grinches are the goat.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-sm text-muted-foreground mb-3">## currently</h2>
        <ul className="text-sm space-y-1 list-dash">
          <li>building tools</li>
          <li>tracking drops</li>
          <li>writing code in dunks</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-sm text-muted-foreground mb-3">## stack</h2>
        <p className="text-sm leading-relaxed">
          next.js, typescript, react, node.js, python, solidity, and whatever else ships fast.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-sm text-muted-foreground mb-3">## links</h2>
        <ul className="text-sm space-y-1">
          <li>
            <Link href="https://x.com/sneakerdevs" className="underline underline-offset-4 hover:text-muted-foreground transition-colors">
              twitter
            </Link>
          </li>
          <li>
            <Link href="https://github.com/jarrensj" className="underline underline-offset-4 hover:text-muted-foreground transition-colors">
              github
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/sneakerdevs" className="underline underline-offset-4 hover:text-muted-foreground transition-colors">
              instagram
            </Link>
          </li>
          <li>
            <Link href="https://discord.gg/omakase" className="underline underline-offset-4 hover:text-muted-foreground transition-colors">
              discord
            </Link>
          </li>
          <li>
            <Link href="mailto:contact@sneakerdevs.com" className="underline underline-offset-4 hover:text-muted-foreground transition-colors">
              email
            </Link>
          </li>
        </ul>
      </section>

      <footer className="text-xs text-muted-foreground pt-8 border-t border-border">
        <p>{new Date().getFullYear()} sneakerdevs</p>
      </footer>
    </main>
  );
}
