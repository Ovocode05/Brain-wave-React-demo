import Button from "./components/Button";
import ButtonGradient from "./assets/svg/ButtonGradient";
function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Button className="mt-10">Something</Button>
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
