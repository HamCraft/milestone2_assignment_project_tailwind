import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-[#0070f3] p-4"> 
      <ul className="list-none p-0 flex space-x-5"> 
        <li className="inline">
          <Link href="/" className="text-white no-underline">Home</Link>
        </li>
        <li className="inline">
          <Link href="/about" className="text-white no-underline">About</Link>
        </li>
        <li className="inline">
          <Link href="/contact" className="text-white no-underline">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
