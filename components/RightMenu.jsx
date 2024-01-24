import React from "react";

const RightMenu = () => {
  return (
    <ul className="w-56 menu bg-base-200 rounded-box">
      <li>
        <details open>
          <summary>Donuts</summary>
          <ul>
            <li>
              <details open>
                <summary>Classic</summary>
                <ul>
                  <li>
                    <a>Glaze</a>
                  </li>
                  <li>
                    <a>Chocolate Ring</a>
                  </li>
                  <li>
                    <a>Chocolate Sprinkle</a>
                  </li>
                  <li>
                    <a>Maple Ring</a>
                  </li>
                  <li>
                    <a>Maple Sprinkle</a>
                  </li>
                  <li>
                    <a>Vanilla Sprinkle</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details open>
                <summary>Fancy</summary>
                <ul>
                  <li>
                    <a>Cow</a>
                  </li>
                  <li>
                    <a>Circus Animal</a>
                  </li>
                  <li>
                    <a>Unicorn</a>
                  </li>
                  <li>
                    <a>Cookie Monster</a>
                  </li>
                  <li>
                    <a>Mermaid</a>
                  </li>
                  <li>
                    <a>Shark</a>
                  </li>
                  <li>
                    <a>Cinnamon Toast</a>
                  </li>
                  <li>
                    <a>M&M</a>
                  </li>
                  <li>
                    <a>Oreo</a>
                  </li>
                  <li>
                    <a>Samoa</a>
                  </li>
                  <li>
                    <a>Espresso</a>
                  </li>
                  <li>
                    <a>Cookie Butter</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </ul>
  );
};

export default RightMenu;
