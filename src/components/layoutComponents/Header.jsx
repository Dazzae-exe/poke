function Header() {
  return (
    <header className="w-full h-12">
      <div className="container mx-auto flex items-center justify-between w-full h-full bg-sprite-gray px-4 rounded-full relative top-4">
        <h1 className="flex items-center gap-x-1">
          Poke
          <span>
            <img src="https://i.pinimg.com/originals/7f/d3/5e/7fd35eac56fc6a8586298a6ed2ce9e85.gif" alt="" className="w-8" />
          </span>
        </h1>
        <ul className="flex items-center gap-x-2 h-full">
          <li className="h-full flex items-center py-2">
            <a
              href="https://github.com/dazzae-exe"
              target="_blank"
              className="text-gray-600 hover:text-gray-700 hover:bg-gray-300 hover:bg-opacity-10 p-2 rounded"
            >
              GitHub
            </a>
          </li>
          <li className="h-full flex items-center py-2">
            <a
              href="https://twitter.com/dazz_dev"
              target="_blank"
              className="text-blue-500 hover:text-blue-600 hover:bg-gray-300 hover:bg-opacity-10 p-2 rounded"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
