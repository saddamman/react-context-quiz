import { Button } from './Button';
import { Logo } from './Logo';

export const Header = () => {
  return (
    <header className="bg-white py-4 border ">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center ">
            <Logo className="w-10" />
            <b className="ms-2 font-mono">Quiz App</b>
          </div>
          <Button>Login</Button>
        </div>
      </div>
    </header>
  );
};
