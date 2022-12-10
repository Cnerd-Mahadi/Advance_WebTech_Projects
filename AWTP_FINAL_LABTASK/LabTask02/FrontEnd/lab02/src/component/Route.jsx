import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import SubmitForm from "./SubmitForm";
import { Table } from "./Table";

export default function Route() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Table />}>
          <Route index element={<SubmitForm />} />
          <Route path="blogs" element={<LoginForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
