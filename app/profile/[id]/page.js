export default async function PublicProfile({ params }) {
  const { id } = await params;

  return <h1>{id}</h1>;
}
