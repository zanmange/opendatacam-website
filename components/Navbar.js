import Link from 'next/link';

const links = [
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' },
  { href: 'https://nextjs.org/docs', label: 'Docs' }
];

export default function Nav() {
  return (
    <nav>
      <ul className="flex items-center justify-between p-8 lg:pr-16 lg:pl-16 relative z-10">
        <li>
          <a href="./">
            <img className="w-8" src="static/odc-logo.svg" />
          </a>
        </li>
        <li>
          <ul className="flex items-center">
            <li className="mr-6">
              <a href="https://twitter.com/moovellab">
                <img width="24" height="24" src="static/icons/twitter.svg" />
              </a>
            </li>
            <li className="mr-6">
              <a href="https://github.com/opendatacam/opendatacam">
                <img width="24" height="24" src="static/icons/github.svg" />
              </a>
            </li>
            <li>
              <a className="text-black hover:text-gray-500 text-lg font-medium" href="#">
                Contact
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
