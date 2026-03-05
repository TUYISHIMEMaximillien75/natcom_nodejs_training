import {BrowserRouter, Routes, Route} from "react-router";
import Table from "./components/Table";
import Add from "./components/Add";
function App() {

  return (
    <>
    {/* <Table></Table> */}
      <h1>User for Natcom website</h1>
      <p>Welcome to the Natcom website! We are dedicated to providing you with the best communication services. Whether you're looking for mobile plans, internet packages, or customer support, we've got you covered. Explore our offerings and find the perfect solution for your communication needs.</p>
      <BrowserRouter>
        <Routes>
          <Route path="/table" element={<Table/>}></Route>
          <Route path="/add" element={<Add/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
