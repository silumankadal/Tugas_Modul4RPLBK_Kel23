import React, { useState, useContext } from "react";
import { StudentsContext } from "../learn-useState/Counter";
import "./index.css";

const themes = {
  light: {
    id: 1,
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    id: 2,
    foreground: "#ffffff",
    background: "#222222",
  },
};

const ThemeContext = React.createContext(themes.light);

export default function Index() {
  const [theme, setTheme] = useState(themes.dark);
  const changeTheme = () => {
    if (theme.id === themes.light.id) {
      setTheme(themes.dark);
    } else {
      setTheme(themes.light);
    }
  };
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div
        className="Main"
        style={{
          background: theme.background,
          color: theme.foreground,
        }}
      >
        <p className="Text">Theme by useContext</p>
        <p>KELOMPOK 19</p>
        <ThemedButton />
      </div>
    </ThemeContext.Provider>
  );
}

function ThemedButton() {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <button
      className="Button"
      style={{
        background: theme.background,
        color: theme.foreground,
      }}
      onClick={changeTheme}
    >
      i am styled by theme context!
    </button>
  );
}

export const Students = () => {
  const { setInputContext } = useContext(StudentsContext);
  const students = [
    {
      name: "Amez",
    },
    {
      name: "Roselin",
    },
    {
      name: "Akbar",
    },
    {
      name: "Fadzil",
    },
  ];
  const [index, setIndex] = useState(0);
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        setInputContext(students[index].name);
        const idx = (index + 1) % students.length;
        setIndex(idx);
      }}
    >
      Press Me
    </button>
  );
};
