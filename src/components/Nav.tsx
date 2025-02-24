import { lora1 } from "../../styles/fonts";

interface NavItems {
  items: string[];
  className?: string;
}

export default function Nav({ className, items }: NavItems) {
  return (
    <header className={className}>
      <nav className="max-w-sm mx-auto my-auto px-4 py-8">
        <ul className="flex justify-center space-x-8">
          {items.map((item, index) => (
            <li
              key={index}
              className={`${lora1.className} text-md transition-transform duration-300 ease-in-out hover:text-maize hover:scale-110`}
            >
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
