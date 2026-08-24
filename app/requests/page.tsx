import { PlusCircle, MessageSquare } from 'lucide-react';
import Link from 'next/link';

const DUMMY_REQUESTS = [
  { id: '1', title: 'Need 2 Tons of Potatoes', location: 'Kigali', budget: 'Negotiable', deadline: 'In 3 days' },
  { id: '2', title: 'Looking for a House Painter', location: 'Gisenyi', budget: '50,000 RWF', deadline: 'This weekend' },
];

export default function RequestBoard() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Request Board</h1>
          <p className="text-gray-500">See what people are looking for and offer your supply.</p>
        </div>
        <Link href="/requests/new" className="bg-secondary text-white px-4 py-2 rounded-lg font-bold flex items-center">
          <PlusCircle className="h-5 w-5 mr-2" /> Post Request
        </Link>
      </div>

      <div className="space-y-4">
        {DUMMY_REQUESTS.map((req) => (
          <div key={req.id} className="bg-white border rounded-xl p-6 hover:border-secondary transition-colors shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{req.title}</h3>
                <p className="text-gray-500 text-sm mt-1">Location: {req.location} • Deadline: {req.deadline}</p>
              </div>
              <div className="text-right">
                <span className="text-secondary font-bold">{req.budget}</span>
                <button className="block mt-2 bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 border flex items-center">
                  <MessageSquare className="h-4 w-4 mr-2" /> Respond
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
            }
