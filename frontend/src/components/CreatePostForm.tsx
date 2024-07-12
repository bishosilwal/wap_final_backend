function CreatePostForm() {
  return (
    <div className="bg-white rounded-lg shadow-lg max-w-full min-w-full mb-3 hover:bg-gray-100 hover:shadow-gray-300">
      <h2 className="text-xl p-5 font-semibold text-gray-800">
        What's On Your Mind Today?
      </h2>
      <form id="create-post-form" className="space-y-6 px-5 pb-5">
        <div>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />
        </div>
        <div>
          <textarea
            id="body"
            name="body"
            rows={4}
            placeholder="Description"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-cyan-800 text-white px-4 py-2 rounded-lg font-semibold hover:bg-cyan-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreatePostForm;
