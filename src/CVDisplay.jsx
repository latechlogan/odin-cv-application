export default function CVDisplay({ generalInfo, toggleEditMode }) {
  return (
    <>
      <h1>
        {generalInfo.firstName} {generalInfo.lastName}
      </h1>
      <p>
        <strong>{generalInfo.position}</strong>
      </p>
      <p>
        {generalInfo.phone}&ensp;|&ensp;{generalInfo.email}
      </p>
      <button onClick={toggleEditMode}>Edit</button>
    </>
  );
}
