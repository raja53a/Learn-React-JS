export const EventProps = () => {
  const HandleUserName = (e) => {
    alert(`Hey., ${e}`);
  };

  const handleMouse = () => {
    alert("Mouse is Hovered");
  };

  return (
    <>
      <WelcomeUser
        onClick={() => HandleUserName("Admin")}
        onMouseEnter={handleMouse}
      />
    </>
  );
};

/* export default EventProps; */

const WelcomeUser = ({ onClick, onMouseEnter }) => {
  const greetingHere = () => {
    console.log("Own Effect is Called");
    alert("This is called by own");
  };
  return (
    <>
      <button onClick={onClick}>Click Me - OnClick</button>
      <br />
      <button onMouseEnter={onMouseEnter}>Hover Me - MouseHover</button>
      <br />
      <button onClick={greetingHere}>Own Effect</button>
    </>
  );
};
