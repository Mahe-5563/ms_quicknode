import Link from "next/link";

export type NavItems = {
  id: string,
  href: string,
  link_title: string,
}[];

export default function TopNav() {

  const nav_items: NavItems = [
    {
      id: "1",
      href: "/",
      link_title: "Business"
    },
    {
      id: "2",
      href: "/",
      link_title: "Funding"
    },
    {
      id: "3",
      href: "/",
      link_title: "Investors"
    },
    {
      id: "4",
      href: "/",
      link_title: "Pitch Deck"
    },
    {
      id: "5",
      href: "/",
      link_title: "Roadmaps"
    }
  ];

  return (
    <nav className="h-24 w-100 sticky top-0 z-40 ml-24 mr-4 pr-3 border-b border-slate-200">
      <div className="flex justify-end h-full place-items-center">
        {nav_items.map((item: any) => (
          <Link
            key={item.id}
            href={item.href} 
            className="mx-2 text-xl font-extrabold"
          >
            {item.link_title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
