import { Button } from "@/components/ui/button";

const Profile = () => {
  // Mock user data - replace with actual user data later
  const user = {
    name: "John Doe",
    email: "john@example.com",
    joinDate: "January 2024",
  };

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">My Profile</h1>
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Name
              </label>
              <p className="text-lg">{user.name}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <p className="text-lg">{user.email}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Member Since
              </label>
              <p className="text-lg">{user.joinDate}</p>
            </div>
          </div>
          <Button className="mt-6">Edit Profile</Button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Order History</h2>
          <p className="text-gray-600">No orders yet.</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;