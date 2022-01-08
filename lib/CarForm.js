export default function CarForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = new FormData(event.target);
    const formData = Object.fromEntries(form.entries());

    console.log(formData);

    const res = await fetch('/api/cars', {
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const result = await res.json();
    console.log(result)
  };

//   body: JSON.stringify({
//     make: event.target.name.value,
//     model: event.target.model.value,
//     color: event.target.color.value,
//     year: event.target.year.value,
//     description: event.target.description.value,
//   }),

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="make">Make</label>
      <input name="make" type="text" />

      <label htmlFor="model">Model</label>
      <input name="model" type="text" />

      <label htmlFor="image">Image</label>
      <input name="image" type="text" />

      <label htmlFor="description">Description</label>
      <input name="description" type="text" />

      <button type="submit">Create Car</button>
    </form>
  );
}
