import { AuthForm } from "../components/AuthForm/AuthForm";

export default function Home() {

  return (
    <main className="main">
        <div style={{margin: '64px auto', maxWidth: '768px', padding: '64px', border: '4px solid black'}}>
            <AuthForm />
        </div>
    </main>
  );
}
