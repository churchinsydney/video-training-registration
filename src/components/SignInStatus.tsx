import { signIn, signOut, useSession } from 'next-auth/react';

export default function SignInStatus() {
  const { data: session, status } = useSession();

  console.log('session', session, status);
  return (
    <div>
      <p>
        {session?.user && (
          <>
            {session.user.image && (
              <span
                style={{ backgroundImage: `url('${session.user.image}')` }}
              />
            )}
            <span>
              <small>Signed in as</small>
              <br />
              <strong>{session.user.email ?? session.user.name}</strong>
            </span>
            <a
              href={`/api/auth/signout`}
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              Sign out
            </a>
          </>
        )}
      </p>
    </div>
  );
}
