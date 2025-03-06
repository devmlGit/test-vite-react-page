import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["pizza", "burger", "cake"];

  const handleSelectItem = function (item: string) {
    console.log(item);
  };

  const [isAlertOpen, setIsAlertOpen] = useState(false);

  return (
    <div>
      {isAlertOpen && (
        <Alert
          onClose={() => {
            setIsAlertOpen(false);
          }}
        >
          Hey
        </Alert>
      )}
      <ListGroup
        items={items}
        heading="Foods"
        onSelectItem={handleSelectItem}
      />
      <ListGroup
        items={["blue", "red"]}
        heading="Colors"
        onSelectItem={handleSelectItem}
      />
      <Button
        onBtnClick={() => {
          setIsAlertOpen(true);
          console.log("clicked!");
        }}
      >
        Click me
      </Button>
      <ListGroup
        heading={"Animals"}
        items={["monkey, donkey, giraffe"]}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
