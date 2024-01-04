export const Filter = ({ contactFilter }) => {
  return (
    <>
      <h3>Find contacts by name</h3>
      <input type="text" onChange={contactFilter} />
    </>
  );
};
