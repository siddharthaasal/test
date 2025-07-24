export default function Testimonial() {
    return (
        <div className="flex flex-col items-center justify-center p-8 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-lg text-gray-700 mb-6">
                "Privue has transformed the way I manage my projects. The intuitive interface and powerful features make it a joy to use!"
            </p>
            <div className="flex items-center space-x-4">
                <img src="/path/to/avatar.jpg" alt="User Avatar" className="w-12 h-12 rounded-full" />
                <div>
                    <p className="font-semibold">Jane Doe</p>
                    <p className="text-sm text-gray-500">Project Manager</p>
                </div>
            </div>
        </div>
    );
}