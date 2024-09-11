'use client';

export default function error({error}: {error: Error}) {
  return (
    <h1>Oooops! {error.message}</h1>
  )
}
