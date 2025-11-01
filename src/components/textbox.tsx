export default function Textbox({ label, controlName, isRequired }: any) {
  return (
    <>

<div>
      <label htmlFor="price" className="block text-sm/6 font-medium text-white">{ label }</label>
      <div className="mt-2">
        <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-gray-600 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
          <input
            id="price"
            name="price"
            type="text"
            required
            className="block min-w-0 grow bg-gray-800 py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
          />
        </div>
        <p className="invisible peer-invalid:visible text-red-700 font-light">Please enter a valid '{ label }'</p>
      </div>
    </div>

    </>
  );
}