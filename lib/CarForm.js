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
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="make" className="form-label">
        Make
      </label>
      <input name="make" type="text" className="form-control" />

      <label htmlFor="model" className="form-label">
        Model
      </label>
      <input name="model" type="text" className="form-control" />

      <label htmlFor="image" className="form-label">
        Image
      </label>
      <input name="image" type="text" className="form-control" />

      <label htmlFor="description" className="form-label">
        Description
      </label>
      <textarea name="description" type="text" className="form-control" />

      <button className="btn btn-primary" type="submit">
        Create Car
      </button>
    </form>
  );
}
