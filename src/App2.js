import { useState } from "react";

function App() {
  const [info, setInfo] = useState({
    name: 'Nguyen Van A',
    age: 18,
    address: 'Hue'
  });

  const handleUpdate = () => {
    setInfo({
      ...info,
      bio: 'Yêu màu hồng'
    });
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default App;
