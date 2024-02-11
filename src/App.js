import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/profile";


function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      {/* <QueryClientProvider client={queryClient}> */}
        <BrowserRouter>
          {/* <UserContextProvider> */}
            <Routes>
              
              <Route exact path="/profile" element={<Profile />} />
              
              
            </Routes>
          {/* </UserContextProvider> */}
        </BrowserRouter>
      {/* </QueryClientProvider> */}
    </div>
  );
}

export default App;