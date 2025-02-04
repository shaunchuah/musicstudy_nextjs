export default function CheckboxField({ id, label, register }) {
    return (
      <div>
        <input type="checkbox" id={id} {...register(id)} />
        <label htmlFor={id} className="ml-2">
          {label}
        </label>
      </div>
    );
  }