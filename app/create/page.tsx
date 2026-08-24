export default function CreateListing() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
        <h1 className="text-2xl font-bold mb-2">Post What You Have</h1>
        <p className="text-gray-500 mb-8">Sell a product or offer a service to thousands of buyers.</p>
        
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Title</label>
            <input type="text" placeholder="e.g. 500kg of Fresh Tomatoes" className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-primary/20 outline-none" />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Price (RWF)</label>
              <input type="number" placeholder="500" className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-primary/20 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Category</label>
              <select className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-primary/20 outline-none">
                <option>Agriculture</option>
                <option>Electronics</option>
                <option>Services</option>
                <option>Wholesale</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Description</label>
            <textarea rows={4} placeholder="Describe what you are offering..." className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-primary/20 outline-none"></textarea>
          </div>

          <button className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-opacity-90 transition-all">
            Publish Listing
          </button>
        </form>
      </div>
    </div>
  );
                }
