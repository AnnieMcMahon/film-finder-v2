export default function Form({genreList, onChange}) {

  return (
    <form>
      <label htmlFor="genres">Choose a genre:</label>
      <select name="genres" id="genres" onChange={(e) => onChange(e)}>
        {genreList.map((genre) => (
          <option value={genre.id} key={genre.id}>{genre.name}</option>
        ))}
      </select>
    </form>
  );
}