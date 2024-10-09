import "./styles.css";

//hoc
const withVisibility = (Component) => {
  return function ({ isVisible, ...props }) {
    if (!isVisible) return null;
    return <Component {...props} />;
  };
};

//simple Component
const SimpleComponent = ({ message }) => {
  return <div>{message}</div>;
};

const WrappedComponent = withVisibility(SimpleComponent);

export default function App() {
  return (
    <div className="App">
      <h1>Visibility HOC</h1>
      <WrappedComponent
        message="this message will be displayed"
        isVisible={true}
      />
      <WrappedComponent
        message="this componente never will appear"
        isVisible={false}
      />
    </div>
  );
}
