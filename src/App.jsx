import { FormContextProvider } from "./components/Context/FormContext.jsx";
import { Form } from "./components/Form/Form.jsx";
import styles from "./App.module.css";

export default function App() {
  return (
    <>
      <FormContextProvider>
        <main className={styles.main}>
          <Form />
        </main>
      </FormContextProvider>
    </>
  );
}
