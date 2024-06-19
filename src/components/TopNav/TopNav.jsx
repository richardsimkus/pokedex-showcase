import Avatar from "./components/Avatar/Avatar.jsx";

const TopNav = () => {
  return (
    <div className="flex justify-between navbar bg-base-300 m-0 w-full p-4">
      <div>
        <a className="btn btn-ghost text-2xl text-primary">Epic PokeDex</a>
      </div>
      <div className="navbar-center ">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="text-xl text-white hover:text-accent">Favourites</a>
          </li>
          <li>
            <a className="text-xl text-white hover:text-accent">Random</a>
          </li>
          <li>
            <a className="text-xl text-white hover:text-accent">Browse</a>
          </li>
        </ul>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            className="input input-bordered w-24 md:w-auto"
            placeholder="Search"
            type="text"
          />
        </div>
        <Avatar />
      </div>
    </div>
  );
};

export default TopNav;
