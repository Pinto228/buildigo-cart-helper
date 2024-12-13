import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Register = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log("Registration submitted");
  };

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6">Create Account</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Имя
            </label>
            <Input type="text" id="name" required />
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Фимилия
            </label>
            <Input type="text" id="lastName" required />
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Дата рождения
            </label>
            <Input type="text" id="dateOfBirth" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <Input type="email" id="email" required />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Пароль
            </label>
            <Input type="password" id="password" required />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium mb-2"
            >
              Подтвердить пароль
            </label>
            <Input type="password" id="confirmPassword" required />
          </div>
          <Button type="submit" className="w-full">
            Зарегистрироваться
          </Button>
        </form>
        <p className="mt-4 text-center text-sm">
          Уже есть аккаунт?{" "}
          <Link to="/login" className="text-accent hover:underline">
            Вход
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;