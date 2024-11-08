import { FormContextProvider } from "./components/Context/FormContext.jsx";
import { Form } from "./components/Form/Form.jsx";

export default function App() {
  return (
    <>
      <FormContextProvider>
        <main>
          <Form />
        </main>
      </FormContextProvider>
    </>
  );
}
