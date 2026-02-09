import React from 'react';

function Profile() {
  return (
    <main className="mx-auto max-w-6xl space-y-12 px-4 py-10">
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
            Profile
          </h1>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Your profile page content goes here.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Profile;
