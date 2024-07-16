const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Finn",
      animal: "Dog",
      breed: "Cockapoo",
    }),
    React.createElement(Pet, {
      name: "Spaz",
      animal: "Cat",
      breed: "Mix",
    }),
    React.createElement(Pet, {
      name: "Muggs",
      animal: "Dog",
      breed: "Cairn Terrier",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
