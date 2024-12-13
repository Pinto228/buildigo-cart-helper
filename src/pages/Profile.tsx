import { Button } from "@/components/ui/button";

const Profile = () => {
  // Mock user data - replace with actual user data later
  const user = {
    name: "Максим",
    lastName: "Медведев",
    dateOfBirth: "07.09.2004",
    email: "john@example.com",
    joinDate: "Декабрь 2024",
  };

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">Профиль</h1>
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Имя
              </label>
              <p className="text-lg">{user.name}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Фимилия 
              </label>
              <p className="text-lg">{user.lastName}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Дата рождения
              </label>
              <p className="text-lg">{user.dateOfBirth}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <p className="text-lg">{user.email}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Дата регистрации
              </label>
              <p className="text-lg">{user.joinDate}</p>
            </div>
          </div>
          <Button className="mt-6">Редактировать профиль</Button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">История заказов</h2>
          <p className="text-gray-600">Заказов пока нет.</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;