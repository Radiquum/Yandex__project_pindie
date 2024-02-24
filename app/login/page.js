import { AuthForm } from "../components/AuthForm/AuthForm";

export default function Home() {

  return (
    <main className="main">
        <div style={{margin: 'auto', maxWidth: '512px', paddingBlock: '64px'}}>
            <AuthForm />
        </div>
    </main>
  );
}
