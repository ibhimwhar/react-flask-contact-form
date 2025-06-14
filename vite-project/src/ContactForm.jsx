import React, { useState } from "react"
import { BiError } from "react-icons/bi";
import axios from "axios"

const ContactForm = () => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [message, setMessage] = useState(false)

  const HandleSubmit = (event) => {
    event.preventDefault();

    axios.post("http://127.0.0.1:5000/submit", { name, description })
      .then((res) => console.log("Fetched!"))
      .catch((res) => console.error("Error occured fetching data"))

    if (!name.trim() || !description.trim()) {
      setMessage(true)
      return;
    }

    setName("")
    setDescription("")
  }

  return (
    <main className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% flex justify-center items-center min-h-screen">

      <div className="bg-white ring-2 ring-sky-100 m-5 p-5 rounded">

        {/* Header Text */}
        <h1 className="text-3xl sm:text-4xl text-center mb-6">Join the newsletter</h1>


        {/* Form */}
        <form className="grid" onSubmit={HandleSubmit}>

          {/* Name Tags */}
          <label htmlFor="name" className="mb-2">Name</label>
          <input
            type="text"
            className="outline-none border border-neutral-300 focus:ring-2 ring-sky-500 p-1 rounded"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          {/* Error Message */}
          {message && !name.trim() && (
            <p className="text-[12px] mt-2 text-red-500 flex items-center gap-1">
              <BiError size={18} /> Please enter a valid name
            </p>
          )}

          {/* Email Tags */}
          <label htmlFor="description" className="mt-5 mb-2">Description</label>
          <textarea
            type="description"
            className="outline-none border border-neutral-300 focus:ring-2 ring-sky-500 p-1 rounded"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          {/* Error Message */}
          {message && !description.trim() && (
            <p className="text-[12px] mt-2 text-red-500 flex items-center gap-1">
              <BiError size={18} /> Please enter something
            </p>
          )}

          {/* Submit Button */}
          <button type="submit" className="bg-sky-600 hover:bg-sky-700 active:bg-sky-700 transition-colors text-white py-2 rounded mt-6 cursor-pointer">Subscribe</button>

        </form>

      </div>

    </main>
  )
}

export default ContactForm;
