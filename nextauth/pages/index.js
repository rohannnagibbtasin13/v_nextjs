import Head from 'next/head'
import {signIn, signOut, useSession} from 'next-auth';
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  const [session, loading] = useSession();
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {!session && (
          <>
            Not signed in <br/>
            <button onClick={signIn}>Sign In </button>
          </>
        )}

        {
          session && (
            <>
              Signed in as {session.user.email}
              <div>
                You can now access our super secret pages
              </div>
              <button>
                <Link href="/secret">To the secret</Link>
              </button>
              <button onClick={signOut}>Sign out</button>
            </>
          )
        }
      </main>
    </div>
  )
}
