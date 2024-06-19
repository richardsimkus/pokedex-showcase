import { useEffect, useState } from "react";
import { getRandomPokemon } from "src/api/endpoints/pokemon.js";

const Avatar = () => {
  const [randomPic, setRandomPic] = useState("");
  useEffect(() => {
    getRandomPokemon().then((res) => setRandomPic(res.sprites.front_default));
  }, []);
  const changeTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
  };

  if (!randomPic) {
    return (
      <button
        className="skeleton btn-circle avatar border-solid border-accent"
        tabIndex={0}
      />
    );
  }
  return (
    <div className="dropdown dropdown-end">
      <button
        className="btn btn-ghost btn-circle avatar border-solid border-accent"
        tabIndex={0}
      >
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            className="scale-150"
            src={randomPic}
          />
        </div>
      </button>
      <ul
        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-200 rounded-box w-52"
        tabIndex={0}
      >
        <li>
          <a className="justify-between">Profile</a>
        </li>
        <li>
          <input
            aria-label="Default"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            name="theme-dropdown"
            onChange={() => changeTheme("default")}
            type="radio"
          />
        </li>
        <li>
          <input
            aria-label="Retro"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            name="theme-dropdown"
            onChange={() => changeTheme("retro")}
            type="radio"
          />
        </li>
        <li>
          <input
            aria-label="Cyberpunk"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            name="theme-dropdown"
            onChange={() => changeTheme("cyberpunk")}
            type="radio"
          />
        </li>
        <li>
          <input
            aria-label="Valentine"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            name="theme-dropdown"
            onChange={() => changeTheme("valentine")}
            type="radio"
          />
        </li>
        <li>
          <input
            aria-label="Aqua"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            name="theme-dropdown"
            onChange={() => changeTheme("aqua")}
            type="radio"
          />
        </li>
      </ul>
    </div>
  );
};

export default Avatar;
